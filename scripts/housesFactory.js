angular
  .module('ngHouses')
  .factory('housesFactory', function($http) {

    function getHouses() {
      return $http.get('data/data.json');
    }

    return {
      getHouses: getHouses
    }

  });
