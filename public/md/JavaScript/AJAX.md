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