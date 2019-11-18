# jinge material

> Material Design UI 组件库的 jinge 框架实现。

这个项目的大部分代码移植自 [vue-material](https://material.io)，但有如下的几点主要改动：

* 调整了目录结构，当用户只是按需使用组件时，可以获得更快的打包速度和开发体验。
* `Icon` 组件默认使用 svg 模式，且支持完整的 5 种主题(Filled, Outlined, Rounded, Two-Tone, Sharp）。同时，图标大小默认和字号大小一致，颜色默认和文字颜色一致。
* `DialogAlert`, `DialogConfirm` 和 `DialogPrompt` 额外支持直接通过调用静态函数展示对话框。 
* `Button` 组件增加了图标和文字混合的模式，并且增加了正在加载状态。

## quick start

可以通过两种方式使用 jinge-material 组件库，源码方式或发布包方式。

### 源码方式

源码方式即直接在项目中使用 jinge-material 的源码，这种方式可以按需加载，是极力推荐的方式。

首先安装组件库。

````bash
npm install --save-dev jinge-material sass-loader node-sass
````

然后在 `webpack.config.js` 中按如下示例添加配置：

````js
module.exports = {
  entry: 'path_to_entry/index.js'
  // TODO: 待完善文档
}
````

接下来在入口文件的最上方，添加引入基础样式的代码：

````js
/* path_to_entry/index.js */

import 'jinge-material/style';

import {
  Component,
  bootstrap
} from 'jinge';

/* your code */

class App extends Component {
  /* your code */
}

bootstrap(App, document.getElementById('root-app'));

````

最后，在任何页面里直接通过组件别名来使用组件：

````html
<md-button>Click</md-button>
````

也可以显式地直接引入组件并使用：

````html
<!-- import { Button } from 'jinge-material'; -->
<Button>Click</Button>
````

### 发布包方式

发布包方式在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 JingeMaterial。

TODO: 完善文档...

# 国际化

js/jinge-material-with-locales.js
js/jinge-material.js
locales/zh_cn.js
locales/en.js
css/jinge-material.css
css/jinge-material-purple.css


## 使用 npm 或 yarn 包

### 项目只使用一种语言

如果只需要支持一种语言，只需要在项目的入口文件里，加入以下的代码：


````js
import zhCN from 'jinge-material/locales/zh_cn';
import {
	setLocale
} from 'jinge-material/_config';

setLocale(zhCN);
````

### 项目使用多种语言

如果需要支持多种语言，建议一次性将项目需要支持的语言资源全部引入。这样做的好处是切换语言时不再需要额外的通过 ajax 加载资源的逻辑，并且 jinge-material 的语言资源的大小也很小不会引入带宽负担。加载的资源可以存放在某个 service 中，比如：

````js
// app/service/locale.js
import zh_cn from 'jinge-material/locale/zh_cn';
import en from 'jinge-material/locale/en';
// ... more locales to import

import {
	setLocale
} from 'jinge-material/_config';

const locales = {
	zh_cn,
	en
	// ... more locales
}

export function setCurrentLocale(localeName) {
	setLocale(locales[localeName]);
}
````

然后将上述的 service 暴露给业务层，比如项目的入口文件设置默认语言，或者在某个按钮的点击事件中切换语言。

````js
// app/entry.js
import { setCurrentLocale } from './service/locale.js';

setCurrentLocale('zh_cn');
````

## 使用浏览器引入的 script

通过浏览器引入 script 的方式使用 jinge-material 时，多语言资源文件需要保证在 `js/jinge-material.min.js` 文件之后执行。语言资源文件会向 `JingeMaterial` 对象的 `locales` 属性字典写入对应的值。然后在业务代码中，只需要使用这个 `locales` 属性，即可得到所有语言资源。

具体来讲，在 html 文件中，用如下的方式加载 script：

````html
<body>
  <script src="jinge-material/dist/js/jinge-material.min.js"></script>
  <script src="jinge-material/dist/locales/zh_cn.min.js"></script>
  <script src="jinge-material/dist/locales/en.min.js"></script>
</body>
````

也可以一次性加载涵盖所有语言资源的包（Gzip 压缩和 CDN 加载后，加载全部语言资源也几乎不影响启动速度）：

````html
<body>
  <script src="jinge-material/dist/js/jinge-material-with-locales.min.js"></script>
</body>
````

然后在业务 js 代码中，用如下的方式配置默认语言（或切换语言）：

````js
import {
	locales,
	setLocale
} from 'jinge-material';

setLocale(locales['zh_cn']);
````

上述代码需要在 webpack.config.js 中配置 externals，让 jinge-material 指向 window.JingeMaterial。

## 补充

通过 npm 或 yarn 包的方式使用 jinge-materail，但又一定要用 ajax 的方式按需加载语言资源，可以有不同的实现方式。其中一种方式是，以文本的形式 fetch 到语言资源的源码，然后通过 `new Function()` 的形式包裹并执行该源码，同时传递一个 `JingeMaterial` 对象给上下文。

````js
import {
	setLocale
} from 'jinge-material/_config';

const locales = {};
const locale = 'zh_cn';
fetch(`jinge-material/dist/locales/${locale}.js`).then(res => res.text()).then(code => {
	new Function('JingeMaterial', code)({
		locales
	});
	setLocale(locales[locale]);
});
````
