export default function BurguerHtml(img, name, description, price) {
    let div = document.createElement("div")
    div.classList.add("flex", "gap-2", "mx-auto", "w-96")
    let item = `
                <img src=${img} class="rounded-xl" alt="">
                <div class="flex flex-col justify-between">
                    <div>
                        <h3 class="font-bold">${name}</h3>
                        <p class="text-xs">${description}</p>
                    </div>
                    <div class="flex justify-between">
                        <p class="font-bold">R$<span>${price}</span></p>
                        <button class="text-white hover:cursor-pointer rounded-full px-6 bg-red-blood">Adicionar</button>
                    </div>
                </div>`
    div.innerHTML = item
    return div
}