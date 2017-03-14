/**
 * Created by py on 2017/3/14.
 */

'use strict';
app.controller('login',function ($state) {
    var vm =this;
    vm.go=function () {
        $state.go('app.dashboard')
    }

});