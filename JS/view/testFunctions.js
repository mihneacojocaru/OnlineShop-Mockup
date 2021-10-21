import Customers from "../model/customers.js";

export default class TESTING{

    constructor() {
       
        
       
    }

    updatePass = (id,newPassword) => {

        let storage = JSON.parse(localStorage.getItem("testDB"));

        let list = [];
        
        for(let item of storage){
            if(item.id !== id){
                list.push(item);
            }else{
                item.password = newPassword;
                list.push(item);
            }
        }

        localStorage.setItem("testDB",JSON.stringify(list));
        

    }

    cloneDB = () => {
        let storage = JSON.parse(localStorage.getItem("CustomersDB"));
        localStorage.setItem("testDB",JSON.stringify(storage));
    }

    adaugaClientNou = () => {
        
       let storage = JSON.parse(localStorage.getItem("testDB"));

       let customer = new Customers(this.retNewIdTest(),
                                     this.retNewIdTest() + "@ex.com",
                                     "pass1212",
                                     "Gheorghe Putina",
                                     "Str. Neputintei 2",
                                     "Str. Morii 4",
                                     "Ciolpanii de jos",
                                     "01230123" 
        );

        storage.push(JSON.parse(JSON.stringify(customer)));

        localStorage.setItem("testDB",JSON.stringify(storage));

    }



    setToLocalStorage = () => {
        let list = [];
        let nrList = [];

        let x = JSON.parse(localStorage.getItem("testID"));

        for (let item of x){
            list.push(item);
        }

        for(let item of x){
            let nr = item.id.split("cmd")[1];
            nr = parseInt(nr);
            nrList.push(nr);
        }

        let nrMax = Math.max(...nrList);
        nrMax += 1;
        let newId = "cmd" + nrMax;
        
        let object = {
            "id":newId
        }
        
        list.push(object);
        
        // localStorage.setItem("testID",JSON.stringify(list));

    }

    retNewIdTest = () => {
        let storage = JSON.parse(localStorage.getItem("testDB"));
        
        let nrList = [];

        for(let item of storage){
            let nr = item.id.split("c")[1];
            nr = parseInt(nr);
            nrList.push(nr);
        }

        let nrMax = Math.max(...nrList);
        nrMax += 1;
        let newId = "c" + nrMax;
        //console.log(newId);
        return newId;
    }

    retNewIdCust = () => {
        let storage = JSON.parse(localStorage.getItem("CustomersDB"));
        
        let nrList = [];

        for(let item of storage){
            let nr = item.id.split("c")[1];
            nr = parseInt(nr);
            nrList.push(nr);
        }

        let nrMax = Math.max(...nrList);
        nrMax += 1;
        let newId = "c" + nrMax;
        console.log(newId);
        return newId;
    }
    retNewIdOrders = () => {
        let storage = JSON.parse(localStorage.getItem("OrdersDB"));
        
        let nrList = [];

        for(let item of storage){
            let nr = item.id.split("o")[1];
            nr = parseInt(nr);
            nrList.push(nr);
        }

        let nrMax = Math.max(...nrList);
        nrMax += 1;
        let newId = "o" + nrMax;
        console.log(newId);
        return newId;
    }
    retNewIdProducts = () => {
        let storage = JSON.parse(localStorage.getItem("ProductsDB"));
        
        let nrList = [];

        for(let item of storage){
            let nr = item.id.split("p")[1];
            nr = parseInt(nr);
            nrList.push(nr);
        }

        let nrMax = Math.max(...nrList);
        nrMax += 1;
        let newId = "p" + nrMax;
        console.log(newId);
        return newId;
    }
    retNewIdOrDetails = () => {
        let storage = JSON.parse(localStorage.getItem("OrderDetailsDB"));
        
        let nrList = [];

        for(let item of storage){
            let nr = item.id.split("od")[1];
            nr = parseInt(nr);
            nrList.push(nr);
        }

        let nrMax = Math.max(...nrList);
        nrMax += 1;
        let newId = "od" + nrMax;
        console.log(newId);
        return newId;
    }




}

