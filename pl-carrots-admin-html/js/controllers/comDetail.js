/**
 * Created by py on 2017/3/14.
 */
'use strict';

app.controller('comDetail',function ($scope,approvedStatus,industrytype,financingtype,province,city,country,FileUploader) {
    var vm =this;
    vm.com={};
     vm.se={
        approved:approvedStatus.slice(1),
        financing:financingtype.slice(1),
        industry:industrytype.slice(1),
         province:province,
         city:[{"cityId": '', "cityName": "请选择城市"}],
         country:[{"countryId": '',"countryName": "请选择地区"}],
        /* companyTag:companyTag*/
    };
    vm.com.company={
        approved:vm.se.approved[0],
        name:'',
        solgan:'',
        totalNum:'',
        financing:vm.se.financing[0],
        industry:vm.se.industry[0],
        province:vm.se.province[0],
        city:vm.se.city[0],
        country:vm.se.country[0],
        companyTag :[],
        summary:''
    };
    vm.com.productList={
        name:'',
        solgan:'',
        summary:'',
        logo:''
    };
    vm.com.tagList=[];

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



    var uploader = $scope.uploader = new FileUploader({
        url: 'carrots-admin-ajax/a/u/img/test'
    });

    // FILTERS

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

    // CALLBACKS

   /* uploader.onWhenAddingFileFailed = function(item /!*{File|FileLikeObject}*!/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };*/
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
  /*  $scope.$watch('tag',function () {
        console.log(11)
        vm.com.tagList=[...tag]
    },true)*/
vm.h=function () {

}
});
