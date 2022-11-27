export function roundNumber(num: number, decimals?: number) {
  const decimalsPerCent = Math.pow(10, decimals || 2)
  return Math.round((num + Number.EPSILON) * decimalsPerCent) / decimalsPerCent
}
