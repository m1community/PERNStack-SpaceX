
export const priceFormatter = (price?: number) => {

    if(!price) return

    var formatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    })

    return formatter.format(price)
}