export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  setResponseHeader(event, 'Content-Type', 'application/pdf')
  setResponseHeader(event, 'Content-Disposition', 'inline; filename="cv-pierre-golfier.pdf"')

  const pdf = await cachedPrintPdf(`${config.appOrigin}/resume_html`, query.theme === 'dark')

  return Buffer.from(pdf)
})
