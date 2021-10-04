let product = new Product("p3","USB Loudspeakers","25€","compact stereo speakers with usb connectivity","https://picsum.photos/200/300");


let product = new Product("p1","Querty Keyboard","30€","standard querty keyboard with backlight white", "https://picsum.photos/200/300");

let product = new Product("p4","Cooling Pad","25€","laptop cooling pad with silent ventilator","https://picsum.photos/200/300");

let product = new Product("p2","USB Mouse","15€","USB Mouse with silent click black","https://picsum.photos/200/300");

let product = new Product("p5","TEST","100€","Description","https://picsum.photos/200/300");

localStorage.setItem(product.id,JSON.stringify(product));


function createProduct(id){
    let product = new Product("p"+id,"Produs "+id,"100€","Description","https://picsum.photos/200/300");

    localStorage.setItem(product.id,JSON.stringify(product));
}

