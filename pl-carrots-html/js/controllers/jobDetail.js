/**
 * Created by py on 2017/3/6.
 */
"use strict";
app.controller('jobDetailCtrl',function ($stateParams,information,$state,$rootScope) {
    var vm = this;
    vm.params = $state.params;
    //获取id
    vm.id=$stateParams.id;
    //获取详情
    var ggg=information.jobDetail(vm.id).then(function (res) {
        vm.inf= res.data.data
        console.log(vm.inf)
    });
    vm.goBack=function () {
        $state.go('app.companyDetail',{id:vm.inf.companyId});
    };
    vm.bootBox=function () {
        bootbox.alert({
            title:'<p style="text-align: center" class="bg-pink">我感兴趣</p>',
            message: "<p>模式介绍：萝卜多先技术面试-再推荐给用人单位</p>" +
            "<p>萝卜多是一个知根知底的社群招聘。萝卜多的合作企业和候选人，都是萝卜多精心筛选，认证，陪伴多年的伙伴。在萝卜多找工作快，工作有保障。值得您信任的招聘网站。</p>" +
            "<p>您将感兴趣的职位、公司名称以及您的个人信息发送到我们的邮箱，我们会尽快帮您安排。</p>" +
            "<p>邮箱地址：hr@ptteng.com</p>",
            size: 'middle'
        })
    }
})