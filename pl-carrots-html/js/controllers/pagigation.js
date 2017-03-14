/**
 * Created by Administrator on 2017/3/12.
 */
angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope) {
    $scope.totalItems = 40;
    $scope.currentPage = 2;
    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };
});
