## web组件
> Web 组件指的是一套用于增强 DOM 行为的工具，包括影子 DOM、自定义元素和 HTML 模板。
> 并没有统一的“Web Components”规范：每个 Web 组件都在一个不同的规范中定义。
> 有些 Web 组件如影子 DOM 和自定义元素，已经出现了向后不兼容的版本问题。
> 浏览器实现极其不一致。
> 由于存在这些问题，因此使用 Web 组件通常需要引入一个 Web 组件库，比如 Polymer。这种库可以作为腻子脚本，模拟浏览器中缺失的 Web 组件。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 编写的html代码  -->
</body>
<script>
    // 编写的js代码
</script>
</html>
```

&nbsp;
&nbsp;
### template标签
> HTML解析构建DOM子树的三种方案
> 1、使用 innerHTML 把标记字符串转换为 DOM 元素(存在严重的安全隐患)
> 2、document.createElement()构建每个元素，然后逐个把它们添加到孤儿根节点（不是添加到 DOM,用起来相当麻烦）
> 3、页面中写出特殊标记(template标签)，让浏览器自动将其解析为 DOM 子树，但跳过渲染。这就是 HTML 模板的核心思想

```html
<!-- 
    页面上并没有渲染出这段内容 
    document.querySelector()等 DOM 查询方法不会发现其中的<p>标签
    因为<p>存在于一个包含在 HTML 模板中的 DocumentFragment 节点内
-->
<body>
    <template id="foo"> 
        <p>I'm inside a template!</p> 
    </template>
</body>
```

&nbsp;
&nbsp;
### documentFragment对象
> 通过<template>元素的 content 属性可以取得这个 DocumentFragment 对象的引用
> documentFragment是一个保存多个element的容器对象（保存在内存）当更新其中的一个或者多个element时，页面不会更新。只有当documentFragment容器中保存的所有element更新后再将其插入到页面中才能更新页面。

```html
<body>
    <template id="foo"> 
        <p>I'm inside a template!</p> 
    </template>
</body>
<script>
    // 编写的js代码
    const fragment = document.querySelector('#foo').content; 
    console.log(fragment); // #document-fragment
    console.log(document.querySelector('p')); // null 
    console.log(fragment.querySelector('p')); // <p>...<p>
</script>
```
&nbsp;
>DocumentFragment 也是批量向 HTML 中添加元素的高效工具。比如，我们想以最快的方式给某个 HTML 元素添加多个子元素。如果连续调用 document.appendChild()，则不仅费事，还会导致多次布局重排。而使用 DocumentFragment 可以一次性添加所有子节点，最多只会有一次布局重排
```html
<body>
    <!-- 编写的html代码  -->
    <div id="foo"></div>
</body>
<script>
    // 编写的js代码
    const fragment = new DocumentFragment(); 
    const foo = document.querySelector('#foo'); 
    // 为 DocumentFragment 添加子元素不会导致布局重排
    let p = document.createElement('p');
    p.innerHTML = 'p1';
    fragment.appendChild(p); 
    p = document.createElement('p');
    p.innerHTML = 'p2';
    fragment.appendChild(p); 
    p = document.createElement('p');
    p.innerHTML = 'p3';
    fragment.appendChild(p);
    console.log(fragment.children.length); // 3 
    foo.appendChild(fragment);
    console.log(fragment.children.length); // 0
    console.log(document.body.innerHTML);
</script>
```

>DocumentFragment 的所有子节点都高效地转移到了 foo 元素上，转移之后 DocumentFragment 变空了。
```html
<body>
    <!-- 编写的html代码  -->
    <div id="foo"></div> 
    <template id="bar"> 
        <p>p1</p> 
        <p>p2</p> 
        <p>p3</p> 
    </template>
