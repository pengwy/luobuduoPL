/**
 * Created by py on 2017/3/14.
 */
'use strict';
app.controller('comList',function (industrytype,financingtype,$scope,$filter) {
    var vm =this;
    vm.se={
        industry:industrytype,
        financing:financingtype
    };

    vm.company={
        name:'',
        industry:vm.se.industry[0],
        financing:vm.se.financing[0]
    };
    $scope.$watch('vm.company',function () {
        console.log(vm.company.industry.type)
    },true)

});