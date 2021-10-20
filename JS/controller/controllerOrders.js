import Orders from "../model/orders.js";
import Customers from "../model/customers.js";

class ControllerOrders{

    constructor(){

        this.list = [];

        this.read();


    }

    read = () => {

        this.list = [];

        // for(let i=0; i<localStorage.length; i++){

        //     let obj = localStorage.getItem(localStorage.key(i));

        //     obj = JSON.parse(obj);

        //     if(obj.id.includes("o")){

        //         let order = new Orders(obj.id,obj.customer_id,obj.ammount,obj.shipping_address,obj.order_address,obj.order_email,obj.order_date,obj.order_status);
                
        //         this.list.push(order);

        //     }

        // }
    }

    printToConsole = () => {

        this.list.forEach( e => {
            console.log(e.returnOrdersText());
        })

    }

    returnOrderObject(name){

        for(let i=0; i<this.list.length; i++){

            if(this.list[i].name == name){

                return this.list[i];

            }

        }

        return "";
    }

    updateShippingAddress(name, shipping_address){

        let obj = this.returnOrderObject(name);

        obj.shipping_address = shipping_address;

        localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    deleteItem(id){
        localStorage.removeItem(id);
    }


    nextOrder(){
        if(this.list.length==0){
            return "o1";
        }
       return this.list[this.list.length-1].id+1;
    }

    addNewOrder(order){

        localStorage.setItem(order.id, JSON.stringify(order));

    }


    newCustomerLocalStorage = () => {
        let lista = [];

        let c1 = new Customers("c1","customer1@ex.com","pass1234","John Doe","Street. 1234","Default Str. 4321", "USA","+039123123123");
        let c2 = new Customers("c2","customer2@ex.com","pass0000","Jane Smith","Street. 1011","Default Str. 101", "USA","+039010101010");

        lista.push(c1);
        lista.push(c2);

        localStorage.setItem("CustomersDB", JSON.stringify(lista));

    }

    newOrdersLocalStorage = () => {
        let lista = [];

        let o1 =  new Orders("o1","c1",1,"Default Str. 4321","Street. 1234","customer1@ex.com","15-10-21","unconfirmed");

        let o2 = new Orders("o2","c1",1,"Default Str. 4321","Street. 1234","customer1@ex.com","15-10-21","unconfirmed");

        lista.push(o1);
        lista.push(o2);

        localStorage.setItem("OrdersDB",JSON.stringify(lista));
    }
}

export default ControllerOrders;