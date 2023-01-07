/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/22/tools/windows/tree生成目录树/index.html","f8845ad9e1e0bf7c23ede6268328788c"],["/2022/05/30/inductive/javascript/ArrayBuffer 转 base64/index.html","21705fb566bfe841f26bb31cfa312a53"],["/2022/05/30/inductive/javascript/字符串平铺对象属性转换成树状对象/index.html","03b92c91571bd4213741f6e99c34aa31"],["/2022/05/30/inductive/javascript/手动触发resize事件/index.html","568f7058e3809db742ab8dee8b4856e8"],["/2022/05/30/inductive/javascript/浏览器中的data类型/index.html","95615a539684cf0b8bb0c8608f3546a3"],["/2022/05/30/inductive/vue/vue 动态指令/index.html","90472c111f676d061d8382c70505fc92"],["/2022/05/30/inductive/vue/vue 动态模块导入/index.html","90af58124b31d091edf9e447c759eacc"],["/2022/05/30/learning/frontEnd/vue/MVVM模型/index.html","70096591ff8c94265890ad3a2179b886"],["/2022/05/30/learning/frontEnd/vue/数据代理/index.html","781068600d7dd77ef6381df80ea37b8a"],["/2022/06/10/inductive/elementui/复选框组内文本不显示/index.html","2b6bee2284c33c23815759354981226d"],["/2022/06/10/inductive/javascript/JS中ArrayBuffer、Uint8Array、Blob与文本字符之间的相互转换/index.html","2321f476796ab63132a5954d2be778d6"],["/2022/06/10/inductive/javascript/JS数据容量单位转换/index.html","7ce18f69d0ac433d5b2dbf4625be2674"],["/2022/06/10/tools/webstorm/快捷键/index.html","9c7cf824380e37f877bc35c9d720caf1"],["/2022/06/16/inductive/css/CSS 文本溢出显示省略号/index.html","dbd72493ce73c5ea889c72ecb80ca0a1"],["/2022/06/16/inductive/javascript/FileReader常见的数据转换/index.html","7917d63fe27dc6856e770e944532a156"],["/2022/06/16/inductive/vue/attrs和inheritAttrs/index.html","a6e9219e40742dee687f2a0e31a0ce41"],["/2022/06/17/inductive/nginx/nginx使用reload找不到Pid/index.html","572dc7c1d9aee3271ef623df6bbe1f21"],["/2022/06/17/inductive/nginx/非根路径部署vue/index.html","413b744dd71a7a39febd03b23f641316"],["/2022/06/17/vuepress/vuepress搭建/index.html","3fbfd203b7acd889adc8b6c3dbf5b309"],["/2022/06/22/inductive/git/使用Git的Push出现rejected/index.html","fe8ddeee0d2331d0cd588d43e974d10c"],["/2022/06/22/inductive/git/电脑死机后引发的各种报错/index.html","cf4c6cd2cbf42fb58d321a23028f767c"],["/2022/06/22/inductive/javascript/伪数组转为真数组/index.html","eee43954bf08f49cc5f0e89271416333"],["/2022/06/22/inductive/javascript/数值千分位转换/index.html","792287c30b8167a3a781557e83992899"],["/2022/06/22/inductive/javascript/进制转换/index.html","e15ff0ff95a4ccad0c29ef2f2df758c0"],["/2022/06/22/inductive/nginx/多个项目部署/index.html","58e95ca7cd09c714e9c4032a214ef1ae"],["/2022/06/22/inductive/vue/处理Vue异常的方式/index.html","64a34aa9bad6a72c70c5046942f591ec"],["/2022/06/23/inductive/scss/Base-level rules/index.html","b04dc0e1fc8b7a35f9a67f0c7889a428"],["/2022/06/23/inductive/scss/主题切换/index.html","5770175498d71eb1932017c14a04983b"],["/2022/06/28/inductive/vue/vue 九种性能优化/index.html","28dc0fd4dc8d91a129061e5116a4790b"],["/2022/06/30/inductive/css/CSS 知识拓扑图/index.html","b343ba6487449cbacd418dfb414deb24"],["/2022/06/30/inductive/css/CSS 选择器及其优先级/index.html","f0a762493db2965f97883b53b3de1f52"],["/2022/06/30/inductive/css/CSS 隐藏元素的方法/index.html","78e36a34c5836eaef7eca5b3290f0cbe"],["/2022/06/30/inductive/css/display 的属性值及其作用/index.html","ae595578561064cd5ca71adc45b42a76"],["/2022/06/30/inductive/javascript/判断元素是否到达可视区域/index.html","bed913822c4a934d1dfa48570dd5497c"],["/2022/07/04/inductive/javascript/数组校验重复项/index.html","ef4b03acf38438add10ee3b8060c0f3e"],["/2022/07/04/inductive/vue/vue 首屏优化/index.html","813744b6f9940eb70dfa14c28edbb44a"],["/2022/07/05/vuepress/vuepress-sidebar配置/index.html","d56274b710aa273054cd92cc749e6ebd"],["/2022/07/06/tools/nodejs/npkill/index.html","04650e6c3c046bd6365cf101069abe60"],["/2022/07/07/inductive/javascript/常用的工具函数/index.html","9079f9fe22a9fc64a063a5b80c6d2963"],["/2022/07/07/learning/linux/常用命令/index.html","a4befa330cc6f317ded96484d096c798"],["/2022/07/19/inductive/vue/browserslistrc浏览器和nodejs版本控制插件/index.html","647d5bd2087d80071b71bd4a02ec8c2c"],["/2022/07/19/inductive/vue/vue-cli3开启Gzip文件压缩/index.html","ca24c142e9073993b310bda12988e62c"],["/2022/07/19/inductive/vue/vue打包优化分析插件/index.html","7f72cc2463fc75a2a92619b3f2fa8950"],["/2022/08/06/inductive/nodejs/nrm 查看不了当前使用的源/index.html","a72f8855e5395c97cd2e06819c192d9d"],["/2022/08/06/inductive/nodejs/设置仓库地址/index.html","d9826011248c5f9e872fb7323145878b"],["/2022/08/06/tools/nodejs/nrm/index.html","84b56d7381d0252a456b5c05c7b7e210"],["/2022/08/06/tools/nodejs/nvm/index.html","da49cae08fb0a7c1dd7a47730433adea"],["/2022/08/07/learning/frontEnd/node/node环境搭建/index.html","df65bca87b00f1c0bb6c11332343d4b7"],["/2022/09/01/inductive/elementui/el-table toggleRowSelection无效/index.html","c895890188b727b5f723c6c0d8f36bf3"],["/2022/09/03/inductive/elementui/this-msgBox内部使用自定义h函数无法双向绑定问题/index.html","4dae7b0219fb23723ac855bf6cee827c"],["/2022/09/04/inductive/elementui/el-row-和-el-col-导致布局错乱问题/index.html","2b4590060b47d880f14e079690576960"],["/2022/09/04/inductive/vue/监听vuex数据变化/index.html","edec3daa99462b0e891f874b97fbfc67"],["/2022/09/16/inductive/vue/vue国际化方案/index.html","657aec8c38eb94111fe4d7348911b8e6"],["/2022/09/17/inductive/javascript/JS数据流转换/index.html","1dbf53afa70323edb2760fe030a19659"],["/2022/10/09/inductive/css/CSS 固定定位设置相对元素/index.html","641d1b8d5ded54cd5c39ab824571a296"],["/2022/10/13/inductive/css/CSS隐藏滚动条/index.html","e134def981c836851b4c051d7f2e177a"],["/2022/10/19/learning/mobile/flutter/flutter_环境搭建/index.html","d03b995654570ac0276b3d5732bdc919"],["/2022/10/20/learning/mobile/flutter/flutter_常用命令/index.html","eb89e05ab146737d5268c37ecb5c7fa8"],["/2022/10/24/tools/Android-Studio/Android-Studio-模拟器提示问题/index.html","204d4327b74f5f14b0ac42d01c45c358"],["/2022/10/24/tools/vscode/vscode-常用快捷键/index.html","979268f25fe7820aa606a788b4fb26f1"],["/2022/10/25/hexo/hexo-githubPages配置自定义域名/index.html","b20e40c316636c9b73afec41f8ec53d6"],["/2022/10/31/inductive/vue/vue-cli3-打包内存溢出/index.html","f188ba3959954a8a84122f887bce4d4c"],["/2022/11/13/inductive/javascript/JS中常用的正则表达式/index.html","4a182149a2b6bb7a78599612398402af"],["/2022/11/24/inductive/vue/axios请求数据后端接受参数结尾带有等号/index.html","6a2302f2335d54fe5173e243d4570d00"],["/2022/11/24/inductive/vue/vue强制刷新子组件/index.html","32e788c97bcf613c1a9b6dad377d1041"],["/2022/11/28/inductive/javascript/js空格字符引起的问题/index.html","03cecbda09ea163ae4e88612dce790da"],["/2022/11/29/inductive/vue/vue 中不用插件通过文件流预览pdf方案/index.html","5777dac78d81b1ac81dd8f4e5d26e902"],["/2022/12/13/learning/mobile/dart/dart-入门/index.html","762e4981757b4a70ca08a9128240fc5d"],["/2022/12/13/learning/mobile/dart/dart-环境搭建/index.html","dfac3df1400765f8be4389467ab32213"],["/2022/12/13/learning/mobile/flutter/flutter_入门/index.html","949523e36c47e926c7de2be25afb3a8d"],["/2022/12/21/learning/mobile/dart/dart-进阶/index.html","bad9ea6495c5ab6b67057e6fb9d61e50"],["/2022/12/26/learning/mobile/flutter/flutter_组件/index.html","7ec467fe921e3a6818832732a4769e6a"],["/2023/01/01/learning/mobile/flutter/Flutter-路由_状态_动画/index.html","0529a23741054b8eee76ff7a14ce4fca"],["/404.html","7a7a1c91be4cdf40974a6abb076632d9"],["/about/index.html","40ee91fbcdc338794817991a1d060254"],["/air-conditioner/index.html","942eb6ee968aeb38e73e1e3227d9d2b0"],["/archives/2022/05/index.html","91e171027c0e0309ee2636bace15e584"],["/archives/2022/06/index.html","979684cc717bf433bbc5be39fb16e79f"],["/archives/2022/06/page/2/index.html","ace619423bc55ca961729fdad0818fff"],["/archives/2022/06/page/3/index.html","9d43b4947bf88298295e3b21641e0770"],["/archives/2022/07/index.html","792ffb694ba2635adee33c6efa9c9673"],["/archives/2022/08/index.html","6960a8465c9ea553d67c1811d5caab47"],["/archives/2022/09/index.html","f9583f7eccab5255daf067910e220010"],["/archives/2022/10/index.html","f79bddab007c3346452f42abc4cef3fc"],["/archives/2022/11/index.html","171dc4d36602350fd6722369000fa2ce"],["/archives/2022/12/index.html","6b0f558296581b22d3bb6aa7ee152e18"],["/archives/2022/index.html","2813f4e01e5b77aa45489027a52c2343"],["/archives/2022/page/2/index.html","9ddeed89cde2d1f9fe26d5f9bf02e701"],["/archives/2022/page/3/index.html","3493d75e1574a8ae088886c7e6555a6a"],["/archives/2022/page/4/index.html","6f43a5b8c8cd9e9a0b9a61ffc22cce47"],["/archives/2022/page/5/index.html","8b2ecf925fde973a5e05e63f49ea09a7"],["/archives/2022/page/6/index.html","1fe4c41685d93c82a52a3dca199a8255"],["/archives/2022/page/7/index.html","e8e7c4f11e89a83e31a2215f6cbd4c79"],["/archives/2022/page/8/index.html","df8f1f9977c7cef608c70a3719edd9df"],["/archives/2023/01/index.html","2e1c7e69697722d88c9833854b527f80"],["/archives/2023/index.html","196361edae5bd8859a5963a27d865e59"],["/archives/index.html","d1435d6e433299988ee0881694d227e2"],["/archives/page/2/index.html","6428a2df5856bfad5d6b62aeedb9965c"],["/archives/page/3/index.html","1a1fe02a3ce106bf806d4442d1ffe166"],["/archives/page/4/index.html","244ead89b3ebc41cfb0b6c2bdd0aa11d"],["/archives/page/5/index.html","01b61ebea3c96317ee3fd92eca4749b0"],["/archives/page/6/index.html","b20e038b9b06ed249f0f2253140536d8"],["/archives/page/7/index.html","fa6676644deaa164c6e20973504fdf36"],["/archives/page/8/index.html","a8db1686c5edfcdff1a05d4c2f1e39fe"],["/bangumis/index.html","310dc2de256d9c2c8bf128b277eb9d4b"],["/categories/FrontEnd/index.html","546bec25b45838de9531e4550e48b577"],["/categories/FrontEnd/page/2/index.html","48ee252f42f33cb23eb6f98aa1451b77"],["/categories/FrontEnd/page/3/index.html","6070066826e4f3040cfe12959e055afa"],["/categories/FrontEnd/page/4/index.html","9bae68aba452eb4188149fc5bfd009dd"],["/categories/FrontEnd/page/5/index.html","2960fb67ae07d78e6fadd7660ef9bb59"],["/categories/FrontEnd/page/6/index.html","2c17d7c7e9c64e670d3a6a4c94bcfc7a"],["/categories/Git/index.html","180644aecfaa95e5d15cd0718c30200f"],["/categories/Hexo/index.html","512fcb5ed2d82c2e3b91da3bffee3e11"],["/categories/Linux/index.html","95a68e57748bbce873ba4db9e5ce958c"],["/categories/Nginx/index.html","299fb4f4aa359203e7b9a1b483824c87"],["/categories/index.html","114879d04b45efee464fa96d42a68768"],["/categories/插件工具/index.html","4186ba42583e80c0d769542f1e3c2a11"],["/categories/移动端/index.html","2fc8e35eb894f6b85bbdf252dfd10107"],["/collect/index.html","63370f7b2e3c1f8436a9372ce4d4ed0b"],["/comments/index.html","9d51955e3029d1f7378cfa5a78f80167"],["/css/biliBg/autumn/autumn.css","68969a034d83aaa443d3d13b5cf3630d"],["/css/biliBg/spring/spring.css","9ab9f00208501cc6b57b73dad966c657"],["/css/biliBg/winter/winter.css","27b9d5279ec560ec09cc7999358c6ff3"],["/css/commentBarrage.css","1cf5dadae718d2fb1b089f60a65639b0"],["/css/customer_butterfly.css","b89ab563e93b0513551a988a8914ef90"],["/css/customer_style.css","0d07d47b05994bf2726b6a780f39fc8e"],["/css/essay_page.css","77deea03feb5f2ec35031a1794d7c6a8"],["/css/iconfont.css","c7154da8cc69088115e130121a562f87"],["/css/index.css","142fecc7abbac9207b290f3a67bebc15"],["/css/lantern.css","17e20cd3d2b8b1389d2f264d2d3e3a82"],["/css/loading.css","dc24961e8ee6c93d0e51735e1e0bb9b2"],["/css/nav_menu.css","aad0d0e6bd7c61524ec6f895c19d7b6a"],["/css/progress_bar.css","11caf11884dd255b5398c45add98a1b1"],["/css/rightMenu.css","5cd1a706ba54536105fa084a349d3806"],["/css/var.css","ccb17fc1d432b745503754654ccc67b1"],["/essay/index.html","8c96915b2db199a0e00422946fb6c32c"],["/gallery/index.html","549ec0d82c00e7bd5b0b874d0965ba83"],["/gallery/wallpaper/index.html","5b055a599e5c72c70077f610504e9139"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.svg","11a81b03c7de9e720e6cd95e3e0df1d9"],["/index.html","ba2a98f7005c25b0a2a850013509351c"],["/js/anzhiyu.js","68ec8f1f03eaecce069d55ddb72b82d9"],["/js/anzhiyufunction.js","8753faf60af1c5bb4838e0c7c25aeafc"],["/js/biliBg/biliBg.js","e8cc2da3b4f54d98b992a19793d322f3"],["/js/commentBarrage.js","f0c0730cd2cf9a1a89decd7363511a08"],["/js/countup.js","222abd37e8643766471e7d57b81cae70"],["/js/custom.js","113fcc0dd9089c8da291c2c97fb328d3"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/meting.js","a31b741e06dbba12cc3f1592cda2623c"],["/js/rightMenu.js","3e0d93c29bad2846aa8e5743b0243f1e"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/snow.js","0973d6ead8056a7007a4d731889597fc"],["/js/sun_moon.js","9cdab4dac0b5b55702febd222ee9f2ff"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/waterfall/waterfall.js","64552934d9d214e4df2e43631730dfb8"],["/link/index.html","57bb4cb252db8e222097b751bd72a6df"],["/music/index.html","aec4c6563aa0254dc255e75d62f64467"],["/page/2/index.html","486776e9a562b00614b14a6b6c503ae2"],["/page/3/index.html","a9c9de4eccaf7884289e0f22b2b176bc"],["/page/4/index.html","fa9b7ccb92ec17fa2d0b41f6932a849f"],["/page/5/index.html","2633cea764c354144d1664f603a86d4c"],["/page/6/index.html","e7e2e69a4ee70322fc9d69595136da85"],["/page/7/index.html","8dbf2dedfbec74a3daddf49f1729cabf"],["/page/8/index.html","d1b820367d11d83217f50938adabee73"],["/sw-register.js","90e2110945300f1c6085ddc7c4bbe551"],["/tags/CSS/index.html","feca3c5c5a14679dde18519904c4a3c6"],["/tags/Dart/index.html","09baf7dbccab7578c97651fd4dcce939"],["/tags/ElementUi/index.html","1da5e63992b035d1a4a39646273a9bd0"],["/tags/Flutter/index.html","a1d6be72db0035a54635b302405c2499"],["/tags/Git/index.html","46bd972de456f80c6dedf5130ebc3ec0"],["/tags/Hexo/index.html","eff6b24c8a51dcca45af314867f42545"],["/tags/Javascript/index.html","5177d86592b58e1c801c26d568399375"],["/tags/Javascript/page/2/index.html","b23cd8d38034e5c8888578876c4df85b"],["/tags/Linux/index.html","e8d86edd70e15120b0315b16e5ee0a1c"],["/tags/Nginx/index.html","2bc99690a2525b5cb7d8ac8c48d782d2"],["/tags/Node/index.html","e57031cf5c9f33c738777449dd17711d"],["/tags/Scss/index.html","282f1a1d97ff9cdd6130aae56af17dc1"],["/tags/Vue/index.html","6a9325c8fd64232415b85df8436bf576"],["/tags/Vue/page/2/index.html","8ac981ec7e3ea732c8545c165121c3ce"],["/tags/Vuepress/index.html","8155d3a80f9d621617284c7e40822dec"],["/tags/Webstorm/index.html","a5fb261678ca3b4bf115e305a0b145d5"],["/tags/Windows/index.html","5444dbb5ef5520040a8f987005cb74f5"],["/tags/index.html","1b0a443154669cc86e6ed2b57130b3e5"],["/tags/插件工具/index.html","7cda8df02690e0fbf6ce2811c035955b"],["/tags/问题随录/index.html","b00a4a8015909b0c779e22fd37205bcb"],["/zhheo/random.js","1fe39c10dd2f57ddf70e5c88ba8de69b"]];
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
