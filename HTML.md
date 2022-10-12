# HTML5

## 简介

### 网页基本概念

#### 块元素和行内元素

`块内元素： block， 行内元素： inline`

```html
<p>hello</p>
<p>world</p>	<!-- two lines -->
<span>world</span>
<span>world</span>	<!-- one line -->
```



#### 属性

**使用空格与标签名与其他属性分隔**

```html
<img src="demo.jpg" width="500">
```



### 网页基本标签

#### 网页基本标签

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        
    </body>
</html>
```



#### head子元素

-   `<meta>`

    **设置网页的元数据**

    ```html
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
      <title>Page Title</title>
    </head>
    ```

    >   `charset`用于指定网页的编码方式
    >
    >   `name`用于表示元数据的名字
    >
    >   `content`用于表示元数据的值
    >
    >   `http-equiv`属性用来覆盖 HTTP 回应的头信息字段，`content`属性是该字段的内容



-   `<title>`

    **设置网页标题**

-   `<body>`

    **网页主题内容**



### 空格和换行

#### 空格

**标签内容的头部和尾部的空格，一律忽略不计**

```html
<p>  hello world   </p>
```

**标签内容里面的多个连续空格（包含制表符`\t`），会被浏览器合并成一个**

```html
<p>hello      world</p>
```



#### 换行

**浏览器还会将文本里面的换行符（`\n`）和回车符（`\r`），替换成空格**

```html
<p>hello
    
world
</p>
```

>   HTML 源码里面的换行，不会产生换行效果



### 注释

```html
<!--
  <p>hello world</p>
-->
```





## URL(Uniform Resource Locator)

### 概述

```html
https://www.example.com/path/index.html
```



### 网址的组成部分

`https://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#anchor`

#### 协议

-   浏览器请求服务器资源的方法（默认HTTP协议）

    HTTP和HTTPS协议后面要跟`://`，其他协议不一定如此，邮件地址协议`mailto:`

#### 主机

-   主机（host）是资源所在网站或服务器的名字，又称为域名，但是有些主机没有域名，只有IP地址

#### 端口

-   同一个域名下面可能同时包含多个网站，它们之间通过端口（port）区分，默认80端口

    `www.example.com:80`

#### 路径

-   路径（path）是资源在网站的位置。比如，`/path/index.html`这个路径，指向网站的`/path`子目录下面的网页文件`index.html`

#### 查询参数

-   查询参数（parameter）是提供给服务器的额外信息，参数的位置是在路径后面，两者之间使用`?`分隔

    查询参数可以有一组或多组。每组参数都是键值对（key-value pair）的形式，同时具有键名(key)和键值(value)，它们之间使用等号（`=`）连接

#### 锚点

-   锚点（anchor）是网页内部的定位点

    使用`#`加上锚点名称，放在网址的最后，比如`#anchor`。浏览器加载页面以后，会自动滚动到锚点所在的位置



### URL字符

-   `!`：%21
-   `#`：%23
-   `$`：%24
-   `&`：%26
-   `'`：%27
-   `(`：%28
-   `)`：%29
-   `*`：%2A
-   `+`：%2B
-   `,`：%2C
-   `/`：%2F
-   `:`：%3A
-   `;`：%3B
-   `=`：%3D
-   `?`：%3F
-   `@`：%40
-   `[`：%5B
-   `]`：%5D
-   ` `  :   %20 

>   汉字的编码

`www.example.com/%e4%b8%ad%e5%9b%bd.html`

中的转义形式是`%e4%b8%ad`，国是`%e5%9b%bd`



### 绝对URL和相对URL

类似绝对路径和相对路径



### <base>

`<base>`标签指定网页内部的所有相对 URL 的计算基准。整张网页只能有一个`<base>`标签，而且只能放在`<head>`里面

```html
<head>
<base href="https://www.example.com/files/" target="_blank">
</head>
```

>   一旦设置了`<base>`，就对整个网页都有效。如果要改变某个链接的行为，只能用绝对链接替代相对链接。尤其需要注意锚点，这时锚点也是针对`<base>`计算的，而不是针对当前网页的 URL





## 网页元素的属性

有些属性是布尔属性，即属性值是一个布尔值，只有“打开”和“关闭”两种情况。这时属性值可以省略，只要添加了属性名，就表示打开该属性

```html
<input type="text" required>
```



### 全局属性

#### id

