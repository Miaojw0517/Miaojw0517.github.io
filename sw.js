/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","5a26e51f06005be3af4831f01797243e"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","e2b7b6df8452f14655d349084b9bb73b"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","0dab9b1ab6e6475f99c04715065059cc"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","edda6f95921415130a64777857eaf9e6"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","fb2d5f452c6d7b061cfa28957efc450a"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","964d758bc26f3fff7dd3886f7161f0bf"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","06887a5dfbcb85735a053aaa42097b16"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","d087ee0a9dcdbbc6c4eb98e90a44ad8d"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","a04a4588d9126e6796846f978a04dc23"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","7c54e77469b6a88499c3e8cf2b912fc8"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","ad34468810a486b6a4dcf800febfdfb9"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","f58e674b6b75b429a4783ba447c8f431"],["/2022/06/10/tools/webstorm/快捷键/index.html","21b42adeee00f9cc4e0e9fb1c493b7fd"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","b4c00e7c70eb222142085cdea5fb23b1"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","7ac7849396104daf30accfdb624ce1fc"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","64c4047a05c34ff1cbd31cc764c4d8d1"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","7f078b0384b7c41d2dde062c14415409"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","e6e2fb430dd46c8ac3e97ad8ea5df751"],["/2022/06/17/vuepress/vuepress搭建/index.html","97905f7c0ec0db06415a3032c2b8a6b4"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","3a332aea7e89af84c5d3096fcc46d22a"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","ccac8d957061c6756b8328c1f7a7c0ec"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","1a55b3cf54b96901eefa6151cd5e5a5b"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","a0bc3f1030a11395482f75f63088f458"],["/2022/06/22/inductive/javascript/进制转换/index.html","5633dff498d6de991771af70fc763751"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","b4a4706f9f619801b21bde7af3c55240"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","7ef976e3f4f8f676008e5a140ac865bc"],["/2022/06/23/inductive/scss/Base-level rules/index.html","093ae1be0b4b0e9c5af1c97070c0a376"],["/2022/06/23/inductive/scss/主题切换/index.html","eb80c1f143a8853ec7e1ca1b8d15020f"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","e31bf4d6a91db19090c1958a8dd7d9d3"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","06e80ba23b620cae4195ce9837c46546"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","e73d8850d2a865007724d7b753da1ee0"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","dce3d6d171bae02fa9b551bb99993913"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","f906e980c75e566cb40abf2ae61cefe8"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","77f5b0087872e40d9910a316a9fb9e76"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","2591f601d861389f73396519e887a1c2"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","63e2b7598ae70468266e2057bef1d718"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","0bdc7665823b9e6d9fddb7bc90d68f9f"],["/2022/07/06/tools/nodejs/npkill/index.html","0e51f33ada39c2256640761b5e5b1b33"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","bb1c4490d432a991a0a131389cae1f5f"],["/2022/07/07/learning/linux/常用命令/index.html","4e269bb0da8c43eef4e8a0873816616a"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","402deb0cde83b60cf84a5f509a3b05b6"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","45460aad50796ac84cc17c3bde6a11f4"],["/2022/08/06/tools/nodejs/nrm/index.html","da3e2a115bda7c573269b1694983c2c1"],["/2022/08/06/tools/nodejs/nvm/index.html","a4801e9e939bb629a48189e394f613a3"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","1a55fa6d91e57755655d183a61a0df12"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","f5f912fb083e9a18f61eaddd0c7d4684"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","0958733f994272fe8cd6341330f0c641"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","3d5130fde161bcb85cda1c126c67e4fc"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","84dc891fae881894e44ee4b7dff0c391"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","37b8336d88960000739c58f3ad779633"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","264a1f859e1a0ee0eb7e9c098caef6b0"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","243f6ed14c2b5300549eb829aac92feb"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","284bbe065a26fab0d7f931188673463a"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","b18342c8dc064a2e95d84beb22e58939"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","02a83251cc3ba76b18c50bbc357960d4"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","57e1917a0f4f2d3d8b4358056a8edc0b"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","108c469de75958ae435026a657fa4bb2"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","a47f3e461cadd1260818d3e5a7a0c26a"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","ac318649b55ffb5f9566502047d05d6b"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","6ca981048b17fe6c1ba2682c5d36a10d"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","0448a8208c32946ef0446cfd52e303ab"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","3fcf70a124c24afbfcfa858f1043a702"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","97c9098d7bd7e94bc04efb901ea8d4c9"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","84e2f3243c02224fe21c00a63764ba5d"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","aedd5cb442473ba03cee163b2ef4374f"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","022cd1ff211378801c4ecc7a3e8e0323"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","b2241caaa99ace9fd233e9333103ea6e"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","5d88448b3da584cb093ad73b26596a9d"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","858c3e39acbf1667d85061a350c39d28"],["/2022/12/13/learning/mobile/flutter/flutter-入门/index.html","9f31a75a6e1f4b3f21e4e0c3a90404ab"],["/404.html","aa9493e37d92c47e45d258d0e03a4672"],["/about/index.html","c663087572f42992b8bddc22b388fef4"],["/air-conditioner/index.html","df71003653e019ddc6c3d33bf3ea39ff"],["/archives/2022/05/index.html","7b915755e566a807f0d90161e65b6265"],["/archives/2022/06/index.html","ec955adaa1512c3a5d1608fc79dc7669"],["/archives/2022/06/page/2/index.html","e8ad38e9e4d2df02a4f2ad060954b8c3"],["/archives/2022/06/page/3/index.html","0332d5db8b7be8704bb5e509a0dcba15"],["/archives/2022/07/index.html","b46fe7e9b6acfa242095b2c918712215"],["/archives/2022/08/index.html","2ce120878375374f6b79a793b7704a71"],["/archives/2022/09/index.html","ff3a48bdebfa327b7d407ab793ab12a5"],["/archives/2022/10/index.html","15784f2556261770bb6db7cc106e44e9"],["/archives/2022/10/page/2/index.html","0e07527596fdad80cbb6f43016025af1"],["/archives/2022/11/index.html","b45bc3399b5436b2eefbf8459a9ec16a"],["/archives/2022/12/index.html","975400c36220493c2c6f463528636565"],["/archives/2022/index.html","12ee25dc5daf46fbb510aad112776fc9"],["/archives/2022/page/2/index.html","7770ff5cf343f99773b18bbff9e61354"],["/archives/2022/page/3/index.html","6bdc319220169d505ce925d3f011768a"],["/archives/2022/page/4/index.html","eb76df0444c3e798e6305e17216553f2"],["/archives/2022/page/5/index.html","fb7a9789d51a6921f1db833c44357c8a"],["/archives/2022/page/6/index.html","c3214e75dccbb68017e91dae4340f3bd"],["/archives/2022/page/7/index.html","5a918015c6c3ae17bcd257a28b946534"],["/archives/index.html","7dff401e76a2d9a4a7ab74d1df4955d8"],["/archives/page/2/index.html","48969ae0eda2ebc1919d83ad841fb67b"],["/archives/page/3/index.html","e548880218e3a14637590a1382835738"],["/archives/page/4/index.html","acfe2295df4c28b8ba20392c659034a8"],["/archives/page/5/index.html","ef8d970709237e752efdd3b5b2ec04ef"],["/archives/page/6/index.html","54f9af1a944abffef9af4dc1b2cbb427"],["/archives/page/7/index.html","0daf20c896dac8eb4b9877ce9f93490c"],["/bangumis/index.html","84a600902612cd5204b59d95525e32d8"],["/categories/FrontEnd/index.html","1205f1d5ba0fad8fca38aeb25216d383"],["/categories/FrontEnd/page/2/index.html","aae9448062ccf087753d580f7b2a8aa3"],["/categories/FrontEnd/page/3/index.html","988d656ada0e64032334af72b80df8b2"],["/categories/FrontEnd/page/4/index.html","4f7f1bea5f9df5abd51d3d9ab9d2374f"],["/categories/FrontEnd/page/5/index.html","508f86de585cac0e83f3f743b558c3b2"],["/categories/FrontEnd/page/6/index.html","adbc2de6c4f27ab11346ed69198b8ba8"],["/categories/Git/index.html","77d6169e1c1843877b48360e5b16b5c0"],["/categories/Hexo/index.html","a68c15b0f628b49a8cb02a6b0a88c868"],["/categories/Linux/index.html","958cddf9a9f14d2db609a18c8068a7cc"],["/categories/Nginx/index.html","bb5a9dee4a29375f3c127b24d5e96a5f"],["/categories/index.html","d8cf2c87f37db52dc1e3af335e25457a"],["/categories/插件工具/index.html","dbdc3cb53dca9f9216dd054f90b50c40"],["/categories/移动端/index.html","7ab33e45f2fd8c1eda9df20df939d85e"],["/collect/index.html","214e44ecb37dc83469039d45078e2270"],["/comments/index.html","78d88b02593067c16a18b7c824ddac65"],["/css/customer_butterfly.css","a5678b6890ddcc49a257f7474722d2da"],["/css/customer_style.css","3661f78e4d7260e5d332a70002addea5"],["/css/index.css","0971f7377ace74437943e731076ef610"],["/css/loading.css","59b7fb3d1be58a4033daa16a6dee7f8d"],["/css/nav_menu.css","8649626408f115cae6af2c366ca801f4"],["/css/progress_bar.css","eb96132f6a7541f4ed910f875af0a85f"],["/css/rightMenu.css","49c42cba86c6e2e4ad444302cd508b55"],["/css/var.css","39f27e4c997e8ecf6c65247927fd4729"],["/gallery/index.html","343b57d741ab983e81968ed064338a86"],["/gallery/wallpaper/index.html","9687453cf454b50736f7a0a7a3ff14e9"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","1f8f0eb6e403fe1e62b194895cdc70d0"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","0eb1dd0a0caae09b3f73b77f77412e0a"],["/music/index.html","e95e33183b930f9f011043fa254146b1"],["/page/2/index.html","6a48781c7d57da3fa8db66f0c7c9f545"],["/page/3/index.html","a06358ed4bce8c33a929ed33a0070dd9"],["/page/4/index.html","748fe36850f8ab9160efb1f22583392a"],["/page/5/index.html","796fcea8fc6fe971425bab4b6c2fd973"],["/page/6/index.html","8aaacf11b95da6f2dd16fb08f10dbe42"],["/page/7/index.html","d2114ef5c77d445dc8b6045f3930aa06"],["/sw-register.js","d90d6356e8409e27c63e778f9d0ea568"],["/tags/CSS/index.html","62c99012ff2706ad36d9a32a1d607ccf"],["/tags/Dart/index.html","dff6f7268399ccd91d09f89c18e38100"],["/tags/ElementUi/index.html","52103d76aed3895237bf9461200b2ccf"],["/tags/Flutter/index.html","509f586e9a88def5eed4cef8a76302b4"],["/tags/Git/index.html","194aff70a5cb11b6569fa09dc0355e49"],["/tags/Hexo/index.html","4d31efca3c2e4954af4d2add31fbd483"],["/tags/Javascript/index.html","461644da7de2557b8d8611cf999e0e1f"],["/tags/Javascript/page/2/index.html","10086e7fa827a9e6600421f8b68892fa"],["/tags/Linux/index.html","4c681bb4673bc6e0b1517459197fc966"],["/tags/Nginx/index.html","8854ee42229ea8f819727287ca2ed436"],["/tags/Node/index.html","74e584f6154d03ff41bde56fde80ecc0"],["/tags/NodeJs/index.html","e2596947ad3ca400fe3beb719c126ee3"],["/tags/Scss/index.html","1d07d18c8a43533951b1c70f9dffe5f0"],["/tags/Vue/index.html","9123978d05fbf72f8da332b32c4f6f5a"],["/tags/Vue/page/2/index.html","96b7ce47dc2b579da6c6b7fe4584eb8a"],["/tags/Vuepress/index.html","4c35f0b05f4c9509dda8419d2659a8f0"],["/tags/Webstorm/index.html","5391bf1fca157128704e12bc28501c4f"],["/tags/Windows/index.html","a3722b081e8bc69b1fcf5e481873e6e5"],["/tags/index.html","46c22b61d815369874d564e63f98b099"],["/tags/插件工具/index.html","8a3227cabdef8e238ad97c2ca99fb706"],["/tags/问题随录/index.html","f644384fffa66229280677913fb67324"],["/zhheo/random.js","562a699f5f08fe353d01970f980bc629"]];
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
