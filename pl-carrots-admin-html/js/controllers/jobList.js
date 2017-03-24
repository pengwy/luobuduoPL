/**
 * Created by py on 2017/3/14.
 */
'use strict';
app.controller('jobList',function ($scope,$http,industrytype,experienceType,educationType,subcategoryType,categoryType,compensationType,statusType) {
    var vm =this;
    /*datepicker*/
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();


    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    /*------------------form-------------------------------------------------------*/
    /*category:0  compensation:1   education:1  endAt:1489679999999 experience:1 name:456 page:1 size:10 startAt:1488297600000 status:1  subCategory:1*/
    vm.a = function () {
        return $http({
            url:"/carrots-admin-ajax/a/u/role/1",
            method:'get'
        }).then(function (respo) {
            console.log(respo.data.data.role.permissionsSet[66]);
            vm.respo = respo.data.data.role.permissionsSet[66];
        })
    };
     vm.companyName = '';
     vm.name = '';
     vm.expType = experienceType;
     vm.exp = '';
     vm.eduType = educationType;
     vm.edu = '';
     vm.cateType = categoryType;
     vm.cate ='';
     vm.subcateType = subcategoryType;
     vm.subcate ='';
     vm.staType = statusType;
     vm.sta = '';
     vm.compenType = compensationType;
     vm.compen = '';
     vm.startAt='';
     vm.endAt ='';
     //搜索和清空
    vm.submit = function () {
        console.log(vm.startAt.valueOf());
        return $http({
            url:"/carrots-admin-ajax/a/profession/search",
            method:'get',
            params:{
                category:vm.cate,
                compensation:vm.compen,
                companyName:vm.companyName,
                education:vm.edu,
                experience:vm.exp,
                page:vm.currentPage,
                subCategory:vm.subcate,
                startAt:vm.startAt.valueOf(),
                endAt:vm.endAt.valueOf(),
                name:vm.name,
                status:vm.sta,
                size:10
            }
        }).then(function (response) {
            vm.res = response.data.data;
            vm.resp = response.data.total;
            vm.a();
            vm.totalItems = vm.resp
        })
    };
   /* vm.totalItems = vm.resp;*/
    vm.currentPage = 1;
    vm.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
    vm.pageChanged = function () {
        vm.submit();
    };
    vm.clearAll = function () {
        vm.companyName = '';
        vm.name = '';
        vm.exp = '';
        vm.edu = '';
        vm.cate ='';
        vm.subcate ='';
        vm.sta = '';
        vm.compen = '';
        vm.startAt='';
        vm.endAt ='';
    };
    vm.submit();

    //增删改查
    vm.operate=function (e) {
        console.log(e)
    };
    vm.changeStatus = function (x) {
        bootbox.confirm({
            message: "下架后将不在前台展示，是否执行操作？",
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
                      url:"/carrots-admin-ajax/a/u/profession",
                      method:'delete',
                      params:{id:x.id,status:x.status}
                  }).then(function (re) {
                          console.log(re);
                      }
                  )
              }
            }
        });
    };
    vm.deleteJob = function (x) {
        var id=x.id;
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
                        url:"/carrots-admin-ajax/a/u/profession/"+id,
                        method:'delete',
                    }).then(function (re) {
                            console.log(re);
                        }
                    )
                }
            }
        });
    }

});