import { MetalOptions } from './metalOptions.js'
import { submittedOrdersList } from './orders.js'
import { saveSubmission } from './saveOrderSubmission.js'
import { SizeOptions } from './sizeOptions.js'
import { StyleOptions } from './styleOptions.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalsHTML = await MetalOptions()
    const stylesHTML = await StyleOptions()
    const sizesHTML = await SizeOptions()
    const submissionButton =  saveSubmission()
    const ordersListHTML = await submittedOrdersList()
   

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizesHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${stylesHTML}
            </section>
        </article>
        <article class="order">
        ${submissionButton}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newCustomOrder", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
render()

