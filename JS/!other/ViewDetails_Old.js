import ControllerProducts from "../controller/controllerProd.js";
import ViewHome from "../view/ViewHome.js";

class ViewDetails{

    constructor(obj){

        this.container = document.querySelector(".container");
        
        this.controllerProduct = new ControllerProducts();

        this.products = this.controllerProduct.list;

        this.produs=obj;
        
        this.callDetailsPage();

    }

    callDetailsPage(){
        this.container.innerHTML = "";
        this.nav = document.createElement('nav');
        this.container.appendChild(this.nav);
        this.setNavBar();

        this.main = document.createElement('main');
        this.container.appendChild(this.main);
        this.setMainDetails();

        this.footer = document.createElement('footer');
        this.container.appendChild(this.footer);
        this.setFooter();
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

export default ViewDetails;