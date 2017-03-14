/**
 * Created by py on 2017/3/14.
 */
'use strict';

app.config(["$stateProvider","$urlRouterProvider",routeFn]);
function routeFn($stateProvider,$urlRouterProvider,$ocLazyLoad){
    //加载文件的方法

    //文件配置
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider

        .state("app",{
            url:"",
            templateUrl:"view/main.html",
            controller:"main",
            controllerAs:"vm",
            abstract: true,
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/main.js',"js/constant/constant.js","css/main.css"]})
            }]}
        })
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'view/dashboard.html',
            controller:"dashboard",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/dashboard.js']})
            }]}
        })
        //登录
        .state("login",{
            url:"/login",
            templateUrl:"view/login.html",
            controller:"login",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/login.js','css/login.css',"js/constant/constant.js"]})
            }]}
        })
        .state("app.findJob",{
            url:"/findJob",
            templateUrl:"view/findJob.html",
            controller:"findJobCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/findJob.js',"js/constant/constant.js",'css/findjob.css','js/filter/filter.js']})
            }]}
        })
        .state("app.findPeople",{
            url:"/findPeople",
            templateUrl:"view/findPeople.html",
            controller:"findPeopleCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/findPeople.js','js/factory/factory.js','js/service/service.js','css/findPeople.css']})
            }]}
        })
        .state("app.aboutUs",{
            url:"/aboutUs",
            templateUrl:"view/aboutUs.html",
            controller:"aboutUsCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/aboutUs.js','css/aboutUs.css']})
            }]},
            onExit: function(){
                localStorage.hehe=3
            }
        })
        .state("app.jobDetail",{
            url:"/jobDetail/:id",
            templateUrl:"view/jobDetail.html",
            controller:"jobDetailCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/jobDetail.js',"js/constant/constant.js",'js/service/service.js','js/filter/filter.js','css/jobDetail.css']})
            }]}
        })
        .state("app.searchJob",{
            url:"/searchJob?category?subCategory",
            templateUrl:"view/searchJob.html",
            controller:"searchJobCtrl",
            controllerAs:"vm",
            params:{category:null,subCategory:null},
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/searchJobCtrl.js','css/searchJob.css',"js/constant/constant.js",'js/filter/filter.js']})
            }]}
        })
        .state("app.searchCpy",{
            url:"/findJob/searchCpy/?name",
            templateUrl:"view/searchCpy.html",
            controller:"searchCpyCtrl",
            controllerAs:"vm",
            params:{name:null},
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/searchCpyCtrl.js','css/searchCpy.css',"js/constant/constant.js",'js/filter/filter.js']})
            }]}
        })
        .state("app.moreCompany",{
            url:"/moreCompany",
            templateUrl:"view/moreCompany.html",
            controller:"moreCompanyCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/moreCompany.js','css/moreCompany.css',"js/constant/constant.js",'js/filter/filter.js','js/service/service.js']})
            }]}
        })
        .state("app.companyDetail",{
            url:"/companyDetail/:id",
            templateUrl:"view/companyDetail.html",
            controller:"companyDetailCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/companyDetail.js','css/companyDetail.css',"js/constant/constant.js",'js/filter/filter.js','js/service/service.js']})
            }]}
        })
}