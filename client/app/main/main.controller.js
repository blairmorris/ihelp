'use strict';

angular.module('ihelpApp')
  .controller('MainCtrl', function ($scope, $http, socket, Question) {
    $scope.awesomeThings = [];
    $scope.questions = [];
    $scope.question = new Question();
    $scope.questions = Question.query();
    socket.syncUpdates('question', $scope.questions);

    $scope.submitQuestion = function(){
      $scope.question.$save({}, function(success){
        console.log(success);
      });
      $scope.question = new Question();
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
      socket.unsyncUpdates('question');
    });
  });
