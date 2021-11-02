import OrderDetails from "../model/orderDetails.js";

import ControllerOrderDetails from "../controller/controllerOrderDetails.js";
import ControllerProducts from "../controller/controllerProd.js";
import ControllerOrders from "../controller/controllerOrders.js";


import ViewHome from "./ViewHome.js";

export default class ViewDetails{

    constructor(obj ,order){

        this.container = document.querySelector(".container");
        
        this.controllerOrderDetails = new ControllerOrderDetails();

        this.controllerProduct = new ControllerProducts();

        this.products = this.controllerProduct.list;

        this.produs=obj;
        this.order=order;
        
        this.main = document.querySelector('main');

        this.setMainDetails();


        this.addToCart = document.getElementById('addToCart');
        
        this.addToCart.addEventListener("click",this.onAddToCart);


    }

    setMainDetails = () => {
        this.main.innerHTML = "";

        this.main.innerHTML += this.createDetailView(this.produs);

        let btn = document.querySelector(".go-back");
        btn.addEventListener("click",this.goBack);
        
    }
    
    createDetailView(obj){
        let detailView = `<div class="view--details">
                            <span class="go-back">go back...</span>
                            <div class="title">
                                <p>${obj.description}</p>
                            </div>
                            <div class="details">
                                <div class="prod-img">
                                    <img style="width: 400px;" src="${obj.image}" alt="${obj.name}">
                                </div>
                                <div class="prod-info">
                                    <p>${obj.name}</p>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="price"><p>${obj.price}€</p></div>
                                    <button id="addToCart">Add to cart</button>
                                </div>
                            </div>
                            </div>`;
        return detailView;
        
    }

    goBack = (e) => {
        e.preventDefault();
            let obj = e.target;
            if(obj.classList.contains("go-back")){
                new ViewHome;
            }
    }

    onAddToCart = () => {    

    let detalii = new OrderDetails(
    this.controllerOrderDetails.nextOrderDetailsId(),
    this.order.id,
    this.produs.id,
    this.produs.price,
    1
    );


    //updatez stocul produsului 
    //updatez order 
    //verificarea daca mai exista in cos 
    //produsl respectiv si daca da
    //atunci update la detallii produs    

    this.controllerOrderDetails.addNewOrderDetail(detalii);
        
    }

    newOrderDetails = () => {

        //id,orderId,productId,price,quantity

        this.details = new OrderDetails(
            this.controllerOrderDetails.nextOrderDetails(),
            this.order.id,
            this.produs.id,
            this.produs.price,
            1
        );
        
       this.controllerOrderDetails.addNewOrderDetails(this.details);

        
        alert("Sucessfuly added to cart!");


        
    }

}