</body>
<script>
    // 编写的js代码
    const fooElement = document.querySelector('#foo'); 
    const barTemplate = document.querySelector('#bar'); 
    const barFragment = barTemplate.content;
    fooElement.appendChild(barFragment);
    // 如果不想清空DocumentFragment对象，可以使用 importNode()方法克隆 DocumentFragment对象
    // fooElement.appendChild(document.importNode(barFragment, true));
    console.log(document.body.innerHTML); 
    // <div id="foo"> 
    // <p></p> 
    // <p></p> 
    // <p></p> 
    // </div> 
    // <tempate id="bar"></template>
</script>
```

>脚本执行可以推迟到将 DocumentFragment 的内容实际添加到 DOM 树
```html
<body>
    <!-- 编写的html代码  -->
    <div id="foo"></div> 
    <template id="bar"> 
        <script>console.log('Template script executed');</script> 
    </template>
</body>
<script>
    // 编写的js代码
    const fooElement = document.querySelector('#foo'); 
    const barTemplate = document.querySelector('#bar'); 
    const barFragment = barTemplate.content; 
    console.log('About to add template'); 
    fooElement.appendChild(barFragment); 
    console.log('Added template'); 
    // 控制台输出结果
    // About to add template 
    // Template script executed 
    // Added template
</script>
```

&nbsp;
&nbsp;
### 影子DOM
> 概念上讲，影子 DOM（shadow DOM） Web 组件相当直观，通过它可以将一个完整的 DOM 树作为节点添加到父 DOM 树。这样可以实现 DOM 封装，意味着 CSS 样式和 CSS 选择符可以限制在影子 DOM子树而不是整个顶级 DOM 树中。
> 影子 DOM 是通过 attachShadow()方法创建并添加给有效 HTML 元素的。容纳影子 DOM 的元素被称为影子宿主（shadow host）。影子 DOM 的根节点被称为影子根（shadow root）。

#### attachShadow
#### shadowRoot
> attachShadow()方法需要一个shadowRootInit 对象，返回影子DOM的实例。shadowRootInit对象必须包含一个 mode 属性，值为"open"或"closed"。对"open"影子 DOM的引用可以通过 shadowRoot属性在 HTML 元素上获得，而对"closed"影子 DOM 的引用无法这样获取。

```html
<script>
    document.body.innerHTML = ` 
        <div id="foo"></div> 
        <div id="bar"></div> 
    `; 
    const foo = document.querySelector('#foo'); 
    const bar = document.querySelector('#bar'); 
    const openShadowDOM = foo.attachShadow({ mode: 'open' }); 
    const closedShadowDOM = bar.attachShadow({ mode: 'closed' }); 
    console.log(openShadowDOM); // #shadow-root (open)
    console.log(closedShadowDOM); // #shadow-root (closed)
    foo.shadowRoot.innerHTML = "<p id='pfoo' >foo<p>";
    foo.shadowRoot.getElementById("pfoo");
    console.log(foo.shadowRoot); // #shadow-root (open) 
    // 报错
    // bar.shadowRoot.innerHTML = "<p>bar<p>"
    console.log(bar.shadowRoot); // null
</script>
```

>元素分别位于它们自己的影子 DOM 中
```html
<script>
    for (let color of ['red', 'green', 'blue']) { 
        // 创建影子DOM
        const div = document.createElement('div'); 
        const shadowDOM = div.attachShadow({ mode: 'open' });
        // 把影子DOM放入文档中 
        document.body.appendChild(div);
        // 编写影子DOM的内容 
        shadowDOM.innerHTML = ` 
            <p>Make me ${color}</p> 
            <style> 
            p { 
            color: ${color}; 
            } 
            </style> 
        `; 
    } 
    function countP(node) { 
        console.log(node.querySelectorAll('p').length); 
    }
    // 没有找到影子DOM里面的P标签
    countP(document); // 0 
    for (let element of document.querySelectorAll('div')) { 
        // 获取影子DOM里面P标签的长度
        countP(element.shadowRoot); 
    } 
    // 1 
    // 1 
    // 1
