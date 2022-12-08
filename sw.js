/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","d7a76b4f32b08c079c03196e0f30b9af"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","a6c75579ba9c7c59299c510d182cb274"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","72484fe63b230878c06f0bab11287bd3"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","11a9471200d5ed8650046c6c6da6b5c3"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","cf1358da108dc769d950ccdf694b4f5e"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","8ad1132e47495565be2ca3ce6d56975e"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","48f94edc981db2690569e105a6be8c92"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","584f5df40b941ed7140a2dc472ee47c8"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","338355409400d93200a33c8a9cceeb70"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","5440dcdfc7a0297e9fce8d70db732c31"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","06807bb3f557d332724586b0d0b6ce13"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","c43a6733944b58c6455898ba3bf37e5a"],["/2022/06/10/tools/webstorm/快捷键/index.html","e324db9890978498b0a8e9cb80b0562e"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","c5a1115844abf664681f1384cd6b4fa7"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","d9a0e20f7bcc592efe1c53886a38c15c"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","dbe4ec92aef1afc4f57884c63d02c14d"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","61e6ebaf5f064705469971817866d079"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","285f8298d6c785c09b8a835c9109e07b"],["/2022/06/17/vuepress/vuepress搭建/index.html","b71c23e642a42f41f546100c685cd800"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","182a06f6b03dd7f26210f4d45ea5448f"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","84c428f7d2465b4faf5a3adaf72ae2ba"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","42e0e424e79bedcae088968ce3cdbad6"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","4081a403447a882d3b107a5ac54eab0c"],["/2022/06/22/inductive/javascript/进制转换/index.html","5204ffcd144ea3b8eeb74d2500cc0f29"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","16478b18ccbacf0fc39787a41b96e266"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","9b5ad223485bd9bbc69f7d276d27376d"],["/2022/06/23/inductive/scss/Base-level rules/index.html","460dc17c3f8f0b5b3dd9242ace5e0b14"],["/2022/06/23/inductive/scss/主题切换/index.html","947ed45e4701e210ed63c257af09c585"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","ed0741edb8c8a1bb25ea6e1623738d89"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","84aac65697097fd688eabc0c30b10031"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","80dbe990657d6b05f8cd97b7e76415a6"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","2f04ffa051a4cc4e4cec416a5e854dd2"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","2f362d74fdf25e59d19daf362e2ceab9"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","6b2042b1ae74ba340b6cf795a5014e5f"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","2a65b73aa4304f07c8df594da39bad1c"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","c12db00dda27748a29a095a8b4c769a8"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","bcd4d069f5caec1fa34d60b129c41602"],["/2022/07/06/tools/nodejs/npkill/index.html","b35ea5a8a84de2e604e34f4476120888"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","236a9201ef21146d889158a7416ddac8"],["/2022/07/07/learning/linux/常用命令/index.html","fd272e9b62e94f88caa67bec4127d957"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","35bc73b3f5e18b7c0057fda965baf7c7"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","30600b03384db040b2082752725e8ac8"],["/2022/08/06/tools/nodejs/nrm/index.html","77b99fcf1b46e7897fdfe0a907427a23"],["/2022/08/06/tools/nodejs/nvm/index.html","ef7b86c3addc136376171d18058c1ef2"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","1ee754147da5c1f392e79b6c7a269fc1"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","2d1c31b4728dd70ec324e11f68bcb339"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","1bbd7ba0b14eeaee509dc8b23514c00e"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","82201268ecac98260f0d397f8c314d4b"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","16ea59d329a61015b66e19f578305704"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","bb6a48b50df992508bc27d8a31f0befc"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","feac39ae3717826d4c84d12212855e82"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","e26fde07709e4d75e15bb9ec99e9ced8"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","13f58fc2f51693acb15026b8a5f16982"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","a041452d16ddbb9ceea54c538b76eaf3"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","d63ccd73d2ba93cafc9aea909bcd83f0"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","68832db20297202c13272c189de95260"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","0f205da0448afb144ed7e296b2eb0322"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","a5eda03edecf6c56c3d3d518ca55f507"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","f04ed69d11c8c75a4e4bbe1678c00a0d"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","7f15daaef2e7ce3b3e3093ab54ade193"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","6dbcc943d4b5c46da9e61c3b088f1ec2"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","58fc0c24992159237c379ae891930812"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","634ec25a4f87845714e10bd2799c0b7b"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","ead2d26e457e1014d761cf5eebab74e2"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","7d2ec2979bc45fb652dd542c0ff4f52c"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","3b6d611f68e024f84897ef8a8fdc1841"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","cd0d8c0556e5069f4ce37da7fc9eb81d"],["/404.html","6ebcebbc54851a7090af79ed446dd205"],["/about/index.html","c327ed6d92dfdad4564915f0842af64f"],["/archives/2022/05/index.html","d7f0f5943cd93a0f67099334cf48e1c2"],["/archives/2022/06/index.html","6d224c0dfe2f1199467a2420e0b01bfa"],["/archives/2022/06/page/2/index.html","78d2a0522d82565c25d63e520396ea4c"],["/archives/2022/06/page/3/index.html","094c4e4bb6c9111b517e19fbb7db9c95"],["/archives/2022/07/index.html","73f704714a49c590df7e04ca8260ac06"],["/archives/2022/08/index.html","e8bedea4afd23d3e10ea556bce9ab021"],["/archives/2022/09/index.html","31012bbdd70fc4149d45adbe4f0bfdbe"],["/archives/2022/10/index.html","c68bf2c6327102544ee95dc056e12d13"],["/archives/2022/10/page/2/index.html","dc5ab81860caf024601a5bf08dce46be"],["/archives/2022/11/index.html","07a807aea6aedb6aa8bcccdf74f48f45"],["/archives/2022/index.html","7be24bdda8a7f3c0da042d220de765d3"],["/archives/2022/page/2/index.html","270a360b12471dc31e1ef2191297825a"],["/archives/2022/page/3/index.html","7842f772129ae2c31b518beff9068025"],["/archives/2022/page/4/index.html","ea9f6081c2e66bc812ce3f2b79c89230"],["/archives/2022/page/5/index.html","8e89105cb53078c54d1532ac9db30f1c"],["/archives/2022/page/6/index.html","485cc60ed584eefe0eeff8647ae4810f"],["/archives/2022/page/7/index.html","c968bc0a53fdd7d26098c25058f08bbc"],["/archives/index.html","55464198bac12113b484ef0522fdd485"],["/archives/page/2/index.html","f5de5269533edaedda22721fae78e9aa"],["/archives/page/3/index.html","f4bc6834c7d5889192ca1c684684b389"],["/archives/page/4/index.html","f0894a79cb7e8761fd7893f98443cbbc"],["/archives/page/5/index.html","41c148d40590da93e5293dbae5a0468c"],["/archives/page/6/index.html","74c95429c778c0b3d0a4e83dd9b9f338"],["/archives/page/7/index.html","ca94eca3687d520e0dbd3b90861a1260"],["/bangumis/index.html","f29edc56e18641f777b9eacb1ba11d20"],["/categories/FrontEnd/index.html","315051467df7e62f8848552681b36850"],["/categories/FrontEnd/page/2/index.html","ce4d2360d613207790a2f4f36cb957c3"],["/categories/FrontEnd/page/3/index.html","9147de1ea1285c75aed406acdd503376"],["/categories/FrontEnd/page/4/index.html","ba233558c97c6197ea9249d0ca2bcb24"],["/categories/FrontEnd/page/5/index.html","aa2bf90d338dc9b39f2d77c57061f5d0"],["/categories/FrontEnd/page/6/index.html","34ca85f8c43487993e5e3719f34d00bd"],["/categories/Git/index.html","a2478fa9880c432bf32936d8484832cb"],["/categories/Hexo/index.html","42e4c5b2ec6f0ddc565ab000c437d5a8"],["/categories/Linux/index.html","48c09a9017e9d8708554391a90d3ec2e"],["/categories/Nginx/index.html","473e7936e045a1f27f5847a4ff591e22"],["/categories/index.html","91c9c45e16403f262e443495b432283d"],["/categories/插件工具/index.html","fb8bb855f34461bc90bc00814d726f7c"],["/categories/移动端/index.html","826b86bf4b7ce294d35695dfa27ef9b9"],["/collect/index.html","2668c8ef91fece6bbd1cf43739b91b43"],["/comments/index.html","ded52d0a40ed8b96f30b769239821678"],["/css/customer_butterfly.css","f0d5e5723ca55197ae3eb6dcf852ffb0"],["/css/customer_style.css","239a2d528af0069a32af49d6e5f333f7"],["/css/index.css","1a64e5149fb42b09e90203310117602c"],["/css/loading.css","9b7b8b22bfbcc72c21d863792b326556"],["/css/nav_menu.css","8b4ede60a084876a3e01b95f12b2d83b"],["/css/progress_bar.css","963c8bd9e46fcdd6e567d5fabc9691ee"],["/css/rightMenu.css","95b31b7aaf70761a90a9398dec0572ba"],["/css/var.css","4f86a6f1beae7fa352c21b9af711239b"],["/gallery/index.html","ec9e641c56ee7e06b86f6fcec391c02a"],["/gallery/wallpaper/index.html","95ba7c5896f24745c11c9697d34e5e77"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","bd5ad25b20bd623d3e64eafdd505f50b"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","52ac3c3051cbbb4dd530a29b2bcf4315"],["/music/index.html","41f9f16c242c213f0a292607557a7ef6"],["/page/2/index.html","286be4876d362d57a81d121492ae456f"],["/page/3/index.html","46c7688ff06d25fcb507bace7b58f758"],["/page/4/index.html","c0673668d60268dfadceb1b05b41632b"],["/page/5/index.html","08a2ea9d8b3c8fa11025d7aab89d6a95"],["/page/6/index.html","25f3cb4801461b517073f22bdbf5c764"],["/page/7/index.html","739e2a84685c2137310ad148d801dd76"],["/sw-register.js","e9ce9d218f0e216143cd53573b1d7110"],["/tags/CSS/index.html","47d41241f94c53952ab4087d24c2fd3c"],["/tags/ElementUi/index.html","1d0292ef3024c3e23486e4e3dc870b4d"],["/tags/Flutter/index.html","f6b352f7e9c576694e527dcbbb94e47b"],["/tags/Git/index.html","32d9fa28b9ba6993a9617c783ac46be2"],["/tags/Hexo/index.html","270206c75bfd91605716e95cb4a32d0e"],["/tags/Javascript/index.html","220d9d1c8a54bba39be70f9b6f9c3c9a"],["/tags/Javascript/page/2/index.html","9ed0acf33e6354c7cb7094e6eb61054d"],["/tags/Linux/index.html","805b717f0bb36fdbefbd3b83ed7f95f5"],["/tags/Nginx/index.html","685248336e001a53ee5c74fdbe089199"],["/tags/Node/index.html","3a94b8081e1d14fa7c4f425c3bee2173"],["/tags/NodeJs/index.html","f1c0f264f63197d4a46257942a95e1be"],["/tags/Scss/index.html","fbda72e3a6ae509f2d78d6e4422589cd"],["/tags/Vue/index.html","0b75d9ec811ca89642a70ab428063109"],["/tags/Vue/page/2/index.html","0bd23cf4af2e25a9762066cc254be0f7"],["/tags/Vuepress/index.html","2d0f94212cf2f13f2a9e3eed08b8ee5e"],["/tags/Webstorm/index.html","775dd25172444d842d68635a09300d94"],["/tags/Windows/index.html","6053cb6b76e6b6de3fef773faa3c6c2d"],["/tags/index.html","86d21c3fdd77cb0d5c6dd0598da4199c"],["/tags/插件工具/index.html","1fc392975fb8c7b945c2641203267647"],["/tags/问题随录/index.html","43d24f4bfe718568649d92babc2371db"],["/zhheo/random.js","6032d9faef7dea89c282432afa776399"]];
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
