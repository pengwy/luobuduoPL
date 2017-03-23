/**
 * Created by py on 2017/3/14.
 */
'use strict';

app.controller('moduleAdminCtrl',function ($scope,$http,$state) {
    var vm = this;
    /*请求数据并且渲染*/
    vm.module = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/multi/module",
            method:'get',
            params:vm.data
        }).then(function (respon) {
            vm.modules = respon.data.data.moduleList;
            console.log(vm.modules);
        })
    };
    vm.a = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/module/",
            method:'get',
            params:{page:vm.currentPage,size:10}
        }).then(function (resp) {
            /* console.log(resp.data.data.role.permissionsSet);*/
            var ids = resp.data.data.ids;
            vm.totalItems = resp.data.data.total;
            vm.data={ids};
            vm.module();
        })
    };
    vm.a();
/**************************分页*******************************/
    vm.currentPage = 1;
    vm.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    vm.pageChanged = function () {
        vm.a();
    };
    /****************模态框**********************/
   /* vm.deleteMd = function (x) {
        bootbox.confirm({
            message: "确认删除吗？",
            buttons: {
                confirm: {
                    label: '确定',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消操作',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if(result==true){
                    return $http({
                        url:"/carrots-admin-ajax/a/u/profession/status",
                        method:'put',
                        params:{id:x.id}
                    }).then(function (re) {
                            console.log(re);
                        }
                    )
                }
            }
        });
    };*/
    
});