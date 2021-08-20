"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Carrito!!
var carrito = [];

var Menu =
/*#__PURE__*/
function () {
  function Menu(id, nombre, precio) {
    _classCallCheck(this, Menu);

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }

  _createClass(Menu, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "getTotal",
    value: function getTotal(qty) {
      return this.precio * qty;
    }
  }, {
    key: "getCompra",
    value: function getCompra(qty) {
      return {
        producto: this,
        cantidad: qty,
        monto: this.getTotal(qty)
      };
    }
  }, {
    key: "addToCart",
    value: function addToCart(qty) {
      carrito.push(this.getCompra(qty));
    }
  }]);

  return Menu;
}(); //Creo un objeto


var producto1 = new Menu(1, 'Caseritos', 150);
var producto2 = new Menu(2, 'Espinaca', 200);
var producto3 = new Menu(3, 'Tirabuzon', 220);
var producto4 = new Menu(4, 'Ravioles carne', 270);
var producto5 = new Menu(4, 'Verdes', 250);
var producto6 = new Menu(5, 'Canelonis', 300);
var producto7 = new Menu(6, '4 Quesos', 120);
var producto8 = new Menu(7, 'Boloñesa', 170);
var producto9 = new Menu(8, 'Fileto', 110); //Aca guardo el total en una variable(pedidoUnoTotal), que me va a devolver datos de la compra.
//primeroPedido=producto1.getCompra(12)
//console.log(primeroPedido)

console.log(carrito);
producto7.addToCart(3);
console.log(carrito);