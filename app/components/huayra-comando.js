import Ember from 'ember';

export default Ember.Component.extend({

  iniciar: function() {
    var image = this.$("img")[0];
    var self = this;

    image.onload = function() {
      self.dibujar();

      // Vuelve a dibujar una vez que se cargan
      // las fuentes desde google-fonts.
      $(window).bind('load', function() {
        self.dibujar();
      });

    };



  }.on('didInsertElement'),

  actualizar: function() {
    this.dibujar();
  }.observes('nombre'),

  dibujar: function() {
    var image = this.$("img")[0];
    var canvas = this.$("canvas")[0];
    var nombre = this.get('nombre');
    var ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Pinta el fondo.
    ctx.drawImage(image, 0, 0);

    // Tapa con un rectangulo parte del fondo.
    ctx.translate(73, 120);
    ctx.fillStyle = "#242527";
    ctx.fillRect(0, 0, 600, 50);

    // Escribe los comandos con el nombre de paquete.
    ctx.font = "19px 'Droid Sans Mono'";
    ctx.fillStyle = "#DDD";
    ctx.fillText("alumno@huayra:~$ sudo apt-get update", 3, 17);
    ctx.fillText("alumno@huayra:~$ sudo apt-get install " + nombre, 3, 42);

  }

});
