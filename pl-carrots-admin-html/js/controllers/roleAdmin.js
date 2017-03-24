/**
 * Created by py on 2017/3/14.
 */
'use strict';

app.controller('roleAdmin',function ($scope,$http) {
    var vm = this;
    vm.roles = function () {
        return $http({
            url:"/carrots-admin-ajax//a/u/multi/role",
            method:'get',
            params:vm.data
        }).then(function (res) {
            console.log(res);
            vm.roleList = res.data.data.roleList
        })
    };
    vm.a = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/role/",
            method:'get'
        }).then(function (res) {
            var ids = res.data.data.ids;
            vm.data = {ids};
            vm.roles();
        })
    };
    vm.a();
    /*删除模块*/
    vm.deleteRole = function (x) {
        var id = x.id;
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
                        url:"/carrots-admin-ajax/a/u/role/"+id,
                        method:'delete',
                    }).then(function (re) {
                           alert(re);
                        }
                    )
                }
            }
        });
    };
});