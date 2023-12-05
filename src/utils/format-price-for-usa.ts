export const formatPriceForUSA = (price: string) => {
  const formattedPrice = Number(
    price
      .replace('R$', '')
      .replace('.', '')
      .replace(',', '.')
  )

  return formattedPrice
}
