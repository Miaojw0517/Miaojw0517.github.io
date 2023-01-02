/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","905aaca4b572f6138de2567cb095716b"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","c221ef849448d9b0ebe47e2965df7442"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","90dbabbb6dcd2c4618c4bdb3a63a3039"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","ff6de1b3245f4dedb77e8a684cb58219"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","c2b17f59af991321d5d20bd3c61e4c63"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","012855f96181450baf4357ab150e38b0"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","a62f9070673adfec65bfef7472f0af19"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","3c95361aa48866e47a9209db9805c46d"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","76074b0b9196330c05e9e1b40f4eb05a"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","c8dbc501853fb57b1b33351ca83f5801"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","0836929593759ed4a2e2abd4a2f04db2"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","ddc2f5caf56845c51e6d086b9d0fce11"],["/2022/06/10/tools/webstorm/快捷键/index.html","3578df5e4bd46cf8ebb08ef1871baafc"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","c71f1698db62f23cd5708705e81b061a"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","ece6d3eb0ae400145ef0aca9f8b89f34"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","bd3a83b888e2f27ed5e7d5516e2614e9"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","5a6bf9e6644467028690022524bd8373"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","528c4cddb1f6da9e86a21742b7a386ba"],["/2022/06/17/vuepress/vuepress搭建/index.html","4ca6415e5eac038937a3520ecf335221"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","69f25a9b911df85730701dfe70b5f624"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","5811a51c10708f3cfdb20c81255062d8"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","905ecb9cbf23e247f0ef79772801814b"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","79fec743d1e5184772fef1f8feb2d545"],["/2022/06/22/inductive/javascript/进制转换/index.html","adfc34d69f3b44af79b0a8e4ecc7909a"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","abf5b46d907184f9bf3fc4999dba6cea"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","adea294538d53cb92ac907e0359fb4a3"],["/2022/06/23/inductive/scss/Base-level rules/index.html","0039eabeaaf70c0debf1416aa1b984f4"],["/2022/06/23/inductive/scss/主题切换/index.html","cc76dd2252ce5071ae08813249138cf5"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","a95f5908b76d05c8db0e7817fe4139d2"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","fbbf133268eb0bea48422cbe6d4edadd"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","3577ec087904b5fe12b85a1f00dfe0db"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","6b064a8c0a6ef732ad663f38b834430c"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","533550ccd48e541c40c1822f121efe68"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","5a3a2573d4cc21a1d5b2c58a31a92c36"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","34ee1fca6b3074ef7237c99965bb3ccb"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","73cfd240db483128ff05a2cbab58e493"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","6d54e9942a37927ebd575dcac6ba98e5"],["/2022/07/06/tools/nodejs/npkill/index.html","e3ee8849b67b6bf9f485a16b2a1da411"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","92dbe0f81e2cf7f605b2945a6d7aa5fc"],["/2022/07/07/learning/linux/常用命令/index.html","adbf67d71a975cf0ef2a874e05387a2d"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","f2c3031d28ffb2c613c679618f84478c"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","72f92a26b85cf3416a508442ccf01284"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","3a8b1de9cd7a20720211a979e199abd7"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","54c0e4e5223a8474d238a1c59a11e3a1"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","db909196aeda990dce2e04a37f4092f1"],["/2022/08/06/tools/nodejs/nrm/index.html","d8229d3050b2da6f801f1c854269c752"],["/2022/08/06/tools/nodejs/nvm/index.html","3b7aef57dcd413d330655df5212666cb"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","8876aca06c01035f4b8c83136bb66287"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","42b2163a51965bc9781aa49fea5e818f"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","5ef98eaa095c439862834c2d915bf08e"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","a84a330ffd03a0002bd3e952bdc32e08"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","9090d624ec1e3738f376e31a3e97d1c8"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","d789c2d1e14a5b5b83c6ba9656839f38"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","8768457ac75206d195b7e5ab7321b070"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","bb32eabeb509d155e99c0b7e7f00ce06"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","f7bcfe44d1202bea7f57686e9cccb6df"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","4486bdc6df4de1ae5028d7fd6a35cad6"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","75e8c47eead0c548142a332428f472b3"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","73bc3fdf67292c8310af958a7f35fb92"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","9557d9174a3eba8b00fbd9e4186028ca"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","34918b37b1d11c920fd468564bb50e1e"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","f4de36c909bb84a9d0ac5552df532965"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","e219733a06d370d596bf5d6e277ef547"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","e8cc389ff9ffe21f2fbceed4291b3785"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","b616eacb18d0634c4f52bb0f0ee8a829"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","a8d6dfd02899e17f26d30e399bc3a5e4"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","11a467e414dd4e23c47196317f3b76ce"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","220ae0d794a2b521a131f15239dc7a12"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","2ce7de48b2b8d4a715a29c7c87c350b9"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","2b4a20f7ae9a5aa46f74a95d3e9473dd"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","93578c6564a7845cb24ea192e28b8ef1"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","42d774679d6c01b9f9edbe24cbd5a679"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","ed48571ce9e8d32b18e179eb7e5d40ee"],["/404.html","33640896a0eae7886b18e57007af3dd3"],["/about/index.html","ad6ff9d382a8277221ee4e9272b234ce"],["/air-conditioner/index.html","c1a852a631345817b22409c752e15815"],["/archives/2022/05/index.html","90d1c03cdac39beebec250a76f253091"],["/archives/2022/06/index.html","f0568d607aa56c37cacfa1500f0ddca1"],["/archives/2022/06/page/2/index.html","d1be588fa65f2beab1a4dcb23d9d0fa9"],["/archives/2022/06/page/3/index.html","245a6e0dce64b72984a2e46d64fce070"],["/archives/2022/07/index.html","cc3960be45c54e5067b4f8649ea12346"],["/archives/2022/08/index.html","efab6ddc2224a34bb296888f4bae10a1"],["/archives/2022/09/index.html","b6615c73f287b0c00ba2f0e02eab9cd0"],["/archives/2022/10/index.html","5281cf98f638e0ca4fe2bf5cfeccb2b2"],["/archives/2022/11/index.html","8bb551053fb45e508b891b8f99fc9486"],["/archives/2022/12/index.html","f8ecd9fe6e070020c756f47f86f2770b"],["/archives/2022/index.html","40b91e97dba7ea58bf3bf05e2089e9ba"],["/archives/2022/page/2/index.html","863f60934d7c89dd05e5c39ad03a6284"],["/archives/2022/page/3/index.html","ca40f649676f6df041d8ca507cf550f7"],["/archives/2022/page/4/index.html","7750af04a0bb2d57907c2e648aadd97d"],["/archives/2022/page/5/index.html","21c78471b9f7bc7aa52ed389f209e0c6"],["/archives/2022/page/6/index.html","d202974f397bad856e1948a0c58a724a"],["/archives/2022/page/7/index.html","00d43e3e01b4fc7a1dcfe71ff886f557"],["/archives/2022/page/8/index.html","115b16b5ee22e0647f8abd30c5b6f5b8"],["/archives/2023/01/index.html","2afde3c7e3a16813234f4386e67bb8f8"],["/archives/2023/index.html","08fd900d1cd1496b005ccfcd45a640be"],["/archives/index.html","36b8e54b6ca1486466869d04469341ce"],["/archives/page/2/index.html","e171420d6cbbb9fecd5f79e26005fead"],["/archives/page/3/index.html","1ca26b89e6e2b36750da8dbb01cae6a6"],["/archives/page/4/index.html","c039a46275f2cc85d810f7f53e730cd5"],["/archives/page/5/index.html","c85675865d0265bc2fde86bac1b2280f"],["/archives/page/6/index.html","85d9a10e221adb1679edd606330af267"],["/archives/page/7/index.html","333a138dd1745d6f681be60e0e729c0d"],["/archives/page/8/index.html","5ea68f83f81c5ae09d864667f90277f3"],["/bangumis/index.html","3ed62cef6d00e356c3823b50aced4288"],["/categories/FrontEnd/index.html","85a9ebdfc6fc9da261ba6578ee29a0d7"],["/categories/FrontEnd/page/2/index.html","1476da37a643680bb2cf1cdf31bda983"],["/categories/FrontEnd/page/3/index.html","f095367d3b8ed46deb3a473f3c4fb252"],["/categories/FrontEnd/page/4/index.html","a13b9fcc5752ade006b6d511f33c2cc5"],["/categories/FrontEnd/page/5/index.html","ec70d066f71db73cf605d7942aa592e8"],["/categories/FrontEnd/page/6/index.html","78218bb1894c84227db6149f9d9f2ac2"],["/categories/Git/index.html","316a7f37b2498b10a07f1d501e370033"],["/categories/Hexo/index.html","17c808d4b0cc30f237d8774df35ec93f"],["/categories/Linux/index.html","f07724f1ff821441528e1b098475078e"],["/categories/Nginx/index.html","fbb5370eaba689ed85893dca64b34cc0"],["/categories/index.html","c85d8907d2337c7c0f42b7ad5c0ae5df"],["/categories/插件工具/index.html","944b5cdc17aca47b71be2446f054ac5f"],["/categories/移动端/index.html","bc15e14e1d60705403e742292aefd99c"],["/collect/index.html","16ad88728b63be208c79358f160c6adc"],["/comments/index.html","a7038e63e8377b6388ffbb7cc043dd65"],["/css/biliBg/autumn/autumn.css","2f266a98ad491a62ff57dce9231a2c1f"],["/css/biliBg/spring/spring.css","af783e03bc0985fcf58420e7997606a7"],["/css/biliBg/winter/winter.css","0ffc08fc1d7932ca6c848d3996304e0e"],["/css/commentBarrage.css","c83ba9904002846fcf34a1f197c8e3f1"],["/css/customer_butterfly.css","9a26a6c93db379825cb1cf2ddf42d0c5"],["/css/customer_style.css","753861888ac71142e65b3d4404b992c7"],["/css/iconfont.css","1bb3d609637c710873913c67c55aaa89"],["/css/index.css","e065c9920bfac94752332954ef17cdc0"],["/css/loading.css","52df6349924d33be7f307fbfe4c2c8e1"],["/css/nav_menu.css","60917cfaad063f1483dc08a0b6843d55"],["/css/progress_bar.css","88fd78379ac1846d26606bd2f10ea63d"],["/css/rightMenu.css","5248b6eadb4461b807fb59a13a6078c9"],["/css/var.css","b4e92cdd34955973bac5252dba6d538d"],["/gallery/index.html","90fc2fd8e40771a34a9ff6bf2c4104fa"],["/gallery/wallpaper/index.html","6cb9340f3ef18f713e141dc2bae7b584"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","c84e1c3b9a1a34830ed061c1249bb9cd"],["/js/anzhiyu.js","263ab53ecf8b123b53d8def415ce1e66"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","f67e87d3cd255fd92ac794e72b41f10b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","80f405efc5e95cb06e8f94e26c018309"],["/music/index.html","123547fdbbcd6420293a94ea134f2ffc"],["/page/2/index.html","32e2d638e84c37dd6f37bcdf7f987f4b"],["/page/3/index.html","d6902dbdf5b1be6ec1b3e8f2d40cf333"],["/page/4/index.html","9f8ab208607cc824aba916a285bf9927"],["/page/5/index.html","7b3ac91fdb5450ed8b4e0978baa88156"],["/page/6/index.html","5763027781ebdd4d25581c424c81573f"],["/page/7/index.html","152e563961531ee290a4d2fe9330c80a"],["/page/8/index.html","3e6cd83ed5aa824a303abd2582a67261"],["/sw-register.js","5b2fbe825ac5b84c38f21a6ddb11f4f7"],["/tags/CSS/index.html","d012bd321cf41984f8de36f5eecd0ef6"],["/tags/Dart/index.html","ce0ae77b45dc99e529d2ecfe2630dedd"],["/tags/ElementUi/index.html","4eed1d4f3c496b572ce4eca90684ccc2"],["/tags/Flutter/index.html","edcafe26189d3f7bcc3acf1596dede96"],["/tags/Git/index.html","d256bf954ca32fe483bb31a3d5cbccab"],["/tags/Hexo/index.html","204e2b7b1df92cc03ccf66c34df87d81"],["/tags/Javascript/index.html","01698681d84a1b7d776b42aadc7956a3"],["/tags/Javascript/page/2/index.html","35c48e1fc41dcce7d254748e138fce5d"],["/tags/Linux/index.html","7e1d78aa3a71efdfdd1194ce5b59bf7d"],["/tags/Nginx/index.html","b6b93e003f8c59b2f1c45fa776025643"],["/tags/Node/index.html","d4953412fb5c072604a0a65aa0ac1a0f"],["/tags/Scss/index.html","4be8e481335bb90de78449b15ad37983"],["/tags/Vue/index.html","829e30a4fcd6b02a3c15adf2c93e70f4"],["/tags/Vue/page/2/index.html","b7042193ed4069d9b128584ffbb87177"],["/tags/Vuepress/index.html","03f43bd3fab2038e84ab03d4af94fa1c"],["/tags/Webstorm/index.html","42da9d1da90c656e52156c8796fb8728"],["/tags/Windows/index.html","febd576359b05e21e91a5ad5fc69f988"],["/tags/index.html","a768266f35c9faef95fb7682e872ae5b"],["/tags/插件工具/index.html","acf9ec0463e53fa8c71ef9a9db5fe5b4"],["/tags/问题随录/index.html","c697b3b9471f38b29354d1fc72a907fe"],["/zhheo/random.js","bb7a7ed2662d03e9fe0784476f56b01a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
