/**
 * Created by py on 2017/3/14.
 */

'use strict';

app.controller('moduleDetailCtrl',function ($scope,$stateParams,$http) {
    var vm = this;
    console.log($stateParams.id);
    var id =$stateParams.id;

    vm.name = '';
    vm. parentID =  '';
    vm.menuID = '';
    vm.url= '';
    vm.type ='';
    vm.getinfo = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/module/"+id,
            method:'get'
        }).then(function (res) {
            vm.info = res.data.data.module;
            vm.name = vm.info.name;
            vm. parentID =  vm.info.parentID;
            vm.menuID = vm.info.menuID;
            vm.url= vm.info.url;
            vm.type =vm.info.type;
            vm.formData = {
                id:id,
                icon:'fa-gear',
                parentID:vm.parentID,
                name:vm.name,
                menuID:vm.menuID,
                url:vm.url,
                type:vm.type,
                level:700,
                createBy:'',
                updateBy:'',
                updateAt:new Date().getTime(),
                createAt:0
            };
        })
    } ;
    if(id){
        vm.getinfo();
    }

    vm.submitMd = function () {
        console.log($scope.form)
        if(id){
            return $http({
                url:"/carrots-admin-ajax/a/u/module/"+id,
                method:'put',
                params:vm.formData
            }).then(function (res) {
                console.log(res);
            })
        }else {
            vm.formdataNew = {
                name:vm.name,
                menuID:vm.menuID,
                url:vm.url,
                parentID:vm.parentID,
                type:vm.type,
                level:0
            };
            return $http({
                url:"/carrots-admin-ajax/a/u/module",
                method:'post',
                params:vm.formdataNew
            }).then(function (res) {
                console.log(res);
            })
        }
    };



});