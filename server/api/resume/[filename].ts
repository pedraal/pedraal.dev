import puppeteer from "puppeteer"

export default defineCachedEventHandler(async (event) => {
  const query = getQuery(event)
  const config = useRuntimeConfig()

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: config.chromePath,
    args: config.chromePath ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
  })
  const page = await browser.newPage()
  if (query.theme === 'dark')
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'dark' },
    ])
  await page.goto(`${config.appOrigin}/resume_html?theme=${query.theme}`, { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true })
  await browser.close()

  setResponseHeader(event, 'Content-Type', 'application/pdf')
  setResponseHeader(event, 'Content-Disposition', 'inline; filename="cv-pierre-golfier.pdf"')

  return pdf
}, {
  maxAge: 60 * 60 * 24 * 7 * 365,
})
