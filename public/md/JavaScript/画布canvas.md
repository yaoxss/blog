## 画布canvas
>创建<canvas>元素时至少要设置其 width 和 height 属性，这样才能告诉浏览器在多大面积上绘图。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <canvas id="drawing" width="200" height="200">A drawing of something.</canvas>
</body>
<script type="text/javascript">
    // 需要加入的js代码
</script>
</html>
```
&nbsp;
&nbsp;
## getContext
>要在画布上绘制图形，首先要取得绘图上下文。使用 getContext()方法可以获取对绘图上下文的引用。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");
        // 绘制红色矩形
        context.fillStyle = "#ff0000"; 
        context.fillRect(10, 10, 50, 50); 
        // 绘制半透明蓝色矩形
        context.fillStyle = "rgba(0,0,255,0.5)"; 
        context.fillRect(30, 30, 50, 50);
    }
</script>
```
&nbsp;
&nbsp;
### toDataURL
>导出<canvas>元素上的图像。这个方法接收一个参数：要生成图像
的 MIME 类型（与用来创建图形的上下文无关）。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");
        // 绘制红色矩形
        context.fillStyle = "#ff0000"; 
        context.fillRect(10, 10, 50, 50); 
        // 绘制半透明蓝色矩形
        context.fillStyle = "rgba(0,0,255,0.5)"; 
        context.fillRect(30, 30, 50, 50);

        // 取得图像的数据URI
        let imgURI = drawing.toDataURL("image/png");

        // 显示图片
        let image = document.createElement("img");
        image.src = imgURI;
        document.body.appendChild(image);
    }
</script>
```
&nbsp;
&nbsp;
### CanvasRenderingContext2D
>使用 getContext()方法获取的对绘图上下文的引用对象(CanvasRenderingContext2D)

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");
        console.log(context);
        // 指定样式填充的颜色红色
        context.fillStyle = "#ff0000"; 
        // 绘制红色矩形
        context.fillRect(0, 0, 20, 20); 
        // 重新指定样式填充的颜色红色
        context.fillStyle = "rgba(0,0,255,0.5)";
        // 绘制半透明蓝色矩形
        context.fillRect(20, 20, 20, 20);
    }
</script>
```
&nbsp;
&nbsp;
#### fillStyle
>填充以指定样式（颜色、渐变或图像）自动填充形状，而描边只为图形边界着色。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");
        // 指定样式填充的颜色红色
        context.fillStyle = "#ff0000"; 
        // 绘制红色矩形
        context.fillRect(0, 0, 20, 20); 
        // 重新指定样式填充的颜色红色
        context.fillStyle = "rgba(0,0,255,0.5)";
        // 绘制半透明蓝色矩形
        context.fillRect(20, 20, 20, 20);
    }
</script>
```
&nbsp;
&nbsp;
#### strokeStyle
> 指定描边样式(线条的颜色)

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing"); 
    // 确保浏览器支持<canvas> 
    if (drawing.getContext) { 
        let context = drawing.getContext("2d"); 
        // 指定样式描边的颜色红色    
        context.strokeStyle = "#ff0000"; 
        // 绘制红色轮廓的矩形
        context.strokeRect(10, 10, 50, 50); 
        // 指定样式描边的颜色半透明蓝色
        context.strokeStyle = "rgba(0,0,255,0.5)"; 
        // 绘制半透明蓝色轮廓的矩形
        context.strokeRect(30, 30, 50, 50);
    }
</script>
```


&nbsp;
&nbsp;
### 矩形相关的方法
#### fillRect
> fillRect()方法用于以指定颜色在画布上绘制并填充矩形。填充的颜色由CanvasRenderingContext2D的fillStyle属性指定。
> 绘制矩形相关方法 fillRect()、strokeRect()和 clearRect()。
> 参数：矩形 x 坐标、矩形 y 坐标、矩形宽度和矩形高度。(单位像素)

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");
        // 绘制红色矩形
        context.fillStyle = "#ff0000"; 
        context.fillRect(10, 10, 50, 50); 
        // 绘制半透明蓝色矩形
        context.fillStyle = "rgba(0,0,255,0.5)"; 
        context.fillRect(30, 30, 50, 50);
    }
