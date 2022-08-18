export default function counterLabel(votes: number): string {
  if (votes > 1000) return `${Math.floor(votes / 100) / 10}k`
  return `${votes}`
}
