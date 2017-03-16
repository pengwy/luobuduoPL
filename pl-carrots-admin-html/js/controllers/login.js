/**
 * Created by py on 2017/3/14.
 */

'use strict';
app.controller('login',function ($state,$scope,$http) {
    var vm =this;
    vm.name="admin";
    vm.pwd = "123456";
    vm.statu = false;
    vm.go=function () {
        $state.go('app.dashboard')
    };
    vm.module = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/multi/module",
            method:'get',
            params:vm.data
        }).then(function (respon) {
          /*  console.log(respon);*/
            $state.go('app.dashboard');
           vm.modules = respon.data.data.moduleList;
           console.log(vm.modules);
            vm.statu = true;
            sessionStorage.statu = vm.statu;
            sessionStorage.setItem("statu", vm.statu);
            var str = JSON.stringify(vm.modules);
           /* console.log(str);*/
            //存入
            sessionStorage.modules = str;

        })
    };
    vm.a = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/role/1",
            method:'get'
        }).then(function (resp) {
           /* console.log(resp.data.data.role.permissionsSet);*/
            vm.permi = resp.data.data.role.permissionsSet;
            var ids=[];

            angular.forEach(vm.permi, function(ids, key) {
                this.push( parseInt(key));
            },ids);
            vm.data={ids};
            vm.module();

        })
    };
    vm.login = function() {
        return $http({
            url:"/carrots-admin-ajax/a/login",
            method:'post',
            params:{name:vm.name,pwd:vm.pwd}
        }).then(function (res) {
            vm.message = res.data.message;
            if (vm.message=="密码错误"){
                alert("密码错误，请核对后再输入")
            }else{
                vm.a();
            }
        });
    };



});