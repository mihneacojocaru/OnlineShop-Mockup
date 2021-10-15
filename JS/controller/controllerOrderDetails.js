import OrderDetails from "../model/orderDetails.js";

class ControllerOrderDetails{

    constructor(){

        this.list = [];

        this.read();

    }

    read = () => {

        this.list = [];

        for(let i=0; i<localStorage.length; i++){

            let obj = localStorage.getItem(localStorage.key(i));

            obj = JSON.parse(obj);

            if(obj.id.includes("od")){

                let orderDetails = new OrderDetails(obj.id,obj.orderId,obj.productId,obj.price,obj.quantity);

                this.list.push(orderDetails);

            }

        }

    }

    printToConsole = () => {

        this.list.forEach( e => {
            console.log(e.returnOrderDetailsText());
        })

    }

    returnOrderDetailsObject(id){
        for(let i=0; i>this.list.length; i++){

            if(this.list[i].name == name){

                return this.list[i];

            }

        }
        return "";
    }

    updateQuantity(id,quantity){

        let obj = this.returnOrderDetailsObject(id);

        obj.quantity = quantity;

        localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    deleteItem(id){
        localStorage.removeItem(id);
    }

    nextOrderDetails(){
        if(this.list.length==0){
            return "od1";
        }
       return this.list[this.list.length-1].id+1;
    }

    addNewOrderDetails(order){

        localStorage.setItem(order.id, JSON.stringify(order));

    }

}

export default ControllerOrderDetails;