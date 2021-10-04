class ViewHome{

    constructor(){
        this.container = document.querySelector(".container");
        this.nav = document.createElement('nav');
        this.container.appendChild(this.nav);
        this.setNavBar();
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
}



export default ViewHome;