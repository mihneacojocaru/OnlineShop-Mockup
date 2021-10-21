//Important: This controller is functional @21.10.2021

import Customers from "../model/customers.js";

class ControllerCustomers{

    constructor(){
        this.list = [];
        this.read();
    }

    read = () => {

        this.list = [];

        let storage = JSON.parse(localStorage.getItem("CustomersDB"));

        if(storage){
            for(let item of storage){
                this.list.push(item);
            }
        }
    };

    nextCustomerId = () => {
        let storage = JSON.parse(localStorage.getItem("CustomersDB"));
        
        let nrList = [];

        if(storage){
            for(let item of storage){
                let nr = item.id.split("c")[1];
                nr = parseInt(nr);
                nrList.push(nr);
            }
    
            let nrMax = Math.max(...nrList);
            nrMax += 1;
            let newId = "c" + nrMax;
            return newId;
        }else{
            return "c1";
        }
    }

    returnCustomerObject = (id) => {
        
        for( let item of this.list){
            if(item.id == id){
                return item;
            }
        }
    }

    addNewCustomer = (email,password,fullName,billAdd,shippAdd,country,phone) => {
        let list = [];

        let newCustomer = new Customers(
            this.nextCustomerId(),
            email,
            password,
            fullName,
            billAdd,
            shippAdd,
            country,
            phone 
        );

        newCustomer = JSON.parse(JSON.stringify(newCustomer));

        let storage = JSON.parse(localStorage.getItem("CustomersDB"));

        if(storage){
            for(let item of storage){
                list.push(item);
            }
        }
        
        list.push(newCustomer);

        //localStorage.setItem("CustomersDB",JSON.stringify(list));
         console.log("ModifyLocalStorage is inactive in controllerCustomer -> addNewCustomer")
         console.log(list);
    }

    updatePass = (id,newPassword) => {

        let storage = JSON.parse(localStorage.getItem("CustomersDB"));

        let list = [];
        
        for(let item of storage){
            if(item.id !== id){
                list.push(item);
            }else{
                item.password = newPassword;
                list.push(item);
            }
        }

        localStorage.setItem("CustomersDB",JSON.stringify(list));
        

    }

    updateShippingAddress = (id,newAddress) => {

        let storage = JSON.parse(localStorage.getItem("CustomersDB"));

        let list = [];
        
        for(let item of storage){
            if(item.id !== id){
                list.push(item);
            }else{
                item.default_shipping_address = newAddress;
                list.push(item);
            }
        }

        localStorage.setItem("CustomersDB",JSON.stringify(list));
        

    }  

    deleteCustomer = (id) => {
        
        let list = [];

        let storage = JSON.parse(localStorage.getItem("CustomersDB"));

        if(storage){
            for(let item of storage){
                if(item.id !== id){
                    list.push(item);
                }
            }
        }

        localStorage.setItem("CustomersDB", JSON.stringify(list));
    }  

    
}

export default ControllerCustomers;