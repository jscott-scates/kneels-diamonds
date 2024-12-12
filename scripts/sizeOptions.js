import { setSizeId } from "./transientState.js"

const handleSizeChange = (sizeSelectedChangeEvent) => {
    if (sizeSelectedChangeEvent.target.name === 'sizeOptions') {
        const convertedToInteger = parseInt(sizeSelectedChangeEvent.target.value)
        setSizeId(convertedToInteger)
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    // Fill in the rest
    const sizes = await response.json()

    document.addEventListener(
        "change",
        handleSizeChange
    )

    let optionsHTML = ""
    const sizeStringArray = sizes.map(
        (size) => {
            return `
                <div>
                    <input type='radio' name='sizeOptions' value=${size.id}/> ${size.carets} Carets
                </div>
            `
        }
    )
    optionsHTML += sizeStringArray.join("")

    //for (const size of sizes) {
    //    optionsHTML += `<input type='radio' name='sizeOptions' value=${size.id}/> ${size.carets} Carets`
    //}
    
    return optionsHTML
}