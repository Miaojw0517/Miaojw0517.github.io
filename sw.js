/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","05ca75e09b33e20dba6ec3e70ed7a3c1"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","a9251c56576ff6bdf0b73eb70a3f1e10"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","ff2614d3c82912d30c170eb32a13a93f"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","7b6100324145512eb32d03a85427d121"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","87b46ac95409372bb4429d3f3090e1a5"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","fe8fcb26c307f23bb5d674116964d6aa"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","ed3cc4f2070f2ba3c3d5bd971659aa68"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","2943cb36e73b0732ca64bdb7f8553491"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","bf88389af35bbcc7c7a5e52e1577179e"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","d613095aeafde77de1bccc7fc66f872f"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","cdd81ff066ad4698ac20cda42946e628"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","1cdb8d702241f82757de26f577756385"],["/2022/06/10/tools/webstorm/快捷键/index.html","3dffdcc28dccb4a4bf4f90db58443899"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","36beb23c0d1fce743f6a6a7b8d0b6490"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","47478af5ba8d34404c9724dd66e369f8"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","db544aa7806c23f8d39008d9cbbfaca0"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","882dec73c8c1c4f5d6729d694077579e"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","351a42481f45d48624f0c6a792368bb4"],["/2022/06/17/vuepress/vuepress搭建/index.html","18800406062b1655ac709095ef21f8d7"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","de0c6751e8e2a04bf5176a4f3c7701cf"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","aa5821ec658e136c3398ad50a1577933"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","21b0b8c21d68b6ee85a7e209d630c368"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","be831fa2260623088d85edc24e1009d6"],["/2022/06/22/inductive/javascript/进制转换/index.html","d41dca6b954f717e135f954bb41b6182"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","337901b759771ad5eac35959a9e23590"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","ab3944a92845a7962e8d3e6371c2867c"],["/2022/06/23/inductive/scss/Base-level rules/index.html","550355395a5735d45eaf1cddefba553f"],["/2022/06/23/inductive/scss/主题切换/index.html","7b6b3d615d2c67af5a8a1db9f0978935"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","e928e24be532b320bbe2b63009b55b10"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","932bf18d21b0319352eb794caaab8080"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","beeb4a277577eb80fc40be3bd197084f"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","7c2f8b088f35265d8ef8e6524090df0b"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","53d8f0815cf5af121ad520e118b4c8f3"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","f39a7f996bd9c01431d21392c6401f36"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","15a6e074a0f2936664841acc4d36fc37"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","82716c9e81cc544cdea5ce6389a741ab"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","0951280bb956540cc7759a631ea65342"],["/2022/07/06/tools/nodejs/npkill/index.html","8b0aa7d55284967f4e4d74fd6cfbe1e4"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","4e2f27e16f38369546002f1b4400721d"],["/2022/07/07/learning/linux/常用命令/index.html","428b26dabe64205d839314b40b607008"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","c047b0c693296272af10ae0a3028096b"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","814a84b80ea7dcaa55fd55ffc5abfab7"],["/2022/08/06/tools/nodejs/nrm/index.html","4b983d1643e4013c10718d9f80def66a"],["/2022/08/06/tools/nodejs/nvm/index.html","13d4f4e9dc650e377ae0798f32169581"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","31171d451776b7dffcd7f54e8e47b678"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","2e75acf99ae70b20f42559e1784f49ef"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","636866b7f6abeecbe91e732659aa4aef"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","3c1190f4ae33dca4ff856f35c0080dfb"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","1ddd66e0622bff655dfd041e2730a060"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","46ce93ef422961a0414a214748d27fe9"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","f0d5aa050a257c6a87d3317761ebef4b"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","f42fd515713b4933807b73b8a7bac7c1"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","e7e87afae5d38b5675042ea64247aed9"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","40f54545c686a3f4b9311544deabc9b4"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","0af6b490f5965e00d7cb7fc27201f1b2"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","94b537749a09deb55f053a4f3431445e"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","9020cca32be90a59bd586c7718e96549"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","7727431de6b8ed37a0b5c1404ff34e3b"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","e1144581fb3c17c83e61e6a2fed5c960"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","ee89ef5e63b8d08354b81c10a19db72e"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","bec02a862eb63083c2a3ee79439b6520"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","902acf77329c90423cb08f071dad7a6d"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","68551f01c585f45da48dc67fccb87d39"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","991ebfd5993e23d08a335a56fbbf9c93"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","096c7ba4f2a384f458d1620e9f75cf38"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","e1bcd5f6ae075c87e2242472d9d9c737"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","2cc0b5ba2a92caa085033750343a2a42"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","2349fbd0a99c84a2cc4763ed05226007"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","68aeb9eca37595427adc3ff8730172ac"],["/2022/12/13/learning/mobile/flutter/flutter-入门/index.html","e5e9a4ffd381970785652408e2c76abd"],["/404.html","c85491f3674df2102020fae2b472527b"],["/about/index.html","1e4539494b78c0d74cdef7ed29fe0a7c"],["/air-conditioner/index.html","d8c1b47c948798266b7c0fc1a925f8bf"],["/archives/2022/05/index.html","fcba6255c4f66a531bc86f68d4844d72"],["/archives/2022/06/index.html","909a84a42276ea5e8e85dc8ad638fca8"],["/archives/2022/06/page/2/index.html","a7fa981bc91f74f27d5ec1d67a5d8aae"],["/archives/2022/06/page/3/index.html","e7fbe1e1fef84d36ae6b0252efb7a066"],["/archives/2022/07/index.html","60e81bbf1937b75030f40e8727f80aa5"],["/archives/2022/08/index.html","8cb8819dc49ccd779fa71c3cec35fa8d"],["/archives/2022/09/index.html","ebd91f963df39141e3f62231cc84a4d8"],["/archives/2022/10/index.html","cd5e3cec079e3d5c18ad1bd99fbb83f9"],["/archives/2022/10/page/2/index.html","fd43bd72f2303538331cc9ee7792b47a"],["/archives/2022/11/index.html","c3ecc237a7cb846036676e2a06000713"],["/archives/2022/12/index.html","b1b615ed2095273ea679feee467a1399"],["/archives/2022/index.html","016dc973d9551a6a63e7bdb95588b0b3"],["/archives/2022/page/2/index.html","6b0b1688232c113de67413f24a16069c"],["/archives/2022/page/3/index.html","6882f4331717976cb0729b37286a629d"],["/archives/2022/page/4/index.html","ad2fce518d1fe0705032c20501ab9951"],["/archives/2022/page/5/index.html","1e2e71aec3a9e0c622fc4d8b04367fe1"],["/archives/2022/page/6/index.html","48757788645e9163d92ada51b3a224a6"],["/archives/2022/page/7/index.html","3d3b90425ed5810b30c3adf4d563bbda"],["/archives/index.html","703d6593d6bf1f30a23b7fd1c67c8835"],["/archives/page/2/index.html","96e21cc00b0a6327efe4504456797f8a"],["/archives/page/3/index.html","f580c5bd16f0f823644948c05387cc06"],["/archives/page/4/index.html","2a660b3140f5d472198e09844cf3835c"],["/archives/page/5/index.html","295af0e4cb2c2dcbaab9af07e0b1d43f"],["/archives/page/6/index.html","fa705583e68b510e2194b604a75448c5"],["/archives/page/7/index.html","d6d867e48dfd33d9b7dda71763d6bce5"],["/bangumis/index.html","897ad22df14a2d72cadec0ab5cadf7f5"],["/categories/FrontEnd/index.html","9143ac4387ef38ae5f59c6ba6f07a3a7"],["/categories/FrontEnd/page/2/index.html","b7602e601ea053311b57c1d797d0efad"],["/categories/FrontEnd/page/3/index.html","a466052676db13ea62bda6c53666ade7"],["/categories/FrontEnd/page/4/index.html","493b2ea58fd603430359960c9a71a2e4"],["/categories/FrontEnd/page/5/index.html","eab6d8d81aac2c273a07061318bb5298"],["/categories/FrontEnd/page/6/index.html","775eb0b893792562a20da7dd8ead286f"],["/categories/Git/index.html","04b76f9d0c1c93479044b30403b5a21f"],["/categories/Hexo/index.html","362172cd709cd38f3d2ec5f74bb621d8"],["/categories/Linux/index.html","24d8a45771d6026a3904fbaa65e11b8f"],["/categories/Nginx/index.html","fa5cdbf6351343fa758c59586f27cf8a"],["/categories/index.html","ea7a6678142e588a475ce5479b090aa1"],["/categories/插件工具/index.html","5fa46e9b6352bb41494ce3103f16bb7b"],["/categories/移动端/index.html","3ea10596157f470a7e1402a3243ffbc7"],["/collect/index.html","20126506559a174da6cc5248a8b8737a"],["/comments/index.html","35ddd602b6c15c8ab0802c9ba113bb04"],["/css/customer_butterfly.css","8a080d103251e0ae9976764643670a02"],["/css/customer_style.css","180fd975a362a36601f2c6a8b7026806"],["/css/index.css","ed246a58d2e1ca53168c33c6cd802a14"],["/css/loading.css","ee2748d1d2adbc796a242ef4efa2c568"],["/css/nav_menu.css","06eed41a6d3b5680ddd6af3cb1edfe13"],["/css/progress_bar.css","c1efeb2dae1f4a9b2b43c578b81c21da"],["/css/rightMenu.css","9021c4c735003ad747d334f115546d41"],["/css/var.css","e5f81e84eb32e2d7c509ef9f50ef39ab"],["/gallery/index.html","a73cb08bd1d3f67754f2001d7ff8c53f"],["/gallery/wallpaper/index.html","465129106ff000ff5224dc0578a80cd3"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","3b75f23c957eda5e71c1793af8576a10"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","bed137c9ef2ac2095303e0b3f6fe532c"],["/music/index.html","f5992dc12c3f4eade69448845df62def"],["/page/2/index.html","7584284eefe5f70d30cde74949565bfc"],["/page/3/index.html","01fc6e99424499cc6717f7ed054010b9"],["/page/4/index.html","dae07d05da518ada8132d188b344a030"],["/page/5/index.html","8b61ce12e48fb2d4c13e7077cf79bfc7"],["/page/6/index.html","e5d2a823c3135433dd0f0babe48055fc"],["/page/7/index.html","cbc25e496b9410f6cf95467d8ee2119f"],["/sw-register.js","64a6896c514850c27b201ad96a594e56"],["/tags/CSS/index.html","0fbb8e47e9b5b74928081007fe5b3779"],["/tags/Dart/index.html","f1932d5f860107d1515ac5c7920f8cb9"],["/tags/ElementUi/index.html","d8e5184fc7d7de580360b831e1419d6b"],["/tags/Flutter/index.html","0755b952660596f80250d2d93f788ad8"],["/tags/Git/index.html","8d03c3f48f66869daa547f19e507c0ae"],["/tags/Hexo/index.html","be3540742513f0f0486418eb008d3066"],["/tags/Javascript/index.html","49f1719bb5b862ba8b40e0c500b8d7db"],["/tags/Javascript/page/2/index.html","c545832cf5488588fd0ef56709babb6d"],["/tags/Linux/index.html","66e76d6d32472445d21c70ca9292b217"],["/tags/Nginx/index.html","c38ca7e4c67b36d1874c80cbba0e6e0d"],["/tags/Node/index.html","5515954a82614b26d4f26fe909f30fac"],["/tags/NodeJs/index.html","b1de3799b24c4e901e7cc05d40ca1418"],["/tags/Scss/index.html","3c8096d97acc4ec00fa5f2f5203cbded"],["/tags/Vue/index.html","a8e2a276546efd7b6c7743a757499353"],["/tags/Vue/page/2/index.html","5c481975ba20a23fbc61d9e7af32504c"],["/tags/Vuepress/index.html","73d2b72252bef07dc73fb94a23cf3f3a"],["/tags/Webstorm/index.html","994e80f2b794fcdabbd659b4acc09bca"],["/tags/Windows/index.html","8ce4ffaafaf30776c9d98a09775e60bc"],["/tags/index.html","a6235b5da65297609225baf3701ad343"],["/tags/插件工具/index.html","e775f04e9c8885e7bf3e272834059f6a"],["/tags/问题随录/index.html","1773c3cc272d4abb86d69a1a8111f32f"],["/zhheo/random.js","21186fa325c2f0f650d3800d6833a753"]];
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
