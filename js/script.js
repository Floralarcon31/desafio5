//Incorporar objetos

class paquetes {

    constructor (id, nombrePaquete, transporte, precio, stock){

        this.id = id;
        this.nombrePaquete = nombrePaquete;
        this.transporte = transporte;
        this.precio = precio;
        this.stock = stock;
     
        //Eleccion de paquete y precio
        this.comprar = function (){
            console.log(`Elegiste este destino: ${this.nombrePaquete} a $ ${this.precio}`)
        }
        
    }

    // stock de los paquetes
    getStock(){ 
        if (this.getStock != 0 && this.stock > 0){
            
            console.log("Hay lugares!!");
            return true;
            
        }
        else {
            
            console.log("No hay lugares!!");
            return false;
            
        }
    }
      
    ventaPaquete (){
        this.stock = this.stock - 1;
    }

    //Cuando el usuario elije entre 3 detinos y aca va a salir si tiene descento el destino
    getEleccionPaquete(){

        if( eleccion == "IGZ" ){
            //Igz - descuento del 15
            console.log("Elegiste Iguazú y tiene el 15% de decuento");
            return this.precio - (this.precio*0.15);
        }
        else if (eleccion == "MDZ"){
            //mdz - descuento del 10
            console.log("Elegiste Mendoza y tiene el 10% de descuento");
            return this.precio - (this.precio*0.10);
        }
        else if (eleccion == "FTE"){
            //fte - no tiene descuento 
            console.log("Elegiste El Calafate, lamentablemente no tiene descuento");
            return "";
        }
        
    }
   
}
// los 3 destinos con promo
let promo1 = new paquetes (001, "Iguazú", "bus", 17500, 8);
let promo2 = new paquetes (002, "Mendoza", "avion", 21500, 13);
let promo3 = new paquetes (003, "El Calafate", "avion", 55000, 0);


let eleccion = prompt("Indique a que destino desea viajar IGZ - MDZ - FTE").toUpperCase();
        //if para que salga uno a la vez y console table para que etes mas acomoddada la info
        if( eleccion == "IGZ" ){
            promo1.comprar();
            //STOCK
            promo1.ventaPaquete();
            console.table(promo1.getStock( ));
            console.table(promo1);  
            //DESCUENTO
            
            console.log("El precio final con descuento es de $" + promo1.getEleccionPaquete( ));
          
        }
        else if (eleccion == "MDZ"){
            promo2.comprar();
            //STOCK
            promo2.ventaPaquete();
            console.table(promo2.getStock( ));
            console.table(promo2);  
            //DESCUENTO

            console.log("El precio final con descuento es de $" + promo2.getEleccionPaquete( ));    
        }
        else if (eleccion == "FTE"){
           
            promo3.comprar();
            //STOCK
            promo3.ventaPaquete();
            console.table(promo3.getStock( ));
            console.table(promo3);  
            //DESCUENTO
            console.log("No quedan lugares, lo sentimos" + promo3.getEleccionPaquete());
        }
        else{
            console.log("No tenemos este destino, vuelva a intentarlo");
        }