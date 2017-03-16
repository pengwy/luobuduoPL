/**
 * Created by py on 2017/3/15.
 */

'use strict';
// 将获取到的省市区ID过滤成文字

/*angular.module('admin')
    .filter('provinceFilter', function (PROVINCE) {
        return function (id) {
            if (id != undefined && id != '') {

                var name;
                angular.forEach(PROVINCE, function (data) {

                    if (data.proId == id) {
                        name = data.proName;
                    }

                });
                return name;
            }
        }
    });
angular.module('admin')
    .filter('cityFilter', function (CITY) {
        return function (id) {
            if (id != undefined && id != '') {
                var name;
                angular.forEach(CITY, function (data) {

                    if (data.cityId == id) {
                        name = data.cityName;
                    }

                });
                return name;
            }
        }
    });
angular.module('admin')
    .filter('countryFilter', function (country) {
        return function (id) {
            if (id != undefined && id != '') {

                var name;
                angular.forEach(country, function (data) {

                    if (data.Id == id) {
                        name = data.countryName;
                    }
                });
                return name;

            }
        }
    });*/
// 省/市
    app.constant('province', [
        {"proId": '', "proName": "请选择省份"},
        {"proId": 1, "proName": "北京市", "ProSort": 1, "ProRemark": "直辖市"},
        {"proId": 2, "proName": "天津市", "ProSort": 2, "ProRemark": "直辖市"},
        {"proId": 3, "proName": "河北省", "ProSort": 5, "ProRemark": "省份"}, {
            "proId": 4,
            "proName": "山西省",
            "ProSort": 6,
            "ProRemark": "省份"
        }, {"proId": 5, "proName": "内蒙古自治区", "ProSort": 32, "ProRemark": "自治区"}, {
            "proId": 6,
            "proName": "辽宁省",
            "ProSort": 8,
            "ProRemark": "省份"
        }, {"proId": 7, "proName": "吉林省", "ProSort": 9, "ProRemark": "省份"}, {
            "proId": 8,
            "proName": "黑龙江省",
            "ProSort": 10,
            "ProRemark": "省份"
        }, {"proId": 9, "proName": "上海市", "ProSort": 3, "ProRemark": "直辖市"}, {
            "proId": 10,
            "proName": "江苏省",
            "ProSort": 11,
            "ProRemark": "省份"
        }, {"proId": 11, "proName": "浙江省", "ProSort": 12, "ProRemark": "省份"}, {
            "proId": 12,
            "proName": "安徽省",
            "ProSort": 13,
            "ProRemark": "省份"
        }, {"proId": 13, "proName": "福建省", "ProSort": 14, "ProRemark": "省份"}, {
            "proId": 14,
            "proName": "江西省",
            "ProSort": 15,
            "ProRemark": "省份"
        }, {"proId": 15, "proName": "山东省", "ProSort": 16, "ProRemark": "省份"}, {
            "proId": 16,
            "proName": "河南省",
            "ProSort": 17,
            "ProRemark": "省份"
        }, {"proId": 17, "proName": "湖北省", "ProSort": 18, "ProRemark": "省份"}, {
            "proId": 18,
            "proName": "湖南省",
            "ProSort": 19,
            "ProRemark": "省份"
        }, {"proId": 19, "proName": "广东省", "ProSort": 20, "ProRemark": "省份"}, {
            "proId": 20,
            "proName": "海南省",
            "ProSort": 24,
            "ProRemark": "省份"
        }, {"proId": 21, "proName": "广西壮族自治区", "ProSort": 28, "ProRemark": "自治区"}, {
            "proId": 22,
            "proName": "甘肃省",
            "ProSort": 21,
            "ProRemark": "省份"
        }, {"proId": 23, "proName": "陕西省", "ProSort": 27, "ProRemark": "省份"}, {
            "proId": 24,
            "proName": "新疆维吾尔自治区",
            "ProSort": 31,
            "ProRemark": "自治区"
        }, {"proId": 25, "proName": "青海省", "ProSort": 26, "ProRemark": "省份"}, {
            "proId": 26,
            "proName": "宁夏回族自治区",
            "ProSort": 30,
            "ProRemark": "自治区"
        }, {"proId": 27, "proName": "重庆市", "ProSort": 4, "ProRemark": "直辖市"}, {
            "proId": 28,
            "proName": "四川省",
            "ProSort": 22,
            "ProRemark": "省份"
        }, {"proId": 29, "proName": "贵州省", "ProSort": 23, "ProRemark": "省份"}, {
            "proId": 30,
            "proName": "云南省",
            "ProSort": 25,
            "ProRemark": "省份"
        }, {"proId": 31, "proName": "西藏自治区", "ProSort": 29, "ProRemark": "自治区"}, {
            "proId": 32,
            "proName": "台湾省",
            "ProSort": 7,
            "ProRemark": "省份"
        }, {"proId": 33, "proName": "澳门特别行政区", "ProSort": 33, "ProRemark": "特别行政区"}, {
            "proId": 34,
            "proName": "香港特别行政区",
            "ProSort": 34,
            "ProRemark": "特别行政区"
        }]);
// 市
    app.constant('city', [
        {"cityId": 1, "cityName": "北京市", "proId": 1, "CitySort": 1},
        {
            "cityId": 2,
            "cityName": "天津市",
            "proId": 2,
            "CitySort": 2
        }, {"cityId": 3, "cityName": "上海市", "proId": 9, "CitySort": 3}, {
            "cityId": 4,
            "cityName": "重庆市",
            "proId": 27,
            "CitySort": 4
        }, {"cityId": 5, "cityName": "邯郸市", "proId": 3, "CitySort": 5}, {
            "cityId": 6,
            "cityName": "石家庄市",
            "proId": 3,
            "CitySort": 6
        }, {"cityId": 7, "cityName": "保定市", "proId": 3, "CitySort": 7}, {
            "cityId": 8,
            "cityName": "张家口市",
            "proId": 3,
            "CitySort": 8
        }, {"cityId": 9, "cityName": "承德市", "proId": 3, "CitySort": 9}, {
            "cityId": 10,
            "cityName": "唐山市",
            "proId": 3,
            "CitySort": 10
        }, {"cityId": 11, "cityName": "廊坊市", "proId": 3, "CitySort": 11}, {
            "cityId": 12,
            "cityName": "沧州市",
            "proId": 3,
            "CitySort": 12
        }, {"cityId": 13, "cityName": "衡水市", "proId": 3, "CitySort": 13}, {
            "cityId": 14,
            "cityName": "邢台市",
            "proId": 3,
            "CitySort": 14
        }, {"cityId": 16, "cityName": "朔州市", "proId": 4, "CitySort": 16}, {
            "cityId": 17,
            "cityName": "忻州市",
            "proId": 4,
            "CitySort": 17
        }, {"cityId": 18, "cityName": "太原市", "proId": 4, "CitySort": 18}, {
            "cityId": 19,
            "cityName": "大同市",
            "proId": 4,
            "CitySort": 19
        }, {"cityId": 20, "cityName": "阳泉市", "proId": 4, "CitySort": 20}, {
            "cityId": 21,
            "cityName": "晋中市",
            "proId": 4,
            "CitySort": 21
        }, {"cityId": 22, "cityName": "长治市", "proId": 4, "CitySort": 22}, {
            "cityId": 23,
            "cityName": "晋城市",
            "proId": 4,
            "CitySort": 23
        }, {"cityId": 24, "cityName": "临汾市", "proId": 4, "CitySort": 24}, {
            "cityId": 25,
            "cityName": "吕梁市",
            "proId": 4,
            "CitySort": 25
        }, {"cityId": 26, "cityName": "运城市", "proId": 4, "CitySort": 26}, {
            "cityId": 27,
            "cityName": "沈阳市",
            "proId": 6,
            "CitySort": 27
        }, {"cityId": 28, "cityName": "铁岭市", "proId": 6, "CitySort": 28}, {
            "cityId": 29,
            "cityName": "大连市",
            "proId": 6,
            "CitySort": 29
        }, {"cityId": 30, "cityName": "鞍山市", "proId": 6, "CitySort": 30}, {
            "cityId": 31,
            "cityName": "抚顺市",
            "proId": 6,
            "CitySort": 31
        }, {"cityId": 32, "cityName": "本溪市", "proId": 6, "CitySort": 32}, {
            "cityId": 33,
            "cityName": "丹东市",
            "proId": 6,
            "CitySort": 33
        }, {"cityId": 34, "cityName": "锦州市", "proId": 6, "CitySort": 34}, {
            "cityId": 35,
            "cityName": "营口市",
            "proId": 6,
            "CitySort": 35
        }, {"cityId": 36, "cityName": "阜新市", "proId": 6, "CitySort": 36}, {
            "cityId": 37,
            "cityName": "辽阳市",
            "proId": 6,
            "CitySort": 37
        }, {"cityId": 38, "cityName": "朝阳市", "proId": 6, "CitySort": 38}, {
            "cityId": 39,
            "cityName": "盘锦市",
            "proId": 6,
            "CitySort": 39
        }, {"cityId": 40, "cityName": "葫芦岛市", "proId": 6, "CitySort": 40}, {
            "cityId": 41,
            "cityName": "长春市",
            "proId": 7,
            "CitySort": 41
        }, {"cityId": 42, "cityName": "吉林市", "proId": 7, "CitySort": 42}, {
            "cityId": 43,
            "cityName": "延边朝鲜族自治州",
            "proId": 7,
            "CitySort": 43
        }, {"cityId": 44, "cityName": "四平市", "proId": 7, "CitySort": 44}, {
            "cityId": 45,
            "cityName": "通化市",
            "proId": 7,
            "CitySort": 45
        }, {"cityId": 46, "cityName": "白城市", "proId": 7, "CitySort": 46}, {
            "cityId": 47,
            "cityName": "辽源市",
            "proId": 7,
            "CitySort": 47
        }, {"cityId": 48, "cityName": "松原市", "proId": 7, "CitySort": 48}, {
            "cityId": 49,
            "cityName": "白山市",
            "proId": 7,
            "CitySort": 49
        }, {"cityId": 50, "cityName": "哈尔滨市", "proId": 8, "CitySort": 50}, {
            "cityId": 51,
            "cityName": "齐齐哈尔市",
            "proId": 8,
            "CitySort": 51
        }, {"cityId": 52, "cityName": "鸡西市", "proId": 8, "CitySort": 52}, {
            "cityId": 53,
            "cityName": "牡丹江市",
            "proId": 8,
            "CitySort": 53
        }, {"cityId": 54, "cityName": "七台河市", "proId": 8, "CitySort": 54}, {
            "cityId": 55,
            "cityName": "佳木斯市",
            "proId": 8,
            "CitySort": 55
        }, {"cityId": 56, "cityName": "鹤岗市", "proId": 8, "CitySort": 56}, {
            "cityId": 57,
            "cityName": "双鸭山市",
            "proId": 8,
            "CitySort": 57
        }, {"cityId": 58, "cityName": "绥化市", "proId": 8, "CitySort": 58}, {
            "cityId": 59,
            "cityName": "黑河市",
            "proId": 8,
            "CitySort": 59
        }, {"cityId": 60, "cityName": "大兴安岭地区", "proId": 8, "CitySort": 60}, {
            "cityId": 61,
            "cityName": "伊春市",
            "proId": 8,
            "CitySort": 61
        }, {"cityId": 62, "cityName": "大庆市", "proId": 8, "CitySort": 62}, {
            "cityId": 63,
            "cityName": "南京市",
            "proId": 10,
            "CitySort": 63
        }, {"cityId": 64, "cityName": "无锡市", "proId": 10, "CitySort": 64}, {
            "cityId": 65,
            "cityName": "镇江市",
            "proId": 10,
            "CitySort": 65
        }, {"cityId": 66, "cityName": "苏州市", "proId": 10, "CitySort": 66}, {
            "cityId": 67,
            "cityName": "南通市",
            "proId": 10,
            "CitySort": 67
        }, {"cityId": 68, "cityName": "扬州市", "proId": 10, "CitySort": 68}, {
            "cityId": 69,
            "cityName": "盐城市",
            "proId": 10,
            "CitySort": 69
        }, {"cityId": 70, "cityName": "徐州市", "proId": 10, "CitySort": 70}, {
            "cityId": 71,
            "cityName": "淮安市",
            "proId": 10,
            "CitySort": 71
        }, {"cityId": 72, "cityName": "连云港市", "proId": 10, "CitySort": 72}, {
            "cityId": 73,
            "cityName": "常州市",
            "proId": 10,
            "CitySort": 73
        }, {"cityId": 74, "cityName": "泰州市", "proId": 10, "CitySort": 74}, {
            "cityId": 75,
            "cityName": "宿迁市",
            "proId": 10,
            "CitySort": 75
        }, {"cityId": 76, "cityName": "舟山市", "proId": 11, "CitySort": 76}, {
            "cityId": 77,
            "cityName": "衢州市",
            "proId": 11,
            "CitySort": 77
        }, {"cityId": 78, "cityName": "杭州市", "proId": 11, "CitySort": 78}, {
            "cityId": 79,
            "cityName": "湖州市",
            "proId": 11,
            "CitySort": 79
        }, {"cityId": 80, "cityName": "嘉兴市", "proId": 11, "CitySort": 80}, {
            "cityId": 81,
            "cityName": "宁波市",
            "proId": 11,
            "CitySort": 81
        }, {"cityId": 82, "cityName": "绍兴市", "proId": 11, "CitySort": 82}, {
            "cityId": 83,
            "cityName": "温州市",
            "proId": 11,
            "CitySort": 83
        }, {"cityId": 84, "cityName": "丽水市", "proId": 11, "CitySort": 84}, {
            "cityId": 85,
            "cityName": "金华市",
            "proId": 11,
            "CitySort": 85
        }, {"cityId": 86, "cityName": "台州市", "proId": 11, "CitySort": 86}, {
            "cityId": 87,
            "cityName": "合肥市",
            "proId": 12,
            "CitySort": 87
        }, {"cityId": 88, "cityName": "芜湖市", "proId": 12, "CitySort": 88}, {
            "cityId": 89,
            "cityName": "蚌埠市",
            "proId": 12,
            "CitySort": 89
        }, {"cityId": 90, "cityName": "淮南市", "proId": 12, "CitySort": 90}, {
            "cityId": 91,
            "cityName": "马鞍山市",
            "proId": 12,
            "CitySort": 91
        }, {"cityId": 92, "cityName": "淮北市", "proId": 12, "CitySort": 92}, {
            "cityId": 93,
            "cityName": "铜陵市",
            "proId": 12,
            "CitySort": 93
        }, {"cityId": 94, "cityName": "安庆市", "proId": 12, "CitySort": 94}, {
            "cityId": 95,
            "cityName": "黄山市",
            "proId": 12,
            "CitySort": 95
        }, {"cityId": 96, "cityName": "滁州市", "proId": 12, "CitySort": 96}, {
            "cityId": 97,
            "cityName": "阜阳市",
            "proId": 12,
            "CitySort": 97
        }, {"cityId": 98, "cityName": "宿州市", "proId": 12, "CitySort": 98}, {
            "cityId": 99,
            "cityName": "巢湖市",
            "proId": 12,
            "CitySort": 99
        }, {"cityId": 100, "cityName": "六安市", "proId": 12, "CitySort": 100}, {
            "cityId": 101,
            "cityName": "亳州市",
            "proId": 12,
            "CitySort": 101
        }, {"cityId": 102, "cityName": "池州市", "proId": 12, "CitySort": 102}, {
            "cityId": 103,
            "cityName": "宣城市",
            "proId": 12,
            "CitySort": 103
        }, {"cityId": 104, "cityName": "福州市", "proId": 13, "CitySort": 104}, {
            "cityId": 105,
            "cityName": "厦门市",
            "proId": 13,
            "CitySort": 105
        }, {"cityId": 106, "cityName": "宁德市", "proId": 13, "CitySort": 106}, {
            "cityId": 107,
            "cityName": "莆田市",
            "proId": 13,
            "CitySort": 107
        }, {"cityId": 108, "cityName": "泉州市", "proId": 13, "CitySort": 108}, {
            "cityId": 109,
            "cityName": "漳州市",
            "proId": 13,
            "CitySort": 109
        }, {"cityId": 110, "cityName": "龙岩市", "proId": 13, "CitySort": 110}, {
            "cityId": 111,
            "cityName": "三明市",
            "proId": 13,
            "CitySort": 111
        }, {"cityId": 112, "cityName": "南平市", "proId": 13, "CitySort": 112}, {
            "cityId": 113,
            "cityName": "鹰潭市",
            "proId": 14,
            "CitySort": 113
        }, {"cityId": 114, "cityName": "新余市", "proId": 14, "CitySort": 114}, {
            "cityId": 115,
            "cityName": "南昌市",
            "proId": 14,
            "CitySort": 115
        }, {"cityId": 116, "cityName": "九江市", "proId": 14, "CitySort": 116}, {
            "cityId": 117,
            "cityName": "上饶市",
            "proId": 14,
            "CitySort": 117
        }, {"cityId": 118, "cityName": "抚州市", "proId": 14, "CitySort": 118}, {
            "cityId": 119,
            "cityName": "宜春市",
            "proId": 14,
            "CitySort": 119
        }, {"cityId": 120, "cityName": "吉安市", "proId": 14, "CitySort": 120}, {
            "cityId": 121,
            "cityName": "赣州市",
            "proId": 14,
            "CitySort": 121
        }, {"cityId": 122, "cityName": "景德镇市", "proId": 14, "CitySort": 122}, {
            "cityId": 123,
            "cityName": "萍乡市",
            "proId": 14,
            "CitySort": 123
        }, {"cityId": 124, "cityName": "菏泽市", "proId": 15, "CitySort": 124}, {
            "cityId": 125,
            "cityName": "济南市",
            "proId": 15,
            "CitySort": 125
        }, {"cityId": 126, "cityName": "青岛市", "proId": 15, "CitySort": 126}, {
            "cityId": 127,
            "cityName": "淄博市",
            "proId": 15,
            "CitySort": 127
        }, {"cityId": 128, "cityName": "德州市", "proId": 15, "CitySort": 128}, {
            "cityId": 129,
            "cityName": "烟台市",
            "proId": 15,
            "CitySort": 129
        }, {"cityId": 130, "cityName": "潍坊市", "proId": 15, "CitySort": 130}, {
            "cityId": 131,
            "cityName": "济宁市",
            "proId": 15,
            "CitySort": 131
        }, {"cityId": 132, "cityName": "泰安市", "proId": 15, "CitySort": 132}, {
            "cityId": 133,
            "cityName": "临沂市",
            "proId": 15,
            "CitySort": 133
        }, {"cityId": 134, "cityName": "滨州市", "proId": 15, "CitySort": 134}, {
            "cityId": 135,
            "cityName": "东营市",
            "proId": 15,
            "CitySort": 135
        }, {"cityId": 136, "cityName": "威海市", "proId": 15, "CitySort": 136}, {
            "cityId": 137,
            "cityName": "枣庄市",
            "proId": 15,
            "CitySort": 137
        }, {"cityId": 138, "cityName": "日照市", "proId": 15, "CitySort": 138}, {
            "cityId": 139,
            "cityName": "莱芜市",
            "proId": 15,
            "CitySort": 139
        }, {"cityId": 140, "cityName": "聊城市", "proId": 15, "CitySort": 140}, {
            "cityId": 141,
            "cityName": "商丘市",
            "proId": 16,
            "CitySort": 141
        }, {"cityId": 142, "cityName": "郑州市", "proId": 16, "CitySort": 142}, {
            "cityId": 143,
            "cityName": "安阳市",
            "proId": 16,
            "CitySort": 143
        }, {"cityId": 144, "cityName": "新乡市", "proId": 16, "CitySort": 144}, {
            "cityId": 145,
            "cityName": "许昌市",
            "proId": 16,
            "CitySort": 145
        }, {"cityId": 146, "cityName": "平顶山市", "proId": 16, "CitySort": 146}, {
            "cityId": 147,
            "cityName": "信阳市",
            "proId": 16,
            "CitySort": 147
        }, {"cityId": 148, "cityName": "南阳市", "proId": 16, "CitySort": 148}, {
            "cityId": 149,
            "cityName": "开封市",
            "proId": 16,
            "CitySort": 149
        }, {"cityId": 150, "cityName": "洛阳市", "proId": 16, "CitySort": 150}, {
            "cityId": 151,
            "cityName": "济源市",
            "proId": 16,
            "CitySort": 151
        }, {"cityId": 152, "cityName": "焦作市", "proId": 16, "CitySort": 152}, {
            "cityId": 153,
            "cityName": "鹤壁市",
            "proId": 16,
            "CitySort": 153
        }, {"cityId": 154, "cityName": "濮阳市", "proId": 16, "CitySort": 154}, {
            "cityId": 155,
            "cityName": "周口市",
            "proId": 16,
            "CitySort": 155
        }, {"cityId": 156, "cityName": "漯河市", "proId": 16, "CitySort": 156}, {
            "cityId": 157,
            "cityName": "驻马店市",
            "proId": 16,
            "CitySort": 157
        }, {"cityId": 158, "cityName": "三门峡市", "proId": 16, "CitySort": 158}, {
            "cityId": 159,
            "cityName": "武汉市",
            "proId": 17,
            "CitySort": 159
        }, {"cityId": 160, "cityName": "襄樊市", "proId": 17, "CitySort": 160}, {
            "cityId": 161,
            "cityName": "鄂州市",
            "proId": 17,
            "CitySort": 161
        }, {"cityId": 162, "cityName": "孝感市", "proId": 17, "CitySort": 162}, {
            "cityId": 163,
            "cityName": "黄冈市",
            "proId": 17,
            "CitySort": 163
        }, {"cityId": 164, "cityName": "黄石市", "proId": 17, "CitySort": 164}, {
            "cityId": 165,
            "cityName": "咸宁市",
            "proId": 17,
            "CitySort": 165
        }, {"cityId": 166, "cityName": "荆州市", "proId": 17, "CitySort": 166}, {
            "cityId": 167,
            "cityName": "宜昌市",
            "proId": 17,
            "CitySort": 167
        }, {"cityId": 168, "cityName": "恩施土家族苗族自治州", "proId": 17, "CitySort": 168}, {
            "cityId": 169,
            "cityName": "神农架林区",
            "proId": 17,
            "CitySort": 169
        }, {"cityId": 170, "cityName": "十堰市", "proId": 17, "CitySort": 170}, {
            "cityId": 171,
            "cityName": "随州市",
            "proId": 17,
            "CitySort": 171
        }, {"cityId": 172, "cityName": "荆门市", "proId": 17, "CitySort": 172}, {
            "cityId": 173,
            "cityName": "仙桃市",
            "proId": 17,
            "CitySort": 173
        }, {"cityId": 174, "cityName": "天门市", "proId": 17, "CitySort": 174}, {
            "cityId": 175,
            "cityName": "潜江市",
            "proId": 17,
            "CitySort": 175
        }, {"cityId": 176, "cityName": "岳阳市", "proId": 18, "CitySort": 176}, {
            "cityId": 177,
            "cityName": "长沙市",
            "proId": 18,
            "CitySort": 177
        }, {"cityId": 178, "cityName": "湘潭市", "proId": 18, "CitySort": 178}, {
            "cityId": 179,
            "cityName": "株洲市",
            "proId": 18,
            "CitySort": 179
        }, {"cityId": 180, "cityName": "衡阳市", "proId": 18, "CitySort": 180}, {
            "cityId": 181,
            "cityName": "郴州市",
            "proId": 18,
            "CitySort": 181
        }, {"cityId": 182, "cityName": "常德市", "proId": 18, "CitySort": 182}, {
            "cityId": 183,
            "cityName": "益阳市",
            "proId": 18,
            "CitySort": 183
        }, {"cityId": 184, "cityName": "娄底市", "proId": 18, "CitySort": 184}, {
            "cityId": 185,
            "cityName": "邵阳市",
            "proId": 18,
            "CitySort": 185
        }, {"cityId": 186, "cityName": "湘西土家族苗族自治州", "proId": 18, "CitySort": 186}, {
            "cityId": 187,
            "cityName": "张家界市",
            "proId": 18,
            "CitySort": 187
        }, {"cityId": 188, "cityName": "怀化市", "proId": 18, "CitySort": 188}, {
            "cityId": 189,
            "cityName": "永州市",
            "proId": 18,
            "CitySort": 189
        }, {"cityId": 190, "cityName": "广州市", "proId": 19, "CitySort": 190}, {
            "cityId": 191,
            "cityName": "汕尾市",
            "proId": 19,
            "CitySort": 191
        }, {"cityId": 192, "cityName": "阳江市", "proId": 19, "CitySort": 192}, {
            "cityId": 193,
            "cityName": "揭阳市",
            "proId": 19,
            "CitySort": 193
        }, {"cityId": 194, "cityName": "茂名市", "proId": 19, "CitySort": 194}, {
            "cityId": 195,
            "cityName": "惠州市",
            "proId": 19,
            "CitySort": 195
        }, {"cityId": 196, "cityName": "江门市", "proId": 19, "CitySort": 196}, {
            "cityId": 197,
            "cityName": "韶关市",
            "proId": 19,
            "CitySort": 197
        }, {"cityId": 198, "cityName": "梅州市", "proId": 19, "CitySort": 198}, {
            "cityId": 199,
            "cityName": "汕头市",
            "proId": 19,
            "CitySort": 199
        }, {"cityId": 200, "cityName": "深圳市", "proId": 19, "CitySort": 200}, {
            "cityId": 201,
            "cityName": "珠海市",
            "proId": 19,
            "CitySort": 201
        }, {"cityId": 202, "cityName": "佛山市", "proId": 19, "CitySort": 202}, {
            "cityId": 203,
            "cityName": "肇庆市",
            "proId": 19,
            "CitySort": 203
        }, {"cityId": 204, "cityName": "湛江市", "proId": 19, "CitySort": 204}, {
            "cityId": 205,
            "cityName": "中山市",
            "proId": 19,
            "CitySort": 205
        }, {"cityId": 206, "cityName": "河源市", "proId": 19, "CitySort": 206}, {
            "cityId": 207,
            "cityName": "清远市",
            "proId": 19,
            "CitySort": 207
        }, {"cityId": 208, "cityName": "云浮市", "proId": 19, "CitySort": 208}, {
            "cityId": 209,
            "cityName": "潮州市",
            "proId": 19,
            "CitySort": 209
        }, {"cityId": 210, "cityName": "东莞市", "proId": 19, "CitySort": 210}, {
            "cityId": 211,
            "cityName": "兰州市",
            "proId": 22,
            "CitySort": 211
        }, {"cityId": 212, "cityName": "金昌市", "proId": 22, "CitySort": 212}, {
            "cityId": 213,
            "cityName": "白银市",
            "proId": 22,
            "CitySort": 213
        }, {"cityId": 214, "cityName": "天水市", "proId": 22, "CitySort": 214}, {
            "cityId": 215,
            "cityName": "嘉峪关市",
            "proId": 22,
            "CitySort": 215
        }, {"cityId": 216, "cityName": "武威市", "proId": 22, "CitySort": 216}, {
            "cityId": 217,
            "cityName": "张掖市",
            "proId": 22,
            "CitySort": 217
        }, {"cityId": 218, "cityName": "平凉市", "proId": 22, "CitySort": 218}, {
            "cityId": 219,
            "cityName": "酒泉市",
            "proId": 22,
            "CitySort": 219
        }, {"cityId": 220, "cityName": "庆阳市", "proId": 22, "CitySort": 220}, {
            "cityId": 221,
            "cityName": "定西市",
            "proId": 22,
            "CitySort": 221
        }, {"cityId": 222, "cityName": "陇南市", "proId": 22, "CitySort": 222}, {
            "cityId": 223,
            "cityName": "临夏回族自治州",
            "proId": 22,
            "CitySort": 223
        }, {"cityId": 224, "cityName": "甘南藏族自治州", "proId": 22, "CitySort": 224}, {
            "cityId": 225,
            "cityName": "成都市",
            "proId": 28,
            "CitySort": 225
        }, {"cityId": 226, "cityName": "攀枝花市", "proId": 28, "CitySort": 226}, {
            "cityId": 227,
            "cityName": "自贡市",
            "proId": 28,
            "CitySort": 227
        }, {"cityId": 228, "cityName": "绵阳市", "proId": 28, "CitySort": 228}, {
            "cityId": 229,
            "cityName": "南充市",
            "proId": 28,
            "CitySort": 229
        }, {"cityId": 230, "cityName": "达州市", "proId": 28, "CitySort": 230}, {
            "cityId": 231,
            "cityName": "遂宁市",
            "proId": 28,
            "CitySort": 231
        }, {"cityId": 232, "cityName": "广安市", "proId": 28, "CitySort": 232}, {
            "cityId": 233,
            "cityName": "巴中市",
            "proId": 28,
            "CitySort": 233
        }, {"cityId": 234, "cityName": "泸州市", "proId": 28, "CitySort": 234}, {
            "cityId": 235,
            "cityName": "宜宾市",
            "proId": 28,
            "CitySort": 235
        }, {"cityId": 236, "cityName": "资阳市", "proId": 28, "CitySort": 236}, {
            "cityId": 237,
            "cityName": "内江市",
            "proId": 28,
            "CitySort": 237
        }, {"cityId": 238, "cityName": "乐山市", "proId": 28, "CitySort": 238}, {
            "cityId": 239,
            "cityName": "眉山市",
            "proId": 28,
            "CitySort": 239
        }, {"cityId": 240, "cityName": "凉山彝族自治州", "proId": 28, "CitySort": 240}, {
            "cityId": 241,
            "cityName": "雅安市",
            "proId": 28,
            "CitySort": 241
        }, {"cityId": 242, "cityName": "甘孜藏族自治州", "proId": 28, "CitySort": 242}, {
            "cityId": 243,
            "cityName": "阿坝藏族羌族自治州",
            "proId": 28,
            "CitySort": 243
        }, {"cityId": 244, "cityName": "德阳市", "proId": 28, "CitySort": 244}, {
            "cityId": 245,
            "cityName": "广元市",
            "proId": 28,
            "CitySort": 245
        }, {"cityId": 246, "cityName": "贵阳市", "proId": 29, "CitySort": 246}, {
            "cityId": 247,
            "cityName": "遵义市",
            "proId": 29,
            "CitySort": 247
        }, {"cityId": 248, "cityName": "安顺市", "proId": 29, "CitySort": 248}, {
            "cityId": 249,
            "cityName": "黔南布依族苗族自治州",
            "proId": 29,
            "CitySort": 249
        }, {"cityId": 250, "cityName": "黔东南苗族侗族自治州", "proId": 29, "CitySort": 250}, {
            "cityId": 251,
            "cityName": "铜仁地区",
            "proId": 29,
            "CitySort": 251
        }, {"cityId": 252, "cityName": "毕节地区", "proId": 29, "CitySort": 252}, {
            "cityId": 253,
            "cityName": "六盘水市",
            "proId": 29,
            "CitySort": 253
        }, {"cityId": 254, "cityName": "黔西南布依族苗族自治州", "proId": 29, "CitySort": 254}, {
            "cityId": 255,
            "cityName": "海口市",
            "proId": 20,
            "CitySort": 255
        }, {"cityId": 256, "cityName": "三亚市", "proId": 20, "CitySort": 256}, {
            "cityId": 257,
            "cityName": "五指山市",
            "proId": 20,
            "CitySort": 257
        }, {"cityId": 258, "cityName": "琼海市", "proId": 20, "CitySort": 258}, {
            "cityId": 259,
            "cityName": "儋州市",
            "proId": 20,
            "CitySort": 259
        }, {"cityId": 260, "cityName": "文昌市", "proId": 20, "CitySort": 260}, {
            "cityId": 261,
            "cityName": "万宁市",
            "proId": 20,
            "CitySort": 261
        }, {"cityId": 262, "cityName": "东方市", "proId": 20, "CitySort": 262}, {
            "cityId": 263,
            "cityName": "澄迈县",
            "proId": 20,
            "CitySort": 263
        }, {"cityId": 264, "cityName": "定安县", "proId": 20, "CitySort": 264}, {
            "cityId": 265,
            "cityName": "屯昌县",
            "proId": 20,
            "CitySort": 265
        }, {"cityId": 266, "cityName": "临高县", "proId": 20, "CitySort": 266}, {
            "cityId": 267,
            "cityName": "白沙黎族自治县",
            "proId": 20,
            "CitySort": 267
        }, {"cityId": 268, "cityName": "昌江黎族自治县", "proId": 20, "CitySort": 268}, {
            "cityId": 269,
            "cityName": "乐东黎族自治县",
            "proId": 20,
            "CitySort": 269
        }, {"cityId": 270, "cityName": "陵水黎族自治县", "proId": 20, "CitySort": 270}, {
            "cityId": 271,
            "cityName": "保亭黎族苗族自治县",
            "proId": 20,
            "CitySort": 271
        }, {"cityId": 272, "cityName": "琼中黎族苗族自治县", "proId": 20, "CitySort": 272}, {
            "cityId": 273,
            "cityName": "西双版纳傣族自治州",
            "proId": 30,
            "CitySort": 273
        }, {"cityId": 274, "cityName": "德宏傣族景颇族自治州", "proId": 30, "CitySort": 274}, {
            "cityId": 275,
            "cityName": "昭通市",
            "proId": 30,
            "CitySort": 275
        }, {"cityId": 276, "cityName": "昆明市", "proId": 30, "CitySort": 276}, {
            "cityId": 277,
            "cityName": "大理白族自治州",
            "proId": 30,
            "CitySort": 277
        }, {"cityId": 278, "cityName": "红河哈尼族彝族自治州", "proId": 30, "CitySort": 278}, {
            "cityId": 279,
            "cityName": "曲靖市",
            "proId": 30,
            "CitySort": 279
        }, {"cityId": 280, "cityName": "保山市", "proId": 30, "CitySort": 280}, {
            "cityId": 281,
            "cityName": "文山壮族苗族自治州",
            "proId": 30,
            "CitySort": 281
        }, {"cityId": 282, "cityName": "玉溪市", "proId": 30, "CitySort": 282}, {
            "cityId": 283,
            "cityName": "楚雄彝族自治州",
            "proId": 30,
            "CitySort": 283
        }, {"cityId": 284, "cityName": "普洱市", "proId": 30, "CitySort": 284}, {
            "cityId": 285,
            "cityName": "临沧市",
            "proId": 30,
            "CitySort": 285
        }, {"cityId": 286, "cityName": "怒江傈傈族自治州", "proId": 30, "CitySort": 286}, {
            "cityId": 287,
            "cityName": "迪庆藏族自治州",
            "proId": 30,
            "CitySort": 287
        }, {"cityId": 288, "cityName": "丽江市", "proId": 30, "CitySort": 288}, {
            "cityId": 289,
            "cityName": "海北藏族自治州",
            "proId": 25,
            "CitySort": 289
        }, {"cityId": 290, "cityName": "西宁市", "proId": 25, "CitySort": 290}, {
            "cityId": 291,
            "cityName": "海东地区",
            "proId": 25,
            "CitySort": 291
        }, {"cityId": 292, "cityName": "黄南藏族自治州", "proId": 25, "CitySort": 292}, {
            "cityId": 293,
            "cityName": "海南藏族自治州",
            "proId": 25,
            "CitySort": 293
        }, {"cityId": 294, "cityName": "果洛藏族自治州", "proId": 25, "CitySort": 294}, {
            "cityId": 295,
            "cityName": "玉树藏族自治州",
            "proId": 25,
            "CitySort": 295
        }, {"cityId": 296, "cityName": "海西蒙古族藏族自治州", "proId": 25, "CitySort": 296}, {
            "cityId": 297,
            "cityName": "西安市",
            "proId": 23,
            "CitySort": 297
        }, {"cityId": 298, "cityName": "咸阳市", "proId": 23, "CitySort": 298}, {
            "cityId": 299,
            "cityName": "延安市",
            "proId": 23,
            "CitySort": 299
        }, {"cityId": 300, "cityName": "榆林市", "proId": 23, "CitySort": 300}, {
            "cityId": 301,
            "cityName": "渭南市",
            "proId": 23,
            "CitySort": 301
        }, {"cityId": 302, "cityName": "商洛市", "proId": 23, "CitySort": 302}, {
            "cityId": 303,
            "cityName": "安康市",
            "proId": 23,
            "CitySort": 303
        }, {"cityId": 304, "cityName": "汉中市", "proId": 23, "CitySort": 304}, {
            "cityId": 305,
            "cityName": "宝鸡市",
            "proId": 23,
            "CitySort": 305
        }, {"cityId": 306, "cityName": "铜川市", "proId": 23, "CitySort": 306}, {
            "cityId": 307,
            "cityName": "防城港市",
            "proId": 21,
            "CitySort": 307
        }, {"cityId": 308, "cityName": "南宁市", "proId": 21, "CitySort": 308}, {
            "cityId": 309,
            "cityName": "崇左市",
            "proId": 21,
            "CitySort": 309
        }, {"cityId": 310, "cityName": "来宾市", "proId": 21, "CitySort": 310}, {
            "cityId": 311,
            "cityName": "柳州市",
            "proId": 21,
            "CitySort": 311
        }, {"cityId": 312, "cityName": "桂林市", "proId": 21, "CitySort": 312}, {
            "cityId": 313,
            "cityName": "梧州市",
            "proId": 21,
            "CitySort": 313
        }, {"cityId": 314, "cityName": "贺州市", "proId": 21, "CitySort": 314}, {
            "cityId": 315,
            "cityName": "贵港市",
            "proId": 21,
            "CitySort": 315
        }, {"cityId": 316, "cityName": "玉林市", "proId": 21, "CitySort": 316}, {
            "cityId": 317,
            "cityName": "百色市",
            "proId": 21,
            "CitySort": 317
        }, {"cityId": 318, "cityName": "钦州市", "proId": 21, "CitySort": 318}, {
            "cityId": 319,
            "cityName": "河池市",
            "proId": 21,
            "CitySort": 319
        }, {"cityId": 320, "cityName": "北海市", "proId": 21, "CitySort": 320}, {
            "cityId": 321,
            "cityName": "拉萨市",
            "proId": 31,
            "CitySort": 321
        }, {"cityId": 322, "cityName": "日喀则地区", "proId": 31, "CitySort": 322}, {
            "cityId": 323,
            "cityName": "山南地区",
            "proId": 31,
            "CitySort": 323
        }, {"cityId": 324, "cityName": "林芝地区", "proId": 31, "CitySort": 324}, {
            "cityId": 325,
            "cityName": "昌都地区",
            "proId": 31,
            "CitySort": 325
        }, {"cityId": 326, "cityName": "那曲地区", "proId": 31, "CitySort": 326}, {
            "cityId": 327,
            "cityName": "阿里地区",
            "proId": 31,
            "CitySort": 327
        }, {"cityId": 328, "cityName": "银川市", "proId": 26, "CitySort": 328}, {
            "cityId": 329,
            "cityName": "石嘴山市",
            "proId": 26,
            "CitySort": 329
        }, {"cityId": 330, "cityName": "吴忠市", "proId": 26, "CitySort": 330}, {
            "cityId": 331,
            "cityName": "固原市",
            "proId": 26,
            "CitySort": 331
        }, {"cityId": 332, "cityName": "中卫市", "proId": 26, "CitySort": 332}, {
            "cityId": 333,
            "cityName": "塔城地区",
            "proId": 24,
            "CitySort": 333
        }, {"cityId": 334, "cityName": "哈密地区", "proId": 24, "CitySort": 334}, {
            "cityId": 335,
            "cityName": "和田地区",
            "proId": 24,
            "CitySort": 335
        }, {"cityId": 336, "cityName": "阿勒泰地区", "proId": 24, "CitySort": 336}, {
            "cityId": 337,
            "cityName": "克孜勒苏柯尔克孜自治州",
            "proId": 24,
            "CitySort": 337
        }, {"cityId": 338, "cityName": "博尔塔拉蒙古自治州", "proId": 24, "CitySort": 338}, {
            "cityId": 339,
            "cityName": "克拉玛依市",
            "proId": 24,
            "CitySort": 339
        }, {"cityId": 340, "cityName": "乌鲁木齐市", "proId": 24, "CitySort": 340}, {
            "cityId": 341,
            "cityName": "石河子市",
            "proId": 24,
            "CitySort": 341
        }, {"cityId": 342, "cityName": "昌吉回族自治州", "proId": 24, "CitySort": 342}, {
            "cityId": 343,
            "cityName": "五家渠市",
            "proId": 24,
            "CitySort": 343
        }, {"cityId": 344, "cityName": "吐鲁番地区", "proId": 24, "CitySort": 344}, {
            "cityId": 345,
            "cityName": "巴音郭楞蒙古自治州",
            "proId": 24,
            "CitySort": 345
        }, {"cityId": 346, "cityName": "阿克苏地区", "proId": 24, "CitySort": 346}, {
            "cityId": 347,
            "cityName": "阿拉尔市",
            "proId": 24,
            "CitySort": 347
        }, {"cityId": 348, "cityName": "喀什地区", "proId": 24, "CitySort": 348}, {
            "cityId": 349,
            "cityName": "图木舒克市",
            "proId": 24,
            "CitySort": 349
        }, {"cityId": 350, "cityName": "伊犁哈萨克自治州", "proId": 24, "CitySort": 350}, {
            "cityId": 351,
            "cityName": "呼伦贝尔市",
            "proId": 5,
            "CitySort": 351
        }, {"cityId": 352, "cityName": "呼和浩特市", "proId": 5, "CitySort": 352}, {
            "cityId": 353,
            "cityName": "包头市",
            "proId": 5,
            "CitySort": 353
        }, {"cityId": 354, "cityName": "乌海市", "proId": 5, "CitySort": 354}, {
            "cityId": 355,
            "cityName": "乌兰察布市",
            "proId": 5,
            "CitySort": 355
        }, {"cityId": 356, "cityName": "通辽市", "proId": 5, "CitySort": 356}, {
            "cityId": 357,
            "cityName": "赤峰市",
            "proId": 5,
            "CitySort": 357
        }, {"cityId": 358, "cityName": "鄂尔多斯市", "proId": 5, "CitySort": 358}, {
            "cityId": 359,
            "cityName": "巴彦淖尔市",
            "proId": 5,
            "CitySort": 359
        }, {"cityId": 360, "cityName": "锡林郭勒盟", "proId": 5, "CitySort": 360}, {
            "cityId": 361,
            "cityName": "兴安盟",
            "proId": 5,
            "CitySort": 361
        }, {"cityId": 362, "cityName": "阿拉善盟", "proId": 5, "CitySort": 362}, {
            "cityId": 363,
            "cityName": "台北市",
            "proId": 32,
            "CitySort": 363
        }, {"cityId": 364, "cityName": "高雄市", "proId": 32, "CitySort": 364}, {
            "cityId": 365,
            "cityName": "基隆市",
            "proId": 32,
            "CitySort": 365
        }, {"cityId": 366, "cityName": "台中市", "proId": 32, "CitySort": 366}, {
            "cityId": 367,
            "cityName": "台南市",
            "proId": 32,
            "CitySort": 367
        }, {"cityId": 368, "cityName": "新竹市", "proId": 32, "CitySort": 368}, {
            "cityId": 369,
            "cityName": "嘉义市",
            "proId": 32,
            "CitySort": 369
        }, {"cityId": 370, "cityName": "澳门特别行政区", "proId": 33, "CitySort": 370}, {
            "cityId": 371,
            "cityName": "香港特别行政区",
            "proId": 34,
            "CitySort": 371
        }]);
