/**
 * Created by py on 2017/3/14.
 */

'use strict';

app.controller('pwdAmend',function (tt,$scope) {
    var vm = this;

    vm.pwd={}
    vm.changePwd=function (params) {
        console.log($scope.form)
        tt.pwd(params)
    };
//判断新旧密码
    vm.go=function () {
        vm.g=false
        if(vm.pwd.newPwd!=vm.pwd.newPwdAgain){
                vm.g=!vm.g
        }
    }
});