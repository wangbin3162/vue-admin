# 四、其他常用的第三方库

## stylus

> npm install stylus stylus-loader --save-dev

> npm install node-sass sass-loader --save-dev


## babel套件

babel-runtime(es6语法转义)  babel-polyfill(es6-api转义)

> npm install babel-runtime --save

> npm install babel-polyfill --save-dev

## fastclick

移动端点击300毫秒延迟

> npm install fastclick --save

```js
// 用法:
    import fastclick from 'fastclick';
    fastclick.attach(document.body);
```

## vue-lazyload图片懒加载

> npm install vue-lazyload --save

```js
// 用法
// -main.js
    import VueLazyload from 'vue-lazyload';
    Vue.use(VueLazyload, {
        loading: '/static/loading/loading-bars.svg'
    })
```

```html
    <!-- -vue组建中-->
    <!--在引入图片的位置使用v-lazy指令替代原有指令如-->
    <img src=''>替换为<img v-lazy=''>
```

注:loading为载入时图片地址,可用svg,gif,png等

## better-scroll

开发滚动

> npm install better-scroll --save

[文档参考](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans)

```js
this.scroll = new BScroll(this.$refs.wrapper, {
    click: true, // 可以点击
    probeType: 3, // 检测时时滚动的位置
    scrollX: true,// 是否可以横向滚动
    eventPassthrough: 'vertical'// 保留竖向滚动
})
this.scroll.on('scroll', (pos) => {//监听滚动事件
    this.scrollY = Math.abs(Math.round(pos.y));// 将y值转换成正 整数
});
this.scroll.refresh();//用于刷新滚动
this.scroll.scrollToElement(el, 300);//滚动到指定element位置,参数为滚动时间
```

## jsonp

> npm install jsonp --save

```js
import originJsonp from 'jsonp'; 
originJsonp(url, opts, fn);
```

## create-keyframe-animation

第三方js生成css3动画

> npm install create-keyframe-animation --save

```js
import animations from 'create-keyframe-animation';
// 可在transition 钩子函数中执行
let animation = {
    0: {css...},
    100: {css...}
};
animations.registerAnimation({
    name: 'move',
    animation,
    presets: {
        duration: 400,
        easing: 'linear'
    }
});
animations.runAnimation(this.$refs.cdWrapper, 'move', done);

animations.unregisterAnimation('move');//注销动画
```

## base64.js解码

> npm install js-base64 --save

```js
import { Base64 } from 'js-base64';

Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-

Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode('5bCP6aO85by+');  // 小飼弾
Base64.decode('5bCP6aO85by-');  // 小飼弾
```

## lyric-parser

歌词封装组件

> npm install lyric-parser --save

```js
 import Lyric from 'lyric-parser'
 let lyric = new Lyric(lyricStr, handler)

 function hanlder({lineNum, txt}){
   // this hanlder called when lineNum change
 }
```

## storage

本地存储库

> npm install good-storage --save

```js
import storage from 'good-storage'
 
 // localStorage
 storage.set(key,val) 
 
 storage.get(key, def)
 
 // sessionStorage
 storage.session.set(key, val)
 
 storage.session.get(key, val)
```

## vconsole

腾讯移动端调试插件

> npm install vconsole --save

```js
import VConsole from 'vconsole/dist/vconsole.min';
/* eslint-disable no-unused-vars */
var vConsole = new VConsole();
```
