import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    //let url = 'http://devel.huayragnulinux.com.ar/pkg/package/' + params.id + "?jsoncallback=?";

    //$.getJSON(url, (data) => {
    //   alert(data);
    //});

    return {nombre: params.id};
  }
});
