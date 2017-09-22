/* se asegura
que Ember recoge los componentes
automáticamente.*/

import Ember from 'ember';
import listaLigada from '../utils/listaLigada';

export default Ember.Component.extend({
  lista: Ember.computed(function() {
    return new listaLigada();
  }),

  actions: {
    Agregar(text) {
    alert(text);
    this.get('lista').Agregar(text);
    this.rerender();
    }
  }
});
