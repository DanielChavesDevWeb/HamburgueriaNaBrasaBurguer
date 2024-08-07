import MenuBurguers from "../components/MenuBurguers.js"
import BurguerHtml from "../components/BurguerHtml.js"

const DivMenu = document.querySelector("#Menu")

function addMenuBurguers() {
    MenuBurguers.forEach((burguer) => {
       let {img, name, description, price} = burguer
       let item = BurguerHtml(img, name, description, price.toFixed(2))
       DivMenu.appendChild(item)
    })
}

addMenuBurguers()