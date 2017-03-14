/**
 * Created by py on 2017/3/7.
 */
// 搜索面板;
app.constant('searchOptions', {
    province: [
        {type:'',name: '不限',  choose: true},
        {type: 1, name: '北京', choose: false}
    ],
    category: [
        {type:'',name: '不限', choose: true},
        {type: 1, name: '产品', choose: false},
        {type: 2, name: 'UI', choose: false},
        {type: 3, name: 'QA', choose: false},
        {type: 4, name: 'Android', choose: false},
        {type: 5, name: 'IOS', choose: false},
        {type: 6, name: 'WEB', choose: false},
        {type: 7, name: 'OP', choose: false},
        {type: 8, name: 'Java', choose: false},
        {type: 9, name: 'NLP', choose: false},
        {type: 10, name: 'DM', choose: false},
        {type: 11, name: 'DL', choose: false}
    ],
    subCategory: [
        {
            name: "产品",
            data: [{name: '不限', choose: true},
                {type: 1, name: '助理', choose: false},
                {type: 2, name: '初级', choose: false},
                {type: 3, name: '中级', choose: false},
                {type: 4, name: '高级', choose: false},
                {type: 5, name: '总监', choose: false}]
        },
        {
            name: "UI",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false},
                {type: 4, name: '总监', choose: false}
            ]
        },
        {
            name: "QA",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "Android",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "IOS",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "WEB",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "OP",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "Java",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false},
                {type: 4, name: '总监', choose: false}
            ]
        },
        {
            name: "NLP",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "DM",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        },
        {
            name: "DL",
            data: [{name: '不限', choose: true},
                {type: 1, name: '初级', choose: false},
                {type: 2, name: '中级', choose: false},
                {type: 3, name: '高级', choose: false}
            ]
        }
    ],
    industry: [
        {type:'',name: '不限', choose: true},
        {type: 0, name: '移动互联网', choose: false},
        {type: 1, name: '电子商务', choose: false},
        {type: 2, name: '企业服务', choose: false},
        {type: 3, name: 'O2O', choose: false},
        {type: 4, name: '教育', choose: false},
        {type: 5, name: '金融', choose: false},
        {type: 6, name: '游戏', choose: false}
    ],
    compensation: [
        {name: '不限', choose: true},
        {type: 0, name: '8K以下', choose: false},
        {type: 1, name: '8K-15K', choose: false},
        {type: 2, name: '16K-25K', choose: false},
        {type: 3, name: '25K以上', choose: false}
    ], education: [
        {name: '不限', choose: true},
        {type: 0, name: '大专', choose: false},
        {type: 1, name: '本科', choose: false},
        {type: 2, name: '硕士', choose: false},
        {type: 3, name: '博士及以上', choose: false}

    ], experience: [
        {name: '不限', choose: true},
        {type: 0, name: '应届', choose: false},
        {type: 1, name: '1~2年', choose: false},
        {type: 2, name: '3~5年', choose: false},
        {type: 3, name: '6～9年', choose: false},
        {type: 4, name: '10年及以上', choose: false}

    ], updateAt: [
        {name: '不限', choose: true},
        {type: 0, name: '24h内', choose: false},
        {type: 1, name: '三天内', choose: false},
        {type: 2, name: '七天内', choose: false}
    ],
    financing: [
        {type:'',name: '不限', choose: true},
        {type: 0, name: '无需融资', choose: false},
        {type: 1, name: '天使轮', choose: false},
        {type: 2, name: 'A轮', choose: false},
        {type: 3, name: 'B轮', choose: false},
        {type: 4, name: 'C轮', choose: false},
        {type: 5, name: 'D轮及以上', choose: false},
        {type: 6, name: '上市公司', choose: false}
    ]
// category: [
//     {name: "全部", choose: true},
//     {type: 0, name: "产品", choose: false},
//     {type: 1, name: "运营", choose: false},
//     {type: 2, name: "技术", choose: false},
//     {type: 3, name: "设计", choose: false},
//     {type: 4, name: "测试", choose: false}
// ]


})
;

// begin 找职位面板的分类列表
// 一级分类
app.constant('jobType', [
    {type: 1, name: "用户体验"},
    {type: 2, name: "研发"},
    {type: 3, name: "大数据"}
]);
//二级分类
app.constant('secondType', [
    {type: '', name: '不限',choose: true},
    {type: 1, name: "产品"},
    {type: 2, name: "UI"},
    {type: 3, name: "QA"},
    {type: 4, name: "Android"},
    {type: 5, name: "IOS"},
    {type: 6, name: "WEB"},
    {type: 7, name: "OP"},
    {type: 8, name: "JAVA"},
    {type: 9, name: "NLP"},
    {type: 10, name: "DM"},
    {type: 11, name: "DL"}
]);
// end 找职位面板的分类列表


//  begin 独立过滤器所需
//薪资水平
app.constant('compensationtype', [
    {type: 0, name: '8K以下', choose: false},
    {type: 1, name: '8K-15K', choose: false},
    {type: 2, name: '16K-25K', choose: false},
    {type: 3, name: '25K以上', choose: false}
]);
//公司行业
app.constant('industrytype', [
    {type:'',name: '不限', choose: true},
    {type: 0, name: '移动互联网', choose: false},
    {type: 1, name: '电子商务', choose: false},
    {type: 2, name: '企业服务', choose: false},
    {type: 3, name: 'O2O', choose: false},
    {type: 4, name: '教育', choose: false},
    {type: 5, name: '金融', choose: false},
    {type: 6, name: '游戏', choose: false}
]);
//    融资规模 financing
    app.constant('financingtype', [
    {type: '', name: '不限',choose: true},
    {type: 0, name: '无需融资'},
    {type: 1, name: '天使轮'},
    {type: 2, name: 'A轮'},
    {type: 3, name: 'B轮'},
    {type: 4, name: 'C轮'},
    {type: 5, name: 'D轮及以上'},
    {type: 6, name: '上市公司'}
]);
//  工作经验 experience
app.constant('experiencetype', [
    {type: 0, name: '应届'},
    {type: 1, name: '1~2年'},
    {type: 2, name: '3~5年'},
    {type: 3, name: '6～9年'},
    {type: 4, name: '10年及以上'}

]);
//     学历要求 education
app.constant('educationtype', [
    {type: 0, name: '大专'},
    {type: 1, name: '本科'},
    {type: 2, name: '硕士'},
    {type: 3, name: '博士及以上'}

]);
//发布时间 updateAt
app.constant('updateAttype', [
    {type: 0, name: '今天'},
    {type: 1, name: '昨天'}
]);
//省
app.constant('province', [
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
        }]);
