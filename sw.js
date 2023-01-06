/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","85a9319d5e583c54dff3fbf6c6bc28ec"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","7c63c6e7896e308f5186f183bb7aaed2"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","e415442ea824c6633c3265650fd67100"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","fc5923d6ae78f7710dd5383658401b73"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","ca2e5de08dabeffd6a481765ecf770b8"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","5ab32bbc3fc1ea1bff7ca6a0c6de65ce"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","ceb13cb3552592222c7c8c6f295c59d1"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","9b99e95b6e6852f869093a52e3d7d756"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","af02a506a386a12cb1cdb8bc7fbe6156"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","c99a5914a21b4210d2e3bb80ebc22e11"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","01b78241093b17d08622932261920af4"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","fff9e9f0c83f2cde8e8a20915e8b174b"],["/2022/06/10/tools/webstorm/快捷键/index.html","6fb7a77e5aaf7e60457db76aa0b02e6a"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","5ea3d46bd9fcf47576e64180b9369217"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","2391ea72ebf84cc2529e54df87fd91b9"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","3b8794904951810b4c4381ce72f279f4"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","63803340fc30196a1f3ec647ce7657e1"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","5ba2b442f9e2f72fe8a3bfc0074388a1"],["/2022/06/17/vuepress/vuepress搭建/index.html","cf5d02c450d03cb840c4257d46a6766a"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","dbeafe05a88e0c62c10dda9d06ecfa98"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","954c95e0ca457b761a824b587c69a885"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","fc6c51f102076ae87f4c25cf6e0938bf"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","007819ba749fdaf0c39c3fcf338a383b"],["/2022/06/22/inductive/javascript/进制转换/index.html","39d03f0497b1c1ad53706e16a50c1ccb"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","f490321cf992692705dc436fdd42e64b"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","16c920c7285851abb27112db4e0faa2d"],["/2022/06/23/inductive/scss/Base-level rules/index.html","df6afdeadf50ccd780ce45f8c80d7e54"],["/2022/06/23/inductive/scss/主题切换/index.html","5e4923bdc288a23384911aca57b46a8d"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","1df6c0f2ef066ae7c93690aba8124525"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","b739990728d23c259ff72ba8080716c2"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","0ebcb683e2428d0164931d37bdee98b4"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","325f1f31a4a191176b36afa7df4c326f"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","b5a677b42c7ba214bed34210ff305440"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","941f691c18dc864c21fc98e62d13df4e"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","9c4ebc68658f4ce3088735c8169608ba"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","a3ca081c70738cfdc92aec3dd2387606"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","b92202040e27b7f38d1703817d3eb0eb"],["/2022/07/06/tools/nodejs/npkill/index.html","d6a7f2339c559bfe40dce3f54c5ae098"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","34977992069ee97f2e7264b4a19cfdf1"],["/2022/07/07/learning/linux/常用命令/index.html","904bb905b2c1cde3413ac62012068054"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","9162c7759d5eb9f24bacd47a546224e8"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","c8be5d2ed3c3635dcad6c64a146a603f"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","6219efb0f92e8bac6c62d34728399cc4"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","b1ea14bf38b2abc683db4ae8a5af41da"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","3fb969a4a3cd8cad5d4bed0a953004d9"],["/2022/08/06/tools/nodejs/nrm/index.html","d4303b06f7fe5f514ff9d5f0fd493e9c"],["/2022/08/06/tools/nodejs/nvm/index.html","d616374ee8bb570daa5f939cf1cf07b3"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","312274a5072a10b5f60c5bcdee2c567f"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","2359072d9af23591385d7f0d0e17fb66"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","37c22d62fd379684e5657872ad5316ce"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","e82bd74f91c6f3c49b56476d9d2eaa0d"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","8cbbf43382d57f6bcd5412407118e9f3"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","a62c669b8bad3ef77f80e445135eb6a1"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","623af8fdf14b2536ccc948a80ae320b0"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","95fb45c830a0970223d983eb4183f090"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","adaefaf66b263232258f566000dcf6fe"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","dac8bd9c5d0def9eee30aba9cdc6594e"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","14d26970429165224a4f0551838af88b"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","d4386c17fd2ff7da3f58df0f261d2a37"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","cbdf9c32d63c3a2b1747c946b4bc384d"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","9e9a9ec5e479899eb8eedb356575615f"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","59daa4810837ea431a3cc85128ae7a6c"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","204270b231b7ef554ec63f1cfe914236"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","78668589a76162f19234b03d951c42ef"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","11074db1a9faa8f2301e4fbac2ea8671"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","0149cbabdc64863e3ab07eddf64451a4"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","438942667a7422d2cd95a65f4be05b92"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","ff2765c6abdf542d5b948180cffb771f"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","1e7003b5386b3573be6a236b7c09c1ca"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","b471423cb58d5fad67bd40cf035b7317"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","5dcd54e3c3a0c37441f70571bf4235e7"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","1a8875fc048b5df775bc85b85e493b33"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","f6516899d45d058879e5afd8c209aec8"],["/404.html","4ebed81191c2bdd33540f68706b350cc"],["/about/index.html","e31bbed12cf86ebf35fbebd0cc2d6cdd"],["/air-conditioner/index.html","21935a05cab80540cf07496a563b9882"],["/archives/2022/05/index.html","20068f4dd58000cfb4dee422306b29d5"],["/archives/2022/06/index.html","719a15c9dde9553b3314832468bb9ffa"],["/archives/2022/06/page/2/index.html","77ac772251f03a50c73d60a5aea361fa"],["/archives/2022/06/page/3/index.html","d25e0a5cb4450e5d125b9c0ad3344970"],["/archives/2022/07/index.html","a7c5265189be5e5004dca1c2d6974d91"],["/archives/2022/08/index.html","f5efdcfa9d037df4c63c29db2a950045"],["/archives/2022/09/index.html","7fc3e3344270c8c8febdd2608511b852"],["/archives/2022/10/index.html","8b8e85f0b42242f44d151557c63f2be1"],["/archives/2022/11/index.html","2ef491349ac4e55c294f14419d4ff814"],["/archives/2022/12/index.html","e65d205f883b5a9995b85b659227334e"],["/archives/2022/index.html","e1c5d1bcf186f1ed2db0bfafd0ee959d"],["/archives/2022/page/2/index.html","4f3832aa8f62daa392b548ffa8538835"],["/archives/2022/page/3/index.html","0ed4299fbeaaced3851afc364b498468"],["/archives/2022/page/4/index.html","f1932788eb987d3c5034694555c329c6"],["/archives/2022/page/5/index.html","c342c55eeb6c9836132e2ccecb817a04"],["/archives/2022/page/6/index.html","3249e6af8fc3f8c1fb3bedc76ec91b70"],["/archives/2022/page/7/index.html","27f4f1d9a2a1064de2a3664d6bae29b3"],["/archives/2022/page/8/index.html","1accf19a70f4554013891ea0d7363f0f"],["/archives/2023/01/index.html","4f7f670cfd0f577f1d5b829df80aaed1"],["/archives/2023/index.html","60cd3933c581e981428b754f26b9fbb0"],["/archives/index.html","bcb5a037f72ceb5d29562d3e7725194c"],["/archives/page/2/index.html","d5451509c9f61c36202479c717044a1b"],["/archives/page/3/index.html","d993b5f0227c63c63b90ff39a5a1451d"],["/archives/page/4/index.html","55100a019d23f64071f5794918133911"],["/archives/page/5/index.html","4f59bdd4559bec4f1f21d5a3c396728d"],["/archives/page/6/index.html","331f7d3fec0097d7b6e129273247ca7b"],["/archives/page/7/index.html","229a629065e4977084bda030195e7e31"],["/archives/page/8/index.html","6524a4714707c66e24d421e53c0ac90a"],["/bangumis/index.html","e64b1e31410d04d99916e8c6d56596b6"],["/categories/FrontEnd/index.html","38f97ebf5fb0e7aced987bf75f4a2922"],["/categories/FrontEnd/page/2/index.html","67c5784aeed26de9846c2e8027a609e0"],["/categories/FrontEnd/page/3/index.html","97d584b2af734619e32a759d3b26a77c"],["/categories/FrontEnd/page/4/index.html","cdb8fe517510c6f214c49f0a5daeda89"],["/categories/FrontEnd/page/5/index.html","db6c5e264eb042ffb8b3f30cb9afeeff"],["/categories/FrontEnd/page/6/index.html","13af4020f7559ab7b24d38e5e5a65bef"],["/categories/Git/index.html","ae8b69ad3254c58bf16b0c972f522edc"],["/categories/Hexo/index.html","b1af220a39aef223f9d288214095a5b5"],["/categories/Linux/index.html","ceea12a0d2b74cea09c606fe0f480ed1"],["/categories/Nginx/index.html","110870568ccd59a9334c12f8ad8a6b53"],["/categories/index.html","2392ae33e52e9adf342657683a3b2da8"],["/categories/插件工具/index.html","7cec69259904f582475cd92f69c580dd"],["/categories/移动端/index.html","3630774fb93d35b57ba9e505e26fdce6"],["/collect/index.html","26f25661d720dc38411c7dbc38956d29"],["/comments/index.html","230408799321e5a392d3da1d4b329a41"],["/css/biliBg/autumn/autumn.css","8e9f8d9b4e28fffd5339b6d1cf8203f0"],["/css/biliBg/spring/spring.css","9b80e647bf9fd6475677b5dce80e29ef"],["/css/biliBg/winter/winter.css","fd7af49e383bdaba27e63fe5846bf164"],["/css/commentBarrage.css","f379bd9f7e21c1b40646e260e76c12e4"],["/css/customer_butterfly.css","72f69914ceff259479dc63357918e138"],["/css/customer_style.css","db35f7c2af6a7cfc9a77ccc8fc180194"],["/css/essay_page.css","724c6edc6ed2b6607e5e76ff9bda9fef"],["/css/iconfont.css","8b8dd698af90a4467a1059ffcaa2c50e"],["/css/index.css","75199c61bb5dd10d5544e430d93fa139"],["/css/lantern.css","c3488d9c54de070c05999e73024f1842"],["/css/loading.css","21bd6220ee146af331dfc465de7674ee"],["/css/nav_menu.css","259c3b3614f0eac2142dfd0fddb159fd"],["/css/progress_bar.css","42c4578003599630768bb08bd52a19b6"],["/css/rightMenu.css","51a2294e80f2e607b70fbca464b45baf"],["/css/var.css","5882e97e8a1ab551b1d9444057c2ec12"],["/essay/index.html","fefcb25d9ca8554069d067abf9855867"],["/gallery/index.html","113b4292e45691915103568c0d57cbc3"],["/gallery/wallpaper/index.html","2839d560bfcee81aea2e11a2c0cc157e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","11397f9c0010e2c86bd7506c87d7b6f6"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","faad37be6cd7e0bbd6bb788d1cf4a335"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","f6ca693095b3286c3d3ff7edccaa9767"],["/music/index.html","6206a2fdbc18f20a7672f189101b771e"],["/page/2/index.html","bbfc80df98d587e3f6127cd4d43c3ae8"],["/page/3/index.html","05a1ca83bb9469a873aa3228f4ee4c2b"],["/page/4/index.html","571f4ab4c290b45dbdad4c515c34c018"],["/page/5/index.html","afdc729c9468f9d94e63b1fb6a575726"],["/page/6/index.html","25606d1f8dcf2acb78d01c0a8b382230"],["/page/7/index.html","8b7caa2a4a4018debbe5dbb6b3d59789"],["/page/8/index.html","29913c58e97dbc9b9652572111cb4a30"],["/sw-register.js","c57872edaf96d534909d8f424c552c2f"],["/tags/CSS/index.html","eae0567de8d50a817117b31b789ebb43"],["/tags/Dart/index.html","752996599dd419c314139e087e6fc384"],["/tags/ElementUi/index.html","7f300c220ff2200d6f1e70b9adcc8f46"],["/tags/Flutter/index.html","a5a53a81b5f54f1c6f6411e80ab6e160"],["/tags/Git/index.html","1d39887ac5d8ceada086b240fa4e4564"],["/tags/Hexo/index.html","12aacb7a6cd793b34b8fbad7ed4f2357"],["/tags/Javascript/index.html","cdfed9b7a45f95d3cca11ef0611d7f04"],["/tags/Javascript/page/2/index.html","b1982e9cf92b21eb136c9bccabc2905d"],["/tags/Linux/index.html","6f4b81e77ccd2ef56fbf37be606a47fd"],["/tags/Nginx/index.html","490fcf1809786d6502565cc4c89729c8"],["/tags/Node/index.html","13e40a857e2ad22d6eb710147a5367a3"],["/tags/Scss/index.html","d78efb365c86b0a02149300ecc2bd45e"],["/tags/Vue/index.html","82001660f86a64ec387b87ee31b8316a"],["/tags/Vue/page/2/index.html","9f9faabd4dd588c7ad82ebe76485d2e5"],["/tags/Vuepress/index.html","1e0c2d5225a0d75244010c003cff4dd3"],["/tags/Webstorm/index.html","ed75455b4c81abbfeacf73ec266ddd1c"],["/tags/Windows/index.html","7b5df0098b4d9e2cb54416537ed27620"],["/tags/index.html","2c4bf3f1bbbb5ae5ce717a597f0eca6b"],["/tags/插件工具/index.html","004ca9ef3786560d1a142b4ae9c82f5b"],["/tags/问题随录/index.html","54ff0e5eacf02381ea7ab787eef550eb"],["/zhheo/random.js","c277bedc4dfed2ce4ff6cb0c2d3ef33f"]];
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
