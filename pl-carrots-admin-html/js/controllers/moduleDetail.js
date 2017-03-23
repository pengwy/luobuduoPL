/**
 * Created by py on 2017/3/14.
 */

'use strict';

app.controller('moduleDetailCtrl',function ($scope,$stateParams,$http) {
    var vm = this;
    console.log($stateParams.id);
    var id =$stateParams.id;
    vm.getinfo = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/module/"+id,
            method:'get'
        }).then(function (res) {
            vm.info = res.data.data.module;

        })
    } ;
    vm.getinfo();
});