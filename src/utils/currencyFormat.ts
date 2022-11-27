export function currencyFormat(num: number) {
  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
