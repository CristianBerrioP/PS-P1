import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:programa1', 'Unit | Controller | programa1', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.

test('Probando media', function(assert) {
  let controller = this.subject();
  controller.set('text', "1,2,3");
  controller.send('metodo_calcularMedia');
  controller.send('metodo_calcularDesviacion');
  assert.equal(controller.get('medias'),"2");
});

test('Probando numero de medias', function(assert) {
  let controller = this.subject();
  controller.set('text', "1,2,3¬4,5,6");
  controller.send('metodo_calcularMedia');
  assert.equal(controller.get('medias').length,"2");
});

test('Probando numero de desviaciones', function(assert) {
  let controller = this.subject();
  controller.set('text', "1,2,3");
  controller.send('metodo_calcularMedia');
  controller.send('metodo_calcularDesviacion');
  assert.equal(controller.get('desviaciones').length, "3");
});

test('Caracteres alfabeticos media', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,a,r,4");
  controller.send('metodo_calcularMedia');
  assert.equal(controller.get('errorM'),"Datos con caracteres no permitidos");
});

test('Caracteres simbolicos media', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,$,?,{,}.-,--,");
  controller.send('metodo_calcularMedia');
  assert.equal(controller.get('errorM'),"Datos con caracteres no permitidos");
});

test('Caracteres decimales media', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,4.5,0.0.0,0.256");
  controller.send('metodo_calcularMedia');
  assert.equal(controller.get('errorM'),"Datos con caracteres no permitidos");
});

test('Split correctamente', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,2,3¬");
  controller.send('metodo_calcularMedia');
  assert.equal(controller.get('textFilas').length,"2");
});

test('Split correctamente', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,2,3¬4,5¬,6,8,9");
  controller.send('metodo_calcularMedia');
  assert.equal(controller.get('textFilas').length,"3");
});
