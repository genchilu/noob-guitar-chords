var app = angular.module('app', ['ngSanitize']);

function Ctrl($scope,$sce) {
  $scope.limits = [{
    text: 'Afficher &#0153; par page'
  }, {
    text: 'Afficher <sup>10</sup> par page'
  }, {
    text: 'Afficher 15 par page'
  }, {
    text: 'Afficher 20 par page'
  }];   
  $scope.selectedLimit = $scope.limits[0].text;
}