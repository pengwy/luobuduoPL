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
function unique(arr){
    var set = new Set(arr);
    return Array.from(set);
}
var bb=[,6,5,,3,5,6,,7,8,6,4,3,]
var n = unique(bb)
console.log(n)