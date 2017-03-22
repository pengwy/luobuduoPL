/**
 * Created by py on 2017/3/17.
 */




var app=angular.module('app',[]);
app.controller('con',function ($scope) {

    $scope.go=function () {
        var arr=[1,2,3,4,5,6];
        var ob={};
        var bb=[]
        for(i=0;i<arr.length;i++){
            ob={tag:arr[i]};
            bb.push(ob)
        }
        console.log(bb)
    }
});
