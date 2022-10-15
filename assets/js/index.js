let sectionNewOrder = document.querySelector(".active")
let sectionRegisterProduct = document.querySelector(".inactive")
let btnNewOrder = document.querySelector(".newOrder");

let selectType = document.querySelector("#selectType");


let newOrder = () => {
    sectionNewOrder.setAttribute("class", "inactive")
    sectionRegisterProduct.setAttribute("class", "active main")
}

let updateSelect = () => {
    let opValue = selectType.options[selectType.selectedIndex];
    let value = opValue.value;
    console.log(value)
}

btnNewOrder.addEventListener('click', newOrder);
selectType.addEventListener('change', updateSelect)