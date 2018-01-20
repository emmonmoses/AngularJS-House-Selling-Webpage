angular
.module('ngHouses',[])
.controller('housesController', function($scope, housesFactory){

    $scope.houses;
    $scope.priceInfo ={
    	min:0,
    	max:10000000
    }

//adding new house
  $scope.newListing = {};
    $scope.addHouse = function(newListing) {
      //if(newListing) {
        newListing.image = "default-house";
        $scope.houses.push(newListing);
        $scope.newListing = {};
      //}
    }

//editing house details
$scope.editHouse = function(house){
  $scope.editListing = true;
  $scope.existingListing = house;
}

//closing the editing house details box
$scope.saveHouseEdit = function(){
  $scope.existingListing = { };
  $scope.editListing = false;
}

//deleting the house
$scope.deleteHouse = function(listing){
var index = $scope.houses.indexOf(listing);
$scope.houses.splice(index, 1);
$scope.existingListing = {};
scope.editListing = true;
}
    housesFactory.getHouses().then(function(response){
    $scope.houses = response.data;
    })
        .catch(function(response) {
        console.error('Error', response.data);
    })
        .finally(function() {
            console.log("Error finished");
        });

   /*$scope.sayHello = function () {
       console.log('Hello');
   }*/
});


