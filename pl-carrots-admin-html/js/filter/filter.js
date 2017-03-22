/**
 * Created by py on 2017/3/15.
 */

//薪资
app.filter('compensation',function (compensationtype) {
    return function (type) {
        for(var i=0;i<compensationtype.length;i++){
            if(type ===  compensationtype[i].type){
                return compensationtype[i].name
            }
        }
    }
})
//融资规模
app.filter('financingtype',function (financingtype) {
    return function (type) {
        for(var i=0;i<financingtype.length;i++){
            if(type ===  financingtype[i].type){
                return financingtype[i].name
            }
        }
    }
})


app.filter('industrytype',function (industrytype) {
    return function (type) {
            for(var i=0;i<industrytype.length;i++){
                if(type ===  industrytype[i].type){
                    return industrytype[i].name
            }
        }

    }
});


//经验
app.filter('experience',function (experiencetype) {
    return function (type) {
        for(var i=0;i<experiencetype.length;i++){
            if(type ===  experiencetype[i].type){
                return experiencetype[i].name
            }}
    }});
//学历
app.filter('education',function (educationType) {
    return function (type) {
        for(var i=0;i<educationType.length;i++){
            if(type ===  educationType[i].type){
                return educationType[i].name
            }}
    }});
//city
app.filter('city',function (city) {
    return function (type) {
        for(var i=0;i<city.length;i++){
            if(type ===  city[i].cityId){
                return city[i].cityName
            }}
    }});
//模块管理
app.filter('moduleurl',function (moduleType) {
    return function (input) {
        for(var i=0;i<moduleType.length;i++){
            if(input===  moduleType[i].id){
                return moduleType[i].url
            }}
    }});
//认证状态
app.filter('approved',function (approvedStatus) {
    return function (type) {
        for(var i=0;i<approvedStatus.length;i++){
            if(type ===  approvedStatus[i].type){
                return approvedStatus[i].name
            }}
    }});

//冻结状态freezed
app.filter('freezed',function (freezedStatus) {
    return function (type) {
        for(var i=0;i<freezedStatus.length;i++){
            if(type ===  freezedStatus[i].type){
                return freezedStatus[i].name
            }}
    }});

//去重数组
app.filter('same',function () {
    return function (type){
        var style=[];
        if(style.length==0){
            style.push(type);
            return type
        }
        else{
            if(style.indexOf(type)==-1){
                style.push(type);
                return type
            }
        }
    }
});

//认证，解除认证
app.filter('approvText',function () {
    return function (type) {
        if(type==='已认证'){
            return '解除'
        }else {
            return '认证'
        }
    }
})


//冻结，解冻
app.filter('freezText',function () {
    return function (type) {
        if(type==='冻结'){
            return '解冻'
        }else {
            return '冻结'
        }
    }

})


//artic上下线
app.filter('articleTypeA',function (statusTypeA) {
    return function (type) {
        for(var i=0;i<statusTypeA.length;i++){
            if(type ===  statusTypeA[i].type){
                return statusTypeA[i].name
            }}
    }
});
//artic类型
app.filter('articleType',function (typeA) {
    return function (type) {
        for(var i=0;i<typeA.length;i++){
            if(type ===  typeA[i].type){
                return typeA[i].name
            }}
    }
});
//上线，下线
app.filter('articleAtatusT',function () {
    return function (type) {
        if(type==='草稿'){
            return '上线'
        }else {
            return '下线'
        }
    }
})
//获取父级名字
app.filter('roleName',function () {
    var na = JSON.parse(localStorage.roleList)
    return function (type) {
        for(var i=0;i<na.length;i++){
            if(type ===  na[i].id){
                return na[i].name
            }}
    }
})

//将类型转化为manager的id数组
/*app.filter('managerList',function () {
    var managerList=JSON.parse(localStorage.managerList);
    var manager=[];
    return function (type) {
        for(var i=0;i<managerList.length;i++){
            if(type ===  managerList[i].roleID){
                manager.push(managerList[i].id)
                return  manager
            }}
    }
});*/
app.filter('managerList',function () {
    var role=JSON.parse(localStorage.tt);
    return function (type) {
        for(var i=0;i<role.length;i++){
            if(type == role[i].id){
                return role[i].childId
            }}
    }
});


