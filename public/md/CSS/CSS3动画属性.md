## CSS3动画属性
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 编写的css样式 */
    </style>
</head>
<body>
    <div class="div"></div>
</body>
</html>
```
&nbsp;
&nbsp;
### keyframes动画规则
> @keyframes动画规则 规定一个时间段的运行速度

```html
<style>
    .div{
        width:100px;
        height:100px;
        background:red;
        position:relative;
        animation:mymove 5s infinite;
        -moz-animation:mymove 5s infinite; /* Firefox */
        -webkit-animation:mymove 5s infinite; /* Safari and Chrome */
        -o-animation:mymove 5s infinite; /* Opera */
    }
    @keyframes mymove{
        0%{
            top:0px;
        }
        50%{
            top:100px;
        }
        100%{
            top:200px;
        }
        /* from {top:0px;}
        to {top:200px;} */
    }
    @-moz-keyframes mymove {
        /* Firefox */
        from {top:0px;}
        to {top:200px;}
    }
    @-webkit-keyframes mymove {
        /* Safari and Chrome */
        from {top:0px;}
        to {top:200px;}
    }
    @-o-keyframes mymove {
        /* Opera */
        from {top:0px;}
        to {top:200px;}
    }
</style>
```

&nbsp;
&nbsp;
### animation
> animation 执行动画
> 简写属性
> animation: name duration timing-function delay iteration-count direction;
> 属性
> animation-name: 需要绑定动画规则的名字
> animation-duration: 设定完成动画的时间，以秒或者毫秒计算
> animation-timing-function: 规定动画的速度曲线
> animation-delay: 规定动画在开始之前的延迟
> animation-iteration-count: 规定动画的播放次数(数值或者infinite(无限次数))
> animation-direction: 规定动画是否轮流反向播放(normal(默认)或者alternate)

```html
<style>
    .div{
        width:100px;
        height:100px;
        background:red;
        position:relative;
        animation:mymove 5s infinite;
        -moz-animation:mymove 5s infinite; /* Firefox */
        -webkit-animation:mymove 5s infinite; /* Safari and Chrome */
        -o-animation:mymove 5s infinite; /* Opera */
    }
    @keyframes mymove{
        0%{
            top:0px;
        }
        50%{
            top:100px;
        }
        100%{
            top:200px;
        }
        /* from {top:0px;}
        to {top:200px;} */
    }
    @-moz-keyframes mymove {
        /* Firefox */
        from {top:0px;}
        to {top:200px;}
    }
    @-webkit-keyframes mymove {
        /* Safari and Chrome */
        from {top:0px;}
        to {top:200px;}
    }
    @-o-keyframes mymove {
        /* Opera */
        from {top:0px;}
        to {top:200px;}
    }
</style>
```
```html
<style>
        .div{
            width:100px;
            height:100px;
            background:red;
            position:relative;
            animation-name:mymove;
            animation-duration: 3s ; 
            /* animation-timing-function: 2s ;  */
            animation-delay: 1s ; 
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        @keyframes mymove{
            from {top:0px;}
            to {top:200px;}
        }
        @-moz-keyframes mymove {
            /* Firefox */
            from {top:0px;}
            to {top:200px;}
        }
        @-webkit-keyframes mymove {
            /* Safari and Chrome */
            from {top:0px;}
            to {top:200px;}
        }
        @-o-keyframes mymove {
            /* Opera */
            from {top:0px;}
            to {top:200px;}
        }
    </style>
```
&nbsp;
&nbsp;
### transition
> transition-property: 规定设置过渡效果的 CSS 属性的名称。(none没有属性获得过渡效果，all所有属性都将获得过渡效果，property(指定属性获得过渡效果))
> 
> transition-duration: 规定完成过渡效果需要多少秒或毫秒。
> transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
> linear: 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
> ease: 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
> ease-in: 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
> ease-out: 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
> ease-in-out: 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
> cubic-bezier(n,n,n,n): 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。
> 
> transition-timing-function: 规定速度效果的速度曲线。
> transition-delay: 定义过渡效果何时开始。


```html
<style>
    .div{
        width:100px;
        height:100px;
        background:blue;
        transition:width 2s;
        transition-timing-function:linear;
        /* Firefox 4 */
        -moz-transition:width 2s;
        -moz-transition-timing-function:linear;
        /* Safari and Chrome */
        -webkit-transition:width 2s;
        -webkit-transition-timing-function:linear;
        /* Opera */
        -o-transition:width 2s;
        -o-transition-timing-function:linear;
    }

    .div:hover{
        width:300px;
    }
</style>
```
