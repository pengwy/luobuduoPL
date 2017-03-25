/**
 * Created by py on 2017/3/14.
 */
'use strict';
app.controller('accountAdmin',function ($http,tt,$filter,$scope,$state,$timeout) {
    var vm =this;

    //先请求所有数据，取得获取下拉选项的值。

   vm.getManger=function () {
        $http.get("/carrots-admin-ajax/a/u/manager/").then(function (res) {
                vm.total=res.data.data.total;
            $http.get("/carrots-admin-ajax/a/u/multi/manager",{params:{ids:res.data.data.ids}}).then(function (res) {
                localStorage.managerList= JSON.stringify(res.data.data.managerList)
               vm.managerList=res.data.data.managerList
            });
        });
   }

    var role = tt.role().then(function (res) {
        $http.get("/carrots-admin-ajax/a/u/multi/role",{params:{ids:res.data.data.ids}}).then(function (res) {
           localStorage.roleList=JSON.stringify(res.data.data.roleList)
        });
    });

    vm.getManger();
   //获取选项卡的值

    var roleList=JSON.parse(localStorage.roleList);
    var managerList=JSON.parse(localStorage.managerList);
    roleList.unshift({id:'',name:'全部'});

    vm.roleList=roleList;
    vm.role=vm.roleList[0];


//搜索
    var pe =tt.parent
    pe()
    var id;

    //清空
    vm.restting=function () {
        vm.role=vm.roleList[0];
        $state.reload('app.accountAdmin')
    }
    //搜索
    vm.sleep=function () {
        $http.get("/carrots-admin-ajax/a/u/multi/manager",
            {params:{ids:$filter('managerList')(vm.role.id)}}).then(function (res) {
            vm.managerList=res.data.data.managerList
        });
    }
    vm.sleep()
    //删除
    vm.accountDelete=tt.accountDelete;

    //编辑
    vm.accountEdti=tt.accountEdti;

//翻页
    vm.pageChanged=function (g) {
            $http.get("/carrots-admin-ajax/a/u/manager/",{params:{page:g}}).then(function (res) {
                $http.get("/carrots-admin-ajax/a/u/multi/manager",{params:{ids:res.data.data.ids}}).then(function (res) {
                    localStorage.managerList= JSON.stringify(res.data.data.managerList)
                    vm.managerList=res.data.data.managerList
                });
            });
    }




});