</script>
```

>影子 DOM 并非铁板一块。HTML 元素可以在 DOM 树间无限制移动：
```html
<script>
    document.body.innerHTML = ` 
        <div></div> 
        <p id="foo">Move me</p> 
    `; 
    const divElement = document.querySelector('div'); 
    const pElement = document.querySelector('p'); 
    const shadowDOM = divElement.attachShadow({ mode: 'open' }); 
    // 从父 DOM 中移除元素
    divElement.parentElement.removeChild(pElement); 
    // 把元素添加到影子 DOM 
    shadowDOM.appendChild(pElement); 
    // 检查元素是否移动到了影子 DOM 中
    console.log(shadowDOM.innerHTML); // <p id="foo">Move me</p>
</script>
```

&nbsp;
&nbsp;
#### slot标签
> <slot>标签指示浏览器在哪里放置原来的 HTML

```html
<script>
    document.body.innerHTML = `
        <div id="foo" >
            <p>Foo</p>    
        </div>
    `;
    // 此时页面会显示p标签
    // 获取div的DOM对象
    let div = document.querySelector('div');
    // 将div变成影子DOM，此时HTML上的p标签不会显示
    let attachShadow = div.attachShadow({mode: 'open'});
    attachShadow.innerHTML = `
        <div id="bar">
            <!-- 将<slot></slot>插槽替换成div里面的内容替换成<p>Foo</p> -->
            <slot></slot>    
        </div>
    `;
    // 注意，虽然在页面检查窗口中看到内容在影子 DOM中，但这实际上只是 DOM内容的投射（projection）。实际的元素仍然处于外部 DOM 中：
    console.log(document.querySelector('p').parentElement);
</script>
```

>使用槽位（slot）改写的前面红/绿/蓝子树
```html
<script>
    for (let color of ['red', 'green', 'blue']) { 
        const divElement = document.createElement('div'); 
        divElement.innerText = `Make me ${color}`; 
        document.body.appendChild(divElement) 
        divElement 
            .attachShadow({ mode: 'open' }) 
            .innerHTML = ` 
                <p><slot></slot></p> 
                <style> 
                    p { 
                        color: ${color}; 
                    } 
                </style> 
            `; 
    }
</script>
```

>使用命名槽位（named slot）实现多个投射。
>通过匹配的 slot/name 属性对实现的。
```html
<script>
    document.body.innerHTML = ` 
        <div> 
            <p slot="foo">Foo</p> 
            <p slot="bar">Bar</p> 
        </div> 
    `; 
    document.querySelector('div') 
        .attachShadow({ mode: 'open' }) 
        .innerHTML = ` 
            <slot name="bar"></slot> 
            <slot name="foo"></slot> 
        `; 
</script>
```

&nbsp;
&nbsp;
#### 事件重定向
```html
<script>
    // 创建一个元素作为影子宿主
    document.body.innerHTML = ` 
        <div onclick="console.log('Handled outside:', event.target)"></div> 
    `; 
    // 添加影子 DOM 并向其中插入 HTML 
    document.querySelector('div') 
    .attachShadow({ mode: 'open' }) 
    .innerHTML = ` 
            <button onclick="console.log('Handled inside:', event.target)">Foo</button> 
        `; 
    // 点击按钮时：
    // Handled inside: <button onclick="..."></button> 
    // Handled outside: <div onclick="..."></div>
</script>
```

#### 自定义元素
>事件重定向只会发生在影子 DOM 中实际存在的元素上。使用<slot>标签从外部投射进来的元素不会发生事件重定向，因为从技术上讲，这些元素仍然存在于影子 DOM 外部。
```html
<script>
    document.body.innerHTML = ` 
        <x-foo >I'm inside a nonsense element.</x-foo > 
    `; 
    console.log(document.querySelector('x-foo') instanceof HTMLElement); // true
</script>
```