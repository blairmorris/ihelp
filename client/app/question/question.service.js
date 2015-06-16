'use strict';

angular.module('ihelpApp')
  .factory('Question', function ($resource) {
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    return $resource('/api/questions');

    //return {
    //  someMethod: function () {
    //    return meaningOfLife;
    //  }
    //};
  });
