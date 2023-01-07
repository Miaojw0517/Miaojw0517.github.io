/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","072771f5976c596840ceb0596f7b2b73"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","f3d2c7e8a08446f2fca5c7aa621fe6a2"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","821751e7e3301ad65f3e1ebf92b87be0"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","82f6ba79e362bf273552505368c729de"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","31b862a55857089cfa738320c1834d97"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","ee288405fb04ba7130c93868eb346364"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","f7020bf220938db49803bb5b4c5702d0"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","69e84d610869126aff090eb541961737"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","9fb0739f486f745ef09aa65393425b5e"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","be49916f69592c328fad6d4c4f65a3ff"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","c14a80a8acae0b079a7fa3db219540cc"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","127f98579e897d278c63c6ec6cbe1ce9"],["/2022/06/10/tools/webstorm/快捷键/index.html","ff10c331605bd7ef62bc32a81419cee7"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","6978a3fdfaabe9f3f2ba4036d32dd1b5"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","b3c7bee421ba78348f6a34f0a445c063"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","f89f094e872acc8082503b34dd58ddfc"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","60eb75fbeb39c663fc1e138b455e5350"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","75a66c5758fddae5200511fceaca7187"],["/2022/06/17/vuepress/vuepress搭建/index.html","37c30af99f837df6e3fe2bfbc64dad11"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","b5747ac88bae2c386875850e402ad617"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","a976a9678ba0debac3f896b040de2153"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","bbd031436bc196ba49cb3df2ea72b24a"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","64ff94968fb6c08202bb53d596c283ab"],["/2022/06/22/inductive/javascript/进制转换/index.html","7d166560094c7feacfb516d1d2276fa5"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","9253a0eac1ba46add39c6341f2223742"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","8add3e9686f68cf65dda0ebbf20a722c"],["/2022/06/23/inductive/scss/Base-level rules/index.html","24ff0a2ebb387936bc188bde58f3de9a"],["/2022/06/23/inductive/scss/主题切换/index.html","6149903b0f9dc7cc3249fac1b7070819"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","286b7479657223d28913d3f592ed02cb"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","9159cad99da70be346de8c41a55f09fc"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","38ef065082fe7511505e093afb427833"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","481fcf4a37ac6d8a9890f00f314bc7b0"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","b0c6b2d688183480b9f2c80d2961d999"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","9df55e4bff4b072513ba6b062ad58535"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","9d9793f5d7ec463eb3cf12f13ed1bd7d"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","2df43012b539521acabff7d37b782b8d"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","cb72e6750547556002ede4294c906f5e"],["/2022/07/06/tools/nodejs/npkill/index.html","45f28f7ebde28178527510133e0d42db"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","49a26cba9fae213affbaa89148e7fb65"],["/2022/07/07/learning/linux/常用命令/index.html","f0047c36d2618c8cb58a0a6f9011b4d1"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","065cf3ca1caeb806af58b4516480eee5"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","8adea1bfbdaee746fefa8e3b75227443"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","2c694c8e8e92ada56af76e3485603fa5"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","76e769a397277ff948e31c4af2a8b0d5"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","2c6b20fa2a2575bcfb6212cda6e68419"],["/2022/08/06/tools/nodejs/nrm/index.html","059557ffc8727d1b8d4f00c17bdacef5"],["/2022/08/06/tools/nodejs/nvm/index.html","4646bcc5b29c0481663797bbaa4a4031"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","9660d47bdd8eb99c43121bcbb73f1677"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","13d7a476200589d425f9ea26add1489e"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","c8f28e612aae5f32be2245ab29d201ea"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","20464436d6f4020608946de3ba5c6fdb"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","c63d0f90e160f38475af1cf201d634e6"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","5ecc8777ec5828e59ad929da62240d23"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","a97d572b957b6402e2bfae484b5ad28a"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","58e624b627fd39ab73a676e70010fae4"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","f2bf13b1e41558f6532ccb0ce153291b"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","fc0aad30e3ea565831285b184638f2c7"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","17d8c554a908656de3660721289d69a5"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","c47096a211060a33dc827dc89e7ab275"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","b02df92f6650a5911c50111c3fd195e0"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","bfd706086878e0883908f1898f126b5b"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","59daaaa4819976ad821daebd80ca4592"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","e16f2849f07e759c48fc9ea4d7de6c9c"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","8f14b0532f9fff9ad671884ad9937c6c"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","2297369529c0798465abda08456b4772"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","5ac6b108d9181d2f428b98b6aad8a6cd"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","6857ea26d1bc4019dccb7faf2f9f69bc"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","b29403676e08b7249ae658f7d9fc40c7"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","356b42d61de67c6edb4b7fc5e4a0f01b"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","61b8cb5f85bff1bdf33b0778ece91582"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","04aa4ec8bd3171bdf852f8a914abaca8"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","fb83b651fd38328f2032572624303b4e"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","d94216120d831ff4b14f897073d3c881"],["/404.html","f6f06006d9553615504d60893bedd11e"],["/about/index.html","370e927744f68f6a757ec8a04f0d56ef"],["/air-conditioner/index.html","7f3227da300aca79d7a78a3d4622466a"],["/archives/2022/05/index.html","bf53edf9fa7ab767722e957aec79a3c4"],["/archives/2022/06/index.html","a6e52b5246f9939d1fb9bec5cb8541a2"],["/archives/2022/06/page/2/index.html","6b338d275c699fd15c7a989671249b38"],["/archives/2022/06/page/3/index.html","a1cc2bef3bef1ef6a8b2705ecde34b03"],["/archives/2022/07/index.html","4326bc191c0c8018d6a50784ab1d96d3"],["/archives/2022/08/index.html","a802318c6e1c1506b7cf1a7eb1d91adb"],["/archives/2022/09/index.html","11c175bc72ab1fe34c053faa7e9c067b"],["/archives/2022/10/index.html","baa57570899bce6a1bea7158a5340b00"],["/archives/2022/11/index.html","fa3128cb7748b55ffe7e597b02340e06"],["/archives/2022/12/index.html","fda41e2e446543ee0872b027ce725549"],["/archives/2022/index.html","66f165e268539223aff56e52a3e0a8c1"],["/archives/2022/page/2/index.html","c9d3b1db509143dc50b5b1b4e6bfc281"],["/archives/2022/page/3/index.html","25a94e91cc1d45ef5b22745bf950379f"],["/archives/2022/page/4/index.html","23207ced81127550af82074730fb1ec3"],["/archives/2022/page/5/index.html","6d545f12ea8cf1a4d70137cd8ea8ca5a"],["/archives/2022/page/6/index.html","dcb542a3eb98addc418bf1b3b5e942fe"],["/archives/2022/page/7/index.html","d2b62a540a1f2a50301f1b27e4436835"],["/archives/2022/page/8/index.html","4a9221c87ea05fef4f14e66b5eb5d000"],["/archives/2023/01/index.html","96e32b7974738ef4150a7fdb032cdd13"],["/archives/2023/index.html","5efba6e406bff73c629d52ae390dc57a"],["/archives/index.html","3c681ec21bed1e9f6bd528fb3f951ee8"],["/archives/page/2/index.html","1722b438683ac658511b96a1f7345443"],["/archives/page/3/index.html","2253ef764780879925ec0f8efae53922"],["/archives/page/4/index.html","307e2c8ad38307ecefc12c0bac5e0b95"],["/archives/page/5/index.html","358335f62bc9a03fe66834e3a02ddc53"],["/archives/page/6/index.html","955374397a5c247c4a397d65d78bbc25"],["/archives/page/7/index.html","4b19e462a9197b264b0245f6592ac35a"],["/archives/page/8/index.html","bd6983888f0a267732d187b64f5eb1fd"],["/bangumis/index.html","0fc3aa9962485e49d18060ba78bc7c9d"],["/categories/FrontEnd/index.html","b87bde496eeec09ac6ded424da8a632b"],["/categories/FrontEnd/page/2/index.html","6c90d73e5b1c79043e1abbbc80237e0a"],["/categories/FrontEnd/page/3/index.html","664195c8f43e181923ff4be54a2ffce6"],["/categories/FrontEnd/page/4/index.html","9b18d80b111825e8e0472fdfac0e3cac"],["/categories/FrontEnd/page/5/index.html","76daf8072867d8cc4fb3b88cecb8a2bd"],["/categories/FrontEnd/page/6/index.html","5f0389ddd93817f42370200fc376d9fa"],["/categories/Git/index.html","5aec80df6b41aedb66433e55bcec4df7"],["/categories/Hexo/index.html","020b768921a549c2a7c1a381687a7897"],["/categories/Linux/index.html","c435cd95facf0a78d00f231de83b1b96"],["/categories/Nginx/index.html","3423b3fa419f51c54a8577d0048a6172"],["/categories/index.html","61f41dc12adf5bb05c8b7bf647a26202"],["/categories/插件工具/index.html","4242a134e81fcb5c179f4ba3c0294bf8"],["/categories/移动端/index.html","10e96003a2d6f35331f637cb1c814d8e"],["/collect/index.html","a5e7aa4f645f54e4cc859bfc0297a0e6"],["/comments/index.html","5f82d10e99033f5fda899695163018b0"],["/css/biliBg/autumn/autumn.css","56f968fc5fb594abe976f586f1170ec3"],["/css/biliBg/spring/spring.css","244dc20f45c0783808f7d5b8c9f0637e"],["/css/biliBg/winter/winter.css","bf2a24c970c7fa1468441db604a51baf"],["/css/commentBarrage.css","415e4bb636217ff8c35969e6a8b62517"],["/css/customer_butterfly.css","479eb3d7bf4eec13db05129de07d0c27"],["/css/customer_style.css","1c366b2a1a9ede73daedc7df2a7d9b42"],["/css/essay_page.css","49cc7d7d02e126f0228f728125a57300"],["/css/iconfont.css","a29e4bf0d68e1d145edba3f3851e3ba1"],["/css/index.css","30e82432a0543c09e6b250ca8b61b4cb"],["/css/lantern.css","9ffde8ad156f2a2f8e9fceb52c892e35"],["/css/loading.css","820010035a360f4b3c8485864b007d13"],["/css/nav_menu.css","1bcc69a753f9b137451c80ade9e958ea"],["/css/progress_bar.css","5dd79a1a8e3b8fa6059a8a6fb5e4f264"],["/css/rightMenu.css","7a802d7c299115b886ab8e95f94c68b4"],["/css/var.css","ff7883a10ee31fd6234880ba81412ba4"],["/essay/index.html","820129b9f33510992d865cb2e9ff0d0b"],["/gallery/index.html","ec4daff29ac2f6ead5e92f283cecbe1f"],["/gallery/wallpaper/index.html","1d367ba1d53e234aa04305ffc690d4a0"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","30137d31eceb45a2bafc334f1f968e27"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","3e0d93c29bad2846aa8e5743b0243f1e"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","015abef60b90fd04ad751a9cbd008977"],["/music/index.html","c5d5826a31d335e7ff344f114e266e29"],["/page/2/index.html","e14b249f10ff59c576f2e23559e61fb5"],["/page/3/index.html","525b6aed26f234908f0ddafbfeb0675d"],["/page/4/index.html","ee9c1cb7a2e09bfd7923af72944ed244"],["/page/5/index.html","20fd83cc06721db961ebba1fc96cbe84"],["/page/6/index.html","1bfbcb2ecfb4456b5594c1169a68f437"],["/page/7/index.html","3424023d73001cc4b74ed99b107e4932"],["/page/8/index.html","9a97b5561d787a15da5a2ef62c66a780"],["/sw-register.js","d47680ed3b8a0cdc45297d53ea0829b1"],["/tags/CSS/index.html","b47cb2fb29e407016fcdb24cdb59d4b9"],["/tags/Dart/index.html","04b63c79b1ae26c5cfe737f59cc9cd1f"],["/tags/ElementUi/index.html","b8610251c4fb0fc8e820b821c8e606b7"],["/tags/Flutter/index.html","da96392942ef2357422df6996c0e9070"],["/tags/Git/index.html","fdda8fefac972be6e64c0018c9e44fcd"],["/tags/Hexo/index.html","7856e8caed949d2f0fd9e0c1a01c253e"],["/tags/Javascript/index.html","85bb416f41b9746e0ec7cbdc86bdaece"],["/tags/Javascript/page/2/index.html","7c765ba1c8a1d9459c12600b217f53c4"],["/tags/Linux/index.html","0a7ec762626fc696083806b1ba58b8c8"],["/tags/Nginx/index.html","add888b8159f370331bc753cbb3f9e8c"],["/tags/Node/index.html","6453e6cb3b49d17a046a81f187046811"],["/tags/Scss/index.html","185ea8da98c2720a5794433d7b3b425b"],["/tags/Vue/index.html","30fa92464574a93bb8aa682cf7b4b65e"],["/tags/Vue/page/2/index.html","cf72fbef4ebaf6ff313f485a25bfc58c"],["/tags/Vuepress/index.html","302c98fdd6a1397c00d51ce02d330a41"],["/tags/Webstorm/index.html","ee17475fa0032daba14a286e670ceab4"],["/tags/Windows/index.html","3c24aa1911b957b3e94a0dab7d8dae51"],["/tags/index.html","ab72d2ee9200432bf9cebaab86f1dc46"],["/tags/插件工具/index.html","401c1bd2139e832955e259dc623f7700"],["/tags/问题随录/index.html","ca3288aba7171e0b8f046307fa011681"],["/zhheo/random.js","383e4bd6b4cbbd700faeb633ec3bb732"]];
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
