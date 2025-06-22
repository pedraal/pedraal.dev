export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  setResponseHeader(event, 'Content-Type', 'application/pdf')
  setResponseHeader(event, 'Content-Disposition', 'inline; filename="cv-pierre-golfier.pdf"')

  const pdf = await printPdf(query.theme === 'dark')

  return Buffer.from(pdf)
})
