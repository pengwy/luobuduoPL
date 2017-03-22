/**
 * Created by py on 2017/3/14.
 */
'use strict';
app.controller('articleList',function (statusTypeA,typeA,tt,$scope,$state) {
    var vm =this;

    vm.articInf={
        status:statusTypeA,
        type:typeA
     };
     //数据绑定
    vm.artic={
        status:statusTypeA[0],
        type:typeA[0],
        startAt:'',
        endAt:''
        };
     //获取搜索信息
    vm.inf=function () {
         vm.searchArticle={
             author:vm.artic.author,
             title:vm.artic.title,
             status:vm.artic.status.type,
             type:vm.artic.type.type,
             startAt:vm.artic.startAt.valueOf(),
             endAt:vm.artic.endAt.valueOf()
         }
     };
     //重置
    vm.restting=function () {
            vm.artic={
                author:'',
                title:'',
                status:statusTypeA[0],
                type:typeA[0],
                startAt:'',
                endAt:''
            };
        $state.reload('app.articleList')
        };
    //搜索
    vm.search=function () {
        vm.inf();
        tt.getArticle(vm.searchArticle).then(function (res) {
            vm.show=res.data.data.articleList;
            vm.total=res.data.data.total;
        })
    };
    //开始获取数据
    vm.search();
    //改变状态
    vm.artA=tt.artA;
    //新增
    vm.goArticleDetail=function () {
        $state.go('app.articleDetail')
    };









//翻页事件
vm.pageChanged=function () {
    
};

//时间插件
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

    //删除
    vm.articleDelete=tt.articleDe
    //编辑获取数据
    vm.artE=function (g) {
        localStorage.article=JSON.stringify(g.s)
        $state.go('app.articleDetail')
    }
});