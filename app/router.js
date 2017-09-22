import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('programa1');
  this.route('programa1', { path: '/controllers' });
});

export default Router;
