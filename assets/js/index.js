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
let tableFooter = document.querySelector(".tableFooter");
let trDefaultImage = document.querySelector(".imgBasket");
let btnCancel = document.querySelector(".cancel");
let btnSave = document.querySelector("#save");
let arrayMultiply = [];
let arrayItemsOrder = [];

let newOrder = () => {
  sectionNewOrder.setAttribute("class", "inactive");
  sectionRegisterProduct.setAttribute("class", "active main");
};

let objectProduct = undefined;

let valueInputSearch = () => {
  let valueInputSearchProduct = inputSearchProduct.value;
  objectProduct = menu.find(
    (product) => product.code == valueInputSearchProduct
  );
  if (objectProduct !== undefined) {
    inputProduct.setAttribute("placeholder", `${objectProduct.product}`);
    inputPrice.setAttribute(
      "placeholder",
      `${objectProduct.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}`
    );
  } else {
    alert("Código inválido");
  }
};

let addProduct = () => {
  let valueInputQty = inputQty.value;
  let multiply = valueInputQty * objectProduct.price;
  arrayMultiply.push(multiply);
  let sum = arrayMultiply.reduce((inicial, atual) => inicial + atual, 0);

  trDefaultImage.setAttribute("class", "inactive");

  cleanForm();
  arrayItemsOrder.push({
    code: objectProduct.code,
    product: objectProduct.product,
    qty: valueInputQty,
    price: multiply
  })
  tableBody.innerHTML += `<tr>
                          <td>${objectProduct.code}</td>
                          <td>${objectProduct.product}</td>
                          <td>${valueInputQty}</td>
                          <td>${multiply.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}</td>
                          </tr>`;
  tableFooter.innerHTML = `<tr>
                            <td>Total do pedido: ${sum.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}</td>
                            </tr>`;
};

let cleanForm = () => {
  inputProduct.setAttribute("placeholder", "Nome do produto");
  inputPrice.setAttribute("placeholder", "R$00.00");
  inputSearchProduct.value = "";
  inputQty.value = "";
};

let updateSelect = () => {
  let opValue = selectType.options[selectType.selectedIndex];
  let value = opValue.value;
  console.log(value);
};

btnNewOrder.addEventListener("click", newOrder);
btnSearch.addEventListener("click", valueInputSearch);
btnAdd.addEventListener("click", addProduct);
selectType.addEventListener("change", updateSelect);
