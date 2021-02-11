## AJAX
> 2005 年，Jesse James Garrett 撰写了一篇文章，“Ajax—A New Approach to Web Applications”。这篇文章中描绘了一个被他称作 Ajax（Asynchronous JavaScript+XML，即异步 JavaScript 加 XML）的技术。这个技术涉及发送服务器请求额外数据而不刷新页面，从而实现更好的用户体验。Garrett 解释了这个技术怎样改变自 Web 诞生以来就一直延续的传统单击等待的模式。
> 把 Ajax 推到历史舞台上的关键技术是 XMLHttpRequest（XHR）对象。
> XHR 对象的 API 被普遍认为比较难用，而 Fetch API 自从诞生以后就迅速成为了 XHR 更现代的替代标准。Fetch API 支持期约（promise）和服务线程（service worker），已经成为极其强大的 Web 开发工具。
> XMLHttpRequest，但它实际上是过时 Web 规范的产物，应该只在旧版本浏览器中使用。实际开发中，应该尽可能使用 fetch()。

### XMLHttpRequest
>IE5 是第一个引入 XHR 对象的浏览器。这个对象是通过 ActiveX 对象实现并包含在 MSXML 库中的。为此，XHR 对象的 3 个版本在浏览器中分别被暴露为 MSXML2.XMLHttp、MSXML2.XMLHttp.3.0和 MXSML2.XMLHttp.6.0。
> 所有现代浏览器都通过 XMLHttpRequest 构造函数原生支持 XHR 对象。
```html
<script>
    let xhr = new XMLHttpRequest();
</script>
```

#### open
> 调用 open()不会实际发送请求，只是为发送请求做好准备。
> 接收参数
> 请求类型（"get"、"post"等）、请求 URL，以及表示请求是否异步的布尔值。
```html
<script>
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://127.0.0.1:8081/get", false);
</script>
```

#### send
#### responseText
#### responseXML
#### status
#### statusText
> 发送定义好的请求
> send()方法接收一个参数，是作为请求体发送的数据。如果不需要发送请求体，则必须传 null，因为这个参数在某些浏览器中是必需的。
> 收到响应后，XHR对象的以下属性会被填充上数据。
> responseText：作为响应体返回的文本。 
> responseXML：如果响应的内容类型是"text/xml"或"application/xml"，那就是包含响应数据的 XML DOM 文档。 
> status：响应的 HTTP 状态。 
> statusText：响应的 HTTP 状态描述

```html
<script>
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/api/get", false);
    xhr.send(null);
    // 收到响应后，第一步要检查 status 属性以确保响应成功返回。
    // 一般来说，HTTP 状态码为 2xx 表示成功。
    // 此时，responseText 或 responseXML（如果内容类型正确）属性中会有内容。
    // 如果 HTTP 状态码是 304，则表示资源未修改过，是从浏览器缓存中直接拿取的。
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
        alert(xhr.responseText); 
    } else { 
        alert("Request was unsuccessful: " + xhr.status); 
    }
</script>
```

#### readyState
> 表示当前处在请求/响应过程的哪个阶段
> 0：未初始化（Uninitialized）。尚未调用 open()方法。
> 1：已打开（Open）。已调用 open()方法，尚未调用 send()方法。
> 2：已发送（Sent）。已调用 send()方法，尚未收到响应。
> 3：接收中（Receiving）。已经收到部分响应。
> 4：完成（Complete）。已经收到所有响应，可以使用了。
> 每次 readyState 从一个值变成另一个值，都会触发 readystatechange 事件
```html
<script>
let xhr = new XMLHttpRequest(); 
// 每次 readyState 从一个值变成另一个值，都会触发 readystatechange 事件
xhr.onreadystatechange = function() { 
    // 由于 onreadystatechange 事件处理程序的作用域问题，
    // 这个例子在 onreadystatechange 事件处理程序中使用了 xhr 对象而不是 this 对象。
    // 使用 this 可能导致功能失败或导致错误，取决于用户使用的是什么浏览器。
    // 因此还是使用保存 XHR 对象的变量更保险一些。
    console.log(xhr.readyState);
    if (xhr.readyState == 4) { 
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
            alert(xhr.responseText); 
        } else { 
            alert("Request was unsuccessful: " + xhr.status); 
        } 
    } 
};
// undefined
console.log('未调用 open()方法readyState:' + xhr.readyState); 
xhr.open("get", "/api/get", true); 
console.log('已调用 open()方法，尚未调用 send()readyState:' + xhr.readyState); 
xhr.send(null);
</script>
```