-   `id`属性是元素在网页内的唯一标识符

    ```html
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
    ```

    >   `id`属性的值必须是全局唯一的，同一个页面不能有两个相同的`id`属性。另外，`id`属性的值不得包含空格
    >
    >   `id`属性的值还可以在最前面加上`#`，放到 URL 中作为锚点

    

#### class

-   `class`属性用来对网页元素进行分类。如果不同元素的`class`属性值相同，就表示它们是一类的

    ```html
    <p class="para"></p>
    <p></p>
    <p class="para"></p>
    <p class="p1 p2 p3"></p>
    ```

    

#### title

-   `title`属性用来为元素添加附加说明。大多数浏览器中，鼠标悬浮在元素上面时，会将`title`属性值作为浮动提示，显示出来

    ```html
    <div title="info">
        <p>move your mouse here and you can see detail info</p>
    </div>
    ```



#### tabindex

-   `tabindex`属性的值是一个整数，表示用户按下 Tab 键的时候，网页焦点转移的顺序。不同的属性值有不同的含义

    -   负整数：该元素可以获得焦点（比如使用 JavaScript 的`focus()`方法），但不参与 Tab 键对网页元素的遍历。这个值通常是`-1`。
    -   `0`：该元素参与 Tab 键的遍历，顺序由浏览器指定，通常是按照其在网页里面出现的位置。
    -   正整数：网页元素按照从小到大的顺序（1、2、3、……），参与 Tab 键的遍历。如果多个元素的`tabindex`属性相同，则按照在网页源码里面出现的顺序遍历。

    ```html
    <p tabindex="0">press tab and you will goto here</p>
    ```

    >   只有那些无法获得焦点的元素（比如`<span>`、`<div>`）需要参与遍历，才有必要设置`tabindex`属性



#### accesskey

-   `accesskey`属性指定网页元素获得焦点的快捷键

    ```html
    <button accesskey="s">submit</button>
    ```

    

#### style

-   `style`属性用来指定当前元素的 CSS 样式

    ```html
    <p style="color: red;">hello</p>
    ```

    

#### hidden

-   `hidden`是一个布尔属性，表示当前的网页元素不再跟页面相关，因此浏览器不会渲染这个元素，所以就不会在网页中看到它

    ```html
    <p hidden>not visible</p>
    ```

>   CSS 的可见性设置，高于`hidden`属性。如果 CSS 设为该元素可见，`hidden`属性将无效



#### lang dir

-   `lang`属性指定网页元素使用的语言

    ```html
    <p lang="en">hello</p>
    <p lang="zh">你好</p>
    ```

    -   zh：中文
    -   zh-Hans：简体中文
    -   zh-Hant：繁体中文
    -   en：英语
    -   en-US：美国英语
    -   en-GB：英国英语
    -   es：西班牙语
    -   fr：法语

-   `dir`属性表示文字的阅读方向，有三个可能的值

    -   `ltr`：从左到右阅读，比如英语。
    -   `rtl`：从右到左阅读，阿拉伯语、波斯语、希伯来语都属于这一类。
    -   `auto`：浏览器根据内容的解析结果，自行决定。



#### contenteditable

-   HTML 网页的内容默认是用户不能编辑，`contenteditable`属性允许用户修改内容

    -   `true`或空字符串：内容可以编辑
    -   `false`：不可以编辑

    ```
    <p contenteditable="true">
    this paragraph can be edited
    </p>
    ```

>   该属性是枚举属性，不是布尔属性，规范的写法是最好带上属性值



#### spellcheck

-   `spellcheck`属性就表示，是否打开拼写检查

    -   `true`：打开拼写检查
    -   `false`：关闭拼写检查

    ```html
    <p contenteditable="true" spellcheck="true">
    which one is right? separate seperate
    </p>
    ```

>   枚举属性，所以最好不要省略它的值。如果没有指定这个属性，浏览器将自行决定是否打开拼写检查



#### data

-   `data-`属性用于放置自定义数据。如果没有其他属性或元素合适放置数据，就可以放在`data-`属性

    ```html
    <a href="#" class="tooltip" data-tip="this is the tip!">link</a>
    ```

>   由于`data`属性只能通过 CSS 或 JavaScript 利用，所以这里不做详细介绍了。下面是 CSS 的例子





## HTML字符编码

网页包含了大量的文字，浏览器必须知道这些文字的编码方法，才能把文字还原出来

-   一般情况下，服务器向浏览器发送 HTML 网页文件时，会通过 HTTP 头信息，声明网页的编码方式

    ```html
    Content-Type: text/html; charset=UTF-8
    ```

    

    

