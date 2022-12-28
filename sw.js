/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","0840fc1b0348966254846a81f7868f60"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","863178d0ec80e3e77c822f4e50ab69be"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","8e7c3b544de2f876c73987f98bcb1484"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","e0cf8d38f487472c3ca76482c2d2389e"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","69305b46798349ac05659fd80019c265"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","fc2924b1360689cfe7752d6e25410cd9"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","9bf5d4fe9f63cd9e533747bc012dad7c"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","bbfc1036e7dd07356a6c11ff6c133e72"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","218433b2c677d09d2e95e676afbe6d6f"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","7062f3055161dbe17f0b427cac976956"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","69d1adb7b0a4d412dd89a3f30a627ce5"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","27800309ce407c3de450778e5c3f2a34"],["/2022/06/10/tools/webstorm/快捷键/index.html","edc6ef120b4b5710a51af4400ee6f819"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","fb0c3f293bdcf9fe84deddb0e5f885dd"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","903b251f3ef52c66cc31000cd9fcc97f"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","e5f4f33e6208731da1bb33fc32977688"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","5f03650d619de90565ab698d2da994fd"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","8a666cf305070615eb57e5d11b342da1"],["/2022/06/17/vuepress/vuepress搭建/index.html","af0087b86d04b53be67c13054a428c03"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","68da56f562c291277f491f697a01a1cd"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","2edf1f90ba824a22a20692ccb8cd9ffb"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","e17e08ba8c53d514dd50457839c14bec"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","fdc9832cb5457bb90a093e87cd51959a"],["/2022/06/22/inductive/javascript/进制转换/index.html","e4ef7b2e7c94cd3a31a672883c9c7659"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","f19d267281a91b4d07e067fc560fd2be"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","64d65e0ad4aed101068fe0edc91bcfa3"],["/2022/06/23/inductive/scss/Base-level rules/index.html","4b4f1d08ead8e2593346e13f2fc332ba"],["/2022/06/23/inductive/scss/主题切换/index.html","6e0f598d9add1063c2e77a74259cac3e"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","e24085d55639281de1ffd18f7ccae065"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","fe3fe81f55542d3c396f8030bac8fdee"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","3e89b27ff95a304fd97965971f4bd039"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","9fad0ae70076bfd9684a1bfce6803161"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","9bce49db027ca7ff6309e4c1adc2fe17"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","935bbdd745dd6f5ee38b4c4a739c84bf"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","8b9bde86cacdc424621a27de00241bc7"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","662ae4f30aa5b2d0de185728999ac63a"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","dd1446528c43e176cad3121b2a5906a8"],["/2022/07/06/tools/nodejs/npkill/index.html","9bbfd162ce6c0a59f778f242e31f7e25"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","92ce397b90536556800be8bd64eab5f3"],["/2022/07/07/learning/linux/常用命令/index.html","fd8c67bc2a9e03d6790dc06cecfa4e82"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","fdf2d3b0f999db62f190cd1cdd208572"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","0932af3f8cb0a62f0b2af6177665d6f9"],["/2022/08/06/tools/nodejs/nrm/index.html","b6b7b99bfce16d51c4031aa07dc96fa7"],["/2022/08/06/tools/nodejs/nvm/index.html","3c48872c0f9f7c3d7e39d5b5233d9896"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","cce9eaf44d3de1038ca5bb29d0a94f44"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","ae0f8b5550f7fc61dd2ef649a63b726b"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","c9a94a2dea235c875533918db099e35c"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","ff3e4c6ee03c7dee5b1c5064028da9db"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","65a107541deec325f91f1f622e1ab54e"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","0fe233efe43ee803f8983a55fddd70dc"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","78c5464c5e1ef2b5447774deab7b3a5b"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","5e6c2356f962743fe02fba7b3140241a"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","22e60f13bc9a5f4e2f536ed9928ffc73"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","28f2bf133497333be337b129e87ee9f7"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","7532b190457ce201914b9e2572860bb7"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","72194239d411b5dcd2d9caae535f10fd"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","450cf6b67f3e25e6845008c145184411"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","673a67b84383762126bd3db95dc5f868"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","72ec96dcbb2f9734b13ecef8bf736691"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","8a460ca20c9ace0e0348a8d6f700e564"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","1678815595eda415068a494ce017d358"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","ada9bbce2255d7f981bf1f79e6e71ae8"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","b6b8a8ef803032585a406a2462c3c085"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","3670afbaa16835e5a7792789e8b39e13"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","4d70fd9130723171f559066d78160f29"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","98ae49034f0925ba2a3acffd17532983"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","244aed5953c11a0b5e9b3dd754de21f8"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","a3cf0497b031c5c9599d7d52f20bdbee"],["/2022/12/26/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","e9d02dc3032eac75ddf6c26817fb2a3d"],["/2022/12/26/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","92ef1a8153991e4781b37c3e32424001"],["/2022/12/26/inductive/vue/vue打包优化分析插件/index.html","cd13bda1b5cd73260b143c7dce97ad41"],["/2022/12/26/learning/mobile/flutter/flutter-组件/index.html","c4f33b85d0015cab3b784ddf9e06a998"],["/404.html","486e302025348d53445e995f428f5089"],["/about/index.html","f656831f4d5d3f68417d18da9b447067"],["/air-conditioner/index.html","8fc52a65a218e61a324ea59a34955420"],["/archives/2022/05/index.html","4038e3db7f4fa01476eb1644c62c137b"],["/archives/2022/06/index.html","d16ad8469f1dbd021632e3dd6c191081"],["/archives/2022/06/page/2/index.html","827ec9a9893dc71de7e09e793bfaf524"],["/archives/2022/06/page/3/index.html","7ead885e5356596d5dc6a683cd0e3778"],["/archives/2022/07/index.html","ac92978a6066bda161e608877a5a94c1"],["/archives/2022/08/index.html","04a191894da8c6757517dc021b3cc296"],["/archives/2022/09/index.html","1f993f6a88a13886ab97f41ec63ff9ab"],["/archives/2022/10/index.html","d42ab63c899549d0f01d74eea06fa801"],["/archives/2022/11/index.html","0f294cbddebea642beefff17fd8bdb3b"],["/archives/2022/12/index.html","edc9d88e0e448cd877c81e657dc4fff8"],["/archives/2022/index.html","5d26201ab8f95612c4665111bd2fe4b9"],["/archives/2022/page/2/index.html","2b899a5202b073a2e3a5656d83493ab3"],["/archives/2022/page/3/index.html","7697e22b8a62444b2e68420b02e2dfbd"],["/archives/2022/page/4/index.html","cfdf2b036dc46dd9f648fed0b7d076d1"],["/archives/2022/page/5/index.html","94c3579330a570046d987a0f00001d6a"],["/archives/2022/page/6/index.html","7e0a4b62c2d2021eb0a50522b7d5f6f8"],["/archives/2022/page/7/index.html","3834916d7088c4494b410d983c634eb3"],["/archives/2022/page/8/index.html","d84247509ec5631aa766542a415c38c1"],["/archives/index.html","667ac54c368b6b50515bd2382d9c6b72"],["/archives/page/2/index.html","6e39e481c1cb653a64cf360a0d4a6333"],["/archives/page/3/index.html","f51dfc67ba39212cde98a9f71e57d4ac"],["/archives/page/4/index.html","ae23ada4b6e357f6c10aa3b9a18d7ee2"],["/archives/page/5/index.html","c6491294bfb97686d27d497ff2b4d440"],["/archives/page/6/index.html","fe15ba9a7f4f3e355335c5ae55330d9b"],["/archives/page/7/index.html","e07cc97968824dbb45fca035433187bc"],["/archives/page/8/index.html","8921a9ac7560a60cc832f01a61507a45"],["/bangumis/index.html","ac0880eeed42c80cf32ffd3a9e953ab3"],["/categories/FrontEnd/index.html","62ea0a71d2ee213c52080d3dcaff6a92"],["/categories/FrontEnd/page/2/index.html","53495386c83382f9da28f0062b708c55"],["/categories/FrontEnd/page/3/index.html","3e53d15b33e47f1bdecbdae91e240674"],["/categories/FrontEnd/page/4/index.html","f5f30e073cd3bf62c8398702339ff482"],["/categories/FrontEnd/page/5/index.html","811ec9cbc6087b6a4562485c188b7963"],["/categories/FrontEnd/page/6/index.html","53bb9b47b54ea40f4beb111300830ead"],["/categories/Git/index.html","7c6c14db62a8f903607a96d193e04750"],["/categories/Hexo/index.html","f446f0bd6fb865ce66100e840bfc3517"],["/categories/Linux/index.html","d9a3f7ed88a03d1be9cde9897ff7611e"],["/categories/Nginx/index.html","c4e9e44f81543ce17dbabaee175a4dff"],["/categories/index.html","20b04fc55a642fc502592b4392b0ae59"],["/categories/插件工具/index.html","1da9c8f2b5579789215a7b5f0e442202"],["/categories/移动端/index.html","5d8cad78916b8057b42de3ef32d3f1c9"],["/collect/index.html","83b2f72f2dd1bab4b658109415f9bf23"],["/comments/index.html","7e56d6f7b67099a68a531709aa2eed73"],["/css/biliBg/autumn/autumn.css","72a4aa96d4b5a6c29182ed0ef6190a5d"],["/css/biliBg/spring/spring.css","e7559705a965eba95d4a544f794c6a2f"],["/css/biliBg/winter/winter.css","20cb66d9b3e412369536971388cd7d81"],["/css/customer_butterfly.css","e0b3ff840d54bd70a53ebfc134e2fe7f"],["/css/customer_style.css","ef9e6dc5526fcf058e59f5a9a46cc30d"],["/css/index.css","53a78c6fa3b36572361765fa4e6aff85"],["/css/loading.css","8206d0be7bc1655882ca4939eea5d512"],["/css/nav_menu.css","414644071f2c19d13e2e595bc7dc2e20"],["/css/progress_bar.css","df8b17773959eb2023e66a4a9ad53664"],["/css/rightMenu.css","ad47fcfe54d1902294345a25d66ac6b3"],["/css/var.css","41408863ac9cb4d46dbc4f57a9ef5e41"],["/gallery/index.html","3a26d57eacba207cb3b5a5560e208185"],["/gallery/wallpaper/index.html","21075743e1cd9e12451413cdd7369e71"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","26c85445ea9538c5f48c7681a6c63178"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","5d5f1f16f9e6c13b6fab1ee28a64f584"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","ffd3192d79fd475932b96e9e910e0e81"],["/music/index.html","6879383639b2f4e7b8d2e35b973eeaf3"],["/page/2/index.html","e4d85b8d9ec8ed6db1497b5150df1cfa"],["/page/3/index.html","606519a17b2e853b41c5888be7437ef4"],["/page/4/index.html","165a10a72a888fc04a68d3e8ee3b50ec"],["/page/5/index.html","909c2c76ef0a1b84b8a8b2e86b6e0239"],["/page/6/index.html","f0517fdff0b0ef90be3e57e8ec5e7fd6"],["/page/7/index.html","0f74529f683ee4ed1ee98da93592e189"],["/page/8/index.html","54a4e3e1cbc56820a9e7a57473e4cfee"],["/sw-register.js","41665777a2a8286d8a9bb747c3aeb0d7"],["/tags/CSS/index.html","fe5419ddd9ea82b894bfef396066ef37"],["/tags/Dart/index.html","121a4370dabe543b94c0da1642732c04"],["/tags/ElementUi/index.html","534d67de18eabc714f3ddaba57b093f0"],["/tags/Flutter/index.html","9362b832f8445c66d28955246972472e"],["/tags/Git/index.html","08d0f689f143e8cc3b68f1a9675f72ed"],["/tags/Hexo/index.html","19f76e5901b30d9a685925c4edadede6"],["/tags/Javascript/index.html","4766d9ae4684b2616ca8f1ee87ccfcd7"],["/tags/Javascript/page/2/index.html","2980f20b5c38708d08ce5f07f50aca68"],["/tags/Linux/index.html","d21ff927b5e7d641e7c505580fac3ce8"],["/tags/Nginx/index.html","b4930a17c5455a0e29ad08c83121aa64"],["/tags/Node/index.html","5c27b8b6418d8986261fb1b8193a2801"],["/tags/Scss/index.html","07b9065fd4f8011fdc08a4ea623abba7"],["/tags/Vue/index.html","e327d4d448683cee973161c1545d5c87"],["/tags/Vue/page/2/index.html","ebb863db603509a6ed54d0048bd46639"],["/tags/Vuepress/index.html","02c89e13a96463d505e7b525d4e57925"],["/tags/Webstorm/index.html","9b8bd7b646b5b80c8614127a909738b2"],["/tags/Windows/index.html","1321fa8e69727ea44247724fc9825f86"],["/tags/index.html","652cbadcae361dbf3c06df3908e537f5"],["/tags/插件工具/index.html","ebc29fadda6bde021daec1f9398f166c"],["/tags/问题随录/index.html","1eb6016c529b644e86f559c5d75739ed"],["/zhheo/random.js","78da4b89964b5805b6b0bfedc2180033"]];
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
