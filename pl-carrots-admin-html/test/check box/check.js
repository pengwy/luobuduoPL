/**
 * Created by py on 2017/3/17.
 */
var app = angular.module('app',[]);
app.controller('ObjectArrayCtrl', ['$scope', 'filterFilter', function ObjectArrayCtrl($scope, filterFilter) {

    // Fruits
    $scope.fruits = [
        { name: 'apple',    type:0},
        { name: 'orange',   type:1 },
        { name: 'pear',     type:2 },
        { name: 'naartjie', type:3 }
    ];

    // Selected fruits
    $scope.selection = [];
    // Helper method to get selected fruits
    $scope.selectedFruits = function selectedFruits() {
        return filterFilter($scope.fruits, { selected: true });
    };
    // Watch fruits for changes
    $scope.$watch('fruits|filter:{selected:true}', function (nv) {
        $scope.selection = nv.map(function (fruit) {
            return fruit.type;
        });
        console.log($scope.selection)
    }, true);
}]);