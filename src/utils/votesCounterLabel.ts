export default function votesCounterLabel(votes: number) {
  if (votes > 1000) return `${Math.round(votes / 100) / 10}k`
  return `${votes}`
}
