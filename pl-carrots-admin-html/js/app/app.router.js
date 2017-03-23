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
                    files:['js/controllers/main.js',"js/constant/constant.js","css/main.css","js/filter/filter.js"]})
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
        .state("app.jobList",{
            url:"/jobList",
            templateUrl:"view/jobList.html",
            controller:"jobList",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/jobList.js','js/directive/directive.js',"js/constant/constant.js",'css/jobList.css','js/filter/filter.js']})
            }]}
        })
        .state("app.comList",{
            url:"/comList",
            templateUrl:"view/comList.html",
            controller:"comList",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/comList.js',"js/constant/district.js",'js/service/service.js','js/filter/filter.js','js/directive/directive.js','css/comList.css']})
            }]},

        })
        .state("app.comDetail",{
            url:"/comDetail",
            templateUrl:"view/comDetail.html",
            controller:"comDetail",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/comDetail.js',"js/constant/district.js","js/constant/constant.js",'js/directive/directive.js','css/comDetail.css']})
            }]}
        })
        .state("app.jobDetail",{
            url:"/jobDetail?id",
            templateUrl:"view/jobDetail.html",
            controller:"jobDetail",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/jobDetail.js',"js/constant/district.js","css/jobDetail.css","js/constant/constant.js"]})
            }]}
        })
        .state("app.articleList",{
            url:"/articleList",
            templateUrl:"view/articleList.html",
            controller:"articleList",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/articleList.js',"js/constant/district.js","js/constant/constant.js",'js/service/service.js','js/filter/filter.js','js/directive/directive.js']})
            }]}
        })
        .state("app.articleDetail",{
            url:"/articleDetail",
            templateUrl:"view/articleDetail.html",
            controller:"articleDetail",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/articleDetail.js',"js/constant/district.js","js/constant/constant.js",'js/service/service.js','js/filter/filter.js','js/directive/directive.js','css/articleDetail.css']})
            }]}
        })
        .state("app.pwdAmend",{
            url:"/pwdAmend",
            templateUrl:"view/pwdAmend.html",
            controller:"pwdAmend",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/pwdAmend.js',"js/constant/constant.js",'js/service/service.js','js/filter/filter.js']})
            }]}
        })
        .state("app.accountAdmin",{
            url:"/accountAdmin",
            templateUrl:"view/accountAdmin.html",
            controller:"accountAdmin",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/accountAdmin.js',"js/constant/constant.js",'js/service/service.js','js/filter/filter.js']})
            }]}
        })
        .state("app.moduleAdmin",{
            url:"/moduleAdmin",
            templateUrl:"view/moduleAdmin.html",
            controller:"moduleAdminCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/moduleAdmin.js','css/moduleAdmin.css',"js/constant/constant.js",'js/filter/filter.js','js/service/service.js']})
            }]}
        })
        .state("app.moduleDetail",{
            url:"/moduleDetail?id",
            templateUrl:"view/moduleDetail.html",
            controller:"moduleDetailCtrl",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/moduleDetail.js','css/moduleDetail.css',"js/constant/constant.js",'js/filter/filter.js','js/service/service.js']})
            }]}
        })
        .state("app.accountDetail",{
            url:"/accountDetail",
            templateUrl:"view/accountDetail.html",
            controller:"accountDetail",
            controllerAs:"vm",
            resolve:{deps:["$ocLazyLoad",function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files:['js/controllers/accountDetail.js',"js/constant/constant.js","css/accountDetail.css",'js/filter/filter.js','js/service/service.js']})
            }]}
        })



}