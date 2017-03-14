/**
 * Created by py on 2017/3/10.
 */


"use strict";
app.controller('companyDetailCtrl',function ($stateParams,information,$state) {
    var vm =this;
    //获取公司
    vm.params = $state.params;
    vm.id=$stateParams.id;
    //获取公司详情

    var company=information.companyDetail(vm.id).then(function (res) {
        vm.company=res.data.data;

    });
    //获取职位详情
    var jobId={companyId:vm.id};
    var job = information.companyJob(jobId).then(function (res) {
        vm.companyJob=res.data.data;
    });
    //控制显示哪部分
    vm.show=false;
    vm.chan=function () {
        vm.show=!vm.show;
        console.log(vm.show)
    }
    //跳转到具体职位介绍
    vm.goJob=function (gg) {
        console.log(gg.s.id)
        $state.go('app.jobDetail',{id:gg.s.id})
    }

})
