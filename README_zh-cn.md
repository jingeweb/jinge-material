# jinge material

> 构建在 jinge 框架上的 Material Design 组件库。

这个项目的很多代码移植自 [vue-material](https://material.io)，但有如下的几点主要改动：

* 调整了目录结构，当用户只是按需使用组件时，可以获得更快的打包速度和开发体验。
* `Icon` 组件默认使用 svg 模式，且支持完整的 5 种主题(Filled, Outlined, Rounded, Two-Tone, Sharp）。同时，图标大小默认和字号大小一致，颜色默认和文字颜色一致。
* `DialogAlert`, `DialogConfirm` 和 `DialogPrompt` 额外支持直接通过调用静态函数展示对话框。 
* `Button` 组件增加了图标和文字混合的模式，并且增加了正在加载状态。
* 主题样式的实现完全重构，参看[此处](https://yuhangge.gitee.io/jinge-material/zh_cn/theme)

## 安装和使用

请参看：[https://yuhangge.gitee.io/jinge-material/](https://yuhangge.gitee.io/jinge-material/)
