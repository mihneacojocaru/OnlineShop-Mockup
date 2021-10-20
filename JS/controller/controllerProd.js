import Product from "../model/products.js";

class ControllerProducts{

    constructor(){

        this.list = [];

        this.read();


    }

    read = () => {

        this.list = [];

        let storage = JSON.parse( localStorage.getItem("ProductsDB"));

        for(let item of storage){
            this.list.push(item);
        }

        //console.log(this.list);

        // for(let i=0; i<localStorage.length; i++){

        //     let obj = localStorage.getItem(localStorage.key(i));

        //     obj = JSON.parse(obj);

        //     if(obj.id.includes("p")){

        //         let product = new Product(obj.id,obj.name,obj.price,obj.description,obj.image);

        //         this.list.push(product);

        //     }

        // }

    }
    
    printToConsole = () => {
        this.list.forEach(e => {
            console.log(e.returnText());
        });
    }

    returnProductObject(name){

        for(let i=0; i<this.list.length; i++){

            if(this.list[i].name == name){           
               return this.list[i];
            }

        }

        return "";


        // let obj={};
       
        // this.list.forEach(e => {

                    
        //     if(e.name== name){

        //         console.log(e.name);

        //         obj={...e};
        //     }
        // })


        // console.log(obj);
        // if(obj){

        //     return obj;
        // }

        // return "";
    }

    updateDescription(name,description){
     
        let obj=this.returnProductObject(name);

        //localStorage.removeItem(obj.id);

        obj.description=description;
        localStorage.setItem(obj.id, JSON.stringify(obj));
    }

    deleteItem(id){
        localStorage.removeItem(id);
    }

    newSetProducts = () => {
        let lista = [];
        
        let x = new Product("p1","Masina Tuns Gazon","50€","Masina electrica de tuns gazonul Steinhaus Start PRO-ELM12, 1200W, 32 cm","https://s13emagst.akamaized.net/products/4704/4703416/images/res_42a0b6b7c7eee78d0664d13ad89829af.jpg?width=450&height=450&hash=EF865A3F1DEB50AAB171C04F6D1340D1");

        let x1 = new Product("p2","Masina Electrica Gazon","80€","Masina electrica de tuns gazonul Makita ELM3320, 1200 W, 33 cm latime lucru, 3 trepte taiere, 30 l sac colector","https://s13emagst.akamaized.net/products/20507/20506551/images/res_76761b3617cbb5c268a0b62319565011.jpg?width=450&height=450&hash=E5C7983230CE05E06DEF75CF697390BF");

        let x2= new Product("p3","Trimmer electric gard viu","60€","Trimmer electric pentru gard viu Steinhaus, PRO-HTR600, 600W, lama 51cm, distanta dinti taiere 20 mm","https://s13emagst.akamaized.net/products/17963/17962271/images/res_3c4994d6b957cbc41dda6bd7ef059631.jpg?width=450&height=450&hash=A982A95111562F2CF836A125993671BC")

        let x3 = new Product("p4","Set motocoasa WOLFSON","100€","Set motocoasa 6.2 CP WOLFSON® TRX-620, 52CC cu 1Disc 3T, 1 Mosor cu fir taietor, 1 Aparatoare cu sistem de scurtare automata a firului, 1 Kit de asamblare, 1 ham comfort si 3 sticle ulei motor 2T rosu","https://s13emagst.akamaized.net/products/34405/34404867/images/res_62476faeb6ca3c447971546afab2436e.jpg?width=450&height=450&hash=7BB250AA859148167E579DCC6B298066");

        let x4 = new Product ("p5","Coasa electrica cu fir nylon","40€","Coasa electrica cu fir nylon Steinhaus PRO-TR350, 350 W, 25 cm","https://s13emagst.akamaized.net/products/4984/4983672/images/res_acafc132f430d09878fffe7ae7f68567.jpg?width=450&height=450&hash=581B88C5973FBA15B37FB4A7E4084D60");

        lista.push(x);
        lista.push(x1);
        lista.push(x2);
        lista.push(x3);
        lista.push(x4);

        localStorage.setItem("ProductsDB",JSON.stringify(lista));
    }
}

export default ControllerProducts;