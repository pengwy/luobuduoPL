/**
 * Created by py on 2017/3/14.
 */
'use strict';
app.controller('comList',function ($state,industrytype,financingtype,$scope,approvedStatus,freezedStatus,province,city,country,tt) {
    var vm =this;
    //搜索面板值
    vm.se={
        industry:industrytype,
        financing:financingtype,
        approvedStatus:approvedStatus,
        freezedStatus:freezedStatus,
        province:province,
        city:[{"cityId": '', "cityName": "请选择城市"}],
        country:[{"countryId": '',"countryName": "请选择地区"}]
    };

    //搜索面板绑定
   vm.company={
        name:'',
        industry:vm.se.industry[0],
        financing:vm.se.financing[0],
        approvedStatus:vm.se.approvedStatus[0],
        freezedStatus:vm.se.freezedStatus[0],
        province:vm.se.province[0],
        city:vm.se.city[0],
        country:vm.se.country[0],
        page:1
    };

    //省的变化
    $scope.$watch('vm.company.province',function () {
        var t = vm.se.city.length;
        vm.se.city.splice(1,t);
        angular.forEach(city,function (data) {
            if(vm.company.province.proId==data.proId){
                vm.se.city.push(data);
            }
            vm.company.city=vm.se.city[0]
        });
    },true);

    //市的变化
    $scope.$watch('vm.company.city',function () {
        var t = vm.se.country.length;
        vm.se.country.splice(1,t);
        angular.forEach(country,function (data) {
            if(vm.company.city.cityId==data.cityId){
                vm.se.country.push(data);
            }
            vm.company.country=vm.se.country[0]
        });
    },true);


    //清空
    vm.restting=function () {
        vm.company={
            name:'',
            industry:vm.se.industry[0],
            financing:vm.se.financing[0],
            approvedStatus:vm.se.approvedStatus[0],
            freezedStatus:vm.se.freezedStatus[0],
            province:vm.se.province[0],
            city:vm.se.city[0],
            country:vm.se.country[0],
        };
    };


    //新增公司跳转
    vm.newCom=function () {
        $state.go('app.comDetail')
    }


    //将搜索值转为数字
    vm.gg=function () {
        vm.inf={
            name:vm.company.name,
            industry:vm.company.industry.type,
            financing:vm.company.financing.type,
            approved:vm.company.approvedStatus.type,
            freezed:vm.company.freezedStatus.type,
            province:vm.company.province.proId,
            city:vm.company.city.cityId,
            country:vm.company.country.countryId,
            page:vm.company.page
        }
    };
    //发送请求
    vm.kk=function () {
        tt.getCom(vm.inf).then(function(res) {
            //获取值
            vm.comList=res.data.data;
            //页面数
            vm.total=res.data.total;
            //公司行业数组去重
            function unique(arr){
                var set = new Set(arr);
                return Array.from(set);
            }
            /*angular.forEach(vm.comList,function (data) {
                 var n = [data.industryList[0]]; //结果数组
                    //从第二项开始遍历
                    for(var i = 1; i < data.industryList.length; i++) {
                        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
                        //那么表示第i项是重复的，忽略掉。否则存入结果数组
                        if (data.industryList.indexOf(data.industryList[i]) == i) n.push(data.industryList[i]);
                    }
                data.industryList = n;
            })*/
            angular.forEach(vm.comList,function (data) {
                data.industryList= unique(data.industryList)

            })
        })
    }

    //翻页
    vm.pageChanged=function () {
        vm.gg();
        vm.kk();
    }
});

