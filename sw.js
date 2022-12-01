/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","30b45c647fa5f6d6e5dace836058cc85"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","9159ee39b4f081b54af2963c8130561e"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","273017ffdd7fbf6fb6706feed6524610"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","9dca4fe5fafdf55b6cc8d560ea3e75ec"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","663a15d468d62126bfd622f4c4b1613d"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","cef5c51fb8b3d1d385385cc96631da2b"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","17bbc0b1721ebf3b28bb825d384656c4"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","e0080780cf9ed7c8f2e03c11da911cb2"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","3b52419ab7d06bf60da84446ddfd6c1e"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","5bc04b5cef6ef0561af1cada5b6fdbf5"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","c1ae61c85bfd4c6179b271e2809fb705"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","cf7ca47c16fb48ed22099cf2b15736ec"],["/2022/06/10/tools/webstorm/快捷键/index.html","7e74ea5c9c69b8cc61baa1202300ff97"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","c118237715adae05e33cccbbfda2fbf6"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","f61e3ceb85a8a6a8c026ad6ba51a180b"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","c330a200d62d3765605f9701b69a6e9f"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","cd218cf949315d06993d15b3bb48df9b"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","2b3f66cac222a249b95d0c9e25e28cac"],["/2022/06/17/vuepress/vuepress搭建/index.html","ff30a9faec23530f0fc8d58518750c76"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","20df2e1058fc02e326a97a9d0043be23"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","d7f948a1263ffb156d71846cf5dc9974"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","59ece3bc0d5338250b31da374ed5cf6c"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","081ebaa3e109a7d2c86421362ee8c9ae"],["/2022/06/22/inductive/javascript/进制转换/index.html","42d665769b3e8ac660e7b9061f1c3450"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","8784548325aa8b5544e3bc751dd495e0"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","3a1f37a04aad8797f856b94fbfd9bc82"],["/2022/06/23/inductive/scss/Base-level rules/index.html","84f25b3a8281b14c2f6fa482fac1f0eb"],["/2022/06/23/inductive/scss/主题切换/index.html","716d5dc759fa588ef211ee32a351ba90"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","bc3d419c23ed9e830416a839e4ab3d0e"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","7b35d139e079e4929682a4afc5ac67aa"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","ff4d4530a297d3a63e833a5809950d5f"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","647f63ce03ff47e3d3b1352e47fe7e5b"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","f2adcd2f5f83265569bce5fbbac6b825"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","20afd99fbaf5dc4d9368f45c50f21ac6"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","9ea69c4f8a7db7d5355a03558e37f057"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","58aa1977755ac0ba23de9232e0c5e251"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","032b3aea15ff15b1f679b221648fd0a0"],["/2022/07/06/tools/nodejs/npkill/index.html","fc734433503921385983ed30c37b15a5"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","a1a6be56eca9858fb4045fe881f60626"],["/2022/07/07/learning/linux/常用命令/index.html","78e98744229d5d4c2c65758ebae6f15a"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","c0c263140ad835196e98a8f0aaa5c785"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","5c9e58dd86f49a2172ea7cedad78b648"],["/2022/08/06/tools/nodejs/nrm/index.html","c1c5962ca18584f101eebb06c433f50c"],["/2022/08/06/tools/nodejs/nvm/index.html","425d0187da4ac5422eef686cabfda313"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","bde61dc9b1f9822929e2085ef5c9407d"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","e8d07ac0250737e4a20ea3b5ba177408"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","bbdc987816ff889e793863cffd167c43"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","449d8c2a4b8957967259f167a6098de1"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","fd0cd8bbb11f257933f9276fa161544e"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","36671e7e60d2650fc14b17419370e1f3"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","2470aa25161e427401e4889e09b731ea"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","2998fabd92afab339c75d9ff8231ef3c"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","e027674ec0a56081f7bafe7cff6d6608"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","fd9e093bd8c7997f6d9096e1bc4b3ec5"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","81c487a8a3b834894ebf68d607441af2"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","b7e7951c945f175dea5ff63eb735097f"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","ba04e08d5f23c145173058f06f11c740"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","d7e914a5bd36800513244c78ed98749a"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/browserslistrc浏览器和nodejs版本控制插件/index.html","c7a587942e34195c8d00ad8761c987e8"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue-cli3开启Gzip文件压缩/index.html","2651bccb5dd9a15a45b20828c15fb385"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue打包优化分析插件/index.html","080b87265c1f47cc180e2e5614fc4124"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","7fcfe75d8e8af6fc5a53a4b85716a6c8"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","f6e90722e49095670157025e63540347"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","cc941721164a46ad370a4ae04ce100f1"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","5fd911ce373d7b4ad6bac08d6ec8ea01"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","be77e073b53ed4e5752a7632aa5ef4b8"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","8cdfbaa8c77e92ac44a07fe4dc4b926d"],["/404.html","901f38fe06cf2e11fc9345c5f0d0646c"],["/about/index.html","e1481c1ee52ae233529d986cc0a49897"],["/archives/2022/05/index.html","d879ee2f6ece6ad593bf9bdb1aaf8e70"],["/archives/2022/06/index.html","99ff2cb378f7943a09e244c8fa7fe09f"],["/archives/2022/06/page/2/index.html","03a046f54d5fda3e972eb4fcb525c920"],["/archives/2022/06/page/3/index.html","eec7bf55a34d306872ea2bf4bab41c15"],["/archives/2022/07/index.html","8e440f6dd3d78d7ba2840eaa7f83ee59"],["/archives/2022/08/index.html","3df76a5f8f7505eea7b87c7ca4806466"],["/archives/2022/09/index.html","525b98cbde7667e6baccf4dad4d46652"],["/archives/2022/10/index.html","119cbac8c7160b9cbc60b8505fdfcdec"],["/archives/2022/10/page/2/index.html","fd625a6d9259ebf2443605b32868acd5"],["/archives/2022/11/index.html","616a9003f3eb1ff741264586bf0f503e"],["/archives/2022/index.html","5fc2d14605fd5bd1afbee0c8f1a04b3b"],["/archives/2022/page/2/index.html","b5ea3b0a931e90b86d7ba2837e805feb"],["/archives/2022/page/3/index.html","a37e47158209143df3b66e7d26453f9e"],["/archives/2022/page/4/index.html","2b10e5bfc1993f1abaf7a81e22f87cb1"],["/archives/2022/page/5/index.html","c9330ca69cd06c1d0d3026cbad4586ca"],["/archives/2022/page/6/index.html","f0810637932dc593717d4b7aefd89697"],["/archives/2022/page/7/index.html","634fa42b63dd0e1388d6a693be8a440a"],["/archives/index.html","c8f869f62f8b69e9b511f811fb78ec47"],["/archives/page/2/index.html","82694b8b280a1a558721b65c08f448d2"],["/archives/page/3/index.html","7632978dfb32528117e9000a8b66a31e"],["/archives/page/4/index.html","392cdaf88582c006a799142b529d1d79"],["/archives/page/5/index.html","139c3be8988518808e596b76cba941e3"],["/archives/page/6/index.html","85455fc32b1a50d80884a143ac06c32d"],["/archives/page/7/index.html","dfce3c98b590cada026830ad897282c5"],["/bangumis/index.html","566da7a2126d16514df30206a5748989"],["/categories/FrontEnd/CSS/index.html","8b3ca4ed2e8ff3f98ba243622e46c87d"],["/categories/FrontEnd/ElementUi/index.html","9ea6ed61999448362541ee1b10269329"],["/categories/FrontEnd/Javascript/index.html","64766bfa6f84b403abe7dcfd0911b0eb"],["/categories/FrontEnd/Javascript/page/2/index.html","e25a913347e27ac8ed0af12a763a4549"],["/categories/FrontEnd/Node/index.html","9c262e651a4691f2b1f2650e3a432fa7"],["/categories/FrontEnd/Scss/index.html","ff52da9136b0701459a4ee7e93e242ed"],["/categories/FrontEnd/Vue/index.html","0d54d691db334c6381ff108f4cb555fb"],["/categories/FrontEnd/Vue/page/2/index.html","dcc3b2c1312f72b0813c582ec5c2efd5"],["/categories/FrontEnd/Webpack/index.html","c95cdde403b14981f5d0ef0d1e4b7d40"],["/categories/FrontEnd/index.html","4b3c9bdc3244689872358eec41e2f91f"],["/categories/FrontEnd/page/2/index.html","0207622dec806063d6e7d4443fc37702"],["/categories/FrontEnd/page/3/index.html","cc16f69bd9abbec1babfa4495cf6c287"],["/categories/FrontEnd/page/4/index.html","357f952368c5acd66452aca47772ffd0"],["/categories/FrontEnd/page/5/index.html","8660b328c5d954e883b3d6ac70071669"],["/categories/FrontEnd/page/6/index.html","3ef5a0810025ae5cc1c66552f7a398e8"],["/categories/Git/index.html","3ea8c911fa55e31fc2543e0313ab425c"],["/categories/Hexo/index.html","36c9b506d9ceab4d48f7f95f6bec5054"],["/categories/Linux/index.html","bca5c7868f6af2e903e6f8fbc0d5634c"],["/categories/Server/index.html","131c9a9776543489bab017b18aad5551"],["/categories/index.html","7af426dc27d2fe9cd732f02eac71ceef"],["/categories/插件工具/index.html","0ac1babd4877844429e2a809dce813a6"],["/categories/移动端/index.html","c70d03adda95092a3198290d08cb0ebf"],["/collect/index.html","8f10d910a037b8479717bb628d6ddc26"],["/comments/index.html","85f63fafe3a719756e1f3283bc2b5cf2"],["/css/customer_butterfly.css","9be4e246bdd30aed728d5335b6b1d08e"],["/css/customer_style.css","39c33ed4afa4a9e4610401ee93392d42"],["/css/index.css","b38ae490d0e686d152a727c265d1b995"],["/css/loading.css","960fd68be3216c53334a8477aaf6027a"],["/css/nav_menu.css","1a15c25e3f73e817368cd72e21468626"],["/css/rightMenu.css","6f84e2da9a232809e7f695fbcbb27cbc"],["/css/var.css","71f1c385a69232744e96cbb98ec395d5"],["/gallery/index.html","b36bb08cad95bc8e58944dc09cdde26b"],["/gallery/wallpaper/index.html","fa15f6d5db524ccbdd46c59b43668657"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","937be68f56d97ef2f196bfcb156bfc60"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e9f66c80e78c65c833151dbda7976d99"],["/music/index.html","6cced54d8547a6915341943c68b392a3"],["/page/2/index.html","e244278ddeeadc4a400e3b8f32200b69"],["/page/3/index.html","759c9b313ce7eb805fd16306d87e285e"],["/page/4/index.html","96c585a42ad4fc80988bdc525299745f"],["/page/5/index.html","00ee6b69b63710436123ff6e138e2bd2"],["/page/6/index.html","e1f0a66e4cde950c38c1b91bba367df1"],["/page/7/index.html","a1e327451ee521f305428ef160818001"],["/sw-register.js","df20fd81fa8ad149fbd8bb02d8b95fd5"],["/tags/Flutter/index.html","dc0301cba13df6f01d71eb9033f743e5"],["/tags/Hexo/index.html","0f5a702d5318868b9fe61feac0fadbe2"],["/tags/JS小知识/index.html","5db2a92fd702c77f8f0e446d85b62868"],["/tags/JS小知识/page/2/index.html","05608245119ad27f25c8614b88aee671"],["/tags/Linux/index.html","a6013761572aad14556c2589d27f55af"],["/tags/Node学习路线/index.html","f42aef672587a118dbeca0c5368c9001"],["/tags/Node小知识/index.html","c79cfd856251419159d1a5c22769f61f"],["/tags/css/index.html","a48169f21dc26ffa555c99d8e4f1acd9"],["/tags/css小知识/index.html","1fa627fb4c512f97d2ab1f7032cd32df"],["/tags/elementUi/index.html","9a3c567a93c9f82fcd5837698c1349b3"],["/tags/index.html","0581e299d8edf79212b266338a3523d5"],["/tags/javascript/index.html","72ba5e2138d64ea0133684e8421829d6"],["/tags/javascript/page/2/index.html","da3502837472b3b985101668fb49b1ba"],["/tags/nginx/index.html","141ff13a1b5ceae6ce4f17c806b7ca73"],["/tags/nodejs/index.html","cb6484eb0c418949db6a65445670bc59"],["/tags/scss/index.html","873243ec505738816c3eb3ebbc3d7861"],["/tags/vue/index.html","2acb1d265734cb97a880d420955ef0a6"],["/tags/vuepress/index.html","13d5d84a842a8d6c5591abfcdf4a57ff"],["/tags/vue小知识/index.html","1c21bc6f855fa22bf0ac8456e73cf70b"],["/tags/vue小知识/page/2/index.html","f6e6622da09f7a4f08be42a3aa5d2875"],["/tags/webpack/index.html","1320441c64d4ab909eecf489777a7f9f"],["/tags/webstorm/index.html","272541b2047e5a365bed552b3ec214fa"],["/tags/windows/index.html","1e90ad035d10152e289234c75fd8e407"],["/tags/插件工具/index.html","809eb4b0841193e0c55a1b0307bf3093"],["/tags/问题随录/index.html","593489b36720dad1575a68b64382cafb"],["/zhheo/random.js","833dfcfc1de8792e83066a3ca9955087"]];
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
