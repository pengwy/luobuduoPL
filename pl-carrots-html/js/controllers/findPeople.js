/**
 * Created by py on 2017/3/1.
 */
"use strict";
app.controller('findPeopleCtrl',function ($http,$timeout,information,$location,$state) {

    var vm = this;
    vm.params = $state.params;
    //加载图片
    var img = $timeout(
        function () {
            $http({
                method: 'GET',
                url: '/carrots-ajax/a/article/search'
            }).then(function (search) {
                vm.src = search.data.data.articleList[1].img;
                vm.href = search.data.data.articleList[1].url
            }, function () {
                console.log('获取行业大图失败')
            })
        }, 1000)

    //公司列表
    var com = {size:8};
    var r = information.company(com).then(function (res) {
        vm.tt =res.data.data
        console.log(vm.tt)
        });
    //带id跳转到公司详情

    vm.go=function (gg) {
        $state.go('app.companyDetail',{id:gg.logo.id});

    }
//跳转到更多公司
    vm.goMoreCompany=function () {
        $state.go('app.moreCompany')
    }
})