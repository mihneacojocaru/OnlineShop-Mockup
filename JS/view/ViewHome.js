import ControllerCustomers from "../controller/controllerCustomers.js";
import ControllerProducts from "../controller/controllerProd.js";
import ControllerOrders from "../controller/controllerOrders.js";

import Customers from "../model/customers.js";
import Orders from "../model/orders.js"

import ViewDetails from "./ViewDetails.js";
import ViewCart from "./ViewCart.js";


export default class ViewHome{

    constructor(){

        this.customer = new Customers("c1234","john.doe@example.com","password","John Doe","First Street 123","Second Street 321","USA","+900123123123");

        this.customer.returnCustomersText();

        this.controllerCustomers = new ControllerCustomers();

        this.controllerOrders = new ControllerOrders();

        this.controllerProduct = new ControllerProducts();
        
        this.container = document.querySelector(".container");
        
        this.callMainPage();
        
    }


    //+++ Frontend Functions

    callMainPage = () => {
        this.container.innerHTML = "";
        this.nav = document.createElement('nav');
        this.container.appendChild(this.nav);
        this.setNavBar();

        this.main = document.createElement('main');
        this.container.appendChild(this.main);
        this.setMain();

        this.footer = document.createElement('footer');
        this.container.appendChild(this.footer);
        this.setFooter();

        this.cardContainer = document.querySelector('.card-container');

        this.appendCardsToPage();  
        
        this.loginView();

        this.shoppingCart = document.querySelector('.shopping-cart');
        this.shoppingCart.addEventListener("click",this.onShoppingCartClick);


    }
    
    setNavBar = () => {
        const navbar = `<div class="logo">
                            <h3><a id="homePage" href="#">Online Shop</a></h3>
                        </div>
                        <div class="icons">
                            <div class="user"><i class="fas fa-user"> User</i></div>
                            <div class="shopping-cart"><i class="fas fa-shopping-cart"></i></div>
                        </div>`;

        this.nav.innerHTML += navbar;
    }

    setMain = (title="School supplies") => {
        const h2 = `<h2>${title}</h2>`;
        const cardContainer = `<div class="card-container"></div>`;
        this.main.innerHTML += h2;
        this.main.innerHTML += cardContainer;
    }

    setCard = (obj) => {
        const card = document.createElement('div');
        card.className = "card click";
        card.innerHTML=`
                        <div class="img">
                            <img src="${obj.image}" alt="${obj.name}">
                        </div>
                        <div class="title">
                            <p>${obj.name}</p>
                        </div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="price">
                            <span>${obj.price}€</span>
                        </div>
                    `;

        card.addEventListener("click", this.onCardClick);

        this.cardContainer.appendChild(card);

    }

    appendCardsToPage = () => {
        let productList =  this.controllerProduct.list;

        productList.forEach( e => {
            this.setCard(e);
        });
    }

    setFooter = () => {
        const footer = `<div class="f-left">
        <p>&#169; 2021 MihneaCo</p>
        <p>Al rights reseved</p>
    </div>
    <div class="f-right">
        <span><a href="#">About Us</a></span>
        <span><i class="fab fa-facebook"></i></span>
        <span><i class="fab fa-instagram"></i></span>
        <span><i class="fab fa-linkedin"></i></span>
    </div>`;

        this.footer.innerHTML += footer;
    }

    setLogin = () => {
        let loginPage = `<div class="log-in">
                        <div class="log-in-container">
                            <span class="close">x</span>
                            <h2>Login</h2>
                            <form>
                                <input type="text" placeholder="Username">
                                <input type="text" placeholder="Password">
                                <button>Login</button>
                            </form>
                        </div>
                    </div>`;

        this.container.innerHTML = "";
        this.container.innerHTML += loginPage;

        let closeBtn = document.querySelector('.close');
        closeBtn.addEventListener("click",this.callMainPage);

    }

    loginView = () => {
        let userBtn = document.querySelector('.user');
        userBtn.addEventListener("click",this.setLogin);     
    }

    onCardClick =  e => {
        let obj = e.target;
        let productName = "";

        if(obj.tagName == "DIV"){
            productName = obj.children[1].children[0].textContent;
        } else if(obj.tagName == "IMG"){
            productName = obj.parentNode.parentNode.children[1].children[0].textContent;
        } else if(obj.tagName == "P"){
            productName = obj.parentNode.parentNode.children[1].children[0].textContent
        } else if(obj.tagName == "I"){
            productName = obj.parentNode.parentNode.children[1].children[0].textContent;
        } else if(obj.tagName == "SPAN"){
            productName = obj.parentNode.parentNode.children[1].children[0].textContent;
        }

        const clickedObj = this.controllerProduct.returnProductObject(productName);

        new ViewDetails(clickedObj,this.order);
    }

    onShoppingCartClick = () => {
        new ViewCart();
    }

    //+++ Backend Functions

    //** Add New Order Based on current customer
    addOrder = (currentCustomer) => {
        this.controllerOrders.addNewOrder(
            this.controllerOrders.nextOrderId(),
            this.controllerCustomers.returnCustomerObject(currentCustomer).id,
            0,
            this.controllerCustomers.returnCustomerObject(currentCustomer).default_shipping_address,
            this.controllerCustomers.returnCustomerObject(currentCustomer).billing_address,
            this.controllerCustomers.returnCustomerObject(currentCustomer).email,
            "in processing"
        );
    }

}

