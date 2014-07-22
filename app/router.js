import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FaxConsoleENV.locationType
});

Router.map(function() {
	this.route('compose');
	this.route('history');
	this.route('login');
});

export default Router;
