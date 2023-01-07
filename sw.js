/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","7f746310d589f6a1cccdcc9500f36893"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","f5b1c7dc5966cd9e65c926032f4d949b"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","2f9b1cf0aad14c879d91eab958f0a4be"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","04480ca7979ed63a6fe1541a58ba7e92"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","a3f8fa0fdc62e87e66068d4d07d97256"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","3c56fe165206bfbd37b2393415fc70e5"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","fb6057ad38fea473b18817e36aef65c3"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","79ec69e4d409d06fa895f56abbf85c7c"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","12391bc0517bbb020c94c52423eb504f"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","e2a746d583911aa7d1b9e4e667bf0524"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","be27d27afcec0d76e514b4b44ddac50b"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","8a6fd7240c533f1d82be5e57ffd7a558"],["/2022/06/10/tools/webstorm/快捷键/index.html","7a582e7c701e1b2adda36c24e5028617"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","20ebb42f3a8440712fb03bf4e5993f7d"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","d7e78af1f778520452bd43c06d13fa82"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","e32dcc6f88a7fb16229d882fe6722abf"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","9e41268d4247fe58455d884b3f22a427"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","111e81537a655f423407cd6ccd364708"],["/2022/06/17/vuepress/vuepress搭建/index.html","5941d9c725aeb6b4ece9a90f67f9421d"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","d1177f6b20d65db4e06eae763faa8c68"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","ffefba5bdfe613544e644e545b8e1e0d"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","10bd760a8fd3b2086a33d418c4510867"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","a7a9117afb8bd35770c9b7d3210749b0"],["/2022/06/22/inductive/javascript/进制转换/index.html","3f17d257bdd82048983fbbdcd4aa2707"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","4f2c30e32b3942c39e3132a43d259ed8"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","942045e9ea3aff3d44a47df6f7890a55"],["/2022/06/23/inductive/scss/Base-level rules/index.html","2463fd9ab66da7c545915fd323c706aa"],["/2022/06/23/inductive/scss/主题切换/index.html","4f8b3489e321286d3c22024297140406"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","75a962f692f6e4eb9b3eac4bd83c680c"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","9d88dc727ac3d6379c99e3c35639526c"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","217dc2f716a3fdc5a8d050347b454dea"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","e49c713233f02cf1c25da73927bbcce1"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","696d4b5153f0573bf17a54077ddf62db"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","867a8de65c70d00c0edce81ce914fb92"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","6e7e599218a259e04691bc00ce88af02"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","b56a015c8edd270c0c40cd7c2d115a83"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","ddafae1d310acef68b601880baf24a4d"],["/2022/07/06/tools/nodejs/npkill/index.html","4a4e8f8c9ace5246c4588346b21d52c1"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","d8b27699a66508d263c7857e0dcb2e18"],["/2022/07/07/learning/linux/常用命令/index.html","db1561f7dc531becfb89716e4e3e7342"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","e8c9abc410c3c32dc71004e340f564db"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","f19e7c8e5ceb269aa8d2f0df7b8a44b1"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","69240196f0c909bca5b20327626ab31d"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","744e05be6e21ecef04415e1bb54c74e6"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","1bb3d70cd25755a0d7e62f4d35c7d3be"],["/2022/08/06/tools/nodejs/nrm/index.html","25b1714e2516eaa615e9d2e9a1e18a25"],["/2022/08/06/tools/nodejs/nvm/index.html","0c2c47b33e9e56bfee769093841000a0"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","bad3cc6af65e950c79d68ede98b0a527"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","c7b5928920449bbcc8597cd39fc4d910"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","4969a608189190a59d09c9868ef429df"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","3b543455337c9aa7eace8544795a2186"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","d66deccdfd3446262414c039b1cbc218"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","2089be920f0a1d437c7af292b0ae7c56"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","24dc40db872141597d7a533e78ae54e9"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","d56e9e3293f9348934ccca4d5524bdf9"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","9d3ceeb0023de93eca177e0b3c4e8630"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","2637aabf8c497ceefe3e0523fbb12a29"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","db0b4a19d1cd1ecc6b1abe807913f7a5"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","8626632d0aba442fdfab4e7d28f22f48"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","a7d2536d803b979ae61029dec96108eb"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","9098a81d3214298ce33370bc10d4632a"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","42325e344270c1216c75b2a6978261d8"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","018c25e713d8aa8a37e88fbd79526564"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","b589418dc9608ea414028a50c80c7599"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","87806403f8b5bd4e1b469c99faf1e599"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","70cebb8ed3c2f74eec3e55b9a5e9a27e"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","db24c6caafbb93b3c113d9c846b8a619"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","b8916903366986c1c14482c5d5c65686"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","a6939d41e3225454438ad0af9c3ec389"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","efc0c097d8d00080f70b19fab1aff497"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","83e0ca686829081dc21b0994c3c346ae"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","ba054af2f0af5c81ac9bbafa454e1a9a"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","9dafac76549d93ff425230b3d7838424"],["/404.html","8af4e9083087276723fab4e9528472e6"],["/about/index.html","46b8c86eac088e4eceed72f85b4b899e"],["/air-conditioner/index.html","a6daaa2ecb28e1226506d3e0d5c54f72"],["/archives/2022/05/index.html","64a4307ebdc3436bde010e6c160cf0e4"],["/archives/2022/06/index.html","13817049d1a6045740af5867a6e04bc5"],["/archives/2022/06/page/2/index.html","872f0cd2b820ae03cfec58087f1038aa"],["/archives/2022/06/page/3/index.html","b5ef78750a207406b84afe4cae17a211"],["/archives/2022/07/index.html","9b1a3ce2a9c58e2b9138c8e25631eb23"],["/archives/2022/08/index.html","dde8b15295c0b80346a053af2887af5b"],["/archives/2022/09/index.html","e30357fb7b8360a21eed6ea28f8ca9d9"],["/archives/2022/10/index.html","1e890f250dbe1f032fc269a3ee65f892"],["/archives/2022/11/index.html","d9aac411a144324d8c7eee7a587728e6"],["/archives/2022/12/index.html","e16e8040df0155075a17d260c3428b91"],["/archives/2022/index.html","9da567effc6cc6facf0360ee4f575ab5"],["/archives/2022/page/2/index.html","545d5e1edf3071aa88f0b23aae5f3749"],["/archives/2022/page/3/index.html","4c34a8c09d713d82d528ea6521c08946"],["/archives/2022/page/4/index.html","e5543127d6b6ffdc6f513020ca7e7bde"],["/archives/2022/page/5/index.html","02215deb7e2b604557033405cee88b60"],["/archives/2022/page/6/index.html","62699446839446550d7fc24a30bac4f2"],["/archives/2022/page/7/index.html","df3950eae479497a88410b1f584856d9"],["/archives/2022/page/8/index.html","4463fd42b2a5afb8294cec9575c06144"],["/archives/2023/01/index.html","ba14eb28e334fe53186302448b5a25bb"],["/archives/2023/index.html","24d1ae1e0dae15579a16bf6bfb7f7cc2"],["/archives/index.html","2aaf949ea3e074dd2d6f9ffeb5ff5535"],["/archives/page/2/index.html","e46fae2c55d9842babb3b4ddb79636aa"],["/archives/page/3/index.html","6abf27efe9b24da9d02141e01110a4c5"],["/archives/page/4/index.html","0ddf4089d9752c67e5b2ccfbde939e6c"],["/archives/page/5/index.html","b5d0948a174b52bac56c6842895700f2"],["/archives/page/6/index.html","9c60f21f3ba1886586e8d43398d7442b"],["/archives/page/7/index.html","9b0861770159310a59d523e077e0d879"],["/archives/page/8/index.html","22cbef13086e2192c4446bc8504d03b1"],["/bangumis/index.html","fa19a6edee0de697cf4157f4122d9199"],["/categories/FrontEnd/index.html","36599b1c59e520009c308d20d40d3e12"],["/categories/FrontEnd/page/2/index.html","1603494983272a57dbbf10d5bffd8c33"],["/categories/FrontEnd/page/3/index.html","13adcf0f00f627abddb501cb25607846"],["/categories/FrontEnd/page/4/index.html","224d2c2f8c4584c5298b78fb16ed0f10"],["/categories/FrontEnd/page/5/index.html","95a25b1a342d0e45b42a1f47ca0a0118"],["/categories/FrontEnd/page/6/index.html","ac291b566e9e2576b9cc689dc17c13f2"],["/categories/Git/index.html","a6f4fce2813f93074e644f6c94b3ed15"],["/categories/Hexo/index.html","7a93352f6d6589eadcd76db4b8febf8c"],["/categories/Linux/index.html","9b23ce4ff26918775d8005a91424e443"],["/categories/Nginx/index.html","3eb163635ad0cb4a37ededcda6f70a92"],["/categories/index.html","00a9f6db4d8a675acc0952dc9044f2a4"],["/categories/插件工具/index.html","8d6dec2f6098ef83d0d6d98f737c1a8f"],["/categories/移动端/index.html","6f7c65cf38a9f316a2b432cc8b76b493"],["/collect/index.html","7f42733fdfbebf3c6ce8b44b5e84d4f7"],["/comments/index.html","50e9d96950a1cbe57505dc2f7d7277bc"],["/css/biliBg/autumn/autumn.css","cd808815a2aba403b393a731cb8f30ad"],["/css/biliBg/spring/spring.css","2dc20dad45dbc299354f8d420ba6bbd7"],["/css/biliBg/winter/winter.css","55d97cc6a57b26a12b44709989464023"],["/css/commentBarrage.css","1aef415e4c87508797f435b45bd4a5eb"],["/css/customer_butterfly.css","3827950f98fc39ec900ab7db4803ae94"],["/css/customer_style.css","ec49174a88b3d56facddc7646757e39c"],["/css/essay_page.css","4ae2172d25b895961bcccb00315875c2"],["/css/iconfont.css","50324204c375dc221c7120f06a2463ee"],["/css/index.css","8f94d076efec63183ab583d767d162db"],["/css/lantern.css","9bf36ffa117ba45480f0a3826a4f749c"],["/css/loading.css","eb7f317ce9543511877bd8c93b3da868"],["/css/nav_menu.css","b9420e5ab3874f436e61a097e6b998b8"],["/css/progress_bar.css","1d6ddbffa54cadc4af0eba8983759281"],["/css/rightMenu.css","d4829bf34b524c933ed9a0e31c2b8105"],["/css/var.css","ad66fa2b6510a59901b3406b1ce068b4"],["/essay/index.html","6eafb631d00912e5f4a27055aa675546"],["/gallery/index.html","d7ef2d6bf33201316f7011e498509b0e"],["/gallery/wallpaper/index.html","d6ff9b9e5dc8fd946c46dc8d1b3e57f5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","7079db368d1556e0cb724ecf18547da4"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","3e0d93c29bad2846aa8e5743b0243f1e"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","47188c054f71658e4ceebef284d21391"],["/music/index.html","5fe882ba38bdcdfe42a6969552758592"],["/page/2/index.html","78630fe64a4686126ce3fbe83c8157d8"],["/page/3/index.html","23c530a567b5d6f865af759693f22979"],["/page/4/index.html","7d032e2d3f7f9c149ed486e6454da14c"],["/page/5/index.html","90f97a2ef8f23d2295f3bde1cfa6c4df"],["/page/6/index.html","03907beae1736caa8f405a897cc5e161"],["/page/7/index.html","ae86701a6fffd4cf8677febb009895e2"],["/page/8/index.html","ee4819f92089108e8426d8dc44e3c259"],["/sw-register.js","e11810c2426a01d9a8bbafe247b13a2b"],["/tags/CSS/index.html","458933a2e4ba9b454d2aeed1787188e3"],["/tags/Dart/index.html","32277b9a4029bee490d143d413b62369"],["/tags/ElementUi/index.html","bcb6b9881e0e9dc2783c224c2f8724df"],["/tags/Flutter/index.html","64fa05b27b1c6d741af6b8c9bfb9fda1"],["/tags/Git/index.html","7738ea7e611e8a926f10fcbbd15d6a57"],["/tags/Hexo/index.html","14eabd5811120b7a0ecd784449f28f97"],["/tags/Javascript/index.html","b9da5e8c8898a7946e3dfa8b60a52740"],["/tags/Javascript/page/2/index.html","71595d932d5c54dbeddabaac39f50c0b"],["/tags/Linux/index.html","068073b56af5432fb295985030af96a4"],["/tags/Nginx/index.html","7f386950c34d33e0a7edd9e0573c79e4"],["/tags/Node/index.html","445c00bc79ac406a72ea418dce1c6f27"],["/tags/Scss/index.html","b3f4e15d851875441483d8755133e8c2"],["/tags/Vue/index.html","46405f40bcd81e497ef5d4d32090660a"],["/tags/Vue/page/2/index.html","07ad94b7d825c6f2ab7a1c0135a42e08"],["/tags/Vuepress/index.html","ae5575c4265f3fbab87d086cf3bd881d"],["/tags/Webstorm/index.html","392a1235282f1883db81d1cfbca9502f"],["/tags/Windows/index.html","bf1ad10bdbc307970e58db8fff9b96f2"],["/tags/index.html","7bc1a592b6f18a8d9ef1b82cb4c4b5a6"],["/tags/插件工具/index.html","549952e206b95c6280f90c16fec1ea44"],["/tags/问题随录/index.html","3d87efd1a29099d8a3614cd1cf525eb9"],["/zhheo/random.js","082cc3e52532ba5d02460f5a4157dea7"]];
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
