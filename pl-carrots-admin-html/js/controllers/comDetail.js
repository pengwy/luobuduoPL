/**
 * Created by py on 2017/3/14.
 */
'use strict';

app.controller('comDetail',function ($scope,approvedStatus,industrytype,financingtype,province,city,country,FileUploader,tt) {
    var vm =this;
    vm.com={};
     vm.se={
        approved:approvedStatus.slice(1),
        financing:financingtype.slice(1),
        industry:industrytype.slice(1),
         province:province,
         city:[{"cityId": '', "cityName": "请选择城市"}],
         country:[{"countryId": '',"countryName": "请选择地区"}],
    };
    vm.com.company={
        approved:vm.se.approved[0],
        name:'',
        solgan:'',
        totalNum:'',
        financing:vm.se.financing[0],
        province:vm.se.province[0],
        city:vm.se.city[0],
        country:vm.se.country[0],
        summary:''
    };
    vm.com.industryList=vm.se.industry[0];
    vm.com.productList={
        name:'',
        solgan:'',
        summary:'',
        logo:''
    };
    vm.com.tagList=[];

    //发送数据
    var ok = function () {
        vm.com.company.financing= vm.com.company.financing.type;
        vm.com.industryList=vm.com.industryList.type;
        vm.com.company.province=vm.com.company.province.proId;
        vm.com.company.city=vm.com.company.city.cityId;
        vm.com.company.country=vm.com.company.country.id;
        vm.com.company.approved=vm.com.company.approved.type;
    };


    //省的变化
    $scope.$watch('vm.com.company.province',function () {
        var t = vm.se.city.length;
        vm.se.city.splice(1,t);
        angular.forEach(city,function (data) {
            if(vm.com.company.province.proId==data.proId){
                vm.se.city.push(data);
            }
            vm.com.company.city=vm.se.city[0]
        });
    },true);

    //市的变化
    $scope.$watch('vm.com.company.city',function () {
        var t = vm.se.country.length;

        vm.se.country.splice(1,t);
        angular.forEach(country,function (data) {
            if(vm.com.company.city.cityId==data.cityId){
                vm.se.country.push(data);
            }
            vm.com.company.country=vm.se.country[0]
        });
    },true);




    //上传图片
    var uploader = $scope.uploader = new FileUploader({
        url:"/carrots-admin-ajax/a/u/img/3"
    });
    //公司logo
    uploader.onSuccessItem = function(fileItem,response) {
        vm.com.company.logo = response.data.url;

    };
    var uploader1 = $scope.uploader1 = new FileUploader({
        url:"/carrots-admin-ajax/a/u/img/3"
    });
    //产品logo
    uploader1.onSuccessItem = function(fileItem,response) {
        vm.com.productList.logo = response.data.url;
    };

    var uploader2 = $scope.uploader2 = new FileUploader({
        url:"/carrots-admin-ajax/a/u/img/3"
    });
    //地图
    uploader2.onSuccessItem = function(fileItem,response) {
        vm.com.company.map = response.data.url;
    };
    //移除图片
    $scope.moveImg=function (g) {
        if (g=='uploader'){
            vm.com.company.logo=''
        }else if(g=='uploader1'){
            vm.com.productList.logo=''
        }else {
            vm.com.company.map=''
        }
    }


    vm.gg=function () {
        history.back(-1)
    }



//添加标签
    var tag=new Set();
    vm.addTag=function () {
        if(vm.tagText!=undefined)
            tag.add(vm.tagText)
        console.log(tag)
        vm.com.tagList=[...tag]
        }
    vm.deleteTag=function (g) {
        tag.delete(g.tag)
        vm.com.tagList=[...tag]
    }

//新建公司

    vm.addCom=function () {
        ok();
        console.log(vm.com)
        tt.addCompany(vm.com).then(function (res) {
            console.log(res)
        })
    }
});
