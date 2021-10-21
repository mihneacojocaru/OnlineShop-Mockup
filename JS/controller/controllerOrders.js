//Important: This controller is functional @21.10.2021

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

    returnOrderObject = (id) => {
        for(let item of this.list){
            if(item.id == id){
                return item;
            }
        }
    }

    returnOrderObjFromName = (name) => {

        for(let item of this.list){
            if(item.name == name){
                return item;
            }
        }

        return "";

        //+++ OLD Version
        // for(let i=0; i<this.list.length; i++){
        //     if(this.list[i].name == name){
        //         return this.list[i];
        //     }
        // }
        // return "";
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

        // localStorage.setItem("OrdersDB",JSON.stringify(list));
        console.log("ModifyLocalStorage is inactive in controllerOrders -> addNewOrder")
        console.log(list);

    }

    updateShippingAddress = (id,newAddress) => {

        let storage = JSON.parse(localStorage.getItem("OrdersDB"));

        let list = [];
        
        for(let item of storage){
            if(item.id !== id){
                list.push(item);
            }else{
                item.shipping_address = newAddress;
                list.push(item);
            }
        }

        localStorage.setItem("OrdersDB",JSON.stringify(list));
        

    }

    deleteOrder = (id) => {
        let list = [];

        let storage = JSON.parse(localStorage.getItem("OrdersDB"));

        if(storage){
            for(let item of storage){
                if(item.id !== id){
                    list.push(item);
                }
            }
        }

        localStorage.setItem("OrdersDB",JSON.stringify(list));
    }

//--- Utility Functions


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