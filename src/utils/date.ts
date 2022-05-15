export const getUtcDate = (date: string): string => {
  const dateObj = new Date(date)
  const utcDate = new Date(
    dateObj.getTime() + dateObj.getTimezoneOffset() * 60000
  )
  return utcDate.toLocaleDateString('pt-BR')
}
