<!--1-->
# cli 工具

## 工具介绍

z3 cli 脚手架工具用于安装和管理z3的模板和组件，它不是代码的缔造者，而是代码的搬运工。
``` bash
# 全局安装z3
$ npm install z3 -g
```

z3 目前提供了3个命令 **z3 init**、**z3 install** 和 **z3 list**

## z3 init

``z3 init`` 命令用于初始化项目，它将远程的模板代码复制到的本地开发目录。所有官方维护的模板库都放在了[这里](http://gitlab.baidu.com/z3/z3-warehouse) ，如果你想要贡献出自己的模板库，也建议你将代码提交到这里。再次声明，模板库仅仅是项目开发中的"骨架"，也就是每个项目都不得不有的套路代码，它本身与技术选型无关，虽然官方提供的模板都是基于Vue构建的，但是我们非常鼓励你贡献出基于React或者是Angular的模板库。

如果你对Vue非常熟悉，并且刚好要开始一个新的项目，那么不妨尝试使用``vue-static``模板：
```shell
# my-project 目录是你的项目根目录
# 它最好是一个空目录（除了版本控制工具自己的仓库和项目相关的配置文件）

$ cd my-project
$ z3 init vue-static
```

执行``tree``命令，你将看到框架代码已经被生成
```shell
$ tree
# .
# ├── fis-conf.js
# ├── package.json
# ├── page
# │   ├── index.pug
# │   └── layout.pug
# ├── static
# │   ├── common
# │   │   ├── common.es
# │   │   └── common.less
# │   └── index
# │       ├── index.es
# │       └── index.less
# └── widget
#     └── demo
#         ├── demo.es
#         ├── demo.less
#         └── demo.pug

```
关于模板内容的详细介绍，请移步[这里](http://www.baidu.com)。

## z3 install

``z3 install``命令用于安装z3组件。和模板类似，所有官方维护的组件都可以在[这里](http://gitlab.baidu.com/z3/z3-ui)查看。同样的，组件也不区分具体的技术细节，但是这里有个要求：如果你的模板依赖于某一具体框架（比如Vue），那么在给组件命名时，需要加上该框架前缀。如，你有一个基于Vue的dialog组件，那么，你的组件就应该被命名成vue-dialog。这么做的好处非常明显，当看到命名就可以知道这个组件是否是你需要的，同时，如果组件没有任何的前缀，就说明这是一个通用组件。

安装组件：
```shell
# 需要在项目根目录中执行z3 install命令
# in my-project
z3 install vue-dialog
```
再次执行tree命令查看，你会发现根目录下多了一个component目录，这就是组件被放置的地方。

```shell
$ tree
# .
# └── component
#     └── vue-dialog
#         ├── vue-dialog.es
#         ├── vue-dialog.pug
#         └── vue-dialog.less
```

和node_module类似，理论上你不应该去修改里面的内容。并且，在模板的fis-conf中，已经默认将component中所有的.js(.es)文件设置成了common模块，你可以像写node一样使用这些组件：
```js
// 由于不像node拥有默认的模块查找规则
// 因此在引用模块时，需要加上额外的路径
var dialog = require('/component/vue-dialog/vue-dialog');
```
也可以使用es6语法：
```js
// dialog 使用 export default导出
import dialog from '/component/vue-dialog/vue-dialog.es';
```

组件中的样式文件，也默认使用了同名依赖，当你在js中使用了引入了模块地址，那么同名的css（less）文件会自动被引入。
更多组件的内容，请看[这里](http://www.baidu.com)。

## z3 list

``z3 install``命令用于显示z3提供的所有官方模板或组件列表。

显示模板：
```shell
z3 install list
# 或
z3 install list -t
```

显示组件：
```shell
z3 install list -c
```