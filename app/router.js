import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.resource('actualizar', { path: '/actualizar/:id' });
  this.route("error");
});

export default Router;
