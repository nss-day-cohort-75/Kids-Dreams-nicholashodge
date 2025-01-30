import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    //create function that runs when clicked
    (clickEvent) => {
        const clickTarget = clickEvent.target
        //make sure that the clicked target is a Celebrity
        if(clickTarget.dataset.type === "celebrity"){
            //iterate through all celebrity objects to find the clicked target
            for (const celebrity of celebrities) {
                if(celebrity.id === parseInt(clickTarget.dataset.id)){
                    //display celebrity's sport
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
                }
            }
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
