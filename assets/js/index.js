let sectionNewOrder = document.querySelector(".active")
let sectionRegisterProduct = document.querySelector(".inactive")
let btnNewOrder = document.querySelector(".newOrder");

let selectType = document.querySelector("#selectType");
let opType = selectType.options[selectType.selectedIndex].value;

console.log(opType)

let newOrder = () => {
    sectionNewOrder.setAttribute("class", "inactive")
    sectionRegisterProduct.setAttribute("class", "active main")
}

btnNewOrder.addEventListener('click', newOrder);