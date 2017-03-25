/**
 * Created by Administrator on 2017/3/8.
 */
app.controller('searchCpyCtrl',function ($scope,$http,$stateParams,$state,$rootScope) {
    var vm = this;
    vm.no = false;
    vm.name = $stateParams.name;
    console.log(vm.name);
    vm.params = $state.params;
    vm.cityOpt = ["不限","北京"];
    vm.industryOpt = ["不限","移动互联网","电子商务","企业服务","O2O","教育","金融","游戏"];/*index-1*/
    vm.financeOpt = ["不限","无需融资","天使轮","A轮","B轮","C轮","D轮","上市公司"];
    /*所属地区*/
    vm.cityArr = [];
    vm.jdgCity = [true,false];
    vm.schCity= function (idx) {
        console.log(vm.industryArr);
        if (idx==0){
            vm.cityArr =[];
        }
        else  {
            if(vm.cityArr.indexOf(idx)==-1){
                vm.cityArr.push(idx);
            }
            else   {
                var b=vm.cityArr.indexOf(idx);
                vm.cityArr.splice(b,1)
            }
        }
        console.log(vm.cityArr);
        if (vm.cityArr.length==0){
            vm.jdgCity = [true,false];
        }
        else {
            vm.jdgCity[0]=false;

            vm.jdgCity[idx]=!vm.jdgCity[idx];
        }
        console.log(vm.jdgCity);
    };
    /*选择所属行业*/
    vm.industryArr =[];
    vm.jdgInd= [true,false,false,false,false,false,false,false];
    vm.schIndu= function (idx) {

        if (idx==0){
            vm.industryArr =[];
        }
        else  {
            if(vm.industryArr.indexOf(idx)==-1){
                vm.industryArr.push(idx);
            }
            else   {
                var b=vm.industryArr.indexOf(idx);
                vm.industryArr.splice(b,1)
            }
        }
        console.log(vm.industryArr);
        if (vm.industryArr.length==0){
            vm.jdgInd = [true,false,false,false,false,false,false,false];
        }
        else {
            vm.jdgInd[0]=false;

            vm.jdgInd[idx]=!vm.jdgInd[idx];
        }
        console.log(vm.jdgInd);
    };
    /*financing*/
    vm.financeArr =[];
    vm.jdgFin= [true,false,false,false,false,false,false,false];
    vm.schFin= function (idx) {

        if (idx==0){
            vm.financeArr =[];
        }
        else  {
            if(vm.financeArr.indexOf(idx)==-1){
                vm.financeArr.push(idx);
            }
            else   {
                var b=vm.financeArr.indexOf(idx);
                vm.financeArr.splice(b,1)
            }
        }
        console.log(vm.financeArr);
        if (vm.financeArr.length==0){
            vm.jdgFin = [true,false,false,false,false,false,false,false];
        }
        else {
            vm.jdgFin[0]=false;

            vm.jdgFin[idx]=!vm.jdgFin[idx];
        }
        console.log(vm.jdgFin);
    };
    /*搜索和清空*/
        vm.submit = function () {
        vm.city = vm.cityArr.toString();
        vm.industry = vm.industryArr.toString();
        vm.financing = vm.financeArr.toString();

        return $http({
            url:"/carrots-ajax/a/company/search",
            method:'get',
            params:{
                name:vm.name,
                city:vm.city,
                industry:vm.industry,
                financing:vm.financing,
                size:9,
                page:vm.currentPage

            }
        }).then(function (response) {
            vm.res = response.data.data;
            console.log(response);
            vm.totalItems = response.data.total;
            // console.log(vm.totalItems);
            if(vm.res.length==0){
                vm.no = true;
            }


        })
    };
    vm.submit();
    vm.clearAll = function () {
        vm.industryArr = [];
        vm.jdgInd = [true,false,false,false,false,false,false,false];
        vm.cateArr= [];
        vm.jdgCate= [true,false,false,false,false,false,false,false,false,false,false,false];
        vm.jdgFin = [true,false,false,false,false,false,false,false];
        vm.cityArr = [];
        vm.jdgCity = [true,false];
        vm.submit();
    };
    vm.totalItems = '';
    vm.currentPage = 1;
    vm.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    vm.pageChanged = function () {
        vm.submit();
    }
});