import OrderDetails from "../model/orderDetails.js";

class ControllerOrderDetails{

    constructor(){

        this.list = [];

        this.read();


    }

    read = () => {

        this.list = [];

        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));

        for(let item of storage){
            this.list.push(item);
        }

        console.log(this.list);

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

    nextOrderDetails = () => {

        this.read();

        if(this.list.length==0){
            return "od1";
        }
       return this.list[0].id+1;
    }

    addNewOrderDetails(order){

        localStorage.setItem(order.id, JSON.stringify(order));

    }


    orderDetailsRead = (orderId) => {

        for (let item of this.list){
            console.log(item);
            // if(orderId == item.orderId){
            //     console.log("aici");
            // }
        }
    }

    newOrderDetailsLocalStorage = () => {

        let lista = [];

        let od1 = new OrderDetails("od1","o1","p1","50€","1");
        let od2 = new OrderDetails("od2","o2","p2","80€","1");
        let od3 = new OrderDetails("od3","o3","p3","60€","1");

        lista.push(od1);
        lista.push(od2);
        lista.push(od3);

        localStorage.setItem("OrderDetailsDB", JSON.stringify(lista));


    }



}

export default ControllerOrderDetails;