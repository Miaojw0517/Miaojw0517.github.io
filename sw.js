/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","8798e394ae5ba1d9a176887fec9c5671"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","df00952464dd383f436c046f9008f30e"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","1aaf73e0fb45737e891ac3d8c925da87"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","9c8e369283b0a14cdc6a61a12f1497d4"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","39e0eaf2a9a2d7e542b1bcc6b0104781"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","3312e4d573662b8a46c6c8905411a5d5"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","4a730739a8c21cb0dea82f3c1353acee"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","42c4ee5181779ad8db21265670a6b4dd"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","47c448cfdd0f06ef2eda8519517dabbc"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","04f2c9528d13c729b1239ad8acb12997"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","64bb8ef1841d8fe0d6b2dd7eeebd5e58"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","958d305f36be1acdc2c0e6f88352b311"],["/2022/06/10/tools/webstorm/快捷键/index.html","a36353ee68b5379fbf274d0c89beca99"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","3e7c79b2bc73502a1776e802bb97644a"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","cc009920f87135f50eace55d15c4f5ba"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","94e57c82af09a8695586db735c9f2570"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","0c1dd0ae002ef6767e43f7f8b1e45192"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","23fb3ca289bee65f453e438a09d689d7"],["/2022/06/17/vuepress/vuepress搭建/index.html","ef385911357fc5b92f40012ad9fa90c9"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","9e99f52210392f7a58a5ac3682846b04"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","6c73c03e17e9b1bdce9b2f451148a9f8"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","46a0a67fa2ae0ce6545701e4290fff6c"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","fd7ae73d0fb19b73627342633a19b151"],["/2022/06/22/inductive/javascript/进制转换/index.html","2575efbfe8c56b8fd4fed72b1130cc94"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","85d647b03c2440778719739cf3e4898e"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","fde19cb3f0e216cae568122ef8d95e3a"],["/2022/06/23/inductive/scss/Base-level rules/index.html","7831b239d016c263dd292b3f742818fa"],["/2022/06/23/inductive/scss/主题切换/index.html","79c1519f9b5d7e7ed8a261f4ce6c4f66"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","75c7491fbe13096623045225def04e29"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","81e315c5ee4c53b2d40f040407288c31"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","370ab4678f8d63477c756dfc8f557f39"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","47bf5fe3419e39a6aa2f44004ed3f7c2"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","457a6554153faa041a7dac3288c15c06"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","79702b144b5cfdea7acfd0177153c8a0"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","e5c1646181d8e1f1c2ca4a1d5004f760"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","86d810b1b2792524f8c64a139c921a70"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","ee0e66a5fa6f894910c7b4a1647581b1"],["/2022/07/06/tools/nodejs/npkill/index.html","55d1b438476c099085bf52316bf6309b"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","2739ce31ff70a1cd7dd51546ea47a182"],["/2022/07/07/learning/linux/常用命令/index.html","e267cbab52d37e78af89db2e634829aa"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","09180a1cf0ed218e1654d80874f8e2a1"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","92c5863c1a5d369d8f3887743c0af902"],["/2022/08/06/tools/nodejs/nrm/index.html","e94302844aefce28d18861c938d8ea0d"],["/2022/08/06/tools/nodejs/nvm/index.html","6c3d297a0e95a83e297d35c6139e0f3d"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","561a5c85392016d7684b35f0109e579a"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","9da29f2c269129c4df05bc7362311c50"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","0f4ca90554403242714495f5b702aab8"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","4fc6e2b377f5ddf5a3c0e487cbe2c060"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","1a921d1926105ee5a9ef49ad0719f5d3"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","913b83e3aab8d6f6a730e4997d3e7a8f"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","f1d4cad86bf1d2a993ed60217ebad41b"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","d417565460588cd671494009ce0530b3"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","be3eeb154cd3864c7acd10fceebb2598"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","d8e1fd089eb6f38b94bdfca3c951f501"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","f4aaeb9170713b2c9ae84de4a38ce375"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","d023c698d83a3b086283b8b7980178fd"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","a81c0417a043e87896ab05653e16df5b"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","f10f556519b38800ad60181131c4c7cd"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","c0377e1c13f65673bda15664834ba236"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","acbe446954d7fbede2a523f873a10a0e"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","02ae8737d3393e2d8226992b77ab5b8f"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","4471bf064942a2800e35193684d6c7f0"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","18d417cb4abdbeb810a0b28d0f68316f"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","c7febffc706802e7fe63108f48944e34"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","5da157b8218b44239e1f36a4ad9a99ef"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","86a6b81adccd541c3f3a3a12d1ff1b62"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","cd37c91e9e468ffdaddd82b6b2e4aa7a"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","44a63a0a8ca5836c2cfa30c7f5e38ebf"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","3c19987c04b14c9b682ff36b4ff85e25"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","f5e6632bc77456e2d3cf641f285ea3b9"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","8f25042b06c08ef3340717a646fdbaea"],["/2022/12/26/learning/mobile/flutter/flutter-组件/index.html","7a3a640996bdd5a2e23a618500ca7258"],["/404.html","d453e4e8363e0cc83ff954d7d9add137"],["/about/index.html","f298bcc74c4f98553aded8a294ed1bac"],["/air-conditioner/index.html","1f8dbcb415bcc0a86653a33c7aed278b"],["/archives/2022/05/index.html","5baebb9ab43931fef0afb59b7ea20974"],["/archives/2022/06/index.html","5858fd2c7c3a3f606442f8b1a41e99fc"],["/archives/2022/06/page/2/index.html","56137ec707491393d84a08e84f43b81d"],["/archives/2022/06/page/3/index.html","463037e6d5456532d3d4d603e38861d4"],["/archives/2022/07/index.html","062f0a26b726a839678c87d49e371bfc"],["/archives/2022/08/index.html","e151a26973eb9de1b3a12ffabe4f96e1"],["/archives/2022/09/index.html","ee7b698f8da739053414984535be5f36"],["/archives/2022/10/index.html","4531490f10fb87ac5b2b36d28e6a47a5"],["/archives/2022/10/page/2/index.html","82588bbc6c582460ae490b51eddf0342"],["/archives/2022/11/index.html","bfa91dd43b171e3f60e3d8226590b152"],["/archives/2022/12/index.html","fc5bbbd8efcb656fdb58f7df58ec7a8d"],["/archives/2022/index.html","4bd621f6a784707b55d802be285d2660"],["/archives/2022/page/2/index.html","692f0aee74f1d9e1f3feff7a4ffac842"],["/archives/2022/page/3/index.html","c8f2de68bfd63d3ee57623ec79fc5fbc"],["/archives/2022/page/4/index.html","1f5c604cf4c26866b4efc4b3124d91c3"],["/archives/2022/page/5/index.html","22532cbc3148a32db1508455b051b8d9"],["/archives/2022/page/6/index.html","b593d6ef17498a18820ec72cb3d7ca03"],["/archives/2022/page/7/index.html","f19a4bc0ae1527835a5b6797107ca77e"],["/archives/2022/page/8/index.html","908823921433ea199ca84149337171af"],["/archives/index.html","114f663d334f283079f7ee8b0155c8ec"],["/archives/page/2/index.html","7cf35fb595bdaead145df45c1bc66d60"],["/archives/page/3/index.html","c4af3b86cbd8a371a82e65bc41303d40"],["/archives/page/4/index.html","a98cedbfef2de59bdf96c771a733e883"],["/archives/page/5/index.html","764e760913d8ce5f74e2bf54623d959e"],["/archives/page/6/index.html","8fe39ed7ece81f86c3775ea188b4485a"],["/archives/page/7/index.html","9198bc878a61cc1cbc31a26c5c224a51"],["/archives/page/8/index.html","2f74aa2f4f0192c07047e2b5a44bb3ae"],["/bangumis/index.html","4e8ce81b73f6dadf0a8989790a7f16aa"],["/categories/FrontEnd/index.html","348d369a49f1c3dfde19b65ffba82172"],["/categories/FrontEnd/page/2/index.html","53e23b224eb35b300b900f804f5de1ef"],["/categories/FrontEnd/page/3/index.html","cc0d1f3d9c236202f146443f31332d36"],["/categories/FrontEnd/page/4/index.html","83cbee7484d8c77079ab2264fe59289b"],["/categories/FrontEnd/page/5/index.html","0c9c7052a0f4234dc70bbd0f94b0e759"],["/categories/FrontEnd/page/6/index.html","2a47dc55ce13343c23a59c3e2cbc0280"],["/categories/Git/index.html","8528e8263d1ab8e49127e4d211e7569a"],["/categories/Hexo/index.html","f8fe5c09455d0544481e32f3bddd5961"],["/categories/Linux/index.html","442205c4add5918ad224d8d7cadc725a"],["/categories/Nginx/index.html","e49992a291fc865fdd5f4409b6b217e4"],["/categories/index.html","7d005c9d41f165957db170ae244a1126"],["/categories/插件工具/index.html","e216c1aadfc123a77012be855dde8d1a"],["/categories/移动端/index.html","1d0a2513ed7e5b73f2273545cf387514"],["/collect/index.html","f0469b68943fba6dc77cda0c06538427"],["/comments/index.html","37e7a737eecb99e8d575d739450ac7c1"],["/css/biliBg/autumn/autumn.css","81f99322649676fd280a671c8ecbabec"],["/css/biliBg/spring/spring.css","d1bb1910fcf92eecdb695dc369f000f3"],["/css/biliBg/winter/winter.css","6e4e3428c989fc93a5aa3275632da8a8"],["/css/customer_butterfly.css","b90c05be28035c43ca779067dc6fd62e"],["/css/customer_style.css","6999b1a42c80a92514345e692d0009ec"],["/css/index.css","9bf454c9e19404aa0a85277d5c0a46a5"],["/css/loading.css","ae8cef2652b07f9fe6b10ac2d7a1a3d1"],["/css/nav_menu.css","10faea0ede881c40f518f7469adaadad"],["/css/progress_bar.css","6bfb04b001cb4ca0a11a2253a9aad166"],["/css/rightMenu.css","1f20f5680f2df4ec1215e5e8c0757d11"],["/css/var.css","226c5abc709afb8456310d205b0454f5"],["/gallery/index.html","61979c07d417931f742292c5bbc48322"],["/gallery/wallpaper/index.html","3c2176eafa8c0c4d830dda9fe16f90dc"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","ae28c042e2f6cf81e4ab26677afe5b15"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","5d5f1f16f9e6c13b6fab1ee28a64f584"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4910ade4908ae461d6fb1998248b426b"],["/music/index.html","3382fbf66d03d56b66a4b54af51d8a9f"],["/page/2/index.html","f64c2a44b02e66e1f71dd96df060d757"],["/page/3/index.html","63c38d7d122351daf1d6dfe6b9550c49"],["/page/4/index.html","14d53a17a734fec3350abeacd2a89b0f"],["/page/5/index.html","0af57b3be673fd95e29c6207c1f5d1d5"],["/page/6/index.html","54c7164975aa46ff80686aaf8af353df"],["/page/7/index.html","de2c9663de7e6293f0cfe20b9e622122"],["/page/8/index.html","9920bcf756ece23c3d627d488bb24031"],["/sw-register.js","2f75662bcde574bd12d2b8e7930cb3c3"],["/tags/CSS/index.html","9b35299a50e6181b09e50955ae4c391c"],["/tags/Dart/index.html","605f8cce25a63ade592ef57c82e55212"],["/tags/ElementUi/index.html","c1418d05a0957ed791cebce1e9a93fa7"],["/tags/Flutter/index.html","7a91e26610cef29dae0f5ad556ac0fff"],["/tags/Git/index.html","c2d9f160dabb425ad43890cf83a68df6"],["/tags/Hexo/index.html","6d2389470172f167ba764fb67c03a30f"],["/tags/Javascript/index.html","bb6ea7836ec81aa590212c215d13e294"],["/tags/Javascript/page/2/index.html","6e7867e81703c6fb38f48a86c285ba09"],["/tags/Linux/index.html","be40fb1eaaaf8402a26d8aa6e03c9590"],["/tags/Nginx/index.html","2c4eeed412fce9387c7c9288974af4c9"],["/tags/Node/index.html","d2fc54f4481e7c5e747733dbd9150271"],["/tags/Scss/index.html","0c1434584b52a70b0b24641bdb0aeeaa"],["/tags/Vue/index.html","f943c0c58ac21126d3b98a9a294cf07c"],["/tags/Vue/page/2/index.html","1369a27a2de51589186d47e1422f3085"],["/tags/Vuepress/index.html","ad537fa9d040b9a1e42281dea5b568d8"],["/tags/Webstorm/index.html","a19a7843797ebecb74966551f50ccab6"],["/tags/Windows/index.html","b4e72728336afc35c494aeb0f5dccec4"],["/tags/index.html","9343a818df055d8c99b71030da957da5"],["/tags/插件工具/index.html","183759a61b3eee82832245f367e26f12"],["/tags/问题随录/index.html","a2b3c5588fcd7cc8c33a0cdb07ae9492"],["/zhheo/random.js","4559839b08d5943c6bca9d88d04dc9c8"]];
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
