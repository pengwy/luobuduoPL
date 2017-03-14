/**
 * Created by py on 2017/3/8.
 */

var app = angular.module('app',[]);
app.controller('con',function($scope){

     arr=[
           1,2,5,8
    ];
     $scope.a=[
        {type: 1, name: "产品"},
        {type: 2, name: "UI"},
        {type: 3, name: "QA"},
        {type: 4, name: "Android"},
        {type: 5, name: "IOS"},
        {type: 6, name: "WEB"},
        {type: 7, name: "OP"},
        {type: 8, name: "JAVA"},
        {type: 9, name: "NLP"},
        {type: 10, name: "DM"},
        {type: 11, name: "DL"}
    ]
$scope.na=true
$scope.hh=1;
$scope.haha= function () {
    angular.forEach($scope.a, function(data){
        for(i=0; i<arr.length;i++){
            if(arr[i]==data.type){
                data.ok= true
               /* console.log(data)*/
            }
        }

    });
    $scope.b=$scope.a
    console.log($scope.b)
}

});





/*
var app = angular.module('myApp', []);
app.controller('repeatCtrl', function ($scope) {
    $scope.people = [
        {name: 'charles', city: 'BeiJing'},
        {name: 'Erik', city: 'ShangHai'},
        {name: 'Mary', city: 'Shenzhen'}
    ];
    $scope.click = function (index) {
        $scope.temp = index;
    };
});
*/
