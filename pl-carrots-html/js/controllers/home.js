/**
 * mainCtrl
 * Created by pkcms.cn on 2016/6/24.
 */


"use strict";
app.controller('homeCtrl',function ($http,$timeout,$location,$state) {


    var vm = this;
    vm.params = $state.params;
    vm.sh=localStorage.show;
    vm.kk=function () {
        $location.path('/jobDetail');
    }
    //加载图片
    var img  = $timeout(
        function () {
        $http({
            method:'GET',
            url: '/carrots-ajax/a/article/search'
        }).then(function (search) {
            vm.src=search.data.data.articleList[6].img;
            vm.href=search.data.data.articleList[6].url
        },function () {
            console.log('获取行业大图失败')
        })
    },1000
    )

            vm.myInterval = 5000;
            vm.noWrapSlides = false;
            vm.active = 0;
            var slides = vm.slides = [];
            var currIndex = 0;

    var num= [
        {
            "id": 149,
            "companyId": 64,
            "companyName": "康辉集团北京胜佳科技有限公司",
            "name": "请开门",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 1,
            "subCategory": 1,
            "education": 1,
            "experience": 1,
            "recommend": 1,
            "compensation": 3,
            "responsibility": "1.大多数 你是猪",
            "requisite": "2.撒地方我不好",
            "boon": "3.撒地方你好啊",
            "updateAt": 1488283275261,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/2aa3360b-70bd-44ee-bcac-68d770a7dbf9.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 3
                }
            ],
            "tags": []
        },
        {
            "id": 125,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "产品经理（北京）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 1,
            "subCategory": 3,
            "education": 1,
            "experience": 1,
            "recommend": 1,
            "compensation": 1,
            "responsibility": "1、链接中型以上第三方财富管理机构产品总监，引进优质金融产品\n2、链接各大金融机构项目经理，引进阳光私募、信托、资管等金融产品\n3、链接第三方财富管理机构，进行产品路演、推介，助理销售工作",
            "requisite": "1、2年以上金融领域相关从业经验\n2、大学本科以上学历，硕士或MBA优先\n3、具有较强的风险意识和风险识别能力\n4、具有较强的团队协调与合作能力及较强的自我心理调解能力，能够承受较大工作压力",
            "boon": "周末双休、五险一金、交通补助、话补",
            "updateAt": 1487907532996,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }
            ],
            "tags": []
        },
        {
            "id": 101,
            "companyId": 45,
            "companyName": "享学网络科技",
            "name": "Java开发工程师",
            "province": "1",
            "city": "1",
            "county": "6",
            "category": 8,
            "subCategory": 2,
            "education": 1,
            "experience": 1,
            "recommend": 0,
            "compensation": 1,
            "responsibility": "1、精通Java语言开发，参与服务器端、web端程序的设计及编写；具有良好的编码规范，能够根据制定的研发进度按时完成研发工作；关键模块及接口，需要撰写相关的文档；能够即时解决线上出现的问题；对新技术较敏感，愿意学习新技术并与团队分享\n2、熟悉JSP/Servlet、JavaScript、Ajax、Jquery、Velocity等WEB开发基础技术，熟练使用开发框架，Struts或SpringMVC，Spring和Hibernate或ibatis或mybatis等； （必须） \n3、业务理解力强，具备数据模型设计能力，有数据库优化经验优先；\n4、熟悉Nginx 、Tomcat、jetty等应用服务器的应用部署和配置；\n5、熟练Eclipse或NetBeans集成开发环境； \n6、熟练使用Maven，SVN（Git）、Ant、Junit等项目构建及代码管理工具",
            "requisite": "1、本科及以上学历，2年以上同行业工作经历，熟悉分布式及大数据开发者优先考虑；\n2、有APP开发项目、电商项目经验、电信项目经验、金融行业或互联网金融相关项目经验优先考虑；\n3、一线、二线java高级工程师（技术大拿）",
            "boon": "五险一金、股票期权、年终分红、绩效奖金、年度旅游、带薪年假、弹性工作、领导好、帅哥多",
            "updateAt": 1487248305030,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/4f1e3cde-7091-4e1d-a7a0-85775f1268e2.png",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 4
                }
            ],
            "tags": []
        },
        {
            "id": 95,
            "companyId": 43,
            "companyName": "北京咸蛋科技有限公司",
            "name": "产品助理（后台）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 1,
            "subCategory": 1,
            "education": 1,
            "experience": 1,
            "recommend": 1,
            "compensation": 1,
            "responsibility": "1、负责网页端产品及平台设计；\n2、与产品负责人沟通确认需求，设计整体方案，确定产品功能、流程；\n3、结合需求完成页面布局及可交互的原型图，撰写产品需求文档；\n4、协调UI设计、开发、测试人员进行工作，完成产品规划；\n5、收集用户意见、建议等反馈，结合产品业务逻辑持续挖掘用户需求进行产品创新；",
            "requisite": "1、1年以上web产品经理经验；\n2、熟悉UED方法和工作流程，对产品原型、交互设计有较深的理解和实践；\n3、熟练使用axure、visio等工具，独立完成流程图、原型图；\n4、逻辑清晰，沟通清楚，出色的组织协调和项目管理能力，数字敏感，强于分析。\n5、有后台系统、开放平台设计经验者从优选择",
            "boon": "股票期权、岗位晋升、扁平管理、帅哥多、领导好、美女多、五险一金、弹性工作",
            "updateAt": 1487120824689,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/09da23a5-4a0f-46c3-870f-cf1296c9cd77.png",
            "industryList": [
                {
                    "industry": 0
                }
            ],
            "tags": []
        },
        {
            "id": 94,
            "companyId": 43,
            "companyName": "北京咸蛋科技有限公司",
            "name": "产品经理（移动端）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 1,
            "subCategory": 4,
            "education": 1,
            "experience": 2,
            "recommend": 1,
            "compensation": 2,
            "responsibility": "1. 负责移动端App的全程产品管理，包括产品和竞品分析、产品规划、需求设计及产品设计等方面。\n2. 负责移动端App具体功能设计及交互设计等，不断优化产品体验。\n3. 根据统计数据对功能及用户体验进行持续优化。\n4. 协调研发团队完成产品开发，跨部门协调和沟通。",
            "requisite": "1. 三年以上互联网产品经理工作经验，一年以上直播产品经验，能够独立担当产品经理，有独立负责、设计和实施运营产品的经验及能力，了解互联网产品研发和运营。\n2. 了解直播相关产品及业务，了解主播及网络经纪公司市场。\n3. 有项目管理能力，可对项目立项、管理、跟踪及协调。具有出色的沟通和协调能力，能够和不同团队进行沟通并达成任务。\n4. 有数据分析能力，能进行数据驱动的产品分析和设计。",
            "boon": "股票期权、岗位晋升、扁平管理、帅哥多、领导好、美女多、五险一金、弹性工作",
            "updateAt": 1487120822623,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/09da23a5-4a0f-46c3-870f-cf1296c9cd77.png",
            "industryList": [
                {
                    "industry": 0
                }
            ],
            "tags": []
        },
        {
            "id": 96,
            "companyId": 44,
            "companyName": "奇树有鱼文化传媒有限公司",
            "name": "H5前端开发工程师",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 6,
            "subCategory": 3,
            "education": 1,
            "experience": 2,
            "recommend": 0,
            "compensation": 2,
            "responsibility": "1、根据系统与用户需求、分析并给出最优的页面前端架构解决方案；\n2、负责pc端及移动端应用设计开发，协同后端工程师完成符合兼容性的实现产品交互流程和视觉界面的开发需求；\n3、负责公司相关产品前端功能的设计、开发与优化，编写可复用的用户界面组件；\n4、跟踪最新的前端技术和标准（HTML5），持续优化前端，以提高前端的用户体验及性能；\n5、对UI设计的结果进行页面制作（CSS/css3+xhtml/html5+JS），使用HTML5、CSS3及JavaScript完成HTML界面布局、色调设计；\n6、与UI/UX设计师协同完成前端交互设计、用户体验类游戏的设计实现；\n7、按照公司的计划按时完成自己的工作任务。",
            "requisite": "1、计算机相关专业，本科以上学历。产品前期突出前端交互效果，至少3年以上前端开发经验，至少1年以上基于HTML5技术WEB端触摸屏开发经验；\n2、精通Javascript，能独立完成Javascript代码的编写和优化工作，熟悉jquery、kissy等库；\n3、深入理解 HTML5/Javascript/CSS3/AJAX/JASON 等前端基础技术；\n4、熟练掌握 jQuery/angular.js/ember.js 等知名框架产品中的两个或更多，理解其工作原理和设计主旨；\n5、熟练使用PS/FireWork等处理图片软件，能够根据基于psd源文件进行切图、处理图片以便界面设计；\n6、熟悉软件过程，有良好的代码和文档习惯。",
            "boon": "弹性工作、五险一金、节日礼物 、岗位晋升、带薪年假",
            "updateAt": 1487062188078,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/27fdaeb8-6529-4dd5-886c-872b70cebfe0.png",
            "industryList": [
                {
                    "industry": 0
                }
            ],
            "tags": []
        },
        {
            "id": 111,
            "companyId": 50,
            "companyName": "北京快校科技有限公司",
            "name": "前端开发工程师",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 6,
            "subCategory": 2,
            "education": 1,
            "experience": 1,
            "recommend": 0,
            "compensation": 1,
            "responsibility": "1、移动站点活动页面 HTML5 的开发；\n\n2、微信相关的页面开发；\n\n3、PC响应式网页的前端开发；\n\n4、平台易用性与用户体验的持续改进；\n\n5、配合设计师和后端开发工程师（Java），呈现出最佳用户体验的前端页面；\n\n6、业务模块前端代码编写；",
            "requisite": "1、有HTML5以及Web前端开发经验；\n\n2、精通JavaScript、Ajax、HTML5、CSS3等Web开发技术；\n\n3、熟悉W3C标准，对表现与数据分离、Web语义化等有深刻理解；\n\n4、熟悉HTML5及CSS3特性，包括(Local Storage/Application Cache/CSS 3.0标准)\n\n5、熟悉手机端和PC  Web的差异，解决各种浏览器的兼容性问题；\n\n6、灵活运用基础JS库，例如jQuery、 Zepto等；\n\n7、熟悉常用的Web前端开发框架，熟悉RequireJS、seajs、AngularJS",
            "boon": "发展潜力大、扁平化管理、技能培训、带薪年假。",
            "updateAt": 1487062187483,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/4a97346b-7b75-4da6-a666-544164970232.png",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 4
                }
            ],
            "tags": []
        },
        {
            "id": 138,
            "companyId": 53,
            "companyName": "联想研究院",
            "name": "Store前端研发工程师",
            "province": "1",
            "city": "1",
            "county": "8",
            "category": 6,
            "subCategory": 3,
            "education": 1,
            "experience": 2,
            "recommend": 0,
            "compensation": 3,
            "responsibility": "1.主导产品前端（包含网页和Windows本地程序）的设计开发；\n2.参与需求调研、项目可行性分析、技术可行性分析和需求分析；\n3.根据需求分析和系统框架完成系统的详细设计；\n4.完成具体代码的编写工作；",
            "requisite": "1.熟悉.NET Framework，精通C#开发；\n2.对Windows软件开发具有浓厚兴趣\n3.逻辑思维清晰，具备系统设计、分析和解决问题的能力；\n4.应用商店系统开发经验优先考虑；\n5.具有良好的职业操守，较好的学习、沟通、协作能力和计划执行能力；",
            "boon": "晋升空间大",
            "updateAt": 1487062186938,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/1dace871-2e5b-4591-bd57-fb8b9842027c.png",
            "industryList": [
                {
                    "industry": 0
                }
            ],
            "tags": []
        },
        {
            "id": 140,
            "companyId": 64,
            "companyName": "康辉集团北京胜佳科技有限公司",
            "name": "Android开发工程师",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 4,
            "subCategory": 1,
            "education": 1,
            "experience": 1,
            "recommend": 1,
            "compensation": 2,
            "responsibility": "工作职责：\n1、参与公司全平台Android功能模块开发\n2、负责和产品设计同学沟通相关方案\n3、学习新技术",
            "requisite": "1、计算机专业、本科学历及以上\n2、熟悉Java\n3、熟悉Android SDK\n4、熟练使用常见第三方库\n\n加分项：\n1、GitHub代码贡献或技术博客\n2、有大型项目经验\n3、做过旅游或电商类项目",
            "boon": "1、试用期3个月，试用期内工资80%，表现突出者可以提前转正+调薪。\n2、五险一金：入职当月即开始缴纳五险，转正后缴纳一金，应届毕业生以拿到毕业证书当月开始缴纳。\n因特殊情况（如上家公司超过15号仍未办理减员）等，自动默认为由下月开始缴纳。\n3、电脑补助 200元（使用公司电脑的员工不享受此项补助）；\n餐饮补助：50元/ 天；\n其他补助：因工作原因加班很晚错过返家末班车，可使用企业版滴滴打车。\n4、 团建相关：每年1-2次团建活动 \n5、生日福利：当月生日的员工可享有团体生日补助福利。\n6、 假期相关：元旦、春节、清明、劳动、端午、中秋、国庆节按国家标准执行",
            "updateAt": 1487062180481,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/2aa3360b-70bd-44ee-bcac-68d770a7dbf9.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 3
                }
            ],
            "tags": []
        },
        {
            "id": 142,
            "companyId": 64,
            "companyName": "康辉集团北京胜佳科技有限公司",
            "name": "java工程师",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 8,
            "subCategory": 2,
            "education": 0,
            "experience": 2,
            "recommend": 0,
            "compensation": 2,
            "responsibility": "工作职责：\n1、根据产品需求负责完成业务系统架构设计； \n2、按照计划要求，按时提交高质量代码，完成开发任务； \n3、规范文档的编写、维护，以及其他与项目相关工作；\n4、帮助团队其他成员解决技术问题及进行相关技术分享。",
            "requisite": "1、大学本科以上学历，计算机相关专业；3年以上Java实际项目开发经验； \n2、有扎实的Java基础，对Java多线程、并发以及网络通信有深厚的经验；熟悉JVM原理、常用设计模式及优化算法；\n3、熟悉HTML、JQuery、CSS等Web前端技术；\n4、熟悉主流开源应用框架，如Spring、MyBatis、Hibernate；\n\n5、熟悉SVN、Git、Maven等开发技术工具；\n6、熟悉tomcat、jetty等主流软件； \n7、熟悉关系型数据库mysql，熟练编写SQL，能进行SQl优化；\n8、了解Memcached、Redis等使用及技术原理；\n9、良好的学习能力、团队协作能力和沟通能力；善于思考，能独立分析和解决问题。\n加分项：\n1、有OTA或电商类网站前端开发经验最佳\n2、喜欢旅游\n3、对接过航信IBE+接口，对接过各大酒店供应商优先",
            "boon": "1、试用期3个月，试用期内工资80%，表现突出者可以提前转正+调薪。\n2、五险一金：入职当月即开始缴纳五险，转正后缴纳一金，应届毕业生以拿到毕业证书当月开始缴纳。\n因特殊情况（如上家公司超过15号仍未办理减员）等，自动默认为由下月开始缴纳。\n3、电脑补助 200元（使用公司电脑的员工不享受此项补助）；\n餐饮补助：50元/ 天；\n其他补助：因工作原因加班很晚错过返家末班车，可使用企业版滴滴打车。\n4、 团建相关：每年1-2次团建活动 \n5、 生日福利：当月生日的员工可享有团体生日补助福利。\n 6、 假期相关：元旦、春节、清明、劳动、端午、中秋、国庆节按国家标准执行",
            "updateAt": 1487062179063,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/2aa3360b-70bd-44ee-bcac-68d770a7dbf9.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 3
                }
            ],
            "tags": []
        },
        {
            "id": 141,
            "companyId": 64,
            "companyName": "康辉集团北京胜佳科技有限公司",
            "name": "iOS开发工程师",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 5,
            "subCategory": 1,
            "education": 1,
            "experience": 1,
            "recommend": 1,
            "compensation": 2,
            "responsibility": "工作职责：\n1、参与公司全平台iOS功能模块开发\n2、负责和产品设计同学沟通相关方案\n3、学习新技术",
            "requisite": "1、计算机专业、本科学历及以上\n2、熟悉Objective-C\n3、熟悉iOS SDK\n4、熟练使用常见第三方库\n\n加分项：\n1、GitHub代码贡献或技术博客\n2、有大型项目经验\n3、做过旅游或电商类项目",
            "boon": "1、试用期3个月，试用期内工资80%，表现突出者可以提前转正+调薪。\n2、五险一金：入职当月即开始缴纳五险，转正后缴纳一金，应届毕业生以拿到毕业证书当月开始缴纳。\n因特殊情况（如上家公司超过15号仍未办理减员）等，自动默认为由下月开始缴纳。\n3、电脑补助 200元（使用公司电脑的员工不享受此项补助）；\n餐饮补助：50元/ 天；\n其他补助：因工作原因加班很晚错过返家末班车，可使用企业版滴滴打车。\n4、 团建相关：每年1-2次团建活动 \n5、生日福利：当月生日的员工可享有团体生日补助福利。\n6、 假期相关：元旦、春节、清明、劳动、端午、中秋、国庆节按国家标准执行",
            "updateAt": 1487062178608,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/2aa3360b-70bd-44ee-bcac-68d770a7dbf9.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 3
                }
            ],
            "tags": []
        },
        {
            "id": 144,
            "companyId": 64,
            "companyName": "康辉集团北京胜佳科技有限公司",
            "name": "测试开发工程师",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 3,
            "subCategory": 2,
            "education": 1,
            "experience": 2,
            "recommend": 1,
            "compensation": 2,
            "responsibility": "工作职责：\n1、负责测试计划 测试设计 测试执行，并在过程中持续优化测试流程；\n2、关注项目风险管理 质量管理，对需求、设计、开发各环节有质量意识和测试能力 者优先；\n3、发现&分析 bug，从用户角度 技术角度给出修改方案；\n4、独立负责项目 协调各方资源 达到质量提高的目的.\n5、开发测试工具",
            "requisite": "1、有任一程序语言开发能力；有3年以上测试或开发经验；\n2、熟练掌握测试设计&执行；\n3、有良好的沟通协调能力和团队协作精神；\n4、有强烈的自驱动力 和 目标意识；\n5、学习能力强.\n\n加分项：\n1、有自动化测试和持续集成相关经验优先\n2、做过旅游或电商类项目",
            "boon": "1、试用期3个月，试用期内工资80%，表现突出者可以提前转正+调薪。\n2、五险一金：入职当月即开始缴纳五险，转正后缴纳一金，应届毕业生以拿到毕业证书当月开始缴纳。\n因特殊情况（如上家公司超过15号仍未办理减员）等，自动默认为由下月开始缴纳。\n3、电脑补助 200元（使用公司电脑的员工不享受此项补助）；\n餐饮补助：50元/ 天；\n其他补助：因工作原因加班很晚错过返家末班车，可使用企业版滴滴打车。\n4、 团建相关：每年1-2次团建活动 \n5、生日福利：当月生日的员工可享有团体生日补助福利。\n6、 假期相关：元旦、春节、清明、劳动、端午、中秋、国庆节按国家标准执行",
            "updateAt": 1487062173442,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/2aa3360b-70bd-44ee-bcac-68d770a7dbf9.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 3
                }
            ],
            "tags": []
        },
        {
            "id": 98,
            "companyId": 44,
            "companyName": "奇树有鱼文化传媒有限公司",
            "name": "Android 高级工程师",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 4,
            "subCategory": 3,
            "education": 1,
            "experience": 2,
            "recommend": 1,
            "compensation": 2,
            "responsibility": "1、负责公司移动平台 Android 客户端的应用开发； \n2、负责公司Android 手机平台应用软件的需求分析、功能设计和编码； \n3、负责参与公司产品需求分析并参与技术实施方案设计；\n4、负责参与对手机软件系列产品进行维护和持续升级；\n5、负责和研究新的移动互联网技术以满足产品的需求。\n6、负责或参与进行关键技术验证以及技术选型工作",
            "requisite": "1、计算机或相关专业本科以上学历，3年以上Android软件开发经验；\n2、熟悉Java、C/C++语言，熟悉NDK开发，熟悉Android界面开发，熟悉多线程.移动网络通信开发技术；\n3、熟悉Android平台相关开发框架和机制，熟悉Android开发技术和各Android版本特点；\n4、熟悉TCP/IP.HTTP网络协议，熟悉数据库原理，熟悉SQL语句；\n5、工作积极，有责任心，有良好的沟通能力和团队精神，具备较强解决问题的能力。",
            "boon": "弹性工作、五险一金、节日礼物、岗位晋升、带薪年假",
            "updateAt": 1487062172980,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/27fdaeb8-6529-4dd5-886c-872b70cebfe0.png",
            "industryList": [
                {
                    "industry": 0
                }
            ],
            "tags": []
        },
        {
            "id": 133,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "产品经理（北京）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 1,
            "subCategory": 3,
            "education": 1,
            "experience": 2,
            "recommend": 0,
            "compensation": 2,
            "responsibility": "1、业务需求分析，将业务需求转化成产品需求\n2、进行产品设计工作，包括PRD设计和审核，UE设计\n3、参与产品运营工作，进行推广创意及实现\n4、关注互联网金融行业动态，进行产品分析",
            "requisite": "1、全日制本科及以上学历，计算机相关专业， 3年以上互联网行业工作经验\n2、有独立担当产品项目的全程设计、管理经验\n3、有互联网金融相关工作经验优先\n4、熟练使用相关产品设计工具，了解前后端相关研发知识\n5、能与需求团队、研发团队进行良好的沟通协作，较强的逻辑分析问题\n6、愿意挑战自我，实现个人价值最大化",
            "boon": "周末双休、五险一金、交通补助、话补",
            "updateAt": 1487062172506,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }
            ],
            "tags": []
        },
        {
            "id": 129,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "JAVA 研发工程师（北京）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 8,
            "subCategory": 2,
            "education": 1,
            "experience": 2,
            "recommend": 0,
            "compensation": 2,
            "responsibility": "1、负责项目的需求分析和设计、以及接口间的设计和开发等技术工作\n2、负责项目现网问题的分析排查处理，版本联调工作\n3、负责项目的整体技术积累和知识传递工作",
            "requisite": "1、全日制本科及以上学历，计算机相关专业，具有3年及以上相关经验\n2、熟悉Struts 2.X、Spring 2.X/3.x、IBATIS2.0/3.x等架构，熟练使用Ajax，Jquery，ExtJS，DWR等RIA技术，充分了解jsp、servlet、freemarker、html，CSS，JavaScript等Web技术，具备良好的Mysql等数据库设计的能力\n3、具备Web Service，FTP，HTTP+XML/JSON等消息传输方式的实际开发经验\n4、具备Junit、Jtest等单元测试工具的实际开发及测试经验\n5、熟悉（Apache、JBOSS/Tomcat、Mysql）搭建静态资源网站和动态WEB服务网站混合系统；熟悉servlet3.0规范、http1.1协议、掌握线程池、对象池开发技术\n6、具备高昂的工作激情和自我激励能力，适应较高压力和挑战的工作环境\n7、品德优秀、身体健康、认真负责、积极主动、思路清晰、开拓进取，愿意挑战自我，非打工心态者优先考虑",
            "boon": "股权激励、技术大咖、18薪、绝对优于同业薪酬",
            "updateAt": 1487062171404,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }
            ],
            "tags": []
        },
        {
            "id": 128,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "系统运维工程师（北京）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 7,
            "subCategory": 1,
            "education": 0,
            "experience": 2,
            "recommend": 1,
            "compensation": 1,
            "responsibility": "1、维护业务平台网络设备、服务器的稳定运转，监控平台的运行状态，并定期巡检\n2、监控分析与维护业务平台与其他网元之间的接口\n3、参与设计、评审与实施业务平台的升级扩容方案\n4、作为一线及时响应突发情况、各类故障的上报和参与解决\n5、组织和监督平台系统工程实施，包括硬件立架、相关操作系统安装和软件调试\n6、针对平台系统和业务流程环境，实施安全检测、加固和管理\n7、负责完成部门交办的其他工作",
            "requisite": "1、全日制本科及以上学历，计算机相关专业，具有两年及以上系统运维相关经验（如有3年以上相关工作经验，学历要求放宽至专科）\n2、熟悉Linux/Unix/Windows系统，熟练掌握脚本操作，熟悉常用应用容器如Apache、Tomcat、Ngix、IIS等部署及维护，熟悉虚拟机的安装和使用，了解Oracle、Mysql数据库基础；有机房、机柜、机架、局域网相关实施经验\n3、具备良好的问题解决及文档撰写能力\n4、两年以上系统维护或大型网站的维护经历者优先\n5、品德优秀、身体健康、认真负责、积极主动、思路清晰、开拓进取，愿挑战自我，非打工心态者优先考虑",
            "boon": "有活力、有担当、有创新、有发展",
            "updateAt": 1486960750952,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }
            ],
            "tags": []
        },
        {
            "id": 134,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "视觉设计师（北京）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 2,
            "subCategory": 1,
            "education": 1,
            "experience": 1,
            "recommend": 1,
            "compensation": 1,
            "responsibility": "1、主要负责移动端UI设计，包括iPhone/Android/pad等手机版本\n2、负责网站页面的设计工作\n3、配合营销宣传进行创意设计",
            "requisite": "1、全日制本科及以上学历，网页设计类等相关专业，一年以上手机app设计经验\n2、精通Photoshop，Illustrator，熟悉Coreldraw ，flash 等软件\n3、具备很强的色彩感觉和敏锐的时尚洞察力。对字体、构图有着很强的驾驭能力。同时具备幽默感和创造力，能独立完成工作并能创造高质量作品\n4、认同公司文化，有强烈的责任感和团队意识，与团队能良好的沟通\n5、请随简历附上个人作品",
            "boon": "薪酬待遇",
            "updateAt": 1486960750488,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }
            ],
            "tags": []
        },
        {
            "id": 132,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "Android 研发工程师（北京",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 4,
            "subCategory": 2,
            "education": 1,
            "experience": 2,
            "recommend": 0,
            "compensation": 2,
            "responsibility": "1、根据产品需求进行分析和设计\n2、负责Android手机及pad应用程序的开发\n3、学习和研究新技术以满足产品的需求\n4、完成 Android软件开发、验证和测试中发现的问题",
            "requisite": "1、2年以上Android平台开发经验，有完整项目的开发经验，计算机相关专业毕业优先\n2、具有J2ME或Java开发经验，JAVA基础扎实，有手机终端软件设计和规划能力\n3、熟悉Android手机软件架构和开发，对Android sdk各版本特性有清楚的了解\n4、有强烈的进取心，对工作充满激情，具备良好的沟通和团队协作能力，学习能力强，有责任感和抗压能力",
            "boon": "薪酬待遇",
            "updateAt": 1486960749803,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }
            ],
            "tags": []
        },
        {
            "id": 139,
            "companyId": 64,
            "companyName": "康辉集团北京胜佳科技有限公司",
            "name": "web前端",
            "province": "1",
            "city": "1",
            "county": "5",
            "category": 6,
            "subCategory": 2,
            "education": 0,
            "experience": 2,
            "recommend": 0,
            "compensation": 2,
            "responsibility": "工作职责：\n1、负责移动端网站前端架构的设计实现；用好的交互体验打动用户，对设计有一定了解。\n2、配合产品经理，实现产品UI和交互方面的需求，持续界面设计优化，提升用户体验；\n3、编写前端技术文档，制定界面实现标准。",
            "requisite": "1、精通web前端的常用开发技术与常用框架；\n2、熟悉W3C标准，对表现与数据分离、Web语义化等有较为深刻的理解； \n3、熟练使用HTML5/CSS3、HTML/XHTML、CSS等网页制作技术，熟悉页面架构和布局；\n4、优秀的javascript编程技能，熟悉AJAX、JSON数据处理机制;\n5、对目前主流平台技术有广度和深度的认识与理解，能够精确把握技术发展;\n6、良好的编码习惯、沟通协作能力和学习能力；\n7、熟悉 Sass/Less 等样式中间语言，TypeScript等Javascript中间语言者为佳；\n8、有过grunt流程化管理工具开发经验者优先；\n9、熟练使用artTemplate模板开发者 优先。\n加分项：\n1、有OTA或电商类网站前端开发经验最佳\n2、喜欢旅游",
            "boon": "1、试用期3个月，试用期内工资80%，表现突出者可以提前转正+调薪。\n2、五险一金：入职当月即开始缴纳五险，转正后缴纳一金，应届毕业生以拿到毕业证书当月开始缴纳。\n因特殊情况（如上家公司超过15号仍未办理减员）等，自动默认为由下月开始缴纳。\n3、电脑补助 200元（使用公司电脑的员工不享受此项补助）；\n餐饮补助：50元/ 天；\n其他补助：因工作原因加班很晚错过返家末班车，可使用企业版滴滴打车。\n4、 团建相关：每年1-2次团建活动 \n5、 生日福利：当月生日的员工可享有团体生日补助福利。\n 6、 假期相关：元旦、春节、清明、劳动、端午、中秋、国庆节按国家标准执行",
            "updateAt": 1486960749443,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/2aa3360b-70bd-44ee-bcac-68d770a7dbf9.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 3
                }
            ],
            "tags": []
        },
        {
            "id": 130,
            "companyId": 58,
            "companyName": "盈泰财富云",
            "name": "项目助理（北京）",
            "province": "1",
            "city": "1",
            "county": "1",
            "category": 1,
            "subCategory": 1,
            "education": 1,
            "experience": 1,
            "recommend": 0,
            "compensation": 0,
            "responsibility": "1、负责项目版本管理、进度推进，负责项目日常工作\n2、负责产品的运营\n3、负责完成部门交办的其他工作",
            "requisite": "1、本科及以上学历，计算机、通信或相关专业\n2、具有良好的执行力和责任心，能推动项目团队朝目标前进\n3、对于项目过程中相关工作有充分的认知和了解，能够快速接纳并主动解决\n4、具有较强的沟通、交流能力和团队合作精神\n5、有互联网版本管理的经验者优先\n6、期待自身成长，非打工心态",
            "boon": "六险一金",
            "updateAt": 1486960748930,
            "logo": "http://carrots.ks3-cn-beijing.ksyun.com/3/f9b77ca3-4ee2-4b5f-84d6-7824b59bb73b.jpg",
            "industryList": [
                {
                    "industry": 0
                },
                {
                    "industry": 5
                }

            ]}
    ]


    var id =[]
    var logo=[]
    var companyName=[]
    angular.forEach(num,function (i) {
        id.push(i.name)
        logo.push(i.logo)
        companyName.push(i.companyName)
        return(id)
    })
    var lo1=logo.slice(0,5);
    var lo2=logo.slice(5,10);
    var lo3=logo.slice(10,15);
    var lo4=logo.slice(15,20);
    var id1=id.slice(0,5);
    var id2=id.slice(5,10);
    var id3=id.slice(10,15);
    var id4=id.slice(15,20);
    var cName1=companyName.slice(0,5);
    var cName2=companyName.slice(5,10);
    var cName3=companyName.slice(10,15);
    var cName4=companyName.slice(15,20);






           vm.addSlide = function() {
                var newWidth = 600 + slides.length + 1;
                slides.push({
                    logo1:lo1[slides.length % 4],
                    logo2:lo2[slides.length % 4],
                    logo3:lo3[slides.length % 4],
                    logo4:lo4[slides.length % 4],
                    id1:id1[slides.length % 4],
                    id2:id2[slides.length % 4],
                    id3:id3[slides.length % 4],
                    id4:id4[slides.length % 4],
                    cName1:cName1[slides.length % 4],
                    cName2:cName2[slides.length % 4],
                    cName3:cName3[slides.length % 4],
                    cName4:cName4[slides.length % 4],
                    image: '//unsplash.it/' + newWidth + '/300',
                    text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
                    id: currIndex++
                });
            };

           for (var i = 0; i < 4; i++) {
                vm.addSlide();
            }
            vm.con=function (gg) {
                console.log(gg)
            }

});


