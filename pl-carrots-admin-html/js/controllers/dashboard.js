/**
 * Created by py on 2017/3/14.
 */

'use strict';
app.controller('dashboard',function ($state) {
    var vm = this;

    vm.go=function () {
        $state.go('login')
    }
})