export const submittedOrdersList = async () => {
    const response = await fetch('http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size')
    const orders = await response.json()


    let ordersHTML = ''
    const ordersStringArray = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `
                <section class="order">
                    <div>Order #${order.id} cost $${orderPrice}</div>
                </section>
            `
        }
    )
    ordersHTML += ordersStringArray.join("")
    return ordersHTML
}