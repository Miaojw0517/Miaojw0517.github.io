/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","d26cfa326bf1c679176292c898317ceb"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","4a17cfc6e18753f82f83fbb265f0ab05"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","4db2864925d003eba5c09c20e244a38a"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","c07fb7272afcb74f1f9da70e5b554e72"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","df23b128f4f65f0315fc4d8bf965b225"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","347a10b1c271b894be27247b6b743b36"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","6ace91e5b4948a36bddd98154daa0928"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","8a7a46df83f67e5f9fcec099d489e739"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","b09ad361ca9811cdd3f9b7c9355b06b9"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","c3acc40b48864744a4201d1abf750471"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","3357dd7cb1e806eac7668d3f5344ee8f"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","24eb03940ed8473a3af5e1aac40201ee"],["/2022/06/10/tools/webstorm/快捷键/index.html","0ec73b5544b916362222996b657897ab"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","bdfdc0e37fb74949856cb1687e6c7d04"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","34c8a94786c1557a92dcb6cf5d1fe688"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","a3c4893c3d999c9353f92410a0c948d3"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","3e653c2eca375918439580120fa9486f"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","ded9334ff260be7eef73bf2bc108a96b"],["/2022/06/17/vuepress/vuepress搭建/index.html","e1826e477cace4e4602899860762729c"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","dfa692f4252f04245582c9eadb653b4f"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","116c89a0c0641b08c2dd0fd1c1ff36da"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","3c96826654d79b597b994cf47b6bda86"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","aaa5aec91c90d65b3248a2b58676b80b"],["/2022/06/22/inductive/javascript/进制转换/index.html","1fff5fcce98b360241c01bf6357f1ad7"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","f6a49e8c6eeabd33f7ba0c0c34090010"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","deabfc716ce0f4ae75183199a72ed67b"],["/2022/06/23/inductive/scss/Base-level rules/index.html","25d1016eb81f9585c67211f77f8e4d1c"],["/2022/06/23/inductive/scss/主题切换/index.html","648faa94445afd8fc9f1baa601f0e79d"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","a5d8361432a955e115c7e29656fd7b33"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","15b124d83ac4a3ce9e2a93e86fcd8828"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","5b26108032be3b96963ffc9e872a5b70"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","ef718696924f5405ad1ada05136df18d"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","a2d9825acb758d593ade43024c6ce196"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","75ed1645be604f90e5f8f91c4a9d412c"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","4c13b9bd0a586715fffbb1767a5c561b"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","185aa8d5c61adb8c8ddbcbad075d01e4"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","97daba7279bf659a84c76e349d485706"],["/2022/07/06/tools/nodejs/npkill/index.html","610bd22dca54c378a9a4e1c7092d7223"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","949c8127f7a6f942f563d01fc58c0f72"],["/2022/07/07/learning/linux/常用命令/index.html","679f0efd57ee8957abf9cefac5078e95"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","4740a8078efc381f103600f0f090c977"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","a42b38446ff14535922555d962c996b8"],["/2022/08/06/tools/nodejs/nrm/index.html","d6294320808bff1b352630f352855335"],["/2022/08/06/tools/nodejs/nvm/index.html","4a5ee5097b392a8ad7ba3cfcae315ba0"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","0fbce9f83975c0e8c8707bf42da55c01"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","d386e0aaa9b72724e36d8f4ad6876ede"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","57b5f1d52940c7ef3858129ae60de575"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","202094babd3b6511fbf874e6655d784d"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","60f0b483b1dd3e44d1954ff00e4d786f"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","e53f1c4641f9e130a0a651f7bbe79d86"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","dbd5301fcfbb06a715bfc7a0cae86836"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","5ebefe76a8c04ef5f96f5560c1b70b84"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","7f5f3dc9314ec281335499daedce6a66"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","36cf5e0bf56dcac3ca995d80d49c1294"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","287e9a017ab9fdf6541acbf2498dd2e8"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","5c10f200f8a8b892fcd4af59906100a0"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","7b75a7e994883866e6b4e3c188503c2b"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","ab8f1914ba860250ebd6ec601f82e4b0"],["/2022/10/25/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","76b4dcf3b9a9ebee7713a21d9e2e88d6"],["/2022/10/25/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","f0f78c8db82cbf30c96dc3ab21a38d42"],["/2022/10/25/inductive/vue/vue打包优化分析插件/index.html","c5b427e10d96b5f426310c542bddf59b"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","cf2a02025938aa202ab90edd21a8e18b"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","d0e47bb7c45302fdff04876992f0962e"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","c5ce64855a07f2e1ecac118ca6281aaa"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","cb2293aac709341cb159502ec2a5e7d2"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","1a861f93f6649ce37a8dda5807fb9bb2"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","257a765ae3e11735ed63ebd5032043cc"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","791612666200ab077b7a7faad119f0c9"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","0d8f6dc393199827818b4e189ce65412"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","b50a6a9f9741405e844b8b88ad7efb32"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","cfaa786a5377e45548694a6a2d1bfb4b"],["/404.html","e6984e1d71850c74193e81f098207bc5"],["/about/index.html","4460e3ec4ddc990d29288d7beb7572ab"],["/air-conditioner/index.html","515dd8ca5db61d53eeb0fbb9e2aa143e"],["/archives/2022/05/index.html","84968c176459c61c38cd300e545a4729"],["/archives/2022/06/index.html","442b57cbffad52fc3367d110a99004e8"],["/archives/2022/06/page/2/index.html","2cbf64a7c673e551e83206cc4dbf1314"],["/archives/2022/06/page/3/index.html","a4d4c4cbd60933757cd6c75dbf911b08"],["/archives/2022/07/index.html","522c80a8b751137d64ca383581990d31"],["/archives/2022/08/index.html","9673f7f465ea8241d75973138b3d69c6"],["/archives/2022/09/index.html","4ebc71296b742a333bc2f3d37f512e40"],["/archives/2022/10/index.html","8824d8f943e6dd765a1f6644e9a64d54"],["/archives/2022/10/page/2/index.html","97a2818749e409b30b27c17ef01ca91b"],["/archives/2022/11/index.html","821630d36f34daa375022a5a20dd696a"],["/archives/2022/12/index.html","0cdcd310f9ad3e001ea963ab0f2758d1"],["/archives/2022/index.html","812494f40b8ed65594913b3c3b5ede7c"],["/archives/2022/page/2/index.html","73116031a686c90199034d615cb4d327"],["/archives/2022/page/3/index.html","ea8cf01af782bb3e5c7e72cea6a4249b"],["/archives/2022/page/4/index.html","07e0aa01970eb1781374dc0f12cc3068"],["/archives/2022/page/5/index.html","c6f261caf18e9737a4eab5970cc3ba44"],["/archives/2022/page/6/index.html","7029260553b7a00045592cf2428d3794"],["/archives/2022/page/7/index.html","f4bffc68743d6c6ab73b23fc82ee1f77"],["/archives/2022/page/8/index.html","f2d8fb4bada7bcb4f41ec3cc0abdc02e"],["/archives/index.html","e89ddeaa1745fd34ea0de8ae61ae6899"],["/archives/page/2/index.html","b91fbe720ecfeabe6e679a944c6a7aa3"],["/archives/page/3/index.html","99009edef108e82720505cf9e3abc65b"],["/archives/page/4/index.html","406b396745fe3a7908c1a0342b75ec57"],["/archives/page/5/index.html","66e0fffc21e6cfb2ffc1f0c9d0ff94f1"],["/archives/page/6/index.html","617b49ab632c219e8dc5ec4d672505ec"],["/archives/page/7/index.html","41567ac38d170e391ee6ed7f348f680b"],["/archives/page/8/index.html","b8d686e63839ea337074f87ccbc446be"],["/bangumis/index.html","69eb7a384727cbd96b962408be81a523"],["/categories/FrontEnd/index.html","442d26edb86e51d90d53329b50f50777"],["/categories/FrontEnd/page/2/index.html","7f6390e7c45bd2190c111ba86e645e17"],["/categories/FrontEnd/page/3/index.html","1282ccec0faff19bf9c9711f78a69b5b"],["/categories/FrontEnd/page/4/index.html","93f4f3dcda25b9630a555494d9927cc4"],["/categories/FrontEnd/page/5/index.html","b75e3bfe3d671bfddcaab4b78300181e"],["/categories/FrontEnd/page/6/index.html","95a01ec699eaf68cdd59c6f4aaf51dff"],["/categories/Git/index.html","04cf5e930257bef564b87f1e574d547d"],["/categories/Hexo/index.html","6d6517e28844ae118e50a1905dcb1292"],["/categories/Linux/index.html","cf35fba1f6c94e3492cb4ee1fee4a0f1"],["/categories/Nginx/index.html","4f7a01067f04968f16c0ab3262ce1a84"],["/categories/index.html","ab32101e16cbcfa17bec934dd30a3577"],["/categories/插件工具/index.html","033817c21c714791d66ee72a59e2bf10"],["/categories/移动端/index.html","ce9bbd45f4db24c252bcb1e6b3a9376d"],["/collect/index.html","126518b08c1325343a1b9f8d8a865ed6"],["/comments/index.html","d2916ff379af00033496d5e6694f0029"],["/css/biliBg/autumn/autumn.css","296368e8418224dae040ade25e85e5b8"],["/css/biliBg/spring/spring.css","7690dd3789d7fb9997d5426901e41391"],["/css/biliBg/winter/winter.css","3c567886d0f80789d0b033764b7e4a8e"],["/css/customer_butterfly.css","cc1bd23cc5f47fbdbf64ffc6a8656bb3"],["/css/customer_style.css","383967a48eef0537041986c26dd3e461"],["/css/index.css","547edc651731a66a0a42f2e7ecfc3b1a"],["/css/loading.css","59e179b3a4726dc817bde39267483e38"],["/css/nav_menu.css","c1d5e933df9988ad1a74aa436ff787eb"],["/css/progress_bar.css","386f0a40e56e0796ab1f3967588bce73"],["/css/rightMenu.css","f9bac2baa352c39a99a640da1dceb5e7"],["/css/var.css","7797d1b4627b9ccbe7aea1e7c1bfe111"],["/gallery/index.html","977d9e0a250f0fb8e21707d0afbf8327"],["/gallery/wallpaper/index.html","c1f8ec53b3562b9cb3fdfc3795d58e0c"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","0ec1ec64f4d6f5b434592bfb31425b7e"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","5d5f1f16f9e6c13b6fab1ee28a64f584"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8d14765841991afe6543b50de8ecd952"],["/music/index.html","2885fa124d51778bd0d5315823725554"],["/page/2/index.html","c87eb7c7a2154d67b743e749af0063df"],["/page/3/index.html","4c33742d584bf61984321572088caaf9"],["/page/4/index.html","4e634e3d2e77c1bf070abf0b7768ba50"],["/page/5/index.html","9f8d69806c2897050f73decaf37d6cfd"],["/page/6/index.html","9c40c554f51bf32cd16c03a40ee64d6f"],["/page/7/index.html","83e9fd6b2bf63f037a9cad668125ac84"],["/page/8/index.html","a9c69cd8aebb0a5403d33ab319fc6688"],["/sw-register.js","e8cb4620dad3f22a55c98a807181c548"],["/tags/CSS/index.html","2123f6d2edead744a7b0ca41f3202c94"],["/tags/Dart/index.html","ad2173d36ecc911ade60c53ff0288011"],["/tags/ElementUi/index.html","a9341e1d7d6dd1c29f62b1eccd74cb9f"],["/tags/Flutter/index.html","7c3b1bb72b0d0ae068659327e21b1ec0"],["/tags/Git/index.html","30710ca3c596848262690b1e1948ce1e"],["/tags/Hexo/index.html","d1cb98dae704e35a5744a31187c4d1e3"],["/tags/Javascript/index.html","4afa414b0defb47a9fe896cf601872dc"],["/tags/Javascript/page/2/index.html","ffddecb01aa613b55508e81a886815ca"],["/tags/Linux/index.html","23d48731910d7a2ce2d1cab813cc987c"],["/tags/Nginx/index.html","6995a1714b018ae797c7fb6ee59734cf"],["/tags/Node/index.html","d8c989c21778551c907754936fbfdd2a"],["/tags/Scss/index.html","990a4f39810564c5a1156164484a52a0"],["/tags/Vue/index.html","0bb21a6f9c09d21539664c5b66a65e1a"],["/tags/Vue/page/2/index.html","a90b948bcf371e05963f12e3210cd89b"],["/tags/Vuepress/index.html","76185e77eba89b9a44bb39eeceadf8d4"],["/tags/Webstorm/index.html","2bc13ee329a260457ba199cebb1b57a8"],["/tags/Windows/index.html","583fffedbab5efa854171c180ba356bb"],["/tags/index.html","b57e46c5aa25270e8086236ae257d480"],["/tags/插件工具/index.html","9199e6f274320c81d80d8f1584883184"],["/tags/问题随录/index.html","92b6c9bfd0c3e9db932d2ae38a65ad44"],["/zhheo/random.js","0644fef893d47efe3cd4c111161d6afd"]];
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
