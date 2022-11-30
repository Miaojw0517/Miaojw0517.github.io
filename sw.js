/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","ef31e2ce244d008976c3993c6e17b0d7"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","9013f7303ef6fd3fd07659a82be70a1a"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","26813b46929c281e86b9dde8a0ab2f43"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","987dfa8ac4665c3709c60c907fcce6ef"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","f1ed2dcf1c61b4eb5dcdc0e8284187de"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","fbcfe39fe81e9b9f299b21fe52068b1b"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","003ec92303278ba7d1d02af0794ab583"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","d383bf3915bf30fd0ccc958f68a09347"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","9750badf12ff714ac1793ae8076a779e"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","fcf510cbdf37704e292320063c70cf9b"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","35aa212a9ccfd633d4ca075abf35caf6"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","94932b198583c3ccfcc605d320a229ae"],["/2022/06/10/tools/webstorm/快捷键/index.html","155901f2865ea02299550a060d227ad9"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","b68c7b5b00e30154cf78e98dbcaeba26"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","127ffafa7b1983bf56d919b60a23688e"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","13867505452b2afbaa08657bd5496f5f"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","4776b36dc5837d29a92144c7fb61a603"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","83600f27190a3a0dc1b4f8512ef5f4f5"],["/2022/06/17/vuepress/vuepress搭建/index.html","13566391a8086881cf309851db62bf6b"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","ae2e3b272c4be628feeeedcfe72b4970"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","95425320111c5a82bce0c955db2c03d6"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","00086eec50adeb322c26ec61e3354c40"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","a468500b512e896cc02bcf54e017487f"],["/2022/06/22/inductive/javascript/进制转换/index.html","4a2cb24ef0ac0a008a21c7f1cd53312d"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","8c5c13343e1bfc4fd154b0883ddd877c"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","9a7c163f60128f1fc4ad3f08be42c6c4"],["/2022/06/23/inductive/scss/Base-level rules/index.html","5472b2f1fbdc92e90e83698fc8f2ed61"],["/2022/06/23/inductive/scss/主题切换/index.html","b21ac6f988f1939a51ff77a5583118cc"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","e4a26e97707b3fa38dc06ceecd4326b2"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","03b5bbf82c6c4c53b144665071841ea5"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","b37b931bb1b30e3eab080c02d9101f0b"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","2a49867514332a4b215d24f3be086b8a"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","7567c2bd9bed699576456b4b5c6e4f43"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","182e3e051a4d4fb905aeb53085c1a899"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","d5117143d8b4114326116465316d1362"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","633175f7141209d5490077086d6d4964"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","9ce4717e6b526861b209e23ede379486"],["/2022/07/06/tools/nodejs/npkill/index.html","400488a4bcb65dde3e77a02e27fc27ba"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","5fd529975977f1a69b58ff4b012b8641"],["/2022/07/07/learning/linux/常用命令/index.html","1b491187f67b1fa25c8c131909cc1001"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","06d8565575a08c115ee3c85fe303147a"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","52f54ac0c724202d6346a86b5b3059a6"],["/2022/08/06/tools/nodejs/nrm/index.html","2257ec1b5413704ceec27c7855d63960"],["/2022/08/06/tools/nodejs/nvm/index.html","5009e1a7368b9c0be8bc9c0e6abeeb27"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","046fa9bda3f1e3b5c4096f3c0c97d0f1"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","35a234e5cf2f1726a6cbd009bad98223"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","73949064a2693f3d886120dadef7731e"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","17af8c21eb2d269b073d8629f94fc2aa"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","9c7cae078b0ceab1919d4b41861ef10d"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","5e68174ae4592d1ba1683d0ce4e47ad2"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","755f536774bea0b9141d4348f2655b9a"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","6a21e1b7b45b9f9b2d11efa34dd9b8eb"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","a2b037e2f6f61e495f8b8bc2d50134a5"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","ffe9bf9f373818fa78c630b4bfa540d5"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","66ac0b91c958457d09349ef616c50638"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","c3a43738e549eed6866748880e684a84"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","8c225e1e818da31ec066869a7d2f8545"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","7c4e52b843c6ade93e79a1a51b1fb80e"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/browserslistrc浏览器和nodejs版本控制插件/index.html","06da6c147322055d708da5101c07189e"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue-cli3开启Gzip文件压缩/index.html","d9fc538ed47687c1b3c06474067f34eb"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue打包优化分析插件/index.html","14e4f96b053ac4274e926b4c18d03c94"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","93bc48f8f527ed042f88ae14cfc8f29c"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","e4f15092657f7e253990bf906a9961e3"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","4e9d1709bb49211b0e483a2f85731a60"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","a2053915c7318943f96839f02d64107f"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","d2c1d08df96c30016f03ec72998fefdb"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","8c9bea97b08aadf5016f9314ed328f8d"],["/404.html","3930dffdd238e9510ed5c21284f8033a"],["/about/index.html","8db5ddfa215cf64407b5899994cfce7c"],["/archives/2022/05/index.html","13a7465829d305a6e18c074bf9a9c20e"],["/archives/2022/06/index.html","88dfc8bd61de1df615cb67545ae125c4"],["/archives/2022/06/page/2/index.html","c6c822aca5da70509a0783308d7d5907"],["/archives/2022/06/page/3/index.html","e2745378445c36d361a5d27704e4991d"],["/archives/2022/07/index.html","69126a06fc5c029aae315146c91fe4f1"],["/archives/2022/08/index.html","1064859801a1bc1e26ab1040163456ed"],["/archives/2022/09/index.html","b84b700e3ef5911669ce6d92ec2d769a"],["/archives/2022/10/index.html","8107c5b4ea663105cf32133958162e6d"],["/archives/2022/10/page/2/index.html","a95088503b785081efef0bbbf2d3add7"],["/archives/2022/11/index.html","65847404ef9572460570d236d1723cf6"],["/archives/2022/index.html","d458bf626109f1d3fa902f5a466060ec"],["/archives/2022/page/2/index.html","dee4a431c9e78b8b16d54534590bf3d9"],["/archives/2022/page/3/index.html","9bb69a556288a95221fd6fdb1b7beec6"],["/archives/2022/page/4/index.html","ca0f022c4bf447d6364fc6eb67cdc7f0"],["/archives/2022/page/5/index.html","4d77ca1fabf7925cd89665296dcedcac"],["/archives/2022/page/6/index.html","5a0933659ce1ac41a82fa54a1b95206b"],["/archives/2022/page/7/index.html","8f13e5ade53923ca11f66543d2cbfc90"],["/archives/index.html","15c4e8e073876aceb86142bc2d6b4cd5"],["/archives/page/2/index.html","43d7c20201f9ae03524caeb935213ff5"],["/archives/page/3/index.html","c23ded9b622363eff922693c0a6570ca"],["/archives/page/4/index.html","995e9efccd4804aa94ddd43721556faa"],["/archives/page/5/index.html","844877151bf052434e5fc98f942ba913"],["/archives/page/6/index.html","534b590e91bd5d1a72360f2ec00e8bcf"],["/archives/page/7/index.html","91bb64b807fafb441f1b3d5b3c4d7d5f"],["/bangumis/index.html","dd160c0a92559dea3ad44fb74040a670"],["/categories/FrontEnd/CSS/index.html","b0bbf2529b3b4ebee3aab8d2c013abdd"],["/categories/FrontEnd/ElementUi/index.html","cabcf73e55663cd6c785c15f5bc400c4"],["/categories/FrontEnd/Javascript/index.html","7376453627a05c5a111a541567e0c612"],["/categories/FrontEnd/Javascript/page/2/index.html","8fa50e486be6d36afae308a818771d81"],["/categories/FrontEnd/Node/index.html","e310d84adacc7055cb8b7ab1edd7dd7d"],["/categories/FrontEnd/Scss/index.html","d9d17666b69911dab3a9a4ec241ad35d"],["/categories/FrontEnd/Vue/index.html","0a8dbc7a12e897caf55df2d62c688d9f"],["/categories/FrontEnd/Vue/page/2/index.html","39ca60983bc8cc928a7b60fa5f2996cb"],["/categories/FrontEnd/Webpack/index.html","a41a93b6189035543d89e8d97e5ae4f0"],["/categories/FrontEnd/index.html","c53fd3f81de777b22fc5d962d9a24cb4"],["/categories/FrontEnd/page/2/index.html","98da0c374a9b4ebdb0420c883fba2a60"],["/categories/FrontEnd/page/3/index.html","25eb7faac5d4454a8c503b85d44bba13"],["/categories/FrontEnd/page/4/index.html","cc046314a63d6eeb93c9cc8594c86ee3"],["/categories/FrontEnd/page/5/index.html","8d7b2537ac5663896b9adc9960e55f76"],["/categories/FrontEnd/page/6/index.html","e4f2b92da67e572a4957a519fffcf5b9"],["/categories/Git/index.html","8885ec029a7d3c92e2b8ee34bc421185"],["/categories/Hexo/index.html","a1789803341a8e154152df152d329771"],["/categories/Linux/index.html","1c666bf98257bf37a797d435abe682bd"],["/categories/Server/index.html","ee5b4c5337a5cfb480a4400cb2c61f55"],["/categories/index.html","48a4febf09bd14d99b0b5c2cb41e5c17"],["/categories/插件工具/index.html","f8be6b1f3d94ec94c0dc9198841626f6"],["/categories/移动端/index.html","e9c9be05ea166fc55b6442bcfdf685e9"],["/collect/index.html","e8f0354ca753ea081132c050b5fe380f"],["/comments/index.html","5c7f0e2fc27f4e5b328c76640ec15316"],["/css/customer_butterfly.css","bf4bb98a3f2bd1eb6899f19ad8b6825d"],["/css/customer_style.css","502e51dabffd1df9cd950b452d0ec3a9"],["/css/index.css","f86ceba681c8070a1d2537afd09a81ce"],["/css/loading.css","9a2d20e88f67a12d6f855afd8679a271"],["/css/nav_menu.css","be2b4091b532bd3eb7de71034df21c01"],["/css/progress_bar.css","f67cafebd24decea8da169c57e2e4e28"],["/css/rightMenu.css","db247e3cd86f3c43e32b56889414249f"],["/css/var.css","2f63dd8293d762bd8e5628bceb5c8772"],["/gallery/index.html","cfea3f05b0196b39e21634fec423164f"],["/gallery/wallpaper/index.html","fdc0aeb22675663aaa7a3a62adb7c875"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","4a36549ccd060e57811fcf825686655f"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","b1f8e90d844bdb304a3b78bbf870dd7d"],["/music/index.html","56fbd85f336396113b2da5b0e17ca197"],["/page/2/index.html","c1ff5281ff430eb5539ad23790d1b726"],["/page/3/index.html","a0391d756153c48df3d87722cfad7e58"],["/page/4/index.html","e0ddbb185970b81dd8ea700b1e080f44"],["/page/5/index.html","7f4459dd368c9db1de8a685a35ae6d83"],["/page/6/index.html","3bce3d2511ad299446bbbe86f144b58e"],["/page/7/index.html","394802d1cca8755a0936a6f7d538fe4b"],["/sw-register.js","085754d32e435599f0b24fb71ea88961"],["/tags/Flutter/index.html","2722a43d2f02dd77b9c2f8b327b2a0f6"],["/tags/Hexo/index.html","f362bb88afc6c071a24ed41f3fbebd8f"],["/tags/JS小知识/index.html","96783015f616bbbd34fa58c5b4839b3f"],["/tags/JS小知识/page/2/index.html","4f5fdfcf7593058b1f2e81c91f996bf6"],["/tags/Linux/index.html","29ad93dc2d050b70d4201bad10b37d4e"],["/tags/Node学习路线/index.html","480814d8c5aff6f6f43842089368030e"],["/tags/Node小知识/index.html","2b7dc18ae8d40ff82bb8c6de487d58a3"],["/tags/css/index.html","c1f7ec85d6f725421c1a13460da9072b"],["/tags/css小知识/index.html","b32002860434c04846085ce1224d596c"],["/tags/elementUi/index.html","097d2a6b53331240ca670262db8825f8"],["/tags/index.html","f5e65f7c2d5d8890497f248f31ab06a6"],["/tags/javascript/index.html","3b765cd61d793a5f0ea7ac466b79913a"],["/tags/javascript/page/2/index.html","6b17d1b48b9c18fa9327af3736ceff08"],["/tags/nginx/index.html","6a83c9e4fd209226b385ed63f242c920"],["/tags/nodejs/index.html","64ca2ec11af1dc60658737fcf906a73c"],["/tags/scss/index.html","6e757844cdde6027e6d14cc59aec6e98"],["/tags/vue/index.html","3c24c10f63962841e1959f2c8ea09e0a"],["/tags/vuepress/index.html","425f27394a4c83d9a2e0295ff698f41a"],["/tags/vue小知识/index.html","8acd78d749585c30762c632762579072"],["/tags/vue小知识/page/2/index.html","3b9a8d8874d04c897c8df217d063953e"],["/tags/webpack/index.html","51bed0e6fd76a7d8d5a74f30db63cf83"],["/tags/webstorm/index.html","9ebca9792c83fcc09d7a115e9e869a3f"],["/tags/windows/index.html","7a2a194067d30d24cbd412dd2dde67e4"],["/tags/插件工具/index.html","a34bccc92202bd46570137c48db80002"],["/tags/问题随录/index.html","e946492fe87832f7ab33c602634b4c27"],["/zhheo/random.js","bec0cb68dabda0016a8aeefe32223e45"]];
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
