import instruments from "../products.json" assert {type : "json"};

const refs = {
    productsList: document.getElementById("productsList"),
};

const PRODUCTS_LS_KEY = "checkout";