import { setStyleId } from "./transientState.js"

const handleStyleChange = (styleSelectedChangeEvent) => {
    if(styleSelectedChangeEvent.target.name === 'styleOptions'){
        const convertedToInteger = parseInt(styleSelectedChangeEvent.target.value)
        setStyleId(convertedToInteger)
    }
}

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    //fill in the rest
    const styles = await response.json()

    document.addEventListener(
        "change",
        handleStyleChange
    )

    let optionsHTML = ""
    const stylesStringArray = styles.map(
        (style) => {
            return `
                <div>
                    <input type='radio' name='styleOptions' value=${style.id}/> ${style.style}
                </div>
            `
        }
    )

    optionsHTML += stylesStringArray.join("")
    //for (const style of styles) {
    //    optionsHTML += `<input type='radio' name='styleOptions' value=${style.id}/> ${style.style}`
    //}
    return optionsHTML
}