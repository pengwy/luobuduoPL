/**
 * Created by py on 2017/3/9.
 */

var app=angular.module('app',[])
app.controller('con',function ($scope) {



/*
    $scope.keyi={
        name:'nihao',
        age:1

    }
    $scope.an=function () {
        $scope.keyi.age++
    }

   $scope.$watch('keyi',function (n,o) {
       if(n.age%2==0){
           console.log(n)
       }
   },true)*/


    $scope.name={
    }
$scope.te=function () {
        console.log($scope.name.name)

}



})