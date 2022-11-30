/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","d36674db9d5f97f8160729f383dd8698"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","2a94320701825097b3d5a2d48c502bba"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","260c7439d8e0fa496ee549ed444398db"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","460bdec62acbe80b862414979af59874"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","eddfb3bc7999b013d4fc4b8bedb72afd"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","fbab5f0617e78cee94863adaefa8b62a"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","010daf74cfe47150e9e21560baa2b2a9"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","385cfb8505654a4f363d828b67e2b137"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","56b235b2baa290aaa93620b719e10a5f"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","f3b38b67b7645f0830b4d332f5a704b5"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","c4dce5593beb8844065e82e3a6067ee2"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","c985d6ddee5a08e447b25ffaaf3bfde7"],["/2022/06/10/tools/webstorm/快捷键/index.html","9712dafd5a0bdb1e8b5fa55ade5e33b6"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","7acd00c94035416cc08da2bc47fe27a1"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","555fa7d160f504d7d130fe055e6c71c6"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","4ba3522964b8f466f57703b89982084c"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","5cd3925591d08b94d809d04aae522631"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","f5b671bcbe892af7b1516d6ad1e6cb03"],["/2022/06/17/vuepress/vuepress搭建/index.html","4b3cf5c76987fd1dad6e69ab9bd892eb"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","2b71abb662fc8505ac7bf4f17ac9b636"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","f1de4062c3a094d135fe5b2dca26a9a3"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","afa66b3e6e1064e9aee53f7355ed3d73"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","c77ea3da869807e02e25a132150cf7be"],["/2022/06/22/inductive/javascript/进制转换/index.html","df4e21bfeadbb52d478a18488bfdf4c3"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","caab767712e187cae838cac176e6138b"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","0ad2e18c652e9cb266d289725b4a1a87"],["/2022/06/23/inductive/scss/Base-level rules/index.html","e7c4b05d7be796d437af427a41d6a527"],["/2022/06/23/inductive/scss/主题切换/index.html","ba2289c336ef8f32c3728676a5f222c6"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","698db2e7b5c42970d2455e9302edc2f3"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","0d82e48a1045d5617d7e6b7e354b5b4d"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","73d6aa666130c9a9bf849589e93e487c"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","172d969a694079b1a8435b1bddb06037"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","b22e496d2b0f5d44d86a7168cdcf54ac"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","f1fc4244c9af729dbbe8b741e312e2fc"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","5b40e98c22bc6d0512c89ab9eeb31092"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","2cea3fa4c4ce8bed0eba53ae1b49972e"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","02b4aa22f2cd87e2a428ed6c7e6cefd6"],["/2022/07/06/tools/nodejs/npkill/index.html","c0513544a509463f23018e81cdca13ae"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","3f32a54fa04badfbad8f92ea3306e6b6"],["/2022/07/07/learning/linux/常用命令/index.html","dd0f78526cf846a3770e3d36697ad532"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","868b8a27e25c1a17591021407aeeb652"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","92e934158dd997e313211c50bb775e22"],["/2022/08/06/tools/nodejs/nrm/index.html","ef178d1a4f40542289d65e94e261c527"],["/2022/08/06/tools/nodejs/nvm/index.html","7adf5169704933d32449f71df8a3431d"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","242eefa432b56904d71704dd88a3551f"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","c6a617374567a8b601aaf0891e96a9c3"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","82c46d48bfcf8e426ddd68cc79633151"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","79085d9ae3111e5c117e044c9a53812c"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","c60f5bc56029a371b89eb8865ab15545"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","370ab50b069b5779c159679c6795129d"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","0a013aaffc6272b91a1404e3bafedfeb"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","340e70b02e4a339d18e99bac4a1ea8ea"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","a051068a1e785a52f0b92cce031362b3"],["/2022/10/19/learning/mobile/flutter/flutter-环境搭建/index.html","c68fc54e877e15ff31b413dfbfa248d9"],["/2022/10/20/learning/mobile/flutter/flutter-常用命令/index.html","190c22ed41d9fc4a4dff2ccb8f04bac1"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","b96ca8bbab4377ad2501052415e454f5"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","d59fa3dd72d85500e63c245ab2cbfd8f"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","e86b6feb0ffc9d81fbcc515f574f7afd"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/browserslistrc浏览器和nodejs版本控制插件/index.html","09accb350ec7e81804b8ae945e45256c"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue-cli3开启Gzip文件压缩/index.html","9b4efae0915d1ac6a0f8599961677b4d"],["/2022/10/25/inductive/webpack/vue-cli 打包插件/vue打包优化分析插件/index.html","74fc9e16b996253570afa9ddb5cef6ff"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","9cd882006566cb291a7ba688aed2368e"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","870dd4426bab141befc79fa38a85151f"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","9df9ed61b5f07affe63000024b8b204c"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","894e14a02838e10a404c1f6d26d6ef8b"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","31381fdf848b76ff5e80c9fc55769314"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","d52c177199a7d4a8f07518f3b3032bf3"],["/404.html","a7649befb2af89ab9b3691ddea9c6ce5"],["/about/index.html","44cfbb8b59c3aee08e4903930b4d079e"],["/archives/2022/05/index.html","4df0b5889146451e9eee3b995447b0c8"],["/archives/2022/06/index.html","01ba87f2e2318c50cb345e4732f6b227"],["/archives/2022/06/page/2/index.html","e4cfe88130031ee97396d0a0e9208e6d"],["/archives/2022/06/page/3/index.html","90492350b93fd47846179c88a00e07c0"],["/archives/2022/07/index.html","f00eef9f5b4b4099d2a58a43f3e6378c"],["/archives/2022/08/index.html","52d171ae118712871c539998305422b7"],["/archives/2022/09/index.html","8c6081e282ffbc5005409c430c0fe772"],["/archives/2022/10/index.html","a706ed8c90b6fb2a9dc81c3bcf9c5a7d"],["/archives/2022/10/page/2/index.html","cb532a1c674e30edca98ec297284149a"],["/archives/2022/11/index.html","03933edc9ebba67ada78f4059579eab9"],["/archives/2022/index.html","8ccfc8e164616ad73c7c041e04e5941e"],["/archives/2022/page/2/index.html","2c203f3ba3bc1a287b8459e6c09f72a0"],["/archives/2022/page/3/index.html","b72d7ac155886bad92d5300faad8f84c"],["/archives/2022/page/4/index.html","9b80558893447b9b55e9b823a6de7965"],["/archives/2022/page/5/index.html","7236deed3714f341032c9afec69dc708"],["/archives/2022/page/6/index.html","b4d4a2911d6e37b07634e07bffb91618"],["/archives/2022/page/7/index.html","cb67ac8bad0462a90a1843a1476dff8f"],["/archives/index.html","1d5cc12566a72ae107e5c6b2db77dc6c"],["/archives/page/2/index.html","03a91f5894d67489895bf632d742b9c2"],["/archives/page/3/index.html","533abde40ec831f2691af19dad593e67"],["/archives/page/4/index.html","9a9824611ed59bb64725e81a3cdac02d"],["/archives/page/5/index.html","a8bcf35310fbbf7b676ea76ea7d7a512"],["/archives/page/6/index.html","f7f319b52be7612e33b806b06356b1d9"],["/archives/page/7/index.html","9d363c8533842b94f770fbb98a4f827a"],["/bangumis/index.html","2f6d7f400d85419ca71746719e7014af"],["/categories/FrontEnd/CSS/index.html","d1220fdf03cbb7d785255554217a3953"],["/categories/FrontEnd/ElementUi/index.html","ab7b1317c9321585c15c69000f395f98"],["/categories/FrontEnd/Javascript/index.html","552f8bf86a1a6bd41e541c627ab5ef00"],["/categories/FrontEnd/Javascript/page/2/index.html","975ce2d5a4fcdbda7fb494ccd41128df"],["/categories/FrontEnd/Node/index.html","ae1aafa0b83b1ebcb123926ae7d319e9"],["/categories/FrontEnd/Scss/index.html","5e280d3374256827abcee438e864a80c"],["/categories/FrontEnd/Vue/index.html","555bf6f7cb1dc95beb076d5a105e2ffc"],["/categories/FrontEnd/Vue/page/2/index.html","096a48c684d911e7359bdb7cf8f20370"],["/categories/FrontEnd/Webpack/index.html","028d6489911a9184c1d76d012ca825e9"],["/categories/FrontEnd/index.html","9a788a7e727c10f04e8d51c30beaa19e"],["/categories/FrontEnd/page/2/index.html","f62002ed28b9eb75fd7ee204a2c34f44"],["/categories/FrontEnd/page/3/index.html","88239d9b7616ac00901981c681a27567"],["/categories/FrontEnd/page/4/index.html","5eaa1576e0d3bfe1ca0e484e85ea3c08"],["/categories/FrontEnd/page/5/index.html","75d0bcfe18e6e8fd4060aa58e02e7ed0"],["/categories/FrontEnd/page/6/index.html","5ee826d807e5d972724a4a8807c87ed7"],["/categories/Git/index.html","450e1388a0cad87262f1f11620e1e73a"],["/categories/Hexo/index.html","edda96c1a6795d862da5ce2ba99048b5"],["/categories/Linux/index.html","f7d9687043f019c4d81ef450aae29b67"],["/categories/Server/index.html","d2191217b38232c779412aa3c643e616"],["/categories/index.html","991dd938283e319b9f4a71c68e4b9b35"],["/categories/插件工具/index.html","b6935cbf7336048f13370f1877bc353d"],["/categories/移动端/index.html","c92ce7e5fff435da9f104bda9827ef5c"],["/collect/index.html","c07c8321bad508f664ab41bdc5fdd0d6"],["/comments/index.html","bc703978a64f1f820719a7b1084c0efe"],["/css/customer_butterfly.css","bf4bb98a3f2bd1eb6899f19ad8b6825d"],["/css/customer_style.css","502e51dabffd1df9cd950b452d0ec3a9"],["/css/index.css","f86ceba681c8070a1d2537afd09a81ce"],["/css/loading.css","9a2d20e88f67a12d6f855afd8679a271"],["/css/nav_menu.css","be2b4091b532bd3eb7de71034df21c01"],["/css/progress_bar.css","f67cafebd24decea8da169c57e2e4e28"],["/css/rightMenu.css","db247e3cd86f3c43e32b56889414249f"],["/css/var.css","2f63dd8293d762bd8e5628bceb5c8772"],["/gallery/index.html","eb21f9d0480eccdd1a3de263ac8cfd1d"],["/gallery/wallpaper/index.html","5256876d0d6a280767fff3f6ee1b5fc2"],["/images/404.gif","7c41308a3a86a896c108210ecd4c489d"],["/images/bg.jpg","484ead92465e3d5a89c88f1c63af46ef"],["/images/cat.jpg","9d70c529acaa1a662cddfd52ecdc6e52"],["/images/favicon.png","067d9828135d5fead4fd27f8a9d47f9b"],["/images/loading.gif","aec17e56d81bab211d235b183f525d3f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","709482d97f553f25c3122d80393effc7"],["/js/anzhiyu.js","b0a927a205cd3d0482b91dafe675217d"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","7b6331903f30755462e658b277f8ce00"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","ca5e7fb1283b4a26c8fbfe2621f79824"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","cb29290e5aebc07949f18b2dcabc0e71"],["/music/index.html","89f87641c1e6db28982eb56fbd097bc4"],["/page/2/index.html","b249f5981b40b1f6249691cedc91c24d"],["/page/3/index.html","ea1a25bb0d8a2d52308f403426203e08"],["/page/4/index.html","98311678b813ad0ca4f0e6c310b04b8a"],["/page/5/index.html","59b16e9656bcfdc2b19088983f047460"],["/page/6/index.html","adde51cadc3a089a7e9636c4fbfe40ef"],["/page/7/index.html","1bc74f0697a5f87c2115b37363ed0d3b"],["/sw-register.js","544ca74fedff1573025ba904e7e638a0"],["/tags/Flutter/index.html","73ec9d0a35e700576eb84d89e7b3a786"],["/tags/Hexo/index.html","318fbc3da476978c72809193f0720e93"],["/tags/JS小知识/index.html","1377aa30fe99c67d0e80a0279b9ebeef"],["/tags/JS小知识/page/2/index.html","7885a83ca5eca295bab0f6b129d0ff5e"],["/tags/Linux/index.html","bf5ff68ce6ce7f2cabf67df8a7e0676c"],["/tags/Node学习路线/index.html","4955920301de401b99064e3eb1abe681"],["/tags/Node小知识/index.html","3ff15f9807838430370c2b3387c4c7c0"],["/tags/css/index.html","c78ecee413bb510dc522dbff1e044013"],["/tags/css小知识/index.html","855ca470c12946317c89425a8ffdc0bd"],["/tags/elementUi/index.html","c25bbda3e08e4f656fd4a303e39ef468"],["/tags/index.html","965f1e74dbf17e09d76df1fa7a33516e"],["/tags/javascript/index.html","f218b948c6232d437554b0a3e2919c1b"],["/tags/javascript/page/2/index.html","48ac3a7966f030f2a3c31805d0149d10"],["/tags/nginx/index.html","095683749c12766b8faafcd06cc82843"],["/tags/nodejs/index.html","f0f5217da917c8ec42a6552102b3fd26"],["/tags/scss/index.html","6f0cbf0dde8c732aa438bf79c644fe13"],["/tags/vue/index.html","f4341145091656af8ac3e701617ebea4"],["/tags/vuepress/index.html","501e18cc763e3466db3e10e6b8e9a050"],["/tags/vue小知识/index.html","0914e7d48a531566c02f2ebd77623f71"],["/tags/vue小知识/page/2/index.html","b752f7f8655fcda772ee2ee67eeef036"],["/tags/webpack/index.html","20fb2061648f6da306fa287a340dbe02"],["/tags/webstorm/index.html","552b6ed8da2722a02811be81320aa893"],["/tags/windows/index.html","06302c72c641175d050562039b0f51c0"],["/tags/插件工具/index.html","be136f6f969fc7f0acac06b1a317cae6"],["/tags/问题随录/index.html","69e900143bf9986b827f34d3046b176d"],["/zhheo/random.js","bec0cb68dabda0016a8aeefe32223e45"]];
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
