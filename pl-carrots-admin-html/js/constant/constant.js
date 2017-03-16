/**
 * Created by py on 2017/3/14.
 */

'use strict';
//公司行业
app.constant('industrytype', [
    {type:'',name: '全部'},
    {type: 0, name: '移动互联网'},
    {type: 1, name: '电子商务'},
    {type: 2, name: '企业服务'},
    {type: 3, name: 'O2O'},
    {type: 4, name: '教育'},
    {type: 5, name: '金融'},
    {type: 6, name: '游戏'}
]);
//融资规模 financing
app.constant('financingtype', [
    {type: '', name: '全部'},
    {type: 0, name: '无需融资'},
    {type: 1, name: '天使轮'},
    {type: 2, name: 'A轮'},
    {type: 3, name: 'B轮'},
    {type: 4, name: 'C轮'},
    {type: 5, name: 'D轮及以上'},
    {type: 6, name: '上市公司'}
]);
//认证状态
app.constant('approvedStatus',
    [{type: '', name: '全部'},
    {type: 0, name: '未认证'},
    {type: 1, name: '已认证'}]
);
//冻结状态
app.constant('freezedStatus',
    [{type: '', name: '全部'},
    {type: 0, name: '正常'},
    {type: 1, name: '冻结'}]);