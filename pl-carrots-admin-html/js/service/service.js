/**
 * Created by py on 2017/3/15.
 */
app.service('tt',function ($http,$state) {

        this.getCom = function(params){
            return $http.get("/carrots-admin-ajax/a/company/search/",{params:params});
        };

        this.comDetail=function (id) {
            return $http.delete("/carrots-admin-ajax/a/u/company/"+id);
        }

    //删除
    this.comDelete=function (g) {
        var id = g.s.id
        bootbox.confirm({
            title: "操作提示",
            message: "<p style='text-align: center'>删除后该公司信息将注销</p>" +
            "<p style='text-align: center'>是否执行该操作</p>",
            buttons: {
                confirm: {
                    label: '确定',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if(result==true){
                    $http.delete("/carrots-admin-ajax/a/u/company/"+id).then(function (h) {
                        $state.reload('app.comList')
                    })
                }

            }
        });
    }
//解冻
    this.comFreezed=function (g) {
        var id = g.s.id;
            var ty,text;
       if(g.s.freezed==1){
           ty=0;
           text="<p style='text-align: center'>解冻后该公司下的信息将可继续使用</p>"
       }else {
           ty=1;
           text="<p style='text-align: center'>冻结后该公司下的所有信息将不可用</p>"
       }
        bootbox.confirm({
            title: "操作提示",
            message: text+
            "<p style='text-align: center'>是否执行该操作</p>",
            buttons: {
                confirm: {
                    label: '确定',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if(result==true){
                    $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/company/status',
                        params:{id:id, type:0, status:ty}
                    }).then(function () {
                        $state.reload('app.comList')
                    })
                }

            }
        });
    }
//认证
    this.comApproved=function (g) {
        var id = g.s.id;
        var ty,text
        if(g.s.approved==1){
            ty=0;
            text="<p style='text-align:center'>解除认证后该公司将不再标记为推荐公司</p>";

        }else {
            ty=1;
            text="<p style='text-align:center'>认证后该公司将被标记为推荐公司</p>";
        }
        bootbox.confirm({
                    title: "操作提示",
                    message: text+"<p style='text-align: center'>是否执行该操作</p>",
                    buttons: {
                        confirm: {
                            label: '确定',
                            className: 'btn-success'
                        },
                        cancel: {
                            label: '取消',
                            className: 'btn-danger'
                        }
                    },
                    callback: function (result) {
                        if(result==true){
                            $http({
                                method: 'PUT',
                                url: '/carrots-admin-ajax/a/u/company/status',
                                params:{id:id, type:1, status:ty}
                            }).then(function () {
                              $state.reload('app.comList')
                            })
                        }
            }
        });
    }
    //获取article
    this.getArticle=function (params) {
        return $http.get("/carrots-admin-ajax/a/article/search/",{params:params});
    }
//article文字
    this.artA=function (g) {
        var id = g.s.id;
        var ty,text
        if(g.s.status==1){
            ty=2;
            text="<p style='text-align:center'>上线后将在前台展示</p>";
        }else {
            ty=1;
            text="<p style='text-align:center'>删除后该图将直接下架并在本地删除</p>";
        }
        bootbox.confirm({
            title: "操作提示",
            message: text+"<p style='text-align: center'>是否执行该操作</p>",
            buttons: {
                confirm: {
                    label: '确定',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if(result==true){
                    $http({
                        method: 'PUT',
                        url: '/carrots-admin-ajax/a/u/article/status',
                        params:{id:id,status:ty}
                    }).then(function () {
                        $state.reload('app.articleList')
                    })
                }
            }
        });
    }
//article 新增
    this.addArticle=function (params) {
            if(localStorage.article==undefined){
                return $http({
                    method:'POST',
                    url: '/carrots-admin-ajax/a/u/article',
                    params:params
                }).then(function (res) {
                    var text
                    if(res.data.message=='success'){
                         text='新增成功';
                    }else {
                        text='新增失败';
                    }
                    bootbox.alert({
                        title: "操作提示",
                        message:text,
                        callback: function () {
                            if(text=='新增成功'){
                                history.back(-1);
                                localStorage.clear();
                            }
                        }
                    })});
            }else {
                var article =JSON.parse(localStorage.article);
                params.id=article.id;
                params.createBy=article.createBy;
                params.updateBy=article.updateBy;
                params.updateAt=article.updateAt;
                params.createAt=article.createAt;
                return $http({
                    method:'PUT',
                    url: '/carrots-admin-ajax/a/u/article/'+article.id,
                    params:params
                }).then(function (res) {
                    var text
                    if(res.data.message=='success'){
                        text='编辑成功';
                    }else {
                        text='编辑失败';
                    }
                    bootbox.alert({
                        title: "操作提示",
                        message:text,
                        callback: function () {
                            if(text=='编辑成功'){
                                history.back(-1);
                                localStorage.clear();
                            }
                        }
                    })});
            }
    };


//article 删除
    this.articleDe=function (g) {
        var id =g.s.id;
        bootbox.confirm({
            title: "操作提示",
            message:  "<p style='text-align: center'>删除后该图将直接下架并在本地删除</p>"
                +"<p style='text-align: center'>是否执行该操作</p>",
            buttons: {
                confirm: {
                    label: '确定',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if(result==true){
                    $http({
                        method: 'DELETE',
                        url: '/carrots-admin-ajax/a/u/article/'+id
                    }).then(function () {
                        $state.reload('app.articleList')
                    })
                }
            }
        });
    }


//修改密码
    this.pwd=function (params) {
        var text;
        $http({
            method: 'PUT',
            url: '/carrots-admin-ajax/a/u/pwd/',
            params:params
        }).then(function (res) {
            text=res.data.message;
            bootbox.alert({
                title: "操作提示",
                message:text,
                callback: function () {
                    $state.reload('app.pwdAmend');
                    if(text=='success'){
                        history.back(-1)
                    }
                }
            });
        })
    };

//获取role
    this.role=function () {
        return $http.get("/carrots-admin-ajax/a/u/role/");
    }

//根据id搜索
    this.role=function (id) {
        return $http.get("/carrots-admin-ajax/a/u/role/");
    }

//生成父子关系
    this.parent=function () {
        var na = JSON.parse(localStorage.roleList);
        var managerList=JSON.parse(localStorage.managerList);
        angular.forEach(na,function (data) {
            data.childId=[];
            for(var i = 0;i<managerList.length;i++){
                if(managerList[i].roleID==data.id){
                    data.childId.push(managerList[i].id)
                }
            }
        });
        localStorage.tt=JSON.stringify(na)
    };

//返回上级页面
    this.goBack=function () {
        localStorage.account=''
        history.go(-1)
    };
//提交Account
    this.addAccount=function (params,id) {
        console.log(id)
        var text;
        if(localStorage.account!=''){
            $http({
                method:'PUT',
                url: '/carrots-admin-ajax/a/u/manager/'+id,
                params:params
            }).then(function (res) {
                text=res.data.message;
                bootbox.alert({
                    title: "操作提示",
                    message:text,
                    callback: function () {
                        if(text=='success'){
                            localStorage.account=''
                            history.back(-1)
                        }
                    }
                });

            })
        }
        else {
            $http({
                method:'POST',
                url: '/carrots-admin-ajax/a/u/manager',
                params:params
            }).then(function (res) {
                text=res.data.message;
                bootbox.alert({
                    title: "操作提示",
                    message:text,
                    callback: function () {
                        if(text=='success'){
                            history.back(-1)
                        }
                    }
                });

            })
        }};

//删除accountDelete
    this.accountDelete=function (g) {
        var id =g.s.id;
        bootbox.confirm({
            title: "操作提示",
            message: "<p style='text-align: center'>你确定要删除吗？</p>",
            buttons: {
                confirm: {
                    label: '确定',
                    className: 'btn-success'
                },
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if(result==true){
                    $http({
                        method: 'DELETE',
                        url: '/carrots-admin-ajax/a/u/manager/'+id
                    }).then(function (res) {
                        text=res.data.message;
                        bootbox.alert({
                            title: "操作提示",
                            message:text,
                            callback: function () {
                                if(text=='success'){
                                    $state.reload('app.accountAdmin')
                                }
                            }
                        });
                    })
                }
            }
        });


}
//编辑account
    this.accountEdti=function (g) {
       localStorage.account=JSON.stringify(g.s);
        $state.go('app.accountDetail')
    }
    //新增公司
    this.addCompany = function(params){
        return $http.post("/carrots-admin-ajax/a/u/company",params)
        }

});