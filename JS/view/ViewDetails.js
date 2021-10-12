import ControllerProducts from "../controller/controllerProd.js";
import ViewHome from "./ViewHome.js";

class ViewDetails{

    constructor(){

        this.container = document.querySelector(".container");
        
        this.controllerProduct = new ControllerProducts();
        this.products = this.controllerProduct.list;
        
        this.callDetailsPage();
        
        //this.productList();
        //console.log("view details");
    }

    callDetailsPage(){
        this.container.innerHTML = "";
        this.nav = document.createElement('nav');
        this.container.appendChild(this.nav);
        this.setNavBar();

        this.main = document.createElement('main');
        this.container.appendChild(this.main);
        //this.setMainDetails();

        this.footer = document.createElement('footer');
        this.container.appendChild(this.footer);
        this.setFooter();
    }

    setNavBar = () => {
        const navbar = `<div class="logo">
                            <h3><a href="#">Online Shop</a></h3>
                        </div>
                        <div class="icons">
                            <div class="user"><i class="fas fa-user"> User</i></div>
                            <div class="shopping-cart"><i class="fas fa-shopping-cart"></i></div>
                        </div>`;

        this.nav.innerHTML += navbar;
    }

    setMainDetails = () => {
        this.main.innerHTML = "";

        this.products.forEach( e => {
            this.main.innerHTML += this.createDetailViewNew(e);
        });

        //this.main.innerHTML += this.createDetailView();
        this.goBack();
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

    createDetailView(){
        let detailView = `<div class="view--details">
                            <span class="go-back">go back...</span>
                            <div class="title">
                                <p>Masina electrica de tuns gazonul Steinhaus Start PRO-ELM12, 1200W, 32 cm</p>
                            </div>
                            <div class="details">
                                <div class="prod-img">
                                    <img style="width: 400px;" src="https://s13emagst.akamaized.net/products/4704/4703416/images/res_42a0b6b7c7eee78d0664d13ad89829af.jpg?width=450&height=450&hash=EF865A3F1DEB50AAB171C04F6D1340D1s" alt="">
                                </div>
                                <div class="prod-info">
                                    <p>Masina electrica de tuns gazonul</p>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <div class="price"><p>50€</p></div>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                            </div>`;
        return detailView;
        
    }
    createDetailViewNew(obj){
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

    goBack(){
        let goBack = document.addEventListener("click", e => {
            e.preventDefault();
            let obj = e.target;
            if(obj.classList.contains("go-back")){
                new ViewHome;
            }
        });
    }

    // productList(){
    //     this.products.forEach( e => {
    //         console.log(e.description,e.name,e.price,e.image);
    //     })
    // }


}

export default ViewDetails;