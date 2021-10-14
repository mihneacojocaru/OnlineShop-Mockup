import ControllerProducts from "../controller/controllerProd.js";
import ViewHome from "./ViewHome.js";

export default class ViewDetails{

    constructor(obj){

        this.container = document.querySelector(".container");
        
        this.controllerProduct = new ControllerProducts();

        this.products = this.controllerProduct.list;

        this.produs=obj;
        
        this.main = document.querySelector('main');

        this.setMainDetails();

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
                                    <div class="price"><p>${obj.price}</p></div>
                                    <button>Add to cart</button>
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

}