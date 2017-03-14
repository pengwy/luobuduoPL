/**
 * Created by py on 2017/3/7.
 */

//职业类
"use strict";
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
        if(type.length!=1){
            for(var i=0;i<industrytype.length;i++){
                if(type ===  industrytype[i].type){
                    return industrytype[i].name
                }
            }
        }

    }
})


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
//省
app.filter('province',function (province) {
    return function (type) {
        for(var i=0;i<province.length;i++){
            if(type ===  province[i].ProID){
                return province[i].ProName
            }}
    }});