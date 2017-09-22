import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('agregar-lista-doble', 'Integration | Component | agregar lista doble', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{agregar-lista-doble}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#agregar-lista-doble}}
      template block text
    {{/agregar-lista-doble}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
