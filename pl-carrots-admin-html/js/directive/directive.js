/**
 * Created by py on 2017/3/15.
 */
'use strict'

app.directive('q', function() {
    return {
        restrict: 'E',
        /*scope:{},*/
        template:
        '<div>' +
        '<ul uib-pagination  ng-change="vm.pageChanged()"    items-per-page="10"   ng-model="vm.company.page"  boundary-links="true"   total-items="vm.total"  class="pagination-sm" previous-text="上一页" next-text="下一页" first-text="首页" last-text="尾页" rotate="true" ></ul>'
        +'</div>',
        replace: true
    };
});
