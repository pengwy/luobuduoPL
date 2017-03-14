/**
 * Created by py on 2017/3/1.
 */

"use strict";
    app.controller("aboutUsCtrl", function () {
        var vm =this;
        vm.show=localStorage.hehe;
        if(localStorage.hehe==1||localStorage.hehe==3){
            vm.show=true
        }else if(localStorage.hehe==2){
            vm.show=false
        }
        vm.change=function () {
            vm.show=!vm.show
        }

    });

