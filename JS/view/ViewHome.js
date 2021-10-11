import ControllerProducts from "../controller/controllerProd.js";
import ViewDetails from "./ViewDetails.js";

class ViewHome{

    constructor(){
        this.container = document.querySelector(".container");

        this.callMainPage();

        this.loginPage();

        this.controllerProduct = new ControllerProducts;

        this.appendCardsToPage();

        this.onCardClick();

        console.log("view home");


    }

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

    setMain = (title="Articole Gradinarit") => {
        const h2 = `<h2>${title}</h2>`;
        const cardContainer = `<div class="card-container"></div>`;
        this.main.innerHTML += h2;
        this.main.innerHTML += cardContainer;
    }

    setCard = (obj) => {
        const card = `<div class="card click">
        <div class="img click"><img class="click" src="${obj.image}" alt="${obj.name}"></div>
        <div class="title click">
            <p class="click">${obj.name}</p>
        </div>
        <div class="stars click">
            <i class="fas fa-star click"></i>
            <i class="fas fa-star click"></i>
            <i class="fas fa-star click"></i>
            <i class="fas fa-star click"></i>
            <i class="fas fa-star click"></i>
        </div>
        <div class="price click"><span class="click">${obj.price}</span></div>
    </div>`;

        this.cardContainer.innerHTML += card;
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
    }

    loginPage(){

        let user = document.addEventListener('click', e => {
            e.preventDefault();
            let obj = e.target;

            if(obj.parentNode.className == "user"){
                this.setLogin();
            } else if (obj.className == "close"){
                this.callMainPage();
                this.appendCardsToPage();
                this.onCardClick();
            }
        });

        

        return "";

    }

    onCardClick(){
        let card = document.addEventListener("click", e => {
            e.preventDefault();
            let obj = e.target;

            if(obj.classList.contains("click")){
                
                new ViewDetails();
                
            }


        });
    }

    /** OLD FUNCTIONS */

    // setNumberOfCards = (numb) => {
    //     for(let i=1; i<=numb; i++){
    //         this.setCard();
    //     }
    // }

}


export default ViewHome;