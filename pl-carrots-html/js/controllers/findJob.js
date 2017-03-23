/**
 * adminUserCtrlFn
 * Created by pkcms.cn on 2016/6/24.
 */


app.controller('findJobCtrl',function ($scope,$http,$state,$location) {
    var vm = this;
    vm.params = $state.params;
    vm.name ='';
    vm.banner=[];
    vm.x='false';
    vm.y='true';
    vm.status = true;
    vm.prdt = {"产品":1,"UI":2,"QA":3};
    vm.tech = {"Andriod":4,"IOS":5,"WEB":6,"OP":7,"Java":8};
    vm.bigData = { "NLP":9,"DM":10,"DL":11};
    vm.levl1 = {"不限":1,"助理":1,"初级":1,"中级": 1,"高级":1,"总监":1};
    vm.levl2 = {"不限":2,"初级":2,"中级": 2,"高级":2,"总监":2};
    vm.levl3 = {"不限":3,"初级":3,"中级": 3,"高级":3};
    vm.levl4 = {"不限":4,"初级":4,"中级":4,"高级":4};
    vm.levl5 = {"不限":5,"初级":5,"中级": 5,"高级":5};
    vm.levl6 = {"不限":6,"初级":6,"中级":6,"高级":6};
    vm.levl7 = {"不限":7,"初级":7,"中级": 7,"高级":7};
    vm.levl8 = {"不限":8,"初级":8,"中级": 8,"高级":8,"总监":8};
    vm.levl9 = {"不限":9,"初级":9,"中级": 9,"高级":9};
    vm.levl10 = {"不限":10,"初级":10,"中级":10,"高级":10};
    vm.levl11 = {"不限":11,"初级":11,"中级": 11,"高级":11};

    vm.category ='';/*职业类型*/
    vm.subCategory = '';/*职业级别*/


    /*获取banner图*/
    vm.article = function() {
        return $http({
            url:"/carrots-ajax/a/article/search",
            method:'get'
        })
    };
    vm.article().then(function (response) {
        vm.ban = response.data.data.articleList[2].img;
        vm.banner = response.data.data.articleList;
        console.log(vm.banner.length)
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides1 = $scope.slides1= [];
        var currIndex = 0;
        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };
        for(var i = 0; i <vm.banner.length; i++){
            slides1.push({
                image: vm.banner[i].img,
                id:currIndex++
            });
        }
    });

    /*职业搜索数据绑定*/
    vm.search = function (e) {
        vm.category = e;
        /*console.log(vm.category);*/
        $state.go('app.searchJob',{category:vm.category })
    };
    /*子目录入口的搜索*/
    vm.lookfor = function (e) {
        vm.category = e.y;
        if(e.$index==0){
            vm.subCategory = null;
        }
        else {
            vm.subCategory =  e.$index;
        }


        console.log( "这是"+vm.subCategory);
        $state.go('app.searchJob',{category:vm.category,subCategory:vm.subCategory })
    };
    $(".m-prdt").hover(function () {
        $(".m-prdt>.m-ltab").css({"background":"white","color":"#e85662"});
        $(".m-prdt>.m-hvprdt").css({"background":"white","color":"black","display":"block"})
        $("#icon1").attr('src','images/icon1.png');
    },function () {
        $(".m-prdt>.m-ltab").css({"background":"#e85662","color":"white"});
        $(".m-prdt>.m-hvprdt").css({"background":"white","color":"black","display":"none"})
        $("#icon1").attr('src','images/zzz-jishu.png');
    });

    $(".m-tech").hover(function () {
        $(".m-tech>.m-ltab").css({"background":"white","color":"#e85662"});
        $(".m-tech>.m-hvtech").css({"background":"white","color":"black","display":"block"})
        $("#icon2").attr('src','images/zzz-chanpin-hov.png');
    },function () {
        $(".m-tech>.m-ltab").css({"background":"#e85662","color":"white"});
        $(".m-tech>.m-hvtech").css({"background":"white","color":"black","display":"none"})
        $("#icon2").attr('src','images/zzz-chanpin.png');
    });

    $(".m-data").hover(function () {
        $(".m-data>.m-ltab").css({"background":"white","color":"#e85662"});
        $(".m-data>.m-hvdata").css({"background":"white","color":"black","display":"block"})
        $("#icon3").attr('src','images/zzw-sheji-hov.png');
    },function () {
        $(".m-data>.m-ltab").css({"background":"#e85662","color":"white"});
        $(".m-data>.m-hvdata").css({"background":"white","color":"black","display":"none"})
        $("#icon3").attr('src','images/zzw-sheji.png');
    });




    /*获取最新职位*/
    vm.getnJob = function () {
        return $http({
            url:"/carrots-ajax/a/profession/search",
            method:'get',
            params:{size:8,recommend:0}
        })
    };
    vm.getnJob().then(function (response) {
        vm.njob = response.data.data;
        console.log(vm.njob);
    });
    /*获取推荐职位*/
    vm.getrJob = function () {
        return $http({
            url:"/carrots-ajax/a/profession/search",
            method:'get',
            params:{size:8,recommend:1}
        })
    };
    vm.getrJob().then(function (response) {
        vm.rjob = response.data.data;
        /* console.log(vm.rjob[2]);*/
    });
    vm.swhJob = function () {

    };
    /*获取推荐公司*/
    vm.getcpy = function () {
        return $http({
            url:"/carrots-ajax/a/company/search",
            method:'get',
            params:{size:4,recommend:1}
        })
    };
    vm.getcpy().then(function (response) {
        vm.rcpy = response.data.data;
        console.log(vm.rcpy);
    });
/*竖向banner图*/
    vm.lbanner = function () {
        return $http({
            url:"/carrots-ajax/a/company/search",
            method:'get',
            params:{size:4,recommend:0}
        })
    };
    vm.lbanner().then(function (response) {
        vm.lban = response.data.data;
        console.log(vm.lban);
        /*根据id获取职位信息*/

        $scope.myInterval = 10000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;
        /*获取职位信息*/

        $scope.addSlide = function() {
            vm.id = vm.lban[i].id;
            vm.getjob = function () {
                return $http({
                    url:'/carrots-ajax/a/profession/search',
                    method:'get',
                    params:{id:vm.id }
            })
            };

            slides.push({
                image: vm.lban[i].logo,
                id: currIndex++,
                name:vm.lban[i].name,
                slogan:vm.lban[i].slogan,
                financing:vm.lban[i].financing
            });

        };
        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }
        console.log(slides)
    });

    /*----------------------------------------*/
});











