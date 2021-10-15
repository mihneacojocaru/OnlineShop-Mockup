import ViewHome from "./ViewHome.js";


export default class ViewCart{

    constructor(order){

        this.main = document.querySelector('main');
        this.main.innerHTML = "";

        this.cart = document.createElement('div');
        this.cart.className = "shopping--cart";
        this.allOfIt();
        this.main.appendChild(this.cart);

        this.goBack();

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
            <div class="cart--container">
                <div class="cart--element">
                    <div class="product--image">
                        <img src="https://s13emagst.akamaized.net/products/20507/20506551/images/res_76761b3617cbb5c268a0b62319565011.jpg?width=450&height=450&hash=E5C7983230CE05E06DEF75CF697390BF" alt="product">
                    </div>
                    <div class="product--info">
                        <div class="info--subcontainer">
                            <p>Masina Electrica Gazon</p>
                            <span>Description</span>
                            <div class="button--elements">
                                <label>Quantity</label>
                                <input id="itemQuantity" type="number" min="0" max="1000">
                                <button>Remove</button>
                            </div>
                        </div>
                        <div class="price">
                            <span>100€</span>
                        </div>
                    </div>
                </div>
                
            </div>
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

    cartElement = (obj) => {
        let element = `
        <div class="cart--element">
        <div class="product--image">
            <img src="${obj.image}" alt="product">
        </div>
        <div class="product--info">
            <div class="info--subcontainer">
                <p>${obj.name}</p>
                <span>Description</span>
                <div class="button--elements">
                    <label>Quantity</label>
                    <input id="itemQuantity" type="number" min="0" max="1000">
                    <button>Remove</button>
                </div>
            </div>
            <div class="price">
                <span>${obj.price}/span>
            </div>
        </div>
    </div>
        `;
    }

    goBack = () => {
        let continueShopping = document.getElementById("continueShopping");
        continueShopping.addEventListener("click", () => {
            new ViewHome();
        })
    }


}