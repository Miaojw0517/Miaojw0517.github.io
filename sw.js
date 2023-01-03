/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","2bf8337bbca9c623956f8bfc40a2c3e5"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","ef21f3b54978111d8c08607db08c91a5"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","bdfc8cf3bfcf526a5e46c48285c6869b"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","28f349aaddacc2a5e1d7664630324180"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","f0854f5cb2b1938cef6703c6f4f22238"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","2a5af8eac9f3bb861fd157501e819d28"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","5aa448b54ab527b2a225427652507c9a"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","dd726ba254caeed99f3e7c2b0e61336f"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","03533c8d0feea0df64f31d5c4a0c072a"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","3974e1436a7c28da186f946431309763"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","3fc8db27d80629573d9ce57a0772f641"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","f98db9ae7df94ba30f542ae852c4c03c"],["/2022/06/10/tools/webstorm/快捷键/index.html","f1908fa2b7d5557f36df7c23c46bc944"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","950868005dde49748b0ee5b720b36dae"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","a12ff765f6c94146884aabd3a3549a8e"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","55fee51d611be59fcdbc7af6ea544b63"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","cb0a2b81dfc82386c99040ef0300e13c"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","1c6a83aaa067c5ce2fd70014034acdd3"],["/2022/06/17/vuepress/vuepress搭建/index.html","3d07551abe512e3154ad0c5c35fb88ad"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","c25f02d0312b113cdd7f568e0b6bc0ed"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","6a5f4fda8c2d02fabfe41136fc84aa89"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","ce02ad50f71466ff4e7346aa8580f984"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","5af977ad6bf962d6f7180758cb933320"],["/2022/06/22/inductive/javascript/进制转换/index.html","09e16bf33affff18395c013458c1d7eb"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","ee89fe53689ebffcb95dd23e65f956f7"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","872d1ea2800c8d57e369efc37dd709b2"],["/2022/06/23/inductive/scss/Base-level rules/index.html","7995992ba63e9f36526968d878e85ca1"],["/2022/06/23/inductive/scss/主题切换/index.html","16ff89d58a2ad8fe7f0793ee968bc69b"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","9628927396258c130166aed1a0f3fb20"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","ebb2a26edff4e7cb47999a1dabc59b5b"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","c337b712464fdd41ec711a9191c4a512"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","9533fa7a5a69b848dcb5b908e08ed6f1"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","f373096e79b83f07c0fd072800cf1f50"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","a3f5fe4ad78e1d9e3fea5deafd537a95"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","5304f7e14ee043789ce89d63df3d28c5"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","089f30161825ab65a1db983beba7d704"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","229fea8a7cae7ed3d547f34bfa99e7cd"],["/2022/07/06/tools/nodejs/npkill/index.html","c83aa1652576cd7acb84fe8f23d6fef1"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","8c20796079f6d7bbb48992cbaa57f3d6"],["/2022/07/07/learning/linux/常用命令/index.html","b442798506b51376a6516770dd5c5e13"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","b7520071da44061ac8bb23431b365ffe"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","70d284e0def6df110cdb5a0b4a6ad34e"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","171060a4e46c59113e96bc11e0de25de"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","f6925cf82ed9475587a08df0f5232914"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","c1e324bfa1323b0567bc5420ab812453"],["/2022/08/06/tools/nodejs/nrm/index.html","49ba4b4e6740780aac86b8b1283eb561"],["/2022/08/06/tools/nodejs/nvm/index.html","f51990dce594338c26a504b43a84b2ad"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","838e06ed90078f2c431936d8c8556f91"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","86fcf75ade334a47867551a778eb142c"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","d3dab99497dec76018fee39965ca92db"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","0e2ecf5dd7580f8165b3d6231feb809f"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","51ee7a6d0cc0af0ec58734e603596049"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","0d171ba0e6dda0f30376565bc4f96f63"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","2b88c77516c505aee0b0e04de596a209"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","a3384a326f462947214a661060222219"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","b2e0a14f0c3a57dd671420b2300462a4"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","1250e2e9ea0b14666665ec72b6d64f60"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","ad92d34bed0cd971543d71faad63c8dc"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","915de58d8d3040bfd3a9ef39ac1f85e9"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","cd9655af380276c45197fcd440421453"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","9e7f0bcdfd99854f786c2cd6b9d38ebd"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","6ba275b3af898d01d4f53f8f3c99329c"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","8cf6d902280e3118f9e90379f36263ca"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","302841979d6d83cfba16ad7a6ce955bc"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","b065ff9820f18ddbb02637d17ed15afc"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","46eded14a33abfb5c5104da5f0c9c508"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","3484c3bb1f1ea68d9a87f4400b3219d7"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","43d0fab221d7790ccbec4126bbfba4f9"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","aca5d5e0eebaba96bf1ff4f88de95ada"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","bc07b34197710fe527a6e08701ffb4c6"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","445ae65e13cd5b10604234ddc525d389"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","a6ca98514679b2cc3ce6e7fe8743cc00"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","6684833f42bf6844e10d7098e301c49f"],["/404.html","e94145e7c6663e78d06ea8dbd209ca62"],["/about/index.html","dd04ccd3bcd1aac4eeec9cf3c50bb765"],["/air-conditioner/index.html","2ec689a5c881c22720b0379d0a1e637e"],["/archives/2022/05/index.html","018e1bc45dee67f1411f3abba3ca0657"],["/archives/2022/06/index.html","56d5eed816ac12c619d66b7d08477e51"],["/archives/2022/06/page/2/index.html","260f884cd3f2e4b174816ba094e8e0a0"],["/archives/2022/06/page/3/index.html","9951af006bb527a5d58856d5086b5020"],["/archives/2022/07/index.html","184038b1b00f35ac9d1d75cf59e43d3b"],["/archives/2022/08/index.html","cb3a3e080443879ce69f4237b02708f4"],["/archives/2022/09/index.html","ae6ced1559317fd1a31393705865fc83"],["/archives/2022/10/index.html","88820eb9779c71fb064978d9938c7234"],["/archives/2022/11/index.html","ac8c2b6ee97ec0fdc3cf3accaab0a0e7"],["/archives/2022/12/index.html","07e825c8ebe8ca5ec7e813897bfb94a7"],["/archives/2022/index.html","7e71a5a680137773c10e98651817712a"],["/archives/2022/page/2/index.html","66c88c26e16cb75e8a121916906b2de2"],["/archives/2022/page/3/index.html","274d171cc51b6274c2e9f558f868efbc"],["/archives/2022/page/4/index.html","1b1d709e6cb64392c446bec44094d73a"],["/archives/2022/page/5/index.html","86c84a62c6ad259419fe69a264c0bc61"],["/archives/2022/page/6/index.html","c9d209a0596cc207b77b26bef846eec8"],["/archives/2022/page/7/index.html","463e0e68cc0182a67a98ef82836da042"],["/archives/2022/page/8/index.html","d3f270526ae7832dc33a01724f7fa862"],["/archives/2023/01/index.html","8623145dd4749fca0c09108f35e5a97b"],["/archives/2023/index.html","30e15b3731b3586726b594f7a5a635c3"],["/archives/index.html","308fbb8b79f036009d7d132d9238c393"],["/archives/page/2/index.html","a11717bd1b94c4f94e27ec76c2e67850"],["/archives/page/3/index.html","e67ea8bd936d0678b8531e187d759fd5"],["/archives/page/4/index.html","15736265f733b1ec17fbfe7a28dd80b3"],["/archives/page/5/index.html","74ef0083667949fd7104d9408ab47200"],["/archives/page/6/index.html","260ea9e09272bb32594e54d1f5358be2"],["/archives/page/7/index.html","74445a0401fb9c7b455edfa5bc00a01f"],["/archives/page/8/index.html","c4f882d6d813149882e7c6d1109fcf17"],["/bangumis/index.html","76655bf829223315217c7a500ae42d54"],["/categories/FrontEnd/index.html","88db3fae9f3dae2e3c5021ecce4b3515"],["/categories/FrontEnd/page/2/index.html","ed97c5aaf9eb4a008161f6dc6eb4f11e"],["/categories/FrontEnd/page/3/index.html","8db82c762230e7c38542c87da436d63e"],["/categories/FrontEnd/page/4/index.html","2a542eb9a831ec44b6cb9abd387b6625"],["/categories/FrontEnd/page/5/index.html","92842632e5688a8698124732ab22a4da"],["/categories/FrontEnd/page/6/index.html","c345a59f1eedb3b4924acb166ad0b886"],["/categories/Git/index.html","a53ce246150a9f46e76c7e0c219cc0b1"],["/categories/Hexo/index.html","54479e001d5a70021f6e43c3acf6ffe0"],["/categories/Linux/index.html","695b8f3169e5c732785522c2f7c93080"],["/categories/Nginx/index.html","9224b5fc1956dcddbbf944449c6b9be9"],["/categories/index.html","5ab60f8a08a4049002e8711b7eaca961"],["/categories/插件工具/index.html","03e74fc0ebb15fc50e42e03ff25854c1"],["/categories/移动端/index.html","442f471338cc16c9cbefb61ed15c0ebe"],["/collect/index.html","b3253d4d35cacf4f091ab94bbec543fb"],["/comments/index.html","1207662d1bc016388ac512c6c42ee30c"],["/css/biliBg/autumn/autumn.css","1413002e4dc92e37d7cd48ef5f5b89c3"],["/css/biliBg/spring/spring.css","9acadc0fada2d830dfd1dd7303d4bd19"],["/css/biliBg/winter/winter.css","c519477c99558a6773b36bb0a7bc74ae"],["/css/commentBarrage.css","50ea57667c4196ca6d4a893b55403333"],["/css/customer_butterfly.css","c2077941c9cbeada164cd933bf15d20b"],["/css/customer_style.css","b7044e59e2d982f2d15e24ffa33c57d4"],["/css/iconfont.css","45b3f02c1d5a6229fdbc15edbd1d0acf"],["/css/index.css","b712d36a79297ff3ceb34a99d10e193e"],["/css/loading.css","b6fcf24d3157c7698ecbdbcdc4dec653"],["/css/nav_menu.css","4de9aa5ea0802f45c40bfe4beb60d296"],["/css/progress_bar.css","48f9edf17e6d605753f87d2d9e2d616c"],["/css/rightMenu.css","fd95334c894f8054e0c2832e46d89a8a"],["/css/var.css","3623cd960385e891f895dad4150a2bc0"],["/gallery/index.html","9b06b918b043d22bb2a6a30dd54859a5"],["/gallery/wallpaper/index.html","15d4c75a8a31d0895cc280e0d3a8014c"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","dcc41f8e9485d03b7a001df3ce0bb463"],["/js/anzhiyu.js","263ab53ecf8b123b53d8def415ce1e66"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","f67e87d3cd255fd92ac794e72b41f10b"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8814c73f832d52c245afaf05f3076ec5"],["/music/index.html","ef2965511edcdf3c7a8b5d7ddb4b1de3"],["/page/2/index.html","6f3951617333883ff80536fda76443cd"],["/page/3/index.html","269c435acb8da88f7013fe5a6b9b181d"],["/page/4/index.html","ca25a8447a23123e09ca8dd45bfecf1b"],["/page/5/index.html","440e5b85168a882a2b666963a602e1cc"],["/page/6/index.html","003d11f272844fb897dc8e3bd16643b8"],["/page/7/index.html","ba45e03154d774dcf634f2f49d4e170c"],["/page/8/index.html","3d011f1c4f8333bc1f68ac2cc7a231c4"],["/sw-register.js","1d2011387e2d4c522c26b1b8b662a94e"],["/tags/CSS/index.html","7f2ed5f7fa0ae1870276a6bd805cadae"],["/tags/Dart/index.html","7dc889d024574ab22ee911735611d99d"],["/tags/ElementUi/index.html","888dbfb04a9bac44a92948328d5f3f73"],["/tags/Flutter/index.html","c4c12b7ad8b49d493d370ce7f759644a"],["/tags/Git/index.html","ac29a1e01462c60fe4f2fc53f1d33e42"],["/tags/Hexo/index.html","f7b23be4c3291bff4fe701202761deef"],["/tags/Javascript/index.html","401be19d666ceaf9a986a137c9e0ab24"],["/tags/Javascript/page/2/index.html","0c4b6c1d94a843c5837a5caed537bcc7"],["/tags/Linux/index.html","ac3d12a5a9698cbd1ceaa64289d643e6"],["/tags/Nginx/index.html","f83e82c79ef9aaabf69858463d6026fa"],["/tags/Node/index.html","1e318850786c3def4c2a9dadb5126964"],["/tags/Scss/index.html","9b84c7c4b300f4dae9ae8ee868542746"],["/tags/Vue/index.html","178c0b095de7c52f6e7a1bb1816b228e"],["/tags/Vue/page/2/index.html","e08d274fb61c5172899acb5ce2c4803f"],["/tags/Vuepress/index.html","434b5ea6cc6145df94bfa72bd216142a"],["/tags/Webstorm/index.html","947d99f439ccad8b7f5560c8b9afbfc5"],["/tags/Windows/index.html","4da93037c1954ce8986ab276a744fedc"],["/tags/index.html","51141a189843ce3fdbfa32f628d133fb"],["/tags/插件工具/index.html","a59fef8c4450014c2061f29ae244a5f8"],["/tags/问题随录/index.html","7c4940d01ed7f581248e134747b776fa"],["/zhheo/random.js","54bd999504f50ce29d23088f022dfb64"]];
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
