/**
 * Created by py on 2017/3/7.
 */

'use strict'

app.controller('moreCompanyCtrl',function ($scope,$http,$timeout,information,industrytype,financingtype,searchOptions,$state) {
    var vm = this;
    vm.params = $state.params;
    //获取多选值
    localStorage.show=1;

    //查询值
    vm.com={
        page:1,
        size:9,
        province:[''],
        industry:[''],
        financing:['']
    }

    //ng-repeat 的值
    vm.option=searchOptions;
    //点击事件
    vm.choice=information.choice;



//动态获取值
$scope.$watch('vm.com',function (n,o) {
    vm.list = information.company(vm.com).then(function (res) {
        vm.list =res.data.data;
        //获取总页码
        console.log(vm.list)
        vm.totalItems=res.data.total;
        if(vm.list.length===0){
            vm.no=true
        }
        else{
            vm.no=false
        }
    });
},true)

    //点击跳转
    vm.company=function (gg) {
        $state.go('app.companyDetail',{id:gg.id});
    }

});