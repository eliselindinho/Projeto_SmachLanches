let menu = [
  {
    code: 1001,
    product: "Super SMACH COMBO Programado – Hambúrguer + Fritas",
    price: 55,
  },
  {
    code: 1002,
    product: "SMACH VariavelBurguer – Hambúrguer com bacon",
    price: 45,
  },
  {
    code: 1003,
    product: "SMACH BUG EM PROD – Hambúrguer meio torto",
    price: 25,
  },
  {
    code: 1004,
    product: "Combo Econômico SMACH Char 1 – Pão com Carne",
    price: 15,
  },
  {
    code: 1005,
    product: "Especial SMACH CSS – Hambúrguer colorido e alinhado",
    price: 65,
  },
  {
    code: 2001,
    product: "Refrigerante 350 ml",
    price: 8,
  },
  {
    code: 2002,
    product: "Água 500 ml",
    price: 5,
  },
  {
    code: 2003,
    product: "Suco 350 ml",
    price: 7,
  },
  {
    code: 3001,
    product: "Sorvete 300 ml",
    price: 15,
  },
  {
    code: 3002,
    product: "Sobremesa doce SMACH ARRAY",
    price: 50,
  },
];

let sectionNewOrder = document.querySelector(".active");
let sectionRegisterProduct = document.querySelector(".inactive");

let btnNewOrder = document.querySelector(".newOrder");
let selectType = document.querySelector("#selectType");

let inputSearchProduct = document.querySelector("#inputSearch");
let btnSearch = document.querySelector(".search");
let inputQty = document.querySelector("#qty");
let inputProduct = document.querySelector("#product");
let inputPrice = document.querySelector("#price");
let btnAdd = document.querySelector("#add");
let tableBody = document.querySelector(".tableBody");
let trDefaultImage = document.querySelector(".imageBasket");
let btnCancel = document.querySelector(".cancel");
let btnSave = document.querySelector("#save");

let newOrder = () => {
  sectionNewOrder.setAttribute("class", "inactive");
  sectionRegisterProduct.setAttribute("class", "active main");
};

let valueInputSearch = () => {
  let valueInputSearchProduct = inputSearchProduct.value;
  let objectProduct = menu.find(product => product.code == valueInputSearchProduct);
  console.log(objectProduct)
};

let updateSelect = () => {
  let opValue = selectType.options[selectType.selectedIndex];
  let value = opValue.value;
  console.log(value);
};

btnNewOrder.addEventListener("click", newOrder);
btnSearch.addEventListener("click", valueInputSearch);
selectType.addEventListener("change", updateSelect);
