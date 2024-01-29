import puppeteer from "puppeteer"

export const cachedPrintPdf = defineCachedFunction(async (path: string, dark: boolean) => {
  const config = useRuntimeConfig()

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: config.chromePath,
    args: [
      '--disable-features=IsolateOrigins',
      '--disable-site-isolation-trials',
      '--autoplay-policy=user-gesture-required',
      '--disable-background-networking',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-component-update',
      '--disable-default-apps',
      '--disable-dev-shm-usage',
      '--disable-domain-reliability',
      '--disable-extensions',
      '--disable-features=AudioServiceOutOfProcess',
      '--disable-hang-monitor',
      '--disable-ipc-flooding-protection',
      '--disable-notifications',
      '--disable-offer-store-unmasked-wallet-cards',
      '--disable-popup-blocking',
      '--disable-print-preview',
      '--disable-prompt-on-repost',
      '--disable-renderer-backgrounding',
      '--disable-setuid-sandbox',
      '--disable-speech-api',
      '--disable-sync',
      '--hide-scrollbars',
      '--ignore-gpu-blacklist',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-default-browser-check',
      '--no-first-run',
      '--no-pings',
      '--no-sandbox',
      '--no-zygote',
      '--password-store=basic',
      '--use-gl=swiftshader',
      '--use-mock-keychain'
    ],
  })
  const page = await browser.newPage()
  if (dark)
    await page.emulateMediaFeatures([
      { name: 'prefers-color-scheme', value: 'dark' },
    ])
  await page.goto(`${config.appOrigin}/resume_html`, { waitUntil: 'networkidle0' })
  const pdf = await page.pdf({ format: 'A4', preferCSSPageSize: true })
  await browser.close()

  return pdf
}, {
  maxAge: 60 * 60 * 24 * 7 * 365,
  getKey: (path: string, dark: boolean) => path + '-' + dark,
})