#### abort
> 在收到响应之前取消异步请求
> xhr.abort()调用这个方法后，XHR 对象会停止触发事件，并阻止访问这个对象上任何与响应相关的属性。
> 中断请求后，应该取消对 XHR 对象的引用。由于内存问题，不推荐重用 XHR 对象。
```html
<script>
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/api/get", false);
    xhr.send(null);
    xhr.abort();
</script>
```

#### HTTP头部
> HTTP 请求和响应都会携带一些头部字段，这些字段可能对开发者有用。
> XHR 对象会通过一些方法暴露与请求和响应相关的头部字段。
> XHR 请求会发送以下头部字段:
> Accept：浏览器可以处理的内容类型。
> Accept-Charset：浏览器可以显示的字符集。
> Accept-Encoding：浏览器可以处理的压缩编码类型。
> Accept-Language：浏览器使用的语言。
> Connection：浏览器与服务器的连接类型。
> Cookie：页面中设置的 Cookie。  Host：发送请求的页面所在的域。
> Referer：发送请求的页面的 URI。注意，这个字段在 HTTP 规范中就拼错了，所以考虑到兼容性也必须将错就错。（正确的拼写应该是 Referrer。）
> User-Agent：浏览器的用户代理字符串

#### setRequestHeader
> setRequestHeader发送额外的请求头部
> 必须在 open()之后、send()之前调用 setRequestHeader()
> 有些浏览器允许重写默认头部，有些浏览器则不允许。
```html
<script>
let xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4) { 
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
            alert(xhr.responseText); 
        } else { 
            alert("Request was unsuccessful: " + xhr.status); 
        } 
    } 
}; 
xhr.open("get", "example.php", true); 
xhr.setRequestHeader("MyHeader", "MyValue"); 
xhr.send(null);
</script>
```

#### getResponseHeader
#### getAllResponseHeaders
> getResponseHeader()方法从 XHR 对象获取响应头部，只要传入要获取头部的名称即可。
> getAllResponseHeaders()方法取得所有响应头部,这个方法会返回包含所有响应头部的字符串。
```html
<script>
let xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4) { 
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
            alert(xhr.responseText); 
        } else { 
            alert("Request was unsuccessful: " + xhr.status); 
        } 
    } 
}; 
xhr.open("get", "http://www.kuaidi100.com/query?type=ems&postid=ccc", true); 
xhr.setRequestHeader("MyHeader", "MyValue"); 
xhr.send(null);
// 如果想查看结果，建议使用延时器或者过几秒后在控制输出查看
xhr.getResponseHeader("MyHeader"); // null
xhr.getAllResponseHeaders();
</script>
```

### get
```html
<script>
function addURLParam(url, name, value) { 
    url += (url.indexOf("?") == -1 ? "?" : "&"); 
    // encodeURIComponent编码
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value); 
    return url; 
}
let xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4) { 
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
            alert(xhr.responseText); 
        } else { 
            alert("Request was unsuccessful: " + xhr.status); 
        } 
    } 
}; 
let url = "http://www.kuaidi100.com/query"; 
// 添加参数
url = addURLParam(url, "type", "ems"); 
url = addURLParam(url, "postid", "ccc ddd");
xhr.open("get", url, true); 
xhr.send(null);
console.log(xhr.responseText);
</script>
```