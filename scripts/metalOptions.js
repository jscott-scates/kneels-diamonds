import { setMetalId } from "./transientState.js"

const handleMetalChange = (metalSelectedChangeEvent) => {
    if(metalSelectedChangeEvent.target.name === "metalOptions"){
        const convertedToInteger = parseInt(metalSelectedChangeEvent.target.value)
        setMetalId(convertedToInteger)
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener(
        "click",
        handleMetalChange
    )

    let metalsHTML = ""
    const metalStringArray = metals.map(
        (metal) => {
            return `
                <div>
                    <input type='radio' name='metalOptions' value=${metal.id}/>${metal.metal}
                </div>
            `
        }
    )

    metalsHTML += metalStringArray.join ("")
    //for (const metal of metals) {
      //  metalsHTML += `<input type='radio' name='metalOptions' value=${metal.id}/> ${metal.metal}`
    //}
    return metalsHTML
}

