/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","ecac583b878d0cc702f22918d77b9c79"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","2a038cf3786ddd9cafc052a8e91a297a"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","6443f4ff93942774123eaad7671d7178"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","ed03e6334f535fe21a269ad6f5f64200"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","523e27cd79ec165304eb4cac9041c3ea"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","9225f5b20792329af7dedd723ee78687"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","7dd5dc0d7dad911cc516562adaf8f589"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","4fed86febcca74148f8271680c219788"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","c93fbbd72b92a9d1aab3e61a1657e7e3"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","013880ec275a50bd040a898cfec37b9c"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","bd1d937fab3326f113e5f07cc2ad0c04"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","707fe2c8d003c9b0e7cb91bd6feb10c0"],["/2022/06/10/tools/webstorm/快捷键/index.html","65d56f57bc48aa195b4e3dcdf59b9ef7"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","14ad9ecb27a478604da4965b995d08f6"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","fd84a29284b6177969765b34073aa245"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","1566cc00648e5ff22942b582c6c2ab87"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","f7454b4a6eb6cffd3c1734991f726942"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","07542786f5d5953a2686a069d822dd9c"],["/2022/06/17/vuepress/vuepress搭建/index.html","f73e57ef4537dcb6126295653b58fe78"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","dbfa02f8f648f740a7ec5d238f4e93c9"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","82d1e7e187ff5f08cde5c292cc8cb22c"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","ed83b19ba83fe0f292cea9dc195e6b22"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","c8fbabecc5381721760de100235de17d"],["/2022/06/22/inductive/javascript/进制转换/index.html","527bf7de32fbc14bcd8bc0e63308827d"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","0bdda9df0885b6ac6830e8a8e37e472a"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","1647cc5a145ee43bdb6b26964b392117"],["/2022/06/23/inductive/scss/Base-level rules/index.html","269ccb8d12ab4956530b0f6775c8a381"],["/2022/06/23/inductive/scss/主题切换/index.html","23c9ae21e8f84127517f11d4f94058f7"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","16cdb1d499b3da5c73ad67532bab6db1"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","22edd977223f5839462b01f67826af91"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","d67cee4aef6f84dbbe65536d9605b890"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","f028f449a0ada37f096c46188016fc94"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","422f6f9fc7e9ad680943300167581a2d"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","6a8ca409c7af0d51c6bf5014b2f56941"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","e351860a12b42cc0404035e1f5debeff"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","efe12517b7ab8ae0930072ddf4349848"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","05264d80602211d9099f1efe443e5cda"],["/2022/07/06/tools/nodejs/npkill/index.html","1c80c54a240cc350cb925e75415872df"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","fea570081ee73e6a6757d3dab614930a"],["/2022/07/07/learning/linux/常用命令/index.html","7d2171ef6c8c9047e465bb4720e9c2b8"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","878d8e0eb811247a1947aaa52be2a398"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","2420445d958f110d77d53a878fcdfd9a"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","7137c44b2611f80d58eb3fe53c50f6fe"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","11e5bf7c707d2f0ea6e422ded7821733"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","6179679d21dcaa82e51c30fb07a64757"],["/2022/08/06/tools/nodejs/nrm/index.html","fce6526a1dfec01838ce51507e8b0547"],["/2022/08/06/tools/nodejs/nvm/index.html","84ea907f42da543f605fa73e65dde9bb"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","42ee2ecfc93ac760f57b08ab7d7feac8"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","85065cfe7d07aabfdb17bfea530abfe6"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","a4a67e273fde0f8390cab829888bf88a"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","698a928441940e3ca66967ed63b8108f"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","bf3045c1fec2a5a68389143b09709ada"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","67f8a317f94f96686801e4a81ca9d0ff"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","be185c8e46347087b300ae3c622164d7"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","7a62a513bb28235cdfd5a3ec43a2c454"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","1f30efabf2b65b9ba8b0e9b322e1a8d4"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","575ac5fdbb86b903e8a1269c6298094f"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","752847af45eb33ce7ab1cb3c851076e2"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","c9dc66451d4f3381791146be55f83019"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","8b72a3c1cbdacf782a1d6b9b52986a49"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","aabc1da17e4a14add4335ee5ad7df971"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","9d0650b8b6176405e685ea348692983e"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","52d87ff8405a57abb7410ac2b220848c"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","913c0a63bf1a9e519c35b63caa48b646"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","43be8893362dd334720dd5f69770d49b"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","0c7b70a6bdf765f85d502a0d26f8dc5c"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","3d41e7564d98ca6a5f15bd1550bef984"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","c38d118f5eef7149d6543074f6df9daf"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","7870e7a8943c3aef92ed3e0fc422af9b"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","79779e71bae58bb25bb984518f005538"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","5180355a12959b421201a35d55c9aae5"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","a824c0db38dedbceb95c26ae787ec1c4"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","78e9a7095198826d90572c93f4bb99ca"],["/404.html","45d3c4d7ef9ce315d5e182b4173a98ce"],["/about/index.html","91d4676428fa1293072b51f97724901a"],["/air-conditioner/index.html","20efa26ffd88f32e0d5a13cb2c91dc44"],["/archives/2022/05/index.html","b813b25d39b3f483bab891fbf2fac686"],["/archives/2022/06/index.html","d34ba8288c09d04c81e9d152733eefd7"],["/archives/2022/06/page/2/index.html","2cfdd3cd3fa0e7ce03015a0b09f3aa3a"],["/archives/2022/06/page/3/index.html","bbdfcceae04956c13ac5aff14f9fdeaf"],["/archives/2022/07/index.html","e3dc7dc9e06eaa20fa26d423201da77d"],["/archives/2022/08/index.html","4d707d95d469df528f8d78160357aebb"],["/archives/2022/09/index.html","873b2cbbb2fddb048d20171b29f61c24"],["/archives/2022/10/index.html","19b01833aff78493c7d4cbb73b28c3c5"],["/archives/2022/11/index.html","95ee0ea8fb320de18f02698f73579953"],["/archives/2022/12/index.html","a67af9527a9648b1d936c15b7fde3b81"],["/archives/2022/index.html","893032e7c06855ee9e9a81949bfeec7f"],["/archives/2022/page/2/index.html","63a92791e5aa6891141c6dcb4d105ae3"],["/archives/2022/page/3/index.html","8f10a759490ca3e681fd50971f474b67"],["/archives/2022/page/4/index.html","b214f2d28456ca8252bf4468d82bb7b9"],["/archives/2022/page/5/index.html","17a4d8697b092c6570ec306ee801102f"],["/archives/2022/page/6/index.html","e08cffb1bdc459b8e768de4928307e83"],["/archives/2022/page/7/index.html","ced9fd06c522540842cc00fef014c66b"],["/archives/2022/page/8/index.html","0cdef8c21f6ec13aabebfcf1e5dd559d"],["/archives/2023/01/index.html","302f750fd2a21927036ed5f2f1eef204"],["/archives/2023/index.html","76dfd5f8969e7c650912563c01ed4fc1"],["/archives/index.html","e875f636cf9ee3b3d73cf3b4bd9fa378"],["/archives/page/2/index.html","886b2090f5dfac6c37f55ce8cb658246"],["/archives/page/3/index.html","5533165d8e5c06c1c23e440a798dbebd"],["/archives/page/4/index.html","322ee49b2d51bafafee9ec8132cc194c"],["/archives/page/5/index.html","29e7d508213d9e1b1cb357488b833831"],["/archives/page/6/index.html","7b49923eaeb742dcc456529c0d3fb8f1"],["/archives/page/7/index.html","93a16e793c3ebc339045d87bd1119f28"],["/archives/page/8/index.html","8a7da42cbbbc16ad27c606e317eeee52"],["/bangumis/index.html","ef6ee7faec99faacbd572b831efa4a83"],["/categories/FrontEnd/index.html","34c8c4a00cdb4ae34bdc2e701d78f51d"],["/categories/FrontEnd/page/2/index.html","7c3d4780399769c033502d2ade9881e4"],["/categories/FrontEnd/page/3/index.html","dd8be58e011c485f78ecca7035a7e57d"],["/categories/FrontEnd/page/4/index.html","c83e9985a1797bb422b5b29aacbae795"],["/categories/FrontEnd/page/5/index.html","60cdce56fda1ae3dedc01d56141ab7d6"],["/categories/FrontEnd/page/6/index.html","494efc2cb4ef1a21f972927d405da876"],["/categories/Git/index.html","4123bcad6b9d6c78ce09c0337cb934af"],["/categories/Hexo/index.html","2a9771aa5fa2356f741da1f10efb9c23"],["/categories/Linux/index.html","f253c626c54e4b3515fee3948c77fbcd"],["/categories/Nginx/index.html","4de4eff988d2c02c7e3cf1f45ec49a4d"],["/categories/index.html","7efbc041e4751f25af1922af0c13b0d5"],["/categories/插件工具/index.html","caab8f505a87a6e8bc168d74c8965fe4"],["/categories/移动端/index.html","e5d27544fbf3bb61dfd319300fe50365"],["/collect/index.html","6ade2269724a2e5368b4f45af9b508f6"],["/comments/index.html","5d4b7f2313e20c196b3112912c79cfa7"],["/css/biliBg/autumn/autumn.css","b8e121868310d95fa2f9a5b628c6c6e7"],["/css/biliBg/spring/spring.css","6debb10039fca118ef283899c5f28221"],["/css/biliBg/winter/winter.css","863db380ffc627c4750808d78dae2914"],["/css/commentBarrage.css","acbd16ab7533057dd3a0a38b025aca61"],["/css/customer_butterfly.css","19d78a04401d6e91b7d16def7f29fb32"],["/css/customer_style.css","27d0de35f365d0fa4f9e7a3dd3e11d07"],["/css/essay_page.css","48e31a0b2bf07d2cec1cca750edf7f96"],["/css/iconfont.css","7173144ebe0339c751c88bceb8695696"],["/css/index.css","b2b779e91339c520ba2e7e42655ecf9b"],["/css/lantern.css","83f390852349ce421eff1eb4d6b149bd"],["/css/loading.css","32d51f729c14303eccedcc3783ac4b30"],["/css/nav_menu.css","1b4e42de37f7bc7c237b1b54ec9029ce"],["/css/progress_bar.css","209fa5b2d2f9534bd1c02b82280b14dc"],["/css/rightMenu.css","a5cdb65a825a3f69db1689e18ebe6d06"],["/css/var.css","776ff0a685abbe56e905005f0adac81e"],["/essay/index.html","fb9c37159bb7aacc48ad91fc5aab658f"],["/gallery/index.html","f49026202f5a2149fb17904502087bec"],["/gallery/wallpaper/index.html","b3e550978a11c5c6174cbe8e65b827f7"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","1f9d733298799e51cf27301d841c36b8"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","faad37be6cd7e0bbd6bb788d1cf4a335"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","4e16d9724250080bdc75139236c2d6f7"],["/music/index.html","3d15fc53a6d0cfb7f8bf8424900891b1"],["/page/2/index.html","3958b228965b82a35dccedd8a8a94e85"],["/page/3/index.html","10dd8711a25f5091df6157a9155a0600"],["/page/4/index.html","5a30189289df5dd02e762d3c188c8e8b"],["/page/5/index.html","7e3a8941af4e34f98247bf3354577a42"],["/page/6/index.html","42b6951cd1569ecac2d67270c4fcf301"],["/page/7/index.html","799beba7ad2f9cf87dfd707d2534963f"],["/page/8/index.html","171858125d29bd5d84caca76326ebe73"],["/sw-register.js","4589bba102d747b457e5d2300dafffc3"],["/tags/CSS/index.html","76112c33b2ca858ecfb0f1f97f0c2031"],["/tags/Dart/index.html","67770c3d8fc5ad03ad19a5d6b311669c"],["/tags/ElementUi/index.html","8b42dbcfb698a92594cd27b4a2b69e7a"],["/tags/Flutter/index.html","c3966ddaa1f68c648bba0434a9b4b735"],["/tags/Git/index.html","92261656089fab89cee57e932268bf45"],["/tags/Hexo/index.html","a0ed7761db06b6c952744af00a0553d4"],["/tags/Javascript/index.html","4eb995a34348484d8473820195c86828"],["/tags/Javascript/page/2/index.html","44c2ea97d94708c22b0fde79a72771a6"],["/tags/Linux/index.html","f3cab7e86fb07e8b1d1445a1d0a1083d"],["/tags/Nginx/index.html","bef56b14472caf26ab5078845ddf067b"],["/tags/Node/index.html","2d6cc069494648fa6648276711d0abff"],["/tags/Scss/index.html","45af7bac224c08046f90dd2b30f17589"],["/tags/Vue/index.html","a7ec4320d2a2a304c8df8975a94a5ff3"],["/tags/Vue/page/2/index.html","9bfc679d734ce216ddb95d7cc1a68b3d"],["/tags/Vuepress/index.html","c23ebb6c6c21d983cbe216b5db617426"],["/tags/Webstorm/index.html","0f62b8fcb78e37c13c5da28a76388629"],["/tags/Windows/index.html","e1f88b2106f781b46a74d9619e1e8bd5"],["/tags/index.html","fbfd81945ad861c9e7e82e9136bfe60a"],["/tags/插件工具/index.html","2fed4cc593f84efaa0e3fda482e8107b"],["/tags/问题随录/index.html","eb9fcee76a44550af4d9a0178ef1f9ab"],["/zhheo/random.js","b2871955788cb8e1193d0c7c07f281de"]];
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
