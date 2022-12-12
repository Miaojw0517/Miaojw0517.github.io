/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","a9c2677ae01c7f7ff84f51045d7eebe9"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","118d4fb92703b26bd1a0918c1be1aca9"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","71bff2b6438abbe957fdb536d92db9de"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","e06976b9481d4172141816c04124adb2"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","ad320a140f96662a635ca52dd8830acc"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","9735593112975c24e38b337d29cf9ae6"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","d1eaf15db83fad99c18dc143402eb85e"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","eaf0615a4054031dbc3188e7b50c4ee9"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","018b14793843b836a6120de98a9ce5f1"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","ea84d762235dacca158277651fedf5fc"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","36bde1a32985018c959132b261d31ed8"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","e7947e2d156c0efcb844a133bd898af4"],["/2022/06/10/tools/webstorm/快捷键/index.html","119cf2c7934a86f2664b3b5532c3bebe"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","24f64a710d0199aa6e0eec63e70540e4"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","9846a83865ba6974cd84441c68134784"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","634cb4dcdd4457b11e786e74658d6787"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","d5b574c0c5445cd645c4eb3cc13508de"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","1b2a25bc8dbb05882318f0a55635b6f4"],["/2022/06/17/vuepress/vuepress搭建/index.html","45e5e620cdce7268530ba623d0150b9d"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","f264b379f86ead6a9a9abecc80b9eac1"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","7f87b5a5b7d61e7de16c507b1db0a08b"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","7515e63a6dad766bc4f4216466a0597f"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","63a02fbdf83ad97c15f1c3e4e479e2cb"],["/2022/06/22/inductive/javascript/进制转换/index.html","f954f205ff2a15a748a166e211aee7ac"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","e1eab73434be1111913268b8346e3181"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","b417eb5cc98d5e9f0131928aab1f8818"],["/2022/06/23/inductive/scss/Base-level rules/index.html","0d1e257a0409884ba2f35e0db2433f3a"],["/2022/06/23/inductive/scss/主题切换/index.html","2b64f9b26be1ad462bffcc4de172ff4e"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","7f8951187886a775a1eae26ed4c7f401"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","6c51a188702e395ee58706754584b370"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","61cd0fa219e6d9d31d1c0b4fd6450786"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","f6c0c95fec84f2cd59860e22fbbdba60"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","d25d1ac38448cf89714651f754705b15"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","f5e70fd165d13bdc2250cd2fdb4ca39d"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","b15f02333f594a2463948c51a889bf8f"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","d86f56a715261b67e96b834035de529e"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","4869b10b9d5d45bd9770bb2808baab9c"],["/2022/07/06/tools/nodejs/npkill/index.html","7659d960a125821ddec03c3f01485357"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","0f50f66127f9c54d732d284900aa86c0"],["/2022/07/07/learning/linux/常用命令/index.html","59eee240400db9e69bd235a705714d0c"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","7182e250113fd80a4f310ccc52857b1f"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","0b5cf409ca6467a9f75809fcdea5f48d"],["/2022/08/06/tools/nodejs/nrm/index.html","ef913b686d04a53e009de370f259f2c7"],["/2022/08/06/tools/nodejs/nvm/index.html","8f3b397dfc3bb9dc46391b14f94c47ba"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","8dd17303e6aba1b2101d295257a4846c"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","40aca03c9baf8284072c77856f2944f5"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","460838c880fbd53a77b63744bdcaad2a"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","553c6e37151a33926668b619ba729b6a"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","61f01b2746e68fb9eb3a356dd4295ebc"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","ee4a66a7134cff20c6491d7c98169eba"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","989c9d4d198dac9dab42afee3246d922"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","54ec405c0508aa0aa32815bc3907e97c"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","5e285fdeae8ba284dd60d90a2d095470"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","94232a3c9b25ae35cfd6c6e08fa5188b"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","d9ecdfc56a1a6e7ec9227933426c64fe"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","2ff4d9f1f62f9a7e7a7156e6bdf5e37d"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","08f964f0dea08af27e20a0e9f17410d3"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","37cdc3fa441e44b91d971d7fb132ba06"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","209b5d9b2499f89f7a89eb8a540ec257"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","abc4dfd189444df3990f1e93d6aa30a0"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","dfa259b87b52853c1f7e07bd7bedad76"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","64e343bb294bc786fc10320821e55811"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","225218b38d2f12d834d0cd1211a987e6"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","c9d885626130b8f8b5b25f2e78161b11"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","0c332f2894bde56b7eea69fd3ca2f49b"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","c9903b60c6b484db513f2c7f7b2f628f"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","08885ead2dfd888da986053b2cf78273"],["/404.html","1266cf06a1c7cec5acceaf4049221bfd"],["/about/index.html","91c8cf2f077556d05f07af5aa6038a52"],["/air-conditioner/index.html","7a8dcd5ff973780f16fa60f30e9d7aa4"],["/archives/2022/05/index.html","ce0b4c82f2bdf8e6e0afe30ce6e1b585"],["/archives/2022/06/index.html","09f4999518d5eadb21dc419f49def576"],["/archives/2022/06/page/2/index.html","bcccd2d8a7e1d93b7f58bec6ae7d22e8"],["/archives/2022/06/page/3/index.html","499f93b6c9e38b7c09a01395f979b392"],["/archives/2022/07/index.html","e1427b341ee4413ef1c2222cdc06ffe1"],["/archives/2022/08/index.html","5fc02168419fac7723f1a994ce66343b"],["/archives/2022/09/index.html","15e044546d921376b4374f31e8f317a0"],["/archives/2022/10/index.html","40016b36e055ebc28191ea2495b0fc27"],["/archives/2022/10/page/2/index.html","325b516fe41b444a4f8ccc0c2691cbb2"],["/archives/2022/11/index.html","db32a9adcba8852f000661b5a8b0b48f"],["/archives/2022/index.html","ba4bc8358107cfeb58dce25a45878d25"],["/archives/2022/page/2/index.html","3d44e906bbfeadcecb3ecd3a71d43617"],["/archives/2022/page/3/index.html","914eb8c2c503bdd0416d75b95021fd53"],["/archives/2022/page/4/index.html","91bfa2a7c221a869f695e956c371c931"],["/archives/2022/page/5/index.html","7df0d4759acc0df4048858023354cbfe"],["/archives/2022/page/6/index.html","50e5ab0d8ddc8d54ec9d545edcd15986"],["/archives/2022/page/7/index.html","a97a23cf523066141b6b9158cfaa6967"],["/archives/index.html","f0fa41b2975404eacd63d71768ec599a"],["/archives/page/2/index.html","af2578f5d4a05584f8c3f949edba5f03"],["/archives/page/3/index.html","3581453bcacb727c2d31b8e625bbe30b"],["/archives/page/4/index.html","fd888128591afc91ff6b677d051198e4"],["/archives/page/5/index.html","a73a1e00e532fbdc57ced4eb5c738f71"],["/archives/page/6/index.html","08962c2dc7bb48d119ca0a1bd1294762"],["/archives/page/7/index.html","8764b509a8d2d4d80ebe49895b670b8a"],["/bangumis/index.html","89165097cbf2adae4206d3db10a4ab30"],["/categories/FrontEnd/index.html","8088bcf4f9541e0d6fb53af1c9a30458"],["/categories/FrontEnd/page/2/index.html","9e2a6657893c32d8459109aa36980d45"],["/categories/FrontEnd/page/3/index.html","9e99b48bfcdf028ceaaf34bbcd7abe80"],["/categories/FrontEnd/page/4/index.html","584803deea8b382cf7058f11a124046b"],["/categories/FrontEnd/page/5/index.html","78d49a8d17d21608122fc68c02bbcaad"],["/categories/FrontEnd/page/6/index.html","b4b137373a0352b3f929d136ffd46833"],["/categories/Git/index.html","389c5c2ff45d829a81b3ecf3ae215d23"],["/categories/Hexo/index.html","01b69d496182f01c69fb3edf7c890709"],["/categories/Linux/index.html","8d8f85da444acdc60ec58b4c5e467701"],["/categories/Nginx/index.html","b0bf216f95d0664a21161b825f33be40"],["/categories/index.html","5b82c808929578015f637489711a6589"],["/categories/插件工具/index.html","6c134442a4f9513421572a1912c3697f"],["/categories/移动端/index.html","822dab963cbfd91931d69150e50f3e09"],["/collect/index.html","0dcd728de40c65e75a0c0e468067bc56"],["/comments/index.html","bed55d1ed65082e0b3b02ba1d9f11d12"],["/css/customer_butterfly.css","12a26ad4dfc137a8d219b3d23c7f7a26"],["/css/customer_style.css","7d9d7a6a6eaa7bfee1802fa4bb2c646e"],["/css/index.css","95a83f4cdf9b6643d11479c15842d0cf"],["/css/loading.css","dc8272bb45cc94e404d31db2eb108262"],["/css/nav_menu.css","7f38485e88762ee8ac5c7ec223df5bcc"],["/css/progress_bar.css","2ac42579bbbe9ddb15b510723f6567fc"],["/css/rightMenu.css","23f1d33f436d1fac9026f5374959085e"],["/css/var.css","ff358853a48d4637a5dafe18fe363cc4"],["/gallery/index.html","497b98fe015044b23851a25372f90ad0"],["/gallery/wallpaper/index.html","d170cb9a4b0ae2218781ddd99425f6e0"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","3c323a1dd728be1cfd6e56c09e2bcd7e"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","f52d81b53f7f731107ae53e3325d3c65"],["/music/index.html","3f8ca529577e132f3dfd1bd10b266cd4"],["/page/2/index.html","89f9dee493dcf3d464680a684969c10b"],["/page/3/index.html","4dfa52019857ab4754ac35e01a4940b6"],["/page/4/index.html","9f935c47ff0237c207fcab0135b87e0a"],["/page/5/index.html","02dc2b37ab2a10e2ee7c043e81432e65"],["/page/6/index.html","07240a92713523bfe4d6230f2327133a"],["/page/7/index.html","48307e8e1cc410c5617e66db8ba1e684"],["/sw-register.js","c13aaf71ed1d39cb57c937efe214765f"],["/tags/CSS/index.html","4263eec6c9cde921ded57f42b11c96d0"],["/tags/ElementUi/index.html","1e10452870879a00968a1b2bcca868b6"],["/tags/Flutter/index.html","439a6eccc241885a8d2055b497e251eb"],["/tags/Git/index.html","29adf54ee7f7bc8f266b439e751063c7"],["/tags/Hexo/index.html","1862167ad4666805847d6ecd70575800"],["/tags/Javascript/index.html","02683f4f70258972dbe79da2bc472d85"],["/tags/Javascript/page/2/index.html","2813ad53fd911fa57dbfedfcf60ee9cc"],["/tags/Linux/index.html","31dae63a9a930e6c8505f623f9c117c8"],["/tags/Nginx/index.html","f3a722310d34477fe724654f4294d46a"],["/tags/Node/index.html","f7dd849e2ca6488bae453c39884f7f9c"],["/tags/NodeJs/index.html","8ead6aa2ae449ec12bbeb18ff7e65250"],["/tags/Scss/index.html","09196d72bc2a9a8454eb8f0b97ea47a7"],["/tags/Vue/index.html","7423f762edfc093851499d78f1e1f904"],["/tags/Vue/page/2/index.html","59993c24913ce7c6f4860f1bba76607b"],["/tags/Vuepress/index.html","7236d582fad799bf8f1fc82485d59d39"],["/tags/Webstorm/index.html","45ffd7c9b485e2c364acf9479c33d517"],["/tags/Windows/index.html","efc82f7b088b57689ba0539f996b0c52"],["/tags/index.html","0b89d7bd92346eef27d99e55611bccb0"],["/tags/插件工具/index.html","7273b6987e586358150636ab0e25a647"],["/tags/问题随录/index.html","32149ea926ce6cec36a212606ecdf9d0"],["/zhheo/random.js","6471b8079a43750dc3145bba1cd21516"]];
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
