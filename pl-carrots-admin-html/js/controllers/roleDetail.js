/**
 * Created by py on 2017/3/14.
 */


'use strict';

app.controller('roleDetail',function ($scope,$http,$stateParams) {
    var vm = this;
    var id = $stateParams.id;
    console.log(id);
    /*修改*/
    vm.getinfo = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/role/"+51,
            method:'get'
        }).then(function (res) {
            vm.info = res.data;
            console.log(vm.info);
        })
    } ();

});