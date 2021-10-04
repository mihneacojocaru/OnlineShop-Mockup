import Product from "./JS/model/products.js";
import ControllerProducts from "./JS/controller/controllerProd.js"
import ViewHome from "./JS/view/ViewHome.js";
import ViewLogin from "./JS/view/ViewLogin.js";


let x = new ControllerProducts();

console.log(x.returnProductObject("Produs 3"));


let viewHome = new ViewHome();

let nrOfCards = 4;

viewHome.setNumberOfCards(nrOfCards);

let user = document.addEventListener('click', e => {
    e.preventDefault();
    let obj = e.target;
    if(obj.parentNode.className == "user"){
        let viewLogin = new ViewLogin();
    }else if(obj.className == "close"){
        let viewHome = new ViewHome();
        viewHome.setNumberOfCards(nrOfCards);
    }
    
});






