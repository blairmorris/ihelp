'use strict';

angular.module('ihelpApp')
  .factory('Question', function ($resource) {
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    return $resource('/api/questions/:id', {id:'@_id'}, {
      update: {method:'PUT', isArray:false}
    });

    //return {
    //  someMethod: function () {
    //    return meaningOfLife;
    //  }
    //};
  });
