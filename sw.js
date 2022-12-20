/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","678935c839d20cc8f456fce088248b86"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","ba626d6f1213da76225c302ffee0045e"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","589415a32dfa96edcc74e6aff8170358"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","21338ed523692ec49fb4c9808797762e"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","284dfa0742db691b917bb72cf1da9907"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","531dd748916324f920b014485ba2aea6"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","da1d5276b613e5eb6c039c0791d32905"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","5675c1332818765538ac7458ce1c7bce"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","5f8fda776406b5911bed630916a71168"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","7b984b26a5d4e9d5b2a01a9fb6e97056"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","939e6b96fc8da43d8af7af35d4d2a6c1"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","21e14325e9445b39b6c6d008930f77a7"],["/2022/06/10/tools/webstorm/快捷键/index.html","37ccafebb2ebd9b926e55d609964ba12"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","8a50f3fabd5ed185c919d33805e9b117"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","a67497551c271e686ffdbe7e413e8afa"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","d2fa7d4f2716262504630e56eaa721cc"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","f72a39eb319ba5bbefd3eebfc3035114"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","494ddbabd2a01f174d6f0b84fd2c075c"],["/2022/06/17/vuepress/vuepress搭建/index.html","f8812b111b92d3c6f62fb322ecbeb8a1"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","bae7ae4f504933e69445b7fcdbeeb355"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","a23787aa18a2a2049145eb4b35546104"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","17783d446da05b0800ebab4113beec16"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","97c53e0783e8f2b98538182518547ed7"],["/2022/06/22/inductive/javascript/进制转换/index.html","48a422f1b80ccbb43190687417dd9348"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","5078815a4a18e2ca1be12872d46c4650"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","8ff1cf988e3ef0e21425324fe8c5bdc4"],["/2022/06/23/inductive/scss/Base-level rules/index.html","e902a6c25eaf2c3b590de73c6effe8f6"],["/2022/06/23/inductive/scss/主题切换/index.html","aac11f4a6ae4431b8e2478b11ab9a22e"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","7adbc50a0eb81aac3ddc8c362d348489"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","bd4a7f785d1439d67b7a278c87185aef"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","951c35d09c8ff7a32ea1be8941397df9"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","7bd4021745aef51bf35e617768c9a837"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","521f394cb01863934e81a16330528770"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","3b112701d26075734000a0ed6e43ca54"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","0f56c25620264b160b023eddae820b56"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","23714f2e697aa432b9eff5db96b0f596"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","5ab42f4b442120d3bdad3c268bbafb3b"],["/2022/07/06/tools/nodejs/npkill/index.html","b65be417fe995fbad9f76ea4647a1fc2"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","bc0b56ef69ad8f2e0504c9b94bb5f37c"],["/2022/07/07/learning/linux/常用命令/index.html","5c70b9509c6ea31dcc19dc2feb0ec920"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","81113ed0ac71dc21e5ef3ceb0f37e778"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","0481a2e718d35f07535b66afb87b7275"],["/2022/08/06/tools/nodejs/nrm/index.html","894203c5851603b1d0692b97cb2b9fa7"],["/2022/08/06/tools/nodejs/nvm/index.html","fbebc26d67e841061efe4709d1fc068d"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","f813bdece250b8b14fff38d0aecc9ef0"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","169267f819e326c9a55be63a158c7ca3"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","2e4a91eb170a3c5089df888d621aa93b"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","93b0eb5d6c1b329f332f2b23fff405d3"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","e12548dfb8b6f26966e4bf3a3ba69871"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","c25ed760e707080689dd95fea0d21c0c"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","7024ceb91fd571fe49880a0c75246347"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","9fbb60cd1031d8aaf6d29ddf2b7790b0"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","0c623ff1d9249366521d5fbc485b2b86"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","3884413600d6a1f34d8d570cc1896e7b"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","ec5331d543cd1d1af9dbd3b428e19ebb"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","54c93300d06e3a65bea4418d584964b5"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","a8944f95b4ac706fd9efba9fb26e7365"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","cf395f583ea1c9ac7c47e69679389a42"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","07d8104464cbf01e321a25d53854e86d"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","46602b64c6538e77553246f0fd05cc79"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","4b824c35dccdb60823e2c5ea698e9e1c"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","02c9c04a9e0e62bac48402188df0390d"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","1b580a05fb91240f35bb7ed872b3bcb1"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","b413fc0d023d077de76896668d279290"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","30a5ceff270bec863bad0dc94e674898"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","37f29b13b6bbae7317a1fbd9d20ad4eb"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","f721fd5ad9966e187d184b348183b6d1"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","c7f3382b87ea1274977ea2274f9369dd"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","d9ff771e88b857b363eaf158e77ee729"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","960a4500b864ae76d42f844cf9c7e36e"],["/404.html","9443835d1c87b3713aa8d0e89ad5f4f1"],["/about/index.html","576c4acc4a2c667aa6dedbf616087a53"],["/air-conditioner/index.html","1dd39be9bfe45382d68365d5a159d062"],["/archives/2022/05/index.html","8e0b433bfa7ef44bc98280f3da2bf36c"],["/archives/2022/06/index.html","1642ff14c1789ea583ce067a43c5eba1"],["/archives/2022/06/page/2/index.html","658d264db44f95f110148091a8b7a1fb"],["/archives/2022/06/page/3/index.html","700358d653802a9d1ba69af3d0520cfa"],["/archives/2022/07/index.html","b639b6033a2a2d9d88178867fd77e58c"],["/archives/2022/08/index.html","54ac85a7f41a5d7a5217bc91ea2887f6"],["/archives/2022/09/index.html","75deb4952a0dfc8c6f48aaeef35d1fa3"],["/archives/2022/10/index.html","3caa28a60dd9d18c9233b7af3e190300"],["/archives/2022/10/page/2/index.html","2a2ca138de6d58dfd663914cd02fab28"],["/archives/2022/11/index.html","cb6930acc0af7fe00cc0bb65d26ac7af"],["/archives/2022/12/index.html","f74fbb69a81e88c5bb4b5117db77e0c5"],["/archives/2022/index.html","2f86b3a15e4aecb5b8fbdcf91c93104b"],["/archives/2022/page/2/index.html","52c45a8b9b0af72e10a276f27fc70bc2"],["/archives/2022/page/3/index.html","31b17ce3c0b21f85487f12967395399a"],["/archives/2022/page/4/index.html","8a0462affc1d805457e43b8b0df4646a"],["/archives/2022/page/5/index.html","96de861241dc00bf363e1ee4cd076572"],["/archives/2022/page/6/index.html","7daaa22243e3eb40fc3a68be51086067"],["/archives/2022/page/7/index.html","193866361225d1f466f2672d112932e8"],["/archives/index.html","c5c5372d7f2549b57342f78af2c40fa3"],["/archives/page/2/index.html","8fd736e1f81361d667c37d92a18ed47d"],["/archives/page/3/index.html","5943c2ae2d670efab640487baf33e6a3"],["/archives/page/4/index.html","43beddc7bae451b9de41c257ed538539"],["/archives/page/5/index.html","e821e9429009daf9fd3d90881e3abb9f"],["/archives/page/6/index.html","1b78b502c5ffeb3d1eacb11b3f844adf"],["/archives/page/7/index.html","8993b8335d4a3ad3b047a49d9c2aaef1"],["/bangumis/index.html","55c30a6b623896960b79dc05cee62b8c"],["/categories/FrontEnd/index.html","d6391e7f56a5f7b90cefee09e38a764d"],["/categories/FrontEnd/page/2/index.html","b85dd023e0ed732835bf36746e037cdf"],["/categories/FrontEnd/page/3/index.html","310e06a69ee4daa9a4a29fa6a6d85041"],["/categories/FrontEnd/page/4/index.html","b85c13c62ed6ff7df31061791477b102"],["/categories/FrontEnd/page/5/index.html","64cb0f29babe02d58eb39a6823a282d9"],["/categories/FrontEnd/page/6/index.html","a0bb66f3029e01e519177e4c40974ed5"],["/categories/Git/index.html","528549a351604195e70bb4c09e6efa24"],["/categories/Hexo/index.html","e8b834951ed0bc46318cc691edef816c"],["/categories/Linux/index.html","198eb447a2f11e56d5ed094e6309eacf"],["/categories/Nginx/index.html","116de2b1ef6967cd4f8c8a4e8476b798"],["/categories/index.html","ffa38ce893385350d85c2ac81c8c7856"],["/categories/插件工具/index.html","c3dc92245152994a6686d8deb451c2fd"],["/categories/移动端/index.html","3698efdc6ee121d4a55bd00c296adda5"],["/collect/index.html","9942fb2298528d8f1757b690f22191bf"],["/comments/index.html","50771e98f94aeac54cb3105704b2d0ec"],["/css/biliBg/autumn/autumn.css","4f5719863033bc1a88e59d6db19b7977"],["/css/biliBg/spring/spring.css","b6ca5ab973ab2d4bfb1ffe8038936cb0"],["/css/biliBg/winter/winter.css","d34667fc4ab35a7520983e90119538d5"],["/css/customer_butterfly.css","bf17dc7606e48508a65bdd16f4174a4d"],["/css/customer_style.css","ddc97fbb17d0c8cbcd23cc719326bb61"],["/css/index.css","ca948f1088e30b4d94a22547ee6f8f5a"],["/css/loading.css","7b2bfc5aa76852ec7f5a0a70df3a54b5"],["/css/nav_menu.css","aa53a0d56a4e6dd7a8fa78fca6674879"],["/css/progress_bar.css","9b21bc517acfd68f691dd395634bbee5"],["/css/rightMenu.css","e728ac48b00139f72815ba3e78f0f3e3"],["/css/var.css","218139c8f9d9e10bab9361a4781fe05d"],["/gallery/index.html","3bc2b0d1b0b160ccdf1edd4ff4100431"],["/gallery/wallpaper/index.html","eff5d660a9371b68e8817b514283f804"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","421905ea79d176b699dcb383646d3311"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","5d5f1f16f9e6c13b6fab1ee28a64f584"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","23c29e6f35d3c8eeef274d7ae1c628c3"],["/music/index.html","118e34e7acd5c5fe70019d20f0d9722c"],["/page/2/index.html","e53379aa5c7d83cf81fa06e29c4870a5"],["/page/3/index.html","657870bbad385abfcd808e8e738e1212"],["/page/4/index.html","bdca5359f610738776aec23146f85dae"],["/page/5/index.html","d026ddefbc9084e5c9f3a364f0185ac8"],["/page/6/index.html","d3ce8de16f76b0e3aa5105eb4e99651f"],["/page/7/index.html","65b087c8409fa1442f854c9d2146f77c"],["/sw-register.js","97735835883583063248165e53da1b5c"],["/tags/CSS/index.html","8ff1b349af360faa958509988dac66c1"],["/tags/Dart/index.html","6c79334c0567cfb251529068b8bdca94"],["/tags/ElementUi/index.html","86b9ef109dfa1cba751bd21e1b09152a"],["/tags/Flutter/index.html","b7ee63af5f4de7bd774900a6387f0f98"],["/tags/Git/index.html","69a8e02511366fb8b19d5dd4c9a69da8"],["/tags/Hexo/index.html","61ba49cf01fe9d12f40da4893ce95258"],["/tags/Javascript/index.html","63214c8fb7926dc3f13143e17288c563"],["/tags/Javascript/page/2/index.html","64e486c95c82af174c9b14734c8e77ce"],["/tags/Linux/index.html","ec343eb572fcbddd2db56efbf04af8da"],["/tags/Nginx/index.html","accd540c61a10dcb05f3eaeb42cc5d02"],["/tags/Node/index.html","7e47498e3a2591c3732fade331ede0c2"],["/tags/Scss/index.html","eb8dfcce190789ced9b6a02ac2f972ba"],["/tags/Vue/index.html","144a46b0493f4b478bce5f376b0fc394"],["/tags/Vue/page/2/index.html","d313044b61bd92a1b309ec5478c689df"],["/tags/Vuepress/index.html","84f915ad5dd17a142869980754ee1ace"],["/tags/Webstorm/index.html","b2382ea885fd4829db9c273a86b7d63f"],["/tags/Windows/index.html","0c22ab8b7f8de020342091fc0ce9c58c"],["/tags/index.html","965a74e795807b99bd38776db4d98d2b"],["/tags/插件工具/index.html","24ffc06f8abb5f134366a109463658f8"],["/tags/问题随录/index.html","6a077d869857fb13eafc8f78417aa9db"],["/zhheo/random.js","fe1562753418dba606145bf35a1efda7"]];
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
