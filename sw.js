/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","73a47e9290120f14242a80d5e9bdd4c5"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","3d6208c1f4d58b122e476ca5b152bb0d"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","f663e6ea3b10da88445faa6d7d4c2948"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","18f6ff8316fce7b36721a3418375779d"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","bc7b00c6aecd512575ba5dd61d18b33a"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","883f21d7e478a9afa0de2ccf66f0f265"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","60570a00326c4e159f88d6856cb85da4"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","46a3145d27cacc42da77bc12777fc787"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","18dc2bc27f28cf1b81494308bbdd69f7"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","5efffe60496c54670bacba699cd561ff"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","f661d9e515a6d8faf3618d18420d1d15"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","b99d8491dc94dd11c1aef6ba2a08f54e"],["/2022/06/10/tools/webstorm/快捷键/index.html","c318d4d26fdfe7bb292e658183351814"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","28199891b5f09e7c1b937e24897e0c30"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","2f8a1c83aac2bec47547749b67435243"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","0e40800ef546856a4b2c0b04c52628f4"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","c7ff7b73ea41642eee710dff3cc2a921"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","151ecc94ea489399397f9c92f5e8cebc"],["/2022/06/17/vuepress/vuepress搭建/index.html","8db526a894ed2038fb757a2b108cdc09"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","8dacf66b66f194faf8f3a72a63715133"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","da72f9407eb288eff8a1d9076c9c74a3"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","604a57f0a62b9fd763a9c81160c3f59a"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","495d8111491250a15db0cb3dd6d5673a"],["/2022/06/22/inductive/javascript/进制转换/index.html","046bf6700da3ec12c50bfef6a4281573"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","d46e4d0026114f87d2cf0f45efec5c75"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","db86fa89e933a64fd7bcba697d0c1ab0"],["/2022/06/23/inductive/scss/Base-level rules/index.html","89e922416426092f24aae27fc43fad9b"],["/2022/06/23/inductive/scss/主题切换/index.html","7da17939583585d28781e9830796577a"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","bbfbdb05ffe0358361658e62e67e5d32"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","7bc19570345d237411eb880a25bef8df"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","bc928918c72749f6ec79fd334c9c08b5"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","4746348e4c4ccd84bb6e3b9184f40f93"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","ad24f577261ada034e67dd9549b22723"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","2a65f763d3e883c58f570a31c17d2ed3"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","73b64af75b5c4fb5812978bb7a3da2f6"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","3f4edf604a31b1cd80ac659aeb08a87a"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","330e8f83339317453cba30d8ae25a7e5"],["/2022/07/06/tools/nodejs/npkill/index.html","da5a53453aae307cf443ba3ff8d1e26a"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","e919482d6ba4039451073d068728a39b"],["/2022/07/07/learning/linux/常用命令/index.html","78606d5458a6a0a9b9a98446068f3e52"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","69ac7534ea858d4a4868886b8613f28b"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","885ce34f99305ba7bc8222a0490f5e30"],["/2022/08/06/tools/nodejs/nrm/index.html","0a5cb7fca8d42e4bc44b774fb01991c4"],["/2022/08/06/tools/nodejs/nvm/index.html","5ce4cac1268a568c6ff4688c189cc01a"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","7a18ffa5ecaaafacc29d23d5e262ae96"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","1c64a6c3323d44dc8c0faa9620c77f0b"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","3ff0c27414e45ecd302752dbf0f9e89f"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","0ff5bc954dc1951d78b997bdfef9ff7c"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","dedb3dccd38ed1e5a7aa4d052d192a1a"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","d0bb6581f54fbdeeb33be94291154ed1"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","e418efd2a513bf99fa0c0ce1ec6d8713"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","d0930d4d6362ade0b9147b8f631d814e"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","dea1705c779348efb0d3f80a6bd31ede"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","f3593f84302968d17f8f938e0296ebef"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","33792575a7bdeef7b7fbf47a70114e68"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","4172b0a80dde314dade2d07a6f3c0caa"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","3f2a545221f2a7a6aa805649d59074fe"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","a7babc6802d3be9bde5851c1296170e4"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","7747fe51c7de2dbf6ba7d3b9f0546e0a"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","20479cc87914f685a5557b3095f651b4"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","77ea7db6d83625b1e52d3fb6d153d764"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","114b5efcf8771813b88d27275d26cff6"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","51e5545610025e618f8ba9708850abfc"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","20feab765bde6caa090966a3836a04c8"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","4f7809dee9c4b8f93c9fc83cd99445b6"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","f114bfdb28c16e39869e669fc97efd10"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","7741b1a27d124e62573ac826541e2e08"],["/404.html","271117a1b73e973a8f67e4d607ee61c4"],["/about/index.html","ea4994c025c2a9aca1f7b85eca3d2d28"],["/archives/2022/05/index.html","0f7040d9fe9867b850bc983ad7a8d3f9"],["/archives/2022/06/index.html","e6147210da8d34e7fe23c5e06dc50366"],["/archives/2022/06/page/2/index.html","3005821a90d38f17885f9bac6e81c84a"],["/archives/2022/06/page/3/index.html","4c80bd4fb12f3add4a30c68ef9304967"],["/archives/2022/07/index.html","3944cc18e698992a53ebd2e5996338b4"],["/archives/2022/08/index.html","902fd1019b9dfef548084bdeabf4c60b"],["/archives/2022/09/index.html","fe2ea5489852fe5e8904b8f372cbb5ff"],["/archives/2022/10/index.html","92d7dc4b6f9cbd8dc133e0097189bebc"],["/archives/2022/10/page/2/index.html","94661d56d7dad31fed301f2af4e7d987"],["/archives/2022/11/index.html","eb4940278c88617148196eba939ba68e"],["/archives/2022/index.html","8e0bfc5abe2ce17e2bfb9b4b777de60b"],["/archives/2022/page/2/index.html","649516462bdfd65069da394b53a4cd3e"],["/archives/2022/page/3/index.html","980eab9bf8178bc06e79357c82c1e48e"],["/archives/2022/page/4/index.html","be891d43d7f22c5d6b4cff4a7b73a16b"],["/archives/2022/page/5/index.html","df4882c41bcf308963153de7a88b1e01"],["/archives/2022/page/6/index.html","85622e47496e71e323e7a39e12c68f4f"],["/archives/2022/page/7/index.html","ab79314a8789e2bff79731f93190a70b"],["/archives/index.html","cffa41dd5a471b16a6a9197ccbbc9d20"],["/archives/page/2/index.html","68dbcc6adfc45ecfaedec8d75d8bae6a"],["/archives/page/3/index.html","d3c3990f73ca2ec79922a189b0c2afd0"],["/archives/page/4/index.html","1513a036bc1d54c62a7e48af8d70637d"],["/archives/page/5/index.html","3be1fb38859c568a565badfbf0773632"],["/archives/page/6/index.html","f4942b5b4e0f520fc4c2dc379c5181a9"],["/archives/page/7/index.html","2951485e9d3f0b4a845bc884bfa88f22"],["/bangumis/index.html","6b50be6899777a62f0cbce603af18281"],["/categories/FrontEnd/index.html","3499c9056d803872e69f01b3836097e8"],["/categories/FrontEnd/page/2/index.html","d10bd1fe2b32f46f376e6f03eb50e562"],["/categories/FrontEnd/page/3/index.html","008b2f1d1da6f4909a8e9e7fea8d43ca"],["/categories/FrontEnd/page/4/index.html","016d7552e7e25ed2211347fe405089c1"],["/categories/FrontEnd/page/5/index.html","0ce117296ccfacffba0f5007ba1304d5"],["/categories/FrontEnd/page/6/index.html","d77d10e9d130a54c2b81fa2bc2bbca8c"],["/categories/Git/index.html","dc6b47a34b62827edf4360adb3b75940"],["/categories/Hexo/index.html","d8e00fade34b2fe0fa5ea0d9c9e7e1f6"],["/categories/Linux/index.html","7f53bb001b5fa0e981dc72473eceb085"],["/categories/Nginx/index.html","cc3ffe69bb0d36980a9e947c569b0beb"],["/categories/index.html","49bbb1b7f6ff0019129e58929e58314f"],["/categories/插件工具/index.html","5edaf85687f646dd31a780755bd2d126"],["/categories/移动端/index.html","9c8d354defa6cbbaaf03d98be08fe835"],["/collect/index.html","5bf29f9cef76375f2e9b6b840774be3a"],["/comments/index.html","5ad9771bdf6fd53295ddd81da99d6e39"],["/css/customer_butterfly.css","f0d5e5723ca55197ae3eb6dcf852ffb0"],["/css/customer_style.css","239a2d528af0069a32af49d6e5f333f7"],["/css/index.css","1a64e5149fb42b09e90203310117602c"],["/css/loading.css","9b7b8b22bfbcc72c21d863792b326556"],["/css/nav_menu.css","8b4ede60a084876a3e01b95f12b2d83b"],["/css/progress_bar.css","963c8bd9e46fcdd6e567d5fabc9691ee"],["/css/rightMenu.css","95b31b7aaf70761a90a9398dec0572ba"],["/css/var.css","4f86a6f1beae7fa352c21b9af711239b"],["/gallery/index.html","219b976ba0a6efd8c6f6c91b221d4c33"],["/gallery/wallpaper/index.html","8e1ba80244f86fcc52156b4b6238f2ad"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","307dd1497c39030bf258820ecd0b609b"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","03866d8c56554ab5ce217f976ca22746"],["/music/index.html","c248b8db1632c6b8db217795e36077ff"],["/page/2/index.html","d7e23ed57bc2639a87b52c178e5d9e1e"],["/page/3/index.html","3be2e6cd805de01ce743b3a37f2d06d4"],["/page/4/index.html","913aedf2b7afe08dbc15e3efa43863e8"],["/page/5/index.html","44496f1f5d0741c303ae297cd1a72cb6"],["/page/6/index.html","80ad6d6d536427336174e469ca6e59c6"],["/page/7/index.html","b7b317af0753881c91cd677a08c4ba78"],["/sw-register.js","4b05684c97ab4f592783a83192c0b4f8"],["/tags/CSS/index.html","b81fc5933efd254b2f88cb842013e2c2"],["/tags/ElementUi/index.html","fd9de6f7ca3da3a5c2f95b3747d70fc4"],["/tags/Flutter/index.html","98d83adf5238ba36d5a1972bf4ba4337"],["/tags/Git/index.html","da6059b10d4c67321adb00fe5ade0328"],["/tags/Hexo/index.html","b083a4b8e517d75a58b842d3ce0b1ba9"],["/tags/Javascript/index.html","1c8df924ff8dffba2bf676ac28e3c151"],["/tags/Javascript/page/2/index.html","e57396674f862878ed00b08827fbbbd5"],["/tags/Linux/index.html","c8175e36c2818eb7486b68b092a803e9"],["/tags/Nginx/index.html","b04126a9b7467615c5d4b980c93e7fdc"],["/tags/Node/index.html","16736594dc54698bcb108870bab19c61"],["/tags/NodeJs/index.html","2e595d72d523ff03f05213ad3394c897"],["/tags/Scss/index.html","ae059da6a9dba25dcc95b81326d99eda"],["/tags/Vue/index.html","698d4c484330fcaf8927fcabb2d62ae5"],["/tags/Vue/page/2/index.html","1888416663dbf767e1f13e7c9e17e34a"],["/tags/Vuepress/index.html","2374c7a8a007be876bd38d4ddab25a33"],["/tags/Webstorm/index.html","4fbe796481bbe74b79ab9a4cfa233ddc"],["/tags/Windows/index.html","be5e0ede29e97177e0ae0e89af39ede8"],["/tags/index.html","62bde91fbd116019586db4cb7cadd337"],["/tags/插件工具/index.html","0e6a9cbe581cce49e964299bc4ddec36"],["/tags/问题随录/index.html","120dff74515baa18ada70b43e017e59d"],["/zhheo/random.js","6032d9faef7dea89c282432afa776399"]];
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
