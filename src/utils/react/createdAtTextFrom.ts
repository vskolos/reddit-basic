export function createdAtTextFrom(from: number) {
  const now = Math.floor(Date.now() / 1000)
  const seconds = now - from
  const minutes = Math.floor((now - from) / 60)
  const hours = Math.floor((now - from) / (60 * 60))
  const days = Math.floor((now - from) / (60 * 60 * 24))

  if (days > 0) return `${days} дн. назад`
  if (hours > 0) return `${hours} ч. назад`
  if (minutes > 0) return `${minutes} мин. назад`
  if (seconds > 0) return `${seconds} сек. назад`
  return 'только что'
}
