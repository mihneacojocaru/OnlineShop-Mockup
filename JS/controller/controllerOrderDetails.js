//Important: This controller is functional @21.10.2021

import OrderDetails from "../model/orderDetails.js";
import ControllerProducts from "./controllerProd.js";

class ControllerOrderDetails{

    constructor(){

        this.list = [];

        this.read();

    }

    read = () => {

        this.list = [];

        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));

        if(storage){
            for(let item of storage){
                this.list.push(item);
            }
        }

    }

    nextOrderDetailsId = () => {
        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));
        
        if(storage){
            let nrList = [];

            for(let item of storage){
                let nr = item.id.split("od")[1];
                nr = parseInt(nr);
                nrList.push(nr);
            }

            let nrMax = Math.max(...nrList);
            nrMax += 1;
            let newId = "od" + nrMax;
            return newId;
        }else{
            return "od1";
        }
    }

    returnOrderDetailsObject = (id) => {
        for(let item of this.list){
            if(item.id == id){
                return item;
            }
        }
    }

    returnFromOrIdPrdId = (orderId, productId) => {
        for(let item of this.list){
            if(item.orderId == orderId && item.productId == productId){
                console.log(item);
                return item;
            }
        }
        return "";
    }

    addNewOrderDetail = (newObject) => {

        let list = [];

        let newOrderDetails = newObject;

        newOrderDetails = JSON.parse(JSON.stringify(newOrderDetails));

        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));

        if(storage){
            for(let item of storage){
                list.push(item);
            }
        }

        list.push(newOrderDetails);

        localStorage.setItem("OrderDetailsDB",JSON.stringify(list));
        // console.log("ModifyLocalStorage is inactive in controllerOrderDetails -> addNewOrderDetail");
        // console.log(list);


    }

    updateQuantity = (id,quantity) => {

        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));

        let list = [];

        for(let item of storage){
            if(item.id !== id){
                list.push(item);
            }else{
                item.quantity = quantity;
                list.push(item);
            }
        }

        localStorage.setItem("OrderDetailsDB",JSON.stringify(list));

    }

    deleteOrderDetails = (id) => {
        let list = [];

        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));

        if(storage){
            for(let item of storage){
                if(item.id !== id){
                    list.push(item);
                }
            }
        }

        localStorage.setItem("OrderDetailsDB", JSON.stringify(list));
    }

     //orderId =>lista cu detalii

     returnDetailsByOrder = (orderId) =>{
  
        return  this.list.filter(e=>e.orderId == orderId);

        // let list = [];

        // this.list.forEach( e => {
        //     if(e.orderId == orderId){
        //         list.push(e);
        //     }
        // });

        // return list;
    }



//--- Utility Functions

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

//--- End of Utility Functions

//--- Old Functions

// updateQuantity = (id,quantity) => {

//     let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));

//     let list = [];

//     for(let item of storage){
//         if(item.id !== id){
//             list.push(item);
//         }else{
//             item.quantity = quantity;

//             let productPrice = new ControllerProducts().returnProductObject(item.productId).price;

//             let totalPrice = quantity * productPrice;

//             item.price = totalPrice;
//             list.push(item);
//         }
//     }

//     localStorage.setItem("OrderDetailsDB",JSON.stringify(list));

// }

//--- End of Old Functions

}

export default ControllerOrderDetails;