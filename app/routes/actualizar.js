import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    let url = 'http://devel.huayragnulinux.com.ar/pkg/package/' + params.id + "?jsoncallback=?";

    $.get(url, (data) => {
      if (data.exists === "0") {
        this.transitionTo("error");
      }
    });

    return {nombre: params.id};
  }
});
