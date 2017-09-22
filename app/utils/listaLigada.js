function Nodo(dato) {  //lISTA DE NODOS
  this.anterior = null;
  this.siguiente = null;
  this.dato = dato;
}

export default function ListaDoblementeLigada() {
  this.length = 0;
  this.primero = null;
  this.ultimo = null;
}

ListaDoblementeLigada.prototype = {

  Agregar(dato) {
    var nodo = new Nodo(dato);
    if (this.primero == null) {  //La lista esta vacia
      this.anterior = nodo;
      this.siguiente = nodo;
      this.primero = nodo;
      this.ultimo = nodo;
    } else {
      nodo.anterior = this.ultimo;
      nodo.siguiente = this.primero;
      this.primero.anterior = nodo;
      this.ultimo.siguiente = nodo;
      this.ultimo = nodo;
    }

    this.length++;

    return nodo;
  },

  Recorrer(callback) {      //REcorre la lista ligada dobre circular
    var x = this.primero;
    do {
      if (!x) { continue; }
      callback(x.dato);
      x = x.siguiente;
    } while (x !== this.primero);
  },

  toArray() {
    var array = [];
    var x = this.primero;

    do {
      if (!x) { continue; }

      array.push(x.dato);
      x = x.siguiente;
    } while (x !== this.primero);

    return array;
  }
};

ListaDoblementeLigada.fromArray = function(array) {
  var lista = new ListaDoblementeLigada();
  for (var i = 0, l = array.length; i < l; i++) {
    lista.append(array[i]);
  }

  return lista;
};
