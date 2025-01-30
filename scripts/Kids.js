import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    //create function that runs when clicked
    (clickEvent) => {
        const clickTarget = clickEvent.target
        //make sure that the clicked target is a Child
        if(clickTarget.dataset.type === "child"){
            //iterate through all child objects to find the clicked target
            for (const child of children) {
                if(child.id === parseInt(clickTarget.dataset.id)){
                    //display child's wish
                    window.alert(`${child.name}'s wish is ${child.wish}`)
                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}" data-name="${child.name}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

