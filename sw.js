/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","26bd2a40ef600476adeca0a457087989"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","40a3236fd70edce2274cc9b7820d40fc"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","a7bb27b1e90ba0c9e5e9fc068b599346"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","a3d866cfe95acd4c29ff64099eade2aa"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","9fb3604f206d9b41c42ffbbc143f99fd"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","774e3cdb807cc7a4e4856c74fe1d99ff"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","48b5906690a1d009a8fbfbc1a46f4bb0"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","3697f2cc2d7650fc162107382814290f"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","2f0aba6472ae721f635824c8d3f14c2f"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","0272c07157551120e108e3a079ba90ad"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","ada8f936cbe65c657991fd9d3392a580"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","7a6f6a5f5ffb8824f24bcaa64533cccc"],["/2022/06/10/tools/webstorm/快捷键/index.html","716d95c82d51306e0a59d45c05b27a6d"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","f0a6b71382bab92621521f3b013b3954"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","6f927423821d86e4be259499bd335b96"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","1d7192cae9eaca03129bc791d1f9e3a2"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","0997979c81a5e595478af7e22a8d1bde"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","d4a4cc1da93e24e056684a5026bc7929"],["/2022/06/17/vuepress/vuepress搭建/index.html","0762350fdb0b9731ed64d5509d53a718"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","0a70091547f4e8fdb91cf1a941f47b3f"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","6a02ef75c6f453365e9bccfe78914157"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","009142538ff78aec9b259e5deea6cfa9"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","cb62cc6d649a1f31e6681b866a54e3eb"],["/2022/06/22/inductive/javascript/进制转换/index.html","87ce2bb4886d0dd49793dd611e612e39"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","cf7e21d64d2c9a452b3fd1866d11f1b7"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","7ce14190b45cb457bf11644c3e3ba045"],["/2022/06/23/inductive/scss/Base-level rules/index.html","5a74079e9808ebc4c195a9dea6b6da4a"],["/2022/06/23/inductive/scss/主题切换/index.html","a1db172845435d3554adfee156f9a2cc"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","59fd2e5390958372228b2105d5654767"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","f139a45e8df7380f68379987d26c3c1a"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","264bec825fbf07c3bc12a5ea8c311cc4"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","11a6744556cc6f6087af7c4f9df3ac82"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","498b4f902b4d232ba740c9638359bfb4"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","a9779f4cd4fba0bb2fc9df1726aec42f"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","348951a1c6c5e6979928599bfb5e9f61"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","6723c8875c5a6caa53a3486c2176468a"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","4a2a235fac5ee1d5cbd813846b6a828b"],["/2022/07/06/tools/nodejs/npkill/index.html","88dd3759b15c8a445f5fea2dc0f1281f"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","4a8491f98e97c2d44ff552f5430a48a8"],["/2022/07/07/learning/linux/常用命令/index.html","ca2319a64eac31352c0ef9033adef437"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","8da7d08118c7d8521b41d18f9ce593d4"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","8fa5a142d520d433d1bb68259b380a04"],["/2022/08/06/tools/nodejs/nrm/index.html","b29abec44b2a4844cdd788fcc0b4e601"],["/2022/08/06/tools/nodejs/nvm/index.html","79d59814db6756fe23641cff79a09e1c"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","ad94efa6f330d138272d92ba74288b6a"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","2c3571755919525f5b7f2aae8e00048a"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","0912dd57a8aa2c63e16315b53a578acb"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","97108af7cf26527c5b96fd311c42d872"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","bed45eb41cb21cd3455106347bfc179e"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","c062c70f65062c321fc1587ecad222fa"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","923aae2a879e8e3e6cefbfbdf23ff65c"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","b48a00f31ac72c3fa49b91b004a4a7d7"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","2479e57c689715e867e770b4739b1228"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","c2880055c552888a65b009fa54ec6a26"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","d0adeddd218066964f5253247b5e37b6"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","cb5ccafc59cf0fa92a1de57debc09d78"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","77b8a183e25965a9f80d919e3c874038"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","45653719513dbb74c2fec12924108c92"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/browserslistrc浏览器和nodejs版本控制插件/index.html","ab6e68693758377b26fb4ba6c737e0b4"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue-cli3开启Gzip文件压缩/index.html","82274fc668cda65a1f5a4541103aaa3e"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue打包优化分析插件/index.html","e301ff8c99352c1a5f406f2a701ef1e6"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","d1d9ec4e182508d3a96b511354ec1d32"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","bbfa972a20bcb8d323d5e4803aa47a35"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","0ae98dfa3af39e1b0b8e990b30d280dd"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","ca3692b1bfb78d72baa9be588bf39ac9"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","088f1ee6c679715d38814b944853d8cb"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","1938d7b55be430b9001bf2cd28b49336"],["/404.html","3ce6cf1755aef579eb2ce04b87b5a685"],["/about/index.html","e4ecbe2878acb84d2c26e968dfc8e46a"],["/archives/2022/05/index.html","a7a7bb15a744cee41092ac6ed5364cdf"],["/archives/2022/06/index.html","5d95aaf37d5e564f4ad4dfe90be247eb"],["/archives/2022/06/page/2/index.html","2d0bb8a30885d1c780b86a37c973fd00"],["/archives/2022/06/page/3/index.html","230a54c5f2c4e8b821be3fb8c2a541fd"],["/archives/2022/07/index.html","02b1982158f30001a9ad0b0d8f315516"],["/archives/2022/08/index.html","72854ce01e1c9921564404ad517cc069"],["/archives/2022/09/index.html","012738afa6e0fba4e8d4d6352e0a181a"],["/archives/2022/10/index.html","b5a8a95fce48d73af95aa6ee7ea16c58"],["/archives/2022/10/page/2/index.html","d8e8772b794701e8f8a57e58062a0fb1"],["/archives/2022/11/index.html","34d6ea9589c8cbd352d8783e328ede67"],["/archives/2022/index.html","3e729f0daf1073b66ded1172825a5455"],["/archives/2022/page/2/index.html","664785a28cd2b21fe433045e330f47f8"],["/archives/2022/page/3/index.html","7000406e7734dfe3c9e03a14919a1ea0"],["/archives/2022/page/4/index.html","280792815f616a2a27a3327e6d070c5d"],["/archives/2022/page/5/index.html","3d84bef2cb90d1fdd06cf776ce4a7912"],["/archives/2022/page/6/index.html","89a6bc1ea7a46ef76d3d0b2ae95dbd43"],["/archives/2022/page/7/index.html","ae84ad42902a364fd6a9ee9c7ca0fade"],["/archives/index.html","b45718f5865418ae2c30e822ecff18e0"],["/archives/page/2/index.html","30fe09c5d91e232c82cc8e154089dac1"],["/archives/page/3/index.html","77da86b28bcd3dfac310b2039b7cc64f"],["/archives/page/4/index.html","418a8984599a72d71bba15afe6991f94"],["/archives/page/5/index.html","c026d2de0fda6ee01e0e5ca592a02120"],["/archives/page/6/index.html","58db8b3fee47b1a84ea7b56accb79ecf"],["/archives/page/7/index.html","c87451b185a210aa90fce11e8542b67a"],["/bangumis/index.html","34e25b56371d23cea0d76bbe16f728ec"],["/categories/FrontEnd/CSS/index.html","68eb39d657411a11d30b7785e2dea378"],["/categories/FrontEnd/ElementUi/index.html","e8aa8ae77b644948486e566c1280ed6f"],["/categories/FrontEnd/Javascript/index.html","a0915fb049b230f271ec74f161f03356"],["/categories/FrontEnd/Javascript/page/2/index.html","f035311da736c2e1557d6ceff9f7d9a8"],["/categories/FrontEnd/Node/index.html","c07c68821027e0fce121af1aedebe5f5"],["/categories/FrontEnd/Scss/index.html","5f21df6d5ffa105067f3e1b9a66740a8"],["/categories/FrontEnd/Vue/index.html","a2871c37906a7b83e562025fca297fba"],["/categories/FrontEnd/Vue/page/2/index.html","1a7babd7a02c1d2f2ac85d8f609e2b8e"],["/categories/FrontEnd/Webpack/index.html","17403034987ca7be9f2d82efe98e9184"],["/categories/FrontEnd/index.html","c2073ece47a542ccbabfcd0826663eb6"],["/categories/FrontEnd/page/2/index.html","1275a3e84c2d24e71d285a4d00ca5894"],["/categories/FrontEnd/page/3/index.html","fe264ee7f4352df770be0df6b0dd033d"],["/categories/FrontEnd/page/4/index.html","5ef86dbea32d8921ad2d4d66bc4c621b"],["/categories/FrontEnd/page/5/index.html","3989446c5e264988d781e5d71fcd3040"],["/categories/FrontEnd/page/6/index.html","565dfdd830e5337c0bd3fffc1c054c96"],["/categories/Git/index.html","58296ce04da50f60849bc35d15a4fbc8"],["/categories/Hexo/index.html","ba24d13a1ce3bbfec3c31dc0818b2704"],["/categories/Linux/index.html","915d5fe7107b327cb5713e7956c58697"],["/categories/Nginx/index.html","6f5a20df41cc9194ad69956031d3c5ef"],["/categories/index.html","dde0a0b796c8bcb43b67cacb12f5ef7f"],["/categories/插件工具/index.html","e24e7be4a1c51de41b76c62ce0070164"],["/categories/移动端/index.html","231f14a69c441ebf0f4f0216519abd1b"],["/collect/index.html","61cf531fa7abf6070038af5ac052c61b"],["/comments/index.html","c9dadcc15d85d53f3e3fe7b1431191a8"],["/css/customer_butterfly.css","5204e3ff651bdee283b4f425e9da37db"],["/css/customer_style.css","c321b39d8ea7a2157ac8651bcbcc0f85"],["/css/index.css","2e3b29600d3ba55347b5d289d4109203"],["/css/loading.css","a70f8b878ed96f76944ea43dcf95b695"],["/css/nav_menu.css","e14b90dc4948085570d90034da38a5db"],["/css/rightMenu.css","63d313c9f6a40f7acc91cff340fc0b1e"],["/css/var.css","46c54a1cb78c0a3bbec18139aeb31e75"],["/gallery/index.html","10893b5d9994369acf30b947cdd93c98"],["/gallery/wallpaper/index.html","962b1de3df580e5aeacff97aa4717625"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","9cfdbeffe4949f76a17cd8594da21d44"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","44b4b40ee6489451aeb7770401eb30a0"],["/music/index.html","cdb434ca340eb5c546d77fd0bba6e6ff"],["/page/2/index.html","472a500c65aaf7781f8c76443ca924b5"],["/page/3/index.html","50385472ea37f55b05e9b443728f51a2"],["/page/4/index.html","b0e31c2f5ec8eefd64aca35d30ba6a19"],["/page/5/index.html","2a925aa33692e4541e609d83ecd486fe"],["/page/6/index.html","3d13f63670c885cf67518a1dffb2c433"],["/page/7/index.html","b55d01e40439d7dd852ca104da0c1055"],["/sw-register.js","b251f14e683357ead39fd6c904cbf994"],["/tags/CSS/index.html","cb42ff1a1825485e5b455f9a917849da"],["/tags/ElementUi/index.html","42df61f82207db5308f5592ca2f1e854"],["/tags/Flutter/index.html","0a73344509c622e6a9003866d178363f"],["/tags/Git/index.html","87a80973b1f676e4998514017e9b3c18"],["/tags/Hexo/index.html","69db84775f68af1569510d2215753eb4"],["/tags/Javascript/index.html","0dbbd129cb8afff7a4413df07ffcc1df"],["/tags/Javascript/page/2/index.html","490ea4e39034b3c4c2a1b1b706eff499"],["/tags/Linux/index.html","e657569aa7c5cf32057da5c72c20b4ab"],["/tags/Nginx/index.html","3135976a056c023756712fb42c80f25e"],["/tags/Node/index.html","af858e2fe97b8d2871b2112dbe728433"],["/tags/Scss/index.html","278f712147f94711bb6239dadeeddcd3"],["/tags/Vue/index.html","1a83181ec32adba8c12af10ee2dcf012"],["/tags/Vue/page/2/index.html","64ff14fcc47c305a7ed47621615c9d24"],["/tags/Vuepress/index.html","f9618e8e5c12c4fcf56be37a34907736"],["/tags/Webpack/index.html","a1263b266f204ebcd8a01ef1a9691d6c"],["/tags/Webstorm/index.html","e5020f8a09162acc18c8af96247529d7"],["/tags/Windows/index.html","659bef4bf248f4b035f78c2c10e0afbd"],["/tags/index.html","ea8cf88b901464fda2c1979fad408d3f"],["/tags/插件工具/index.html","89a93ea4ded2ed21fcfcbd04c818857a"],["/tags/问题随录/index.html","171e83b85005e72434a3c0c642eb2f41"],["/zhheo/random.js","c9f46463c5c052f27885502d093ecab8"]];
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
