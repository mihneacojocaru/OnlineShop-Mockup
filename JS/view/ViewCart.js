import ControllerOrderDetails from "../controller/controllerOrderDetails.js";
import ControllerProducts from "../controller/controllerProd.js";
import ViewHome from "./ViewHome.js";

//control products

//control details

export default class ViewCart{

    constructor(order){

        this.ctrlOrderDetails = new ControllerOrderDetails();
        this.ctrlProducts = new ControllerProducts();

        this.main = document.querySelector('main');
        this.main.innerHTML = "";

        this.cart = document.createElement('div');
        this.cart.className = "shopping--cart";
        this.allOfIt();
        this.main.appendChild(this.cart);

        this.prodCont = document.querySelector(".cart--container");
        
        this.goBack();
        this.order=order;

        console.log(this.order);
        this.attachCards();

    }



    allOfIt = () => {
        let myContent = `<div class="top--section">
        <span id="continueShopping">&laquo; Continue shopping</span>
    </div>
    <div class="bottom--section">
        <div class="your--cart">
            <div class="cart-title">
                <span>Your Cart</span>
                <span>(2)</span>
            </div>
            <div class="cart--container"></div>
        </div>
        <div class="summary--container">
            <div class="summary summary--top">
                <h3>Summary</h3>
            </div>
            <div class="summary summary--middle">
                <div class="two-elements">
                    <h5>Subtotal</h5>
                    <h5>350€</h5>
                </div>
                <div class="two-elements">
                    <h5>Tax</h5>
                    <h5>25€</h5>
                </div>
                <div class="two-elements total">
                    <h5>TOTAL</h5>
                    <h5>375€</h5>
                </div>
            </div>
            <div class="summary summary--bottom">
                <button>Checkout</button>
            </div>
        </div>
    </div>`;
        
        this.cart.innerHTML += myContent;
    }

    cartElement = (obj ,quantity) => {
        let element = `
        <div class="cart--element">
        <div class="product--image">
            <img src="${obj.image}" alt="product">
        </div>
        <div class="product--info">
            <div class="info--subcontainer">
                <p>${obj.name}</p>
                <span>${obj.description}</span>
                <div class="button--elements">
                    <label>Quantity</label>
                    <input id="itemQuantity" type="number" min="1" max="1000" placeholder="${quantity}">
                    <button>Remove</button>
                </div>
            </div>
            <div class="price">
                <span>${obj.price*quantity}€</span>
            </div>
        </div>
    </div>
        `;

        return element;
    }

    goBack = () => {
        let continueShopping = document.getElementById("continueShopping");
        continueShopping.addEventListener("click", () => {
            new ViewHome();
        })
    }

    attachCards = () => {
    
        let orderDetails=this.ctrlOrderDetails.returnDetailsByOrder(this.order.id);

        console.log(orderDetails);
         let cards="";

         orderDetails.forEach(element => {

            
             let product=this.ctrlProducts.returnProductObject(element.productId);

             cards+=this.cartElement(product,element.quantity);

             
         });

         this.prodCont.innerHTML = cards;


    }



}