</script>
```
&nbsp;
&nbsp;
#### strokeRect
> strokeRect()方法用于绘制轮廓矩形(意思应该是绘制没有填充颜色的矩形)。填充的颜色由CanvasRenderingContext2D的strokeStyle属性指定。
> 绘制矩形相关方法 fillRect()、strokeRect()和 clearRect()。
> 参数：矩形 x 坐标、矩形 y 坐标、矩形宽度和矩形高度。(单位像素)

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        // 绘制红色轮廓的矩形
        context.strokeStyle = "#ff0000"; 
        context.strokeRect(10, 10, 50, 50); 
        // 绘制半透明蓝色轮廓的矩形
        context.strokeStyle = "rgba(0,0,255,0.5)"; 
        context.strokeRect(30, 30, 50, 50);
    }
</script>
```
>注意 描边宽度由 lineWidth 属性控制，它可以是任意整数值。类似地，lineCap 属性控制线条端点的形状［"butt"（平头）、"round"（出圆头）或"square"（出方头）］，而 lineJoin属性控制线条交点的形状［"round"（圆转）、"bevel"（取平）或"miter"（出尖）］。
&nbsp;
&nbsp;
#### clearRect
> clearRect()方法可以擦除画布中某个区域。该方法用于把绘图上下文中的某个区域变透明。通过先绘制形状再擦除指定区域，可以创建出有趣的效果，比如从已有矩形中开个孔。
> 绘制矩形相关方法 fillRect()、strokeRect()和 clearRect()。
> 参数：矩形 x 坐标、矩形 y 坐标、矩形宽度和矩形高度。(单位像素)

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");
        // 绘制红色矩形
        context.fillStyle = "#ff0000"; 
        context.fillRect(10, 10, 50, 50); 
        // 绘制半透明蓝色矩形
        context.fillStyle = "rgba(0,0,255,0.5)"; 
        context.fillRect(30, 30, 50, 50); 
        // 在前两个矩形重叠的区域擦除一个矩形区域
        context.clearRect(40, 40, 10, 10);
    }
</script>
```

&nbsp;
&nbsp;
### 绘制路径
#### beginPath
> beginPath()方法以表示要开始绘制新路径。
> 然后调用方法来绘制路径(arc,arcTo,bezierCurveTo,lineTo,moveTo,quadraticCurveTo,rect)。
> 创建路径之后，可以使用 closePath()方法绘制一条返回起点的线。如果路径已经完成，则既可以指定 fillStyle 属性并调用 fill()方法来填充路径，也可以指定 strokeStyle 属性并调用stroke()方法来描画路径，还可以调用 clip()方法基于已有路径创建一个新剪切区域。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        // 创建路径
        context.beginPath(); 
        // 绘制外圆
        context.arc(100, 100, 99, 0, 2 * Math.PI, false); 
        // 不绘制线条，只把绘制光标移动到(x, y)
        context.moveTo(194, 100); 
        // 绘制内圆
        context.arc(100, 100, 94, 0, 2 * Math.PI, false); 
        // 绘制分针
        context.moveTo(100, 100); 
        context.lineTo(100, 15); 
        // 绘制时针
        context.moveTo(100, 100); 
        context.lineTo(35, 100); 
        // 描画路径
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### isPointInStroke
> isPointInStroke()判断点是否在上面路径的边缘线上。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        // 创建路径
        context.beginPath();
        // 绘制直线
        context.moveTo(100, 100); 
        context.lineTo(35, 100); 
        // 描画路径
        context.stroke();
        // 判断40, 101在不在直线上
        if (context.isPointInStroke(40, 101)) { 
            // 实际上该点不在直线上，因此不会输出
            console.log("40, 101在直线上"); 
        }
        // 判断40, 100在不在直线上
        if (context.isPointInStroke(40, 100)) { 
            console.log("40,100在直线上"); 
        }
    }
</script>
```
&nbsp;
&nbsp;
#### isPointInPath
> isPointInPath()判断点是否在上面路径的区域内。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        // 创建路径
        context.beginPath();
        // 绘制直线
        context.moveTo(10, 10); 
        context.lineTo(100, 10);
        context.lineTo(100, 50);
        context.lineTo(10, 50);
        context.lineTo(10, 10);
        // 描画路径
        context.stroke();
        // 判断5, 5在不在区域内
        if (context.isPointInPath(5, 5)) { 
            // 实际上该点不在区域内，因此不会输出
            console.log("5, 5在区域内"); 
        }
        // 判断40, 100在不在区域内
        if (context.isPointInPath(40, 50)) { 
            console.log("40,100在区域内"); 
        }
    }
