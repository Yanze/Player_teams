var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/players.html',
      controller: 'playerController'
    })
    .when('/teams', {
      templateUrl: '/partials/teams.html',
      controller: 'teamController'
    })
    .when('/associations', {
      templateUrl: '/partials/associations.html',
      controller: 'associationController'
    })
    .otherwise({
      redirectTo: '/'
    });
});


app.factory('playerFactory', function() {
  var players = [{
    name: "Ryan"
  }, {
    name: "Lily"
  }, {
    name: "Arthus"
  }];

  var factory = {};
  factory.getPlayers = function(callback) {
    callback(players);
  };
  return factory;
});

app.factory('teamFactory', function() {
  var teams = [{
    name: "49ers"
  }, {
    name: "Seahawks"
  }, {
    name: "SFO"
  }];

  var factory = {};
  factory.getTeams = function(callback) {
    callback(teams);
  };
  return factory;
});

app.factory('associationFactory', function() {
  var associations = [];

  var factory = {};
  factory.getAssociations = function(callback) {
    callback(associations);
  };
  return factory;
});


app.controller('playerController', function($scope, playerFactory) {

  $scope.players = [];
  playerFactory.getPlayers(function(data) {
    $scope.players = data;
  });

  $scope.addPlayer = function() {
    $scope.players.push($scope.newPlayer);
    $scope.newPlayer = {};
  };

  $scope.removePlayer = function(player) {
    $scope.players.splice($scope.players.indexOf(player), 1);
  };
});

app.controller('teamController', function($scope, teamFactory) {
      $scope.teams = [];
      teamFactory.getTeams(function(data) {
        $scope.teams = data;
      });

      $scope.addTeam = function() {
        $scope.teams.push($scope.newTeam);
        $scope.newTeam = {};
      };

      $scope.removeTeam = function(team) {
        $scope.teams.splice($scope.teams.indexOf(team), 1);
      };
});

app.controller('associationController', function($scope, playerFactory, teamFactory, associationFactory) {

  $scope.players = [];
  playerFactory.getPlayers(function(data) {
    $scope.players = data;
  });

  $scope.teams = [];
  teamFactory.getTeams(function(data) {
    $scope.teams = data;
  });

  $scope.associations = [];
  associationFactory.getAssociations(function(data){
    $scope.associations = data;
  });


  $scope.addAssociation = function(player, team) {
    $scope.associations.push($scope.newAssocation);
    $scope.newAssocation = {};
  };

  console.log($scope.associations);
  $scope.removeAssociation = function(association) {
    $scope.associations.splice($scope.associations.indexOf(association), 1);
  };


});
