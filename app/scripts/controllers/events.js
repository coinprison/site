'use strict';

angular.module('prisonApp')
  .controller('EventsController', ['api', function(api) {
    this.events = [];

    api.getEvents().then(function(events) {
        this.events = events;
    }.bind(this));
  }]);
