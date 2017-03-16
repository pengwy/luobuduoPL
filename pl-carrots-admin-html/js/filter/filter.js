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
app.filter('education',function (educationtype) {
    return function (type) {
        for(var i=0;i<educationtype.length;i++){
            if(type ===  educationtype[i].type){
                return educationtype[i].name
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



//省
