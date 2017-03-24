/**
 * Created by py on 2017/3/14.
 */

'use strict';
app.controller('accountDetail',function ($scope,tt,$filter) {
    var vm =this;
    var getInf;
    //获取下拉框的值
    vm.list = JSON.parse(localStorage.roleList);
//判断新增还是编辑
    if(localStorage.account.length>2){
        //数据绑定
         var account=JSON.parse(localStorage.account);
         var id=account.id;
         var num=$filter('accountNum')(account.roleID);
        vm.account={
            name:account.name,
            roleID:vm.list[num]
        };
        //提交
         getInf=function () {
            vm.inf={
                id:id,
                name:vm.account.name,
                mobile:vm.account.mobile,
                pwd:vm.account.pwd,
                newPwd:vm.account.newPwd,
                roleID:vm.account.roleID.id,
                status:account.status,
                createBy:account.createBy,
                updateBy:account.updateBy,
                updateAt:account.updateAt,
                createAt:account.createAt
            }
        };
    }else {
        //数据绑定
        vm.account={
            roleID:vm.list[0]
        };
        //提交
        getInf=function () {
            vm.inf={
                name:vm.account.name,
                mobile:vm.account.mobile,
                pwd:vm.account.pwd,
                newPwd:vm.account.newPwd,
                roleID:vm.account.roleID.id
            }
        };
    }
    //判断新旧密码
    vm.go=function () {
        vm.g=false;
        if(vm.account.pwd!=vm.account.newPwd){
            vm.g=!vm.g;
        }
        console.log(vm.g)
    };


    $scope.$watch('vm.account.roleID',function () {
        console.log($scope.form)
    },true);

//返回上级页面
    vm.goBack=tt.goBack;

    vm.addAccount=function () {
        getInf();
        tt.addAccount(vm.inf,id)
    }

});

