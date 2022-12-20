/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","47d04bb22a57119ef0f0254f43c05790"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","ff76599a81f1d35db965f57816dfb33d"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","9041651493fcae459487c359499c6743"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","a8292e9a84824d041fb67eccb1c7e062"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","d29e5c1fd357828f91fb2bdbc758c8a6"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","e047081c469123d15afaae3691ccaf2e"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","bdae3e736b4faa26f2d5dfcb60abea90"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","ecb84d357c3dc06bcd94cf5db6feb53e"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","b13328b8cc8bac91e280002d759f6ce4"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","68701e419879fc805399d0f4b8b42fe3"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","605feac256d7922b01806ebbe91ceaf0"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","7453404a0e8f947e00e4c84f2486257e"],["/2022/06/10/tools/webstorm/快捷键/index.html","fa7478c4262b3c2de4292ac9b54070bf"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","130b6c08beba0f0f7af36691d0b6a45e"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","5c2389184f783d732868ce971429c6f1"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","36fda94903cb64ce294d79be080098ae"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","cd525b3cec46b2972aa6e0060cfee682"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","0351a1085e80126940fe3d1e5277eed9"],["/2022/06/17/vuepress/vuepress搭建/index.html","0180d9d39805afffe7bc5c3947c21d66"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","28cc05b62ae9b946721b378ba2564c69"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","998e826dfd6108f9da5b7dd80387c190"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","47c00dbb45fef907715409fef07c5701"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","c5e091edb3a4246cbf25497b88b0c70d"],["/2022/06/22/inductive/javascript/进制转换/index.html","791528326427006ea8eb5f171f981bd1"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","96ec5c646793f1a66c7e19f409bac720"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","356939c296e99d4234df1a5d530e3ae3"],["/2022/06/23/inductive/scss/Base-level rules/index.html","6b0c57285f6736078286b29e2e33f5e0"],["/2022/06/23/inductive/scss/主题切换/index.html","94dd0de85796d172f490bd1ad88e59f9"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","cdcf4dbd60b6737f53f20fec34ba6aa4"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","c111a6e9c076601db42a0b9b99f72ed5"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","d846e99db86c2a4385d145eb18a4ba0a"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","6f8386579972c910a3cf91c67cea2d9d"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","f3c78b8ff3eac4bdc8baad5608b9910e"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","c09ed0e27709358346eec8b31b6490c5"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","4ea2d95371c629d18761c34afb8ae483"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","d7e81d49bb6706f29f278f1b2cd09bd8"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","b5fc356734ff40d62f05ec9a19f273d4"],["/2022/07/06/tools/nodejs/npkill/index.html","9aa433f4da336c152479f88348d37034"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","2c7b76cf491216554a92157e5b108c23"],["/2022/07/07/learning/linux/常用命令/index.html","0754e4d700ebada6bbcd655d67b78b8c"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","07036363579a1442607a8d8dd6b107e4"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","786e36d29601b0cacc66b291a9dcb304"],["/2022/08/06/tools/nodejs/nrm/index.html","d45c98509850622b0f652551a4acdf60"],["/2022/08/06/tools/nodejs/nvm/index.html","d1325ce5832eac9f9b2c2ecac9662cb6"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","38b359cb16d3d248bfd05589e9df9bcc"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","a05c3e5a5b3fe35746804281e6acd090"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","184d61d7e3ccd109c8f2bd6ba13864d9"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","90eb41d080a9ecde23c2e32647a48c62"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","349cb15f1d885e839c383750638bba93"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","bc96780523e364e6ce1be0699769d10a"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","76fe99405aa850e0b8c608ce8db39543"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","9b1c4c399f6f12b95a3f9f92f82d8105"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","fafb53803fbce80dee09b3bfd95a3c15"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","df143709468cceb2f07bf7db7590ac02"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","d88f5055fb65a09a6147141a0aabd693"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","54d18de91578c63d5de9562c5cdbeb23"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","99d057944dd7c7adcc0d2621d507fdec"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","f273e7337d73009650e1b6473693b6eb"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","d9adf8a265904b27211f0c3033628081"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","7fad1f7443f7f36cc1dc3c6b9929b4ad"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","ad9891bc1f68389a2fd0a44fc6e4757b"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","e8e316603e19cfec8f0537d65b392ac2"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","ef86d25c7a7809c5348abe55f4695029"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","f2204fcf1b9ed8acfd845f8dab162a80"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","b533ca82ad61fd2097b80570ef81c3dc"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","d1256dd0e5e22b898d8055a5c70d4f81"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","a939539fc588ae0b5e12f3f8c6dbca64"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","31dce0486aa39f7186d5b9ff1573a844"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","66b98a6a78db29cc6e63259b00a9570f"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","3215ba536797efd75e1d74f110bc62cc"],["/404.html","f12d5321ee884ff337b81adfddb441f0"],["/about/index.html","3fca2234be97338dc12051c1827c3ec7"],["/air-conditioner/index.html","b3b7afd951839ce302d01ee1fd1d0366"],["/archives/2022/05/index.html","d3b879785f8fd4cf291b6f83118b7173"],["/archives/2022/06/index.html","1618ac5aa9b0067797f68e128dea740a"],["/archives/2022/06/page/2/index.html","cbf34fcd19b05b0c614733bb0bb95712"],["/archives/2022/06/page/3/index.html","19fc7d05d294278a49c60cbca1843a0e"],["/archives/2022/07/index.html","860e128a84f7f0262bd623bee680ea57"],["/archives/2022/08/index.html","56bfde269f67a073b4102228ad016a43"],["/archives/2022/09/index.html","5ced0aa001c6e888e301c44a16edc822"],["/archives/2022/10/index.html","0c4505034c16ea0176816561804b1501"],["/archives/2022/10/page/2/index.html","6806fe853eab275ebe6993f0de21a7a8"],["/archives/2022/11/index.html","85bf16c48e83a7f63934ca17e36ebf3e"],["/archives/2022/12/index.html","2ae6c463d1284105cc6fc26a5060c4f5"],["/archives/2022/index.html","13b361fbe7646fb1e9a2ea72d59dc010"],["/archives/2022/page/2/index.html","0dc67251efe1748d06800fa406468e96"],["/archives/2022/page/3/index.html","810aded50b413e742ee6c034d35ef0ce"],["/archives/2022/page/4/index.html","5a52e37036930eac07cd23b657f099f7"],["/archives/2022/page/5/index.html","33ae45ee38342caaae93dbf2ddc323df"],["/archives/2022/page/6/index.html","4732679dad8ae37c61f63cbe9a54d870"],["/archives/2022/page/7/index.html","0842674d67921c3b799b38eeddc5d9e5"],["/archives/index.html","94c4b4bfa6cda5c485dae9e71ef44a28"],["/archives/page/2/index.html","18a20845c44ef3cfd902f1f70c3925ec"],["/archives/page/3/index.html","f8687e8876a89b1d33624283376d5ad4"],["/archives/page/4/index.html","9d5ab72618a6d74b2375b595ea08f486"],["/archives/page/5/index.html","ac37f90c834087dfdcb4350744f33230"],["/archives/page/6/index.html","c9b432c77c8408fc71982540e16a2310"],["/archives/page/7/index.html","ef229f8436c331ef8e7738a00541b945"],["/bangumis/index.html","28c788955e9f2dac400c8defbe832666"],["/categories/FrontEnd/index.html","0dcaa2e0223737d36b683a2b0fdd7aa9"],["/categories/FrontEnd/page/2/index.html","f17586bf0323363975e731f4fbc9f6b9"],["/categories/FrontEnd/page/3/index.html","56c5c5934b4b2dcf88f99bb052984eef"],["/categories/FrontEnd/page/4/index.html","bf8042792552bea52febf06fb4a0ca64"],["/categories/FrontEnd/page/5/index.html","a65e084366fb2f1c4076df067d1fb4d3"],["/categories/FrontEnd/page/6/index.html","97aaf549fad2692fcbd47534eab3a564"],["/categories/Git/index.html","b86fc53e61960eb3931b2a9e48491a92"],["/categories/Hexo/index.html","90864dadddbddb2818e743eb7fecba99"],["/categories/Linux/index.html","30b292f5ad0469d886a3ce2af0c23cdd"],["/categories/Nginx/index.html","1f681d31d66c5441a0581237b0ae308d"],["/categories/index.html","43f854eaa56cc90a0105ca0b6cb0ed9f"],["/categories/插件工具/index.html","beff91ebdc05a104b510aa85c104b39d"],["/categories/移动端/index.html","0e568b3abcbb156b101f0f11eacd8154"],["/collect/index.html","cafc44baa066f457c3220fd4cac8be4a"],["/comments/index.html","815e030d335947b8c67d0514f623f16a"],["/css/biliBg/autumn/autumn.css","4f5719863033bc1a88e59d6db19b7977"],["/css/biliBg/spring/spring.css","b6ca5ab973ab2d4bfb1ffe8038936cb0"],["/css/biliBg/winter/winter.css","d34667fc4ab35a7520983e90119538d5"],["/css/customer_butterfly.css","bf17dc7606e48508a65bdd16f4174a4d"],["/css/customer_style.css","ddc97fbb17d0c8cbcd23cc719326bb61"],["/css/index.css","ca948f1088e30b4d94a22547ee6f8f5a"],["/css/loading.css","7b2bfc5aa76852ec7f5a0a70df3a54b5"],["/css/nav_menu.css","aa53a0d56a4e6dd7a8fa78fca6674879"],["/css/progress_bar.css","9b21bc517acfd68f691dd395634bbee5"],["/css/rightMenu.css","e728ac48b00139f72815ba3e78f0f3e3"],["/css/var.css","218139c8f9d9e10bab9361a4781fe05d"],["/gallery/index.html","0dd0da44bd407bbcfb4b18361e4eb8d5"],["/gallery/wallpaper/index.html","476bafa32a761c07da405e58674e0ea8"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","45c9a3d97646549fc5bb50a6bb0e8031"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","5d5f1f16f9e6c13b6fab1ee28a64f584"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","54ddc9e221a2fcf55e305fe2c8fd8a99"],["/music/index.html","fed430a8bd577192884126cc4931be40"],["/page/2/index.html","14503924b22e0965ba5012f792d1f732"],["/page/3/index.html","dc60691bbc06de473aaae592d0e887f3"],["/page/4/index.html","c5474e2a365502c10e171e333174434f"],["/page/5/index.html","52ccd48f6bc08660e89b785b0e60c5f8"],["/page/6/index.html","fa86b5426aa78ec0669884f60854d639"],["/page/7/index.html","885801b6b3018fa3820ac043be86888c"],["/sw-register.js","5464c27855cab629bad91d991184b263"],["/tags/CSS/index.html","96ac2f35155966e66d617aa87d96d62e"],["/tags/Dart/index.html","84081122a359f822df16a5173a50ace2"],["/tags/ElementUi/index.html","c9c44ac281afbe89fb89f62044eb2e91"],["/tags/Flutter/index.html","58e9600e3b4d17399c45957ecc8138a9"],["/tags/Git/index.html","f609850940536a9ffb9171c9c5ecae32"],["/tags/Hexo/index.html","062484db15ac49ea4ed444960e6ec318"],["/tags/Javascript/index.html","ec8df255f53d38a89b1cf780e3d36ff3"],["/tags/Javascript/page/2/index.html","993b9933727641f504fcfe90c6874725"],["/tags/Linux/index.html","80ce2162ef023309173d2db62917a7f7"],["/tags/Nginx/index.html","6062a0dcc1f09e5132b6c32ace0f9d49"],["/tags/Node/index.html","992f8194894fdfa668cd86fc8eb08807"],["/tags/Scss/index.html","840f0b1157c2419fff65703ca6eda2ba"],["/tags/Vue/index.html","df8a61a7907ca7eceae9f3130c01c4e0"],["/tags/Vue/page/2/index.html","59c5a4da91a8b5c02ba87c57014a5895"],["/tags/Vuepress/index.html","4b00a0992e61005afcf33e896cd35f14"],["/tags/Webstorm/index.html","8c2ec1d14124a50dd9d88308765acfa1"],["/tags/Windows/index.html","adf7c2844c9b12055f8bb0e5e112aa73"],["/tags/index.html","c558fca4470d76a9ecaf332a6d8aa940"],["/tags/插件工具/index.html","cb3c9f8ae4ab047a4a7ea888283d9d2d"],["/tags/问题随录/index.html","8037a4fba77007e8072a813bb3be80c2"],["/zhheo/random.js","fe1562753418dba606145bf35a1efda7"]];
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
