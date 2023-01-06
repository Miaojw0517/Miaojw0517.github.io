/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","c90854b4eecfa52b0894eacb3d574ee5"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","8216b15079e5cf125c238119aa3b12f9"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","3c07b7bf8c7f578994e4e8ab3350ef2c"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","060ab31b1def081e341c8809d9f6ad6a"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","5ebde4bd763bd4fb33cbabf83dc2b776"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","e61c6164346129d5a7bc41bfc4f68104"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","b3c20b5921824279a7f84e1f9a757e3b"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","35852a3c9647ef301bdff8c7dcad38cf"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","5298df1468602518a01a86736a92b344"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","239167a5680cbf42347ff2809a5a8a62"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","4339f1cbe0af9aef05cf935c159ddb9c"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","4fff4e5053b3603b426c0ca4dbf361f9"],["/2022/06/10/tools/webstorm/快捷键/index.html","33fe1522c16330ccf03d0bd0382a88be"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","1448cb2efcb3d50697c7c8cd87aa17f0"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","db355cc3a3f05f92f9deb486cfe14d76"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","a009c491b9504c3df5ededeb7dc68102"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","7b1b058eb3ed9cd8ba3ade88a18c2747"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","6c991669e148e8ff67add17f706f2537"],["/2022/06/17/vuepress/vuepress搭建/index.html","fe45caddbc06062a2c76b500a592e468"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","28d3f1f7109f8035088da8d990a5a565"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","fd0b723c2c10b54597c66f3b878f0f11"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","25f92d69f50d1df10a09fa11b6e0d949"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","4cdacef5fca0f6c9d13307b0267bd5fb"],["/2022/06/22/inductive/javascript/进制转换/index.html","f987a2ab8963be024ab7767884ca3401"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","9ebbccc055f43849646308320ca98f7d"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","5551f414613091fd13d9ff942311fe4b"],["/2022/06/23/inductive/scss/Base-level rules/index.html","728bf20e646332cd5134fc74fbab60c4"],["/2022/06/23/inductive/scss/主题切换/index.html","429fd01ba84b53005f321df8e56d9084"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","2c6fe46eea14f85e6ea8e44f73d45cd5"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","08e425b13e3fb7efecdcf854f3f2d694"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","2dcdcda3f912031f7ba06701a28aee6a"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","beca21c27536961d2512ed8ca69a3230"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","80cea15878d1acd36df4b305171c8ea5"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","bbe3c1cc4161b6168baa10451d0454df"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","3b0dae4a15ef3f3673e5067488532b68"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","2346cb75cc7887a16f4ffd7296d11069"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","0cccb5f5b8a4c9da9d4e48a296d6044a"],["/2022/07/06/tools/nodejs/npkill/index.html","f9f067940eb922e251698b8cf4dfec0e"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","936384fc8636cb396b7533ab38e6dee8"],["/2022/07/07/learning/linux/常用命令/index.html","306fda37a51476b64f44e2971bc17de6"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","4c32d6993d34e35223a65af84686db70"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","14627677e69f857ec41e0cd0559b69c1"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","85a0737915972c02b095bde552063e72"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","e93fd54ccbee476c200310cc21ff2ef7"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","17a0134d7266b6875e615bd307c12ace"],["/2022/08/06/tools/nodejs/nrm/index.html","cb1c182bc8c039aee5599b1e4938a5b8"],["/2022/08/06/tools/nodejs/nvm/index.html","881c2ea99386b558f09891ef60dcceb7"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","33e20f7a5b97a176e119cfb745c42879"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","8ca811e66e24e679712cd4992dd8c58d"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","280b93b5b9ba63d5ea55b0750579e40a"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","cc22c73207111a874a3e7ff295ab0cad"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","71bf6fccadf7a7e1cf3247b805061bde"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","83c1399f83a551b02a8ccfb5c3277165"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","4f16ee2f9c8a39f4126a4eab437e5a3d"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","11691310f1b49c8e9bfcbbabab8455d0"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","ccb72ae8214f06ea3b7b5510aae3bfb6"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","69b18698bfe8efb114c782e49382a0b4"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","6aebb93b38930ccb308ca680884f6035"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","deb31ed10b9facdb5ab4ac232d1b2ade"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","cd2368bb899cdd319a53db5d20cfa77b"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","a7a85796a7d967ec5c641ba5b669489b"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","9fa28c02e8847af748bb1b04f433f557"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","e826261c40546816cb3b48580bf21283"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","922b0d13f8cb55a78e77e8feb1b51bf5"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","92cd10b91be23d72546ffed61e89ae0a"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","d29a7bff9b6df320a878fea7d299e4df"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","1b5887ebee972e78fa9dd389d1cc3ffa"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","0c282cc53c9583f8db2278e2c247b8dc"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","ee2a910b96c00ca617aa7351d65099c3"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","5f85bbfe69d218186eabb803b18b27a2"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","752e3285d67b0fcc1e00bb330c239198"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","f80e43d8d0cb664b6bec100c262ef3e5"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","a7bb01ff3b4fcedb1653e059e0fc3493"],["/404.html","77c1c4c3fdc9a0bf3762d068ff5bc3e8"],["/about/index.html","674303bc14c9447c9ef3724b5c7a2be5"],["/air-conditioner/index.html","3fa0e8e319e57474abfc2fd21716e925"],["/archives/2022/05/index.html","872026e9acd234fa0d4ad3f7bf1c837a"],["/archives/2022/06/index.html","ea9d5025247b035c1485a914f93b6397"],["/archives/2022/06/page/2/index.html","9d9b4a3032e0ea792830b46b3cfd2e00"],["/archives/2022/06/page/3/index.html","3758a3ec239623b085ea15996c373657"],["/archives/2022/07/index.html","422261f259bd129a2c16e8932c99cebb"],["/archives/2022/08/index.html","b78fc97b5f5992453c3059e13bd46a43"],["/archives/2022/09/index.html","397d10f65e0386a8a3e489a456836594"],["/archives/2022/10/index.html","09bacab40cc356afc189d42358f5a756"],["/archives/2022/11/index.html","733e1138255b2f4d5b4f88a305e11f6b"],["/archives/2022/12/index.html","95b5155cacbf23d71876415a9d09f5b3"],["/archives/2022/index.html","0533ae2e6faa233f97a673686b0e4dfd"],["/archives/2022/page/2/index.html","46e63d752d8ea99b988af64d676344fc"],["/archives/2022/page/3/index.html","0568a1255b5a9d90f6ab8d925ed3f448"],["/archives/2022/page/4/index.html","f88e9360db5c8ea29dd0a29aac3aba0a"],["/archives/2022/page/5/index.html","62b6fc75f7462f082faa3b04e58bb4c9"],["/archives/2022/page/6/index.html","d3ffe8d3c8ca2240f195901ade21b958"],["/archives/2022/page/7/index.html","d0b60c7db1e121c4ab1d0a5771016a16"],["/archives/2022/page/8/index.html","7109de342aa4816519dfe58d039ac218"],["/archives/2023/01/index.html","dc48f1fc9ba5a9a54d4a5742b73f94b9"],["/archives/2023/index.html","0699a1bbae426539184b65b7277ff801"],["/archives/index.html","d681c1af8e34639248d7fc219318b930"],["/archives/page/2/index.html","574ab5da98b6a3dca561afe602b27829"],["/archives/page/3/index.html","14aa8c5b7e84997ad8db8d85377e0a02"],["/archives/page/4/index.html","308862887b3b47e1bbe750b8989c24e8"],["/archives/page/5/index.html","60c99b3c12aef1e1d44cb0ef88fe4b66"],["/archives/page/6/index.html","0bf63693f98a5169a0ea8252be479cc9"],["/archives/page/7/index.html","26303992ac99eccf200244ac14902320"],["/archives/page/8/index.html","acdab72041e42f4345112982b92fd354"],["/bangumis/index.html","7502e43714156affcd7ebf658f721957"],["/categories/FrontEnd/index.html","b3624d9d84e47a02d68d7bdfdb24d94e"],["/categories/FrontEnd/page/2/index.html","c8b694a1c0d027ef67143a48ffb6d203"],["/categories/FrontEnd/page/3/index.html","ae4567cf1715241581b60016ea3e2402"],["/categories/FrontEnd/page/4/index.html","79d303dbacb7e0f3c052dcc4ab053c6e"],["/categories/FrontEnd/page/5/index.html","e16c2952c17d097825f7ca6431576a25"],["/categories/FrontEnd/page/6/index.html","5d02d93ddb1205e84835b6b9d7b14461"],["/categories/Git/index.html","b81b45c285c18c4c03721815ecbb58ff"],["/categories/Hexo/index.html","73d5a3ef988fb4a01058f05d712da402"],["/categories/Linux/index.html","1101cc6cb638b5f8ebe0a1a380a20ae2"],["/categories/Nginx/index.html","78354572b5d0c5f2f2b3afffe55d2f1d"],["/categories/index.html","048d5c8d57f6574358c7d8c02d3b1018"],["/categories/插件工具/index.html","d6aee1ee01699728bd356f2c0f0815c0"],["/categories/移动端/index.html","d6b7ad5a883c38788e179bea0a9d50c6"],["/collect/index.html","caafe73a142287d9e6330120f0ec371e"],["/comments/index.html","cc72cd1be74331fc83c72c9e88afa3c6"],["/css/biliBg/autumn/autumn.css","3f979b5ca6999577a6e8d401ef7aeb62"],["/css/biliBg/spring/spring.css","b5f823aadc097676f31423715aba83b7"],["/css/biliBg/winter/winter.css","1c23df35688bdc11af2a4a6455d6a3c3"],["/css/commentBarrage.css","f6840d53a3a625558feaa62b494679d2"],["/css/customer_butterfly.css","f41cb074e6bfacc27a98647b363e0774"],["/css/customer_style.css","ee7710b0702a2ba809311614f05d1a63"],["/css/essay_page.css","141935d0db445140e4a0d415cf1f3741"],["/css/iconfont.css","368a4fe4968cd0f37d5ee1b804198cf1"],["/css/index.css","0aeb3b8373259a87b183050d1652857c"],["/css/lantern.css","ef8a6bd8185ff78a09539013e9e7eed8"],["/css/loading.css","c312eb8c03a5bcf65456f98744866494"],["/css/nav_menu.css","391d91b79899aca7d4bed2c32133695c"],["/css/progress_bar.css","62ace3b5b5f7a5b163d9e586aa4c5397"],["/css/rightMenu.css","3409d1ad28b10b5025e51ac0a2d98166"],["/css/var.css","fffbdc733911b5d4675283b7e7d739a1"],["/essay/index.html","85e6f502c215344d2903b1ca93be0bb2"],["/gallery/index.html","c61856b0415a1c5a619790de80e78872"],["/gallery/wallpaper/index.html","85e8692a029f6f5d318faf4e846aa367"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","bd30f09218eae7f15c2eb6ee2e4fb143"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","faad37be6cd7e0bbd6bb788d1cf4a335"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","bfa3dfdae743dbcfcb69f6579b066911"],["/music/index.html","42ebc76d33e74407b42653bd6d8dfbe7"],["/page/2/index.html","031dd4a060db46d3c904e08a3ed11469"],["/page/3/index.html","2d76d9a1eaaf2556eb3dc2b1c61c8718"],["/page/4/index.html","13c56290884b8d3970ad1eea07efac1e"],["/page/5/index.html","88d3fde0be9a34ae87317d853a410837"],["/page/6/index.html","240cae8e5a76a5b3ea6238a0d60c0110"],["/page/7/index.html","dc24a36ba3724c44d065592995a7a6c7"],["/page/8/index.html","3a8a62899fc1605cb2aac0d803768f28"],["/sw-register.js","8dc00b02846b3fdd8c87c5f78a8c699f"],["/tags/CSS/index.html","db31688f5ab996b882c8979529d0e05e"],["/tags/Dart/index.html","5c0c8a67ee1c9613f31731ad03772f72"],["/tags/ElementUi/index.html","19546ad9ce3a121ebec6a1f1599d0db1"],["/tags/Flutter/index.html","0b60f88e793829e93907220a87d5f85f"],["/tags/Git/index.html","c7d566e6da39fad1ac795a822d5d468e"],["/tags/Hexo/index.html","2d3bbab7a947c6b5e7f43abe8b04e671"],["/tags/Javascript/index.html","3ab26f97d10419e8fb43e3dee8a803f9"],["/tags/Javascript/page/2/index.html","e03c115338ef3c0e6866584b0c656b8f"],["/tags/Linux/index.html","b4365cd8ddb13b6bf319b0f856d7caa8"],["/tags/Nginx/index.html","4b146181979fa303017e21a7639ea29f"],["/tags/Node/index.html","433d461830387385f301b95d70ea4c62"],["/tags/Scss/index.html","32d57f5bb5ebf7383e9fd24f765a15b7"],["/tags/Vue/index.html","fee58d5096b7b8119b996f59e7c90088"],["/tags/Vue/page/2/index.html","2aa586a1e998d5f52cb4a468a1b12d6c"],["/tags/Vuepress/index.html","30243255341726add9c9a018c02c5ebe"],["/tags/Webstorm/index.html","f7e58e3cb8bb7c09eb73851192ac687a"],["/tags/Windows/index.html","c7f35bc4093c3e2fdf301dc3d2b522dc"],["/tags/index.html","7e28e9398de587e4266d96e1823178c7"],["/tags/插件工具/index.html","262d121a5df8b4c9b66925fdce30754c"],["/tags/问题随录/index.html","76c1b28e287d05ee07144df8cbeb01ef"],["/zhheo/random.js","11150a48ea9b2cffd2a3947c2f16bfb6"]];
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
