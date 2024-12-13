// Set up the transient state data structure with initial values
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}

//Functions to modify each property of the transient state (3 functions, one for size, one for style, and one for metal.)
export const setMetalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

//Function that converts a transientState into a placedOrder
export const savePlacedOrder = async () => { 
    const postOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch('http://localhost:8088/orders', postOptions)

    const customEvent = new CustomEvent("newCustomOrder")
document.dispatchEvent(customEvent)
}