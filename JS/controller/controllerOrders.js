import Orders from "../model/orders.js";
import Customers from "../model/customers.js";

class ControllerOrders{

    constructor(){

        this.list = [];

        this.read();

    }

    read = () => {

        this.list = [];

        let storage = JSON.parse(localStorage.getItem("OrdersDB"));

        if(storage){
            for(let item of storage){
                this.list.push(item);
            }
        }
    }
    nextOrderId = () => {
        let storage = JSON.parse(localStorage.getItem("OrdersDB"));
        
        if(storage){
            let nrList = [];

            for(let item of storage){
                let nr = item.id.split("o")[1];
                nr = parseInt(nr);
                nrList.push(nr);
            }

            let nrMax = Math.max(...nrList);
            nrMax += 1;
            let newId = "o" + nrMax;
            return newId;
        }else{
            return "o1";
        }
        
    }

    addNewOrder(id,clientId,nrOfOrders=0,shippAdd,orderAdd,email,status){
        let list = [];

        let newDate = new Date().toISOString().substring(0,10);

        let order = new Orders(id,clientId,nrOfOrders,shippAdd,orderAdd,email,newDate,status);

        order = JSON.parse(JSON.stringify(order));

        let storage = JSON.parse(localStorage.getItem("OrdersDB"));

        if(storage){
            for(let item of storage){
                list.push(item);
            }
        }
        
        list.push(order);

        //localStorage.setItem("OrdersDB",JSON.stringify(list));
        console.log("ModifyLocalStorage is inactive in controllerOrders -> addNewOrder")
        console.log(list);

    }



//--- OLD FUNCTIONS
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

//--- END of Old Functions

//--- Utility Functions

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
//--- End of Utilitary Functions

}

export default ControllerOrders;