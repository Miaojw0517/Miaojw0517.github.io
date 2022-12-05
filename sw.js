/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","6b45645fb0f8f5cdfa921d6c8c987185"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","32c0fdfa74ad9636817c7663c21f89b7"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","898cd3c397e96dad38d8d5efc008a46e"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","547a6479662623bd98905e978da09a84"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","ddecdcec8fc86784507d7306849f7656"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","19705b48bf89f486d53aa9fb26f14053"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","8926d92c921ca529dade3292e8b92f41"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","a5b0abe5d27c0c5b7a0442120ae25a10"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","610a407eec4c6c4de7798cf98609e992"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","694fd31559ec4a5e1533ce0486829932"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","2bf1a3eb70e90ac54ea4ae1066a2b630"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","64f395964c7a1df927ad299b143ae40d"],["/2022/06/10/tools/webstorm/快捷键/index.html","e7db65a62581e2e8b8b299e34e53f2d0"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","2b7a05c6da58889d8a4ad18fb1554b3c"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","8f47d1457b533192bfeb0ec4b66eed13"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","959c5513ffb90d3b373ca4c707992b59"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","8671d788fc8a8b3f513ae293042e79ee"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","8e069c2de02134a19f144ba5d4b482b7"],["/2022/06/17/vuepress/vuepress搭建/index.html","c1457212b474184843b02c5adfd8955c"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","5ba501efb57e233dbf98e66dc15f3e11"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","75f17e51b977bacd7ec2ea34b392f158"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","bb3dda59b89d8e643609aa679c5f1a41"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","eec98eb2f8c8f4521a82f53631ec6797"],["/2022/06/22/inductive/javascript/进制转换/index.html","73d9689d2e69650a3c7489822da77b64"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","0d71feacd5a666464c095acbb0efe3b3"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","12fb3bce05e0d3953f8ac6552bc6d234"],["/2022/06/23/inductive/scss/Base-level rules/index.html","53c443f0597f736ea0497e2d68bd259f"],["/2022/06/23/inductive/scss/主题切换/index.html","2e7f61370f3d4b68131cfed2dd2ac836"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","092e461430fa50abdbd64fbf53272200"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","3e715bf4795f9cbe693921774484d891"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","c9820b3871e7a74b40bd55af9d61b803"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","3780c2f62e980f18b53a6a84c013d7e2"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","7a5ba2cc6dc2f6b0bdd4880b171e6654"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","2d1253c507fc81d4d1f8d5e947aa4421"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","969925a35aec5c9f4107d74a17dbc11b"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","66f42160c889eb6f1524f0b49407888c"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","c615e8eb9e96dc10e079aa11d0e1dba2"],["/2022/07/06/tools/nodejs/npkill/index.html","e78f256b9b1e6e4bbb2b4caa7a8dc0e7"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","df3eab3ee3acff0189ba8b6f4eef1155"],["/2022/07/07/learning/linux/常用命令/index.html","3aa0c56bafb6322680d8fddd6d8a03aa"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","432e847e911e1a89d5c7ba49beabf78c"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","c701418b01e89a6839ead011398e5780"],["/2022/08/06/tools/nodejs/nrm/index.html","dcae5a1b94573e13008daad05cc13351"],["/2022/08/06/tools/nodejs/nvm/index.html","8cf592b7fe65a4ea6235f75851b059db"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","b33157154b526fa6fd5737e195488348"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","ab5808275b06ffa9560cdd4e065931eb"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","3cbca31ff894cb0aa32fb32bc89fafca"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","c40f91ef0b782490e8e22842c53c10f4"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","91459a564fa275914d1abc77afff4748"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","fad4d7194079827bf601d84b457607f7"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","41ba3e508cd37fa6b6b574f128d72dcd"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","c4dd5be29f96738df2adf86a6d2ae229"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","3ccfc06472d31d8f05663f6848d71228"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","ab99c75f883fb8186b31077296a382e5"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","a7d6ebb16b29fa18eea0322060dc6063"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","d5dcda042b658b37eee73e14dc87be80"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","0f07ec0144c26300c6aa2e0bb1b9d0ce"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","da3a8b075f1d83c0e4a4ab3403993a6d"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/browserslistrc浏览器和nodejs版本控制插件/index.html","f381e74c3a353137812b982ad81719e3"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue-cli3开启Gzip文件压缩/index.html","f575cae622e1f3b6e86859f79fda6ae1"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue打包优化分析插件/index.html","6d2f95230b5b5b0648de27243f71c0f1"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","964e4aa3c59816672bb01bf9aea7429d"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","ebd7cd290d56596a12dd7822b8f60663"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","7d1fbe0bdd84706d4d3b88aea548cf25"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","bc49b58185903b41886e8a127f43787c"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","de217780fbe9892802967736509312d8"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","86c37c27755d7d9511138b82beb45182"],["/404.html","76ffa1f6f0596ba30742448145434e19"],["/about/index.html","f2b780a1b715a9d61bd3697db1e4ff2c"],["/archives/2022/05/index.html","ab6d5003fb67e9cadcf9b21cc29c7d75"],["/archives/2022/06/index.html","a7ad8058f8716f1733b1a5096c1d9455"],["/archives/2022/06/page/2/index.html","f38048cc12609ac46e0238940559d364"],["/archives/2022/06/page/3/index.html","44839c6b1a6e5066e9147dcedf235a7d"],["/archives/2022/07/index.html","0f7c3e5b6732a4595633cdd1ecb00a7d"],["/archives/2022/08/index.html","5bea7aad5cf03b84173194e11f3446af"],["/archives/2022/09/index.html","d25576c5e944b6c35107d2d9c02989db"],["/archives/2022/10/index.html","4ecbd4ceb0d3ecb7f7a6d4fdea9db071"],["/archives/2022/10/page/2/index.html","71d50648c1c19c7a2a42777b6417027e"],["/archives/2022/11/index.html","b1673307d9313e87254a2373520c511c"],["/archives/2022/index.html","294d3212969025b7ebb7993126e0479b"],["/archives/2022/page/2/index.html","6d9193eae87eb145990761a57889256a"],["/archives/2022/page/3/index.html","2c1aa0f41ac9c63836ce1b4d78d1aff9"],["/archives/2022/page/4/index.html","b2fa6486aa53405b181a9a55d8069d81"],["/archives/2022/page/5/index.html","f71ad95af7ffccf0b006c87a5e1913d9"],["/archives/2022/page/6/index.html","f65e8c8afeb163b0b6d77a888cfec46d"],["/archives/2022/page/7/index.html","ac5aefe4afa4e97cdc879b176bfc7b76"],["/archives/index.html","6afe797379d1d92a402ee2c539bc480e"],["/archives/page/2/index.html","5eeb7b9489636cac814eaed4aeb50079"],["/archives/page/3/index.html","a824927bf7d123510459b5089adc4f6d"],["/archives/page/4/index.html","2f48ae7b1234b658d8a14c01201685e1"],["/archives/page/5/index.html","d68acb7c100a8f22a432b5c10fa20616"],["/archives/page/6/index.html","fcdf675b1fce48e59ff470776836ffa4"],["/archives/page/7/index.html","b454bd75c570fd0ee4b1233e45d1df1e"],["/bangumis/index.html","c29b3b0daf562a200d0de94187fc17ed"],["/categories/FrontEnd/CSS/index.html","db01ea5e4e405d3bc22b78bae94b2790"],["/categories/FrontEnd/ElementUi/index.html","1bf2f4669582e0a7f54a037a740bd4f4"],["/categories/FrontEnd/Javascript/index.html","ec9e278f2c321b41b3286754b5818516"],["/categories/FrontEnd/Javascript/page/2/index.html","9b9173a91523ec9494958f62ceba28d7"],["/categories/FrontEnd/Node/index.html","d7ab30f62b38552eec5cc76c3890874b"],["/categories/FrontEnd/Scss/index.html","b8a61091966c4c97aff2050eb9196a7c"],["/categories/FrontEnd/Vue/index.html","731f39cac306c92265cb22904f6625c1"],["/categories/FrontEnd/Vue/page/2/index.html","07654d9daf109cac56bcd24579de70a2"],["/categories/FrontEnd/Webpack/index.html","21d37e00def95a3a94d26f33c1e224fa"],["/categories/FrontEnd/index.html","7b26e85eeb9c43b4594323e491d31ebe"],["/categories/FrontEnd/page/2/index.html","87af512ce70bb11b3367688d791db448"],["/categories/FrontEnd/page/3/index.html","7f479874c11bab186176b52a1ecb6dd1"],["/categories/FrontEnd/page/4/index.html","543878d17470e39f543f4a147777cb56"],["/categories/FrontEnd/page/5/index.html","3fa567b76ac787df76d796c5123b7906"],["/categories/FrontEnd/page/6/index.html","2e143055c965d4ecf875cc72dd315cd9"],["/categories/Git/index.html","1ebef3918502a355107666e59eb135d4"],["/categories/Hexo/index.html","419ec9b2380c1158b46e1a7d25f9bff8"],["/categories/Linux/index.html","930c0249162759052d6ee38070b68810"],["/categories/Server/index.html","62dc080b464a6a796636192253097945"],["/categories/index.html","c8699ab2a5d8b865744cdf15c82b9c9d"],["/categories/插件工具/index.html","0d8a600e2825a43e14a868c5b3d13862"],["/categories/移动端/index.html","c771a4adc745af0c242afca76ebda87a"],["/collect/index.html","7e182bfcdc5b9edfaa6450e3dd5f60fb"],["/comments/index.html","afb14524bd085446c73ff522e134b1c8"],["/css/customer_butterfly.css","25965220a69312278c9aa63512c71c68"],["/css/customer_style.css","f5e8164b22db79e150a97a3168a17a74"],["/css/index.css","13d7b4b86192017bd33bcad277ab87b8"],["/css/loading.css","01396b664ac235d36b4ea9b072e9bc96"],["/css/nav_menu.css","e007aa12b88b4d5e7f92a3a5451a853a"],["/css/rightMenu.css","959c0c4471e2c04a08a506e94b5789d9"],["/css/var.css","9eca0fe34ce8884e944a95c9e3b71ea5"],["/gallery/index.html","690af76eac6083d88f55b0b37f5b1777"],["/gallery/wallpaper/index.html","c9cc4b8f5cc2099e4593cecf38ef78dd"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","3607685903d5738ba98625375ae9e2d8"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","7db10257bc4f956078768cbfc87bd4e7"],["/music/index.html","a81e4db5b656e7716a23e01f7763d4ae"],["/page/2/index.html","84e2a419930719de56db9218aec3daf1"],["/page/3/index.html","49ec014e3f5df20f9500d9508d7c3302"],["/page/4/index.html","400ccf27448a4b279f0c05fba80f6c5a"],["/page/5/index.html","91f1e678772dc7151db924ac434c3509"],["/page/6/index.html","5ff84a496aa7a534128231a5be6d1971"],["/page/7/index.html","db7b8d6e30f15394885881196063c121"],["/sw-register.js","2d32c9b2fb2de588314dfdb893336681"],["/tags/Flutter/index.html","8df735ac2c429354c479653281a8a6e7"],["/tags/Hexo/index.html","04506bda593bfc8316e0cab51aef6bfd"],["/tags/JS小知识/index.html","078582cc43585f0f9fb5f27713760a81"],["/tags/JS小知识/page/2/index.html","f7ee8f1f1b4287b882f59341a3fcd634"],["/tags/Linux/index.html","4ab14dc323aa5bda3c7ebbbccebc820d"],["/tags/Node学习路线/index.html","f46e85952e163b9850616966321f672c"],["/tags/Node小知识/index.html","65bd2233c629371ed35a4ac83269003e"],["/tags/css/index.html","124b6c5ca561d7efcce2abfb025feeab"],["/tags/css小知识/index.html","99375c5c9e15bd875cf4d355c7a415dd"],["/tags/elementUi/index.html","a42ed137c5dffb96b0b04c3854643b05"],["/tags/index.html","a3c42eaccf2e0865b0916328fd91835a"],["/tags/javascript/index.html","14537b3410503c4b7700e9afa6d5cd0e"],["/tags/javascript/page/2/index.html","f1763262d162f271958efcddd62d4cbb"],["/tags/nginx/index.html","899b6f5f5ff7b0d83b98c9d7fe0d2c18"],["/tags/nodejs/index.html","61b536486d63e22de5fa1d87315da4d2"],["/tags/scss/index.html","e3645a41b29c78124a58b8298b978bea"],["/tags/vue/index.html","e71f5f520a725751c48b16dde7d5d829"],["/tags/vuepress/index.html","d58096d48bd356ac639febc4cff6fc0a"],["/tags/vue小知识/index.html","ee3d201979578e5130b5e451614952eb"],["/tags/vue小知识/page/2/index.html","f31de8a36d3cb44b845c2b65c1d1f038"],["/tags/webpack/index.html","d59226b69b68780b8e7ae45e41d23a5f"],["/tags/webstorm/index.html","c2935532330fb2238eadc0f74b7da9ea"],["/tags/windows/index.html","63ab630d9a95f96dea8996bba00ecc69"],["/tags/插件工具/index.html","e6184bfb8d6f1d30dd14be842686e866"],["/tags/问题随录/index.html","eff0748659ba8398d1250d3dffed930a"],["/zhheo/random.js","8d51e456109d92882f5f529aadafa764"]];
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
