import Product from "./JS/model/products.js";
import ControllerProducts from "./JS/controller/controllerProd.js"
import ViewHome from "./JS/view/ViewHome.js";
import Customers from "./JS/model/customers.js";


let viewHome = new ViewHome();

let nrOfCards = 2;

viewHome.setNumberOfCards(nrOfCards);
