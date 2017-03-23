/**
 * Created by Lance on 2017/3/8.
 */
app.controller('searchJobCtrl',function ($scope,$http,$stateParams,$state,$rootScope) {
        /*进入页面*/
        var vm = this;
    vm.params = $state.params;
        vm.flev = '';
        vm.slev ='';
        vm.thlev ='';
        vm.name='';
        vm.no = 'false';
        console.log(typeof ($stateParams.category));
        vm.a = $stateParams.subCategory;

        if ($stateParams.category){
            vm.jdgCate= [false,false,false,false,false,false,false,false,false,false,false,false];
            vm.jdgCate[parseInt($stateParams.category)]=true;

        }else{
            vm.jdgCate= [true,false,false,false,false,false,false,false,false,false,false,false];
        }
        if($stateParams.subCategory){
            if ($stateParams.category==1){
                vm.flev =true;
                vm.jdgOpt =[false,false,false,false,false,false];
                vm.jdgOpt[parseInt($stateParams.subCategory)] = true;
            }
            else if($stateParams.category==2||$stateParams.category==8){
                vm.slev =true;
                vm.jdgOpt =[false,false,false,false,false];
                vm.jdgOpt[parseInt($stateParams.subCategory)] = true;
            }
            else{
                vm.thlev =true;
                vm.jdgOpt =[false,false,false,false];
                vm.jdgOpt[parseInt($stateParams.subCategory)] = true;
            }
        }/*else{
            $stateParams.subCategory=
        }*/
      /*  console.log(vm.flev);*/
        /*切换搜索*/

        vm.cityOpt = ["不限","北京"];
        vm.industryOpt = ["不限","移动互联网","电子商务","企业服务","O2O","教育","金融","游戏"];/*index-1*/
        vm.categoryOpt = ["不限","产品","UI","QA","Andriod","IOS","WEB","OP","Java","NLP","DL","DM"];
        vm.eduOpt = ["不限","大专","本科","硕士","博士及以上"];
        vm.expOpt = ["不限","应届","1-2年","3-5年","6-9年","10年以上"];
        vm.compenOpt = ["不限","0-8k","9-15k","16-25k","26k以上"];
        vm.updateOpt = ["不限","今天","3天内","7天内"];
        vm.subCategoryOpt1 = ["不限","助理","初级","中级","高级","总监"];
        vm.subCategoryOpt2 = ["不限","初级","中级","高级","总监"];
        vm.subCategoryOpt3 = ["不限","初级","中级","高级"];
        /*选择所属行业*/
        vm.industryArr =[];
        vm.jdgInd= [true,false,false,false,false,false,false,false];
        vm.schIndu= function (idx) {

            if (idx==0){
                vm.industryArr =[];
            }
            else  {
                if(vm.industryArr.indexOf(idx)==-1){
                    vm.industryArr.push(idx);
                }
                else   {
                        var b=vm.industryArr.indexOf(idx);
                        vm.industryArr.splice(b,1)
                }
            }
           /* console.log(vm.industryArr);*/
            if (vm.industryArr.length==0){
                vm.jdgInd = [true,false,false,false,false,false,false,false];
            }
            else {
                vm.jdgInd[0]=false;

                vm.jdgInd[idx]=!vm.jdgInd[idx];
            }
           /* console.log(vm.jdgInd);*/
        };
        /*职位类别*/
        if ($stateParams.category){
            vm.cateArr =[ parseInt($stateParams.category)]
        } else {
            vm.cateArr= [];
        }
        vm.schCate= function (idx) {
            if (idx==0){
                vm.cateArr =[];
            }
            else  {
                if(vm.cateArr.indexOf(idx)==-1){
                    vm.cateArr.push(idx);
                }
                else   {
                    var b=vm.cateArr.indexOf(idx);
                    vm.cateArr.splice(b,1)
                }
            }
           /* console.log(vm.cateArr);*/
            if (vm.cateArr.length==0){
                vm.jdgCate = [true,false,false,false,false,false,false,false];
            }
            else {
                vm.jdgCate[0]=false;

                vm.jdgCate[idx]=!vm.jdgCate[idx];
            }
            /*子目录ngShow判断*/
            if (vm.cateArr.length==1){
                if(vm.cateArr[0]==1){
                    vm.flev = true;
                }
                else if (vm.cateArr[0]==2||vm.cateArr[0]==2){
                    vm.slev = true;
                }
                else{
                    vm.thlev = true;
                }
            }else {
                vm.flev = false;
                vm.slev = false;
                vm.thlev = false;
            }
            if(vm.flev==true){
                vm.jdgOpt=vm.jdgOpt1
            }else if(vm.slev==true){
                vm.jdgOpt=vm.jdgOpt2
            }else if(vm.slev==true){
                vm.jdgOpt=vm.jdgOpt3
            }
          /*  console.log(vm.jdgCate);*/
        };
        /*subcategory*/
        vm.jdgOpt3 = [true,false,false,false];
        vm.jdgOpt2 = [true,false,false,false,false];
        vm.jdgOpt1= [true,false,false,false,false,false];
        if ($stateParams.subCategory){
            vm.optArr = [parseInt($stateParams.subCategory)];
        }else {
            vm.optArr = [];
        }

        vm.schOpt =function (idx) {
            if (idx==0){
                vm.optArr =[];
            }
            else  {
                if(vm.optArr.indexOf(idx)==-1){
                    vm.optArr.push(idx);
                }
                else   {
                    var b=vm.optArr.indexOf(idx);
                    vm.optArr.splice(b,1)
                }
            }
            console.log(vm.optArr);
            if (vm.optArr.length==0){
                if(vm.flev==true){
                    vm.jdgOpt = [true,false,false,false,false,false]
                }
                else if(vm.slev==true){
                    vm.jdgOpt = [true,false,false,false,false]
                }else if(vm.thlev==true){
                    vm.jdgOpt = [true,false,false,false]
                }

            }
            else {
                vm.jdgOpt[0]=false;
                vm.jdgOpt[idx]=!vm.jdgOpt[idx];
            }
            console.log(vm.jdgOpt)

        };
        /*所属地区*/
        vm.cityArr = [];
        vm.jdgCity = [true,false];
        vm.schCity= function (idx) {
            console.log(vm.industryArr);
        if (idx==0){
            vm.cityArr =[];
        }
        else  {
            if(vm.cityArr.indexOf(idx)==-1){
                vm.cityArr.push(idx);
            }
            else   {
                var b=vm.cityArr.indexOf(idx);
                vm.cityArr.splice(b,1)
            }
        }
        console.log(vm.cityArr);
        if (vm.cityArr.length==0){
            vm.jdgCity = [true,false];
        }
        else {
            vm.jdgCity[0]=false;

            vm.jdgCity[idx]=!vm.jdgCity[idx];
        }
        console.log(vm.jdgCity);
    };
        /*学历*/
        vm.eduArr = [];
        vm.jdgEdu = [true,false,false,false,false];
        vm.schEdu= function (idx) {
        if (idx==0){
            vm.eduArr =[];
        }
        else  {
            if(vm.eduArr.indexOf(idx)==-1){
                vm.eduArr.push(idx);
            }
            else   {
                var b=vm.eduArr.indexOf(idx);
                vm.eduArr.splice(b,1)
            }
        }
        console.log(vm.eduArr);
        if (vm.eduArr.length==0){
            vm.jdgEdu = [true,false,false,false,false];
        }
        else {
            vm.jdgEdu[0]=false;

            vm.jdgEdu[idx]=!vm.jdgEdu[idx];
        }
        console.log(vm.jdgEdu);
    };
        /*工作经验*/
        vm.expArr = [];
        vm.jdgExp = [true,false,false,false,false,false];
        vm.schExp= function (idx) {
                if (idx==0){
                    vm.expArr =[];
                }
                else  {
                    if(vm.expArr.indexOf(idx)==-1){
                        vm.expArr.push(idx);
                    }
                    else   {
                        var b=vm.expArr.indexOf(idx);
                        vm.expArr.splice(b,1)
                    }
                }
                console.log(vm.expArr);
                if (vm.expArr.length==0){
                    vm.jdgExp = [true,false,false,false,false,false];
                }
                else {
                    vm.jdgExp[0]=false;
        
                    vm.jdgExp[idx]=!vm.jdgExp[idx];
                }
                console.log(vm.jdgExp);
            };
         /*salary*/
        vm.compenArr = [];
        vm.jdgCompen = [true,false,false,false,false];
        vm.schCompen= function (idx) {
            if (idx==0){
                vm.compenArr =[];
            }
            else  {
                if(vm.compenArr.indexOf(idx)==-1){
                    vm.compenArr.push(idx);
                }
                else   {
                    var b=vm.compenArr.indexOf(idx);
                    vm.compenArr.splice(b,1)
                }
            }
            console.log(vm.compenArr);
            if (vm.compenArr.length==0){
                vm.jdgCompen = [true,false,false,false,false];
            }
            else {
                vm.jdgCompen[0]=false;

                vm.jdgCompen[idx]=!vm.jdgCompen[idx];
            }
            console.log(vm.jdgCompen);
        };
        /*updateDate*/
        vm.updateAt ="";
        vm.jdgUpdate = [true,false,false,false,false];
        vm.schUpdate = function (idx) {
            vm.jdgUpdate = [false,false,false,false,false];
            vm.updateAt = idx;
            vm.jdgUpdate[idx] =true;
            console.log(vm.jdgUpdate);

        };
        /*clear and search*/
        vm.submit = function () {
            vm.city = vm.cityArr.toString();
            vm.industry = vm.industryArr.toString();
            vm.category = vm.cateArr.toString();
            if (vm.cateArr.length==1){
                vm.subCategory = vm.optArr.toString();
            }else {
                vm.subCategory=null;
            }


            vm.education = vm.eduArr.toString();
            vm.experience = vm.expArr.toString();
            vm.compensation = vm.compenArr.toString();
            return $http({
                url:"/carrots-ajax/a/profession/search",
                method:'get',
                params:{
                 /*   recommend:0,*/
                    city:vm.city,
                    category:vm.category,
                    compensation:vm.compensation,
                    education:vm.education,
                    experience:vm.experience,
                    industry:vm.industry,
                    page:vm.currentPage,
                    /*size:vm.currentPage,*/
                    subCategory:vm.subCategory,
                    updateAt:vm.updateAt,
                    name:vm.name
                }
            }).then(function (response) {
                vm.res = response.data.data;
                console.log(vm.res);
                vm.totalItems = response.data.total;
                console.log(vm.totalItems);
                if (vm.res.length ==0){
                    vm.no = true;
                }else {
                    vm.no = false;
                }
                console.log(vm.no)


            })
        };

        vm.submit();
        vm.clearAll = function () {
                    vm.industryArr = [];
                    vm.jdgInd = [true,false,false,false,false,false,false,false];
                    vm.cateArr= [];
                    vm.jdgCate= [true,false,false,false,false,false,false,false,false,false,false,false];
                    vm.optArr=[];
                    vm.flev = '';
                    vm.slev ='';
                    vm.thlev ='';
                    vm.jdgOpt=[];
                    vm.jdgOpt3 = [true,false,false,false];
                    vm.jdgOpt2 = [true,false,false,false,false];
                    vm.jdgOpt1= [true,false,false,false,false,false];
                    vm.cityArr = [];
                    vm.jdgCity = [true,false];
                    vm.eduArr = [];
                    vm.jdgEdu = [true,false,false,false,false];
                    vm.expArr = [];
                    vm.jdgExp = [true,false,false,false,false,false];
                    vm.compenArr = [];
                    vm.jdgCompen = [true,false,false,false,false];
                    vm.updateAt ="";
                    vm.jdgUpdate = [true,false,false,false,false];
                };
        vm.totalItems = '';
        vm.currentPage = 1;
        vm.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
            };
        vm.pageChanged = function () {
            vm.submit();
        }
});