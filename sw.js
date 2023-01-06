/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","10bae32eda5ecd9e3e7f27df54617193"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","9d55c7e2403fed8ea2949512ead9a533"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","63452a29b45ca38107aac81c504bfc03"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","00d13686406faa3a9e68f288542648ad"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","7b449bc5b04bf5d3678ad91ff11f2399"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","7a33c633cd0ed563a7c83f44cfcb56c7"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","d341e6855b0985ebd25b5bca71b46b9a"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","29cbd908b5d28f4214b16bbc020ceeee"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","0dc55b988b0dddac49f30cee461dbee0"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","b7ff6a78025083eb0126b691212ea804"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","e2e6504dde75b3c1e25ca16d166a112a"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","b8a4a6bf67138e4f09cbab374aea17e5"],["/2022/06/10/tools/webstorm/快捷键/index.html","82023118d1bc897a580f0d3469707283"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","47672885eae3867ce3973d5247c1975b"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","d4d2182c057016a32e2c8a02d69496f4"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","c05bb39b6ecf96fde5dfc48f9aad68c3"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","ca30522e0626d5b2e1aee389b15c9a7a"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","a466374f61927c4cdcf84cd247fc9cbb"],["/2022/06/17/vuepress/vuepress搭建/index.html","0b41fd9dd206f0f9bb343d24df82a0ae"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","81f9be937999bf9b17d4490cc3f6f66a"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","00b11fdf9ce96350638bde7abd34a024"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","9979ca91421c654bc327e1f550dc603b"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","9a61b7f593134207f92dad41b34857d1"],["/2022/06/22/inductive/javascript/进制转换/index.html","88341f3a7a92b37c2c39632f66ff741b"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","7af0542bb3a61b6dfd8340fc86275ec6"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","4c93b4b2a9a8af4d71a5ce34cad8529a"],["/2022/06/23/inductive/scss/Base-level rules/index.html","d6004ca6c9434e232e39de576291d31c"],["/2022/06/23/inductive/scss/主题切换/index.html","ac611b6966852a6f051dd5332c592438"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","74fce20b9c05fe16a6a81428f5c4f6ac"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","5b1b44082f98963267d146bcf6f2860b"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","3a9ec11df2c45698eb356d9c627fcbf1"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","c36b617a73de31452f8bd0ff7a0ff650"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","56aec4c8a7db28db9725a1062f28f36e"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","7e5a8c03bc68ac4c682a6eae4c649416"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","7923ef188a0fba6d29bebd96a28fb84d"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","70a99138cf32c3b6f22dfc8baccb2d08"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","ed5832b06de7f18e717287a16938ff09"],["/2022/07/06/tools/nodejs/npkill/index.html","1efd29ae3b3c683fcac060cf6888c0ec"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","95c5a9841448c34d42ee9f2990ae525a"],["/2022/07/07/learning/linux/常用命令/index.html","09f9897e00b4b7546cc8bcfdcbd557e3"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","d27227911a7798c3ff21d9059f514b4e"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","b1b04dab13fbafc728c201883a748d00"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","a27d6f259175f0f2438871859a8501d4"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","a8b4ec9fb4831051535667566c5c4140"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","3f53d96dd9c6e6f377a62cbe6b2e216b"],["/2022/08/06/tools/nodejs/nrm/index.html","72c35fc49f4d0bdffc442ceba8c68eab"],["/2022/08/06/tools/nodejs/nvm/index.html","81d34761db987fa4cde08b48513dde82"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","1a154321dfd1b1a1b1a0d61991366561"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","61bc05146158a154be335b59dc3900b0"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","f81347c1a4a1092acdc35d826b60ecf4"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","594a9f1022551ee488ab3a8c9eae9cdc"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","e7b4cb84c591941ceb8eb0c98745104b"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","e1de339355a15d6f35cef3e9eac5194a"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","13f581ac40ce5897996f02783145c645"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","a5b84bc3eca26ec05c54169b35930167"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","27c6ba81515e04c056ad16935a0277c1"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","8bfa304d1565bd82fe853523a5c18c6e"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","998f735e10040ec1e563a0c102bc3edc"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","1240805fa85dcb56bce028b0d5afccb7"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","881073618befcedf0dbd6dcbd40cab30"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","808f1f27f2e797b1793a721637b8126a"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","83c7b2e0d4641ebb4728f2d3b5a92eef"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","27e098cfa180010b0d7a4e11be90de52"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","0fbfad566670cc6aadef3648f02d7ecc"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","613c7c82e1a073d2e08b594b85e2ddaa"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","2022644ad5cf6e11c7d3f8c6fc8b5aff"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","0ac8b63b9aa4d93af44a47225e7011a1"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","201cb38f4abf6fa22cc7519c08fce21a"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","778cce14c5ec5b271ee43a2d8c6c03f4"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","4d294aba6cc86e6a3c65b9e079131266"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","993665bdfca87d167e72f19007d3745d"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","ca493f07362434e8952eb6289e69a174"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","475d8ff636671e4aebaa0511df7d1ca8"],["/404.html","6fe0337ae4d7422dd877229c4d966307"],["/about/index.html","d707fcb3240b1f351ddb5f08a42cda07"],["/air-conditioner/index.html","ff5a849dbbb997625704d60e7d4c8905"],["/archives/2022/05/index.html","03872d93627b4b4b8d582c84b78681e2"],["/archives/2022/06/index.html","c2f2afbe31c2d39348894f767555bfed"],["/archives/2022/06/page/2/index.html","df1852e1915730bf2283feffdaab0a12"],["/archives/2022/06/page/3/index.html","33e434c86589137128751d307787fb8d"],["/archives/2022/07/index.html","452698c6f2fc7efbb1688ac4571538c2"],["/archives/2022/08/index.html","c64ebd2ba89d5af930558de9553a88c7"],["/archives/2022/09/index.html","0a5d7a1f8033ade278d94bccb77a14bb"],["/archives/2022/10/index.html","f619496705dcd4e8775e4c4f77a82584"],["/archives/2022/11/index.html","0e4045199dac59ec267f6fc77ad2a912"],["/archives/2022/12/index.html","f33802e3b7e216f5973c379bfcaf13d7"],["/archives/2022/index.html","b1846d5c8e9e4974f276c4cd4d29be0f"],["/archives/2022/page/2/index.html","891467d553b00f51dfd8f90f5e2c68f3"],["/archives/2022/page/3/index.html","faa17dc30b2082c065384f795f047f75"],["/archives/2022/page/4/index.html","be0ab3c1aa7fad79a9b380fff3f4c2bf"],["/archives/2022/page/5/index.html","413314029b6b382c2d6f5ceaa089bd91"],["/archives/2022/page/6/index.html","b89db354beeb576ba734aa65784aaba4"],["/archives/2022/page/7/index.html","eea8b5630301e24cb6f1a0213b481238"],["/archives/2022/page/8/index.html","0ce974d5532be071bfdf70a479af47f8"],["/archives/2023/01/index.html","a13f0aeaf2ccbedef1c2f5bf6a985b14"],["/archives/2023/index.html","c45e1b81b1a731a7580f23bbe3cd606c"],["/archives/index.html","c3e1b6a4b223f65be9a712f845112318"],["/archives/page/2/index.html","aff2bab690d38aedcfeb83694157f0c7"],["/archives/page/3/index.html","49b710accca1f2ccc80adb38326677a7"],["/archives/page/4/index.html","2548a6e6acb2497e4ffe4921a80a38a4"],["/archives/page/5/index.html","5407151a23b5a6dcc4fc1f1fa783fc86"],["/archives/page/6/index.html","8181d3d9eedb2c4555d049c5a4849e0b"],["/archives/page/7/index.html","68b5f1dcb78060bbf38ba346602da76c"],["/archives/page/8/index.html","ba21b4b202bd2563956b24cc364216f7"],["/bangumis/index.html","c2b4543086a5797209f30c54a9a2aebe"],["/categories/FrontEnd/index.html","25fc0eaa1643b514ac580c3f8f4c2d3d"],["/categories/FrontEnd/page/2/index.html","f75f0f5c3665c5b77f9b6b87ed0feff7"],["/categories/FrontEnd/page/3/index.html","7ab74e6597e5639853940ff39ce3674f"],["/categories/FrontEnd/page/4/index.html","ff34092d91e2a236a28293107f745bbf"],["/categories/FrontEnd/page/5/index.html","12e54f4e06797aaf43045609fd9bbb67"],["/categories/FrontEnd/page/6/index.html","40cfe30f337c40c3e9bc804e4addf3f3"],["/categories/Git/index.html","0477c57dcc0ded0e7dafce3e55db1007"],["/categories/Hexo/index.html","3c7dbfe6d3c156832628f963895f6ca3"],["/categories/Linux/index.html","8408ca81f8f0f85dd9ec982dcadbc8e0"],["/categories/Nginx/index.html","057781b03b9c924630b237fd2b60c0d1"],["/categories/index.html","5eda67efb1da1765df5b8db97128a17f"],["/categories/插件工具/index.html","e820d13997469a18170c9991f2cc3000"],["/categories/移动端/index.html","cbb4aab95c0b769c671b1e201bc42d23"],["/collect/index.html","d10a795c5afc2cdd1e1879b2e821a8b0"],["/comments/index.html","937bbeeb89850afeef849509d9e02d78"],["/css/biliBg/autumn/autumn.css","3f979b5ca6999577a6e8d401ef7aeb62"],["/css/biliBg/spring/spring.css","b5f823aadc097676f31423715aba83b7"],["/css/biliBg/winter/winter.css","1c23df35688bdc11af2a4a6455d6a3c3"],["/css/commentBarrage.css","f6840d53a3a625558feaa62b494679d2"],["/css/customer_butterfly.css","f41cb074e6bfacc27a98647b363e0774"],["/css/customer_style.css","ee7710b0702a2ba809311614f05d1a63"],["/css/essay_page.css","141935d0db445140e4a0d415cf1f3741"],["/css/iconfont.css","368a4fe4968cd0f37d5ee1b804198cf1"],["/css/index.css","0aeb3b8373259a87b183050d1652857c"],["/css/lantern.css","ef8a6bd8185ff78a09539013e9e7eed8"],["/css/loading.css","c312eb8c03a5bcf65456f98744866494"],["/css/nav_menu.css","391d91b79899aca7d4bed2c32133695c"],["/css/progress_bar.css","62ace3b5b5f7a5b163d9e586aa4c5397"],["/css/rightMenu.css","3409d1ad28b10b5025e51ac0a2d98166"],["/css/var.css","fffbdc733911b5d4675283b7e7d739a1"],["/essay/index.html","dacf86474fea2400027e650a270b3a86"],["/gallery/index.html","18b80cec305bdea3513ee0721d2931a6"],["/gallery/wallpaper/index.html","fd185cdfb2c01700537ec91ab3af7d2b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","9db2ae6567ed80ee47836ed6db1b6585"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","faad37be6cd7e0bbd6bb788d1cf4a335"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","efdc0a40bedd71b7f47c2d8a8d913927"],["/music/index.html","3c6dc734ebceec5d696f90435ec7a2aa"],["/page/2/index.html","d5fd2437573604b7010bc0675cca93a7"],["/page/3/index.html","ed4ca360f6d749a7c80dc1b0f88fefb1"],["/page/4/index.html","bc7795f68e567bcb57cc0cfa8f9483a8"],["/page/5/index.html","968d21a547347fa914b644a04cd93309"],["/page/6/index.html","70250fb9500c83acf7f4bd978f5d5ff0"],["/page/7/index.html","9a5cfdf78d1746553716024bddb614d7"],["/page/8/index.html","d64ec2fa42040a76377f2512e5f5df97"],["/sw-register.js","2e91a48bd751b2292d9b7fbb9d6e569e"],["/tags/CSS/index.html","1caee322cabaf2ae78f497c0fd201e06"],["/tags/Dart/index.html","16dfb87328eebdf4e2cf68229c0021cc"],["/tags/ElementUi/index.html","e5fe9e60f0c26a3e7c556e849526bd59"],["/tags/Flutter/index.html","af2240946d413dd02b0a202fd2c6eaa1"],["/tags/Git/index.html","58aac4ca6a05bd9f01ffedbabd0a7650"],["/tags/Hexo/index.html","b48b87a45d980ce66b5f5b1f76a351a7"],["/tags/Javascript/index.html","9b95bb469a7a803cb7fa0176bc56381c"],["/tags/Javascript/page/2/index.html","90744bd30952c80ab44eff4984545542"],["/tags/Linux/index.html","2b669567c80c3330a56c3309ade9d419"],["/tags/Nginx/index.html","b74ba610084329951c18682405257f3f"],["/tags/Node/index.html","00e85585f32971f2460157e17879b611"],["/tags/Scss/index.html","2be2c0cc2f3ac9f2973106cdf8d8b513"],["/tags/Vue/index.html","a88ab82223df91f29c29b164a2491e12"],["/tags/Vue/page/2/index.html","9325906c1cec075a167e8f5ca2772485"],["/tags/Vuepress/index.html","b0bc1199ad6f9832b95194d2c58054d7"],["/tags/Webstorm/index.html","5e148611bf8d2c0f8ac616d69e104ec4"],["/tags/Windows/index.html","26a979f35d516ab8943e2eb2f118c2e9"],["/tags/index.html","0660bf1e454638011049dd1aeda4994e"],["/tags/插件工具/index.html","ffc6112c34823fc5d28a351582418857"],["/tags/问题随录/index.html","fe58497384041ec63777048b9df0226e"],["/zhheo/random.js","11150a48ea9b2cffd2a3947c2f16bfb6"]];
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
