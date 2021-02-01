### JSON
> 理解 JSON 最关键的一点是要把它当成一种数据格式，而不是编程语言。JSON 不属于 JavaScript，它们只是拥有相同的语法而已。JSON 也不是只能在 JavaScript 中使用，它是一种通用数据格式。很多语言都有解析和序列化 JSON 的内置能力。
> 简单值：字符串、数值、布尔值和 null 可以在 JSON 中出现，就像在 JavaScript 中一样。特殊值 undefined 不可以。
> 对象：第一种复杂数据类型，对象表示有序键/值对。每个值可以是简单值，也可以是复杂类型。
> 数组：第二种复杂数据类型，数组表示可以通过数值索引访问的值的有序列表。数组的值可以是任意类型，包括简单值、对象，甚至其他数组。
> JSON 没有变量、函数或对象实例的概念。
> JSON 的迅速流行并不仅仅因为其语法与 JavaScript 类似，很大程度上还因为 JSON 可以直接被解析成可用的 JavaScript 对象。


#### stringify
> 将 JavaScript 值转换为 JSON 字符串
> 默认情况下，JSON.stringify()会输出不包含空格或缩进的 JSON 字符串
> 在序列化 JavaScript 对象时，所有函数和原型成员都会有意地在结果中省略。此外，值为 undefined的任何属性也会被跳过。
> 参数:
> 参数1: 过滤器，可以是数组或函数；
> 参数2:是用于缩进结果 JSON 字符串的选项。

```html
<script>
let book = { 
 title: "Professional JavaScript", 
 authors: [ 
 "Nicholas C. Zakas", 
 "Matt Frisbie" 
 ], 
 edition: 4, 
 year: 2017,
 test: undefined
}; 
let jsonText = JSON.stringify(book);
// "{"title":"Professional JavaScript","authors":["Nicholas C. Zakas","Matt Frisbie"],"edition":4,"year":2017}"
</script>
```

```html
<script>
let book = { 
 title: "Professional JavaScript", 
 authors: [ 
 "Nicholas C. Zakas", 
 "Matt Frisbie" 
 ], 
 edition: 4, 
 year: 2017 
}; 
let jsonText = JSON.stringify(book, ["title", "edition"]);
// "{"title":"Professional JavaScript","edition":4}"
</script>
```

```html
<script>
let book = { 
    title: "Professional JavaScript", 
    authors: [ 
        "Nicholas C. Zakas", 
        "Matt Frisbie" 
    ], 
    edition: 4, 
    year: 2017,
    test: undefined
}; 
let jsonText = JSON.stringify(book, (key, value) => { 
    switch(key) { 
        case "authors": 
            return value.join(",") 
        case "year": 
            return 5000; 
        case "edition": 
            return undefined;
        case "test": 
            return 'undefined'; 
        default: 
            return value; 
    } 
});
// "{"title":"Professional JavaScript","authors":"Nicholas C. Zakas,Matt Frisbie","year":5000,"test":"undefined"}"
</script>
```

```html
<script>
let book = { 
 title: "Professional JavaScript", 
 authors: [ 
 "Nicholas C. Zakas", 
 "Matt Frisbie" 
 ], 
 edition: 4, 
 year: 2017 
}; 
let jsonText = JSON.stringify(book, null, 4);
// "{
//     "title": "Professional JavaScript",
//     "authors": [
//         "Nicholas C. Zakas",
//         "Matt Frisbie"
//     ],
//     "edition": 4,
//     "year": 2017
// }"
</script>
```

```html
<script>
let book = { 
 title: "Professional JavaScript", 
 authors: [ 
 "Nicholas C. Zakas", 
 "Matt Frisbie" 
 ], 
 edition: 4, 
 year: 2017 
}; 
let jsonText = JSON.stringify(book, null, '--');
// "{
// --"title": "Professional JavaScript",
// --"authors": [
// ----"Nicholas C. Zakas",
// ----"Matt Frisbie"
// --],
// --"edition": 4,
// --"year": 2017
// }"
</script>
```

#### parse
> 将一个 JSON 字符串转换为对象

```html
<script>
let jsonText = '{"title":"Professional JavaScript","authors":["Nicholas C. Zakas","Matt Frisbie"],"edition":4,"year":2017}';
let book = JSON.parse(jsonText);
// {title: "Professional JavaScript", authors: Array(2), edition: 4, year: 2017}
// authors: (2) ["Nicholas C. Zakas", "Matt Frisbie"]
// edition: 4
// title: "Professional JavaScript"
// year: 2017
// __proto__: Object

</script>
```

```html
<script>
let book = { 
    title: "Professional JavaScript", 
    authors: [ 
        "Nicholas C. Zakas", 
        "Matt Frisbie" 
    ], 
    edition: 4, 
    year: 2017, 
    releaseDate: new Date(2017, 11, 1) 
}; 
let jsonText = JSON.stringify(book); 
let bookCopy = JSON.parse(jsonText, (key, value) => key == "releaseDate" ? new Date(value) : value); 
alert(bookCopy.releaseDate.getFullYear());

let test = new Date(2017, 11, 1);
alert(test);
let a = new Date(test);
alert(a.getFullYear());

</script>
```

#### toJSON
> 在要序列化的对象中添加 toJSON()方法，序列化时会基于这个方法返回适当的 JSON 表示。
> 注意，箭头函数不能用来定义 toJSON()方法。主要原因是箭头函数的词法作用域是全局作用域，在这种情况下不合适。

```html
<script>
let book = { 
    title: "Professional JavaScript", 
    authors: [ 
        "Nicholas C. Zakas", 
        "Matt Frisbie" 
    ], 
    edition: 4, 
    year: 2017, 
    toJSON: function() { 
        return [this.title,this.year]
    }
}; 
let jsonText = JSON.stringify(book);
//"["Professional JavaScript",2017]"

</script>
```


