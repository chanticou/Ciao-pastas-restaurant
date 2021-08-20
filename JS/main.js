
//Carrito!!
let carrito = [];


class Menu {
    constructor(id, nombre, precio) {
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    getTotal(qty) {
       return  this.precio * qty 
    }

    getCompra(qty){
        return{
            producto:this,
            cantidad:qty,
            monto:this.getTotal(qty)
        }
    }

    addToCart(qty){
        carrito.push(this.getCompra(qty))
    }
}


//Creo un objeto
const producto1 = new Menu (1, 'Caseritos' , 150);
const producto2 = new Menu (2, 'Espinaca' , 200);
const producto3 = new Menu (3, 'Tirabuzon', 220);
const producto4 = new Menu (4, 'Ravioles carne' , 270 );
const producto5 = new Menu (4, 'Verdes', 250);
const producto6 = new Menu (5, 'Canelonis', 300);
const producto7 = new Menu (6, '4 Quesos', 120);
const producto8 = new Menu (7, 'Boloñesa', 170);
const producto9 = new Menu (8, 'Fileto', 110 );


//Aca guardo el total en una variable(pedidoUnoTotal), que me va a devolver datos de la compra.
//primeroPedido=producto1.getCompra(12)
//console.log(primeroPedido)

console.log(carrito)
producto7.addToCart(3)
console.log(carrito)






