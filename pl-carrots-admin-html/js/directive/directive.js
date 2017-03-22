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
        '<ul uib-pagination  ng-change="vm.pageChanged()"    items-per-page="10"   ng-model="vm.company.page"  boundary-links="true"   total-items="vm.total"  class="pagination-sm"中 first-text="首页" last-text="尾页" rotate="true" ></ul>'
        +'</div>',
        replace: true
    };
});




/*app.directive('bb',function () {
   return{
       restrict: 'E',
       scope:{},
       template:
       '<div  nv-file-drop="" uploader="uploader">'+
       ' <div class="row">'+
        '<div class="col-md-3">'+
        '<input type="file" id="file2" nv-file-select="" uploader="uploader" multiple  /><br/>'+

    '<div class="col-md-7" style="margin-bottom: 40px">'+
        '<table class="table">'+
        '<thead>'+
        '<tr>'+
        '<th width="50%">名称</th>'+
        '<th ng-show="uploader.isHTML5">大小</th>'+
        '<th ng-show="uploader.isHTML5">进度</th>'+
        '<th>状态</th>'+
        '<th>操作</th>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'+
        '<tr ng-repeat="item in uploader.queue">'+
        '<td>'+
        '<strong>{{ item.file.name }}</strong>'+
    '<div ng-show="uploader.isHTML5"  ng-thumb="{ file: item._file, height: 100 }" class="u-canvas"></div>'+
        '</td>'+
        '<td ng-show="uploader.isHTML5" nowrap>{{ item.file.size/1024/1024|number:2 }} MB</td>'+
    '<td ng-show="uploader.isHTML5">'+
        '<div class="progress" style="margin-bottom: 0;">'+
        '<div class="progress-bar" role="progressbar" ></div>'+
        '</div>'+
       ' </td>'+
        '<td class="text-center">'+
        '<span ng-show="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>'+
        '<span ng-show="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>'+
        '<span ng-show="item.isError"><i class="glyphicon glyphicon-remove"></i></span>'+
        '</td>'+
        '<td nowrap>'+
    '<button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess">'+
        '<span class="glyphicon glyphicon-upload"></span> 上传'+
        '</button>'+
        '<button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()">'+
        '<span class="glyphicon glyphicon-trash"></span> 移除'+
        '</button>'+
        '</td>'+
        '</tr>'+
        '</tbody>'+
        '</table>'+
        '</div>'+
        '</div>'+
        '</div>',
       replace: true
   }

})*/











app.directive('ngThumb', ['$window', function($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function(item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function(file) {
            var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function(scope, element, attributes) {
            if (!helper.support) return;

            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file)) return;
            if (!helper.isImage(params.file)) return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({ width: width, height: height });
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}]);
