<!--0-->
# 介绍

## z3 是什么

z3（读音 /ziðsan/）是一套开放的HTML5 **快速开发框架**。拥有它，你将可以从容的应付各种开发需求。z3包括3个主要部分 ``模板``、``cli工具``和``component``。与其他开发框架不同，z3并不限定你所使用的技术方案，你可以选择vue、react或者angular来构建你的应用，只要你或者别的开发者在模板库中已经上传了相应的开发模板。cli工具正是为管理这些模板而生，它同时用于管理component组件。正如你所看到的，当模板库和组件库越来越丰富的时候，前端开发将变得更加的轻松和愉快。

z3 官方提供了``vue-smarty``和``vue-static``两个公共模板，它们都是基于vue2.0和fis3构建的，关于更多模板的内容，请移步[这里](http://www.baifubao.com)。

z3 component里包含了常用的js开发组件，如loading、dialog等，同时也提供了一套完整的css基础库。这些组件都符合钱包视觉规范标准，并经过了一些实际项目的洗礼，你可以放心的在项目中使用它们。


## 起步

<p class="tip">官方指南假设你已有 es6、fis3 和 vue 中级前端知识。如果你是全新的前端开发者，使用z3框架将会对你造成一定的困惑，--最好掌握基本知识再来！之前的其他框架经验是有帮助的，但不是必需的。</p>

首先，你需要安装z3 cli工具：

``` bash
# 全局安装z3
$ npm install z3 -g
```

接着，使用z3初始化项目，这个项目可以是一个新的git或者svn模块：
``` bash
# 进入到项目根目录
$ cd my-project
# 使用vue-static初始化项目
$ z3 init vue-static
```
<div class="demo">Get template: [ vue-static ] success!</div>

我们已经生成了我们的第一个 z3 应用！看起来这跟其他脚手架工具没什么不同，但是 z3 在背后做了大量工作。或者说z3已经帮你生成好了一些套路化的代码，这些代码将会逐步引导你构建出一个完整的应用。

现在让我们来启动这个工程：
``` bash
# 使用fis3 server 启动一个node服务
$ fis3 server start --type=node
# ~/workspace/my-project
# 发布
$ fis3 release -wL
```

打开浏览器，访问 http://127.0.0.1:8080/page/ 现在我们的项目已经可以正常访问了。

## 如何添加模板

上面的例子中，我们使用了 **vue-static** 模板，这是一个纯静态模板，并且依赖了vue.js。那么，能否选择其他模板呢？答案是：**Yes**。目前为止，z3 cli工具仅仅充当了一个下载工具的作用。真正的模板都放在了[这里](http://gitlab.baidu.com/z3/z3-warehouse)，在``templates``目录下，保存了z3的所有可用模板。我们欢迎并且鼓励你将自己的模板提交到这个仓库中，以便让更多的人使用它。

## 使用组件

component在z3中被定义成 **可复用组件** 的概念，它的原理与模板类似。让我们以dialog为例，演示组件的使用方式：
``` bash
# ~/workspace/my-project
z3 install dialog
```

安装完毕，此时，你会发现项目根目录下多出了一个component目录，它就是我们存放组件的地方，让我们来使用dialog：

``` js
/**
 * main.es
 */
// 引入dialog组件
import dialog from '/component/dialog/dialog.es';
// your code...
// 使用dialog
dialog.alert('我是一个弹窗组件');
```
<img src="/z3/images/dialog_01.png" width="320px">

<p class="tip">vue-static 模板默认处理了es6语法，并依照commonjs规范转化了所有组件，因此，如果你想脱离z3模板单独使用组件，请确保你对组件进行了合理的转换。</p>
