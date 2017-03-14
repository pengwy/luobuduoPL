/**
 * Created by py on 2017/3/11.
 */

"use strict";
 var app=  angular.module('app', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

/*


app.directive('q', function() {
    return {
        restrict: 'E',
        scope:false,
        template:
        '<div>' +
        '<ul uib-pagination total-items="totalItems" ng-model="page" ng-change="pageChanged()"></ul>'
        +'</div>',
        replace: true,
        link:function(scope, element, attrs){
            scope.pageChanged = function() {
                console.log(scope.page)
            };
        }
    };
});

app.directive("formDirective", function () {
    return {
        restrict: "A",
        template:"<h1>标题</h1><p>这里是段落文字</p>",
        link: function(scope, element, attrs){
            element.children("h1").addClass("strike");
        }
    }
});

app.directive("gqTabContainer", function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        //注意这里为tabContainer增加了一个controller，并引入了$scope
        controller: ['$scope', function ($scope) {
            var panes = $scope.panes = [];

            //tab列表中项目被选中（点击）的处理函数
            $scope.select = function (pane) {
                console.log(pane)
                angular.forEach(panes, function (pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            };

            //初始化页面时，供其他Directive调用的注册函数
            this.addPane = function (pane) {
                if (panes.length === 0) {
                    $scope.select(pane);
                }
                panes.push(pane);
            };
        }],
        //注意templateUrl的命名
        templateUrl: "gqTabList"
    };
});

app.directive('gqTabContent', function () {
    return {
        //获取gqTabContainer这个Directive
        require: '^gqTabContainer',
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        //第四个参数是获取到的Directive
        link: function (scope, element, attrs, tabContainer) {
            //调用了上方gqTabContainer的addPane()方法
            //注意参数命名，不需要和上方Directive一致
            tabContainer.addPane(scope);
        },
        //注意templateUrl的命名
        templateUrl: "gqTabContent"
    };
});*/
'use strict';
// 将获取到的省市区ID过滤成文字


app.controller('con', function ($scope,PROVINCE,CITY,COUNTY) {
    $scope.p=[
        {"ProID": 1, "ProName": "北京市", "ProSort": 1, "ProRemark": "直辖市"},
        {"ProID": 2, "ProName": "天津市", "ProSort": 2, "ProRemark": "直辖市"},
        {"ProID": 3, "ProName": "河北省", "ProSort": 5, "ProRemark": "省份"}, {
            "ProID": 4,
            "ProName": "山西省",
            "ProSort": 6,
            "ProRemark": "省份"
        }, {"ProID": 5, "ProName": "内蒙古自治区", "ProSort": 32, "ProRemark": "自治区"}, {
            "ProID": 6,
            "ProName": "辽宁省",
            "ProSort": 8,
            "ProRemark": "省份"
        }, {"ProID": 7, "ProName": "吉林省", "ProSort": 9, "ProRemark": "省份"}, {
            "ProID": 8,
            "ProName": "黑龙江省",
            "ProSort": 10,
            "ProRemark": "省份"
        }, {"ProID": 9, "ProName": "上海市", "ProSort": 3, "ProRemark": "直辖市"}, {
            "ProID": 10,
            "ProName": "江苏省",
            "ProSort": 11,
            "ProRemark": "省份"
        }, {"ProID": 11, "ProName": "浙江省", "ProSort": 12, "ProRemark": "省份"}, {
            "ProID": 12,
            "ProName": "安徽省",
            "ProSort": 13,
            "ProRemark": "省份"
        }, {"ProID": 13, "ProName": "福建省", "ProSort": 14, "ProRemark": "省份"}, {
            "ProID": 14,
            "ProName": "江西省",
            "ProSort": 15,
            "ProRemark": "省份"
        }, {"ProID": 15, "ProName": "山东省", "ProSort": 16, "ProRemark": "省份"}, {
            "ProID": 16,
            "ProName": "河南省",
            "ProSort": 17,
            "ProRemark": "省份"
        }, {"ProID": 17, "ProName": "湖北省", "ProSort": 18, "ProRemark": "省份"}, {
            "ProID": 18,
            "ProName": "湖南省",
            "ProSort": 19,
            "ProRemark": "省份"
        }, {"ProID": 19, "ProName": "广东省", "ProSort": 20, "ProRemark": "省份"}, {
            "ProID": 20,
            "ProName": "海南省",
            "ProSort": 24,
            "ProRemark": "省份"
        }, {"ProID": 21, "ProName": "广西壮族自治区", "ProSort": 28, "ProRemark": "自治区"}, {
            "ProID": 22,
            "ProName": "甘肃省",
            "ProSort": 21,
            "ProRemark": "省份"
        }, {"ProID": 23, "ProName": "陕西省", "ProSort": 27, "ProRemark": "省份"}, {
            "ProID": 24,
            "ProName": "新疆维吾尔自治区",
            "ProSort": 31,
            "ProRemark": "自治区"
        }, {"ProID": 25, "ProName": "青海省", "ProSort": 26, "ProRemark": "省份"}, {
            "ProID": 26,
            "ProName": "宁夏回族自治区",
            "ProSort": 30,
            "ProRemark": "自治区"
        }, {"ProID": 27, "ProName": "重庆市", "ProSort": 4, "ProRemark": "直辖市"}, {
            "ProID": 28,
            "ProName": "四川省",
            "ProSort": 22,
            "ProRemark": "省份"
        }, {"ProID": 29, "ProName": "贵州省", "ProSort": 23, "ProRemark": "省份"}, {
            "ProID": 30,
            "ProName": "云南省",
            "ProSort": 25,
            "ProRemark": "省份"
        }, {"ProID": 31, "ProName": "西藏自治区", "ProSort": 29, "ProRemark": "自治区"}, {
            "ProID": 32,
            "ProName": "台湾省",
            "ProSort": 7,
            "ProRemark": "省份"
        }, {"ProID": 33, "ProName": "澳门特别行政区", "ProSort": 33, "ProRemark": "特别行政区"}, {
            "ProID": 34,
            "ProName": "香港特别行政区",
            "ProSort": 34,
            "ProRemark": "特别行政区"
        }];
    console.log($scope.p)
    $scope.c=CITY;
    $scope.p=COUNTY;
    // $scope.p= [
    //     {type: '', name: '不限',choose: true},
    //     {type: 0, name: '无需融资'},
    //     {type: 1, name: '天使轮'},
    //     {type: 2, name: 'A轮'},
    //     {type: 3, name: 'B轮'},
    //     {type: 4, name: 'C轮'},
    //     {type: 5, name: 'D轮及以上'},
    //     {type: 6, name: '上市公司'}
    // ]

});