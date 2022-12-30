/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","e238f92eaeb01767558e82cebf8c1b7f"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","62aeabe0c161a3e9e4f6d39f0a29b07f"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","0eb697443d82efffb2020c66c3da4c4c"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","109a56f318633efdaadb7e95b60c1521"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","d2cbadd3c14c7dc2d8832485f3d0acbe"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","4aaea9a0c5bfc6373e51fb896c9ca874"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","bb0cc63e3e3c11e92ea5e56636dc0e95"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","cd5c742568774f40964351f972e51839"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","6c26edd3b6e0bfd2f6f1621b5b25bf4a"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","b75073dd5bdc76334859e807467850fa"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","b68b7dc33fd0ae313c9d8c4e8f9c1739"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","5f15fb3e72ff43ab4db8205f91a97b82"],["/2022/06/10/tools/webstorm/快捷键/index.html","7abb774b5fc163d4e087a87c961c1ca8"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","e019f3c11ebf71ae22b24a7068b4b6b8"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","298e382636f123340320f86bc053d797"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","7c63da87b52104d28a73567a15e067fb"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","917bc140681af4926d10a5dcfdc1d718"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","756be1ff7a12c993e9e7861998b782e7"],["/2022/06/17/vuepress/vuepress搭建/index.html","924cd8026c63c064a81d4acc7c8ff80f"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","f1746284aee0bd8794ab679a24436ed1"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","cb880e74bd53e057a84053b06c7ac1d3"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","c30bdc2d76aa83a75a2312451a1e0fcc"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","8a21904d845d775651cf7369a65e75bd"],["/2022/06/22/inductive/javascript/进制转换/index.html","1035fd9fc3a0fef0d13d24bc57a874ce"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","b187bb27f822f1d0820a46fc62ddd2b9"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","4282676e9ef41f147af89349ad757649"],["/2022/06/23/inductive/scss/Base-level rules/index.html","2cb24f62c5f568d038709da072eb3d45"],["/2022/06/23/inductive/scss/主题切换/index.html","9d317a5309ae986ca78c5ad26ddc0c27"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","f9ce26ece06b216930877179761b29aa"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","fd7a5b7815304272c4d8b0c411641219"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","2c20989a8caff90b69112d59508ca6d7"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","ddc14cc48c80e7a1e21600be61d6d700"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","50e0d479001596e7b1ac087a18cc96d9"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","7fa15ec0c522214f04972e24a3fc3e55"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","433e1cb8e4406a9c4025a1cdeb5e984f"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","beb694c0f6f53927ac6b3c4d3b10ff84"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","de6c05ddace54ab96a0bd2ef47e0893c"],["/2022/07/06/tools/nodejs/npkill/index.html","b13d68e2441d4593cc68711d5af09f99"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","950d52b5872e39d2d25416d71c38a3d0"],["/2022/07/07/learning/linux/常用命令/index.html","89c4aeadb94ad8aafa1d406ddf32cb4b"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","c5b9019d1bec7c3fdb7060beedfd55bc"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","3aec69e02ea21e05cc683f2db0506165"],["/2022/08/06/tools/nodejs/nrm/index.html","1cef4b3425f3aed96ae4c41e671a5a5e"],["/2022/08/06/tools/nodejs/nvm/index.html","93e290207b1070317308c37695e83089"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","5683546b5c941c24504fe6723571ddb5"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","496ac0d2e9ecdd5231aacf8b6481d3f2"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","9603fcdf39a55a654f80ebf1e0ba6987"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","a88fe2f58ca935ecba6db7b824943bfd"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","87ea4931b9591ad7768e902cb59ce685"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","519bb99e83391305a1061cf5ca6e9084"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","a4f2c3bc2d8e1ea4e50479b0eab367c6"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","761c0387141eeae5fd25a71e57af0ff6"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","ff838bcf95fa833ad0a1da81b9192b45"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","e38e96abd20a9f6b414aaf92e6b9b4c4"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","6cd08e1182da006eac8f94841c9e1d5d"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","21710daf3ff0d898428938f13bdde0c7"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","3ff18ffc198587fe215cc1c60b414ebf"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","b6e25d6b6fbf8d6b6bfa7383ae889846"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","f246f0f4b7a55c414d8e782865e7a0ad"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","f58b03dcf898bb4ca4104a4b6a6835a7"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","f0ffb5321b270843864a43dd1526f194"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","563bcc781c73be0101b8a0cd23f4c930"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","e2a12e88ba9eea09a5df9db07420a77e"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","ae3b20894e58ffd3c44914884eb595b1"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","4ddb9ee46dc6c9082946222603f5a81c"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","c089e112dcc479c90728d1348c963a9c"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","352a1a44da18a3230fe789869ddab4fe"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","0169d7ee6386ad372c7bf96b7393fbfb"],["/2022/12/26/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","bfd6c40ccdc8577fe5db7ce47ff0923e"],["/2022/12/26/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","b59ac543e0d7c230fed41b7b39e4e607"],["/2022/12/26/inductive/vue/vue打包优化分析插件/index.html","59ee0aa770dedd3e629e174264b570d3"],["/2022/12/26/learning/mobile/flutter/flutter-组件/index.html","d44ce20970f19f99145d2b754e59f0b9"],["/404.html","2a9c4b43d5ed0448aeb8530479a8dd96"],["/about/index.html","709291138d5d85fdca55458048a5ab35"],["/air-conditioner/index.html","d08036457f6b75d044174757a2e725bb"],["/archives/2022/05/index.html","f030e0b712b005da91339c7302e4d4aa"],["/archives/2022/06/index.html","bbf1a2cb14452ebbd3c7086f54e40c2f"],["/archives/2022/06/page/2/index.html","3892870449e4f0719e3d8641a47f9a1e"],["/archives/2022/06/page/3/index.html","1aa62c0fa5ebe2061ee2b2a837c5f253"],["/archives/2022/07/index.html","625ea96406cf47c953d7b0a886bb1d7a"],["/archives/2022/08/index.html","4d6bfc8e1d6b961b64fd82d49f35bb0b"],["/archives/2022/09/index.html","1dd2ccabb9e5c1a5431e32001385160e"],["/archives/2022/10/index.html","718410e73759477312f65b5bf1a25f8e"],["/archives/2022/11/index.html","4756d15b20492d92b72bcced713adc78"],["/archives/2022/12/index.html","8f0e8a3b3696e14463cf19b9ac4ac52e"],["/archives/2022/index.html","b2aa562d098f01dbbdd7b8e15c370c1f"],["/archives/2022/page/2/index.html","661d595a8d987cd1b51b58805530f7e5"],["/archives/2022/page/3/index.html","8ddf4b90c9506cbf17da56f104ae6685"],["/archives/2022/page/4/index.html","500db69f67dcc32d677cf78226d3281f"],["/archives/2022/page/5/index.html","766214c7edbdd1c185383afb78e883fe"],["/archives/2022/page/6/index.html","cc69343d6dea4d540d272d6bd9f040b8"],["/archives/2022/page/7/index.html","89e09a48c7dc418fba6f5368e2f2f8d4"],["/archives/2022/page/8/index.html","c228ad52cea2d576929429837b033366"],["/archives/index.html","f433aee0690c77c8c215d987e3e5ccda"],["/archives/page/2/index.html","381fcd0dde23bde5c7f699dc661202c1"],["/archives/page/3/index.html","58e8bbed217850c8733b6bf360835269"],["/archives/page/4/index.html","65de97609b32e0c79480e96006e86ab2"],["/archives/page/5/index.html","6f9479b4d19ac3a431b41a991381083c"],["/archives/page/6/index.html","10109693d7b2ed306dd53c65ed00aab8"],["/archives/page/7/index.html","b5e4ff6e797803dc093704f6946364fb"],["/archives/page/8/index.html","1f888f62a9f8baf34d28db0c0aa8d87c"],["/bangumis/index.html","cda8642bdb86814ae7eca2e6d990b209"],["/categories/FrontEnd/index.html","0b68053a12242bcd16cfaaa502f9d4ed"],["/categories/FrontEnd/page/2/index.html","034daef707e2593fe4608102ea11d6f5"],["/categories/FrontEnd/page/3/index.html","682e1657a472f1c9dee848996617d5e9"],["/categories/FrontEnd/page/4/index.html","4668934b8e12b80a6620d01f1ccabf37"],["/categories/FrontEnd/page/5/index.html","86ff2e8d32be68da5ac03cacc7b0f249"],["/categories/FrontEnd/page/6/index.html","620955f975eed5fdb0bfc3634ea1461f"],["/categories/Git/index.html","c6ccea8144ea9ea92bb998f2f8ab4146"],["/categories/Hexo/index.html","78c79416db6a7314c953bb560fe1c967"],["/categories/Linux/index.html","3ceb76f626f76ea8870834741b6bec27"],["/categories/Nginx/index.html","c9bd403f2e0c1417eeb3b25ecf692fa4"],["/categories/index.html","36673158c4672b728ce1281b7cf9c6be"],["/categories/插件工具/index.html","629f81c6beb5d22a842e78fd004ca291"],["/categories/移动端/index.html","d5aeff74fde5c3547e81bd8488eeeb6f"],["/collect/index.html","4a9d5c96707669695b069cb633b94098"],["/comments/index.html","28e90893db16cd634e61a818566f7abc"],["/css/biliBg/autumn/autumn.css","d610dbe0a9893813a98f4242d9627227"],["/css/biliBg/spring/spring.css","333c9e1b7a51aa03c65ae2fa6592e598"],["/css/biliBg/winter/winter.css","b997a8fd5a1374992b49afccc85b8d52"],["/css/customer_butterfly.css","bba4c620443c5f24e666122878c0c6f6"],["/css/customer_style.css","4fd021a938b7aa701f03ad923c25a354"],["/css/index.css","7c47bb1dfebd62ab3ca9dad2f7da9ad2"],["/css/loading.css","6b397be4d126a84a0e89952b277816a8"],["/css/nav_menu.css","b5c92cac276df8dc403cd8ff8f622df5"],["/css/progress_bar.css","ca6764820e9e2ad1818f4c9324888ee4"],["/css/rightMenu.css","42c5f56e83ca71a0a4fe978ef77c1dcd"],["/css/var.css","c0d2b816db9bb26017fd0fec035653d7"],["/gallery/index.html","c436f0cd2b08467195fc0c8b7e4942b7"],["/gallery/wallpaper/index.html","1d55526a9bb49b1e3de2955aa947c4db"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","a36937bc076ff083d7230cfdd9c18a9f"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","5d5f1f16f9e6c13b6fab1ee28a64f584"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d6679090acc9fac23a3058dacaba189e"],["/music/index.html","34b8e5f71d1bf6a5a66569d043a41a90"],["/page/2/index.html","d3d420801f5bcac09262316113b2a9d6"],["/page/3/index.html","841c48248c2a341c1d2723ce5645f17c"],["/page/4/index.html","d9ee1bc4db6f8d40c046807108653748"],["/page/5/index.html","faef5192e016cdfe3daf1bc12ebb6559"],["/page/6/index.html","d49c17aaae8b96aa0be69405284ce553"],["/page/7/index.html","c5179af76356e243cad0735eb8d9e7ed"],["/page/8/index.html","15ba9e7308dd48375a10952283904b24"],["/sw-register.js","3d6680ea6c87409244310b26ef3e5931"],["/tags/CSS/index.html","b39fd8dd78f8025e54b7f9d4e943ddad"],["/tags/Dart/index.html","6c9b4f0b78772c591052407eb4222e25"],["/tags/ElementUi/index.html","0999633e0913d12b04f7c60a666ceefe"],["/tags/Flutter/index.html","6967d11929566ed07888f44ee58577cc"],["/tags/Git/index.html","725882a5f7bcfe035206affcfe22fca8"],["/tags/Hexo/index.html","6665133113d4b26a37d24b833867eb5a"],["/tags/Javascript/index.html","1dddb1f19504dee9ee83b11a91d20051"],["/tags/Javascript/page/2/index.html","6015a55803b4120d0399b5a6a25c159c"],["/tags/Linux/index.html","05f2a7ccf8af588e5f6c89563f3c4d26"],["/tags/Nginx/index.html","fca01757147c924c4079e6e1b02854ca"],["/tags/Node/index.html","8246cf939d927fe6b78f3e90cde89e3c"],["/tags/Scss/index.html","836de8cb4c940daa9bfc3e08878abe8a"],["/tags/Vue/index.html","19537767db008112ea24c6b770b2a86a"],["/tags/Vue/page/2/index.html","680f2f39e516f37d22610f64a7910951"],["/tags/Vuepress/index.html","d39207da44845821f4b5326d9b184b2f"],["/tags/Webstorm/index.html","30149f15b6b486401bf1df61fdd1cd8b"],["/tags/Windows/index.html","5df169dcf40110813920ecacac9ff4e7"],["/tags/index.html","3bb284b176b9769ed8da3ba2d951f48c"],["/tags/插件工具/index.html","33fff6e8d0def7d5a7f46d7ce9669d0a"],["/tags/问题随录/index.html","0268a7b10769c9e5ae1acbb425be86ac"],["/zhheo/random.js","a382274c0ed159f0552e3dd9be08905f"]];
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
