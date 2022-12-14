/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","f51dcbfd642991f6f620f5f2b289caea"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","b07395adb5b63124d3bc6252d2217275"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","d0283ce5395cd5a4cf2a3e2c7ec9b354"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","70f70b75855c5072f06e28957bb342a9"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","c13da37bd624fe1f805b5e8c4cd48267"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","0722c3acba9eacc124a6984ecd5829fb"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","e1d8c62321288addeadd651ec80b1f8d"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","1933123979c1f47cbf9d268a7be4323f"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","8db8d155cddddca3bfd340f7f0d5fd36"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","64fec6574e4d075f22dbe01266add03b"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","becc71b3915fb4f721b031d55d3572bb"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","829c0463fbb0adf1dac9cd21493eb9e4"],["/2022/06/10/tools/webstorm/快捷键/index.html","6365e810d3461c9ee815cde831ce04d6"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","8414205550e7b788a6a27e63ba875a2c"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","e3d4e343d3807e5426a93ff14cb84b52"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","daf2eb1c310be1bdae276dd4d3427dda"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","6df6a21940bb2224e1b05d706206e5fd"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","3d309581ec5b6b4db71baa31ccbec491"],["/2022/06/17/vuepress/vuepress搭建/index.html","0a182e4f961dbc8cf10c66fe4bfee317"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","700d3881fba1159eef83bc2d1b0fc9b2"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","19c97eab637af95119f4998db58f87a3"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","78137aa9e343297eb4fd23441185898d"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","1594b7ba852ab7063c81617f4c625bba"],["/2022/06/22/inductive/javascript/进制转换/index.html","471b3f2bba15c6b0e07c43915da7c71f"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","22be0ba0a6d098e330436ce4f55a33e8"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","4a561c026796b996defa3ed4eada1322"],["/2022/06/23/inductive/scss/Base-level rules/index.html","91820095f3c80e271bd593a59abc0563"],["/2022/06/23/inductive/scss/主题切换/index.html","12970c68780aadf91301510f497d58aa"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","29f67eac1673f36f99d425b8063711ea"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","c774c68c2f03ddafec05240222c01b18"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","959431efd7006c384b8e178944e578aa"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","f25b911a7b509dec9411ac2171c688e7"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","70f6f8a4961dfbe5170e70266f5dde0d"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","db451e4b18d9d782b1de88ffb33727d9"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","480be74fd172b5b9f70e15babed6281e"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","8b33d1976ed3654b57b39ad7d06a160a"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","38bad0d5efc55f89df93ce27840af690"],["/2022/07/06/tools/nodejs/npkill/index.html","02aff5dbe815e6e9aefbc12ce9420cf9"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","1cac791a88cb63169bc9c7580df87e2b"],["/2022/07/07/learning/linux/常用命令/index.html","4fb71e8e4cc8c1403376ad1c7e91597a"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","74b347499e9ff6cfd2cbc8c2f22d1aa5"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","2605025066386665fcc0d6bfb970e101"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","165c078540c33abc8246ba1c5762101c"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","5e04ea41376ccbf0d41c662903083fda"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","f3ee2e502fb6e7cbcb242477e08eab25"],["/2022/08/06/tools/nodejs/nrm/index.html","e4084994ba11a8899e005b25a27c9dff"],["/2022/08/06/tools/nodejs/nvm/index.html","89cf1faac87f2c4e279d6ca347879728"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","f8b24a408503b0ceb2711a45e6e507fd"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","19e13805ee2eec3ec487833e33e052b9"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","ee19380a298f5e5db448900c85836d6e"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","6f94eed4d6e43ed4583495eef4a4d7c8"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","bc92724dc834f887b736db86a9c41ff8"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","d9ea914b392fa3c8c82c1c47d2397456"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","6ec4f1089cd9d6824509db5bc1bd5d28"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","451f8c7dc86baf963d1dda97d25d076f"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","3cefd48c15768ece076fc39958a89a63"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","63b88ddcfa01b90f4181581cdaf4e784"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","a5e6a780c33376b6e1ce4bffd5afe28b"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","6e844c97a139de92f94dfb736af39953"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","71dd322cd1ba506337688bf3fd0cad0b"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","f9bf4f863511717e48e916835260ce85"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","34df8569476452cb67ff47b4a5823708"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","1151ce3ca6080f51893c5c1680f03cc2"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","c31318ab657d06a0dd2103dc6451fe89"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","c603be2209430d2e78ed2904833d7a8d"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","262df482310b1c128bd98ba6e4c18cfe"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","e8f88ca6c55c9db725fb200132db7ad1"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","e82a616f2c872c373c80063307b787b5"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","31ee7e4fd4dc5c46c2de6f3b4fc47ed3"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","dfcf63df231f8b0d40cf86bab67284dd"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","a072886e4199cc18174e2229b264eb3c"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","2d4eca83344429f9c39232eb038505c5"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","88f5df75d3cc431daf68ef248cab09c6"],["/404.html","1306bb939dce122942f09b75fe9ce560"],["/about/index.html","ea20d49200d75905b921488714f55b10"],["/air-conditioner/index.html","3d486f85ef941c95965348bb1cbf204f"],["/archives/2022/05/index.html","1314a919bf4087bd99491a18c46bcdc1"],["/archives/2022/06/index.html","558d786cd513e56660228012a60e352f"],["/archives/2022/06/page/2/index.html","24676c86542cfaec321ac5dc676dd08c"],["/archives/2022/06/page/3/index.html","b230a72b1664527ce593d98336a11067"],["/archives/2022/07/index.html","ed3d52ea3d6cbaee0a2c1dcbeb67c577"],["/archives/2022/08/index.html","14054855f877fedcd968bba62416ba4b"],["/archives/2022/09/index.html","fc02d4bb19ca81d89447b63ac5d084f8"],["/archives/2022/10/index.html","e7e756c9050c6543e8e5fac3244a0995"],["/archives/2022/11/index.html","772850ba90b7e6bc5badd0e895932fc8"],["/archives/2022/12/index.html","2719eb96cb788e272a4f48da5cf43a3b"],["/archives/2022/index.html","0ab19f69ba935d9dbd9e6761cddc474b"],["/archives/2022/page/2/index.html","e163e5cfe006879a00b3d6ffee035116"],["/archives/2022/page/3/index.html","c3d90a3a76d919a3495bd8f84e4fd418"],["/archives/2022/page/4/index.html","02ba40c35e6e86f4db199bd21d79efa5"],["/archives/2022/page/5/index.html","f896dd5fb59be7a06b54a6ee67453d43"],["/archives/2022/page/6/index.html","d21f8ed842a72d5a069c4cbf11878cd7"],["/archives/2022/page/7/index.html","82defd7a9bff00043bdac8ca7f92353f"],["/archives/2022/page/8/index.html","acab02e335122892832170887531e08f"],["/archives/2023/01/index.html","8c2a616b5e4ba29cd9492866b745884b"],["/archives/2023/index.html","45cecdf3f15c4fa00f1a26dd3e4e90c3"],["/archives/index.html","697050998710a2ee00264a2532cc85c1"],["/archives/page/2/index.html","6395c6afdc3d595e959985b4dc41d277"],["/archives/page/3/index.html","a7da2507cdc61770a0ef408fb064e1dd"],["/archives/page/4/index.html","364ce6e192dd913d04bc372b24fb35d0"],["/archives/page/5/index.html","87fa3b1657f6364918e16ae9942f3665"],["/archives/page/6/index.html","e72a3a261f7a1721a047901c2899cad4"],["/archives/page/7/index.html","c366ff52f7403af1972e679ef0cfd072"],["/archives/page/8/index.html","879242bcf64feca47b7afa42b1e250db"],["/bangumis/index.html","089defca41da92c920e1c2ec2f73d6da"],["/categories/FrontEnd/index.html","9cf1a06888a9e7a7fa754bf213f50663"],["/categories/FrontEnd/page/2/index.html","69e68c5c9e465e2c120f9e2900bb900d"],["/categories/FrontEnd/page/3/index.html","385851cb8b365d9c3eece7286d157a82"],["/categories/FrontEnd/page/4/index.html","7255238ece208c7ecb571f6b50ec4085"],["/categories/FrontEnd/page/5/index.html","1f5610beb18928bd8a6900941f8bcb06"],["/categories/FrontEnd/page/6/index.html","2840393e26e11f3db27c68c96601ee1f"],["/categories/Git/index.html","98892299e0be6354b798b26a21476422"],["/categories/Hexo/index.html","bb0fa78e7d1f805fbd86b154b8fb5045"],["/categories/Linux/index.html","60e82eaae6f86690c3ea328558a8016e"],["/categories/Nginx/index.html","06113ea9e60b5538012fdca6f09a2eef"],["/categories/index.html","155466031bfb223fca5a09526fe4dbaa"],["/categories/插件工具/index.html","6d6a18a736765dc4929f932d00ee02c6"],["/categories/移动端/index.html","52f34e61b93181782d03bc49b314de61"],["/collect/index.html","eae3973c896a06af234f17443226e299"],["/comments/index.html","d759415660956298922f261bdd74277b"],["/css/biliBg/autumn/autumn.css","d35b88aee8602a67c4b9ee1a00b05691"],["/css/biliBg/spring/spring.css","1fae6630c030a430c65831af4108ae08"],["/css/biliBg/winter/winter.css","acfde522d8cf485cf0bedca614b0c3df"],["/css/commentBarrage.css","3134a8b615913b90ecd640d1ea876cb2"],["/css/customer_butterfly.css","db4df9c27f9c9a155ad36f8bc68586a9"],["/css/customer_style.css","9ddca020ecfa92b56892a09e067ceb4e"],["/css/essay_page.css","2840a1ed9497bf6d53b3cf6713ee8b8c"],["/css/iconfont.css","834b964a7fb8b7dc752b0c22255b73a7"],["/css/index.css","9aeca08fccf8be224a9fe0ba8fdaa841"],["/css/lantern.css","901e3c1f6f5a717132d84327e8639f23"],["/css/loading.css","394a316d4d63a77456b0436bb4690637"],["/css/nav_menu.css","2972a773c852f4cadd8975877ef47a1e"],["/css/progress_bar.css","0429f77ec8424df12ec939c841f16ee2"],["/css/rightMenu.css","569cc0550ceb0a30ddc09686a897becf"],["/css/var.css","4aada063408b2557009d0b215278b1be"],["/essay/index.html","0e9280fb5937b8f90455844cfc0ca287"],["/gallery/index.html","9a048f18be0191cf5a7ddf32e3328154"],["/gallery/wallpaper/index.html","385d8a9b6a742a1567bff6fe92eafd43"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","e0791c7ea93ec53b7aacb1b0bf4cfbbf"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/fireworks.js","ef64f73ef950c645d9b5eb5108ef42c1"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","3e0d93c29bad2846aa8e5743b0243f1e"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","8b343cd38d943d4c2a7d5872368de503"],["/music/index.html","0464491b0227aba9703aea9364495e04"],["/page/2/index.html","5cb0b6c7e89e26d063dc93ba5f8cfc5b"],["/page/3/index.html","e2404673844718c7db8faf020eae2b15"],["/page/4/index.html","3b0d7559bff88b93070db7a6371be901"],["/page/5/index.html","214b6529d1b7b90617c2d7cc081fe3f5"],["/page/6/index.html","195f324f042b8d59f0d02910a0528d3a"],["/page/7/index.html","5b0be8cced889e149d3c9ab0135c8465"],["/page/8/index.html","d806a2c1815fdd0b40862d2fd8d5648b"],["/sw-register.js","05dad1987deb51c8dba5b4bf0aab7027"],["/tags/CSS/index.html","345a33c08b22674dd591346efccfcec3"],["/tags/Dart/index.html","40778d9a59c8f1c57e2fc416f29c11ab"],["/tags/ElementUi/index.html","a9fd2ae14d53abe88a8c312e06374f36"],["/tags/Flutter/index.html","6fd9e97d29c150fe6a6e0261984d0dbb"],["/tags/Git/index.html","17a5d245f35f154e0a2f80e6d10a66f1"],["/tags/Hexo/index.html","7deb141b38d689baddc546a5424a7ab0"],["/tags/Javascript/index.html","34ed4daa65b35e51932b31eb7331a5cb"],["/tags/Javascript/page/2/index.html","0f4935bd09d4799fbec2bb9c002feb4c"],["/tags/Linux/index.html","307a51764956ce646e3ff2a782eeee78"],["/tags/Nginx/index.html","07c01238e9d9136edc74e9e731c00a0b"],["/tags/Node/index.html","72a44bef7f0133cb8bdcc794f1ecde8c"],["/tags/Scss/index.html","2b6ddd7ce94928f77e2993be9db7c7ea"],["/tags/Vue/index.html","308b7434f35c2c44c707786690bbe890"],["/tags/Vue/page/2/index.html","809f9d62b2dcdaed4f999719199a1103"],["/tags/Vuepress/index.html","081785697ece7247612d844329cac3f3"],["/tags/Webstorm/index.html","22f3730d69f9e6ff4e7a26897ddda2b2"],["/tags/Windows/index.html","d2b6ac9dddd8d0480d0f3d9e777514f8"],["/tags/index.html","4e08995785d62b2cea218805d543cae6"],["/tags/插件工具/index.html","039c20eb133316d78d4c9fc35d185165"],["/tags/问题随录/index.html","613e4e7d00c78c984929dab83595b87b"],["/zhheo/random.js","9bdf6bbad4542fd0186799a01307d3b8"]];
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
