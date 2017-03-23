/**
 * Created by py on 2017/3/14.
 */


'use strict';
app.controller('articleDetail',function (typeA,industrytype,$scope,FileUploader,tt,$filter) {
    var vm =this;

    //初始值
    vm.type=typeA.slice(1);
    vm.industry=industrytype.slice(1);
    //获取编辑的值
    if(localStorage.article!=undefined){
        var article =JSON.parse(localStorage.article);
        var typeNum =$filter('articleTypeNum')(article.type);
        var industryNum =$filter('articleTypeNumIndustryNum')(article.industry);
        vm.text='编辑Article';
        vm.article={
            url:article.url,
            title:article.title,
            type:vm.type[typeNum],
            industry:vm.industry[industryNum],
            img:article.img
        }
    console.log(vm.artic)
    }else {
        //绑定模板
        vm.article={
            type:vm.type[0],
            industry:vm.industry[0],
            img:''
        };
        vm.text='新增Article';
    }
    //显示隐藏
    $scope.$watch('vm.article.type',function () {
        vm.show=false;
        if(vm.article.type.name=='行业大图'){
            vm.show=!vm.show;
            inf.industry=vm.article.industry.type
        }
    },true);

//上传图片
  var uploader = $scope.uploader = new FileUploader({
        url: '/carrots-admin-ajax/a/u/img/3'
    });
    // FILTERS
    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    $scope.uploader.onSuccessItem = function (fileItem, response, status) {
        if (status === 200) {
            console.log(response);
            vm.article.img= response.data.url;
        }
    };

    //获取上传信息
    var inf;
    var get=function () {
      inf ={
            title:vm.article.title,
            url:vm.article.url,
            type: vm.article.type.type,
            img:vm.article.img
        };
    };




    //上传
    vm.promptly=function () {
        get();
        inf.status=2;
        tt.addArticle(inf)
    };

    //存为草稿
    vm.waitTime=function () {
        get();
        inf.status=1;
        tt.addArticle(inf).then(function (res) {
            var text=res.data.message;
            bootbox.alert({
                title: "操作提示",
                message:text,
                callback: function () {
                    if(text=='success'){
                        history.back(-1);
                        localStorage.clear();
                    }
                }
            })});
        }
    //取消
    vm.goBack=function (){
        history.back(-1);
        localStorage.clear();
    }

});
/*
.then(function (res) {
    var text=res.data.message;
    bootbox.alert({
        title: "操作提示",
        message:text,
        callback: function () {
            if(text=='success'){
                history.back(-1);
                localStorage.clear();
            }
        }
    })});
*/