//  县/区
    app.constant('country', [
        {"id": 1, "countryName": "东城区", "cityId": 1, "DisSort": null}, {
            "id": 2,
            "countryName": "西城区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 3, "countryName": "崇文区", "cityId": 1, "DisSort": null}, {
            "id": 4,
            "countryName": "宣武区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 5, "countryName": "朝阳区", "cityId": 1, "DisSort": null}, {
            "id": 6,
            "countryName": "丰台区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 7, "countryName": "石景山区", "cityId": 1, "DisSort": null}, {
            "id": 8,
            "countryName": "海淀区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 9, "countryName": "门头沟区", "cityId": 1, "DisSort": null}, {
            "id": 10,
            "countryName": "房山区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 11, "countryName": "通州区", "cityId": 1, "DisSort": null}, {
            "id": 12,
            "countryName": "顺义区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 13, "countryName": "昌平区", "cityId": 1, "DisSort": null}, {
            "id": 14,
            "countryName": "大兴区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 15, "countryName": "怀柔区", "cityId": 1, "DisSort": null}, {
            "id": 16,
            "countryName": "平谷区",
            "cityId": 1,
            "DisSort": null
        }, {"id": 17, "countryName": "密云县", "cityId": 1, "DisSort": null}, {
            "id": 18,
            "countryName": "延庆县",
            "cityId": 1,
            "DisSort": null
        }, {"id": 19, "countryName": "和平区", "cityId": 2, "DisSort": null}, {
            "id": 20,
            "countryName": "河东区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 21, "countryName": "河西区", "cityId": 2, "DisSort": null}, {
            "id": 22,
            "countryName": "南开区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 23, "countryName": "河北区", "cityId": 2, "DisSort": null}, {
            "id": 24,
            "countryName": "红桥区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 25, "countryName": "塘沽区", "cityId": 2, "DisSort": null}, {
            "id": 26,
            "countryName": "汉沽区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 27, "countryName": "大港区", "cityId": 2, "DisSort": null}, {
            "id": 28,
            "countryName": "东丽区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 29, "countryName": "西青区", "cityId": 2, "DisSort": null}, {
            "id": 30,
            "countryName": "津南区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 31, "countryName": "北辰区", "cityId": 2, "DisSort": null}, {
            "id": 32,
            "countryName": "武清区",
            "cityId": 2,
            "DisSort": null
        }, {"id": 33, "countryName": "宝坻区", "cityId": 2, "DisSort": null}, {
            "id": 34,
            "countryName": "宁河县",
            "cityId": 2,
            "DisSort": null
        }, {"id": 35, "countryName": "静海县", "cityId": 2, "DisSort": null}, {
            "id": 36,
            "countryName": "蓟县",
            "cityId": 2,
            "DisSort": null
        }, {"id": 37, "countryName": "黄浦区", "cityId": 3, "DisSort": null}, {
            "id": 38,
            "countryName": "卢湾区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 39, "countryName": "徐汇区", "cityId": 3, "DisSort": null}, {
            "id": 40,
            "countryName": "长宁区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 41, "countryName": "静安区", "cityId": 3, "DisSort": null}, {
            "id": 42,
            "countryName": "普陀区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 43, "countryName": "闸北区", "cityId": 3, "DisSort": null}, {
            "id": 44,
            "countryName": "虹口区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 45, "countryName": "杨浦区", "cityId": 3, "DisSort": null}, {
            "id": 46,
            "countryName": "闵行区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 47, "countryName": "宝山区", "cityId": 3, "DisSort": null}, {
            "id": 48,
            "countryName": "嘉定区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 49, "countryName": "浦东新区", "cityId": 3, "DisSort": null}, {
            "id": 50,
            "countryName": "金山区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 51, "countryName": "松江区", "cityId": 3, "DisSort": null}, {
            "id": 52,
            "countryName": "青浦区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 53, "countryName": "南汇区", "cityId": 3, "DisSort": null}, {
            "id": 54,
            "countryName": "奉贤区",
            "cityId": 3,
            "DisSort": null
        }, {"id": 55, "countryName": "崇明县", "cityId": 3, "DisSort": null}, {
            "id": 56,
            "countryName": "万州区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 57, "countryName": "涪陵区", "cityId": 4, "DisSort": null}, {
            "id": 58,
            "countryName": "渝中区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 59, "countryName": "大渡口区", "cityId": 4, "DisSort": null}, {
            "id": 60,
            "countryName": "江北区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 61, "countryName": "沙坪坝区", "cityId": 4, "DisSort": null}, {
            "id": 62,
            "countryName": "九龙坡区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 63, "countryName": "南岸区", "cityId": 4, "DisSort": null}, {
            "id": 64,
            "countryName": "北碚区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 65, "countryName": "万盛区", "cityId": 4, "DisSort": null}, {
            "id": 66,
            "countryName": "双桥区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 67, "countryName": "渝北区", "cityId": 4, "DisSort": null}, {
            "id": 68,
            "countryName": "巴南区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 69, "countryName": "黔江区", "cityId": 4, "DisSort": null}, {
            "id": 70,
            "countryName": "长寿区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 71, "countryName": "江津区", "cityId": 4, "DisSort": null}, {
            "id": 72,
            "countryName": "合川区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 73, "countryName": "永川区", "cityId": 4, "DisSort": null}, {
            "id": 74,
            "countryName": "南川区",
            "cityId": 4,
            "DisSort": null
        }, {"id": 75, "countryName": "綦江县", "cityId": 4, "DisSort": null}, {
            "id": 76,
            "countryName": "潼南县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 77, "countryName": "铜梁县", "cityId": 4, "DisSort": null}, {
            "id": 78,
            "countryName": "大足县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 79, "countryName": "荣昌县", "cityId": 4, "DisSort": null}, {
            "id": 80,
            "countryName": "璧山县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 81, "countryName": "梁平县", "cityId": 4, "DisSort": null}, {
            "id": 82,
            "countryName": "城口县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 83, "countryName": "丰都县", "cityId": 4, "DisSort": null}, {
            "id": 84,
            "countryName": "垫江县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 85, "countryName": "武隆县", "cityId": 4, "DisSort": null}, {
            "id": 86,
            "countryName": "忠县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 87, "countryName": "开县", "cityId": 4, "DisSort": null}, {
            "id": 88,
            "countryName": "云阳县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 89, "countryName": "奉节县", "cityId": 4, "DisSort": null}, {
            "id": 90,
            "countryName": "巫山县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 91, "countryName": "巫溪县", "cityId": 4, "DisSort": null}, {
            "id": 92,
            "countryName": "石柱土家族自治县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 93, "countryName": "秀山土家族苗族自治县", "cityId": 4, "DisSort": null}, {
            "id": 94,
            "countryName": "酉阳土家族苗族自治县",
            "cityId": 4,
            "DisSort": null
        }, {"id": 95, "countryName": "彭水苗族土家族自治县", "cityId": 4, "DisSort": null}, {
            "id": 96,
            "countryName": "邯山区",
            "cityId": 5,
            "DisSort": null
        }, {"id": 97, "countryName": "丛台区", "cityId": 5, "DisSort": null}, {
            "id": 98,
            "countryName": "复兴区",
            "cityId": 5,
            "DisSort": null
        }, {"id": 99, "countryName": "峰峰矿区", "cityId": 5, "DisSort": null}, {
            "id": 100,
            "countryName": "邯郸县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 101, "countryName": "临漳县", "cityId": 5, "DisSort": null}, {
            "id": 102,
            "countryName": "成安县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 103, "countryName": "大名县", "cityId": 5, "DisSort": null}, {
            "id": 104,
            "countryName": "涉县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 105, "countryName": "磁县", "cityId": 5, "DisSort": null}, {
            "id": 106,
            "countryName": "肥乡县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 107, "countryName": "永年县", "cityId": 5, "DisSort": null}, {
            "id": 108,
            "countryName": "邱县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 109, "countryName": "鸡泽县", "cityId": 5, "DisSort": null}, {
            "id": 110,
            "countryName": "广平县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 111, "countryName": "馆陶县", "cityId": 5, "DisSort": null}, {
            "id": 112,
            "countryName": "魏县",
            "cityId": 5,
            "DisSort": null
        }, {"id": 113, "countryName": "曲周县", "cityId": 5, "DisSort": null}, {
            "id": 114,
            "countryName": "武安市",
            "cityId": 5,
            "DisSort": null
        }, {"id": 115, "countryName": "长安区", "cityId": 6, "DisSort": null}, {
            "id": 116,
            "countryName": "桥东区",
            "cityId": 6,
            "DisSort": null
        }, {"id": 117, "countryName": "桥西区", "cityId": 6, "DisSort": null}, {
            "id": 118,
            "countryName": "新华区",
            "cityId": 6,
            "DisSort": null
        }, {"id": 119, "countryName": "井陉矿区", "cityId": 6, "DisSort": null}, {
            "id": 120,
            "countryName": "裕华区",
            "cityId": 6,
            "DisSort": null
        }, {"id": 121, "countryName": "井陉县", "cityId": 6, "DisSort": null}, {
            "id": 122,
            "countryName": "正定县",
            "cityId": 6,
            "DisSort": null
        }, {"id": 123, "countryName": "栾城县", "cityId": 6, "DisSort": null}, {
            "id": 124,
            "countryName": "行唐县",
            "cityId": 6,
            "DisSort": null
        }, {"id": 125, "countryName": "灵寿县", "cityId": 6, "DisSort": null}, {
            "id": 126,
            "countryName": "高邑县",
            "cityId": 6,
            "DisSort": null
        }, {"id": 127, "countryName": "深泽县", "cityId": 6, "DisSort": null}, {
            "id": 128,
            "countryName": "赞皇县",
            "cityId": 6,
            "DisSort": null
        }, {"id": 129, "countryName": "无极县", "cityId": 6, "DisSort": null}, {
            "id": 130,
            "countryName": "平山县",
            "cityId": 6,
            "DisSort": null
        }, {"id": 131, "countryName": "元氏县", "cityId": 6, "DisSort": null}, {
            "id": 132,
            "countryName": "赵县",
            "cityId": 6,
            "DisSort": null
        }, {"id": 133, "countryName": "辛集市", "cityId": 6, "DisSort": null}, {
            "id": 134,
            "countryName": "藁城市",
            "cityId": 6,
            "DisSort": null
        }, {"id": 135, "countryName": "晋州市", "cityId": 6, "DisSort": null}, {
            "id": 136,
            "countryName": "新乐市",
            "cityId": 6,
            "DisSort": null
        }, {"id": 137, "countryName": "鹿泉市", "cityId": 6, "DisSort": null}, {
            "id": 138,
            "countryName": "新市区",
            "cityId": 7,
            "DisSort": null
        }, {"id": 139, "countryName": "北市区", "cityId": 7, "DisSort": null}, {
            "id": 140,
            "countryName": "南市区",
            "cityId": 7,
            "DisSort": null
        }, {"id": 141, "countryName": "满城县", "cityId": 7, "DisSort": null}, {
            "id": 142,
            "countryName": "清苑县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 143, "countryName": "涞水县", "cityId": 7, "DisSort": null}, {
            "id": 144,
            "countryName": "阜平县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 145, "countryName": "徐水县", "cityId": 7, "DisSort": null}, {
            "id": 146,
            "countryName": "定兴县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 147, "countryName": "唐县", "cityId": 7, "DisSort": null}, {
            "id": 148,
            "countryName": "高阳县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 149, "countryName": "容城县", "cityId": 7, "DisSort": null}, {
            "id": 150,
            "countryName": "涞源县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 151, "countryName": "望都县", "cityId": 7, "DisSort": null}, {
            "id": 152,
            "countryName": "安新县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 153, "countryName": "易县", "cityId": 7, "DisSort": null}, {
            "id": 154,
            "countryName": "曲阳县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 155, "countryName": "蠡县", "cityId": 7, "DisSort": null}, {
            "id": 156,
            "countryName": "顺平县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 157, "countryName": "博野县", "cityId": 7, "DisSort": null}, {
            "id": 158,
            "countryName": "雄县",
            "cityId": 7,
            "DisSort": null
        }, {"id": 159, "countryName": "涿州市", "cityId": 7, "DisSort": null}, {
            "id": 160,
            "countryName": "定州市",
            "cityId": 7,
            "DisSort": null
        }, {"id": 161, "countryName": "安国市", "cityId": 7, "DisSort": null}, {
            "id": 162,
            "countryName": "高碑店市",
            "cityId": 7,
            "DisSort": null
        }, {"id": 163, "countryName": "桥东区", "cityId": 8, "DisSort": null}, {
            "id": 164,
            "countryName": "桥西区",
            "cityId": 8,
            "DisSort": null
        }, {"id": 165, "countryName": "宣化区", "cityId": 8, "DisSort": null}, {
            "id": 166,
            "countryName": "下花园区",
            "cityId": 8,
            "DisSort": null
        }, {"id": 167, "countryName": "宣化县", "cityId": 8, "DisSort": null}, {
            "id": 168,
            "countryName": "张北县",
            "cityId": 8,
            "DisSort": null
        }, {"id": 169, "countryName": "康保县", "cityId": 8, "DisSort": null}, {
            "id": 170,
            "countryName": "沽源县",
            "cityId": 8,
            "DisSort": null
        }, {"id": 171, "countryName": "尚义县", "cityId": 8, "DisSort": null}, {
            "id": 172,
            "countryName": "蔚县",
            "cityId": 8,
            "DisSort": null
        }, {"id": 173, "countryName": "阳原县", "cityId": 8, "DisSort": null}, {
            "id": 174,
            "countryName": "怀安县",
            "cityId": 8,
            "DisSort": null
        }, {"id": 175, "countryName": "万全县", "cityId": 8, "DisSort": null}, {
            "id": 176,
            "countryName": "怀来县",
            "cityId": 8,
            "DisSort": null
        }, {"id": 177, "countryName": "涿鹿县", "cityId": 8, "DisSort": null}, {
            "id": 178,
            "countryName": "赤城县",
            "cityId": 8,
            "DisSort": null
        }, {"id": 179, "countryName": "崇礼县", "cityId": 8, "DisSort": null}, {
            "id": 180,
            "countryName": "双桥区",
            "cityId": 9,
            "DisSort": null
        }, {"id": 181, "countryName": "双滦区", "cityId": 9, "DisSort": null}, {
            "id": 182,
            "countryName": "鹰手营子矿区",
            "cityId": 9,
            "DisSort": null
        }, {"id": 183, "countryName": "承德县", "cityId": 9, "DisSort": null}, {
            "id": 184,
            "countryName": "兴隆县",
            "cityId": 9,
            "DisSort": null
        }, {"id": 185, "countryName": "平泉县", "cityId": 9, "DisSort": null}, {
            "id": 186,
            "countryName": "滦平县",
            "cityId": 9,
            "DisSort": null
        }, {"id": 187, "countryName": "隆化县", "cityId": 9, "DisSort": null}, {
            "id": 188,
            "countryName": "丰宁满族自治县",
            "cityId": 9,
            "DisSort": null
        }, {"id": 189, "countryName": "宽城满族自治县", "cityId": 9, "DisSort": null}, {
            "id": 190,
            "countryName": "围场满族蒙古族自治县",
            "cityId": 9,
            "DisSort": null
        }, {"id": 191, "countryName": "路南区", "cityId": 10, "DisSort": null}, {
            "id": 192,
            "countryName": "路北区",
            "cityId": 10,
            "DisSort": null
        }, {"id": 193, "countryName": "古冶区", "cityId": 10, "DisSort": null}, {
            "id": 194,
            "countryName": "开平区",
            "cityId": 10,
            "DisSort": null
        }, {"id": 195, "countryName": "丰南区", "cityId": 10, "DisSort": null}, {
            "id": 196,
            "countryName": "丰润区",
            "cityId": 10,
            "DisSort": null
        }, {"id": 197, "countryName": "滦县", "cityId": 10, "DisSort": null}, {
            "id": 198,
            "countryName": "滦南县",
            "cityId": 10,
            "DisSort": null
        }, {"id": 199, "countryName": "乐亭县", "cityId": 10, "DisSort": null}, {
            "id": 200,
            "countryName": "迁西县",
            "cityId": 10,
            "DisSort": null
        }, {"id": 201, "countryName": "玉田县", "cityId": 10, "DisSort": null}, {
            "id": 202,
            "countryName": "唐海县",
            "cityId": 10,
            "DisSort": null
        }, {"id": 203, "countryName": "遵化市", "cityId": 10, "DisSort": null}, {
            "id": 204,
            "countryName": "迁安市",
            "cityId": 10,
            "DisSort": null
        }, {"id": 205, "countryName": "安次区", "cityId": 11, "DisSort": null}, {
            "id": 206,
            "countryName": "广阳区",
            "cityId": 11,
            "DisSort": null
        }, {"id": 207, "countryName": "固安县", "cityId": 11, "DisSort": null}, {
            "id": 208,
            "countryName": "永清县",
            "cityId": 11,
            "DisSort": null
        }, {"id": 209, "countryName": "香河县", "cityId": 11, "DisSort": null}, {
            "id": 210,
            "countryName": "大城县",
            "cityId": 11,
            "DisSort": null
        }, {"id": 211, "countryName": "文安县", "cityId": 11, "DisSort": null}, {
            "id": 212,
            "countryName": "大厂回族自治县",
            "cityId": 11,
            "DisSort": null
        }, {"id": 213, "countryName": "霸州市", "cityId": 11, "DisSort": null}, {
            "id": 214,
            "countryName": "三河市",
            "cityId": 11,
            "DisSort": null
        }, {"id": 215, "countryName": "新华区", "cityId": 12, "DisSort": null}, {
            "id": 216,
            "countryName": "运河区",
            "cityId": 12,
            "DisSort": null
        }, {"id": 217, "countryName": "沧县", "cityId": 12, "DisSort": null}, {
            "id": 218,
            "countryName": "青县",
            "cityId": 12,
            "DisSort": null
        }, {"id": 219, "countryName": "东光县", "cityId": 12, "DisSort": null}, {
            "id": 220,
            "countryName": "海兴县",
            "cityId": 12,
            "DisSort": null
        }, {"id": 221, "countryName": "盐山县", "cityId": 12, "DisSort": null}, {
            "id": 222,
            "countryName": "肃宁县",
            "cityId": 12,
            "DisSort": null
        }, {"id": 223, "countryName": "南皮县", "cityId": 12, "DisSort": null}, {
            "id": 224,
            "countryName": "吴桥县",
            "cityId": 12,
            "DisSort": null
        }, {"id": 225, "countryName": "献县", "cityId": 12, "DisSort": null}, {
            "id": 226,
            "countryName": "孟村回族自治县",
            "cityId": 12,
            "DisSort": null
        }, {"id": 227, "countryName": "泊头市", "cityId": 12, "DisSort": null}, {
            "id": 228,
            "countryName": "任丘市",
            "cityId": 12,
            "DisSort": null
        }, {"id": 229, "countryName": "黄骅市", "cityId": 12, "DisSort": null}, {
            "id": 230,
            "countryName": "河间市",
            "cityId": 12,
            "DisSort": null
        }, {"id": 231, "countryName": "桃城区", "cityId": 13, "DisSort": null}, {
            "id": 232,
            "countryName": "枣强县",
            "cityId": 13,
            "DisSort": null
        }, {"id": 233, "countryName": "武邑县", "cityId": 13, "DisSort": null}, {
            "id": 234,
            "countryName": "武强县",
            "cityId": 13,
            "DisSort": null
        }, {"id": 235, "countryName": "饶阳县", "cityId": 13, "DisSort": null}, {
            "id": 236,
            "countryName": "安平县",
            "cityId": 13,
            "DisSort": null
        }, {"id": 237, "countryName": "故城县", "cityId": 13, "DisSort": null}, {
            "id": 238,
            "countryName": "景县",
            "cityId": 13,
            "DisSort": null
        }, {"id": 239, "countryName": "阜城县", "cityId": 13, "DisSort": null}, {
            "id": 240,
            "countryName": "冀州市",
            "cityId": 13,
            "DisSort": null
        }, {"id": 241, "countryName": "深州市", "cityId": 13, "DisSort": null}, {
            "id": 242,
            "countryName": "桥东区",
            "cityId": 14,
            "DisSort": null
        }, {"id": 243, "countryName": "桥西区", "cityId": 14, "DisSort": null}, {
            "id": 244,
            "countryName": "邢台县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 245, "countryName": "临城县", "cityId": 14, "DisSort": null}, {
            "id": 246,
            "countryName": "内丘县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 247, "countryName": "柏乡县", "cityId": 14, "DisSort": null}, {
            "id": 248,
            "countryName": "隆尧县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 249, "countryName": "任县", "cityId": 14, "DisSort": null}, {
            "id": 250,
            "countryName": "南和县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 251, "countryName": "宁晋县", "cityId": 14, "DisSort": null}, {
            "id": 252,
            "countryName": "巨鹿县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 253, "countryName": "新河县", "cityId": 14, "DisSort": null}, {
            "id": 254,
            "countryName": "广宗县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 255, "countryName": "平乡县", "cityId": 14, "DisSort": null}, {
            "id": 256,
            "countryName": "威县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 257, "countryName": "清河县", "cityId": 14, "DisSort": null}, {
            "id": 258,
            "countryName": "临西县",
            "cityId": 14,
            "DisSort": null
        }, {"id": 259, "countryName": "南宫市", "cityId": 14, "DisSort": null}, {
            "id": 260,
            "countryName": "沙河市",
            "cityId": 14,
            "DisSort": null
        }, {"id": 261, "countryName": "海港区", "cityId": 15, "DisSort": null}, {
            "id": 262,
            "countryName": "山海关区",
            "cityId": 15,
            "DisSort": null
        }, {"id": 263, "countryName": "北戴河区", "cityId": 15, "DisSort": null}, {
            "id": 264,
            "countryName": "青龙满族自治县",
            "cityId": 15,
            "DisSort": null
        }, {"id": 265, "countryName": "昌黎县", "cityId": 15, "DisSort": null}, {
            "id": 266,
            "countryName": "抚宁县",
            "cityId": 15,
            "DisSort": null
        }, {"id": 267, "countryName": "卢龙县", "cityId": 15, "DisSort": null}, {
            "id": 268,
            "countryName": "朔城区",
            "cityId": 16,
            "DisSort": null
        }, {"id": 269, "countryName": "平鲁区", "cityId": 16, "DisSort": null}, {
            "id": 270,
            "countryName": "山阴县",
            "cityId": 16,
            "DisSort": null
        }, {"id": 271, "countryName": "应县", "cityId": 16, "DisSort": null}, {
            "id": 272,
            "countryName": "右玉县",
            "cityId": 16,
            "DisSort": null
        }, {"id": 273, "countryName": "怀仁县", "cityId": 16, "DisSort": null}, {
            "id": 274,
            "countryName": "忻府区",
            "cityId": 17,
            "DisSort": null
        }, {"id": 275, "countryName": "定襄县", "cityId": 17, "DisSort": null}, {
            "id": 276,
            "countryName": "五台县",
            "cityId": 17,
            "DisSort": null
        }, {"id": 277, "countryName": "代县", "cityId": 17, "DisSort": null}, {
            "id": 278,
            "countryName": "繁峙县",
            "cityId": 17,
            "DisSort": null
        }, {"id": 279, "countryName": "宁武县", "cityId": 17, "DisSort": null}, {
            "id": 280,
            "countryName": "静乐县",
            "cityId": 17,
            "DisSort": null
        }, {"id": 281, "countryName": "神池县", "cityId": 17, "DisSort": null}, {
            "id": 282,
            "countryName": "五寨县",
            "cityId": 17,
            "DisSort": null
        }, {"id": 283, "countryName": "岢岚县", "cityId": 17, "DisSort": null}, {
            "id": 284,
            "countryName": "河曲县",
            "cityId": 17,
            "DisSort": null
        }, {"id": 285, "countryName": "保德县", "cityId": 17, "DisSort": null}, {
            "id": 286,
            "countryName": "偏关县",
            "cityId": 17,
            "DisSort": null
        }, {"id": 287, "countryName": "原平市", "cityId": 17, "DisSort": null}, {
            "id": 288,
            "countryName": "小店区",
            "cityId": 18,
            "DisSort": null
        }, {"id": 289, "countryName": "迎泽区", "cityId": 18, "DisSort": null}, {
            "id": 290,
            "countryName": "杏花岭区",
            "cityId": 18,
            "DisSort": null
        }, {"id": 291, "countryName": "尖草坪区", "cityId": 18, "DisSort": null}, {
            "id": 292,
            "countryName": "万柏林区",
            "cityId": 18,
            "DisSort": null
        }, {"id": 293, "countryName": "晋源区", "cityId": 18, "DisSort": null}, {
            "id": 294,
            "countryName": "清徐县",
            "cityId": 18,
            "DisSort": null
        }, {"id": 295, "countryName": "阳曲县", "cityId": 18, "DisSort": null}, {
            "id": 296,
            "countryName": "娄烦县",
            "cityId": 18,
            "DisSort": null
        }, {"id": 297, "countryName": "古交市", "cityId": 18, "DisSort": null}, {
            "id": 298,
            "countryName": "矿区",
            "cityId": 19,
            "DisSort": null
        }, {"id": 299, "countryName": "南郊区", "cityId": 19, "DisSort": null}, {
            "id": 300,
            "countryName": "新荣区",
            "cityId": 19,
            "DisSort": null
        }, {"id": 301, "countryName": "阳高县", "cityId": 19, "DisSort": null}, {
            "id": 302,
            "countryName": "天镇县",
            "cityId": 19,
            "DisSort": null
        }, {"id": 303, "countryName": "广灵县", "cityId": 19, "DisSort": null}, {
            "id": 304,
            "countryName": "灵丘县",
            "cityId": 19,
            "DisSort": null
        }, {"id": 305, "countryName": "浑源县", "cityId": 19, "DisSort": null}, {
            "id": 306,
            "countryName": "左云县",
            "cityId": 19,
            "DisSort": null
        }, {"id": 307, "countryName": "大同县", "cityId": 19, "DisSort": null}, {
            "id": 308,
            "countryName": "矿区",
            "cityId": 20,
            "DisSort": null
        }, {"id": 309, "countryName": "平定县", "cityId": 20, "DisSort": null}, {
            "id": 310,
            "countryName": "盂县",
            "cityId": 20,
            "DisSort": null
        }, {"id": 311, "countryName": "榆次区", "cityId": 21, "DisSort": null}, {
            "id": 312,
            "countryName": "榆社县",
            "cityId": 21,
            "DisSort": null
        }, {"id": 313, "countryName": "左权县", "cityId": 21, "DisSort": null}, {
            "id": 314,
            "countryName": "和顺县",
            "cityId": 21,
            "DisSort": null
        }, {"id": 315, "countryName": "昔阳县", "cityId": 21, "DisSort": null}, {
            "id": 316,
            "countryName": "寿阳县",
            "cityId": 21,
            "DisSort": null
        }, {"id": 317, "countryName": "太谷县", "cityId": 21, "DisSort": null}, {
            "id": 318,
            "countryName": "祁县",
            "cityId": 21,
            "DisSort": null
        }, {"id": 319, "countryName": "平遥县", "cityId": 21, "DisSort": null}, {
            "id": 320,
            "countryName": "灵石县",
            "cityId": 21,
            "DisSort": null
        }, {"id": 321, "countryName": "介休市", "cityId": 21, "DisSort": null}, {
            "id": 322,
            "countryName": "长治县",
            "cityId": 22,
            "DisSort": null
        }, {"id": 323, "countryName": "襄垣县", "cityId": 22, "DisSort": null}, {
            "id": 324,
            "countryName": "屯留县",
            "cityId": 22,
            "DisSort": null
        }, {"id": 325, "countryName": "平顺县", "cityId": 22, "DisSort": null}, {
            "id": 326,
            "countryName": "黎城县",
            "cityId": 22,
            "DisSort": null
        }, {"id": 327, "countryName": "壶关县", "cityId": 22, "DisSort": null}, {
            "id": 328,
            "countryName": "长子县",
            "cityId": 22,
            "DisSort": null
        }, {"id": 329, "countryName": "武乡县", "cityId": 22, "DisSort": null}, {
            "id": 330,
            "countryName": "沁县",
            "cityId": 22,
            "DisSort": null
        }, {"id": 331, "countryName": "沁源县", "cityId": 22, "DisSort": null}, {
            "id": 332,
            "countryName": "潞城市",
            "cityId": 22,
            "DisSort": null
        }, {"id": 333, "countryName": "沁水县", "cityId": 23, "DisSort": null}, {
            "id": 334,
            "countryName": "阳城县",
            "cityId": 23,
            "DisSort": null
        }, {"id": 335, "countryName": "陵川县", "cityId": 23, "DisSort": null}, {
            "id": 336,
            "countryName": "泽州县",
            "cityId": 23,
            "DisSort": null
        }, {"id": 337, "countryName": "高平市", "cityId": 23, "DisSort": null}, {
            "id": 338,
            "countryName": "尧都区",
            "cityId": 24,
            "DisSort": null
        }, {"id": 339, "countryName": "曲沃县", "cityId": 24, "DisSort": null}, {
            "id": 340,
            "countryName": "翼城县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 341, "countryName": "襄汾县", "cityId": 24, "DisSort": null}, {
            "id": 342,
            "countryName": "洪洞县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 343, "countryName": "古县", "cityId": 24, "DisSort": null}, {
            "id": 344,
            "countryName": "安泽县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 345, "countryName": "浮山县", "cityId": 24, "DisSort": null}, {
            "id": 346,
            "countryName": "吉县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 347, "countryName": "乡宁县", "cityId": 24, "DisSort": null}, {
            "id": 348,
            "countryName": "大宁县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 349, "countryName": "隰县", "cityId": 24, "DisSort": null}, {
            "id": 350,
            "countryName": "永和县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 351, "countryName": "蒲县", "cityId": 24, "DisSort": null}, {
            "id": 352,
            "countryName": "汾西县",
            "cityId": 24,
            "DisSort": null
        }, {"id": 353, "countryName": "侯马市", "cityId": 24, "DisSort": null}, {
            "id": 354,
            "countryName": "霍州市",
            "cityId": 24,
            "DisSort": null
        }, {"id": 355, "countryName": "离石区", "cityId": 25, "DisSort": null}, {
            "id": 356,
            "countryName": "文水县",
            "cityId": 25,
            "DisSort": null
        }, {"id": 357, "countryName": "交城县", "cityId": 25, "DisSort": null}, {
            "id": 358,
            "countryName": "兴县",
            "cityId": 25,
            "DisSort": null
        }, {"id": 359, "countryName": "临县", "cityId": 25, "DisSort": null}, {
            "id": 360,
            "countryName": "柳林县",
            "cityId": 25,
            "DisSort": null
        }, {"id": 361, "countryName": "石楼县", "cityId": 25, "DisSort": null}, {
            "id": 362,
            "countryName": "岚县",
            "cityId": 25,
            "DisSort": null
        }, {"id": 363, "countryName": "方山县", "cityId": 25, "DisSort": null}, {
            "id": 364,
            "countryName": "中阳县",
            "cityId": 25,
            "DisSort": null
        }, {"id": 365, "countryName": "交口县", "cityId": 25, "DisSort": null}, {
            "id": 366,
            "countryName": "孝义市",
            "cityId": 25,
            "DisSort": null
        }, {"id": 367, "countryName": "汾阳市", "cityId": 25, "DisSort": null}, {
            "id": 368,
            "countryName": "盐湖区",
            "cityId": 26,
            "DisSort": null
        }, {"id": 369, "countryName": "临猗县", "cityId": 26, "DisSort": null}, {
            "id": 370,
            "countryName": "万荣县",
            "cityId": 26,
            "DisSort": null
        }, {"id": 371, "countryName": "闻喜县", "cityId": 26, "DisSort": null}, {
            "id": 372,
            "countryName": "稷山县",
            "cityId": 26,
            "DisSort": null
        }, {"id": 373, "countryName": "新绛县", "cityId": 26, "DisSort": null}, {
            "id": 374,
            "countryName": "绛县",
            "cityId": 26,
            "DisSort": null
        }, {"id": 375, "countryName": "垣曲县", "cityId": 26, "DisSort": null}, {
            "id": 376,
            "countryName": "夏县",
            "cityId": 26,
            "DisSort": null
        }, {"id": 377, "countryName": "平陆县", "cityId": 26, "DisSort": null}, {
            "id": 378,
            "countryName": "芮城县",
            "cityId": 26,
            "DisSort": null
        }, {"id": 379, "countryName": "永济市", "cityId": 26, "DisSort": null}, {
            "id": 380,
            "countryName": "河津市",
            "cityId": 26,
            "DisSort": null
        }, {"id": 381, "countryName": "和平区", "cityId": 27, "DisSort": null}, {
            "id": 382,
            "countryName": "沈河区",
            "cityId": 27,
            "DisSort": null
        }, {"id": 383, "countryName": "大东区", "cityId": 27, "DisSort": null}, {
            "id": 384,
            "countryName": "皇姑区",
            "cityId": 27,
            "DisSort": null
        }, {"id": 385, "countryName": "铁西区", "cityId": 27, "DisSort": null}, {
            "id": 386,
            "countryName": "苏家屯区",
            "cityId": 27,
            "DisSort": null
        }, {"id": 387, "countryName": "东陵区", "cityId": 27, "DisSort": null}, {
            "id": 388,
            "countryName": "沈北新区",
            "cityId": 27,
            "DisSort": null
        }, {"id": 389, "countryName": "于洪区", "cityId": 27, "DisSort": null}, {
            "id": 390,
            "countryName": "辽中县",
            "cityId": 27,
            "DisSort": null
        }, {"id": 391, "countryName": "康平县", "cityId": 27, "DisSort": null}, {
            "id": 392,
            "countryName": "法库县",
            "cityId": 27,
            "DisSort": null
        }, {"id": 393, "countryName": "新民市", "cityId": 27, "DisSort": null}, {
            "id": 394,
            "countryName": "银州区",
            "cityId": 28,
            "DisSort": null
        }, {"id": 395, "countryName": "清河区", "cityId": 28, "DisSort": null}, {
            "id": 396,
            "countryName": "铁岭县",
            "cityId": 28,
            "DisSort": null
        }, {"id": 397, "countryName": "西丰县", "cityId": 28, "DisSort": null}, {
            "id": 398,
            "countryName": "昌图县",
            "cityId": 28,
            "DisSort": null
        }, {"id": 399, "countryName": "调兵山市", "cityId": 28, "DisSort": null}, {
            "id": 400,
            "countryName": "开原市",
            "cityId": 28,
            "DisSort": null
        }, {"id": 401, "countryName": "长海县", "cityId": 29, "DisSort": null}, {
            "id": 402,
            "countryName": "旅顺口区",
            "cityId": 29,
            "DisSort": null
        }, {"id": 403, "countryName": "中山区", "cityId": 29, "DisSort": null}, {
            "id": 404,
            "countryName": "西岗区",
            "cityId": 29,
            "DisSort": null
        }, {"id": 405, "countryName": "沙河口区", "cityId": 29, "DisSort": null}, {
            "id": 406,
            "countryName": "甘井子区",
            "cityId": 29,
            "DisSort": null
        }, {"id": 407, "countryName": "金州区", "cityId": 29, "DisSort": null}, {
            "id": 408,
            "countryName": "普兰店市",
            "cityId": 29,
            "DisSort": null
        }, {"id": 409, "countryName": "瓦房店市", "cityId": 29, "DisSort": null}, {
            "id": 410,
            "countryName": "庄河市",
            "cityId": 29,
            "DisSort": null
        }, {"id": 411, "countryName": "铁东区", "cityId": 30, "DisSort": null}, {
            "id": 412,
            "countryName": "铁西区",
            "cityId": 30,
            "DisSort": null
        }, {"id": 413, "countryName": "立山区", "cityId": 30, "DisSort": null}, {
            "id": 414,
            "countryName": "千山区",
            "cityId": 30,
            "DisSort": null
        }, {"id": 415, "countryName": "台安县", "cityId": 30, "DisSort": null}, {
            "id": 416,
            "countryName": "岫岩满族自治县",
            "cityId": 30,
            "DisSort": null
        }, {"id": 417, "countryName": "海城市", "cityId": 30, "DisSort": null}, {
            "id": 418,
            "countryName": "新抚区",
            "cityId": 31,
            "DisSort": null
        }, {"id": 419, "countryName": "东洲区", "cityId": 31, "DisSort": null}, {
            "id": 420,
            "countryName": "望花区",
            "cityId": 31,
            "DisSort": null
        }, {"id": 421, "countryName": "顺城区", "cityId": 31, "DisSort": null}, {
            "id": 422,
            "countryName": "抚顺县",
            "cityId": 31,
            "DisSort": null
        }, {"id": 423, "countryName": "新宾满族自治县", "cityId": 31, "DisSort": null}, {
            "id": 424,
            "countryName": "清原满族自治县",
            "cityId": 31,
            "DisSort": null
        }, {"id": 425, "countryName": "平山区", "cityId": 32, "DisSort": null}, {
            "id": 426,
            "countryName": "溪湖区",
            "cityId": 32,
            "DisSort": null
        }, {"id": 427, "countryName": "明山区", "cityId": 32, "DisSort": null}, {
            "id": 428,
            "countryName": "南芬区",
            "cityId": 32,
            "DisSort": null
        }, {"id": 429, "countryName": "本溪满族自治县", "cityId": 32, "DisSort": null}, {
            "id": 430,
            "countryName": "桓仁满族自治县",
            "cityId": 32,
            "DisSort": null
        }, {"id": 431, "countryName": "元宝区", "cityId": 33, "DisSort": null}, {
            "id": 432,
            "countryName": "振兴区",
            "cityId": 33,
            "DisSort": null
        }, {"id": 433, "countryName": "振安区", "cityId": 33, "DisSort": null}, {
            "id": 434,
            "countryName": "宽甸满族自治县",
            "cityId": 33,
            "DisSort": null
        }, {"id": 435, "countryName": "东港市", "cityId": 33, "DisSort": null}, {
            "id": 436,
            "countryName": "凤城市",
            "cityId": 33,
            "DisSort": null
        }, {"id": 437, "countryName": "古塔区", "cityId": 34, "DisSort": null}, {
            "id": 438,
            "countryName": "凌河区",
            "cityId": 34,
            "DisSort": null
        }, {"id": 439, "countryName": "太和区", "cityId": 34, "DisSort": null}, {
            "id": 440,
            "countryName": "黑山县",
            "cityId": 34,
            "DisSort": null
        }, {"id": 441, "countryName": "义县", "cityId": 34, "DisSort": null}, {
            "id": 442,
            "countryName": "凌海市",
            "cityId": 34,
            "DisSort": null
        }, {"id": 443, "countryName": "北镇市", "cityId": 34, "DisSort": null}, {
            "id": 444,
            "countryName": "站前区",
            "cityId": 35,
            "DisSort": null
        }, {"id": 445, "countryName": "西市区", "cityId": 35, "DisSort": null}, {
            "id": 446,
            "countryName": "鮁鱼圈区",
            "cityId": 35,
            "DisSort": null
        }, {"id": 447, "countryName": "老边区", "cityId": 35, "DisSort": null}, {
            "id": 448,
            "countryName": "盖州市",
            "cityId": 35,
            "DisSort": null
        }, {"id": 449, "countryName": "大石桥市", "cityId": 35, "DisSort": null}, {
            "id": 450,
            "countryName": "海州区",
            "cityId": 36,
            "DisSort": null
        }, {"id": 451, "countryName": "新邱区", "cityId": 36, "DisSort": null}, {
            "id": 452,
            "countryName": "太平区",
            "cityId": 36,
            "DisSort": null
        }, {"id": 453, "countryName": "清河门区", "cityId": 36, "DisSort": null}, {
            "id": 454,
            "countryName": "细河区",
            "cityId": 36,
            "DisSort": null
        }, {"id": 455, "countryName": "阜新蒙古族自治县", "cityId": 36, "DisSort": null}, {
            "id": 456,
            "countryName": "彰武县",
            "cityId": 36,
            "DisSort": null
        }, {"id": 457, "countryName": "白塔区", "cityId": 37, "DisSort": null}, {
            "id": 458,
            "countryName": "文圣区",
            "cityId": 37,
            "DisSort": null
        }, {"id": 459, "countryName": "宏伟区", "cityId": 37, "DisSort": null}, {
            "id": 460,
            "countryName": "弓长岭区",
            "cityId": 37,
            "DisSort": null
        }, {"id": 461, "countryName": "太子河区", "cityId": 37, "DisSort": null}, {
            "id": 462,
            "countryName": "辽阳县",
            "cityId": 37,
            "DisSort": null
        }, {"id": 463, "countryName": "灯塔市", "cityId": 37, "DisSort": null}, {
            "id": 464,
            "countryName": "双塔区",
            "cityId": 38,
            "DisSort": null
        }, {"id": 465, "countryName": "龙城区", "cityId": 38, "DisSort": null}, {
            "id": 466,
            "countryName": "朝阳县",
            "cityId": 38,
            "DisSort": null
        }, {"id": 467, "countryName": "建平县", "cityId": 38, "DisSort": null}, {
            "id": 468,
            "countryName": "喀喇沁左翼蒙古族自治县",
            "cityId": 38,
            "DisSort": null
        }, {"id": 469, "countryName": "北票市", "cityId": 38, "DisSort": null}, {
            "id": 470,
            "countryName": "凌源市",
            "cityId": 38,
            "DisSort": null
        }, {"id": 471, "countryName": "双台子区", "cityId": 39, "DisSort": null}, {
            "id": 472,
            "countryName": "兴隆台区",
            "cityId": 39,
            "DisSort": null
        }, {"id": 473, "countryName": "大洼县", "cityId": 39, "DisSort": null}, {
            "id": 474,
            "countryName": "盘山县",
            "cityId": 39,
            "DisSort": null
        }, {"id": 475, "countryName": "连山区", "cityId": 40, "DisSort": null}, {
            "id": 476,
            "countryName": "龙港区",
            "cityId": 40,
            "DisSort": null
        }, {"id": 477, "countryName": "南票区", "cityId": 40, "DisSort": null}, {
            "id": 478,
            "countryName": "绥中县",
            "cityId": 40,
            "DisSort": null
        }, {"id": 479, "countryName": "建昌县", "cityId": 40, "DisSort": null}, {
            "id": 480,
            "countryName": "兴城市",
            "cityId": 40,
            "DisSort": null
        }, {"id": 481, "countryName": "南关区", "cityId": 41, "DisSort": null}, {
            "id": 482,
            "countryName": "宽城区",
            "cityId": 41,
            "DisSort": null
        }, {"id": 483, "countryName": "朝阳区", "cityId": 41, "DisSort": null}, {
            "id": 484,
            "countryName": "二道区",
            "cityId": 41,
            "DisSort": null
        }, {"id": 485, "countryName": "绿园区", "cityId": 41, "DisSort": null}, {
            "id": 486,
            "countryName": "双阳区",
            "cityId": 41,
            "DisSort": null
        }, {"id": 487, "countryName": "农安县", "cityId": 41, "DisSort": null}, {
            "id": 488,
            "countryName": "九台市",
            "cityId": 41,
            "DisSort": null
        }, {"id": 489, "countryName": "榆树市", "cityId": 41, "DisSort": null}, {
            "id": 490,
            "countryName": "德惠市",
            "cityId": 41,
            "DisSort": null
        }, {"id": 491, "countryName": "昌邑区", "cityId": 42, "DisSort": null}, {
            "id": 492,
            "countryName": "龙潭区",
            "cityId": 42,
            "DisSort": null
        }, {"id": 493, "countryName": "船营区", "cityId": 42, "DisSort": null}, {
            "id": 494,
            "countryName": "丰满区",
            "cityId": 42,
            "DisSort": null
        }, {"id": 495, "countryName": "永吉县", "cityId": 42, "DisSort": null}, {
            "id": 496,
            "countryName": "蛟河市",
            "cityId": 42,
            "DisSort": null
        }, {"id": 497, "countryName": "桦甸市", "cityId": 42, "DisSort": null}, {
            "id": 498,
            "countryName": "舒兰市",
            "cityId": 42,
            "DisSort": null
        }, {"id": 499, "countryName": "磐石市", "cityId": 42, "DisSort": null}, {
            "id": 500,
            "countryName": "延吉市",
            "cityId": 43,
            "DisSort": null
        }, {"id": 501, "countryName": "图们市", "cityId": 43, "DisSort": null}, {
            "id": 502,
            "countryName": "敦化市",
            "cityId": 43,
            "DisSort": null
        }, {"id": 503, "countryName": "珲春市", "cityId": 43, "DisSort": null}, {
            "id": 504,
            "countryName": "龙井市",
            "cityId": 43,
            "DisSort": null
        }, {"id": 505, "countryName": "和龙市", "cityId": 43, "DisSort": null}, {
            "id": 506,
            "countryName": "汪清县",
            "cityId": 43,
            "DisSort": null
        }, {"id": 507, "countryName": "安图县", "cityId": 43, "DisSort": null}, {
            "id": 508,
            "countryName": "铁西区",
            "cityId": 44,
            "DisSort": null
        }, {"id": 509, "countryName": "铁东区", "cityId": 44, "DisSort": null}, {
            "id": 510,
            "countryName": "梨树县",
            "cityId": 44,
            "DisSort": null
        }, {"id": 511, "countryName": "伊通满族自治县", "cityId": 44, "DisSort": null}, {
            "id": 512,
            "countryName": "公主岭市",
            "cityId": 44,
            "DisSort": null
        }, {"id": 513, "countryName": "双辽市", "cityId": 44, "DisSort": null}, {
            "id": 514,
            "countryName": "东昌区",
            "cityId": 45,
            "DisSort": null
        }, {"id": 515, "countryName": "二道江区", "cityId": 45, "DisSort": null}, {
            "id": 516,
            "countryName": "通化县",
            "cityId": 45,
            "DisSort": null
        }, {"id": 517, "countryName": "辉南县", "cityId": 45, "DisSort": null}, {
            "id": 518,
            "countryName": "柳河县",
            "cityId": 45,
            "DisSort": null
        }, {"id": 519, "countryName": "梅河口市", "cityId": 45, "DisSort": null}, {
            "id": 520,
            "countryName": "集安市",
            "cityId": 45,
            "DisSort": null
        }, {"id": 521, "countryName": "洮北区", "cityId": 46, "DisSort": null}, {
            "id": 522,
            "countryName": "镇赉县",
            "cityId": 46,
            "DisSort": null
        }, {"id": 523, "countryName": "通榆县", "cityId": 46, "DisSort": null}, {
            "id": 524,
            "countryName": "洮南市",
            "cityId": 46,
            "DisSort": null
        }, {"id": 525, "countryName": "大安市", "cityId": 46, "DisSort": null}, {
            "id": 526,
            "countryName": "龙山区",
            "cityId": 47,
            "DisSort": null
        }, {"id": 527, "countryName": "西安区", "cityId": 47, "DisSort": null}, {
            "id": 528,
            "countryName": "东丰县",
            "cityId": 47,
            "DisSort": null
        }, {"id": 529, "countryName": "东辽县", "cityId": 47, "DisSort": null}, {
            "id": 530,
            "countryName": "宁江区",
            "cityId": 48,
            "DisSort": null
        }, {"id": 531, "countryName": "前郭尔罗斯蒙古族自治县", "cityId": 48, "DisSort": null}, {
            "id": 532,
            "countryName": "长岭县",
            "cityId": 48,
            "DisSort": null
        }, {"id": 533, "countryName": "乾安县", "cityId": 48, "DisSort": null}, {
            "id": 534,
            "countryName": "扶余县",
            "cityId": 48,
            "DisSort": null
        }, {"id": 535, "countryName": "八道江区", "cityId": 49, "DisSort": null}, {
            "id": 536,
            "countryName": "江源区",
            "cityId": 49,
            "DisSort": null
        }, {"id": 537, "countryName": "抚松县", "cityId": 49, "DisSort": null}, {
            "id": 538,
            "countryName": "靖宇县",
            "cityId": 49,
            "DisSort": null
        }, {"id": 539, "countryName": "长白朝鲜族自治县", "cityId": 49, "DisSort": null}, {
            "id": 540,
            "countryName": "临江市",
            "cityId": 49,
            "DisSort": null
        }, {"id": 541, "countryName": "道里区", "cityId": 50, "DisSort": null}, {
            "id": 542,
            "countryName": "南岗区",
            "cityId": 50,
            "DisSort": null
        }, {"id": 543, "countryName": "道外区", "cityId": 50, "DisSort": null}, {
            "id": 544,
            "countryName": "平房区",
            "cityId": 50,
            "DisSort": null
        }, {"id": 545, "countryName": "松北区", "cityId": 50, "DisSort": null}, {
            "id": 546,
            "countryName": "香坊区",
            "cityId": 50,
            "DisSort": null
        }, {"id": 547, "countryName": "呼兰区", "cityId": 50, "DisSort": null}, {
            "id": 548,
            "countryName": "阿城区",
            "cityId": 50,
            "DisSort": null
        }, {"id": 549, "countryName": "依兰县", "cityId": 50, "DisSort": null}, {
            "id": 550,
            "countryName": "方正县",
            "cityId": 50,
            "DisSort": null
        }, {"id": 551, "countryName": "宾县", "cityId": 50, "DisSort": null}, {
            "id": 552,
            "countryName": "巴彦县",
            "cityId": 50,
            "DisSort": null
        }, {"id": 553, "countryName": "木兰县", "cityId": 50, "DisSort": null}, {
            "id": 554,
            "countryName": "通河县",
            "cityId": 50,
            "DisSort": null
        }, {"id": 555, "countryName": "延寿县", "cityId": 50, "DisSort": null}, {
            "id": 556,
            "countryName": "双城市",
            "cityId": 50,
            "DisSort": null
        }, {"id": 557, "countryName": "尚志市", "cityId": 50, "DisSort": null}, {
            "id": 558,
            "countryName": "五常市",
            "cityId": 50,
            "DisSort": null
        }, {"id": 559, "countryName": "龙沙区", "cityId": 51, "DisSort": null}, {
            "id": 560,
            "countryName": "建华区",
            "cityId": 51,
            "DisSort": null
        }, {"id": 561, "countryName": "铁锋区", "cityId": 51, "DisSort": null}, {
            "id": 562,
            "countryName": "昂昂溪区",
            "cityId": 51,
            "DisSort": null
        }, {"id": 563, "countryName": "富拉尔基区", "cityId": 51, "DisSort": null}, {
            "id": 564,
            "countryName": "碾子山区",
            "cityId": 51,
            "DisSort": null
        }, {"id": 565, "countryName": "梅里斯达翰尔族区", "cityId": 51, "DisSort": null}, {
            "id": 566,
            "countryName": "龙江县",
            "cityId": 51,
            "DisSort": null
        }, {"id": 567, "countryName": "依安县", "cityId": 51, "DisSort": null}, {
            "id": 568,
            "countryName": "泰来县",
            "cityId": 51,
            "DisSort": null
        }, {"id": 569, "countryName": "甘南县", "cityId": 51, "DisSort": null}, {
            "id": 570,
            "countryName": "富裕县",
            "cityId": 51,
            "DisSort": null
        }, {"id": 571, "countryName": "克山县", "cityId": 51, "DisSort": null}, {
            "id": 572,
            "countryName": "克东县",
            "cityId": 51,
            "DisSort": null
        }, {"id": 573, "countryName": "拜泉县", "cityId": 51, "DisSort": null}, {
            "id": 574,
            "countryName": "讷河市",
            "cityId": 51,
            "DisSort": null
        }, {"id": 575, "countryName": "鸡冠区", "cityId": 52, "DisSort": null}, {
            "id": 576,
            "countryName": "恒山区",
            "cityId": 52,
            "DisSort": null
        }, {"id": 577, "countryName": "滴道区", "cityId": 52, "DisSort": null}, {
            "id": 578,
            "countryName": "梨树区",
            "cityId": 52,
            "DisSort": null
        }, {"id": 579, "countryName": "城子河区", "cityId": 52, "DisSort": null}, {
            "id": 580,
            "countryName": "麻山区",
            "cityId": 52,
            "DisSort": null
        }, {"id": 581, "countryName": "鸡东县", "cityId": 52, "DisSort": null}, {
            "id": 582,
            "countryName": "虎林市",
            "cityId": 52,
            "DisSort": null
        }, {"id": 583, "countryName": "密山市", "cityId": 52, "DisSort": null}, {
            "id": 584,
            "countryName": "东安区",
            "cityId": 53,
            "DisSort": null
        }, {"id": 585, "countryName": "阳明区", "cityId": 53, "DisSort": null}, {
            "id": 586,
            "countryName": "爱民区",
            "cityId": 53,
            "DisSort": null
        }, {"id": 587, "countryName": "西安区", "cityId": 53, "DisSort": null}, {
            "id": 588,
            "countryName": "东宁县",
            "cityId": 53,
            "DisSort": null
        }, {"id": 589, "countryName": "林口县", "cityId": 53, "DisSort": null}, {
            "id": 590,
            "countryName": "绥芬河市",
            "cityId": 53,
            "DisSort": null
        }, {"id": 591, "countryName": "海林市", "cityId": 53, "DisSort": null}, {
            "id": 592,
            "countryName": "宁安市",
            "cityId": 53,
            "DisSort": null
        }, {"id": 593, "countryName": "穆棱市", "cityId": 53, "DisSort": null}, {
            "id": 594,
            "countryName": "新兴区",
            "cityId": 54,
            "DisSort": null
        }, {"id": 595, "countryName": "桃山区", "cityId": 54, "DisSort": null}, {
            "id": 596,
            "countryName": "茄子河区",
            "cityId": 54,
            "DisSort": null
        }, {"id": 597, "countryName": "勃利县", "cityId": 54, "DisSort": null}, {
            "id": 598,
            "countryName": "向阳区",
            "cityId": 55,
            "DisSort": null
        }, {"id": 599, "countryName": "前进区", "cityId": 55, "DisSort": null}, {
            "id": 600,
            "countryName": "东风区",
            "cityId": 55,
            "DisSort": null
        }, {"id": 601, "countryName": "桦南县", "cityId": 55, "DisSort": null}, {
            "id": 602,
            "countryName": "桦川县",
            "cityId": 55,
            "DisSort": null
        }, {"id": 603, "countryName": "汤原县", "cityId": 55, "DisSort": null}, {
            "id": 604,
            "countryName": "抚远县",
            "cityId": 55,
            "DisSort": null
        }, {"id": 605, "countryName": "同江市", "cityId": 55, "DisSort": null}, {
            "id": 606,
            "countryName": "富锦市",
            "cityId": 55,
            "DisSort": null
        }, {"id": 607, "countryName": "向阳区", "cityId": 56, "DisSort": null}, {
            "id": 608,
            "countryName": "工农区",
            "cityId": 56,
            "DisSort": null
        }, {"id": 609, "countryName": "南山区", "cityId": 56, "DisSort": null}, {
            "id": 610,
            "countryName": "兴安区",
            "cityId": 56,
            "DisSort": null
        }, {"id": 611, "countryName": "东山区", "cityId": 56, "DisSort": null}, {
            "id": 612,
            "countryName": "兴山区",
            "cityId": 56,
            "DisSort": null
        }, {"id": 613, "countryName": "萝北县", "cityId": 56, "DisSort": null}, {
            "id": 614,
            "countryName": "绥滨县",
            "cityId": 56,
            "DisSort": null
        }, {"id": 615, "countryName": "尖山区", "cityId": 57, "DisSort": null}, {
            "id": 616,
            "countryName": "岭东区",
            "cityId": 57,
            "DisSort": null
        }, {"id": 617, "countryName": "四方台区", "cityId": 57, "DisSort": null}, {
            "id": 618,
            "countryName": "宝山区",
            "cityId": 57,
            "DisSort": null
        }, {"id": 619, "countryName": "集贤县", "cityId": 57, "DisSort": null}, {
            "id": 620,
            "countryName": "友谊县",
            "cityId": 57,
            "DisSort": null
        }, {"id": 621, "countryName": "宝清县", "cityId": 57, "DisSort": null}, {
            "id": 622,
            "countryName": "饶河县",
            "cityId": 57,
            "DisSort": null
        }, {"id": 623, "countryName": "北林区", "cityId": 58, "DisSort": null}, {
            "id": 624,
            "countryName": "望奎县",
            "cityId": 58,
            "DisSort": null
        }, {"id": 625, "countryName": "兰西县", "cityId": 58, "DisSort": null}, {
            "id": 626,
            "countryName": "青冈县",
            "cityId": 58,
            "DisSort": null
        }, {"id": 627, "countryName": "庆安县", "cityId": 58, "DisSort": null}, {
            "id": 628,
            "countryName": "明水县",
            "cityId": 58,
            "DisSort": null
        }, {"id": 629, "countryName": "绥棱县", "cityId": 58, "DisSort": null}, {
            "id": 630,
            "countryName": "安达市",
            "cityId": 58,
            "DisSort": null
        }, {"id": 631, "countryName": "肇东市", "cityId": 58, "DisSort": null}, {
            "id": 632,
            "countryName": "海伦市",
            "cityId": 58,
            "DisSort": null
        }, {"id": 633, "countryName": "爱辉区", "cityId": 59, "DisSort": null}, {
            "id": 634,
            "countryName": "嫩江县",
            "cityId": 59,
            "DisSort": null
        }, {"id": 635, "countryName": "逊克县", "cityId": 59, "DisSort": null}, {
            "id": 636,
            "countryName": "孙吴县",
            "cityId": 59,
            "DisSort": null
        }, {"id": 637, "countryName": "北安市", "cityId": 59, "DisSort": null}, {
            "id": 638,
            "countryName": "五大连池市",
            "cityId": 59,
            "DisSort": null
        }, {"id": 639, "countryName": "呼玛县", "cityId": 60, "DisSort": null}, {
            "id": 640,
            "countryName": "塔河县",
            "cityId": 60,
            "DisSort": null
        }, {"id": 641, "countryName": "漠河县", "cityId": 60, "DisSort": null}, {
            "id": 642,
            "countryName": "伊春区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 643, "countryName": "南岔区", "cityId": 61, "DisSort": null}, {
            "id": 644,
            "countryName": "友好区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 645, "countryName": "西林区", "cityId": 61, "DisSort": null}, {
            "id": 646,
            "countryName": "翠峦区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 647, "countryName": "新青区", "cityId": 61, "DisSort": null}, {
            "id": 648,
            "countryName": "美溪区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 649, "countryName": "金山屯区", "cityId": 61, "DisSort": null}, {
            "id": 650,
            "countryName": "五营区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 651, "countryName": "乌马河区", "cityId": 61, "DisSort": null}, {
            "id": 652,
            "countryName": "汤旺河区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 653, "countryName": "带岭区", "cityId": 61, "DisSort": null}, {
            "id": 654,
            "countryName": "乌伊岭区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 655, "countryName": "红星区", "cityId": 61, "DisSort": null}, {
            "id": 656,
            "countryName": "上甘岭区",
            "cityId": 61,
            "DisSort": null
        }, {"id": 657, "countryName": "嘉荫县", "cityId": 61, "DisSort": null}, {
            "id": 658,
            "countryName": "铁力市",
            "cityId": 61,
            "DisSort": null
        }, {"id": 659, "countryName": "萨尔图区", "cityId": 62, "DisSort": null}, {
            "id": 660,
            "countryName": "龙凤区",
            "cityId": 62,
            "DisSort": null
        }, {"id": 661, "countryName": "让胡路区", "cityId": 62, "DisSort": null}, {
            "id": 662,
            "countryName": "红岗区",
            "cityId": 62,
            "DisSort": null
        }, {"id": 663, "countryName": "大同区", "cityId": 62, "DisSort": null}, {
            "id": 664,
            "countryName": "肇州县",
            "cityId": 62,
            "DisSort": null
        }, {"id": 665, "countryName": "肇源县", "cityId": 62, "DisSort": null}, {
            "id": 666,
            "countryName": "林甸县",
            "cityId": 62,
            "DisSort": null
        }, {"id": 667, "countryName": "杜尔伯特蒙古族自治县", "cityId": 62, "DisSort": null}, {
            "id": 668,
            "countryName": "江宁区",
            "cityId": 63,
            "DisSort": null
        }, {"id": 669, "countryName": "浦口区", "cityId": 63, "DisSort": null}, {
            "id": 670,
            "countryName": "玄武区",
            "cityId": 63,
            "DisSort": null
        }, {"id": 671, "countryName": "白下区", "cityId": 63, "DisSort": null}, {
            "id": 672,
            "countryName": "秦淮区",
            "cityId": 63,
            "DisSort": null
        }, {"id": 673, "countryName": "建邺区", "cityId": 63, "DisSort": null}, {
            "id": 674,
            "countryName": "鼓楼区",
            "cityId": 63,
            "DisSort": null
        }, {"id": 675, "countryName": "下关区", "cityId": 63, "DisSort": null}, {
            "id": 676,
            "countryName": "栖霞区",
            "cityId": 63,
            "DisSort": null
        }, {"id": 677, "countryName": "雨花台区", "cityId": 63, "DisSort": null}, {
            "id": 678,
            "countryName": "六合区",
            "cityId": 63,
            "DisSort": null
        }, {"id": 679, "countryName": "溧水县", "cityId": 63, "DisSort": null}, {
            "id": 680,
            "countryName": "高淳县",
            "cityId": 63,
            "DisSort": null
        }, {"id": 681, "countryName": "崇安区", "cityId": 64, "DisSort": null}, {
            "id": 682,
            "countryName": "南长区",
            "cityId": 64,
            "DisSort": null
        }, {"id": 683, "countryName": "北塘区", "cityId": 64, "DisSort": null}, {
            "id": 684,
            "countryName": "锡山区",
            "cityId": 64,
            "DisSort": null
        }, {"id": 685, "countryName": "惠山区", "cityId": 64, "DisSort": null}, {
            "id": 686,
            "countryName": "滨湖区",
            "cityId": 64,
            "DisSort": null
        }, {"id": 687, "countryName": "江阴市", "cityId": 64, "DisSort": null}, {
            "id": 688,
            "countryName": "宜兴市",
            "cityId": 64,
            "DisSort": null
        }, {"id": 689, "countryName": "京口区", "cityId": 65, "DisSort": null}, {
            "id": 690,
            "countryName": "润州区",
            "cityId": 65,
            "DisSort": null
        }, {"id": 691, "countryName": "丹徒区", "cityId": 65, "DisSort": null}, {
            "id": 692,
            "countryName": "丹阳市",
            "cityId": 65,
            "DisSort": null
        }, {"id": 693, "countryName": "扬中市", "cityId": 65, "DisSort": null}, {
            "id": 694,
            "countryName": "句容市",
            "cityId": 65,
            "DisSort": null
        }, {"id": 695, "countryName": "沧浪区", "cityId": 66, "DisSort": null}, {
            "id": 696,
            "countryName": "常熟市",
            "cityId": 66,
            "DisSort": null
        }, {"id": 697, "countryName": "平江区", "cityId": 66, "DisSort": null}, {
            "id": 698,
            "countryName": "金阊区",
            "cityId": 66,
            "DisSort": null
        }, {"id": 699, "countryName": "虎丘区", "cityId": 66, "DisSort": null}, {
            "id": 700,
            "countryName": "昆山市",
            "cityId": 66,
            "DisSort": null
        }, {"id": 701, "countryName": "太仓市", "cityId": 66, "DisSort": null}, {
            "id": 702,
            "countryName": "吴江市",
            "cityId": 66,
            "DisSort": null
        }, {"id": 703, "countryName": "吴中区", "cityId": 66, "DisSort": null}, {
            "id": 704,
            "countryName": "相城区",
            "cityId": 66,
            "DisSort": null
        }, {"id": 705, "countryName": "张家港市", "cityId": 66, "DisSort": null}, {
            "id": 706,
            "countryName": "崇川区",
            "cityId": 67,
            "DisSort": null
        }, {"id": 707, "countryName": "港闸区", "cityId": 67, "DisSort": null}, {
            "id": 708,
            "countryName": "海安县",
            "cityId": 67,
            "DisSort": null
        }, {"id": 709, "countryName": "如东县", "cityId": 67, "DisSort": null}, {
            "id": 710,
            "countryName": "启东市",
            "cityId": 67,
            "DisSort": null
        }, {"id": 711, "countryName": "如皋市", "cityId": 67, "DisSort": null}, {
            "id": 712,
            "countryName": "通州市",
            "cityId": 67,
            "DisSort": null
        }, {"id": 713, "countryName": "海门市", "cityId": 67, "DisSort": null}, {
            "id": 714,
            "countryName": "高邮市",
            "cityId": 68,
            "DisSort": null
        }, {"id": 715, "countryName": "广陵区", "cityId": 68, "DisSort": null}, {
            "id": 716,
            "countryName": "邗江区",
            "cityId": 68,
            "DisSort": null
        }, {"id": 717, "countryName": "维扬区", "cityId": 68, "DisSort": null}, {
            "id": 718,
            "countryName": "宝应县",
            "cityId": 68,
            "DisSort": null
        }, {"id": 719, "countryName": "江都市", "cityId": 68, "DisSort": null}, {
            "id": 720,
            "countryName": "仪征市",
            "cityId": 68,
            "DisSort": null
        }, {"id": 721, "countryName": "亭湖区", "cityId": 69, "DisSort": null}, {
            "id": 722,
            "countryName": "盐都区",
            "cityId": 69,
            "DisSort": null
        }, {"id": 723, "countryName": "响水县", "cityId": 69, "DisSort": null}, {
            "id": 724,
            "countryName": "滨海县",
            "cityId": 69,
            "DisSort": null
        }, {"id": 725, "countryName": "阜宁县", "cityId": 69, "DisSort": null}, {
            "id": 726,
            "countryName": "射阳县",
            "cityId": 69,
            "DisSort": null
        }, {"id": 727, "countryName": "建湖县", "cityId": 69, "DisSort": null}, {
            "id": 728,
            "countryName": "东台市",
            "cityId": 69,
            "DisSort": null
        }, {"id": 729, "countryName": "大丰市", "cityId": 69, "DisSort": null}, {
            "id": 730,
            "countryName": "鼓楼区",
            "cityId": 70,
            "DisSort": null
        }, {"id": 731, "countryName": "云龙区", "cityId": 70, "DisSort": null}, {
            "id": 732,
            "countryName": "九里区",
            "cityId": 70,
            "DisSort": null
        }, {"id": 733, "countryName": "贾汪区", "cityId": 70, "DisSort": null}, {
            "id": 734,
            "countryName": "泉山区",
            "cityId": 70,
            "DisSort": null
        }, {"id": 735, "countryName": "丰县", "cityId": 70, "DisSort": null}, {
            "id": 736,
            "countryName": "沛县",
            "cityId": 70,
            "DisSort": null
        }, {"id": 737, "countryName": "铜山县", "cityId": 70, "DisSort": null}, {
            "id": 738,
            "countryName": "睢宁县",
            "cityId": 70,
            "DisSort": null
        }, {"id": 739, "countryName": "新沂市", "cityId": 70, "DisSort": null}, {
            "id": 740,
            "countryName": "邳州市",
            "cityId": 70,
            "DisSort": null
        }, {"id": 741, "countryName": "清河区", "cityId": 71, "DisSort": null}, {
            "id": 742,
            "countryName": "楚州区",
            "cityId": 71,
            "DisSort": null
        }, {"id": 743, "countryName": "淮阴区", "cityId": 71, "DisSort": null}, {
            "id": 744,
            "countryName": "清浦区",
            "cityId": 71,
            "DisSort": null
        }, {"id": 745, "countryName": "涟水县", "cityId": 71, "DisSort": null}, {
            "id": 746,
            "countryName": "洪泽县",
            "cityId": 71,
            "DisSort": null
        }, {"id": 747, "countryName": "盱眙县", "cityId": 71, "DisSort": null}, {
            "id": 748,
            "countryName": "金湖县",
            "cityId": 71,
            "DisSort": null
        }, {"id": 749, "countryName": "连云区", "cityId": 72, "DisSort": null}, {
            "id": 750,
            "countryName": "新浦区",
            "cityId": 72,
            "DisSort": null
        }, {"id": 751, "countryName": "海州区", "cityId": 72, "DisSort": null}, {
            "id": 752,
            "countryName": "赣榆县",
            "cityId": 72,
            "DisSort": null
        }, {"id": 753, "countryName": "东海县", "cityId": 72, "DisSort": null}, {
            "id": 754,
            "countryName": "灌云县",
            "cityId": 72,
            "DisSort": null
        }, {"id": 755, "countryName": "灌南县", "cityId": 72, "DisSort": null}, {
            "id": 756,
            "countryName": "天宁区",
            "cityId": 73,
            "DisSort": null
        }, {"id": 757, "countryName": "钟楼区", "cityId": 73, "DisSort": null}, {
            "id": 758,
            "countryName": "戚墅堰区",
            "cityId": 73,
            "DisSort": null
        }, {"id": 759, "countryName": "新北区", "cityId": 73, "DisSort": null}, {
            "id": 760,
            "countryName": "武进区",
            "cityId": 73,
            "DisSort": null
        }, {"id": 761, "countryName": "溧阳市", "cityId": 73, "DisSort": null}, {
            "id": 762,
            "countryName": "金坛市",
            "cityId": 73,
            "DisSort": null
        }, {"id": 763, "countryName": "海陵区", "cityId": 74, "DisSort": null}, {
            "id": 764,
            "countryName": "高港区",
            "cityId": 74,
            "DisSort": null
        }, {"id": 765, "countryName": "兴化市", "cityId": 74, "DisSort": null}, {
            "id": 766,
            "countryName": "靖江市",
            "cityId": 74,
            "DisSort": null
        }, {"id": 767, "countryName": "泰兴市", "cityId": 74, "DisSort": null}, {
            "id": 768,
            "countryName": "姜堰市",
            "cityId": 74,
            "DisSort": null
        }, {"id": 769, "countryName": "宿城区", "cityId": 75, "DisSort": null}, {
            "id": 770,
            "countryName": "宿豫区",
            "cityId": 75,
            "DisSort": null
        }, {"id": 771, "countryName": "沭阳县", "cityId": 75, "DisSort": null}, {
            "id": 772,
            "countryName": "泗阳县",
            "cityId": 75,
            "DisSort": null
        }, {"id": 773, "countryName": "泗洪县", "cityId": 75, "DisSort": null}, {
            "id": 774,
            "countryName": "定海区",
            "cityId": 76,
            "DisSort": null
        }, {"id": 775, "countryName": "普陀区", "cityId": 76, "DisSort": null}, {
            "id": 776,
            "countryName": "岱山县",
            "cityId": 76,
            "DisSort": null
        }, {"id": 777, "countryName": "嵊泗县", "cityId": 76, "DisSort": null}, {
            "id": 778,
            "countryName": "柯城区",
            "cityId": 77,
            "DisSort": null
        }, {"id": 779, "countryName": "衢江区", "cityId": 77, "DisSort": null}, {
            "id": 780,
            "countryName": "常山县",
            "cityId": 77,
            "DisSort": null
        }, {"id": 781, "countryName": "开化县", "cityId": 77, "DisSort": null}, {
            "id": 782,
            "countryName": "龙游县",
            "cityId": 77,
            "DisSort": null
        }, {"id": 783, "countryName": "江山市", "cityId": 77, "DisSort": null}, {
            "id": 784,
            "countryName": "上城区",
            "cityId": 78,
            "DisSort": null
        }, {"id": 785, "countryName": "下城区", "cityId": 78, "DisSort": null}, {
            "id": 786,
            "countryName": "江干区",
            "cityId": 78,
            "DisSort": null
        }, {"id": 787, "countryName": "拱墅区", "cityId": 78, "DisSort": null}, {
            "id": 788,
            "countryName": "西湖区",
            "cityId": 78,
            "DisSort": null
        }, {"id": 789, "countryName": "滨江区", "cityId": 78, "DisSort": null}, {
            "id": 790,
            "countryName": "余杭区",
            "cityId": 78,
            "DisSort": null
        }, {"id": 791, "countryName": "桐庐县", "cityId": 78, "DisSort": null}, {
            "id": 792,
            "countryName": "淳安县",
            "cityId": 78,
            "DisSort": null
        }, {"id": 793, "countryName": "建德市", "cityId": 78, "DisSort": null}, {
            "id": 794,
            "countryName": "富阳市",
            "cityId": 78,
            "DisSort": null
        }, {"id": 795, "countryName": "临安市", "cityId": 78, "DisSort": null}, {
            "id": 796,
            "countryName": "萧山区",
            "cityId": 78,
            "DisSort": null
        }, {"id": 797, "countryName": "吴兴区", "cityId": 79, "DisSort": null}, {
            "id": 798,
            "countryName": "南浔区",
            "cityId": 79,
            "DisSort": null
        }, {"id": 799, "countryName": "德清县", "cityId": 79, "DisSort": null}, {
            "id": 800,
            "countryName": "长兴县",
            "cityId": 79,
            "DisSort": null
        }, {"id": 801, "countryName": "安吉县", "cityId": 79, "DisSort": null}, {
            "id": 802,
            "countryName": " 南湖区",
            "cityId": 80,
            "DisSort": null
        }, {"id": 803, "countryName": " 秀洲区", "cityId": 80, "DisSort": null}, {
            "id": 804,
            "countryName": " 嘉善县",
            "cityId": 80,
            "DisSort": null
        }, {"id": 805, "countryName": " 海盐县", "cityId": 80, "DisSort": null}, {
            "id": 806,
            "countryName": " 海宁市",
            "cityId": 80,
            "DisSort": null
        }, {"id": 807, "countryName": " 平湖市", "cityId": 80, "DisSort": null}, {
            "id": 808,
            "countryName": " 桐乡市 ",
            "cityId": 80,
            "DisSort": null
        }, {"id": 809, "countryName": "海曙区", "cityId": 81, "DisSort": null}, {
            "id": 810,
            "countryName": "江东区",
            "cityId": 81,
            "DisSort": null
        }, {"id": 811, "countryName": "江北区", "cityId": 81, "DisSort": null}, {
            "id": 812,
            "countryName": "北仑区",
            "cityId": 81,
            "DisSort": null
        }, {"id": 813, "countryName": "镇海区", "cityId": 81, "DisSort": null}, {
            "id": 814,
            "countryName": "鄞州区",
            "cityId": 81,
            "DisSort": null
        }, {"id": 815, "countryName": "象山县", "cityId": 81, "DisSort": null}, {
            "id": 816,
            "countryName": "宁海县",
            "cityId": 81,
            "DisSort": null
        }, {"id": 817, "countryName": "余姚市", "cityId": 81, "DisSort": null}, {
            "id": 818,
            "countryName": "慈溪市",
            "cityId": 81,
            "DisSort": null
        }, {"id": 819, "countryName": "奉化市", "cityId": 81, "DisSort": null}, {
            "id": 820,
            "countryName": "越城区",
            "cityId": 82,
            "DisSort": null
        }, {"id": 821, "countryName": "绍兴县", "cityId": 82, "DisSort": null}, {
            "id": 822,
            "countryName": "新昌县",
            "cityId": 82,
            "DisSort": null
        }, {"id": 823, "countryName": "诸暨市", "cityId": 82, "DisSort": null}, {
            "id": 824,
            "countryName": "上虞市",
            "cityId": 82,
            "DisSort": null
        }, {"id": 825, "countryName": "嵊州市", "cityId": 82, "DisSort": null}, {
            "id": 826,
            "countryName": "鹿城区",
            "cityId": 83,
            "DisSort": null
        }, {"id": 827, "countryName": "龙湾区", "cityId": 83, "DisSort": null}, {
            "id": 828,
            "countryName": "瓯海区",
            "cityId": 83,
            "DisSort": null
        }, {"id": 829, "countryName": "洞头县", "cityId": 83, "DisSort": null}, {
            "id": 830,
            "countryName": "永嘉县",
            "cityId": 83,
            "DisSort": null
        }, {"id": 831, "countryName": "平阳县", "cityId": 83, "DisSort": null}, {
            "id": 832,
            "countryName": "苍南县",
            "cityId": 83,
            "DisSort": null
        }, {"id": 833, "countryName": "文成县", "cityId": 83, "DisSort": null}, {
            "id": 834,
            "countryName": "泰顺县",
            "cityId": 83,
            "DisSort": null
        }, {"id": 835, "countryName": "瑞安市", "cityId": 83, "DisSort": null}, {
            "id": 836,
            "countryName": "乐清市",
            "cityId": 83,
            "DisSort": null
        }, {"id": 837, "countryName": "莲都区", "cityId": 84, "DisSort": null}, {
            "id": 838,
            "countryName": "青田县",
            "cityId": 84,
            "DisSort": null
        }, {"id": 839, "countryName": "缙云县", "cityId": 84, "DisSort": null}, {
            "id": 840,
            "countryName": "遂昌县",
            "cityId": 84,
            "DisSort": null
        }, {"id": 841, "countryName": "松阳县", "cityId": 84, "DisSort": null}, {
            "id": 842,
            "countryName": "云和县",
            "cityId": 84,
            "DisSort": null
        }, {"id": 843, "countryName": "庆元县", "cityId": 84, "DisSort": null}, {
            "id": 844,
            "countryName": "景宁畲族自治县",
            "cityId": 84,
            "DisSort": null
        }, {"id": 845, "countryName": "龙泉市", "cityId": 84, "DisSort": null}, {
            "id": 846,
            "countryName": "婺城区",
            "cityId": 85,
            "DisSort": null
        }, {"id": 847, "countryName": "金东区", "cityId": 85, "DisSort": null}, {
            "id": 848,
            "countryName": "武义县",
            "cityId": 85,
            "DisSort": null
        }, {"id": 849, "countryName": "浦江县", "cityId": 85, "DisSort": null}, {
            "id": 850,
            "countryName": "磐安县",
            "cityId": 85,
            "DisSort": null
        }, {"id": 851, "countryName": "兰溪市", "cityId": 85, "DisSort": null}, {
            "id": 852,
            "countryName": "义乌市",
            "cityId": 85,
            "DisSort": null
        }, {"id": 853, "countryName": "东阳市", "cityId": 85, "DisSort": null}, {
            "id": 854,
            "countryName": "永康市",
            "cityId": 85,
            "DisSort": null
        }, {"id": 855, "countryName": "椒江区", "cityId": 86, "DisSort": null}, {
            "id": 856,
            "countryName": "黄岩区",
            "cityId": 86,
            "DisSort": null
        }, {"id": 857, "countryName": "路桥区", "cityId": 86, "DisSort": null}, {
            "id": 858,
            "countryName": "玉环县",
            "cityId": 86,
            "DisSort": null
        }, {"id": 859, "countryName": "三门县", "cityId": 86, "DisSort": null}, {
            "id": 860,
            "countryName": "天台县",
            "cityId": 86,
            "DisSort": null
        }, {"id": 861, "countryName": "仙居县", "cityId": 86, "DisSort": null}, {
            "id": 862,
            "countryName": "温岭市",
            "cityId": 86,
            "DisSort": null
        }, {"id": 863, "countryName": "临海市", "cityId": 86, "DisSort": null}, {
            "id": 864,
            "countryName": "瑶海区",
            "cityId": 87,
            "DisSort": null
        }, {"id": 865, "countryName": "庐阳区", "cityId": 87, "DisSort": null}, {
            "id": 866,
            "countryName": "蜀山区",
            "cityId": 87,
            "DisSort": null
        }, {"id": 867, "countryName": "包河区", "cityId": 87, "DisSort": null}, {
            "id": 868,
            "countryName": "长丰县",
            "cityId": 87,
            "DisSort": null
        }, {"id": 869, "countryName": "肥东县", "cityId": 87, "DisSort": null}, {
            "id": 870,
            "countryName": "肥西县",
            "cityId": 87,
            "DisSort": null
        }, {"id": 871, "countryName": "镜湖区", "cityId": 88, "DisSort": null}, {
            "id": 872,
            "countryName": "弋江区",
            "cityId": 88,
            "DisSort": null
        }, {"id": 873, "countryName": "鸠江区", "cityId": 88, "DisSort": null}, {
            "id": 874,
            "countryName": "三山区",
            "cityId": 88,
            "DisSort": null
        }, {"id": 875, "countryName": "芜湖县", "cityId": 88, "DisSort": null}, {
            "id": 876,
            "countryName": "繁昌县",
            "cityId": 88,
            "DisSort": null
        }, {"id": 877, "countryName": "南陵县", "cityId": 88, "DisSort": null}, {
            "id": 878,
            "countryName": "龙子湖区",
            "cityId": 89,
            "DisSort": null
        }, {"id": 879, "countryName": "蚌山区", "cityId": 89, "DisSort": null}, {
            "id": 880,
            "countryName": "禹会区",
            "cityId": 89,
            "DisSort": null
        }, {"id": 881, "countryName": "淮上区", "cityId": 89, "DisSort": null}, {
            "id": 882,
            "countryName": "怀远县",
            "cityId": 89,
            "DisSort": null
        }, {"id": 883, "countryName": "五河县", "cityId": 89, "DisSort": null}, {
            "id": 884,
            "countryName": "固镇县",
            "cityId": 89,
            "DisSort": null
        }, {"id": 885, "countryName": "大通区", "cityId": 90, "DisSort": null}, {
            "id": 886,
            "countryName": "田家庵区",
            "cityId": 90,
            "DisSort": null
        }, {"id": 887, "countryName": "谢家集区", "cityId": 90, "DisSort": null}, {
            "id": 888,
            "countryName": "八公山区",
            "cityId": 90,
            "DisSort": null
        }, {"id": 889, "countryName": "潘集区", "cityId": 90, "DisSort": null}, {
            "id": 890,
            "countryName": "凤台县",
            "cityId": 90,
            "DisSort": null
        }, {"id": 891, "countryName": "金家庄区", "cityId": 91, "DisSort": null}, {
            "id": 892,
            "countryName": "花山区",
            "cityId": 91,
            "DisSort": null
        }, {"id": 893, "countryName": "雨山区", "cityId": 91, "DisSort": null}, {
            "id": 894,
            "countryName": "当涂县",
            "cityId": 91,
            "DisSort": null
        }, {"id": 895, "countryName": "杜集区", "cityId": 92, "DisSort": null}, {
            "id": 896,
            "countryName": "相山区",
            "cityId": 92,
            "DisSort": null
        }, {"id": 897, "countryName": "烈山区", "cityId": 92, "DisSort": null}, {
            "id": 898,
            "countryName": "濉溪县 ",
            "cityId": 92,
            "DisSort": null
        }, {"id": 899, "countryName": "铜官山区", "cityId": 93, "DisSort": null}, {
            "id": 900,
            "countryName": "狮子山区",
            "cityId": 93,
            "DisSort": null
        }, {"id": 901, "countryName": "铜陵县", "cityId": 93, "DisSort": null}, {
            "id": 902,
            "countryName": "迎江区",
            "cityId": 94,
            "DisSort": null
        }, {"id": 903, "countryName": "大观区", "cityId": 94, "DisSort": null}, {
            "id": 904,
            "countryName": "宜秀区",
            "cityId": 94,
            "DisSort": null
        }, {"id": 905, "countryName": "怀宁县", "cityId": 94, "DisSort": null}, {
            "id": 906,
            "countryName": "枞阳县",
            "cityId": 94,
            "DisSort": null
        }, {"id": 907, "countryName": "潜山县", "cityId": 94, "DisSort": null}, {
            "id": 908,
            "countryName": "太湖县",
            "cityId": 94,
            "DisSort": null
        }, {"id": 909, "countryName": "宿松县", "cityId": 94, "DisSort": null}, {
            "id": 910,
            "countryName": "望江县",
            "cityId": 94,
            "DisSort": null
        }, {"id": 911, "countryName": "岳西县", "cityId": 94, "DisSort": null}, {
            "id": 912,
            "countryName": "桐城市",
            "cityId": 94,
            "DisSort": null
        }, {"id": 913, "countryName": "屯溪区", "cityId": 95, "DisSort": null}, {
            "id": 914,
            "countryName": "黄山区",
            "cityId": 95,
            "DisSort": null
        }, {"id": 915, "countryName": "徽州区", "cityId": 95, "DisSort": null}, {
            "id": 916,
            "countryName": "歙县",
            "cityId": 95,
            "DisSort": null
        }, {"id": 917, "countryName": "休宁县", "cityId": 95, "DisSort": null}, {
            "id": 918,
            "countryName": "黟县",
            "cityId": 95,
            "DisSort": null
        }, {"id": 919, "countryName": "祁门县", "cityId": 95, "DisSort": null}, {
            "id": 920,
            "countryName": "琅琊区",
            "cityId": 96,
            "DisSort": null
        }, {"id": 921, "countryName": "南谯区", "cityId": 96, "DisSort": null}, {
            "id": 922,
            "countryName": "来安县",
            "cityId": 96,
            "DisSort": null
        }, {"id": 923, "countryName": "全椒县", "cityId": 96, "DisSort": null}, {
            "id": 924,
            "countryName": "定远县",
            "cityId": 96,
            "DisSort": null
        }, {"id": 925, "countryName": "凤阳县", "cityId": 96, "DisSort": null}, {
            "id": 926,
            "countryName": "天长市",
            "cityId": 96,
            "DisSort": null
        }, {"id": 927, "countryName": "明光市", "cityId": 96, "DisSort": null}, {
            "id": 928,
            "countryName": "颍州区",
            "cityId": 97,
            "DisSort": null
        }, {"id": 929, "countryName": "颍东区", "cityId": 97, "DisSort": null}, {
            "id": 930,
            "countryName": "颍泉区",
            "cityId": 97,
            "DisSort": null
        }, {"id": 931, "countryName": "临泉县", "cityId": 97, "DisSort": null}, {
            "id": 932,
            "countryName": "太和县",
            "cityId": 97,
            "DisSort": null
        }, {"id": 933, "countryName": "阜南县", "cityId": 97, "DisSort": null}, {
            "id": 934,
            "countryName": "颍上县",
            "cityId": 97,
            "DisSort": null
        }, {"id": 935, "countryName": "界首市", "cityId": 97, "DisSort": null}, {
            "id": 936,
            "countryName": "埇桥区",
            "cityId": 98,
            "DisSort": null
        }, {"id": 937, "countryName": "砀山县", "cityId": 98, "DisSort": null}, {
            "id": 938,
            "countryName": "萧县",
            "cityId": 98,
            "DisSort": null
        }, {"id": 939, "countryName": "灵璧县", "cityId": 98, "DisSort": null}, {
            "id": 940,
            "countryName": "泗县 ",
            "cityId": 98,
            "DisSort": null
        }, {"id": 941, "countryName": "居巢区", "cityId": 99, "DisSort": null}, {
            "id": 942,
            "countryName": "庐江县",
            "cityId": 99,
            "DisSort": null
        }, {"id": 943, "countryName": "无为县", "cityId": 99, "DisSort": null}, {
            "id": 944,
            "countryName": "含山县",
            "cityId": 99,
            "DisSort": null
        }, {"id": 945, "countryName": "和县 ", "cityId": 99, "DisSort": null}, {
            "id": 946,
            "countryName": "金安区",
            "cityId": 100,
            "DisSort": null
        }, {"id": 947, "countryName": "裕安区", "cityId": 100, "DisSort": null}, {
            "id": 948,
            "countryName": "寿县",
            "cityId": 100,
            "DisSort": null
        }, {"id": 949, "countryName": "霍邱县", "cityId": 100, "DisSort": null}, {
            "id": 950,
            "countryName": "舒城县",
            "cityId": 100,
            "DisSort": null
        }, {"id": 951, "countryName": "金寨县", "cityId": 100, "DisSort": null}, {
            "id": 952,
            "countryName": "霍山县",
            "cityId": 100,
            "DisSort": null
        }, {"id": 953, "countryName": "谯城区", "cityId": 101, "DisSort": null}, {
            "id": 954,
            "countryName": "涡阳县",
            "cityId": 101,
            "DisSort": null
        }, {"id": 955, "countryName": "蒙城县", "cityId": 101, "DisSort": null}, {
            "id": 956,
            "countryName": "利辛县",
            "cityId": 101,
            "DisSort": null
        }, {"id": 957, "countryName": "贵池区", "cityId": 102, "DisSort": null}, {
            "id": 958,
            "countryName": "东至县",
            "cityId": 102,
            "DisSort": null
        }, {"id": 959, "countryName": "石台县", "cityId": 102, "DisSort": null}, {
            "id": 960,
            "countryName": "青阳县",
            "cityId": 102,
            "DisSort": null
        }, {"id": 961, "countryName": "宣州区", "cityId": 103, "DisSort": null}, {
            "id": 962,
            "countryName": "郎溪县",
            "cityId": 103,
            "DisSort": null
        }, {"id": 963, "countryName": "广德县", "cityId": 103, "DisSort": null}, {
            "id": 964,
            "countryName": "泾县",
            "cityId": 103,
            "DisSort": null
        }, {"id": 965, "countryName": "绩溪县", "cityId": 103, "DisSort": null}, {
            "id": 966,
            "countryName": "旌德县",
            "cityId": 103,
            "DisSort": null
        }, {"id": 967, "countryName": "宁国市", "cityId": 103, "DisSort": null}, {
            "id": 968,
            "countryName": "鼓楼区",
            "cityId": 104,
            "DisSort": null
        }, {"id": 969, "countryName": "台江区", "cityId": 104, "DisSort": null}, {
            "id": 970,
            "countryName": "仓山区",
            "cityId": 104,
            "DisSort": null
        }, {"id": 971, "countryName": "马尾区", "cityId": 104, "DisSort": null}, {
            "id": 972,
            "countryName": "晋安区",
            "cityId": 104,
            "DisSort": null
        }, {"id": 973, "countryName": "闽侯县", "cityId": 104, "DisSort": null}, {
            "id": 974,
            "countryName": "连江县",
            "cityId": 104,
            "DisSort": null
        }, {"id": 975, "countryName": "罗源县", "cityId": 104, "DisSort": null}, {
            "id": 976,
            "countryName": "闽清县",
            "cityId": 104,
            "DisSort": null
        }, {"id": 977, "countryName": "永泰县", "cityId": 104, "DisSort": null}, {
            "id": 978,
            "countryName": "平潭县",
            "cityId": 104,
            "DisSort": null
        }, {"id": 979, "countryName": "福清市", "cityId": 104, "DisSort": null}, {
            "id": 980,
            "countryName": "长乐市",
            "cityId": 104,
            "DisSort": null
        }, {"id": 981, "countryName": "思明区", "cityId": 105, "DisSort": null}, {
            "id": 982,
            "countryName": "海沧区",
            "cityId": 105,
            "DisSort": null
        }, {"id": 983, "countryName": "湖里区", "cityId": 105, "DisSort": null}, {
            "id": 984,
            "countryName": "集美区",
            "cityId": 105,
            "DisSort": null
        }, {"id": 985, "countryName": "同安区", "cityId": 105, "DisSort": null}, {
            "id": 986,
            "countryName": "翔安区",
            "cityId": 105,
            "DisSort": null
        }, {"id": 987, "countryName": "蕉城区", "cityId": 106, "DisSort": null}, {
            "id": 988,
            "countryName": "霞浦县",
            "cityId": 106,
            "DisSort": null
        }, {"id": 989, "countryName": "古田县", "cityId": 106, "DisSort": null}, {
            "id": 990,
            "countryName": "屏南县",
            "cityId": 106,
            "DisSort": null
        }, {"id": 991, "countryName": "寿宁县", "cityId": 106, "DisSort": null}, {
            "id": 992,
            "countryName": "周宁县",
            "cityId": 106,
            "DisSort": null
        }, {"id": 993, "countryName": "柘荣县", "cityId": 106, "DisSort": null}, {
            "id": 994,
            "countryName": "福安市",
            "cityId": 106,
            "DisSort": null
        }, {"id": 995, "countryName": "福鼎市", "cityId": 106, "DisSort": null}, {
            "id": 996,
            "countryName": "城厢区",
            "cityId": 107,
            "DisSort": null
        }, {"id": 997, "countryName": "涵江区", "cityId": 107, "DisSort": null}, {
            "id": 998,
            "countryName": "荔城区",
            "cityId": 107,
            "DisSort": null
        }, {"id": 999, "countryName": "秀屿区", "cityId": 107, "DisSort": null}, {
            "id": 1000,
            "countryName": "仙游县",
            "cityId": 107,
            "DisSort": null
        }, {"id": 1001, "countryName": "鲤城区", "cityId": 108, "DisSort": null}, {
            "id": 1002,
            "countryName": "丰泽区",
            "cityId": 108,
            "DisSort": null
        }, {"id": 1003, "countryName": "洛江区", "cityId": 108, "DisSort": null}, {
            "id": 1004,
            "countryName": "泉港区",
            "cityId": 108,
            "DisSort": null
        }, {"id": 1005, "countryName": "惠安县", "cityId": 108, "DisSort": null}, {
            "id": 1006,
            "countryName": "安溪县",
            "cityId": 108,
            "DisSort": null
        }, {"id": 1007, "countryName": "永春县", "cityId": 108, "DisSort": null}, {
            "id": 1008,
            "countryName": "德化县",
            "cityId": 108,
            "DisSort": null
        }, {"id": 1009, "countryName": "石狮市", "cityId": 108, "DisSort": null}, {
            "id": 1010,
            "countryName": "晋江市",
            "cityId": 108,
            "DisSort": null
        }, {"id": 1011, "countryName": "南安市", "cityId": 108, "DisSort": null}, {
            "id": 1012,
            "countryName": "芗城区",
            "cityId": 109,
            "DisSort": null
        }, {"id": 1013, "countryName": "龙文区", "cityId": 109, "DisSort": null}, {
            "id": 1014,
            "countryName": "云霄县",
            "cityId": 109,
            "DisSort": null
        }, {"id": 1015, "countryName": "漳浦县", "cityId": 109, "DisSort": null}, {
            "id": 1016,
            "countryName": "诏安县",
            "cityId": 109,
            "DisSort": null
        }, {"id": 1017, "countryName": "长泰县", "cityId": 109, "DisSort": null}, {
            "id": 1018,
            "countryName": "东山县",
            "cityId": 109,
            "DisSort": null
        }, {"id": 1019, "countryName": "南靖县", "cityId": 109, "DisSort": null}, {
            "id": 1020,
            "countryName": "平和县",
            "cityId": 109,
            "DisSort": null
        }, {"id": 1021, "countryName": "华安县", "cityId": 109, "DisSort": null}, {
            "id": 1022,
            "countryName": "龙海市",
            "cityId": 109,
            "DisSort": null
        }, {"id": 1023, "countryName": "新罗区", "cityId": 110, "DisSort": null}, {
            "id": 1024,
            "countryName": "长汀县",
            "cityId": 110,
            "DisSort": null
        }, {"id": 1025, "countryName": "永定县", "cityId": 110, "DisSort": null}, {
            "id": 1026,
            "countryName": "上杭县",
            "cityId": 110,
            "DisSort": null
        }, {"id": 1027, "countryName": "武平县", "cityId": 110, "DisSort": null}, {
            "id": 1028,
            "countryName": "连城县",
            "cityId": 110,
            "DisSort": null
        }, {"id": 1029, "countryName": "漳平市", "cityId": 110, "DisSort": null}, {
            "id": 1030,
            "countryName": "梅列区",
            "cityId": 111,
            "DisSort": null
        }, {"id": 1031, "countryName": "三元区", "cityId": 111, "DisSort": null}, {
            "id": 1032,
            "countryName": "明溪县",
            "cityId": 111,
            "DisSort": null
        }, {"id": 1033, "countryName": "清流县", "cityId": 111, "DisSort": null}, {
            "id": 1034,
            "countryName": "宁化县",
            "cityId": 111,
            "DisSort": null
        }, {"id": 1035, "countryName": "大田县", "cityId": 111, "DisSort": null}, {
            "id": 1036,
            "countryName": "尤溪县",
            "cityId": 111,
            "DisSort": null
        }, {"id": 1037, "countryName": "沙县", "cityId": 111, "DisSort": null}, {
            "id": 1038,
            "countryName": "将乐县",
            "cityId": 111,
            "DisSort": null
        }, {"id": 1039, "countryName": "泰宁县", "cityId": 111, "DisSort": null}, {
            "id": 1040,
            "countryName": "建宁县",
            "cityId": 111,
            "DisSort": null
        }, {"id": 1041, "countryName": "永安市", "cityId": 111, "DisSort": null}, {
            "id": 1042,
            "countryName": "延平区",
            "cityId": 112,
            "DisSort": null
        }, {"id": 1043, "countryName": "顺昌县", "cityId": 112, "DisSort": null}, {
            "id": 1044,
            "countryName": "浦城县",
            "cityId": 112,
            "DisSort": null
        }, {"id": 1045, "countryName": "光泽县", "cityId": 112, "DisSort": null}, {
            "id": 1046,
            "countryName": "松溪县",
            "cityId": 112,
            "DisSort": null
        }, {"id": 1047, "countryName": "政和县", "cityId": 112, "DisSort": null}, {
            "id": 1048,
            "countryName": "邵武市",
            "cityId": 112,
            "DisSort": null
        }, {"id": 1049, "countryName": "武夷山市", "cityId": 112, "DisSort": null}, {
            "id": 1050,
            "countryName": "建瓯市",
            "cityId": 112,
            "DisSort": null
        }, {"id": 1051, "countryName": "建阳市", "cityId": 112, "DisSort": null}, {
            "id": 1052,
            "countryName": "月湖区",
            "cityId": 113,
            "DisSort": null
        }, {"id": 1053, "countryName": "余江县", "cityId": 113, "DisSort": null}, {
            "id": 1054,
            "countryName": "贵溪市",
            "cityId": 113,
            "DisSort": null
        }, {"id": 1055, "countryName": "渝水区", "cityId": 114, "DisSort": null}, {
            "id": 1056,
            "countryName": "分宜县",
            "cityId": 114,
            "DisSort": null
        }, {"id": 1057, "countryName": "东湖区", "cityId": 115, "DisSort": null}, {
            "id": 1058,
            "countryName": "西湖区",
            "cityId": 115,
            "DisSort": null
        }, {"id": 1059, "countryName": "青云谱区", "cityId": 115, "DisSort": null}, {
            "id": 1060,
            "countryName": "湾里区",
            "cityId": 115,
            "DisSort": null
        }, {"id": 1061, "countryName": "青山湖区", "cityId": 115, "DisSort": null}, {
            "id": 1062,
            "countryName": "南昌县",
            "cityId": 115,
            "DisSort": null
        }, {"id": 1063, "countryName": "新建县", "cityId": 115, "DisSort": null}, {
            "id": 1064,
            "countryName": "安义县",
            "cityId": 115,
            "DisSort": null
        }, {"id": 1065, "countryName": "进贤县", "cityId": 115, "DisSort": null}, {
            "id": 1066,
            "countryName": "庐山区",
            "cityId": 116,
            "DisSort": null
        }, {"id": 1067, "countryName": "浔阳区", "cityId": 116, "DisSort": null}, {
            "id": 1068,
            "countryName": "九江县",
            "cityId": 116,
            "DisSort": null
        }, {"id": 1069, "countryName": "武宁县", "cityId": 116, "DisSort": null}, {
            "id": 1070,
            "countryName": "修水县",
            "cityId": 116,
            "DisSort": null
        }, {"id": 1071, "countryName": "永修县", "cityId": 116, "DisSort": null}, {
            "id": 1072,
            "countryName": "德安县",
            "cityId": 116,
            "DisSort": null
        }, {"id": 1073, "countryName": "星子县", "cityId": 116, "DisSort": null}, {
            "id": 1074,
            "countryName": "都昌县",
            "cityId": 116,
            "DisSort": null
        }, {"id": 1075, "countryName": "湖口县", "cityId": 116, "DisSort": null}, {
            "id": 1076,
            "countryName": "彭泽县",
            "cityId": 116,
            "DisSort": null
        }, {"id": 1077, "countryName": "瑞昌市", "cityId": 116, "DisSort": null}, {
            "id": 1078,
            "countryName": "信州区",
            "cityId": 117,
            "DisSort": null
        }, {"id": 1079, "countryName": "上饶县", "cityId": 117, "DisSort": null}, {
            "id": 1080,
            "countryName": "广丰县",
            "cityId": 117,
            "DisSort": null
        }, {"id": 1081, "countryName": "玉山县", "cityId": 117, "DisSort": null}, {
            "id": 1082,
            "countryName": "铅山县",
            "cityId": 117,
            "DisSort": null
        }, {"id": 1083, "countryName": "横峰县", "cityId": 117, "DisSort": null}, {
            "id": 1084,
            "countryName": "弋阳县",
            "cityId": 117,
            "DisSort": null
        }, {"id": 1085, "countryName": "余干县", "cityId": 117, "DisSort": null}, {
            "id": 1086,
            "countryName": "鄱阳县",
            "cityId": 117,
            "DisSort": null
        }, {"id": 1087, "countryName": "万年县", "cityId": 117, "DisSort": null}, {
            "id": 1088,
            "countryName": "婺源县",
            "cityId": 117,
            "DisSort": null
        }, {"id": 1089, "countryName": "德兴市", "cityId": 117, "DisSort": null}, {
            "id": 1090,
            "countryName": "临川区",
            "cityId": 118,
            "DisSort": null
        }, {"id": 1091, "countryName": "南城县", "cityId": 118, "DisSort": null}, {
            "id": 1092,
            "countryName": "黎川县",
            "cityId": 118,
            "DisSort": null
        }, {"id": 1093, "countryName": "南丰县", "cityId": 118, "DisSort": null}, {
            "id": 1094,
            "countryName": "崇仁县",
            "cityId": 118,
            "DisSort": null
        }, {"id": 1095, "countryName": "乐安县", "cityId": 118, "DisSort": null}, {
            "id": 1096,
            "countryName": "宜黄县",
            "cityId": 118,
            "DisSort": null
        }, {"id": 1097, "countryName": "金溪县", "cityId": 118, "DisSort": null}, {
            "id": 1098,
            "countryName": "资溪县",
            "cityId": 118,
            "DisSort": null
        }, {"id": 1099, "countryName": "东乡县", "cityId": 118, "DisSort": null}, {
            "id": 1100,
            "countryName": "广昌县",
            "cityId": 118,
            "DisSort": null
        }, {"id": 1101, "countryName": "袁州区", "cityId": 119, "DisSort": null}, {
            "id": 1102,
            "countryName": "奉新县",
            "cityId": 119,
            "DisSort": null
        }, {"id": 1103, "countryName": "万载县", "cityId": 119, "DisSort": null}, {
            "id": 1104,
            "countryName": "上高县",
            "cityId": 119,
            "DisSort": null
        }, {"id": 1105, "countryName": "宜丰县", "cityId": 119, "DisSort": null}, {
            "id": 1106,
            "countryName": "靖安县",
            "cityId": 119,
            "DisSort": null
        }, {"id": 1107, "countryName": "铜鼓县", "cityId": 119, "DisSort": null}, {
            "id": 1108,
            "countryName": "丰城市",
            "cityId": 119,
            "DisSort": null
        }, {"id": 1109, "countryName": "樟树市", "cityId": 119, "DisSort": null}, {
            "id": 1110,
            "countryName": "高安市",
            "cityId": 119,
            "DisSort": null
        }, {"id": 1111, "countryName": "吉州区", "cityId": 120, "DisSort": null}, {
            "id": 1112,
            "countryName": "青原区",
            "cityId": 120,
            "DisSort": null
        }, {"id": 1113, "countryName": "吉安县", "cityId": 120, "DisSort": null}, {
            "id": 1114,
            "countryName": "吉水县",
            "cityId": 120,
            "DisSort": null
        }, {"id": 1115, "countryName": "峡江县", "cityId": 120, "DisSort": null}, {
            "id": 1116,
            "countryName": "新干县",
            "cityId": 120,
            "DisSort": null
        }, {"id": 1117, "countryName": "永丰县", "cityId": 120, "DisSort": null}, {
            "id": 1118,
            "countryName": "泰和县",
            "cityId": 120,
            "DisSort": null
        }, {"id": 1119, "countryName": "遂川县", "cityId": 120, "DisSort": null}, {
            "id": 1120,
            "countryName": "万安县",
            "cityId": 120,
            "DisSort": null
        }, {"id": 1121, "countryName": "安福县", "cityId": 120, "DisSort": null}, {
            "id": 1122,
            "countryName": "永新县",
            "cityId": 120,
            "DisSort": null
        }, {"id": 1123, "countryName": "井冈山市", "cityId": 120, "DisSort": null}, {
            "id": 1124,
            "countryName": "章贡区",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1125, "countryName": "赣县", "cityId": 121, "DisSort": null}, {
            "id": 1126,
            "countryName": "信丰县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1127, "countryName": "大余县", "cityId": 121, "DisSort": null}, {
            "id": 1128,
            "countryName": "上犹县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1129, "countryName": "崇义县", "cityId": 121, "DisSort": null}, {
            "id": 1130,
            "countryName": "安远县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1131, "countryName": "龙南县", "cityId": 121, "DisSort": null}, {
            "id": 1132,
            "countryName": "定南县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1133, "countryName": "全南县", "cityId": 121, "DisSort": null}, {
            "id": 1134,
            "countryName": "宁都县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1135, "countryName": "于都县", "cityId": 121, "DisSort": null}, {
            "id": 1136,
            "countryName": "兴国县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1137, "countryName": "会昌县", "cityId": 121, "DisSort": null}, {
            "id": 1138,
            "countryName": "寻乌县",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1139, "countryName": "石城县", "cityId": 121, "DisSort": null}, {
            "id": 1140,
            "countryName": "瑞金市",
            "cityId": 121,
            "DisSort": null
        }, {"id": 1141, "countryName": "南康市", "cityId": 121, "DisSort": null}, {
            "id": 1142,
            "countryName": "昌江区",
            "cityId": 122,
            "DisSort": null
        }, {"id": 1143, "countryName": "珠山区", "cityId": 122, "DisSort": null}, {
            "id": 1144,
            "countryName": "浮梁县",
            "cityId": 122,
            "DisSort": null
        }, {"id": 1145, "countryName": "乐平市", "cityId": 122, "DisSort": null}, {
            "id": 1146,
            "countryName": "安源区",
            "cityId": 123,
            "DisSort": null
        }, {"id": 1147, "countryName": "湘东区", "cityId": 123, "DisSort": null}, {
            "id": 1148,
            "countryName": "莲花县",
            "cityId": 123,
            "DisSort": null
        }, {"id": 1149, "countryName": "上栗县", "cityId": 123, "DisSort": null}, {
            "id": 1150,
            "countryName": "芦溪县",
            "cityId": 123,
            "DisSort": null
        }, {"id": 1151, "countryName": "牡丹区", "cityId": 124, "DisSort": null}, {
            "id": 1152,
            "countryName": "曹县",
            "cityId": 124,
            "DisSort": null
        }, {"id": 1153, "countryName": "单县", "cityId": 124, "DisSort": null}, {
            "id": 1154,
            "countryName": "成武县",
            "cityId": 124,
            "DisSort": null
        }, {"id": 1155, "countryName": "巨野县", "cityId": 124, "DisSort": null}, {
            "id": 1156,
            "countryName": "郓城县",
            "cityId": 124,
            "DisSort": null
        }, {"id": 1157, "countryName": "鄄城县", "cityId": 124, "DisSort": null}, {
            "id": 1158,
            "countryName": "定陶县",
            "cityId": 124,
            "DisSort": null
        }, {"id": 1159, "countryName": "东明县", "cityId": 124, "DisSort": null}, {
            "id": 1160,
            "countryName": "历下区",
            "cityId": 125,
            "DisSort": null
        }, {"id": 1161, "countryName": "市中区", "cityId": 125, "DisSort": null}, {
            "id": 1162,
            "countryName": "槐荫区",
            "cityId": 125,
            "DisSort": null
        }, {"id": 1163, "countryName": "天桥区", "cityId": 125, "DisSort": null}, {
            "id": 1164,
            "countryName": "历城区",
            "cityId": 125,
            "DisSort": null
        }, {"id": 1165, "countryName": "长清区", "cityId": 125, "DisSort": null}, {
            "id": 1166,
            "countryName": "平阴县",
            "cityId": 125,
            "DisSort": null
        }, {"id": 1167, "countryName": "济阳县", "cityId": 125, "DisSort": null}, {
            "id": 1168,
            "countryName": "商河县",
            "cityId": 125,
            "DisSort": null
        }, {"id": 1169, "countryName": "章丘市", "cityId": 125, "DisSort": null}, {
            "id": 1170,
            "countryName": "市南区",
            "cityId": 126,
            "DisSort": null
        }, {"id": 1171, "countryName": "市北区", "cityId": 126, "DisSort": null}, {
            "id": 1172,
            "countryName": "四方区",
            "cityId": 126,
            "DisSort": null
        }, {"id": 1173, "countryName": "黄岛区", "cityId": 126, "DisSort": null}, {
            "id": 1174,
            "countryName": "崂山区",
            "cityId": 126,
            "DisSort": null
        }, {"id": 1175, "countryName": "李沧区", "cityId": 126, "DisSort": null}, {
            "id": 1176,
            "countryName": "城阳区",
            "cityId": 126,
            "DisSort": null
        }, {"id": 1177, "countryName": "胶州市", "cityId": 126, "DisSort": null}, {
            "id": 1178,
            "countryName": "即墨市",
            "cityId": 126,
            "DisSort": null
        }, {"id": 1179, "countryName": "平度市", "cityId": 126, "DisSort": null}, {
            "id": 1180,
            "countryName": "胶南市",
            "cityId": 126,
            "DisSort": null
        }, {"id": 1181, "countryName": "莱西市", "cityId": 126, "DisSort": null}, {
            "id": 1182,
            "countryName": "淄川区",
            "cityId": 127,
            "DisSort": null
        }, {"id": 1183, "countryName": "张店区", "cityId": 127, "DisSort": null}, {
            "id": 1184,
            "countryName": "博山区",
            "cityId": 127,
            "DisSort": null
        }, {"id": 1185, "countryName": "临淄区", "cityId": 127, "DisSort": null}, {
            "id": 1186,
            "countryName": "周村区",
            "cityId": 127,
            "DisSort": null
        }, {"id": 1187, "countryName": "桓台县", "cityId": 127, "DisSort": null}, {
            "id": 1188,
            "countryName": "高青县",
            "cityId": 127,
            "DisSort": null
        }, {"id": 1189, "countryName": "沂源县", "cityId": 127, "DisSort": null}, {
            "id": 1190,
            "countryName": "德城区",
            "cityId": 128,
            "DisSort": null
        }, {"id": 1191, "countryName": "陵县", "cityId": 128, "DisSort": null}, {
            "id": 1192,
            "countryName": "宁津县",
            "cityId": 128,
            "DisSort": null
        }, {"id": 1193, "countryName": "庆云县", "cityId": 128, "DisSort": null}, {
            "id": 1194,
            "countryName": "临邑县",
            "cityId": 128,
            "DisSort": null
        }, {"id": 1195, "countryName": "齐河县", "cityId": 128, "DisSort": null}, {
            "id": 1196,
            "countryName": "平原县",
            "cityId": 128,
            "DisSort": null
        }, {"id": 1197, "countryName": "夏津县", "cityId": 128, "DisSort": null}, {
            "id": 1198,
            "countryName": "武城县",
            "cityId": 128,
            "DisSort": null
        }, {"id": 1199, "countryName": "乐陵市", "cityId": 128, "DisSort": null}, {
            "id": 1200,
            "countryName": "禹城市",
            "cityId": 128,
            "DisSort": null
        }, {"id": 1201, "countryName": "芝罘区", "cityId": 129, "DisSort": null}, {
            "id": 1202,
            "countryName": "福山区",
            "cityId": 129,
            "DisSort": null
        }, {"id": 1203, "countryName": "牟平区", "cityId": 129, "DisSort": null}, {
            "id": 1204,
            "countryName": "莱山区",
            "cityId": 129,
            "DisSort": null
        }, {"id": 1205, "countryName": "长岛县", "cityId": 129, "DisSort": null}, {
            "id": 1206,
            "countryName": "龙口市",
            "cityId": 129,
            "DisSort": null
        }, {"id": 1207, "countryName": "莱阳市", "cityId": 129, "DisSort": null}, {
            "id": 1208,
            "countryName": "莱州市",
            "cityId": 129,
            "DisSort": null
        }, {"id": 1209, "countryName": "蓬莱市", "cityId": 129, "DisSort": null}, {
            "id": 1210,
            "countryName": "招远市",
            "cityId": 129,
            "DisSort": null
        }, {"id": 1211, "countryName": "栖霞市", "cityId": 129, "DisSort": null}, {
            "id": 1212,
            "countryName": "海阳市",
            "cityId": 129,
            "DisSort": null
        }, {"id": 1213, "countryName": "潍城区", "cityId": 130, "DisSort": null}, {
            "id": 1214,
            "countryName": "寒亭区",
            "cityId": 130,
            "DisSort": null
        }, {"id": 1215, "countryName": "坊子区", "cityId": 130, "DisSort": null}, {
            "id": 1216,
            "countryName": "奎文区",
            "cityId": 130,
            "DisSort": null
        }, {"id": 1217, "countryName": "临朐县", "cityId": 130, "DisSort": null}, {
            "id": 1218,
            "countryName": "昌乐县",
            "cityId": 130,
            "DisSort": null
        }, {"id": 1219, "countryName": "青州市", "cityId": 130, "DisSort": null}, {
            "id": 1220,
            "countryName": "诸城市",
            "cityId": 130,
            "DisSort": null
        }, {"id": 1221, "countryName": "寿光市", "cityId": 130, "DisSort": null}, {
            "id": 1222,
            "countryName": "安丘市",
            "cityId": 130,
            "DisSort": null
        }, {"id": 1223, "countryName": "高密市", "cityId": 130, "DisSort": null}, {
            "id": 1224,
            "countryName": "昌邑市",
            "cityId": 130,
            "DisSort": null
        }, {"id": 1225, "countryName": "市中区", "cityId": 131, "DisSort": null}, {
            "id": 1226,
            "countryName": "任城区",
            "cityId": 131,
            "DisSort": null
        }, {"id": 1227, "countryName": "微山县", "cityId": 131, "DisSort": null}, {
            "id": 1228,
            "countryName": "鱼台县",
            "cityId": 131,
            "DisSort": null
        }, {"id": 1229, "countryName": "金乡县", "cityId": 131, "DisSort": null}, {
            "id": 1230,
            "countryName": "嘉祥县",
            "cityId": 131,
            "DisSort": null
        }, {"id": 1231, "countryName": "汶上县", "cityId": 131, "DisSort": null}, {
            "id": 1232,
            "countryName": "泗水县",
            "cityId": 131,
            "DisSort": null
        }, {"id": 1233, "countryName": "梁山县", "cityId": 131, "DisSort": null}, {
            "id": 1234,
            "countryName": "曲阜市",
            "cityId": 131,
            "DisSort": null
        }, {"id": 1235, "countryName": "兖州市", "cityId": 131, "DisSort": null}, {
            "id": 1236,
            "countryName": "邹城市",
            "cityId": 131,
            "DisSort": null
        }, {"id": 1237, "countryName": "泰山区", "cityId": 132, "DisSort": null}, {
            "id": 1238,
            "countryName": "岱岳区",
            "cityId": 132,
            "DisSort": null
        }, {"id": 1239, "countryName": "宁阳县", "cityId": 132, "DisSort": null}, {
            "id": 1240,
            "countryName": "东平县",
            "cityId": 132,
            "DisSort": null
        }, {"id": 1241, "countryName": "新泰市", "cityId": 132, "DisSort": null}, {
            "id": 1242,
            "countryName": "肥城市",
            "cityId": 132,
            "DisSort": null
        }, {"id": 1243, "countryName": "兰山区", "cityId": 133, "DisSort": null}, {
            "id": 1244,
            "countryName": "罗庄区",
            "cityId": 133,
            "DisSort": null
        }, {"id": 1245, "countryName": "河东区", "cityId": 133, "DisSort": null}, {
            "id": 1246,
            "countryName": "沂南县",
            "cityId": 133,
            "DisSort": null
        }, {"id": 1247, "countryName": "郯城县", "cityId": 133, "DisSort": null}, {
            "id": 1248,
            "countryName": "沂水县",
            "cityId": 133,
            "DisSort": null
        }, {"id": 1249, "countryName": "苍山县", "cityId": 133, "DisSort": null}, {
            "id": 1250,
            "countryName": "费县",
            "cityId": 133,
            "DisSort": null
        }, {"id": 1251, "countryName": "平邑县", "cityId": 133, "DisSort": null}, {
            "id": 1252,
            "countryName": "莒南县",
            "cityId": 133,
            "DisSort": null
        }, {"id": 1253, "countryName": "蒙阴县", "cityId": 133, "DisSort": null}, {
            "id": 1254,
            "countryName": "临沭县",
            "cityId": 133,
            "DisSort": null
        }, {"id": 1255, "countryName": "滨城区", "cityId": 134, "DisSort": null}, {
            "id": 1256,
            "countryName": "惠民县",
            "cityId": 134,
            "DisSort": null
        }, {"id": 1257, "countryName": "阳信县", "cityId": 134, "DisSort": null}, {
            "id": 1258,
            "countryName": "无棣县",
            "cityId": 134,
            "DisSort": null
        }, {"id": 1259, "countryName": "沾化县", "cityId": 134, "DisSort": null}, {
            "id": 1260,
            "countryName": "博兴县",
            "cityId": 134,
            "DisSort": null
        }, {"id": 1261, "countryName": "邹平县", "cityId": 134, "DisSort": null}, {
            "id": 1262,
            "countryName": "东营区",
            "cityId": 135,
            "DisSort": null
        }, {"id": 1263, "countryName": "河口区", "cityId": 135, "DisSort": null}, {
            "id": 1264,
            "countryName": "垦利县",
            "cityId": 135,
            "DisSort": null
        }, {"id": 1265, "countryName": "利津县", "cityId": 135, "DisSort": null}, {
            "id": 1266,
            "countryName": "广饶县",
            "cityId": 135,
            "DisSort": null
        }, {"id": 1267, "countryName": "环翠区", "cityId": 136, "DisSort": null}, {
            "id": 1268,
            "countryName": "文登市",
            "cityId": 136,
            "DisSort": null
        }, {"id": 1269, "countryName": "荣成市", "cityId": 136, "DisSort": null}, {
            "id": 1270,
            "countryName": "乳山市",
            "cityId": 136,
            "DisSort": null
        }, {"id": 1271, "countryName": "市中区", "cityId": 137, "DisSort": null}, {
            "id": 1272,
            "countryName": "薛城区",
            "cityId": 137,
            "DisSort": null
        }, {"id": 1273, "countryName": "峄城区", "cityId": 137, "DisSort": null}, {
            "id": 1274,
            "countryName": "台儿庄区",
            "cityId": 137,
            "DisSort": null
        }, {"id": 1275, "countryName": "山亭区", "cityId": 137, "DisSort": null}, {
            "id": 1276,
            "countryName": "滕州市",
            "cityId": 137,
            "DisSort": null
        }, {"id": 1277, "countryName": "东港区", "cityId": 138, "DisSort": null}, {
            "id": 1278,
            "countryName": "岚山区",
            "cityId": 138,
            "DisSort": null
        }, {"id": 1279, "countryName": "五莲县", "cityId": 138, "DisSort": null}, {
            "id": 1280,
            "countryName": "莒县",
            "cityId": 138,
            "DisSort": null
        }, {"id": 1281, "countryName": "莱城区", "cityId": 139, "DisSort": null}, {
            "id": 1282,
            "countryName": "钢城区",
            "cityId": 139,
            "DisSort": null
        }, {"id": 1283, "countryName": "东昌府区", "cityId": 140, "DisSort": null}, {
            "id": 1284,
            "countryName": "阳谷县",
            "cityId": 140,
            "DisSort": null
        }, {"id": 1285, "countryName": "莘县", "cityId": 140, "DisSort": null}, {
            "id": 1286,
            "countryName": "茌平县",
            "cityId": 140,
            "DisSort": null
        }, {"id": 1287, "countryName": "东阿县", "cityId": 140, "DisSort": null}, {
            "id": 1288,
            "countryName": "冠县",
            "cityId": 140,
            "DisSort": null
        }, {"id": 1289, "countryName": "高唐县", "cityId": 140, "DisSort": null}, {
            "id": 1290,
            "countryName": "临清市",
            "cityId": 140,
            "DisSort": null
        }, {"id": 1291, "countryName": "梁园区", "cityId": 141, "DisSort": null}, {
            "id": 1292,
            "countryName": "睢阳区",
            "cityId": 141,
            "DisSort": null
        }, {"id": 1293, "countryName": "民权县", "cityId": 141, "DisSort": null}, {
            "id": 1294,
            "countryName": "睢县",
            "cityId": 141,
            "DisSort": null
        }, {"id": 1295, "countryName": "宁陵县", "cityId": 141, "DisSort": null}, {
            "id": 1296,
            "countryName": "柘城县",
            "cityId": 141,
            "DisSort": null
        }, {"id": 1297, "countryName": "虞城县", "cityId": 141, "DisSort": null}, {
            "id": 1298,
            "countryName": "夏邑县",
            "cityId": 141,
            "DisSort": null
        }, {"id": 1299, "countryName": "永城市", "cityId": 141, "DisSort": null}, {
            "id": 1300,
            "countryName": "中原区",
            "cityId": 142,
            "DisSort": null
        }, {"id": 1301, "countryName": "二七区", "cityId": 142, "DisSort": null}, {
            "id": 1302,
            "countryName": "管城回族区",
            "cityId": 142,
            "DisSort": null
        }, {"id": 1303, "countryName": "金水区", "cityId": 142, "DisSort": null}, {
            "id": 1304,
            "countryName": "上街区",
            "cityId": 142,
            "DisSort": null
        }, {"id": 1305, "countryName": "惠济区", "cityId": 142, "DisSort": null}, {
            "id": 1306,
            "countryName": "中牟县",
            "cityId": 142,
            "DisSort": null
        }, {"id": 1307, "countryName": "巩义市", "cityId": 142, "DisSort": null}, {
            "id": 1308,
            "countryName": "荥阳市",
            "cityId": 142,
            "DisSort": null
        }, {"id": 1309, "countryName": "新密市", "cityId": 142, "DisSort": null}, {
            "id": 1310,
            "countryName": "新郑市",
            "cityId": 142,
            "DisSort": null
        }, {"id": 1311, "countryName": "登封市", "cityId": 142, "DisSort": null}, {
            "id": 1312,
            "countryName": "文峰区",
            "cityId": 143,
            "DisSort": null
        }, {"id": 1313, "countryName": "北关区", "cityId": 143, "DisSort": null}, {
            "id": 1314,
            "countryName": "殷都区",
            "cityId": 143,
            "DisSort": null
        }, {"id": 1315, "countryName": "龙安区", "cityId": 143, "DisSort": null}, {
            "id": 1316,
            "countryName": "安阳县",
            "cityId": 143,
            "DisSort": null
        }, {"id": 1317, "countryName": "汤阴县", "cityId": 143, "DisSort": null}, {
            "id": 1318,
            "countryName": "滑县",
            "cityId": 143,
            "DisSort": null
        }, {"id": 1319, "countryName": "内黄县", "cityId": 143, "DisSort": null}, {
            "id": 1320,
            "countryName": "林州市",
            "cityId": 143,
            "DisSort": null
        }, {"id": 1321, "countryName": "红旗区", "cityId": 144, "DisSort": null}, {
            "id": 1322,
            "countryName": "卫滨区",
            "cityId": 144,
            "DisSort": null
        }, {"id": 1323, "countryName": "凤泉区", "cityId": 144, "DisSort": null}, {
            "id": 1324,
            "countryName": "牧野区",
            "cityId": 144,
            "DisSort": null
        }, {"id": 1325, "countryName": "新乡县", "cityId": 144, "DisSort": null}, {
            "id": 1326,
            "countryName": "获嘉县",
            "cityId": 144,
            "DisSort": null
        }, {"id": 1327, "countryName": "原阳县", "cityId": 144, "DisSort": null}, {
            "id": 1328,
            "countryName": "延津县",
            "cityId": 144,
            "DisSort": null
        }, {"id": 1329, "countryName": "封丘县", "cityId": 144, "DisSort": null}, {
            "id": 1330,
            "countryName": "长垣县",
            "cityId": 144,
            "DisSort": null
        }, {"id": 1331, "countryName": "卫辉市", "cityId": 144, "DisSort": null}, {
            "id": 1332,
            "countryName": "辉县市",
            "cityId": 144,
            "DisSort": null
        }, {"id": 1333, "countryName": "魏都区", "cityId": 145, "DisSort": null}, {
            "id": 1334,
            "countryName": "许昌县",
            "cityId": 145,
            "DisSort": null
        }, {"id": 1335, "countryName": "鄢陵县", "cityId": 145, "DisSort": null}, {
            "id": 1336,
            "countryName": "襄城县",
            "cityId": 145,
            "DisSort": null
        }, {"id": 1337, "countryName": "禹州市", "cityId": 145, "DisSort": null}, {
            "id": 1338,
            "countryName": "长葛市",
            "cityId": 145,
            "DisSort": null
        }, {"id": 1339, "countryName": "新华区", "cityId": 146, "DisSort": null}, {
            "id": 1340,
            "countryName": "卫东区",
            "cityId": 146,
            "DisSort": null
        }, {"id": 1341, "countryName": "石龙区", "cityId": 146, "DisSort": null}, {
            "id": 1342,
            "countryName": "湛河区",
            "cityId": 146,
            "DisSort": null
        }, {"id": 1343, "countryName": "宝丰县", "cityId": 146, "DisSort": null}, {
            "id": 1344,
            "countryName": "叶县",
            "cityId": 146,
            "DisSort": null
        }, {"id": 1345, "countryName": "鲁山县", "cityId": 146, "DisSort": null}, {
            "id": 1346,
            "countryName": "郏县",
            "cityId": 146,
            "DisSort": null
        }, {"id": 1347, "countryName": "舞钢市", "cityId": 146, "DisSort": null}, {
            "id": 1348,
            "countryName": "汝州市",
            "cityId": 146,
            "DisSort": null
        }, {"id": 1349, "countryName": "浉河区", "cityId": 147, "DisSort": null}, {
            "id": 1350,
            "countryName": "平桥区",
            "cityId": 147,
            "DisSort": null
        }, {"id": 1351, "countryName": "罗山县", "cityId": 147, "DisSort": null}, {
            "id": 1352,
            "countryName": "光山县",
            "cityId": 147,
            "DisSort": null
        }, {"id": 1353, "countryName": "新县", "cityId": 147, "DisSort": null}, {
            "id": 1354,
            "countryName": "商城县",
            "cityId": 147,
            "DisSort": null
        }, {"id": 1355, "countryName": "固始县", "cityId": 147, "DisSort": null}, {
            "id": 1356,
            "countryName": "潢川县",
            "cityId": 147,
            "DisSort": null
        }, {"id": 1357, "countryName": "淮滨县", "cityId": 147, "DisSort": null}, {
            "id": 1358,
            "countryName": "息县",
            "cityId": 147,
            "DisSort": null
        }, {"id": 1359, "countryName": "宛城区", "cityId": 148, "DisSort": null}, {
            "id": 1360,
            "countryName": "卧龙区",
            "cityId": 148,
            "DisSort": null
        }, {"id": 1361, "countryName": "南召县", "cityId": 148, "DisSort": null}, {
            "id": 1362,
            "countryName": "方城县",
            "cityId": 148,
            "DisSort": null
        }, {"id": 1363, "countryName": "西峡县", "cityId": 148, "DisSort": null}, {
            "id": 1364,
            "countryName": "镇平县",
            "cityId": 148,
            "DisSort": null
        }, {"id": 1365, "countryName": "内乡县", "cityId": 148, "DisSort": null}, {
            "id": 1366,
            "countryName": "淅川县",
            "cityId": 148,
            "DisSort": null
        }, {"id": 1367, "countryName": "社旗县", "cityId": 148, "DisSort": null}, {
            "id": 1368,
            "countryName": "唐河县",
            "cityId": 148,
            "DisSort": null
        }, {"id": 1369, "countryName": "新野县", "cityId": 148, "DisSort": null}, {
            "id": 1370,
            "countryName": "桐柏县",
            "cityId": 148,
            "DisSort": null
        }, {"id": 1371, "countryName": "邓州市", "cityId": 148, "DisSort": null}, {
            "id": 1372,
            "countryName": "龙亭区",
            "cityId": 149,
            "DisSort": null
        }, {"id": 1373, "countryName": "顺河回族区", "cityId": 149, "DisSort": null}, {
            "id": 1374,
            "countryName": "鼓楼区",
            "cityId": 149,
            "DisSort": null
        }, {"id": 1375, "countryName": "禹王台区", "cityId": 149, "DisSort": null}, {
            "id": 1376,
            "countryName": "金明区",
            "cityId": 149,
            "DisSort": null
        }, {"id": 1377, "countryName": "杞县", "cityId": 149, "DisSort": null}, {
            "id": 1378,
            "countryName": "通许县",
            "cityId": 149,
            "DisSort": null
        }, {"id": 1379, "countryName": "尉氏县", "cityId": 149, "DisSort": null}, {
            "id": 1380,
            "countryName": "开封县",
            "cityId": 149,
            "DisSort": null
        }, {"id": 1381, "countryName": "兰考县", "cityId": 149, "DisSort": null}, {
            "id": 1382,
            "countryName": "老城区",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1383, "countryName": "西工区", "cityId": 150, "DisSort": null}, {
            "id": 1384,
            "countryName": "瀍河回族区",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1385, "countryName": "涧西区", "cityId": 150, "DisSort": null}, {
            "id": 1386,
            "countryName": "吉利区",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1387, "countryName": "洛龙区", "cityId": 150, "DisSort": null}, {
            "id": 1388,
            "countryName": "孟津县",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1389, "countryName": "新安县", "cityId": 150, "DisSort": null}, {
            "id": 1390,
            "countryName": "栾川县",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1391, "countryName": "嵩县", "cityId": 150, "DisSort": null}, {
            "id": 1392,
            "countryName": "汝阳县",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1393, "countryName": "宜阳县", "cityId": 150, "DisSort": null}, {
            "id": 1394,
            "countryName": "洛宁县",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1395, "countryName": "伊川县", "cityId": 150, "DisSort": null}, {
            "id": 1396,
            "countryName": "偃师市",
            "cityId": 150,
            "DisSort": null
        }, {"id": 1397, "countryName": "解放区", "cityId": 152, "DisSort": null}, {
            "id": 1398,
            "countryName": "中站区",
            "cityId": 152,
            "DisSort": null
        }, {"id": 1399, "countryName": "马村区", "cityId": 152, "DisSort": null}, {
            "id": 1400,
            "countryName": "山阳区",
            "cityId": 152,
            "DisSort": null
        }, {"id": 1401, "countryName": "修武县", "cityId": 152, "DisSort": null}, {
            "id": 1402,
            "countryName": "博爱县",
            "cityId": 152,
            "DisSort": null
        }, {"id": 1403, "countryName": "武陟县", "cityId": 152, "DisSort": null}, {
            "id": 1404,
            "countryName": "温县",
            "cityId": 152,
            "DisSort": null
        }, {"id": 1405, "countryName": "沁阳市", "cityId": 152, "DisSort": null}, {
            "id": 1406,
            "countryName": "孟州市",
            "cityId": 152,
            "DisSort": null
        }, {"id": 1407, "countryName": "鹤山区", "cityId": 153, "DisSort": null}, {
            "id": 1408,
            "countryName": "山城区",
            "cityId": 153,
            "DisSort": null
        }, {"id": 1409, "countryName": "淇滨区", "cityId": 153, "DisSort": null}, {
            "id": 1410,
            "countryName": "浚县",
            "cityId": 153,
            "DisSort": null
        }, {"id": 1411, "countryName": "淇县", "cityId": 153, "DisSort": null}, {
            "id": 1412,
            "countryName": "华龙区",
            "cityId": 154,
            "DisSort": null
        }, {"id": 1413, "countryName": "清丰县", "cityId": 154, "DisSort": null}, {
            "id": 1414,
            "countryName": "南乐县",
            "cityId": 154,
            "DisSort": null
        }, {"id": 1415, "countryName": "范县", "cityId": 154, "DisSort": null}, {
            "id": 1416,
            "countryName": "台前县",
            "cityId": 154,
            "DisSort": null
        }, {"id": 1417, "countryName": "濮阳县", "cityId": 154, "DisSort": null}, {
            "id": 1418,
            "countryName": "川汇区",
            "cityId": 155,
            "DisSort": null
        }, {"id": 1419, "countryName": "扶沟县", "cityId": 155, "DisSort": null}, {
            "id": 1420,
            "countryName": "西华县",
            "cityId": 155,
            "DisSort": null
        }, {"id": 1421, "countryName": "商水县", "cityId": 155, "DisSort": null}, {
            "id": 1422,
            "countryName": "沈丘县",
            "cityId": 155,
            "DisSort": null
        }, {"id": 1423, "countryName": "郸城县", "cityId": 155, "DisSort": null}, {
            "id": 1424,
            "countryName": "淮阳县",
            "cityId": 155,
            "DisSort": null
        }, {"id": 1425, "countryName": "太康县", "cityId": 155, "DisSort": null}, {
            "id": 1426,
            "countryName": "鹿邑县",
            "cityId": 155,
            "DisSort": null
        }, {"id": 1427, "countryName": "项城市", "cityId": 155, "DisSort": null}, {
            "id": 1428,
            "countryName": "源汇区",
            "cityId": 156,
            "DisSort": null
        }, {"id": 1429, "countryName": "郾城区", "cityId": 156, "DisSort": null}, {
            "id": 1430,
            "countryName": "召陵区",
            "cityId": 156,
            "DisSort": null
        }, {"id": 1431, "countryName": "舞阳县", "cityId": 156, "DisSort": null}, {
            "id": 1432,
            "countryName": "临颍县",
            "cityId": 156,
            "DisSort": null
        }, {"id": 1433, "countryName": "驿城区", "cityId": 157, "DisSort": null}, {
            "id": 1434,
            "countryName": "西平县",
            "cityId": 157,
            "DisSort": null
        }, {"id": 1435, "countryName": "上蔡县", "cityId": 157, "DisSort": null}, {
            "id": 1436,
            "countryName": "平舆县",
            "cityId": 157,
            "DisSort": null
        }, {"id": 1437, "countryName": "正阳县", "cityId": 157, "DisSort": null}, {
            "id": 1438,
            "countryName": "确山县",
            "cityId": 157,
            "DisSort": null
        }, {"id": 1439, "countryName": "泌阳县", "cityId": 157, "DisSort": null}, {
            "id": 1440,
            "countryName": "汝南县",
            "cityId": 157,
            "DisSort": null
        }, {"id": 1441, "countryName": "遂平县", "cityId": 157, "DisSort": null}, {
            "id": 1442,
            "countryName": "新蔡县",
            "cityId": 157,
            "DisSort": null
        }, {"id": 1443, "countryName": "湖滨区", "cityId": 158, "DisSort": null}, {
            "id": 1444,
            "countryName": "渑池县",
            "cityId": 158,
            "DisSort": null
        }, {"id": 1445, "countryName": "陕县", "cityId": 158, "DisSort": null}, {
            "id": 1446,
            "countryName": "卢氏县",
            "cityId": 158,
            "DisSort": null
        }, {"id": 1447, "countryName": "义马市", "cityId": 158, "DisSort": null}, {
            "id": 1448,
            "countryName": "灵宝市",
            "cityId": 158,
            "DisSort": null
        }, {"id": 1449, "countryName": "江岸区", "cityId": 159, "DisSort": null}, {
            "id": 1450,
            "countryName": "江汉区",
            "cityId": 159,
            "DisSort": null
        }, {"id": 1451, "countryName": "硚口区", "cityId": 159, "DisSort": null}, {
            "id": 1452,
            "countryName": "汉阳区",
            "cityId": 159,
            "DisSort": null
        }, {"id": 1453, "countryName": "武昌区", "cityId": 159, "DisSort": null}, {
            "id": 1454,
            "countryName": "青山区",
            "cityId": 159,
            "DisSort": null
        }, {"id": 1455, "countryName": "洪山区", "cityId": 159, "DisSort": null}, {
            "id": 1456,
            "countryName": "东西湖区",
            "cityId": 159,
            "DisSort": null
        }, {"id": 1457, "countryName": "汉南区", "cityId": 159, "DisSort": null}, {
            "id": 1458,
            "countryName": "蔡甸区",
            "cityId": 159,
            "DisSort": null
        }, {"id": 1459, "countryName": "江夏区", "cityId": 159, "DisSort": null}, {
            "id": 1460,
            "countryName": "黄陂区",
            "cityId": 159,
            "DisSort": null
        }, {"id": 1461, "countryName": "新洲区", "cityId": 159, "DisSort": null}, {
            "id": 1462,
            "countryName": "襄城区",
            "cityId": 160,
            "DisSort": null
        }, {"id": 1463, "countryName": "樊城区", "cityId": 160, "DisSort": null}, {
            "id": 1464,
            "countryName": "襄阳区",
            "cityId": 160,
            "DisSort": null
        }, {"id": 1465, "countryName": "南漳县", "cityId": 160, "DisSort": null}, {
            "id": 1466,
            "countryName": "谷城县",
            "cityId": 160,
            "DisSort": null
        }, {"id": 1467, "countryName": "保康县", "cityId": 160, "DisSort": null}, {
            "id": 1468,
            "countryName": "老河口市",
            "cityId": 160,
            "DisSort": null
        }, {"id": 1469, "countryName": "枣阳市", "cityId": 160, "DisSort": null}, {
            "id": 1470,
            "countryName": "宜城市",
            "cityId": 160,
            "DisSort": null
        }, {"id": 1471, "countryName": "梁子湖区", "cityId": 161, "DisSort": null}, {
            "id": 1472,
            "countryName": "华容区",
            "cityId": 161,
            "DisSort": null
        }, {"id": 1473, "countryName": "鄂城区", "cityId": 161, "DisSort": null}, {
            "id": 1474,
            "countryName": "孝南区",
            "cityId": 162,
            "DisSort": null
        }, {"id": 1475, "countryName": "孝昌县", "cityId": 162, "DisSort": null}, {
            "id": 1476,
            "countryName": "大悟县",
            "cityId": 162,
            "DisSort": null
        }, {"id": 1477, "countryName": "云梦县", "cityId": 162, "DisSort": null}, {
            "id": 1478,
            "countryName": "应城市",
            "cityId": 162,
            "DisSort": null
        }, {"id": 1479, "countryName": "安陆市", "cityId": 162, "DisSort": null}, {
            "id": 1480,
            "countryName": "汉川市",
            "cityId": 162,
            "DisSort": null
        }, {"id": 1481, "countryName": "黄州区", "cityId": 163, "DisSort": null}, {
            "id": 1482,
            "countryName": "团风县",
            "cityId": 163,
            "DisSort": null
        }, {"id": 1483, "countryName": "红安县", "cityId": 163, "DisSort": null}, {
            "id": 1484,
            "countryName": "罗田县",
            "cityId": 163,
            "DisSort": null
        }, {"id": 1485, "countryName": "英山县", "cityId": 163, "DisSort": null}, {
            "id": 1486,
            "countryName": "浠水县",
            "cityId": 163,
            "DisSort": null
        }, {"id": 1487, "countryName": "蕲春县", "cityId": 163, "DisSort": null}, {
            "id": 1488,
            "countryName": "黄梅县",
            "cityId": 163,
            "DisSort": null
        }, {"id": 1489, "countryName": "麻城市", "cityId": 163, "DisSort": null}, {
            "id": 1490,
            "countryName": "武穴市",
            "cityId": 163,
            "DisSort": null
        }, {"id": 1491, "countryName": "黄石港区", "cityId": 164, "DisSort": null}, {
            "id": 1492,
            "countryName": "西塞山区",
            "cityId": 164,
            "DisSort": null
        }, {"id": 1493, "countryName": "下陆区", "cityId": 164, "DisSort": null}, {
            "id": 1494,
            "countryName": "铁山区",
            "cityId": 164,
            "DisSort": null
        }, {"id": 1495, "countryName": "阳新县", "cityId": 164, "DisSort": null}, {
            "id": 1496,
            "countryName": "大冶市",
            "cityId": 164,
            "DisSort": null
        }, {"id": 1497, "countryName": "咸安区", "cityId": 165, "DisSort": null}, {
            "id": 1498,
            "countryName": "嘉鱼县",
            "cityId": 165,
            "DisSort": null
        }, {"id": 1499, "countryName": "通城县", "cityId": 165, "DisSort": null}, {
            "id": 1500,
            "countryName": "崇阳县",
            "cityId": 165,
            "DisSort": null
        }, {"id": 1501, "countryName": "通山县", "cityId": 165, "DisSort": null}, {
            "id": 1502,
            "countryName": "赤壁市",
            "cityId": 165,
            "DisSort": null
        }, {"id": 1503, "countryName": "沙市区", "cityId": 166, "DisSort": null}, {
            "id": 1504,
            "countryName": "荆州区",
            "cityId": 166,
            "DisSort": null
        }, {"id": 1505, "countryName": "公安县", "cityId": 166, "DisSort": null}, {
            "id": 1506,
            "countryName": "监利县",
            "cityId": 166,
            "DisSort": null
        }, {"id": 1507, "countryName": "江陵县", "cityId": 166, "DisSort": null}, {
            "id": 1508,
            "countryName": "石首市",
            "cityId": 166,
            "DisSort": null
        }, {"id": 1509, "countryName": "洪湖市", "cityId": 166, "DisSort": null}, {
            "id": 1510,
            "countryName": "松滋市",
            "cityId": 166,
            "DisSort": null
        }, {"id": 1511, "countryName": "西陵区", "cityId": 167, "DisSort": null}, {
            "id": 1512,
            "countryName": "伍家岗区",
            "cityId": 167,
            "DisSort": null
        }, {"id": 1513, "countryName": "点军区", "cityId": 167, "DisSort": null}, {
            "id": 1514,
            "countryName": "猇亭区",
            "cityId": 167,
            "DisSort": null
        }, {"id": 1515, "countryName": "夷陵区", "cityId": 167, "DisSort": null}, {
            "id": 1516,
            "countryName": "远安县",
            "cityId": 167,
            "DisSort": null
        }, {"id": 1517, "countryName": "兴山县", "cityId": 167, "DisSort": null}, {
            "id": 1518,
            "countryName": "秭归县",
            "cityId": 167,
            "DisSort": null
        }, {"id": 1519, "countryName": "长阳土家族自治县", "cityId": 167, "DisSort": null}, {
            "id": 1520,
            "countryName": "五峰土家族自治县",
            "cityId": 167,
            "DisSort": null
        }, {"id": 1521, "countryName": "宜都市", "cityId": 167, "DisSort": null}, {
            "id": 1522,
            "countryName": "当阳市",
            "cityId": 167,
            "DisSort": null
        }, {"id": 1523, "countryName": "枝江市", "cityId": 167, "DisSort": null}, {
            "id": 1524,
            "countryName": "恩施市",
            "cityId": 168,
            "DisSort": null
        }, {"id": 1525, "countryName": "利川市", "cityId": 168, "DisSort": null}, {
            "id": 1526,
            "countryName": "建始县",
            "cityId": 168,
            "DisSort": null
        }, {"id": 1527, "countryName": "巴东县", "cityId": 168, "DisSort": null}, {
            "id": 1528,
            "countryName": "宣恩县",
            "cityId": 168,
            "DisSort": null
        }, {"id": 1529, "countryName": "咸丰县", "cityId": 168, "DisSort": null}, {
            "id": 1530,
            "countryName": "来凤县",
            "cityId": 168,
            "DisSort": null
        }, {"id": 1531, "countryName": "鹤峰县", "cityId": 168, "DisSort": null}, {
            "id": 1532,
            "countryName": "茅箭区",
            "cityId": 170,
            "DisSort": null
        }, {"id": 1533, "countryName": "张湾区", "cityId": 170, "DisSort": null}, {
            "id": 1534,
            "countryName": "郧县",
            "cityId": 170,
            "DisSort": null
        }, {"id": 1535, "countryName": "郧西县", "cityId": 170, "DisSort": null}, {
            "id": 1536,
            "countryName": "竹山县",
            "cityId": 170,
            "DisSort": null
        }, {"id": 1537, "countryName": "竹溪县", "cityId": 170, "DisSort": null}, {
            "id": 1538,
            "countryName": "房县",
            "cityId": 170,
            "DisSort": null
        }, {"id": 1539, "countryName": "丹江口市", "cityId": 170, "DisSort": null}, {
            "id": 1540,
            "countryName": "曾都区",
            "cityId": 171,
            "DisSort": null
        }, {"id": 1541, "countryName": "广水市", "cityId": 171, "DisSort": null}, {
            "id": 1542,
            "countryName": "东宝区",
            "cityId": 172,
            "DisSort": null
        }, {"id": 1543, "countryName": "掇刀区", "cityId": 172, "DisSort": null}, {
            "id": 1544,
            "countryName": "京山县",
            "cityId": 172,
            "DisSort": null
        }, {"id": 1545, "countryName": "沙洋县", "cityId": 172, "DisSort": null}, {
            "id": 1546,
            "countryName": "钟祥市",
            "cityId": 172,
            "DisSort": null
        }, {"id": 1547, "countryName": "岳阳楼区", "cityId": 176, "DisSort": null}, {
            "id": 1548,
            "countryName": "云溪区",
            "cityId": 176,
            "DisSort": null
        }, {"id": 1549, "countryName": "君山区", "cityId": 176, "DisSort": null}, {
            "id": 1550,
            "countryName": "岳阳县",
            "cityId": 176,
            "DisSort": null
        }, {"id": 1551, "countryName": "华容县", "cityId": 176, "DisSort": null}, {
            "id": 1552,
            "countryName": "湘阴县",
            "cityId": 176,
            "DisSort": null
        }, {"id": 1553, "countryName": "平江县", "cityId": 176, "DisSort": null}, {
            "id": 1554,
            "countryName": "汨罗市",
            "cityId": 176,
            "DisSort": null
        }, {"id": 1555, "countryName": "临湘市", "cityId": 176, "DisSort": null}, {
            "id": 1556,
            "countryName": "芙蓉区",
            "cityId": 177,
            "DisSort": null
        }, {"id": 1557, "countryName": "天心区", "cityId": 177, "DisSort": null}, {
            "id": 1558,
            "countryName": "岳麓区",
            "cityId": 177,
            "DisSort": null
        }, {"id": 1559, "countryName": "开福区", "cityId": 177, "DisSort": null}, {
            "id": 1560,
            "countryName": "雨花区",
            "cityId": 177,
            "DisSort": null
        }, {"id": 1561, "countryName": "长沙县", "cityId": 177, "DisSort": null}, {
            "id": 1562,
            "countryName": "望城县",
            "cityId": 177,
            "DisSort": null
        }, {"id": 1563, "countryName": "宁乡县", "cityId": 177, "DisSort": null}, {
            "id": 1564,
            "countryName": "浏阳市",
            "cityId": 177,
            "DisSort": null
        }, {"id": 1565, "countryName": "雨湖区", "cityId": 178, "DisSort": null}, {
            "id": 1566,
            "countryName": "岳塘区",
            "cityId": 178,
            "DisSort": null
        }, {"id": 1567, "countryName": "湘潭县", "cityId": 178, "DisSort": null}, {
            "id": 1568,
            "countryName": "湘乡市",
            "cityId": 178,
            "DisSort": null
        }, {"id": 1569, "countryName": "韶山市", "cityId": 178, "DisSort": null}, {
            "id": 1570,
            "countryName": "荷塘区",
            "cityId": 179,
            "DisSort": null
        }, {"id": 1571, "countryName": "芦淞区", "cityId": 179, "DisSort": null}, {
            "id": 1572,
            "countryName": "石峰区",
            "cityId": 179,
            "DisSort": null
        }, {"id": 1573, "countryName": "天元区", "cityId": 179, "DisSort": null}, {
            "id": 1574,
            "countryName": "株洲县",
            "cityId": 179,
            "DisSort": null
        }, {"id": 1575, "countryName": "攸县", "cityId": 179, "DisSort": null}, {
            "id": 1576,
            "countryName": "茶陵县",
            "cityId": 179,
            "DisSort": null
        }, {"id": 1577, "countryName": "炎陵县", "cityId": 179, "DisSort": null}, {
            "id": 1578,
            "countryName": "醴陵市",
            "cityId": 179,
            "DisSort": null
        }, {"id": 1579, "countryName": "珠晖区", "cityId": 180, "DisSort": null}, {
            "id": 1580,
            "countryName": "雁峰区",
            "cityId": 180,
            "DisSort": null
        }, {"id": 1581, "countryName": "石鼓区", "cityId": 180, "DisSort": null}, {
            "id": 1582,
            "countryName": "蒸湘区",
            "cityId": 180,
            "DisSort": null
        }, {"id": 1583, "countryName": "南岳区", "cityId": 180, "DisSort": null}, {
            "id": 1584,
            "countryName": "衡阳县",
            "cityId": 180,
            "DisSort": null
        }, {"id": 1585, "countryName": "衡南县", "cityId": 180, "DisSort": null}, {
            "id": 1586,
            "countryName": "衡山县",
            "cityId": 180,
            "DisSort": null
        }, {"id": 1587, "countryName": "衡东县", "cityId": 180, "DisSort": null}, {
            "id": 1588,
            "countryName": "祁东县",
            "cityId": 180,
            "DisSort": null
        }, {"id": 1589, "countryName": "耒阳市", "cityId": 180, "DisSort": null}, {
            "id": 1590,
            "countryName": "常宁市",
            "cityId": 180,
            "DisSort": null
        }, {"id": 1591, "countryName": "北湖区", "cityId": 181, "DisSort": null}, {
            "id": 1592,
            "countryName": "苏仙区",
            "cityId": 181,
            "DisSort": null
        }, {"id": 1593, "countryName": "桂阳县", "cityId": 181, "DisSort": null}, {
            "id": 1594,
            "countryName": "宜章县",
            "cityId": 181,
            "DisSort": null
        }, {"id": 1595, "countryName": "永兴县", "cityId": 181, "DisSort": null}, {
            "id": 1596,
            "countryName": "嘉禾县",
            "cityId": 181,
            "DisSort": null
        }, {"id": 1597, "countryName": "临武县", "cityId": 181, "DisSort": null}, {
            "id": 1598,
            "countryName": "汝城县",
            "cityId": 181,
            "DisSort": null
        }, {"id": 1599, "countryName": "桂东县", "cityId": 181, "DisSort": null}, {
            "id": 1600,
            "countryName": "安仁县",
            "cityId": 181,
            "DisSort": null
        }, {"id": 1601, "countryName": "资兴市", "cityId": 181, "DisSort": null}, {
            "id": 1602,
            "countryName": "武陵区",
            "cityId": 182,
            "DisSort": null
        }, {"id": 1603, "countryName": "鼎城区", "cityId": 182, "DisSort": null}, {
            "id": 1604,
            "countryName": "安乡县",
            "cityId": 182,
            "DisSort": null
        }, {"id": 1605, "countryName": "汉寿县", "cityId": 182, "DisSort": null}, {
            "id": 1606,
            "countryName": "澧县",
            "cityId": 182,
            "DisSort": null
        }, {"id": 1607, "countryName": "临澧县", "cityId": 182, "DisSort": null}, {
            "id": 1608,
            "countryName": "桃源县",
            "cityId": 182,
            "DisSort": null
        }, {"id": 1609, "countryName": "石门县", "cityId": 182, "DisSort": null}, {
            "id": 1610,
            "countryName": "津市市",
            "cityId": 182,
            "DisSort": null
        }, {"id": 1611, "countryName": "资阳区", "cityId": 183, "DisSort": null}, {
            "id": 1612,
            "countryName": "赫山区",
            "cityId": 183,
            "DisSort": null
        }, {"id": 1613, "countryName": "南县", "cityId": 183, "DisSort": null}, {
            "id": 1614,
            "countryName": "桃江县",
            "cityId": 183,
            "DisSort": null
        }, {"id": 1615, "countryName": "安化县", "cityId": 183, "DisSort": null}, {
            "id": 1616,
            "countryName": "沅江市",
            "cityId": 183,
            "DisSort": null
        }, {"id": 1617, "countryName": "娄星区", "cityId": 184, "DisSort": null}, {
            "id": 1618,
            "countryName": "双峰县",
            "cityId": 184,
            "DisSort": null
        }, {"id": 1619, "countryName": "新化县", "cityId": 184, "DisSort": null}, {
            "id": 1620,
            "countryName": "冷水江市",
            "cityId": 184,
            "DisSort": null
        }, {"id": 1621, "countryName": "涟源市", "cityId": 184, "DisSort": null}, {
            "id": 1622,
            "countryName": "双清区",
            "cityId": 185,
            "DisSort": null
        }, {"id": 1623, "countryName": "大祥区", "cityId": 185, "DisSort": null}, {
            "id": 1624,
            "countryName": "北塔区",
            "cityId": 185,
            "DisSort": null
        }, {"id": 1625, "countryName": "邵东县", "cityId": 185, "DisSort": null}, {
            "id": 1626,
            "countryName": "新邵县",
            "cityId": 185,
            "DisSort": null
        }, {"id": 1627, "countryName": "邵阳县", "cityId": 185, "DisSort": null}, {
            "id": 1628,
            "countryName": "隆回县",
            "cityId": 185,
            "DisSort": null
        }, {"id": 1629, "countryName": "洞口县", "cityId": 185, "DisSort": null}, {
            "id": 1630,
            "countryName": "绥宁县",
            "cityId": 185,
            "DisSort": null
        }, {"id": 1631, "countryName": "新宁县", "cityId": 185, "DisSort": null}, {
            "id": 1632,
            "countryName": "城步苗族自治县",
            "cityId": 185,
            "DisSort": null
        }, {"id": 1633, "countryName": "武冈市", "cityId": 185, "DisSort": null}, {
            "id": 1634,
            "countryName": "吉首市",
            "cityId": 186,
            "DisSort": null
        }, {"id": 1635, "countryName": "泸溪县", "cityId": 186, "DisSort": null}, {
            "id": 1636,
            "countryName": "凤凰县",
            "cityId": 186,
            "DisSort": null
        }, {"id": 1637, "countryName": "花垣县", "cityId": 186, "DisSort": null}, {
            "id": 1638,
            "countryName": "保靖县",
            "cityId": 186,
            "DisSort": null
        }, {"id": 1639, "countryName": "古丈县", "cityId": 186, "DisSort": null}, {
            "id": 1640,
            "countryName": "永顺县",
            "cityId": 186,
            "DisSort": null
        }, {"id": 1641, "countryName": "龙山县", "cityId": 186, "DisSort": null}, {
            "id": 1642,
            "countryName": "永定区",
            "cityId": 187,
            "DisSort": null
        }, {"id": 1643, "countryName": "武陵源区", "cityId": 187, "DisSort": null}, {
            "id": 1644,
            "countryName": "慈利县",
            "cityId": 187,
            "DisSort": null
        }, {"id": 1645, "countryName": "桑植县", "cityId": 187, "DisSort": null}, {
            "id": 1646,
            "countryName": "鹤城区",
            "cityId": 188,
            "DisSort": null
        }, {"id": 1647, "countryName": "中方县", "cityId": 188, "DisSort": null}, {
            "id": 1648,
            "countryName": "沅陵县",
            "cityId": 188,
            "DisSort": null
        }, {"id": 1649, "countryName": "辰溪县", "cityId": 188, "DisSort": null}, {
            "id": 1650,
            "countryName": "溆浦县",
            "cityId": 188,
            "DisSort": null
        }, {"id": 1651, "countryName": "会同县", "cityId": 188, "DisSort": null}, {
            "id": 1652,
            "countryName": "麻阳苗族自治县",
            "cityId": 188,
            "DisSort": null
        }, {"id": 1653, "countryName": "新晃侗族自治县", "cityId": 188, "DisSort": null}, {
            "id": 1654,
            "countryName": "芷江侗族自治县",
            "cityId": 188,
            "DisSort": null
        }, {"id": 1655, "countryName": "靖州苗族侗族自治县", "cityId": 188, "DisSort": null}, {
            "id": 1656,
            "countryName": "通道侗族自治县",
            "cityId": 188,
            "DisSort": null
        }, {"id": 1657, "countryName": "洪江市", "cityId": 188, "DisSort": null}, {
            "id": 1658,
            "countryName": "零陵区",
            "cityId": 189,
            "DisSort": null
        }, {"id": 1659, "countryName": "冷水滩区", "cityId": 189, "DisSort": null}, {
            "id": 1660,
            "countryName": "祁阳县",
            "cityId": 189,
            "DisSort": null
        }, {"id": 1661, "countryName": "东安县", "cityId": 189, "DisSort": null}, {
            "id": 1662,
            "countryName": "双牌县",
            "cityId": 189,
            "DisSort": null
        }, {"id": 1663, "countryName": "道县", "cityId": 189, "DisSort": null}, {
            "id": 1664,
            "countryName": "江永县",
            "cityId": 189,
            "DisSort": null
        }, {"id": 1665, "countryName": "宁远县", "cityId": 189, "DisSort": null}, {
            "id": 1666,
            "countryName": "蓝山县",
            "cityId": 189,
            "DisSort": null
        }, {"id": 1667, "countryName": "新田县", "cityId": 189, "DisSort": null}, {
            "id": 1668,
            "countryName": "江华瑶族自治县",
            "cityId": 189,
            "DisSort": null
        }, {"id": 1669, "countryName": "从化市", "cityId": 190, "DisSort": null}, {
            "id": 1670,
            "countryName": "荔湾区",
            "cityId": 190,
            "DisSort": null
        }, {"id": 1671, "countryName": "越秀区", "cityId": 190, "DisSort": null}, {
            "id": 1672,
            "countryName": "海珠区",
            "cityId": 190,
            "DisSort": null
        }, {"id": 1673, "countryName": "天河区", "cityId": 190, "DisSort": null}, {
            "id": 1674,
            "countryName": "白云区",
            "cityId": 190,
            "DisSort": null
        }, {"id": 1675, "countryName": "花都区", "cityId": 190, "DisSort": null}, {
            "id": 1676,
            "countryName": "黄埔区",
            "cityId": 190,
            "DisSort": null
        }, {"id": 1677, "countryName": "萝岗区", "cityId": 190, "DisSort": null}, {
            "id": 1678,
            "countryName": "南沙区",
            "cityId": 190,
            "DisSort": null
        }, {"id": 1679, "countryName": "番禺区", "cityId": 190, "DisSort": null}, {
            "id": 1680,
            "countryName": "增城市",
            "cityId": 190,
            "DisSort": null
        }, {"id": 1681, "countryName": "海丰县", "cityId": 191, "DisSort": null}, {
            "id": 1682,
            "countryName": "陆河县",
            "cityId": 191,
            "DisSort": null
        }, {"id": 1683, "countryName": "陆丰市", "cityId": 191, "DisSort": null}, {
            "id": 1684,
            "countryName": "江城区",
            "cityId": 192,
            "DisSort": null
        }, {"id": 1685, "countryName": "阳西县", "cityId": 192, "DisSort": null}, {
            "id": 1686,
            "countryName": "阳东县",
            "cityId": 192,
            "DisSort": null
        }, {"id": 1687, "countryName": "阳春市", "cityId": 192, "DisSort": null}, {
            "id": 1688,
            "countryName": "榕城区",
            "cityId": 193,
            "DisSort": null
        }, {"id": 1689, "countryName": "揭东县", "cityId": 193, "DisSort": null}, {
            "id": 1690,
            "countryName": "揭西县",
            "cityId": 193,
            "DisSort": null
        }, {"id": 1691, "countryName": "惠来县", "cityId": 193, "DisSort": null}, {
            "id": 1692,
            "countryName": "普宁市",
            "cityId": 193,
            "DisSort": null
        }, {"id": 1693, "countryName": "茂南区", "cityId": 194, "DisSort": null}, {
            "id": 1694,
            "countryName": "茂港区",
            "cityId": 194,
            "DisSort": null
        }, {"id": 1695, "countryName": "电白县", "cityId": 194, "DisSort": null}, {
            "id": 1696,
            "countryName": "高州市",
            "cityId": 194,
            "DisSort": null
        }, {"id": 1697, "countryName": "化州市", "cityId": 194, "DisSort": null}, {
            "id": 1698,
            "countryName": "信宜市",
            "cityId": 194,
            "DisSort": null
        }, {"id": 1699, "countryName": "惠城区", "cityId": 195, "DisSort": null}, {
            "id": 1700,
            "countryName": "惠阳区",
            "cityId": 195,
            "DisSort": null
        }, {"id": 1701, "countryName": "博罗县", "cityId": 195, "DisSort": null}, {
            "id": 1702,
            "countryName": "惠东县",
            "cityId": 195,
            "DisSort": null
        }, {"id": 1703, "countryName": "龙门县", "cityId": 195, "DisSort": null}, {
            "id": 1704,
            "countryName": "蓬江区",
            "cityId": 196,
            "DisSort": null
        }, {"id": 1705, "countryName": "江海区", "cityId": 196, "DisSort": null}, {
            "id": 1706,
            "countryName": "新会区",
            "cityId": 196,
            "DisSort": null
        }, {"id": 1707, "countryName": "台山市", "cityId": 196, "DisSort": null}, {
            "id": 1708,
            "countryName": "开平市",
            "cityId": 196,
            "DisSort": null
        }, {"id": 1709, "countryName": "鹤山市", "cityId": 196, "DisSort": null}, {
            "id": 1710,
            "countryName": "恩平市",
            "cityId": 196,
            "DisSort": null
        }, {"id": 1711, "countryName": "武江区", "cityId": 197, "DisSort": null}, {
            "id": 1712,
            "countryName": "浈江区",
            "cityId": 197,
            "DisSort": null
        }, {"id": 1713, "countryName": "曲江区", "cityId": 197, "DisSort": null}, {
            "id": 1714,
            "countryName": "始兴县",
            "cityId": 197,
            "DisSort": null
        }, {"id": 1715, "countryName": "仁化县", "cityId": 197, "DisSort": null}, {
            "id": 1716,
            "countryName": "翁源县",
            "cityId": 197,
            "DisSort": null
        }, {"id": 1717, "countryName": "乳源瑶族自治县", "cityId": 197, "DisSort": null}, {
            "id": 1718,
            "countryName": "新丰县",
            "cityId": 197,
            "DisSort": null
        }, {"id": 1719, "countryName": "乐昌市", "cityId": 197, "DisSort": null}, {
            "id": 1720,
            "countryName": "南雄市",
            "cityId": 197,
            "DisSort": null
        }, {"id": 1721, "countryName": "梅江区", "cityId": 198, "DisSort": null}, {
            "id": 1722,
            "countryName": "梅县",
            "cityId": 198,
            "DisSort": null
        }, {"id": 1723, "countryName": "大埔县", "cityId": 198, "DisSort": null}, {
            "id": 1724,
            "countryName": "丰顺县",
            "cityId": 198,
            "DisSort": null
        }, {"id": 1725, "countryName": "五华县", "cityId": 198, "DisSort": null}, {
            "id": 1726,
            "countryName": "平远县",
            "cityId": 198,
            "DisSort": null
        }, {"id": 1727, "countryName": "蕉岭县", "cityId": 198, "DisSort": null}, {
            "id": 1728,
            "countryName": "兴宁市",
            "cityId": 198,
            "DisSort": null
        }, {"id": 1729, "countryName": "龙湖区", "cityId": 199, "DisSort": null}, {
            "id": 1730,
            "countryName": "金平区",
            "cityId": 199,
            "DisSort": null
        }, {"id": 1731, "countryName": "濠江区", "cityId": 199, "DisSort": null}, {
            "id": 1732,
            "countryName": "潮阳区",
            "cityId": 199,
            "DisSort": null
        }, {"id": 1733, "countryName": "潮南区", "cityId": 199, "DisSort": null}, {
            "id": 1734,
            "countryName": "澄海区",
            "cityId": 199,
            "DisSort": null
        }, {"id": 1735, "countryName": "南澳县", "cityId": 199, "DisSort": null}, {
            "id": 1736,
            "countryName": "罗湖区",
            "cityId": 200,
            "DisSort": null
        }, {"id": 1737, "countryName": "福田区", "cityId": 200, "DisSort": null}, {
            "id": 1738,
            "countryName": "南山区",
            "cityId": 200,
            "DisSort": null
        }, {"id": 1739, "countryName": "宝安区", "cityId": 200, "DisSort": null}, {
            "id": 1740,
            "countryName": "龙岗区",
            "cityId": 200,
            "DisSort": null
        }, {"id": 1741, "countryName": "盐田区", "cityId": 200, "DisSort": null}, {
            "id": 1742,
            "countryName": "香洲区",
            "cityId": 201,
            "DisSort": null
        }, {"id": 1743, "countryName": "斗门区", "cityId": 201, "DisSort": null}, {
            "id": 1744,
            "countryName": "金湾区",
            "cityId": 201,
            "DisSort": null
        }, {"id": 1745, "countryName": "禅城区", "cityId": 202, "DisSort": null}, {
            "id": 1746,
            "countryName": "南海区",
            "cityId": 202,
            "DisSort": null
        }, {"id": 1747, "countryName": "顺德区", "cityId": 202, "DisSort": null}, {
            "id": 1748,
            "countryName": "三水区",
            "cityId": 202,
            "DisSort": null
        }, {"id": 1749, "countryName": "高明区", "cityId": 202, "DisSort": null}, {
            "id": 1750,
            "countryName": "端州区",
            "cityId": 203,
            "DisSort": null
        }, {"id": 1751, "countryName": "鼎湖区", "cityId": 203, "DisSort": null}, {
            "id": 1752,
            "countryName": "广宁县",
            "cityId": 203,
            "DisSort": null
        }, {"id": 1753, "countryName": "怀集县", "cityId": 203, "DisSort": null}, {
            "id": 1754,
            "countryName": "封开县",
            "cityId": 203,
            "DisSort": null
        }, {"id": 1755, "countryName": "德庆县", "cityId": 203, "DisSort": null}, {
            "id": 1756,
            "countryName": "高要市",
            "cityId": 203,
            "DisSort": null
        }, {"id": 1757, "countryName": "四会市", "cityId": 203, "DisSort": null}, {
            "id": 1758,
            "countryName": "赤坎区",
            "cityId": 204,
            "DisSort": null
        }, {"id": 1759, "countryName": "霞山区", "cityId": 204, "DisSort": null}, {
            "id": 1760,
            "countryName": "坡头区",
            "cityId": 204,
            "DisSort": null
        }, {"id": 1761, "countryName": "麻章区", "cityId": 204, "DisSort": null}, {
            "id": 1762,
            "countryName": "遂溪县",
            "cityId": 204,
            "DisSort": null
        }, {"id": 1763, "countryName": "徐闻县", "cityId": 204, "DisSort": null}, {
            "id": 1764,
            "countryName": "廉江市",
            "cityId": 204,
            "DisSort": null
        }, {"id": 1765, "countryName": "雷州市", "cityId": 204, "DisSort": null}, {
            "id": 1766,
            "countryName": "吴川市",
            "cityId": 204,
            "DisSort": null
        }, {"id": 1767, "countryName": "源城区", "cityId": 206, "DisSort": null}, {
            "id": 1768,
            "countryName": "紫金县",
            "cityId": 206,
            "DisSort": null
        }, {"id": 1769, "countryName": "龙川县", "cityId": 206, "DisSort": null}, {
            "id": 1770,
            "countryName": "连平县",
            "cityId": 206,
            "DisSort": null
        }, {"id": 1771, "countryName": "和平县", "cityId": 206, "DisSort": null}, {
            "id": 1772,
            "countryName": "东源县",
            "cityId": 206,
            "DisSort": null
        }, {"id": 1773, "countryName": "清城区", "cityId": 207, "DisSort": null}, {
            "id": 1774,
            "countryName": "佛冈县",
            "cityId": 207,
            "DisSort": null
        }, {"id": 1775, "countryName": "阳山县", "cityId": 207, "DisSort": null}, {
            "id": 1776,
            "countryName": "连山壮族瑶族自治县",
            "cityId": 207,
            "DisSort": null
        }, {"id": 1777, "countryName": "连南瑶族自治县", "cityId": 207, "DisSort": null}, {
            "id": 1778,
            "countryName": "清新县",
            "cityId": 207,
            "DisSort": null
        }, {"id": 1779, "countryName": "英德市", "cityId": 207, "DisSort": null}, {
            "id": 1780,
            "countryName": "连州市",
            "cityId": 207,
            "DisSort": null
        }, {"id": 1781, "countryName": "云城区", "cityId": 208, "DisSort": null}, {
            "id": 1782,
            "countryName": "新兴县",
            "cityId": 208,
            "DisSort": null
        }, {"id": 1783, "countryName": "郁南县", "cityId": 208, "DisSort": null}, {
            "id": 1784,
            "countryName": "云安县",
            "cityId": 208,
            "DisSort": null
        }, {"id": 1785, "countryName": "罗定市", "cityId": 208, "DisSort": null}, {
            "id": 1786,
            "countryName": "湘桥区",
            "cityId": 209,
            "DisSort": null
        }, {"id": 1787, "countryName": "潮安县", "cityId": 209, "DisSort": null}, {
            "id": 1788,
            "countryName": "饶平县",
            "cityId": 209,
            "DisSort": null
        }, {"id": 1789, "countryName": "城关区", "cityId": 211, "DisSort": null}, {
            "id": 1790,
            "countryName": "七里河区",
            "cityId": 211,
            "DisSort": null
        }, {"id": 1791, "countryName": "西固区", "cityId": 211, "DisSort": null}, {
            "id": 1792,
            "countryName": "安宁区",
            "cityId": 211,
            "DisSort": null
        }, {"id": 1793, "countryName": "红古区", "cityId": 211, "DisSort": null}, {
            "id": 1794,
            "countryName": "永登县",
            "cityId": 211,
            "DisSort": null
        }, {"id": 1795, "countryName": "皋兰县", "cityId": 211, "DisSort": null}, {
            "id": 1796,
            "countryName": "榆中县",
            "cityId": 211,
            "DisSort": null
        }, {"id": 1797, "countryName": "金川区", "cityId": 212, "DisSort": null}, {
            "id": 1798,
            "countryName": "永昌县",
            "cityId": 212,
            "DisSort": null
        }, {"id": 1799, "countryName": "白银区", "cityId": 213, "DisSort": null}, {
            "id": 1800,
            "countryName": "平川区",
            "cityId": 213,
            "DisSort": null
        }, {"id": 1801, "countryName": "靖远县", "cityId": 213, "DisSort": null}, {
            "id": 1802,
            "countryName": "会宁县",
            "cityId": 213,
            "DisSort": null
        }, {"id": 1803, "countryName": "景泰县", "cityId": 213, "DisSort": null}, {
            "id": 1804,
            "countryName": "秦州区",
            "cityId": 214,
            "DisSort": null
        }, {"id": 1805, "countryName": "麦积区", "cityId": 214, "DisSort": null}, {
            "id": 1806,
            "countryName": "清水县",
            "cityId": 214,
            "DisSort": null
        }, {"id": 1807, "countryName": "秦安县", "cityId": 214, "DisSort": null}, {
            "id": 1808,
            "countryName": "甘谷县",
            "cityId": 214,
            "DisSort": null
        }, {"id": 1809, "countryName": "武山县", "cityId": 214, "DisSort": null}, {
            "id": 1810,
            "countryName": "张家川回族自治县",
            "cityId": 214,
            "DisSort": null
        }, {"id": 1811, "countryName": "凉州区", "cityId": 216, "DisSort": null}, {
            "id": 1812,
            "countryName": "民勤县",
            "cityId": 216,
            "DisSort": null
        }, {"id": 1813, "countryName": "古浪县", "cityId": 216, "DisSort": null}, {
            "id": 1814,
            "countryName": "天祝藏族自治县",
            "cityId": 216,
            "DisSort": null
        }, {"id": 1815, "countryName": "甘州区", "cityId": 217, "DisSort": null}, {
            "id": 1816,
            "countryName": "肃南裕固族自治县",
            "cityId": 217,
            "DisSort": null
        }, {"id": 1817, "countryName": "民乐县", "cityId": 217, "DisSort": null}, {
            "id": 1818,
            "countryName": "临泽县",
            "cityId": 217,
            "DisSort": null
        }, {"id": 1819, "countryName": "高台县", "cityId": 217, "DisSort": null}, {
            "id": 1820,
            "countryName": "山丹县",
            "cityId": 217,
            "DisSort": null
        }, {"id": 1821, "countryName": "崆峒区", "cityId": 218, "DisSort": null}, {
            "id": 1822,
            "countryName": "泾川县",
            "cityId": 218,
            "DisSort": null
        }, {"id": 1823, "countryName": "灵台县", "cityId": 218, "DisSort": null}, {
            "id": 1824,
            "countryName": "崇信县",
            "cityId": 218,
            "DisSort": null
        }, {"id": 1825, "countryName": "华亭县", "cityId": 218, "DisSort": null}, {
            "id": 1826,
            "countryName": "庄浪县",
            "cityId": 218,
            "DisSort": null
        }, {"id": 1827, "countryName": "静宁县", "cityId": 218, "DisSort": null}, {
            "id": 1828,
            "countryName": "肃州区",
            "cityId": 219,
            "DisSort": null
        }, {"id": 1829, "countryName": "金塔县", "cityId": 219, "DisSort": null}, {
            "id": 1830,
            "countryName": "瓜州县",
            "cityId": 219,
            "DisSort": null
        }, {"id": 1831, "countryName": "肃北蒙古族自治县", "cityId": 219, "DisSort": null}, {
            "id": 1832,
            "countryName": "阿克塞哈萨克族自治县",
            "cityId": 219,
            "DisSort": null
        }, {"id": 1833, "countryName": "玉门市", "cityId": 219, "DisSort": null}, {
            "id": 1834,
            "countryName": "敦煌市",
            "cityId": 219,
            "DisSort": null
        }, {"id": 1835, "countryName": "西峰区", "cityId": 220, "DisSort": null}, {
            "id": 1836,
            "countryName": "庆城县",
            "cityId": 220,
            "DisSort": null
        }, {"id": 1837, "countryName": "环县", "cityId": 220, "DisSort": null}, {
            "id": 1838,
            "countryName": "华池县",
            "cityId": 220,
            "DisSort": null
        }, {"id": 1839, "countryName": "合水县", "cityId": 220, "DisSort": null}, {
            "id": 1840,
            "countryName": "正宁县",
            "cityId": 220,
            "DisSort": null
        }, {"id": 1841, "countryName": "宁县", "cityId": 220, "DisSort": null}, {
            "id": 1842,
            "countryName": "镇原县",
            "cityId": 220,
            "DisSort": null
        }, {"id": 1843, "countryName": "安定区", "cityId": 221, "DisSort": null}, {
            "id": 1844,
            "countryName": "通渭县",
            "cityId": 221,
            "DisSort": null
        }, {"id": 1845, "countryName": "陇西县", "cityId": 221, "DisSort": null}, {
            "id": 1846,
            "countryName": "渭源县",
            "cityId": 221,
            "DisSort": null
        }, {"id": 1847, "countryName": "临洮县", "cityId": 221, "DisSort": null}, {
            "id": 1848,
            "countryName": "漳县",
            "cityId": 221,
            "DisSort": null
        }, {"id": 1849, "countryName": "岷县", "cityId": 221, "DisSort": null}, {
            "id": 1850,
            "countryName": "武都区",
            "cityId": 222,
            "DisSort": null
        }, {"id": 1851, "countryName": "成县", "cityId": 222, "DisSort": null}, {
            "id": 1852,
            "countryName": "文县",
            "cityId": 222,
            "DisSort": null
        }, {"id": 1853, "countryName": "宕昌县", "cityId": 222, "DisSort": null}, {
            "id": 1854,
            "countryName": "康县",
            "cityId": 222,
            "DisSort": null
        }, {"id": 1855, "countryName": "西和县", "cityId": 222, "DisSort": null}, {
            "id": 1856,
            "countryName": "礼县",
            "cityId": 222,
            "DisSort": null
        }, {"id": 1857, "countryName": "徽县", "cityId": 222, "DisSort": null}, {
            "id": 1858,
            "countryName": "两当县",
            "cityId": 222,
            "DisSort": null
        }, {"id": 1859, "countryName": "临夏市", "cityId": 223, "DisSort": null}, {
            "id": 1860,
            "countryName": "临夏县",
            "cityId": 223,
            "DisSort": null
        }, {"id": 1861, "countryName": "康乐县", "cityId": 223, "DisSort": null}, {
            "id": 1862,
            "countryName": "永靖县",
            "cityId": 223,
            "DisSort": null
        }, {"id": 1863, "countryName": "广河县", "cityId": 223, "DisSort": null}, {
            "id": 1864,
            "countryName": "和政县",
            "cityId": 223,
            "DisSort": null
        }, {"id": 1865, "countryName": "东乡族自治县", "cityId": 223, "DisSort": null}, {
            "id": 1866,
            "countryName": "积石山保安族东乡族撒拉族自治县",
            "cityId": 223,
            "DisSort": null
        }, {"id": 1867, "countryName": "合作市", "cityId": 224, "DisSort": null}, {
            "id": 1868,
            "countryName": "临潭县",
            "cityId": 224,
            "DisSort": null
        }, {"id": 1869, "countryName": "卓尼县", "cityId": 224, "DisSort": null}, {
            "id": 1870,
            "countryName": "舟曲县",
            "cityId": 224,
            "DisSort": null
        }, {"id": 1871, "countryName": "迭部县", "cityId": 224, "DisSort": null}, {
            "id": 1872,
            "countryName": "玛曲县",
            "cityId": 224,
            "DisSort": null
        }, {"id": 1873, "countryName": "碌曲县", "cityId": 224, "DisSort": null}, {
            "id": 1874,
            "countryName": "夏河县",
            "cityId": 224,
            "DisSort": null
        }, {"id": 1875, "countryName": "锦江区", "cityId": 225, "DisSort": null}, {
            "id": 1876,
            "countryName": "青羊区",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1877, "countryName": "金牛区", "cityId": 225, "DisSort": null}, {
            "id": 1878,
            "countryName": "武侯区",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1879, "countryName": "成华区", "cityId": 225, "DisSort": null}, {
            "id": 1880,
            "countryName": "龙泉驿区",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1881, "countryName": "青白江区", "cityId": 225, "DisSort": null}, {
            "id": 1882,
            "countryName": "新都区",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1883, "countryName": "温江区", "cityId": 225, "DisSort": null}, {
            "id": 1884,
            "countryName": "金堂县",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1885, "countryName": "双流县", "cityId": 225, "DisSort": null}, {
            "id": 1886,
            "countryName": "郫县",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1887, "countryName": "大邑县", "cityId": 225, "DisSort": null}, {
            "id": 1888,
            "countryName": "蒲江县",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1889, "countryName": "新津县", "cityId": 225, "DisSort": null}, {
            "id": 1890,
            "countryName": "都江堰市",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1891, "countryName": "彭州市", "cityId": 225, "DisSort": null}, {
            "id": 1892,
            "countryName": "邛崃市",
            "cityId": 225,
            "DisSort": null
        }, {"id": 1893, "countryName": "崇州市", "cityId": 225, "DisSort": null}, {
            "id": 1894,
            "countryName": "东区",
            "cityId": 226,
            "DisSort": null
        }, {"id": 1895, "countryName": "西区", "cityId": 226, "DisSort": null}, {
            "id": 1896,
            "countryName": "仁和区",
            "cityId": 226,
            "DisSort": null
        }, {"id": 1897, "countryName": "米易县", "cityId": 226, "DisSort": null}, {
            "id": 1898,
            "countryName": "盐边县",
            "cityId": 226,
            "DisSort": null
        }, {"id": 1899, "countryName": "自流井区", "cityId": 227, "DisSort": null}, {
            "id": 1900,
            "countryName": "贡井区",
            "cityId": 227,
            "DisSort": null
        }, {"id": 1901, "countryName": "大安区", "cityId": 227, "DisSort": null}, {
            "id": 1902,
            "countryName": "沿滩区",
            "cityId": 227,
            "DisSort": null
        }, {"id": 1903, "countryName": "荣县", "cityId": 227, "DisSort": null}, {
            "id": 1904,
            "countryName": "富顺县",
            "cityId": 227,
            "DisSort": null
        }, {"id": 1905, "countryName": "涪城区", "cityId": 228, "DisSort": null}, {
            "id": 1906,
            "countryName": "游仙区",
            "cityId": 228,
            "DisSort": null
        }, {"id": 1907, "countryName": "三台县", "cityId": 228, "DisSort": null}, {
            "id": 1908,
            "countryName": "盐亭县",
            "cityId": 228,
            "DisSort": null
        }, {"id": 1909, "countryName": "安县", "cityId": 228, "DisSort": null}, {
            "id": 1910,
            "countryName": "梓潼县",
            "cityId": 228,
            "DisSort": null
        }, {"id": 1911, "countryName": "北川羌族自治县", "cityId": 228, "DisSort": null}, {
            "id": 1912,
            "countryName": "平武县",
            "cityId": 228,
            "DisSort": null
        }, {"id": 1913, "countryName": "江油市", "cityId": 228, "DisSort": null}, {
            "id": 1914,
            "countryName": "顺庆区",
            "cityId": 229,
            "DisSort": null
        }, {"id": 1915, "countryName": "高坪区", "cityId": 229, "DisSort": null}, {
            "id": 1916,
            "countryName": "嘉陵区",
            "cityId": 229,
            "DisSort": null
        }, {"id": 1917, "countryName": "南部县", "cityId": 229, "DisSort": null}, {
            "id": 1918,
            "countryName": "营山县",
            "cityId": 229,
            "DisSort": null
        }, {"id": 1919, "countryName": "蓬安县", "cityId": 229, "DisSort": null}, {
            "id": 1920,
            "countryName": "仪陇县",
            "cityId": 229,
            "DisSort": null
        }, {"id": 1921, "countryName": "西充县", "cityId": 229, "DisSort": null}, {
            "id": 1922,
            "countryName": "阆中市",
            "cityId": 229,
            "DisSort": null
        }, {"id": 1923, "countryName": "通川区", "cityId": 230, "DisSort": null}, {
            "id": 1924,
            "countryName": "达县",
            "cityId": 230,
            "DisSort": null
        }, {"id": 1925, "countryName": "宣汉县", "cityId": 230, "DisSort": null}, {
            "id": 1926,
            "countryName": "开江县",
            "cityId": 230,
            "DisSort": null
        }, {"id": 1927, "countryName": "大竹县", "cityId": 230, "DisSort": null}, {
            "id": 1928,
            "countryName": "渠县",
            "cityId": 230,
            "DisSort": null
        }, {"id": 1929, "countryName": "万源市", "cityId": 230, "DisSort": null}, {
            "id": 1930,
            "countryName": "船山区",
            "cityId": 231,
            "DisSort": null
        }, {"id": 1931, "countryName": "安居区", "cityId": 231, "DisSort": null}, {
            "id": 1932,
            "countryName": "蓬溪县",
            "cityId": 231,
            "DisSort": null
        }, {"id": 1933, "countryName": "射洪县", "cityId": 231, "DisSort": null}, {
            "id": 1934,
            "countryName": "大英县",
            "cityId": 231,
            "DisSort": null
        }, {"id": 1935, "countryName": "广安区", "cityId": 232, "DisSort": null}, {
            "id": 1936,
            "countryName": "岳池县",
            "cityId": 232,
            "DisSort": null
        }, {"id": 1937, "countryName": "武胜县", "cityId": 232, "DisSort": null}, {
            "id": 1938,
            "countryName": "邻水县",
            "cityId": 232,
            "DisSort": null
        }, {"id": 1939, "countryName": "华蓥市", "cityId": 232, "DisSort": null}, {
            "id": 1940,
            "countryName": "巴州区",
            "cityId": 233,
            "DisSort": null
        }, {"id": 1941, "countryName": "通江县", "cityId": 233, "DisSort": null}, {
            "id": 1942,
            "countryName": "南江县",
            "cityId": 233,
            "DisSort": null
        }, {"id": 1943, "countryName": "平昌县", "cityId": 233, "DisSort": null}, {
            "id": 1944,
            "countryName": "江阳区",
            "cityId": 234,
            "DisSort": null
        }, {"id": 1945, "countryName": "纳溪区", "cityId": 234, "DisSort": null}, {
            "id": 1946,
            "countryName": "龙马潭区",
            "cityId": 234,
            "DisSort": null
        }, {"id": 1947, "countryName": "泸县", "cityId": 234, "DisSort": null}, {
            "id": 1948,
            "countryName": "合江县",
            "cityId": 234,
            "DisSort": null
        }, {"id": 1949, "countryName": "叙永县", "cityId": 234, "DisSort": null}, {
            "id": 1950,
            "countryName": "古蔺县",
            "cityId": 234,
            "DisSort": null
        }, {"id": 1951, "countryName": "翠屏区", "cityId": 235, "DisSort": null}, {
            "id": 1952,
            "countryName": "宜宾县",
            "cityId": 235,
            "DisSort": null
        }, {"id": 1953, "countryName": "南溪县", "cityId": 235, "DisSort": null}, {
            "id": 1954,
            "countryName": "江安县",
            "cityId": 235,
            "DisSort": null
        }, {"id": 1955, "countryName": "长宁县", "cityId": 235, "DisSort": null}, {
            "id": 1956,
            "countryName": "高县",
            "cityId": 235,
            "DisSort": null
        }, {"id": 1957, "countryName": "珙县", "cityId": 235, "DisSort": null}, {
            "id": 1958,
            "countryName": "筠连县",
            "cityId": 235,
            "DisSort": null
        }, {"id": 1959, "countryName": "兴文县", "cityId": 235, "DisSort": null}, {
            "id": 1960,
            "countryName": "屏山县",
            "cityId": 235,
            "DisSort": null
        }, {"id": 1961, "countryName": "雁江区", "cityId": 236, "DisSort": null}, {
            "id": 1962,
            "countryName": "安岳县",
            "cityId": 236,
            "DisSort": null
        }, {"id": 1963, "countryName": "乐至县", "cityId": 236, "DisSort": null}, {
            "id": 1964,
            "countryName": "简阳市",
            "cityId": 236,
            "DisSort": null
        }, {"id": 1965, "countryName": "市中区", "cityId": 237, "DisSort": null}, {
            "id": 1966,
            "countryName": "东兴区",
            "cityId": 237,
            "DisSort": null
        }, {"id": 1967, "countryName": "威远县", "cityId": 237, "DisSort": null}, {
            "id": 1968,
            "countryName": "资中县",
            "cityId": 237,
            "DisSort": null
        }, {"id": 1969, "countryName": "隆昌县", "cityId": 237, "DisSort": null}, {
            "id": 1970,
            "countryName": "市中区",
            "cityId": 238,
            "DisSort": null
        }, {"id": 1971, "countryName": "沙湾区", "cityId": 238, "DisSort": null}, {
            "id": 1972,
            "countryName": "五通桥区",
            "cityId": 238,
            "DisSort": null
        }, {"id": 1973, "countryName": "金口河区", "cityId": 238, "DisSort": null}, {
            "id": 1974,
            "countryName": "犍为县",
            "cityId": 238,
            "DisSort": null
        }, {"id": 1975, "countryName": "井研县", "cityId": 238, "DisSort": null}, {
            "id": 1976,
            "countryName": "夹江县",
            "cityId": 238,
            "DisSort": null
        }, {"id": 1977, "countryName": "沐川县", "cityId": 238, "DisSort": null}, {
            "id": 1978,
            "countryName": "峨边彝族自治县",
            "cityId": 238,
            "DisSort": null
        }, {"id": 1979, "countryName": "马边彝族自治县", "cityId": 238, "DisSort": null}, {
            "id": 1980,
            "countryName": "峨眉山市",
            "cityId": 238,
            "DisSort": null
        }, {"id": 1981, "countryName": "东坡区", "cityId": 239, "DisSort": null}, {
            "id": 1982,
            "countryName": "仁寿县",
            "cityId": 239,
            "DisSort": null
        }, {"id": 1983, "countryName": "彭山县", "cityId": 239, "DisSort": null}, {
            "id": 1984,
            "countryName": "洪雅县",
            "cityId": 239,
            "DisSort": null
        }, {"id": 1985, "countryName": "丹棱县", "cityId": 239, "DisSort": null}, {
            "id": 1986,
            "countryName": "青神县",
            "cityId": 239,
            "DisSort": null
        }, {"id": 1987, "countryName": "西昌市", "cityId": 240, "DisSort": null}, {
            "id": 1988,
            "countryName": "木里藏族自治县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 1989, "countryName": "盐源县", "cityId": 240, "DisSort": null}, {
            "id": 1990,
            "countryName": "德昌县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 1991, "countryName": "会理县", "cityId": 240, "DisSort": null}, {
            "id": 1992,
            "countryName": "会东县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 1993, "countryName": "宁南县", "cityId": 240, "DisSort": null}, {
            "id": 1994,
            "countryName": "普格县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 1995, "countryName": "布拖县", "cityId": 240, "DisSort": null}, {
            "id": 1996,
            "countryName": "金阳县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 1997, "countryName": "昭觉县", "cityId": 240, "DisSort": null}, {
            "id": 1998,
            "countryName": "喜德县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 1999, "countryName": "冕宁县", "cityId": 240, "DisSort": null}, {
            "id": 2000,
            "countryName": "越西县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 2001, "countryName": "甘洛县", "cityId": 240, "DisSort": null}, {
            "id": 2002,
            "countryName": "美姑县",
            "cityId": 240,
            "DisSort": null
        }, {"id": 2003, "countryName": "雷波县", "cityId": 240, "DisSort": null}, {
            "id": 2004,
            "countryName": "雨城区",
            "cityId": 241,
            "DisSort": null
        }, {"id": 2005, "countryName": "名山县", "cityId": 241, "DisSort": null}, {
            "id": 2006,
            "countryName": "荥经县",
            "cityId": 241,
            "DisSort": null
        }, {"id": 2007, "countryName": "汉源县", "cityId": 241, "DisSort": null}, {
            "id": 2008,
            "countryName": "石棉县",
            "cityId": 241,
            "DisSort": null
        }, {"id": 2009, "countryName": "天全县", "cityId": 241, "DisSort": null}, {
            "id": 2010,
            "countryName": "芦山县",
            "cityId": 241,
            "DisSort": null
        }, {"id": 2011, "countryName": "宝兴县", "cityId": 241, "DisSort": null}, {
            "id": 2012,
            "countryName": "康定县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2013, "countryName": "泸定县", "cityId": 242, "DisSort": null}, {
            "id": 2014,
            "countryName": "丹巴县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2015, "countryName": "九龙县", "cityId": 242, "DisSort": null}, {
            "id": 2016,
            "countryName": "雅江县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2017, "countryName": "道孚县", "cityId": 242, "DisSort": null}, {
            "id": 2018,
            "countryName": "炉霍县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2019, "countryName": "甘孜县", "cityId": 242, "DisSort": null}, {
            "id": 2020,
            "countryName": "新龙县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2021, "countryName": "德格县", "cityId": 242, "DisSort": null}, {
            "id": 2022,
            "countryName": "白玉县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2023, "countryName": "石渠县", "cityId": 242, "DisSort": null}, {
            "id": 2024,
            "countryName": "色达县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2025, "countryName": "理塘县", "cityId": 242, "DisSort": null}, {
            "id": 2026,
            "countryName": "巴塘县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2027, "countryName": "乡城县", "cityId": 242, "DisSort": null}, {
            "id": 2028,
            "countryName": "稻城县",
            "cityId": 242,
            "DisSort": null
        }, {"id": 2029, "countryName": "得荣县", "cityId": 242, "DisSort": null}, {
            "id": 2030,
            "countryName": "汶川县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2031, "countryName": "理县", "cityId": 243, "DisSort": null}, {
            "id": 2032,
            "countryName": "茂县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2033, "countryName": "松潘县", "cityId": 243, "DisSort": null}, {
            "id": 2034,
            "countryName": "九寨沟县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2035, "countryName": "金川县", "cityId": 243, "DisSort": null}, {
            "id": 2036,
            "countryName": "小金县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2037, "countryName": "黑水县", "cityId": 243, "DisSort": null}, {
            "id": 2038,
            "countryName": "马尔康县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2039, "countryName": "壤塘县", "cityId": 243, "DisSort": null}, {
            "id": 2040,
            "countryName": "阿坝县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2041, "countryName": "若尔盖县", "cityId": 243, "DisSort": null}, {
            "id": 2042,
            "countryName": "红原县",
            "cityId": 243,
            "DisSort": null
        }, {"id": 2043, "countryName": "旌阳区", "cityId": 244, "DisSort": null}, {
            "id": 2044,
            "countryName": "中江县",
            "cityId": 244,
            "DisSort": null
        }, {"id": 2045, "countryName": "罗江县", "cityId": 244, "DisSort": null}, {
            "id": 2046,
            "countryName": "广汉市",
            "cityId": 244,
            "DisSort": null
        }, {"id": 2047, "countryName": "什邡市", "cityId": 244, "DisSort": null}, {
            "id": 2048,
            "countryName": "绵竹市",
            "cityId": 244,
            "DisSort": null
        }, {"id": 2049, "countryName": "市中区", "cityId": 245, "DisSort": null}, {
            "id": 2050,
            "countryName": "元坝区",
            "cityId": 245,
            "DisSort": null
        }, {"id": 2051, "countryName": "朝天区", "cityId": 245, "DisSort": null}, {
            "id": 2052,
            "countryName": "旺苍县",
            "cityId": 245,
            "DisSort": null
        }, {"id": 2053, "countryName": "青川县", "cityId": 245, "DisSort": null}, {
            "id": 2054,
            "countryName": "剑阁县",
            "cityId": 245,
            "DisSort": null
        }, {"id": 2055, "countryName": "苍溪县", "cityId": 245, "DisSort": null}, {
            "id": 2056,
            "countryName": "南明区",
            "cityId": 246,
            "DisSort": null
        }, {"id": 2057, "countryName": "云岩区", "cityId": 246, "DisSort": null}, {
            "id": 2058,
            "countryName": "花溪区",
            "cityId": 246,
            "DisSort": null
        }, {"id": 2059, "countryName": "乌当区", "cityId": 246, "DisSort": null}, {
            "id": 2060,
            "countryName": "白云区",
            "cityId": 246,
            "DisSort": null
        }, {"id": 2061, "countryName": "小河区", "cityId": 246, "DisSort": null}, {
            "id": 2062,
            "countryName": "开阳县",
            "cityId": 246,
            "DisSort": null
        }, {"id": 2063, "countryName": "息烽县", "cityId": 246, "DisSort": null}, {
            "id": 2064,
            "countryName": "修文县",
            "cityId": 246,
            "DisSort": null
        }, {"id": 2065, "countryName": "清镇市", "cityId": 246, "DisSort": null}, {
            "id": 2066,
            "countryName": "红花岗区",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2067, "countryName": "汇川区", "cityId": 247, "DisSort": null}, {
            "id": 2068,
            "countryName": "遵义县",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2069, "countryName": "桐梓县", "cityId": 247, "DisSort": null}, {
            "id": 2070,
            "countryName": "绥阳县",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2071, "countryName": "正安县", "cityId": 247, "DisSort": null}, {
            "id": 2072,
            "countryName": "道真仡佬族苗族自治县",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2073, "countryName": "务川仡佬族苗族自治县", "cityId": 247, "DisSort": null}, {
            "id": 2074,
            "countryName": "凤冈县",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2075, "countryName": "湄潭县", "cityId": 247, "DisSort": null}, {
            "id": 2076,
            "countryName": "余庆县",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2077, "countryName": "习水县", "cityId": 247, "DisSort": null}, {
            "id": 2078,
            "countryName": "赤水市",
            "cityId": 247,
            "DisSort": null
        }, {"id": 2079, "countryName": "仁怀市", "cityId": 247, "DisSort": null}, {
            "id": 2080,
            "countryName": "西秀区",
            "cityId": 248,
            "DisSort": null
        }, {"id": 2081, "countryName": "平坝县", "cityId": 248, "DisSort": null}, {
            "id": 2082,
            "countryName": "普定县",
            "cityId": 248,
            "DisSort": null
        }, {"id": 2083, "countryName": "镇宁布依族苗族自治县", "cityId": 248, "DisSort": null}, {
            "id": 2084,
            "countryName": "关岭布依族苗族自治县",
            "cityId": 248,
            "DisSort": null
        }, {"id": 2085, "countryName": "紫云苗族布依族自治县", "cityId": 248, "DisSort": null}, {
            "id": 2086,
            "countryName": "都匀市",
            "cityId": 249,
            "DisSort": null
        }, {"id": 2087, "countryName": "福泉市", "cityId": 249, "DisSort": null}, {
            "id": 2088,
            "countryName": "荔波县",
            "cityId": 249,
            "DisSort": null
        }, {"id": 2089, "countryName": "贵定县", "cityId": 249, "DisSort": null}, {
            "id": 2090,
            "countryName": "瓮安县",
            "cityId": 249,
            "DisSort": null
        }, {"id": 2091, "countryName": "独山县", "cityId": 249, "DisSort": null}, {
            "id": 2092,
            "countryName": "平塘县",
            "cityId": 249,
            "DisSort": null
        }, {"id": 2093, "countryName": "罗甸县", "cityId": 249, "DisSort": null}, {
            "id": 2094,
            "countryName": "长顺县",
            "cityId": 249,
            "DisSort": null
        }, {"id": 2095, "countryName": "龙里县", "cityId": 249, "DisSort": null}, {
            "id": 2096,
            "countryName": "惠水县",
            "cityId": 249,
            "DisSort": null
        }, {"id": 2097, "countryName": "三都水族自治县", "cityId": 249, "DisSort": null}, {
            "id": 2098,
            "countryName": "凯里市",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2099, "countryName": "黄平县", "cityId": 250, "DisSort": null}, {
            "id": 2100,
            "countryName": "施秉县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2101, "countryName": "三穗县", "cityId": 250, "DisSort": null}, {
            "id": 2102,
            "countryName": "镇远县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2103, "countryName": "岑巩县", "cityId": 250, "DisSort": null}, {
            "id": 2104,
            "countryName": "天柱县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2105, "countryName": "锦屏县", "cityId": 250, "DisSort": null}, {
            "id": 2106,
            "countryName": "剑河县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2107, "countryName": "台江县", "cityId": 250, "DisSort": null}, {
            "id": 2108,
            "countryName": "黎平县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2109, "countryName": "榕江县", "cityId": 250, "DisSort": null}, {
            "id": 2110,
            "countryName": "从江县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2111, "countryName": "雷山县", "cityId": 250, "DisSort": null}, {
            "id": 2112,
            "countryName": "麻江县",
            "cityId": 250,
            "DisSort": null
        }, {"id": 2113, "countryName": "丹寨县", "cityId": 250, "DisSort": null}, {
            "id": 2114,
            "countryName": "铜仁市",
            "cityId": 251,
            "DisSort": null
        }, {"id": 2115, "countryName": "江口县", "cityId": 251, "DisSort": null}, {
            "id": 2116,
            "countryName": "玉屏侗族自治县",
            "cityId": 251,
            "DisSort": null
        }, {"id": 2117, "countryName": "石阡县", "cityId": 251, "DisSort": null}, {
            "id": 2118,
            "countryName": "思南县",
            "cityId": 251,
            "DisSort": null
        }, {"id": 2119, "countryName": "印江土家族苗族自治县", "cityId": 251, "DisSort": null}, {
            "id": 2120,
            "countryName": "德江县",
            "cityId": 251,
            "DisSort": null
        }, {"id": 2121, "countryName": "沿河土家族自治县", "cityId": 251, "DisSort": null}, {
            "id": 2122,
            "countryName": "松桃苗族自治县",
            "cityId": 251,
            "DisSort": null
        }, {"id": 2123, "countryName": "万山特区", "cityId": 251, "DisSort": null}, {
            "id": 2124,
            "countryName": "毕节市",
            "cityId": 252,
            "DisSort": null
        }, {"id": 2125, "countryName": "大方县", "cityId": 252, "DisSort": null}, {
            "id": 2126,
            "countryName": "黔西县",
            "cityId": 252,
            "DisSort": null
        }, {"id": 2127, "countryName": "金沙县", "cityId": 252, "DisSort": null}, {
            "id": 2128,
            "countryName": "织金县",
            "cityId": 252,
            "DisSort": null
        }, {"id": 2129, "countryName": "纳雍县", "cityId": 252, "DisSort": null}, {
            "id": 2130,
            "countryName": "威宁彝族回族苗族自治县",
            "cityId": 252,
            "DisSort": null
        }, {"id": 2131, "countryName": "赫章县", "cityId": 252, "DisSort": null}, {
            "id": 2132,
            "countryName": "钟山区",
            "cityId": 253,
            "DisSort": null
        }, {"id": 2133, "countryName": "六枝特区", "cityId": 253, "DisSort": null}, {
            "id": 2134,
            "countryName": "水城县",
            "cityId": 253,
            "DisSort": null
        }, {"id": 2135, "countryName": "盘县", "cityId": 253, "DisSort": null}, {
            "id": 2136,
            "countryName": "兴义市",
            "cityId": 254,
            "DisSort": null
        }, {"id": 2137, "countryName": "兴仁县", "cityId": 254, "DisSort": null}, {
            "id": 2138,
            "countryName": "普安县",
            "cityId": 254,
            "DisSort": null
        }, {"id": 2139, "countryName": "晴隆县", "cityId": 254, "DisSort": null}, {
            "id": 2140,
            "countryName": "贞丰县",
            "cityId": 254,
            "DisSort": null
        }, {"id": 2141, "countryName": "望谟县", "cityId": 254, "DisSort": null}, {
            "id": 2142,
            "countryName": "册亨县",
            "cityId": 254,
            "DisSort": null
        }, {"id": 2143, "countryName": "安龙县", "cityId": 254, "DisSort": null}, {
            "id": 2144,
            "countryName": "秀英区",
            "cityId": 255,
            "DisSort": null
        }, {"id": 2145, "countryName": "龙华区", "cityId": 255, "DisSort": null}, {
            "id": 2146,
            "countryName": "琼山区",
            "cityId": 255,
            "DisSort": null
        }, {"id": 2147, "countryName": "美兰区", "cityId": 255, "DisSort": null}, {
            "id": 2148,
            "countryName": "景洪市",
            "cityId": 273,
            "DisSort": null
        }, {"id": 2149, "countryName": "勐海县", "cityId": 273, "DisSort": null}, {
            "id": 2150,
            "countryName": "勐腊县",
            "cityId": 273,
            "DisSort": null
        }, {"id": 2151, "countryName": "瑞丽市", "cityId": 274, "DisSort": null}, {
            "id": 2152,
            "countryName": "潞西市",
            "cityId": 274,
            "DisSort": null
        }, {"id": 2153, "countryName": "梁河县", "cityId": 274, "DisSort": null}, {
            "id": 2154,
            "countryName": "盈江县",
            "cityId": 274,
            "DisSort": null
        }, {"id": 2155, "countryName": "陇川县", "cityId": 274, "DisSort": null}, {
            "id": 2156,
            "countryName": "昭阳区",
            "cityId": 275,
            "DisSort": null
        }, {"id": 2157, "countryName": "鲁甸县", "cityId": 275, "DisSort": null}, {
            "id": 2158,
            "countryName": "巧家县",
            "cityId": 275,
            "DisSort": null
        }, {"id": 2159, "countryName": "盐津县", "cityId": 275, "DisSort": null}, {
            "id": 2160,
            "countryName": "大关县",
            "cityId": 275,
            "DisSort": null
        }, {"id": 2161, "countryName": "永善县", "cityId": 275, "DisSort": null}, {
            "id": 2162,
            "countryName": "绥江县",
            "cityId": 275,
            "DisSort": null
        }, {"id": 2163, "countryName": "镇雄县", "cityId": 275, "DisSort": null}, {
            "id": 2164,
            "countryName": "彝良县",
            "cityId": 275,
            "DisSort": null
        }, {"id": 2165, "countryName": "威信县", "cityId": 275, "DisSort": null}, {
            "id": 2166,
            "countryName": "水富县",
            "cityId": 275,
            "DisSort": null
        }, {"id": 2167, "countryName": "五华区", "cityId": 276, "DisSort": null}, {
            "id": 2168,
            "countryName": "盘龙区",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2169, "countryName": "官渡区", "cityId": 276, "DisSort": null}, {
            "id": 2170,
            "countryName": "西山区",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2171, "countryName": "东川区", "cityId": 276, "DisSort": null}, {
            "id": 2172,
            "countryName": "呈贡县",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2173, "countryName": "晋宁县", "cityId": 276, "DisSort": null}, {
            "id": 2174,
            "countryName": "富民县",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2175, "countryName": "宜良县", "cityId": 276, "DisSort": null}, {
            "id": 2176,
            "countryName": "石林彝族自治县",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2177, "countryName": "嵩明县", "cityId": 276, "DisSort": null}, {
            "id": 2178,
            "countryName": "禄劝彝族苗族自治县",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2179, "countryName": "寻甸回族彝族自治县", "cityId": 276, "DisSort": null}, {
            "id": 2180,
            "countryName": "安宁市",
            "cityId": 276,
            "DisSort": null
        }, {"id": 2181, "countryName": "大理市", "cityId": 277, "DisSort": null}, {
            "id": 2182,
            "countryName": "漾濞彝族自治县",
            "cityId": 277,
            "DisSort": null
        }, {"id": 2183, "countryName": "祥云县", "cityId": 277, "DisSort": null}, {
            "id": 2184,
            "countryName": "宾川县",
            "cityId": 277,
            "DisSort": null
        }, {"id": 2185, "countryName": "弥渡县", "cityId": 277, "DisSort": null}, {
            "id": 2186,
            "countryName": "南涧彝族自治县",
            "cityId": 277,
            "DisSort": null
        }, {"id": 2187, "countryName": "巍山彝族回族自治县", "cityId": 277, "DisSort": null}, {
            "id": 2188,
            "countryName": "永平县",
            "cityId": 277,
            "DisSort": null
        }, {"id": 2189, "countryName": "云龙县", "cityId": 277, "DisSort": null}, {
            "id": 2190,
            "countryName": "洱源县",
            "cityId": 277,
            "DisSort": null
        }, {"id": 2191, "countryName": "剑川县", "cityId": 277, "DisSort": null}, {
            "id": 2192,
            "countryName": "鹤庆县",
            "cityId": 277,
            "DisSort": null
        }, {"id": 2193, "countryName": "个旧市", "cityId": 278, "DisSort": null}, {
            "id": 2194,
            "countryName": "开远市",
            "cityId": 278,
            "DisSort": null
        }, {"id": 2195, "countryName": "蒙自县", "cityId": 278, "DisSort": null}, {
            "id": 2196,
            "countryName": "屏边苗族自治县",
            "cityId": 278,
            "DisSort": null
        }, {"id": 2197, "countryName": "建水县", "cityId": 278, "DisSort": null}, {
            "id": 2198,
            "countryName": "石屏县",
            "cityId": 278,
            "DisSort": null
        }, {"id": 2199, "countryName": "弥勒县", "cityId": 278, "DisSort": null}, {
            "id": 2200,
            "countryName": "泸西县",
            "cityId": 278,
            "DisSort": null
        }, {"id": 2201, "countryName": "元阳县", "cityId": 278, "DisSort": null}, {
            "id": 2202,
            "countryName": "红河县",
            "cityId": 278,
            "DisSort": null
        }, {"id": 2203, "countryName": "金平苗族瑶族傣族自治县", "cityId": 278, "DisSort": null}, {
            "id": 2204,
            "countryName": "绿春县",
            "cityId": 278,
            "DisSort": null
        }, {"id": 2205, "countryName": "河口瑶族自治县", "cityId": 278, "DisSort": null}, {
            "id": 2206,
            "countryName": "麒麟区",
            "cityId": 279,
            "DisSort": null
        }, {"id": 2207, "countryName": "马龙县", "cityId": 279, "DisSort": null}, {
            "id": 2208,
            "countryName": "陆良县",
            "cityId": 279,
            "DisSort": null
        }, {"id": 2209, "countryName": "师宗县", "cityId": 279, "DisSort": null}, {
            "id": 2210,
            "countryName": "罗平县",
            "cityId": 279,
            "DisSort": null
        }, {"id": 2211, "countryName": "富源县", "cityId": 279, "DisSort": null}, {
            "id": 2212,
            "countryName": "会泽县",
            "cityId": 279,
            "DisSort": null
        }, {"id": 2213, "countryName": "沾益县", "cityId": 279, "DisSort": null}, {
            "id": 2214,
            "countryName": "宣威市",
            "cityId": 279,
            "DisSort": null
        }, {"id": 2215, "countryName": "隆阳区", "cityId": 280, "DisSort": null}, {
            "id": 2216,
            "countryName": "施甸县",
            "cityId": 280,
            "DisSort": null
        }, {"id": 2217, "countryName": "腾冲县", "cityId": 280, "DisSort": null}, {
            "id": 2218,
            "countryName": "龙陵县",
            "cityId": 280,
            "DisSort": null
        }, {"id": 2219, "countryName": "昌宁县", "cityId": 280, "DisSort": null}, {
            "id": 2220,
            "countryName": "文山县",
            "cityId": 281,
            "DisSort": null
        }, {"id": 2221, "countryName": "砚山县", "cityId": 281, "DisSort": null}, {
            "id": 2222,
            "countryName": "西畴县",
            "cityId": 281,
            "DisSort": null
        }, {"id": 2223, "countryName": "麻栗坡县", "cityId": 281, "DisSort": null}, {
            "id": 2224,
            "countryName": "马关县",
            "cityId": 281,
            "DisSort": null
        }, {"id": 2225, "countryName": "丘北县", "cityId": 281, "DisSort": null}, {
            "id": 2226,
            "countryName": "广南县",
            "cityId": 281,
            "DisSort": null
        }, {"id": 2227, "countryName": "富宁县", "cityId": 281, "DisSort": null}, {
            "id": 2228,
            "countryName": "红塔区",
            "cityId": 282,
            "DisSort": null
        }, {"id": 2229, "countryName": "江川县", "cityId": 282, "DisSort": null}, {
            "id": 2230,
            "countryName": "澄江县",
            "cityId": 282,
            "DisSort": null
        }, {"id": 2231, "countryName": "通海县", "cityId": 282, "DisSort": null}, {
            "id": 2232,
            "countryName": "华宁县",
            "cityId": 282,
            "DisSort": null
        }, {"id": 2233, "countryName": "易门县", "cityId": 282, "DisSort": null}, {
            "id": 2234,
            "countryName": "峨山彝族自治县",
            "cityId": 282,
            "DisSort": null
        }, {"id": 2235, "countryName": "新平彝族傣族自治县", "cityId": 282, "DisSort": null}, {
            "id": 2236,
            "countryName": "元江哈尼族彝族傣族自治县",
            "cityId": 282,
            "DisSort": null
        }, {"id": 2237, "countryName": "楚雄市", "cityId": 283, "DisSort": null}, {
            "id": 2238,
            "countryName": "双柏县",
            "cityId": 283,
            "DisSort": null
        }, {"id": 2239, "countryName": "牟定县", "cityId": 283, "DisSort": null}, {
            "id": 2240,
            "countryName": "南华县",
            "cityId": 283,
            "DisSort": null
        }, {"id": 2241, "countryName": "姚安县", "cityId": 283, "DisSort": null}, {
            "id": 2242,
            "countryName": "大姚县",
            "cityId": 283,
            "DisSort": null
        }, {"id": 2243, "countryName": "永仁县", "cityId": 283, "DisSort": null}, {
            "id": 2244,
            "countryName": "元谋县",
            "cityId": 283,
            "DisSort": null
        }, {"id": 2245, "countryName": "武定县", "cityId": 283, "DisSort": null}, {
            "id": 2246,
            "countryName": "禄丰县",
            "cityId": 283,
            "DisSort": null
        }, {"id": 2247, "countryName": "思茅区", "cityId": 284, "DisSort": null}, {
            "id": 2248,
            "countryName": "宁洱哈尼族彝族自治县",
            "cityId": 284,
            "DisSort": null
        }, {"id": 2249, "countryName": "墨江哈尼族自治县", "cityId": 284, "DisSort": null}, {
            "id": 2250,
            "countryName": "景东彝族自治县",
            "cityId": 284,
            "DisSort": null
        }, {"id": 2251, "countryName": "景谷傣族彝族自治县", "cityId": 284, "DisSort": null}, {
            "id": 2252,
            "countryName": "镇沅彝族哈尼族拉祜族自治县",
            "cityId": 284,
            "DisSort": null
        }, {"id": 2253, "countryName": "江城哈尼族彝族自治县", "cityId": 284, "DisSort": null}, {
            "id": 2254,
            "countryName": "孟连傣族拉祜族佤族自治县",
            "cityId": 284,
            "DisSort": null
        }, {"id": 2255, "countryName": "澜沧拉祜族自治县", "cityId": 284, "DisSort": null}, {
            "id": 2256,
            "countryName": "西盟佤族自治县",
            "cityId": 284,
            "DisSort": null
        }, {"id": 2257, "countryName": "临翔区", "cityId": 285, "DisSort": null}, {
            "id": 2258,
            "countryName": "凤庆县",
            "cityId": 285,
            "DisSort": null
        }, {"id": 2259, "countryName": "云县", "cityId": 285, "DisSort": null}, {
            "id": 2260,
            "countryName": "永德县",
            "cityId": 285,
            "DisSort": null
        }, {"id": 2261, "countryName": "镇康县", "cityId": 285, "DisSort": null}, {
            "id": 2262,
            "countryName": "双江拉祜族佤族布朗族傣族自治县",
            "cityId": 285,
            "DisSort": null
        }, {"id": 2263, "countryName": "耿马傣族佤族自治县", "cityId": 285, "DisSort": null}, {
            "id": 2264,
            "countryName": "沧源佤族自治县",
            "cityId": 285,
            "DisSort": null
        }, {"id": 2265, "countryName": "泸水县", "cityId": 286, "DisSort": null}, {
            "id": 2266,
            "countryName": "福贡县",
            "cityId": 286,
            "DisSort": null
        }, {"id": 2267, "countryName": "贡山独龙族怒族自治县", "cityId": 286, "DisSort": null}, {
            "id": 2268,
            "countryName": "兰坪白族普米族自治县",
            "cityId": 286,
            "DisSort": null
        }, {"id": 2269, "countryName": "香格里拉县", "cityId": 287, "DisSort": null}, {
            "id": 2270,
            "countryName": "德钦县",
            "cityId": 287,
            "DisSort": null
        }, {"id": 2271, "countryName": "维西傈僳族自治县", "cityId": 287, "DisSort": null}, {
            "id": 2272,
            "countryName": "古城区",
            "cityId": 288,
            "DisSort": null
        }, {"id": 2273, "countryName": "玉龙纳西族自治县", "cityId": 288, "DisSort": null}, {
            "id": 2274,
            "countryName": "永胜县",
            "cityId": 288,
            "DisSort": null
        }, {"id": 2275, "countryName": "华坪县", "cityId": 288, "DisSort": null}, {
            "id": 2276,
            "countryName": "宁蒗彝族自治县",
            "cityId": 288,
            "DisSort": null
        }, {"id": 2277, "countryName": "门源回族自治县", "cityId": 289, "DisSort": null}, {
            "id": 2278,
            "countryName": "祁连县",
            "cityId": 289,
            "DisSort": null
        }, {"id": 2279, "countryName": "海晏县", "cityId": 289, "DisSort": null}, {
            "id": 2280,
            "countryName": "刚察县",
            "cityId": 289,
            "DisSort": null
        }, {"id": 2281, "countryName": "城东区", "cityId": 290, "DisSort": null}, {
            "id": 2282,
            "countryName": "城中区",
            "cityId": 290,
            "DisSort": null
        }, {"id": 2283, "countryName": "城西区", "cityId": 290, "DisSort": null}, {
            "id": 2284,
            "countryName": "城北区",
            "cityId": 290,
            "DisSort": null
        }, {"id": 2285, "countryName": "大通回族土族自治县", "cityId": 290, "DisSort": null}, {
            "id": 2286,
            "countryName": "湟中县",
            "cityId": 290,
            "DisSort": null
        }, {"id": 2287, "countryName": "湟源县", "cityId": 290, "DisSort": null}, {
            "id": 2288,
            "countryName": "平安县",
            "cityId": 291,
            "DisSort": null
        }, {"id": 2289, "countryName": "民和回族土族自治县", "cityId": 291, "DisSort": null}, {
            "id": 2290,
            "countryName": "乐都县",
            "cityId": 291,
            "DisSort": null
        }, {"id": 2291, "countryName": "互助土族自治县", "cityId": 291, "DisSort": null}, {
            "id": 2292,
            "countryName": "化隆回族自治县",
            "cityId": 291,
            "DisSort": null
        }, {"id": 2293, "countryName": "循化撒拉族自治县", "cityId": 291, "DisSort": null}, {
            "id": 2294,
            "countryName": "同仁县",
            "cityId": 292,
            "DisSort": null
        }, {"id": 2295, "countryName": "尖扎县", "cityId": 292, "DisSort": null}, {
            "id": 2296,
            "countryName": "泽库县",
            "cityId": 292,
            "DisSort": null
        }, {"id": 2297, "countryName": "河南蒙古族自治县", "cityId": 292, "DisSort": null}, {
            "id": 2298,
            "countryName": "共和县",
            "cityId": 293,
            "DisSort": null
        }, {"id": 2299, "countryName": "同德县", "cityId": 293, "DisSort": null}, {
            "id": 2300,
            "countryName": "贵德县",
            "cityId": 293,
            "DisSort": null
        }, {"id": 2301, "countryName": "兴海县", "cityId": 293, "DisSort": null}, {
            "id": 2302,
            "countryName": "贵南县",
            "cityId": 293,
            "DisSort": null
        }, {"id": 2303, "countryName": "玛沁县", "cityId": 294, "DisSort": null}, {
            "id": 2304,
            "countryName": "班玛县",
            "cityId": 294,
            "DisSort": null
        }, {"id": 2305, "countryName": "甘德县", "cityId": 294, "DisSort": null}, {
            "id": 2306,
            "countryName": "达日县",
            "cityId": 294,
            "DisSort": null
        }, {"id": 2307, "countryName": "久治县", "cityId": 294, "DisSort": null}, {
            "id": 2308,
            "countryName": "玛多县",
            "cityId": 294,
            "DisSort": null
        }, {"id": 2309, "countryName": "玉树县", "cityId": 295, "DisSort": null}, {
            "id": 2310,
            "countryName": "杂多县",
            "cityId": 295,
            "DisSort": null
        }, {"id": 2311, "countryName": "称多县", "cityId": 295, "DisSort": null}, {
            "id": 2312,
            "countryName": "治多县",
            "cityId": 295,
            "DisSort": null
        }, {"id": 2313, "countryName": "囊谦县", "cityId": 295, "DisSort": null}, {
            "id": 2314,
            "countryName": "曲麻莱县",
            "cityId": 295,
            "DisSort": null
        }, {"id": 2315, "countryName": "格尔木市", "cityId": 296, "DisSort": null}, {
            "id": 2316,
            "countryName": "德令哈市",
            "cityId": 296,
            "DisSort": null
        }, {"id": 2317, "countryName": "乌兰县", "cityId": 296, "DisSort": null}, {
            "id": 2318,
            "countryName": "都兰县",
            "cityId": 296,
            "DisSort": null
        }, {"id": 2319, "countryName": "天峻县", "cityId": 296, "DisSort": null}, {
            "id": 2320,
            "countryName": "新城区",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2321, "countryName": "碑林区", "cityId": 297, "DisSort": null}, {
            "id": 2322,
            "countryName": "莲湖区",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2323, "countryName": "灞桥区", "cityId": 297, "DisSort": null}, {
            "id": 2324,
            "countryName": "未央区",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2325, "countryName": "雁塔区", "cityId": 297, "DisSort": null}, {
            "id": 2326,
            "countryName": "阎良区",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2327, "countryName": "临潼区", "cityId": 297, "DisSort": null}, {
            "id": 2328,
            "countryName": "长安区",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2329, "countryName": "蓝田县", "cityId": 297, "DisSort": null}, {
            "id": 2330,
            "countryName": "周至县",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2331, "countryName": "户县", "cityId": 297, "DisSort": null}, {
            "id": 2332,
            "countryName": "高陵县",
            "cityId": 297,
            "DisSort": null
        }, {"id": 2333, "countryName": "秦都区", "cityId": 298, "DisSort": null}, {
            "id": 2334,
            "countryName": "杨陵区",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2335, "countryName": "渭城区", "cityId": 298, "DisSort": null}, {
            "id": 2336,
            "countryName": "三原县",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2337, "countryName": "泾阳县", "cityId": 298, "DisSort": null}, {
            "id": 2338,
            "countryName": "乾县",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2339, "countryName": "礼泉县", "cityId": 298, "DisSort": null}, {
            "id": 2340,
            "countryName": "永寿县",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2341, "countryName": "彬县", "cityId": 298, "DisSort": null}, {
            "id": 2342,
            "countryName": "长武县",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2343, "countryName": "旬邑县", "cityId": 298, "DisSort": null}, {
            "id": 2344,
            "countryName": "淳化县",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2345, "countryName": "武功县", "cityId": 298, "DisSort": null}, {
            "id": 2346,
            "countryName": "兴平市",
            "cityId": 298,
            "DisSort": null
        }, {"id": 2347, "countryName": "宝塔区", "cityId": 299, "DisSort": null}, {
            "id": 2348,
            "countryName": "延长县",
            "cityId": 299,
            "DisSort": null
        }, {"id": 2349, "countryName": "延川县", "cityId": 299, "DisSort": null}, {
            "id": 2350,
            "countryName": "子长县",
            "cityId": 299,
            "DisSort": null
        }, {"id": 2351, "countryName": "安塞县", "cityId": 299, "DisSort": null}, {
            "id": 2352,
            "countryName": "志丹县",
            "cityId": 299,
            "DisSort": null
        }, {"id": 2353, "countryName": "吴起县", "cityId": 299, "DisSort": null}, {
            "id": 2354,
            "countryName": "甘泉县",
            "cityId": 299,
            "DisSort": null
        }, {"id": 2355, "countryName": "富县", "cityId": 299, "DisSort": null}, {
            "id": 2356,
            "countryName": "洛川县",
            "cityId": 299,
            "DisSort": null
        }, {"id": 2357, "countryName": "宜川县", "cityId": 299, "DisSort": null}, {
            "id": 2358,
            "countryName": "黄龙县",
            "cityId": 299,
            "DisSort": null
        }, {"id": 2359, "countryName": "黄陵县", "cityId": 299, "DisSort": null}, {
            "id": 2360,
            "countryName": "榆阳区",
            "cityId": 300,
            "DisSort": null
        }, {"id": 2361, "countryName": "神木县", "cityId": 300, "DisSort": null}, {
            "id": 2362,
            "countryName": "府谷县",
            "cityId": 300,
            "DisSort": null
        }, {"id": 2363, "countryName": "横山县", "cityId": 300, "DisSort": null}, {
            "id": 2364,
            "countryName": "靖边县",
            "cityId": 300,
            "DisSort": null
        }, {"id": 2365, "countryName": "定边县", "cityId": 300, "DisSort": null}, {
            "id": 2366,
            "countryName": "绥德县",
            "cityId": 300,
            "DisSort": null
        }, {"id": 2367, "countryName": "米脂县", "cityId": 300, "DisSort": null}, {
            "id": 2368,
            "countryName": "佳县",
            "cityId": 300,
            "DisSort": null
        }, {"id": 2369, "countryName": "吴堡县", "cityId": 300, "DisSort": null}, {
            "id": 2370,
            "countryName": "清涧县",
            "cityId": 300,
            "DisSort": null
        }, {"id": 2371, "countryName": "子洲县", "cityId": 300, "DisSort": null}, {
            "id": 2372,
            "countryName": "临渭区",
            "cityId": 301,
            "DisSort": null
        }, {"id": 2373, "countryName": "华县", "cityId": 301, "DisSort": null}, {
            "id": 2374,
            "countryName": "潼关县",
            "cityId": 301,
            "DisSort": null
        }, {"id": 2375, "countryName": "大荔县", "cityId": 301, "DisSort": null}, {
            "id": 2376,
            "countryName": "合阳县",
            "cityId": 301,
            "DisSort": null
        }, {"id": 2377, "countryName": "澄城县", "cityId": 301, "DisSort": null}, {
            "id": 2378,
            "countryName": "蒲城县",
            "cityId": 301,
            "DisSort": null
        }, {"id": 2379, "countryName": "白水县", "cityId": 301, "DisSort": null}, {
            "id": 2380,
            "countryName": "富平县",
            "cityId": 301,
            "DisSort": null
        }, {"id": 2381, "countryName": "韩城市", "cityId": 301, "DisSort": null}, {
            "id": 2382,
            "countryName": "华阴市",
            "cityId": 301,
            "DisSort": null
        }, {"id": 2383, "countryName": "商州区", "cityId": 302, "DisSort": null}, {
            "id": 2384,
            "countryName": "洛南县",
            "cityId": 302,
            "DisSort": null
        }, {"id": 2385, "countryName": "丹凤县", "cityId": 302, "DisSort": null}, {
            "id": 2386,
            "countryName": "商南县",
            "cityId": 302,
            "DisSort": null
        }, {"id": 2387, "countryName": "山阳县", "cityId": 302, "DisSort": null}, {
            "id": 2388,
            "countryName": "镇安县",
            "cityId": 302,
            "DisSort": null
        }, {"id": 2389, "countryName": "柞水县", "cityId": 302, "DisSort": null}, {
            "id": 2390,
            "countryName": "汉滨区",
            "cityId": 303,
            "DisSort": null
        }, {"id": 2391, "countryName": "汉阴县", "cityId": 303, "DisSort": null}, {
            "id": 2392,
            "countryName": "石泉县",
            "cityId": 303,
            "DisSort": null
        }, {"id": 2393, "countryName": "宁陕县", "cityId": 303, "DisSort": null}, {
            "id": 2394,
            "countryName": "紫阳县",
            "cityId": 303,
            "DisSort": null
        }, {"id": 2395, "countryName": "岚皋县", "cityId": 303, "DisSort": null}, {
            "id": 2396,
            "countryName": "平利县",
            "cityId": 303,
            "DisSort": null
        }, {"id": 2397, "countryName": "镇坪县", "cityId": 303, "DisSort": null}, {
            "id": 2398,
            "countryName": "旬阳县",
            "cityId": 303,
            "DisSort": null
        }, {"id": 2399, "countryName": "白河县", "cityId": 303, "DisSort": null}, {
            "id": 2400,
            "countryName": "汉台区",
            "cityId": 304,
            "DisSort": null
        }, {"id": 2401, "countryName": "南郑县", "cityId": 304, "DisSort": null}, {
            "id": 2402,
            "countryName": "城固县",
            "cityId": 304,
            "DisSort": null
        }, {"id": 2403, "countryName": "洋县", "cityId": 304, "DisSort": null}, {
            "id": 2404,
            "countryName": "西乡县",
            "cityId": 304,
            "DisSort": null
        }, {"id": 2405, "countryName": "勉县", "cityId": 304, "DisSort": null}, {
            "id": 2406,
            "countryName": "宁强县",
            "cityId": 304,
            "DisSort": null
        }, {"id": 2407, "countryName": "略阳县", "cityId": 304, "DisSort": null}, {
            "id": 2408,
            "countryName": "镇巴县",
            "cityId": 304,
            "DisSort": null
        }, {"id": 2409, "countryName": "留坝县", "cityId": 304, "DisSort": null}, {
            "id": 2410,
            "countryName": "佛坪县",
            "cityId": 304,
            "DisSort": null
        }, {"id": 2411, "countryName": "渭滨区", "cityId": 305, "DisSort": null}, {
            "id": 2412,
            "countryName": "金台区",
            "cityId": 305,
            "DisSort": null
        }, {"id": 2413, "countryName": "陈仓区", "cityId": 305, "DisSort": null}, {
            "id": 2414,
            "countryName": "凤翔县",
            "cityId": 305,
            "DisSort": null
        }, {"id": 2415, "countryName": "岐山县", "cityId": 305, "DisSort": null}, {
            "id": 2416,
            "countryName": "扶风县",
            "cityId": 305,
            "DisSort": null
        }, {"id": 2417, "countryName": "眉县", "cityId": 305, "DisSort": null}, {
            "id": 2418,
            "countryName": "陇县",
            "cityId": 305,
            "DisSort": null
        }, {"id": 2419, "countryName": "千阳县", "cityId": 305, "DisSort": null}, {
            "id": 2420,
            "countryName": "麟游县",
            "cityId": 305,
            "DisSort": null
        }, {"id": 2421, "countryName": "凤县", "cityId": 305, "DisSort": null}, {
            "id": 2422,
            "countryName": "太白县",
            "cityId": 305,
            "DisSort": null
        }, {"id": 2423, "countryName": "王益区", "cityId": 306, "DisSort": null}, {
            "id": 2424,
            "countryName": "印台区",
            "cityId": 306,
            "DisSort": null
        }, {"id": 2425, "countryName": "耀州区", "cityId": 306, "DisSort": null}, {
            "id": 2426,
            "countryName": "宜君县",
            "cityId": 306,
            "DisSort": null
        }, {"id": 2427, "countryName": "港口区", "cityId": 307, "DisSort": null}, {
            "id": 2428,
            "countryName": "防城区",
            "cityId": 307,
            "DisSort": null
        }, {"id": 2429, "countryName": "上思县", "cityId": 307, "DisSort": null}, {
            "id": 2430,
            "countryName": "东兴市",
            "cityId": 307,
            "DisSort": null
        }, {"id": 2431, "countryName": "兴宁区", "cityId": 308, "DisSort": null}, {
            "id": 2432,
            "countryName": "青秀区",
            "cityId": 308,
            "DisSort": null
        }, {"id": 2433, "countryName": "江南区", "cityId": 308, "DisSort": null}, {
            "id": 2434,
            "countryName": "西乡塘区",
            "cityId": 308,
            "DisSort": null
        }, {"id": 2435, "countryName": "良庆区", "cityId": 308, "DisSort": null}, {
            "id": 2436,
            "countryName": "邕宁区",
            "cityId": 308,
            "DisSort": null
        }, {"id": 2437, "countryName": "武鸣县", "cityId": 308, "DisSort": null}, {
            "id": 2438,
            "countryName": "隆安县",
            "cityId": 308,
            "DisSort": null
        }, {"id": 2439, "countryName": "马山县", "cityId": 308, "DisSort": null}, {
            "id": 2440,
            "countryName": "上林县",
            "cityId": 308,
            "DisSort": null
        }, {"id": 2441, "countryName": "宾阳县", "cityId": 308, "DisSort": null}, {
            "id": 2442,
            "countryName": "横县",
            "cityId": 308,
            "DisSort": null
        }, {"id": 2443, "countryName": "江洲区", "cityId": 309, "DisSort": null}, {
            "id": 2444,
            "countryName": "扶绥县",
            "cityId": 309,
            "DisSort": null
        }, {"id": 2445, "countryName": "宁明县", "cityId": 309, "DisSort": null}, {
            "id": 2446,
            "countryName": "龙州县",
            "cityId": 309,
            "DisSort": null
        }, {"id": 2447, "countryName": "大新县", "cityId": 309, "DisSort": null}, {
            "id": 2448,
            "countryName": "天等县",
            "cityId": 309,
            "DisSort": null
        }, {"id": 2449, "countryName": "凭祥市", "cityId": 309, "DisSort": null}, {
            "id": 2450,
            "countryName": "兴宾区",
            "cityId": 310,
            "DisSort": null
        }, {"id": 2451, "countryName": "忻城县", "cityId": 310, "DisSort": null}, {
            "id": 2452,
            "countryName": "象州县",
            "cityId": 310,
            "DisSort": null
        }, {"id": 2453, "countryName": "武宣县", "cityId": 310, "DisSort": null}, {
            "id": 2454,
            "countryName": "金秀瑶族自治县",
            "cityId": 310,
            "DisSort": null
        }, {"id": 2455, "countryName": "合山市", "cityId": 310, "DisSort": null}, {
            "id": 2456,
            "countryName": "城中区",
            "cityId": 311,
            "DisSort": null
        }, {"id": 2457, "countryName": "鱼峰区", "cityId": 311, "DisSort": null}, {
            "id": 2458,
            "countryName": "柳南区",
            "cityId": 311,
            "DisSort": null
        }, {"id": 2459, "countryName": "柳北区", "cityId": 311, "DisSort": null}, {
            "id": 2460,
            "countryName": "柳江县",
            "cityId": 311,
            "DisSort": null
        }, {"id": 2461, "countryName": "柳城县", "cityId": 311, "DisSort": null}, {
            "id": 2462,
            "countryName": "鹿寨县",
            "cityId": 311,
            "DisSort": null
        }, {"id": 2463, "countryName": "融安县", "cityId": 311, "DisSort": null}, {
            "id": 2464,
            "countryName": "融水苗族自治县",
            "cityId": 311,
            "DisSort": null
        }, {"id": 2465, "countryName": "三江侗族自治县", "cityId": 311, "DisSort": null}, {
            "id": 2466,
            "countryName": "秀峰区",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2467, "countryName": "叠彩区", "cityId": 312, "DisSort": null}, {
            "id": 2468,
            "countryName": "象山区",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2469, "countryName": "七星区", "cityId": 312, "DisSort": null}, {
            "id": 2470,
            "countryName": "雁山区",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2471, "countryName": "阳朔县", "cityId": 312, "DisSort": null}, {
            "id": 2472,
            "countryName": "临桂县",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2473, "countryName": "灵川县", "cityId": 312, "DisSort": null}, {
            "id": 2474,
            "countryName": "全州县",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2475, "countryName": "兴安县", "cityId": 312, "DisSort": null}, {
            "id": 2476,
            "countryName": "永福县",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2477, "countryName": "灌阳县", "cityId": 312, "DisSort": null}, {
            "id": 2478,
            "countryName": "龙胜各族自治县",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2479, "countryName": "资源县", "cityId": 312, "DisSort": null}, {
            "id": 2480,
            "countryName": "平乐县",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2481, "countryName": "荔浦县", "cityId": 312, "DisSort": null}, {
            "id": 2482,
            "countryName": "恭城瑶族自治县",
            "cityId": 312,
            "DisSort": null
        }, {"id": 2483, "countryName": "万秀区", "cityId": 313, "DisSort": null}, {
            "id": 2484,
            "countryName": "碟山区",
            "cityId": 313,
            "DisSort": null
        }, {"id": 2485, "countryName": "长洲区", "cityId": 313, "DisSort": null}, {
            "id": 2486,
            "countryName": "苍梧县",
            "cityId": 313,
            "DisSort": null
        }, {"id": 2487, "countryName": "藤县", "cityId": 313, "DisSort": null}, {
            "id": 2488,
            "countryName": "蒙山县",
            "cityId": 313,
            "DisSort": null
        }, {"id": 2489, "countryName": "岑溪市", "cityId": 313, "DisSort": null}, {
            "id": 2490,
            "countryName": "八步区",
            "cityId": 314,
            "DisSort": null
        }, {"id": 2491, "countryName": "昭平县", "cityId": 314, "DisSort": null}, {
            "id": 2492,
            "countryName": "钟山县",
            "cityId": 314,
            "DisSort": null
        }, {"id": 2493, "countryName": "富川瑶族自治县", "cityId": 314, "DisSort": null}, {
            "id": 2494,
            "countryName": "港北区",
            "cityId": 315,
            "DisSort": null
        }, {"id": 2495, "countryName": "港南区", "cityId": 315, "DisSort": null}, {
            "id": 2496,
            "countryName": "覃塘区",
            "cityId": 315,
            "DisSort": null
        }, {"id": 2497, "countryName": "平南县", "cityId": 315, "DisSort": null}, {
            "id": 2498,
            "countryName": "桂平市",
            "cityId": 315,
            "DisSort": null
        }, {"id": 2499, "countryName": "玉州区", "cityId": 316, "DisSort": null}, {
            "id": 2500,
            "countryName": "容县",
            "cityId": 316,
            "DisSort": null
        }, {"id": 2501, "countryName": "陆川县", "cityId": 316, "DisSort": null}, {
            "id": 2502,
            "countryName": "博白县",
            "cityId": 316,
            "DisSort": null
        }, {"id": 2503, "countryName": "兴业县", "cityId": 316, "DisSort": null}, {
            "id": 2504,
            "countryName": "北流市",
            "cityId": 316,
            "DisSort": null
        }, {"id": 2505, "countryName": "右江区", "cityId": 317, "DisSort": null}, {
            "id": 2506,
            "countryName": "田阳县",
            "cityId": 317,
            "DisSort": null
        }, {"id": 2507, "countryName": "田东县", "cityId": 317, "DisSort": null}, {
            "id": 2508,
            "countryName": "平果县",
            "cityId": 317,
            "DisSort": null
        }, {"id": 2509, "countryName": "德保县", "cityId": 317, "DisSort": null}, {
            "id": 2510,
            "countryName": "靖西县",
            "cityId": 317,
            "DisSort": null
        }, {"id": 2511, "countryName": "那坡县", "cityId": 317, "DisSort": null}, {
            "id": 2512,
            "countryName": "凌云县",
            "cityId": 317,
            "DisSort": null
        }, {"id": 2513, "countryName": "乐业县", "cityId": 317, "DisSort": null}, {
            "id": 2514,
            "countryName": "田林县",
            "cityId": 317,
            "DisSort": null
        }, {"id": 2515, "countryName": "西林县", "cityId": 317, "DisSort": null}, {
            "id": 2516,
            "countryName": "隆林各族自治县",
            "cityId": 317,
            "DisSort": null
        }, {"id": 2517, "countryName": "钦南区", "cityId": 318, "DisSort": null}, {
            "id": 2518,
            "countryName": "钦北区",
            "cityId": 318,
            "DisSort": null
        }, {"id": 2519, "countryName": "灵山县", "cityId": 318, "DisSort": null}, {
            "id": 2520,
            "countryName": "浦北县",
            "cityId": 318,
            "DisSort": null
        }, {"id": 2521, "countryName": "金城江区", "cityId": 319, "DisSort": null}, {
            "id": 2522,
            "countryName": "南丹县",
            "cityId": 319,
            "DisSort": null
        }, {"id": 2523, "countryName": "天峨县", "cityId": 319, "DisSort": null}, {
            "id": 2524,
            "countryName": "凤山县",
            "cityId": 319,
            "DisSort": null
        }, {"id": 2525, "countryName": "东兰县", "cityId": 319, "DisSort": null}, {
            "id": 2526,
            "countryName": "罗城仫佬族自治县",
            "cityId": 319,
            "DisSort": null
        }, {"id": 2527, "countryName": "环江毛南族自治县", "cityId": 319, "DisSort": null}, {
            "id": 2528,
            "countryName": "巴马瑶族自治县",
            "cityId": 319,
            "DisSort": null
        }, {"id": 2529, "countryName": "都安瑶族自治县", "cityId": 319, "DisSort": null}, {
            "id": 2530,
            "countryName": "大化瑶族自治县",
            "cityId": 319,
            "DisSort": null
        }, {"id": 2531, "countryName": "宜州市", "cityId": 319, "DisSort": null}, {
            "id": 2532,
            "countryName": "海城区",
            "cityId": 320,
            "DisSort": null
        }, {"id": 2533, "countryName": "银海区", "cityId": 320, "DisSort": null}, {
            "id": 2534,
            "countryName": "铁山港区",
            "cityId": 320,
            "DisSort": null
        }, {"id": 2535, "countryName": "合浦县", "cityId": 320, "DisSort": null}, {
            "id": 2536,
            "countryName": "城关区",
            "cityId": 321,
            "DisSort": null
        }, {"id": 2537, "countryName": "林周县", "cityId": 321, "DisSort": null}, {
            "id": 2538,
            "countryName": "当雄县",
            "cityId": 321,
            "DisSort": null
        }, {"id": 2539, "countryName": "尼木县", "cityId": 321, "DisSort": null}, {
            "id": 2540,
            "countryName": "曲水县",
            "cityId": 321,
            "DisSort": null
        }, {"id": 2541, "countryName": "堆龙德庆县", "cityId": 321, "DisSort": null}, {
            "id": 2542,
            "countryName": "达孜县",
            "cityId": 321,
            "DisSort": null
        }, {"id": 2543, "countryName": "墨竹工卡县", "cityId": 321, "DisSort": null}, {
            "id": 2544,
            "countryName": "日喀则市",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2545, "countryName": "南木林县", "cityId": 322, "DisSort": null}, {
            "id": 2546,
            "countryName": "江孜县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2547, "countryName": "定日县", "cityId": 322, "DisSort": null}, {
            "id": 2548,
            "countryName": "萨迦县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2549, "countryName": "拉孜县", "cityId": 322, "DisSort": null}, {
            "id": 2550,
            "countryName": "昂仁县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2551, "countryName": "谢通门县", "cityId": 322, "DisSort": null}, {
            "id": 2552,
            "countryName": "白朗县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2553, "countryName": "仁布县", "cityId": 322, "DisSort": null}, {
            "id": 2554,
            "countryName": "康马县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2555, "countryName": "定结县", "cityId": 322, "DisSort": null}, {
            "id": 2556,
            "countryName": "仲巴县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2557, "countryName": "亚东县", "cityId": 322, "DisSort": null}, {
            "id": 2558,
            "countryName": "吉隆县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2559, "countryName": "聂拉木县", "cityId": 322, "DisSort": null}, {
            "id": 2560,
            "countryName": "萨嘎县",
            "cityId": 322,
            "DisSort": null
        }, {"id": 2561, "countryName": "岗巴县", "cityId": 322, "DisSort": null}, {
            "id": 2562,
            "countryName": "乃东县",
            "cityId": 323,
            "DisSort": null
        }, {"id": 2563, "countryName": "扎囊县", "cityId": 323, "DisSort": null}, {
            "id": 2564,
            "countryName": "贡嘎县",
            "cityId": 323,
            "DisSort": null
        }, {"id": 2565, "countryName": "桑日县", "cityId": 323, "DisSort": null}, {
            "id": 2566,
            "countryName": "琼结县",
            "cityId": 323,
            "DisSort": null
        }, {"id": 2567, "countryName": "曲松县", "cityId": 323, "DisSort": null}, {
            "id": 2568,
            "countryName": "措美县",
            "cityId": 323,
            "DisSort": null
        }, {"id": 2569, "countryName": "洛扎县", "cityId": 323, "DisSort": null}, {
            "id": 2570,
            "countryName": "加查县",
            "cityId": 323,
            "DisSort": null
        }, {"id": 2571, "countryName": "隆子县", "cityId": 323, "DisSort": null}, {
            "id": 2572,
            "countryName": "错那县",
            "cityId": 323,
            "DisSort": null
        }, {"id": 2573, "countryName": "浪卡子县", "cityId": 323, "DisSort": null}, {
            "id": 2574,
            "countryName": "林芝县",
            "cityId": 324,
            "DisSort": null
        }, {"id": 2575, "countryName": "工布江达县", "cityId": 324, "DisSort": null}, {
            "id": 2576,
            "countryName": "米林县",
            "cityId": 324,
            "DisSort": null
        }, {"id": 2577, "countryName": "墨脱县", "cityId": 324, "DisSort": null}, {
            "id": 2578,
            "countryName": "波密县",
            "cityId": 324,
            "DisSort": null
        }, {"id": 2579, "countryName": "察隅县", "cityId": 324, "DisSort": null}, {
            "id": 2580,
            "countryName": "朗县",
            "cityId": 324,
            "DisSort": null
        }, {"id": 2581, "countryName": "昌都县", "cityId": 325, "DisSort": null}, {
            "id": 2582,
            "countryName": "江达县",
            "cityId": 325,
            "DisSort": null
        }, {"id": 2583, "countryName": "贡觉县", "cityId": 325, "DisSort": null}, {
            "id": 2584,
            "countryName": "类乌齐县",
            "cityId": 325,
            "DisSort": null
        }, {"id": 2585, "countryName": "丁青县", "cityId": 325, "DisSort": null}, {
            "id": 2586,
            "countryName": "察雅县",
            "cityId": 325,
            "DisSort": null
        }, {"id": 2587, "countryName": "八宿县", "cityId": 325, "DisSort": null}, {
            "id": 2588,
            "countryName": "左贡县",
            "cityId": 325,
            "DisSort": null
        }, {"id": 2589, "countryName": "芒康县", "cityId": 325, "DisSort": null}, {
            "id": 2590,
            "countryName": "洛隆县",
            "cityId": 325,
            "DisSort": null
        }, {"id": 2591, "countryName": "边坝县", "cityId": 325, "DisSort": null}, {
            "id": 2592,
            "countryName": "那曲县",
            "cityId": 326,
            "DisSort": null
        }, {"id": 2593, "countryName": "嘉黎县", "cityId": 326, "DisSort": null}, {
            "id": 2594,
            "countryName": "比如县",
            "cityId": 326,
            "DisSort": null
        }, {"id": 2595, "countryName": "聂荣县", "cityId": 326, "DisSort": null}, {
            "id": 2596,
            "countryName": "安多县",
            "cityId": 326,
            "DisSort": null
        }, {"id": 2597, "countryName": "申扎县", "cityId": 326, "DisSort": null}, {
            "id": 2598,
            "countryName": "索县",
            "cityId": 326,
            "DisSort": null
        }, {"id": 2599, "countryName": "班戈县", "cityId": 326, "DisSort": null}, {
            "id": 2600,
            "countryName": "巴青县",
            "cityId": 326,
            "DisSort": null
        }, {"id": 2601, "countryName": "尼玛县", "cityId": 326, "DisSort": null}, {
            "id": 2602,
            "countryName": "普兰县",
            "cityId": 327,
            "DisSort": null
        }, {"id": 2603, "countryName": "札达县", "cityId": 327, "DisSort": null}, {
            "id": 2604,
            "countryName": "噶尔县",
            "cityId": 327,
            "DisSort": null
        }, {"id": 2605, "countryName": "日土县", "cityId": 327, "DisSort": null}, {
            "id": 2606,
            "countryName": "革吉县",
            "cityId": 327,
            "DisSort": null
        }, {"id": 2607, "countryName": "改则县", "cityId": 327, "DisSort": null}, {
            "id": 2608,
            "countryName": "措勤县",
            "cityId": 327,
            "DisSort": null
        }, {"id": 2609, "countryName": "兴庆区", "cityId": 328, "DisSort": null}, {
            "id": 2610,
            "countryName": "西夏区",
            "cityId": 328,
            "DisSort": null
        }, {"id": 2611, "countryName": "金凤区", "cityId": 328, "DisSort": null}, {
            "id": 2612,
            "countryName": "永宁县",
            "cityId": 328,
            "DisSort": null
        }, {"id": 2613, "countryName": "贺兰县", "cityId": 328, "DisSort": null}, {
            "id": 2614,
            "countryName": "灵武市",
            "cityId": 328,
            "DisSort": null
        }, {"id": 2615, "countryName": "大武口区", "cityId": 329, "DisSort": null}, {
            "id": 2616,
            "countryName": "惠农区",
            "cityId": 329,
            "DisSort": null
        }, {"id": 2617, "countryName": "平罗县", "cityId": 329, "DisSort": null}, {
            "id": 2618,
            "countryName": "利通区",
            "cityId": 330,
            "DisSort": null
        }, {"id": 2619, "countryName": "盐池县", "cityId": 330, "DisSort": null}, {
            "id": 2620,
            "countryName": "同心县",
            "cityId": 330,
            "DisSort": null
        }, {"id": 2621, "countryName": "青铜峡市", "cityId": 330, "DisSort": null}, {
            "id": 2622,
            "countryName": "原州区",
            "cityId": 331,
            "DisSort": null
        }, {"id": 2623, "countryName": "西吉县", "cityId": 331, "DisSort": null}, {
            "id": 2624,
            "countryName": "隆德县",
            "cityId": 331,
            "DisSort": null
        }, {"id": 2625, "countryName": "泾源县", "cityId": 331, "DisSort": null}, {
            "id": 2626,
            "countryName": "彭阳县",
            "cityId": 331,
            "DisSort": null
        }, {"id": 2627, "countryName": "沙坡头区", "cityId": 332, "DisSort": null}, {
            "id": 2628,
            "countryName": "中宁县",
            "cityId": 332,
            "DisSort": null
        }, {"id": 2629, "countryName": "海原县", "cityId": 332, "DisSort": null}, {
            "id": 2630,
            "countryName": "塔城市",
            "cityId": 333,
            "DisSort": null
        }, {"id": 2631, "countryName": "乌苏市", "cityId": 333, "DisSort": null}, {
            "id": 2632,
            "countryName": "额敏县",
            "cityId": 333,
            "DisSort": null
        }, {"id": 2633, "countryName": "沙湾县", "cityId": 333, "DisSort": null}, {
            "id": 2634,
            "countryName": "托里县",
            "cityId": 333,
            "DisSort": null
        }, {"id": 2635, "countryName": "裕民县", "cityId": 333, "DisSort": null}, {
            "id": 2636,
            "countryName": "和布克赛尔蒙古自治县",
            "cityId": 333,
            "DisSort": null
        }, {"id": 2637, "countryName": "哈密市", "cityId": 334, "DisSort": null}, {
            "id": 2638,
            "countryName": "巴里坤哈萨克自治县",
            "cityId": 334,
            "DisSort": null
        }, {"id": 2639, "countryName": "伊吾县", "cityId": 334, "DisSort": null}, {
            "id": 2640,
            "countryName": "和田市",
            "cityId": 335,
            "DisSort": null
        }, {"id": 2641, "countryName": "和田县", "cityId": 335, "DisSort": null}, {
            "id": 2642,
            "countryName": "墨玉县",
            "cityId": 335,
            "DisSort": null
        }, {"id": 2643, "countryName": "皮山县", "cityId": 335, "DisSort": null}, {
            "id": 2644,
            "countryName": "洛浦县",
            "cityId": 335,
            "DisSort": null
        }, {"id": 2645, "countryName": "策勒县", "cityId": 335, "DisSort": null}, {
            "id": 2646,
            "countryName": "于田县",
            "cityId": 335,
            "DisSort": null
        }, {"id": 2647, "countryName": "民丰县", "cityId": 335, "DisSort": null}, {
            "id": 2648,
            "countryName": "阿勒泰市",
            "cityId": 336,
            "DisSort": null
        }, {"id": 2649, "countryName": "布尔津县", "cityId": 336, "DisSort": null}, {
            "id": 2650,
            "countryName": "富蕴县",
            "cityId": 336,
            "DisSort": null
        }, {"id": 2651, "countryName": "福海县", "cityId": 336, "DisSort": null}, {
            "id": 2652,
            "countryName": "哈巴河县",
            "cityId": 336,
            "DisSort": null
        }, {"id": 2653, "countryName": "青河县", "cityId": 336, "DisSort": null}, {
            "id": 2654,
            "countryName": "吉木乃县",
            "cityId": 336,
            "DisSort": null
        }, {"id": 2655, "countryName": "阿图什市", "cityId": 337, "DisSort": null}, {
            "id": 2656,
            "countryName": "阿克陶县",
            "cityId": 337,
            "DisSort": null
        }, {"id": 2657, "countryName": "阿合奇县", "cityId": 337, "DisSort": null}, {
            "id": 2658,
            "countryName": "乌恰县",
            "cityId": 337,
            "DisSort": null
        }, {"id": 2659, "countryName": "博乐市", "cityId": 338, "DisSort": null}, {
            "id": 2660,
            "countryName": "精河县",
            "cityId": 338,
            "DisSort": null
        }, {"id": 2661, "countryName": "温泉县", "cityId": 338, "DisSort": null}, {
            "id": 2662,
            "countryName": "独山子区",
            "cityId": 339,
            "DisSort": null
        }, {"id": 2663, "countryName": "克拉玛依区", "cityId": 339, "DisSort": null}, {
            "id": 2664,
            "countryName": "白碱滩区",
            "cityId": 339,
            "DisSort": null
        }, {"id": 2665, "countryName": "乌尔禾区", "cityId": 339, "DisSort": null}, {
            "id": 2666,
            "countryName": "天山区",
            "cityId": 340,
            "DisSort": null
        }, {"id": 2667, "countryName": "沙依巴克区", "cityId": 340, "DisSort": null}, {
            "id": 2668,
            "countryName": "新市区",
            "cityId": 340,
            "DisSort": null
        }, {"id": 2669, "countryName": "水磨沟区", "cityId": 340, "DisSort": null}, {
            "id": 2670,
            "countryName": "头屯河区",
            "cityId": 340,
            "DisSort": null
        }, {"id": 2671, "countryName": "达坂城区", "cityId": 340, "DisSort": null}, {
            "id": 2672,
            "countryName": "米东区",
            "cityId": 340,
            "DisSort": null
        }, {"id": 2673, "countryName": "乌鲁木齐县", "cityId": 340, "DisSort": null}, {
            "id": 2674,
            "countryName": "昌吉市",
            "cityId": 342,
            "DisSort": null
        }, {"id": 2675, "countryName": "阜康市", "cityId": 342, "DisSort": null}, {
            "id": 2676,
            "countryName": "呼图壁县",
            "cityId": 342,
            "DisSort": null
        }, {"id": 2677, "countryName": "玛纳斯县", "cityId": 342, "DisSort": null}, {
            "id": 2678,
            "countryName": "奇台县",
            "cityId": 342,
            "DisSort": null
        }, {"id": 2679, "countryName": "吉木萨尔县", "cityId": 342, "DisSort": null}, {
            "id": 2680,
            "countryName": "木垒哈萨克自治县",
            "cityId": 342,
            "DisSort": null
        }, {"id": 2681, "countryName": "吐鲁番市", "cityId": 344, "DisSort": null}, {
            "id": 2682,
            "countryName": "鄯善县",
            "cityId": 344,
            "DisSort": null
        }, {"id": 2683, "countryName": "托克逊县", "cityId": 344, "DisSort": null}, {
            "id": 2684,
            "countryName": "库尔勒市",
            "cityId": 345,
            "DisSort": null
        }, {"id": 2685, "countryName": "轮台县", "cityId": 345, "DisSort": null}, {
            "id": 2686,
            "countryName": "尉犁县",
            "cityId": 345,
            "DisSort": null
        }, {"id": 2687, "countryName": "若羌县", "cityId": 345, "DisSort": null}, {
            "id": 2688,
            "countryName": "且末县",
            "cityId": 345,
            "DisSort": null
        }, {"id": 2689, "countryName": "焉耆回族自治县", "cityId": 345, "DisSort": null}, {
            "id": 2690,
            "countryName": "和静县",
            "cityId": 345,
            "DisSort": null
        }, {"id": 2691, "countryName": "和硕县", "cityId": 345, "DisSort": null}, {
            "id": 2692,
            "countryName": "博湖县",
            "cityId": 345,
            "DisSort": null
        }, {"id": 2693, "countryName": "阿克苏市", "cityId": 346, "DisSort": null}, {
            "id": 2694,
            "countryName": "温宿县",
            "cityId": 346,
            "DisSort": null
        }, {"id": 2695, "countryName": "库车县", "cityId": 346, "DisSort": null}, {
            "id": 2696,
            "countryName": "沙雅县",
            "cityId": 346,
            "DisSort": null
        }, {"id": 2697, "countryName": "新和县", "cityId": 346, "DisSort": null}, {
            "id": 2698,
            "countryName": "拜城县",
            "cityId": 346,
            "DisSort": null
        }, {"id": 2699, "countryName": "乌什县", "cityId": 346, "DisSort": null}, {
            "id": 2700,
            "countryName": "阿瓦提县",
            "cityId": 346,
            "DisSort": null
        }, {"id": 2701, "countryName": "柯坪县", "cityId": 346, "DisSort": null}, {
            "id": 2702,
            "countryName": "喀什市",
            "cityId": 348,
            "DisSort": null
        }, {"id": 2703, "countryName": "疏附县", "cityId": 348, "DisSort": null}, {
            "id": 2704,
            "countryName": "疏勒县",
            "cityId": 348,
            "DisSort": null
        }, {"id": 2705, "countryName": "英吉沙县", "cityId": 348, "DisSort": null}, {
            "id": 2706,
            "countryName": "泽普县",
            "cityId": 348,
            "DisSort": null
        }, {"id": 2707, "countryName": "莎车县", "cityId": 348, "DisSort": null}, {
            "id": 2708,
            "countryName": "叶城县",
            "cityId": 348,
            "DisSort": null
        }, {"id": 2709, "countryName": "麦盖提县", "cityId": 348, "DisSort": null}, {
            "id": 2710,
            "countryName": "岳普湖县",
            "cityId": 348,
            "DisSort": null
        }, {"id": 2711, "countryName": "伽师县", "cityId": 348, "DisSort": null}, {
            "id": 2712,
            "countryName": "巴楚县",
            "cityId": 348,
            "DisSort": null
        }, {"id": 2713, "countryName": "塔什库尔干塔吉克自治县", "cityId": 348, "DisSort": null}, {
            "id": 2714,
            "countryName": "伊宁市",
            "cityId": 350,
            "DisSort": null
        }, {"id": 2715, "countryName": "奎屯市", "cityId": 350, "DisSort": null}, {
            "id": 2716,
            "countryName": "伊宁县",
            "cityId": 350,
            "DisSort": null
        }, {"id": 2717, "countryName": "察布查尔锡伯自治县", "cityId": 350, "DisSort": null}, {
            "id": 2718,
            "countryName": "霍城县",
            "cityId": 350,
            "DisSort": null
        }, {"id": 2719, "countryName": "巩留县", "cityId": 350, "DisSort": null}, {
            "id": 2720,
            "countryName": "新源县",
            "cityId": 350,
            "DisSort": null
        }, {"id": 2721, "countryName": "昭苏县", "cityId": 350, "DisSort": null}, {
            "id": 2722,
            "countryName": "特克斯县",
            "cityId": 350,
            "DisSort": null
        }, {"id": 2723, "countryName": "尼勒克县", "cityId": 350, "DisSort": null}, {
            "id": 2724,
            "countryName": "海拉尔区",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2725, "countryName": "阿荣旗", "cityId": 351, "DisSort": null}, {
            "id": 2726,
            "countryName": "莫力达瓦达斡尔族自治旗",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2727, "countryName": "鄂伦春自治旗", "cityId": 351, "DisSort": null}, {
            "id": 2728,
            "countryName": "鄂温克族自治旗",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2729, "countryName": "陈巴尔虎旗", "cityId": 351, "DisSort": null}, {
            "id": 2730,
            "countryName": "新巴尔虎左旗",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2731, "countryName": "新巴尔虎右旗", "cityId": 351, "DisSort": null}, {
            "id": 2732,
            "countryName": "满洲里市",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2733, "countryName": "牙克石市", "cityId": 351, "DisSort": null}, {
            "id": 2734,
            "countryName": "扎兰屯市",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2735, "countryName": "额尔古纳市", "cityId": 351, "DisSort": null}, {
            "id": 2736,
            "countryName": "根河市",
            "cityId": 351,
            "DisSort": null
        }, {"id": 2737, "countryName": "新城区", "cityId": 352, "DisSort": null}, {
            "id": 2738,
            "countryName": "回民区",
            "cityId": 352,
            "DisSort": null
        }, {"id": 2739, "countryName": "玉泉区", "cityId": 352, "DisSort": null}, {
            "id": 2740,
            "countryName": "赛罕区",
            "cityId": 352,
            "DisSort": null
        }, {"id": 2741, "countryName": "土默特左旗", "cityId": 352, "DisSort": null}, {
            "id": 2742,
            "countryName": "托克托县",
            "cityId": 352,
            "DisSort": null
        }, {"id": 2743, "countryName": "和林格尔县", "cityId": 352, "DisSort": null}, {
            "id": 2744,
            "countryName": "清水河县",
            "cityId": 352,
            "DisSort": null
        }, {"id": 2745, "countryName": "武川县", "cityId": 352, "DisSort": null}, {
            "id": 2746,
            "countryName": "东河区",
            "cityId": 353,
            "DisSort": null
        }, {"id": 2747, "countryName": "昆都仑区", "cityId": 353, "DisSort": null}, {
            "id": 2748,
            "countryName": "青山区",
            "cityId": 353,
            "DisSort": null
        }, {"id": 2749, "countryName": "石拐区", "cityId": 353, "DisSort": null}, {
            "id": 2750,
            "countryName": "白云鄂博矿区",
            "cityId": 353,
            "DisSort": null
        }, {"id": 2751, "countryName": "九原区", "cityId": 353, "DisSort": null}, {
            "id": 2752,
            "countryName": "土默特右旗",
            "cityId": 353,
            "DisSort": null
        }, {"id": 2753, "countryName": "固阳县", "cityId": 353, "DisSort": null}, {
            "id": 2754,
            "countryName": "达尔罕茂明安联合旗",
            "cityId": 353,
            "DisSort": null
        }, {"id": 2755, "countryName": "海勃湾区", "cityId": 354, "DisSort": null}, {
            "id": 2756,
            "countryName": "海南区",
            "cityId": 354,
            "DisSort": null
        }, {"id": 2757, "countryName": "乌达区", "cityId": 354, "DisSort": null}, {
            "id": 2758,
            "countryName": "集宁区",
            "cityId": 355,
            "DisSort": null
        }, {"id": 2759, "countryName": "卓资县", "cityId": 355, "DisSort": null}, {
            "id": 2760,
            "countryName": "化德县",
            "cityId": 355,
            "DisSort": null
        }, {"id": 2761, "countryName": "商都县", "cityId": 355, "DisSort": null}, {
            "id": 2762,
            "countryName": "兴和县",
            "cityId": 355,
            "DisSort": null
        }, {"id": 2763, "countryName": "凉城县", "cityId": 355, "DisSort": null}, {
            "id": 2764,
            "countryName": "察哈尔右翼前旗",
            "cityId": 355,
            "DisSort": null
        }, {"id": 2765, "countryName": "察哈尔右翼中旗", "cityId": 355, "DisSort": null}, {
            "id": 2766,
            "countryName": "察哈尔右翼后旗",
            "cityId": 355,
            "DisSort": null
        }, {"id": 2767, "countryName": "四子王旗", "cityId": 355, "DisSort": null}, {
            "id": 2768,
            "countryName": "丰镇市",
            "cityId": 355,
            "DisSort": null
        }, {"id": 2769, "countryName": "科尔沁区", "cityId": 356, "DisSort": null}, {
            "id": 2770,
            "countryName": "科尔沁左翼中旗",
            "cityId": 356,
            "DisSort": null
        }, {"id": 2771, "countryName": "科尔沁左翼后旗", "cityId": 356, "DisSort": null}, {
            "id": 2772,
            "countryName": "开鲁县",
            "cityId": 356,
            "DisSort": null
        }, {"id": 2773, "countryName": "库伦旗", "cityId": 356, "DisSort": null}, {
            "id": 2774,
            "countryName": "奈曼旗",
            "cityId": 356,
            "DisSort": null
        }, {"id": 2775, "countryName": "扎鲁特旗", "cityId": 356, "DisSort": null}, {
            "id": 2776,
            "countryName": "霍林郭勒市",
            "cityId": 356,
            "DisSort": null
        }, {"id": 2777, "countryName": "红山区", "cityId": 357, "DisSort": null}, {
            "id": 2778,
            "countryName": "元宝山区",
            "cityId": 357,
            "DisSort": null
        }, {"id": 2779, "countryName": "松山区", "cityId": 357, "DisSort": null}, {
            "id": 2780,
            "countryName": "阿鲁科尔沁旗",
            "cityId": 357,
            "DisSort": null
        }, {"id": 2781, "countryName": "巴林左旗", "cityId": 357, "DisSort": null}, {
            "id": 2782,
            "countryName": "巴林右旗",
            "cityId": 357,
            "DisSort": null
        }, {"id": 2783, "countryName": "林西县", "cityId": 357, "DisSort": null}, {
            "id": 2784,
            "countryName": "克什克腾旗",
            "cityId": 357,
            "DisSort": null
        }, {"id": 2785, "countryName": "翁牛特旗", "cityId": 357, "DisSort": null}, {
            "id": 2786,
            "countryName": "喀喇沁旗",
            "cityId": 357,
            "DisSort": null
        }, {"id": 2787, "countryName": "宁城县", "cityId": 357, "DisSort": null}, {
            "id": 2788,
            "countryName": "敖汉旗",
            "cityId": 357,
            "DisSort": null
        }, {"id": 2789, "countryName": "东胜区", "cityId": 358, "DisSort": null}, {
            "id": 2790,
            "countryName": "达拉特旗",
            "cityId": 358,
            "DisSort": null
        }, {"id": 2791, "countryName": "准格尔旗", "cityId": 358, "DisSort": null}, {
            "id": 2792,
            "countryName": "鄂托克前旗",
            "cityId": 358,
            "DisSort": null
        }, {"id": 2793, "countryName": "鄂托克旗", "cityId": 358, "DisSort": null}, {
            "id": 2794,
            "countryName": "杭锦旗",
            "cityId": 358,
            "DisSort": null
        }, {"id": 2795, "countryName": "乌审旗", "cityId": 358, "DisSort": null}, {
            "id": 2796,
            "countryName": "伊金霍洛旗",
            "cityId": 358,
            "DisSort": null
        }, {"id": 2797, "countryName": "临河区", "cityId": 359, "DisSort": null}, {
            "id": 2798,
            "countryName": "五原县",
            "cityId": 359,
            "DisSort": null
        }, {"id": 2799, "countryName": "磴口县", "cityId": 359, "DisSort": null}, {
            "id": 2800,
            "countryName": "乌拉特前旗",
            "cityId": 359,
            "DisSort": null
        }, {"id": 2801, "countryName": "乌拉特中旗", "cityId": 359, "DisSort": null}, {
            "id": 2802,
            "countryName": "乌拉特后旗",
            "cityId": 359,
            "DisSort": null
        }, {"id": 2803, "countryName": "杭锦后旗", "cityId": 359, "DisSort": null}, {
            "id": 2804,
            "countryName": "二连浩特市",
            "cityId": 360,
            "DisSort": null
        }, {"id": 2805, "countryName": "锡林浩特市", "cityId": 360, "DisSort": null}, {
            "id": 2806,
            "countryName": "阿巴嘎旗",
            "cityId": 360,
            "DisSort": null
        }, {"id": 2807, "countryName": "苏尼特左旗", "cityId": 360, "DisSort": null}, {
            "id": 2808,
            "countryName": "苏尼特右旗",
            "cityId": 360,
            "DisSort": null
        }, {"id": 2809, "countryName": "东乌珠穆沁旗", "cityId": 360, "DisSort": null}, {
            "id": 2810,
            "countryName": "西乌珠穆沁旗",
            "cityId": 360,
            "DisSort": null
        }, {"id": 2811, "countryName": "太仆寺旗", "cityId": 360, "DisSort": null}, {
            "id": 2812,
            "countryName": "镶黄旗",
            "cityId": 360,
            "DisSort": null
        }, {"id": 2813, "countryName": "正镶白旗", "cityId": 360, "DisSort": null}, {
            "id": 2814,
            "countryName": "正蓝旗",
            "cityId": 360,
            "DisSort": null
        }, {"id": 2815, "countryName": "多伦县", "cityId": 360, "DisSort": null}, {
            "id": 2816,
            "countryName": "乌兰浩特市",
            "cityId": 361,
            "DisSort": null
        }, {"id": 2817, "countryName": "阿尔山市", "cityId": 361, "DisSort": null}, {
            "id": 2818,
            "countryName": "科尔沁右翼前旗",
            "cityId": 361,
            "DisSort": null
        }, {"id": 2819, "countryName": "科尔沁右翼中旗", "cityId": 361, "DisSort": null}, {
            "id": 2820,
            "countryName": "扎赉特旗",
            "cityId": 361,
            "DisSort": null
        }, {"id": 2821, "countryName": "突泉县", "cityId": 361, "DisSort": null}, {
            "id": 2822,
            "countryName": "阿拉善左旗",
            "cityId": 362,
            "DisSort": null
        }, {"id": 2823, "countryName": "阿拉善右旗", "cityId": 362, "DisSort": null}, {
            "id": 2824,
            "countryName": "额济纳旗",
            "cityId": 362,
            "DisSort": null
        }]);