### 字符的数字表示法

```html
<p>hello</p>
<!-- 等同于 -->
<p>&#104;&#101;&#108;&#108;&#111;</p>
<!-- 等同于 -->
<p>&#x68;&#x65;&#x6c;&#x6c;&#x6f;</p>
```

>   HTML 标签本身不能使用码点表示，否则浏览器会认为这是所要显示的文本内容，而不是标签



### 字符的实体表示法

-   `<`：`<`
-   `>`：`>`
-   `"`：`"`
-   `'`：`'`
-   `&`：`&`
-   `©`：`©`
-   `#`：`#`
-   `§`：`§`
-   `¥`：`¥`
-   `$`：`$`
-   `£`：`£`
-   `¢`：`¢`
-   `%`：`%`
-   `*`：`$ast;`
-   `@`：`@`
-   `^`：`^`
-   `±`：`±`
-   space：` `





## 网页的语义结构

HTML 标签的一个重要作用，就是声明网页元素的性质，使得用户只看标签，就能了解这个元素的意义

```html
<body>
  <header>页眉</header>
  <main>
    <article>
      <h1>文章标题</h1>
      <p>文章内容</p>
    </article>
  </main>
  <footer>页尾</footer>
</body>
```



### 常用标签

#### `<header>`

`<header>`标签可以用在多个场景，既可以表示整个网页的头部，也可以表示一篇文章或者一个区块的头部

-   用在网页头部，称为页眉

    ```html
    <header>
      <h1>公司名称</h1>
      <ul>
        <li><a href="/home">首页</a></li>
        <li><a href="/about">关于</a></li>
        <li><a href="/contact">联系</a></li>
      </ul>
      <form target="/search">
        <input name="q" type="search" />
        <input type="submit" />
      </form>
    </header>
    ```

-   如果`<header>`用在文章的头部，则可以把文章标题、作者等信息放进去

    ```html
    <article>
      <header>
        <h2>文章标题</h2>
        <p>张三，发表于2010年1月1日</p>
      </header>
    </article>
    ```



#### `<footer>`

`<footer>`标签表示网页、文章或章节的尾部。如果用于整张网页的尾部，就称为“页尾”，通常包含版权信息或者其他相关信息

-   版权信息放在`<footer>`里面

    ```html
    <body>
      <footer>
        <p>© 2018 xxx 公司</p>
      </footer>
    </body>
    ```

-   `<footer>`也可以放在文章里面

    ```html
    <article>
      <header>
        <h1>文章标题</h1>
      </header>
      <footer>
        <p>© 禁止转贴</p>
      </footer>
    </body>
    ```

    

#### `<main>`

`<main>`标签表示页面的主体内容，一个页面只能有一个`<main>`

```html
<body>
    <header>页眉</header>
    <main>
      	<article>文章</article>
    </main>
    <aside>侧边栏</aside>
    <footer>页尾</footer>
</body>
```



#### `<article>`

文章的主体

#### `<aside>`

`<aside>`标签用来放置与网页或文章主要内容间接相关的部分。网页级别的`<aside>`，可以用来放置侧边栏，但不一定就在页面的侧边；文章级别的`<aside>`，可以用来放置评论或注释

```html
<body>
	<main>
        <p>第一段</p>
        <aside>
          <p>本段是文章的重点。</p>
        </aside>
 	</main>
  	<aside>侧边栏</aside>
</body>
```



#### `<section>`

`<section>`标签表示一个含有主题的独立部分，通常用在文档里面表示一个章节

`<article>`可以包含多个`<section>`。`<section>`总是多个一起使用，一个页面不能只有一个`<section>`

```html
<article>
    <h1>文章标题</h1>
    <section>
        <h2>第一章</h2>
        <p>...</p>
    </section>
    <section>
        <h2>第二章</h2>
        <p>...</p>
    </section>
</article>
```



#### `<nav>`

-   `<nav>`标签用于放置页面或文档的导航信息

    ```html
    <nav>
        <ol>
            <li><a href="item-a">商品 A</a></li>
            <li><a href="item-b">商品 B</a></li>
            <li>商品 C</li>
        </ol>
    </nav>
    ```

    

#### `<hgroup>`

果主标题包含多级标题（比如带有副标题），那么可以使用`<hgroup>`标签，将多级标题放在其中

```html
<hgroup>
    <h1>Heading 1</h1>
    <h2>Subheading 1</h2>
    <h2>Subheading 2</h2>
</hgroup>
```

