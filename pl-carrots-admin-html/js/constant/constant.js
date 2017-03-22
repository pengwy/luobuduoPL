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
/*模块跳转管理*/
app.constant('moduleType',[
    {id:1,url:''},
    {id:2,url:'app.moduleAdmin'},
    {id:3,url:'app.roleAdmin'},
    {id:6,url:'app.pwdAmend'},
    {id:7,url:'app.accountAdmin'},
    {id:64,url:''},
    {id:65,url:'app.comList'},
    {id:66,url:'app.jobList'},
    {id:67,url:''},
    {id:68,url:'app.articleList'}
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
//工作经验
app.constant('experienceType', [
    {type: '', name: '全部'},
    {type: 0, name: '应届'},
    {type: 1, name: '1到2年'},
    {type: 2, name: '3到5年'},
    {type: 3, name: '6到9年'},
    {type: 4, name: '十年以上'}
  ]);
//education
app.constant('educationType', [
    {type: '', name: '全部'},
    {type: 0, name: '大专'},
    {type: 1, name: '本科'},
    {type: 2, name: '硕士'},
    {type: 3, name: '博士及以上'}
]);

app.constant('categoryType', [
    {type: '', name: '全部'},
    {type: 0, name: '产品'},
    {type: 1, name: '运营'},
    {type: 2, name: '技术'},
    {type: 3, name: '设计'},
    {type: 4, name: '测试'}
]);
app.constant('subcategoryType', [
    {type: '', name: '全部'},
    {type: 0, name: '产品经理'},
    {type: 1, name: 'JAVA'},
    {type: 2, name: 'IOS'},
    {type: 3, name: 'Andriod'},
    {type: 4, name: 'web前端'},
    {type: 5, name: '运维'},
    {type: 6, name: 'UI设计'},
    {type: 7, name: '功能测试'}
]);
app.constant('compensationType', [
    {type: '', name: '全部'},
    {type: 0, name: '8k以下'},
    {type: 1, name: '8k-15k'},
    {type: 2, name: '16k-25k'},
    {type: 3, name: '25k以上'}
]);
//上下架
app.constant('statusType', [
    {type: '', name: '全部'},
    {type:1, name: '上架'},
    {type: 0, name: '下架'}
]);

//上下线
app.constant('statusTypeA', [
    {type: '', name: '全部'},
    {type:1, name: '草稿'},
    {type: 2, name: '上线'}
]);
//article类型
app.constant('typeA', [
    {type:'', name: '全部'},
    {type:0, name: '首页Banner'},
    {type:1, name: '找职位Banner'},
    {type:2, name: '找精英Banner'},
    {type:3, name: '行业大图'}
]);
