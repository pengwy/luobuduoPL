/**
 * Created by py on 2017/3/14.
 */

'use strict';

app.controller('main',function ($scope,$state) {
    var vm = this;
    vm.statu =sessionStorage.getItem("statu");
/*    console.log("hi"+vm.statu);*/
    /*侧边栏面板*/
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    /*获取本地存储*/
    //读取
    var str = sessionStorage.modules;
    vm.manager = sessionStorage.getItem("manager");
    vm.role = sessionStorage.getItem("role");
    console.log(vm.manager);
    //重新转换为对象
    vm.modules = JSON.parse(str);
    console.log(vm.modules);
    vm.mainTab=[];
    vm.childTab = [];
    for(var i=0;i<vm.modules.length;i++){
        if (vm.modules[i].parentID==0){
            vm.mainTab.unshift(vm.modules[i])
        }
    }
   /* console.log(vm.mainTab);*/
});