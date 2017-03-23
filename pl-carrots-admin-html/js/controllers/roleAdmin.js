/**
 * Created by py on 2017/3/14.
 */
'use strict';

app.controller('roleAdmin',function ($scope,$http) {
    var vm = this;
    vm.roles = function () {
        return $http({
            url:"/carrots-admin-ajax//a/u/multi/role",
            method:'get',
            params:vm.data
        }).then(function (res) {
            console.log(res);
            vm.roleList = res.data.data.roleList
        })
    };
    vm.a = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/role/",
            method:'get'
        }).then(function (res) {
            var ids = res.data.data.ids;
            vm.data = {ids};
            vm.roles();
        })
    };
    vm.a();
});