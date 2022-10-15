let sectionNewOrder = document.querySelector(".active")
let sectionRegisterProduct = document.querySelector(".inactive")

let btnNewOrder = document.querySelector(".newOrder");
let selectType = document.querySelector("#selectType");

let inputSearchProduct = document.querySelector('#inputSearch');
let btnSearch = document.querySelector('.search');
let inputQty = document.querySelector('#qty');
let inputProduct = document.querySelector('#product');
let inputPrice = document.querySelector('#price');
let btnAdd = document.querySelector('#add');
let tableBody = document.querySelector('.tableBody');
let trDefaultImage = document.querySelector('.imageBasket');
let btnCancel = document.querySelector('.cancel');
let btnSave = document.querySelector('#save');


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