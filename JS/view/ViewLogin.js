import ViewHome from "./ViewHome.js";

class ViewLogin{

    constructor(){
        this.viewHome = new ViewHome();
        this.viewHome.container.innerHTML = "";
        this.viewHome.container.innerHTML += this.setLogin;

    }

    setLogin = () => {
        loginPage = `<div class="log-in">
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

        return loginPage;
    }

}
export default ViewLogin;