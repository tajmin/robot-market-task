//Price formatter for Thai locale
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
//formats date for Thai locale
export const formattedDate = (dateString) => {
    let parsedDate = new Date(dateString);
    let day = parsedDate.getDate();
    day = day < 10 ? '0' + day : day;

    let month = parsedDate.getMonth();
    month = month < 10 ? '0' + month : month;

    let year = parsedDate.getFullYear();

    let formattedDate = day + '-' + month + '-' + year;
    return formattedDate;
}