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