</script>
```

&nbsp;
&nbsp;
#### arc
> arc(x, y, radius, startAngle, endAngle, counterclockwise)：以坐标(x, y)为圆
心，以 radius 为半径绘制一条弧线，起始角度为 startAngle，结束角度为 endAngle（都是
弧度）。最后一个参数 counterclockwise 表示是否逆时针计算起始角度和结束角度（默认为
顺时针）。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        // 创建路径
        context.beginPath(); 
        // 绘制外圆
        context.arc(100, 100, 99, 0, 2 * Math.PI, false); 
        // 描画路径
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### arcTo
> arcTo(x1, y1, x2, y2, radius)：以给定半径 radius，经由(x1, y1)绘制一条从上一点到(x2, y2)的弧线。
> arcTo()方法将利用当前端点、端点1(x1,y1)和端点2(x2,y2)这三个点所形成的夹角，然后绘制一段与夹角的两边相切并且半径为radius的圆上的弧线。弧线的起点就是当前端点所在边与圆的切点，弧线的终点就是端点2(x2,y2)所在边与圆的切点，并且绘制的弧线是两个切点之间长度最短的那个圆弧。此外，如果当前端点不是弧线起点，arcTo()方法还将添加一条当前端点到弧线起点的直线线段。
> 参考：https://blog.csdn.net/cristina_song/article/details/78109865

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        //指定绘制路径的起始点
        context.moveTo(50, 50);
        //绘制一条到坐标(150,50)的水平直线
        context.lineTo(150, 50);

        //坐标点(150,50)就是绘制弧线时的当前端点

        //端点1
        var p1 = {
            x : 200,
            y : 50
        };
        //端点2
        var p2 = {
            x : 200,
            y : 100         
        };
        //绘制与当前端点、端点1、端点2三个点所形成的夹角的两边相切并且半径为50px的圆的一段弧线
        context.arcTo(p1.x, p1.y, p2.x, p2.y, 50);

        //按照上述绘制路径绘制弧线
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### bezierCurveTo
> bezierCurveTo(c1x, c1y, c2x, c2y, x, y)：以(c1x, c1y)和(c2x, c2y)为控制点，绘制一条从上一点到(x, y)的弧线（三次贝塞尔曲线）。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        context.beginPath();
        context.moveTo(20,20);
        context.bezierCurveTo(20,100,200,100,200,20);
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### moveTo
> moveTo(x, y)：不绘制线条，只把绘制光标移动到(x, y)。(相当于指定画线条的起点或者重新指定起点)

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        context.beginPath();
        context.moveTo(20,20);
        context.lineTo(80,20);
        context.moveTo(10,50);
        context.lineTo(90,50);
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### lineTo
> lineTo(x, y)：绘制一条从上一点到(x, y)的直线。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        context.beginPath();
        context.moveTo(20,20);
        context.lineTo(80,20);
        context.moveTo(10,50);
        context.lineTo(90,50);
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### quadraticCurveTo
> quadraticCurveTo(cx, cy, x, y)：以(cx, cy)为控制点，绘制一条从上一点到(x, y)的弧线（二次贝塞尔曲线）。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        context.beginPath();
        context.moveTo(20,20);
        context.quadraticCurveTo(20,100,200,20);
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
#### rect
> rect(x, y, width, height)：以给定宽度和高度在坐标点(x, y)绘制一个矩形。这个方法与 strokeRect()和 fillRect()的区别在于，它创建的是一条路径，而不是独立的图形。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        context.beginPath();
        context.rect(20,20,60,30);
        context.stroke();
    }
</script>
```

&nbsp;
&nbsp;
### 绘制文本
#### fillText
#### strokeText
#### font
#### textAlign
#### textBaseLine
>2D绘图上下文还提供了绘制文本的方法，即fillText()和 strokeText()。
>参数：要绘制的字符串、x 坐标、y 坐标和可选的最大像素宽度。
>这两个方法最终绘制的结果都取决于以下 3 个属性。
>font：以 CSS 语法指定的字体样式、大小、字体族等，比如"10px Arial"。 
>textAlign：指定文本的对齐方式，可能的值包括"start"、"end"、"left"、"right"和"center"。推荐使用"start"和"end"，不使用"left"和"right"，因为前者无论在从左到右书写的语言还是从右到左书写的语言中含义都更明确。
>textBaseLine ：指定文本的基线，可能的值包括 "top" 、 "hanging" 、 "middle" 、"alphabetic"、"ideographic"和"bottom"。

```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d"); 
        // 创建路径
        context.beginPath(); 
        // 绘制横线
        context.moveTo(0, 50); 
        context.lineTo(100, 50); 
        // 绘制竖线
        context.moveTo(50, 0); 
        context.lineTo(50, 100); 
        
        context.font = "bold 16px Arial"; 
        context.textAlign = "center"; 
        context.textBaseline = "middle"; 
        context.fillText("坐标", 50, 50);

        context.strokeText("strokeText", 100, 100);

        context.font = "bold 14px Arial"; 
        context.textAlign = "start"; 
        context.textBaseline = "top"; 
        context.fillText("hello word !", 0, 5,40);
        // 描画路径
        context.stroke();
    }
</script>
```
&nbsp;
&nbsp;
#### measureText
>measureText()方法使用 font、textAlign 和 textBaseline 属性当前的值计算绘制指定文本后的大小。
>例如，假设要把文本"Hello world!"放到一个 140 像素宽的矩形中，可以使用以下代码，从 100 像素的字体大小开始计算，不断递减，直到文本大小合适：
```html
<script type="text/javascript">
    let drawing = document.getElementById("drawing");
    // 确保浏览器支持<canvas>
    if(drawing.getContext){
        let context = drawing.getContext("2d");  
        let fontSize = 100; 
        context.font = fontSize + "px Arial"; 
        while(context.measureText("Hello world!").width > 140) { 
            fontSize--; 
            context.font = fontSize + "px Arial"; 
        } 
        context.fillText("Hello world!", 10, 50); 
        context.fillText("Font size is " + fontSize + "px", 10, 100);
    }
</script>
```

&nbsp;
&nbsp;
###变换 
>未作
```html
<script type="text/javascript">
    
</script>
```

