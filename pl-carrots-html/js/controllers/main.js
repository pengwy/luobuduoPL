/**
 * Created by py on 2017/3/14.
 */

'use strict';

app.controller('mainCtrl',function ($rootScope,$state) {
    var vm = this;

    $rootScope.$state = $state;

    vm.goUs=function () {
        localStorage.hehe=1
    };
    vm.goCon=function () {
        localStorage.hehe=2
    }

})

