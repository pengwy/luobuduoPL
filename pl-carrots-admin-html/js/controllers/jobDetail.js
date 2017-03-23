/**
 * Created by py on 2017/3/14.
 */

'use strict';
app.controller('jobDetail',function ($scope,$stateParams,$http,experienceType,educationType,compensationType,category,subcategory) {
    var vm =this;
    console.log($stateParams.id);
    var id =$stateParams.id;
    vm.tags = [];
    vm.newTag='';


    //请求和初始化数据
    vm.a = function () {
        return $http({
            url:"/carrots-admin-ajax/a/profession/"+id,
            method:'get',
        }).then(function (res) {
            console.log(res);
            vm.res = res.data.data;
            vm.name = vm.res.name;
            vm.companyName =  vm.res.companyName;
            vm.tags = vm.res.tags;
            vm.exp = vm.res.experience;
            vm.edu = vm.res.education;
            vm.compen = vm.res.compensation;
            vm.cate = vm.res.category;
            vm.subcate = vm.res.subCategory;
            vm.responsibility =vm.res.responsibility;
            vm.requisite = vm.res.requisite;
            vm.boon = vm.res.boon;
            vm.id = vm.res.id;

            vm.temp=[];
            for (var i=0;i<vm.tags.length;i++){
                vm.temp.push(vm.tags[i].tag)
            }
            vm.set = new Set(vm.temp);
            //添加
            vm.addTag = function () {
                vm.set.add(vm.newTag);
                console.log(vm.set.entries);
               vm.temp=[...vm.set];
            };
            //删除
            vm.delTag = function (idx) {
                vm.set.delete(idx);
                vm.temp=[...vm.set];
            };
            //提交修改
            vm.submiteJob = function () {
                var tags = [];
                var tag = {};
                for (var i = 0;i<vm.temp.length;i++){
                    tag = {tag:vm.temp[i]};
                    tags.push(tag);
                }
                console.log(tags);
                var profession = {
                    id:vm.id,
                    boon:vm.boon,
                    category:vm.cate,
                    name:vm.name,
                    companyName:vm.companyName,
                    experience:vm.exp,
                    education:vm.edu,
                    compensation:vm.compen,
                    subCategory:vm.subcate,
                    responsibility:vm.responsibility,
                    requisite:vm.requisite,
                };
                var params = {
                    tags: tags,
                    profession:profession
                };
                console.log(params);
                var id = vm.id;
                return $http({
                    url:"/carrots-admin-ajax/a/u/profession/"+id,
                    method:"PUT",
                    params:$.param(params),
                    headers:{ 'contentType':'Application/json'}
                }).then(function (res) {
                      console.log(res)
                  }
                )
            };
        })
    };
    vm.a();
    vm.expType = experienceType;
    vm.eduType = educationType;
    console.log(vm.eduType);
    vm.compenType = compensationType;
    vm.cateType = category;
    vm.subType = subcategory;
    vm.subcateType = [];
    $scope.$watch('vm.cate',function(){
        vm.subcateType = vm.subType[vm.cate-1].data;
    },true);



});
