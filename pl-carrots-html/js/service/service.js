/**
 * Created by py on 2017/3/6.
 */

app.service('information',function ($http) {

    //获取公司列表
    this.company = function(params){
        return $http.get("/carrots-ajax/a/company/search/",{params:params});
    };


    //多选按钮
    this.choice = function (key,arr,t) {
        //i为对应的type
        var i = arr[key].type;
        //当前有type在数组中的位置
        var c = t.indexOf(i);
        //如果选则全选，则数组为全选对应的['']
        if(i===''){
            t.push(i);
            var m = t.length;
            t.splice(0,m-1)
        }
        //数组由全选变为具体值
        else if(t[0]===''){
            t[0]=i
        }
        //判断当前值是否在数组中
        else {
            //如果在
            if(c!=-1){
                //删除重复值
                t.splice(c,1)
                //如果删除后为空
                if(t.length==0){
                    t=['']
                }
            }
            //如果不在，添加
            else {
                t.push(i)

            }
        }
        angular.forEach(arr,function (data) {
            for(i=0;i<t.length;i++){
                if(t[i]===data.type){
                    return  data.choose = true;
                }
                else{
                    data.choose = false;
                }
            }
        })
            return t
    };


    //获取详细信息
    this.companyDetail=function (id) {
        return  $http.get("/carrots-ajax/a/company/"+id)
    }

    //获取公司在招职位
   this.companyJob=function (params) {
        return  $http.get("/carrots-ajax/a/profession/search/",{params:params})
    }

    //获取职位详情
    this.jobDetail=function (id) {
        return  $http.get("/carrots-ajax/a/profession/"+id)
    }

    });






