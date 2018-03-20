<!--0-->
# 组件

## 介绍

z3中的组件并不严格依赖于模板，它可以单独使用，或依赖某些公共框架，比如vue、react等。这里有个不成文的约定，如果你的组件基于某些特定框架，那么组件名需要以该框架名开头。

## button

button已经被集成在了``csscore``中，目前支持两种样式，带边框和不带边框。它们都符合钱包UI设计规范。如果你需要更多的按钮样式，可以选择在csscore中添加，或者创建一个新的组件。

安装：

```bash
$ z3 install csscore
```
如何使用：

```jade
//- 蓝色背景的按钮
button.button.button-primary

//- 带边框的按钮
button.button.button-default

//- 禁用按钮
button.button.button-primary(
    :class="{'button-primary-disable': disable}"
)
//- 禁用带边框按钮
button.button.button-default(
    :class="{'button-default-disable': disable}"
)
```

## loading

loading是一个框架无关的组件，可以在任何项目中通用，它只提供了两个方法``show``和``hide``。loading采用了单例模式，因此，在调用show方法之前，请确保没有别的loading正在显示。并且，loading自带了overlay，只要及时的调用它，就不用再担心按钮的爆点问题了。

安装：

```bash
z3 install loading
```

使用
```js
import loading from '/component/loading/loading.es';

// 显示loading
// 默认文案是 加载中...
loading.show();

// 自定义loading文案
loading.show('自定义文案');

// 隐藏loading
loading.hide();
```

## dialog

dialog也是一个框架无关的组件，它对外提供了三个方法``alert``、``confirm``和``toast``，alert用于显示只有一个按钮的弹窗；confirm可显示多个按钮，而toast是一个类似loading，默认显示``2s``的提示框。

安装

```bash
z3 install dialog
```

使用
```js
import dialog form '/component/dialog/dialog.es';
```

**dialog.alert**
```js
// 最简单的使用
dialog.alert('我是提示');

// 自定义title
dialog.alert({
    title: '标题',
    content: '我是提示'
});

// 自定义按钮文案及回调
dialog.alert({
    content: '我是提示',
    button: {
        text: 'ok',
        handle() {
            alert('ok');
        }
    }
});
```

**dialog.confirm**
```js
// 使用confirm时，必须至少指定一个按钮
dialog.confirm({
    content: '我是提示',
    buttons: [
        {
            text: '确定',
            handle() {
                alert('sure');
            }
        },
        {
            text: '取消',
            handle() {
                alert('cancel');
            }
        }
    ]
});
```
**dialog.toast**
```js
// confirm默认显示时间是两秒，可通过第二个参数指定
dialog.toast('我是toast', 3000);
```

## list
