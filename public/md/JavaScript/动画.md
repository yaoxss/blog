## 动画
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="status" style="background-color: bisque;width: 100px;height: 100px;" ></div>
</body>
<script type="text/javascript">
    // 需要加入的js代码
</script>
</html>

```
&nbsp;
&nbsp;
### requestAnimationFrame方法
&nbsp;
>告诉浏览器要执行动画
参数1： 一个要在重绘屏幕前调用的函数

```html
<script type="text/javascript">
    function updateProgress() { 
         var div = document.getElementById("status"); 
         // div.style.width 这个如果样式不写在标签里面失效(有点坑)
         div.style.width = (parseInt(div.style.width, 10) + 5) + "px"; 
         // 如果宽度大于900不再执行动画
		 if (parseInt(div.style.width) < 900) { 
			requestAnimationFrame(updateProgress); 
		 } 
    } 
    // 执行的动画
    requestAnimationFrame(updateProgress);
</script>
```
&nbsp;
&nbsp;
### cancelAnimationFrame方法
&nbsp;
>与 setTimeout()类似，requestAnimationFrame()也返回一个请求 ID，可以用于通过另一个
方法 cancelAnimationFrame()来取消重绘任务。

```html
<script type="text/javascript">
    var requestID;
    function updateProgress() { 
         var div = document.getElementById("status"); 
         // div.style.width 这个如果样式不写在标签里面失效(有点坑)
         div.style.width = (parseInt(div.style.width, 10) + 1) + "px"; 
		 if (parseInt(div.style.width) < 900) { 
			requestID = requestAnimationFrame(updateProgress); 
		 } 
    } 
    // 执行的动画
    requestID = requestAnimationFrame(updateProgress);

    // 在控制台执行以下代码停止动画
    // cancelAnimationFrame(requestID);
</script>
```
&nbsp;
&nbsp;
### requestAnimationFrame节流
&nbsp;
>这个方法的浏览器实际上会暴露出作为钩子的回调队列。所谓钩子（hook），就是浏览器在执行下一次重绘之前的一个点。这个回调队列是一个可修改的函数列表，包含应该在重绘之前调用的函数。每次调用requestAnimationFrame()都会在队列上推入一个回调函数，队列的长度没有限制。

```html
<body>
    <div id="status" style="background-color: bisque;width: 100px;height: 8000px;" ></div>
</body>
<style>
    #status{
        background-color: bisque;
        width: 100px;
        height: 8000px;
    }
</style>
<script type="text/javascript">
    // 当向下滚动网页时，触发并执行
    // function expensiveOperation() { 
    //     console.log('Invoked at', Date.now()); 
    // } 
    // window.addEventListener('scroll', () => { 
    //     expensiveOperation(); 
    // });

    // 使用requestAnimationFrame
    // function expensiveOperation() { 
    //     console.log('Invoked at', Date.now()); 
    // } 
    // window.addEventListener('scroll', () => { 
    //     window.requestAnimationFrame(expensiveOperation); 
    // });

    // 定义一个标志变量，由回调设置其开关状态，将多余的调用屏蔽
    // let enqueued = false; 
    // function expensiveOperation() { 
    //     console.log('Invoked at', Date.now()); 
    //     enqueued = false; 
    // } 
    // window.addEventListener('scroll', () => { 
    //     if (!enqueued) { 
    //         enqueued = true; 
    //         window.requestAnimationFrame(expensiveOperation); 
    //     } 
    // });
    
    // 是配合使用一个计时器来限制操作执行的频率。
    let enabled = true; 
    function expensiveOperation() { 
        console.log('Invoked at', Date.now()); 
    } 
    window.addEventListener('scroll', () => { 
        if (enabled) { 
            enabled = false; 
            window.requestAnimationFrame(expensiveOperation); 
            window.setTimeout(() => enabled = true, 50); 
        } 
    });
</script>
```
&nbsp;
&nbsp;