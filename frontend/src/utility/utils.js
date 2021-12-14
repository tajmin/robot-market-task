export const formattedPrice = (price) => {
    let parsedPrice = parseFloat(price);
    let priceFormatter = new Intl.NumberFormat('th-TH',
        {
            style: 'currency',
            currency: 'THB'
        })
    let formattedPrice = priceFormatter.format(parsedPrice);
    return formattedPrice;

}