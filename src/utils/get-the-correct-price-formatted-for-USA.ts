export const getTheCorrectPriceFormattedForUSA = (
  productPrice: string,
  productPromotionalPrice: string | undefined
) => {
  let price
  productPromotionalPrice ?
    price = productPromotionalPrice :
    price = productPrice

  const formattedPrice = Number(
    price
      .replace('R$', '')
      .replace('.', '')
      .replace(',', '.')
  )

  return formattedPrice
}
