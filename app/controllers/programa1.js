import Ember from 'ember';

export default Ember.Controller.extend({

  text: "",
  textFilas: "",
  medias: null,
  tamaño: null,
  desviaciones: null,
  errorM:null,
  errorD:null,

  actions:{
    metodo_leerArchivo: function(evt){
      var vector_archivos = evt.target.files[0];
      var texto_contenido = "";
      var esto = this;
      if (vector_archivos) {
        var objeto_lector = new FileReader();
        objeto_lector.onload = function(objeto_evento){
          texto_contenido = objeto_evento.target.result;
          document.getElementById("texto").innerHTML = texto_contenido;
          esto.set('text', texto_contenido);
        };
        objeto_lector.readAsText(vector_archivos);
        }else {
         alert("Failed to load file");
        }
     },

     metodo_calcularMedia: function(){
       var texto = this.get('text');
       var tamaño_fila = 0;
       var contador_fila=0;
       var vec_contador_fila=[];
       var vec_tamaño_fila=[];
       var vec_medias=[];
       var texto_sin_enter = "";
       var texto_filas = "";
       var texto_numeros = 0;
       //Ciclos para hallar las medias
       texto_sin_enter = texto.replace(/\n/g, '¬');
       texto_filas = texto_sin_enter.split("¬");
       texto_numeros = 0;
       for(var num_i=0; num_i<texto_filas.length; num_i++){
         texto_numeros = texto_filas[num_i].split(",");
         for(var num_j=0; num_j<texto_numeros.length;num_j++){
           if(texto_numeros[num_j]!=""){
             if(Number.isInteger(parseInt(texto_numeros[num_j]))){
               contador_fila = contador_fila + parseInt(texto_numeros[num_j]);
               tamaño_fila = texto_numeros.length;
               vec_contador_fila[num_i]=contador_fila;
               vec_tamaño_fila[num_i]=tamaño_fila;
               vec_medias[num_i]=vec_contador_fila[num_i]/vec_tamaño_fila[num_i];
             }else{
               this.set('errorM', "Datos con caracteres no permitidos");
               return "Datos con caracteres no permitidos";
             }
           }else {
             num_j = texto_numeros.length + 1;
           }
         }
         contador_fila=0;
       }
       //document.getElementById("resultadoMedi").innerHTML = "Medias: " + vec_medias;
       this.set('medias', vec_medias);
       this.set('tamaño', vec_tamaño_fila);
       this.set('textFilas',texto_filas);
       var medias = this.get('medias');
       medias = vec_medias;
       return medias;
     },

     metodo_calcularDesviacion: function(){
       var vec_medias = this.get('medias');
       var texto = this.get('text');
       var vec_desv=[[]];
       var texto_filas="";
       var texto_numeros="";
       var vec_tamaño_fila=this.get('tamaño');
       var texto_sin_enter = texto.replace(/\n/g, '¬');
       var pow=0;
       var sumatoria = 0;
       texto_filas = texto_sin_enter.split("¬");
       //Ciclos para hallar la desviación estandar
       for(var num_i=0; num_i<texto_filas.length-1; num_i++){
         texto_numeros = texto_filas[num_i].split(",");
         sumatoria=0;
         for(var num_j=0; num_j<texto_numeros.length;num_j++){
           if(texto_numeros[num_j]!=""){
             if(Number.isInteger(parseInt(texto_numeros[num_j]))){
               if (!vec_desv[num_i]){
                 vec_desv[num_i] = [];
               }
               pow = Math.pow((texto_numeros[num_j]-vec_medias[num_i]),2);
               sumatoria = sumatoria + pow;
             }else{
               this.set('errorD', "Datos con caracteres no permitidos");
               return "Datos con caracteres no permitidos"
             }
           }
         }
         sumatoria = sumatoria/(vec_tamaño_fila[num_i]-1);
         vec_desv[num_i] = Math.sqrt(sumatoria);
       }
      // document.getElementById("resultadoDesv").innerHTML = "Desviación Estandar: "+vec_desv;
       this.set('desviaciones', vec_desv);
       return vec_desv;
      }
    }
});
