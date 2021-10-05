class ViewHome{

    constructor(){
        this.container = document.querySelector(".container");
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

    setMain = (title="Mobile Phones") => {
        const h2 = `<h2>${title}</h2>`;
        const cardContainer = `<div class="card-container"></div>`;
        this.main.innerHTML += h2;
        this.main.innerHTML += cardContainer;
    }

    setCard = () => {
        const card = `<div class="card">
        <div class="img"><img src="https://s13emagst.akamaized.net/products/33382/33381519/images/res_a40457d533d5f7a229cf370e39a691a2.jpg?width=150&height=150&hash=C28FB884557225DD3220EB179829346C" alt="iphone 12 image"></div>
        <div class="title">
            <p>Telefon Mobil Apple, iPhone 12 Pro, 128GB, 5G, Graphite</p>
        </div>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price"><span>1200 €</span></div>
    </div>`;

        let cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML += card;
    }

    setNumberOfCards = (numb) => {
        for(let i=1; i<=numb; i++){
            this.setCard();
        }
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
}


export default ViewHome;