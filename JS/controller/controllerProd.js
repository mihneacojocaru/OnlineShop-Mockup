//Important: This controller is functional @21.10.2021

import Product from "../model/products.js";

class ControllerProducts{

    constructor(){

        this.list = [];

        this.read();

    }

    read = () => {

        this.list = [];

        let storage = JSON.parse( localStorage.getItem("ProductsDB"));

        if(storage){
            for(let item of storage){
                this.list.push(item);
            }
        }

    }

    nextProductId = () => {

        let storage = JSON.parse(localStorage.getItem("ProductsDB"));
        
        let nrList = [];

        if(storage){
            for(let item of storage){
                let nr = item.id.split("p")[1];
                nr = parseInt(nr);
                nrList.push(nr);
            }
    
            let nrMax = Math.max(...nrList);
            nrMax += 1;
            let newId = "p" + nrMax;
            return newId;
        } else{
            return "p1";
        }
    }

    returnProductObject = (id) => {
        for(let item of this.list){
            if(item.id == id){
                return item;
            }
        }
    }

    returnProductObjectFromName(name){

        for(let item of this.list){
            if(item.name == name){
                return item;
            }
        }
        return "";

        //+++ OLD Version
        // for(let i=0; i<this.list.length; i++){
        //     if(this.list[i].name == name){           
        //        return this.list[i];
        //     }
        // }
        // return "";

    }

    addNewProduct = (name,price,description,image) => {

        let list = [];

        let newProduct = new Product(this.nextProductId(),name,price,description,image);

        newProduct = JSON.parse(JSON.stringify(newProduct));

        let storage = JSON.parse(localStorage.getItem("ProductsDB"));

        if(storage){
            for(let item of storage){
                list.push(item);
            }
        }

        list.push(newProduct);

        //localStorage.setItem("ProductsDB",JSON.stringify(list));
        console.log("ModifyLocalStorage is inactive in controllerProd -> addNewProduct");
        console.log(list);

    }

    updateName = (id,name) => {

        let storage = JSON.parse(localStorage.getItem("ProductsDB"));

        let list = [];
        
        for(let item of storage){
            if(item.id !== id){
                list.push(item);
            }else{
                item.name = name;
                list.push(item);
            }
        }

        localStorage.setItem("ProductsDB",JSON.stringify(list));
        

    }

    deleteProduct = (id) => {
        
        let list = [];

        let storage = JSON.parse(localStorage.getItem("ProductsDB"));

        if(storage){
            for(let item of storage){
                if(item.id !== id){
                    list.push(item);
                }
            }
        }

        localStorage.setItem("ProductsDB", JSON.stringify(list));
    }  



//--- Utility Functions


    newSetProducts = () => {
        let lista = [];
        
        let x = new Product("p1","Collegeblock DIN A4",2,"Lineatur 27- liniert, Schulblock DIN a4 liniert, 80 Blatt, gelocht und perforiert","https://www.rofu.de/out/pictures/generated/product/1/665_665_98/20238834_155203(1).jpg");

        let x1 = new Product("p2","Das große Buch der Prinzessinnen",25,"Erlebe die zauberhaften und mutigen Prinzessinnen in den Geschichten von Disney! Ab 4 Jahren","https://www.rofu.de/out/pictures/generated/product/1/665_665_98/232311_9783551280114_carlsen_disney_prinzessinnen.jpg");

        let x2= new Product("p3","Lamy Füllhalter nexx Feder A",20,"Bei einem Lamy Füllhalter passt sich die Feder der Handschrift an und nicht anders herum. Der LAMY Nexx ist speziell für Jugendliche entworfen.","https://www.rofu.de/out/pictures/generated/product/1/665_665_98/125274_group.jpg")

        let x3 = new Product("p4","MICA - Rucksack - in dunkelgrau/grau",30,"Praktischer Rucksack in grau, mit Laptopfach, Frontreißverschluss und Rückenpolster, Maße: ca. 31 x 48 x 19 cm.","https://www.rofu.de/out/pictures/generated/product/1/665_665_98/227599_4016096406554_mica_rucksack_03.jpg");

        let x4 = new Product ("p5","Deckfarbkasten K12",9,"Deckfarbkasten für Schule und Freizeit. Jetzt im neu entwickelten, exklusiven Design. Der gute Farbkasten von Pelikan mit 12 Farben.","https://www.rofu.de/out/pictures/generated/product/1/665_665_98/720250_012009_k12_neu_2_4100_klein.jpg");
        
        let x5 = new Product ("p6","Kinderschere - abgerundet",1,"Bastelschere für Kinder ab 5 Jahren, mit gehärteten, abgerundeten Stahlklingen und ergonomischem Griff. Schneidet leicht und präzise Papier, Pappe, Klebeband und andere Materialien. Für Linkshänder. In zwei verschiedenen Ausführungen.","https://www.rofu.de/out/pictures/generated/product/1/665_665_98/4016096344870_207428_titel.jpg");

        lista.push(x);
        lista.push(x1);
        lista.push(x2);
        lista.push(x3);
        lista.push(x4);
        lista.push(x5);

        localStorage.setItem("ProductsDB",JSON.stringify(lista));
    }
}

export default ControllerProducts;