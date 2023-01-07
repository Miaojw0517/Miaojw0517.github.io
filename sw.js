/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","4d8c221a4ce2a278bb3ef00d9790ef8f"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","81b6eac3c074651237676292dbc7f6ad"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","a462d44897fa74e48e98c2509bcc8cef"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","309b6320f9d7dcdb03dfa2c84abf0485"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","bf4f5d32c5c7bfa7db8542a5ec0588ee"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","aa138cb13ace71833f0e8b14d52ce5ec"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","069fcdc8992b056b498ccf323cee14e6"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","31768885a3c126f95bbeff471ff7f201"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","3affda565a11354a9508a0496c9cc52f"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","e35f854462870f9aa6e514cea8d3f8f3"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","1ae37323e534485e5dcf679ff017e400"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","dd0c83e4eae373f7680c79de759acae2"],["/2022/06/10/tools/webstorm/快捷键/index.html","d90b02b68796d586eb5cc86e18ad304c"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","71a3d315ec18c722ad655abd980e2a48"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","a0e241193d8ff934a83ba7680d576a7e"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","9c3dc96098273855e386a15f2cae6e82"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","592a2c4c40453c8e888ae48de80e1208"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","32aaa278b89084ecdd910f46d722ee27"],["/2022/06/17/vuepress/vuepress搭建/index.html","f337285779a05c8715951178f59074fa"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","b62a018415950c72f5b182ee514769cb"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","3c5ec23ced817fe6049a351de0aaa680"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","6e9915e366d64acbf7212078d64b1165"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","ea25b9f48fda3d1cff3ccd3c1d33c13b"],["/2022/06/22/inductive/javascript/进制转换/index.html","cc09845bf37bc50423ce99786962a1d0"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","1adfb71c059897fc17831624a3ff8f0d"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","1756a30e701868c55b9b7581c01b4408"],["/2022/06/23/inductive/scss/Base-level rules/index.html","eee3fb3248b08fcc19e3f2d0a7b96ed5"],["/2022/06/23/inductive/scss/主题切换/index.html","64c8d42c5903012b772d942007daccde"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","12623c69223c1fad21dd243e4f388b56"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","a6d3d11d07914f19758ea6d2a4ac40c5"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","66e7331719794cd621a03feab34875d9"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","d7e6eae405dfb8a9f5b39c8c200e8feb"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","0b72f484f22c5395ffcf55d5346daf39"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","0db4f6a80560771d36cab84cb1990336"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","449514e26c0dc594b31b805aa5149acd"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","f2372a10d640cea5814d8f888b3706c8"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","d1a690e6a56db570d69e7afc25ee142a"],["/2022/07/06/tools/nodejs/npkill/index.html","9238c55e3f2c21d20df8348cfc05b198"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","37eb9bebf38866ed0f684515cacececc"],["/2022/07/07/learning/linux/常用命令/index.html","1ae2cf5195cc9e861b5ac607f5928804"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","99580287d676effb3214ce9bc825884c"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","469d6208b6f87adb74cc689d382e6921"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","b90a89226c1090aa7264842c699285e1"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","39176217b1001e2a2850b5d12d09e2c0"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","dfc1f954d96d8ad974ea76a34a229ebd"],["/2022/08/06/tools/nodejs/nrm/index.html","14b33c0f47cabfde8ad000eee09d54c5"],["/2022/08/06/tools/nodejs/nvm/index.html","b8a424362186d5df5b1f84213f11eab8"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","077d0143d1b6170b70e571e6774e024c"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","a1d883fbf40bfadbac71be7acda1b7fa"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","a43eee7872cccfc9e0942e284b681f86"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","159a9894b76da254fda8499b2a840ac2"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","ae75b4043724baa4633b2b09f359f509"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","9fb6c4656496385cd60e6ee09047a3db"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","74c14f7c3a0242709c38c99d0c4e00e4"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","29012233b980da0d01244760de349f55"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","821567f6fd45f9141fa3b8cd2ac51e03"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","8a641e3bb77d05ac59de37d35083922f"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","1df9eaf8d3004617d4d38257c3233b1f"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","48059e40b937f9fc7067d295b4d710bc"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","e021a6c68f2b66e589297112133d11a4"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","c5c48195e1783548d9126d93becb79ca"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","1d4158f27fca9220150605007824d065"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","cd4d2498f82628490bd783e7791a4e0d"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","a6dcaf5d5d99033991f99de2861e4ed4"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","92a4f3b878d5cbcac8fa5043a49c07e0"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","8069187b541468cd58ecdd4886dd854b"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","e27388e83741eef71dcddf1d6a221cdb"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","b5126834f99324a4f860e03c291aba7d"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","6a34417b43d1e5351962b483cd2f32bb"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","b38891f40a498bc10c02dd4faf24679f"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","03b6b056eedb9d7bbfcdee3a6d5561ba"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","9a7e443ea4d0907d3f2a14816ac9b191"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","d402eca67762099fbd6da93aac057468"],["/404.html","15ef3593d0be7dafda562df6e0342835"],["/about/index.html","ee5e6c5cc330cc5a52a795e3b197ac24"],["/air-conditioner/index.html","7b7494a8bc2f42a6219f24f44900c5fb"],["/archives/2022/05/index.html","918c9c8d37f4882d3ff04d1b13488942"],["/archives/2022/06/index.html","35e759fdc69709b58583512c56d8fc7c"],["/archives/2022/06/page/2/index.html","66f91ae78ca7d34af0f141cc2c4b490f"],["/archives/2022/06/page/3/index.html","e416135d32ce6a598cd25048df49ac04"],["/archives/2022/07/index.html","60d3d07ce886ba1829c43d03139b6561"],["/archives/2022/08/index.html","66f2b2505390c9df1af17aa790af2d08"],["/archives/2022/09/index.html","3beb375bd4c3c689a4cb92c198c56fe5"],["/archives/2022/10/index.html","b8e88c8185490c809b9293ebffab03b7"],["/archives/2022/11/index.html","0bc72a150550ecea010f0a327d3cddab"],["/archives/2022/12/index.html","a3a5c67e540b6bb09d6a44be2a3143d0"],["/archives/2022/index.html","4171e9d2b663b76801d5febbf524ba43"],["/archives/2022/page/2/index.html","4f4dae76731b0cc12f3e840108b82e98"],["/archives/2022/page/3/index.html","293636916ae870ada323b1c4ad92477d"],["/archives/2022/page/4/index.html","d92662ba35ea38debe818e40948c4e88"],["/archives/2022/page/5/index.html","42d1627d378722d5ffba364fede83b25"],["/archives/2022/page/6/index.html","9acec8c44026ccbb888bc42dd7c4e092"],["/archives/2022/page/7/index.html","7d385911f233c686457a7c08a34a3e80"],["/archives/2022/page/8/index.html","5cb811da380f9bf7236cf44e1e89072c"],["/archives/2023/01/index.html","c15f8ff80ea29da69eef4c81b8e89227"],["/archives/2023/index.html","e0c2e7908e5ec3ad6c9d297b3420c4e7"],["/archives/index.html","41e28944381a9d218e57c3b4554ce5ad"],["/archives/page/2/index.html","754ace822f2bbb7c859d0443f586422f"],["/archives/page/3/index.html","bf305254afd49a587415eeea4b20e231"],["/archives/page/4/index.html","c7182f67c488385053cb98a670a43b6e"],["/archives/page/5/index.html","ebb47e67ad37a65000f4fc0736a5cf5e"],["/archives/page/6/index.html","2f1acaa4b358fef780f3a0bc9fb667ae"],["/archives/page/7/index.html","e3edcdde144e4df7540224f6ba4d9124"],["/archives/page/8/index.html","cb5cbb68474acd8a87e27c01716f994f"],["/bangumis/index.html","e3f14afd7563aec60c5dd4038e007183"],["/categories/FrontEnd/index.html","f84ebe44ed342620f3034cac72cf1104"],["/categories/FrontEnd/page/2/index.html","ec0339d4b22dd14d51d4d2c4ddcd5ed7"],["/categories/FrontEnd/page/3/index.html","340ddbef6f521a8c2ca54532d64fc5bf"],["/categories/FrontEnd/page/4/index.html","5daa99bce36bb5d75e1a5de11663c80e"],["/categories/FrontEnd/page/5/index.html","29275f12d7b4ad735a25ecdd31a04d13"],["/categories/FrontEnd/page/6/index.html","3646cd3a47d05d59936aa544b0b576af"],["/categories/Git/index.html","8c5a501517ea6cebcbba2af7de7a9e50"],["/categories/Hexo/index.html","5149e0e5acfd386cd66e599b8767e109"],["/categories/Linux/index.html","eac23c49184db5936cfdae9cb1c3e2dc"],["/categories/Nginx/index.html","458bad5e9f6f05bbb837e483a10e40a5"],["/categories/index.html","2ffbde80bf08d9f4fee729d80b97e217"],["/categories/插件工具/index.html","3f993fd83b0bca55fcfae02270190334"],["/categories/移动端/index.html","50db3e996ae069658aa81a72d95f144d"],["/collect/index.html","8c71c17d429ae798b46895ef10892f6c"],["/comments/index.html","b6f3cfcd04674cceb4df8c62457d2cb6"],["/css/biliBg/autumn/autumn.css","599592fb036517d2b8065090596a38bc"],["/css/biliBg/spring/spring.css","5d0502e13cbd89e167cd375dcdf51e14"],["/css/biliBg/winter/winter.css","da76c7af7df0732846f08a4895d78a53"],["/css/commentBarrage.css","51e046924ecb1d9f6ebf25df3ab3ea27"],["/css/customer_butterfly.css","bcf4fbe67f9640507233000664065f74"],["/css/customer_style.css","e9fd6f217727ac80e4c3d342758b2399"],["/css/essay_page.css","c7ec01496f35ac043210c4b37a04a912"],["/css/iconfont.css","568b1b9e3709cc8d3f43fbb40a951a4c"],["/css/index.css","98c2991a764c2cd284660ceb6bbe3fc7"],["/css/lantern.css","6fc941be88273b66b73d75a716067344"],["/css/loading.css","810d96fae63da6adee45a3807228445b"],["/css/nav_menu.css","73a04fb2b36ae53bf1115523eb0c4950"],["/css/progress_bar.css","55cf79b8ab2b5343bfb194034550276a"],["/css/rightMenu.css","748079060b586f061f07379b46e879b4"],["/css/var.css","f426b11ebd33ebc68dc9f3bdc3412e20"],["/essay/index.html","3dde1f011260461ce038c4d467dc9092"],["/gallery/index.html","6f30e28374eaada1805fe081d35ada0a"],["/gallery/wallpaper/index.html","058be69f72230619e4e0c8fb3bd6d3df"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","b7fd5468f66dde955d371e35a73f5a37"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","3e0d93c29bad2846aa8e5743b0243f1e"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","548723300f86f340df15a550d8b50ca9"],["/music/index.html","13efe8e838ea852d325b737747ccb129"],["/page/2/index.html","24fedc1cc089215e1bbc85d1a1f9b6eb"],["/page/3/index.html","87591fe4e9e9e1d72bf679e75b050f95"],["/page/4/index.html","c7f361e2259ca9d30752c574ec35930b"],["/page/5/index.html","613bc8bd2572bd7398df5514aeb98d1f"],["/page/6/index.html","945c20b61a44a86fae1ab66506ff1dc4"],["/page/7/index.html","e78f49e65b072a670cc7ebb419676dd8"],["/page/8/index.html","a760601e2728aa6440f18202cae6698d"],["/sw-register.js","aa3ba724822cdb2021b59e17d8801696"],["/tags/CSS/index.html","c818c76f2f9159aee770b8bd2800d715"],["/tags/Dart/index.html","689af49c327d5798595a703985dd2e34"],["/tags/ElementUi/index.html","ddd384144b18959edf0a8f686ce41204"],["/tags/Flutter/index.html","cc5b2d81cdd5a1e5a0151db475eda0cd"],["/tags/Git/index.html","f4ca651237454788c543ddd519c77960"],["/tags/Hexo/index.html","49ea50a88115f1f8276d36eb9b22bef5"],["/tags/Javascript/index.html","2b935ebd9c9afabc4facf77e5d3ddf84"],["/tags/Javascript/page/2/index.html","5df97f94f4429628759e7c9f67d518ae"],["/tags/Linux/index.html","51f45b53871f0430429edae1fbcef69b"],["/tags/Nginx/index.html","3afca0ad87107b227f9f409976873573"],["/tags/Node/index.html","6a2f62d7788143ab7655d72222f21d12"],["/tags/Scss/index.html","dbb057bdec91ee1fc7c7a41b08fe4a1f"],["/tags/Vue/index.html","4e5e27027cd8787bec8f611544af1792"],["/tags/Vue/page/2/index.html","a2e9aedc6031d004b372093bf6aec3ed"],["/tags/Vuepress/index.html","4fdaf1da62b3ed3158d2996e28d57f31"],["/tags/Webstorm/index.html","fa7833a8eb4df9fe7b57bb508abb2901"],["/tags/Windows/index.html","11a892d5cf8e1cffab29f054a00538d5"],["/tags/index.html","e082e14950981ebfdb30b3a2e5d216c4"],["/tags/插件工具/index.html","ce9565d9399bdfff5e191a98d8dcf11f"],["/tags/问题随录/index.html","7302e001878a811bde54ad17a5c163e3"],["/zhheo/random.js","123fbfe312990ba71ca2f7a2393d4a1d"]];
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
