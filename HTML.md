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





## 标签

### 文本标签

#### `<div>`

-   `<div>`是一个通用标签，表示一个区块（division）

```html
<div class="main">
  <div class="article">
    <div class="title">
      <h1>文章标题</h1>
    </div>
  </div>
</div>
<!-- HTML5 -->
<main>
  <article>
    <header>
      <h1>文章标题</h1>
    </header>
  </article>
</main>
```

>   `<div>`是无语义的块级元素，只要样式上需要多个块级元素组合在一起，就可以使用`<div>`

```html
<div>
    <img src="warning.jpg" alt="警告">
    <p>小心</p>
</div>
```



#### `<p>`

-   `<p>`标签是一个块级元素，代表文章的一个段落（paragraph）



#### `<span>`

-   `<span>`是一个通用目的的行内标签（即不会产生换行），它通常用作 CSS 样式的钩子



#### `<br> <wbr>`

-   `<br>`让网页产生一个换行效果。该标签是单独使用的，没有闭合标签

    >   注意，块级元素的间隔，不要使用`<br>`来产生，而要使用 CSS 指定

-   `<wbr>`标签跟`<br>`很相似，表示一个可选的断行。如果一行的宽度足够，则不断行；如果宽度不够，需要断行，就在`<wbr>`的位置的断行



#### `<hr>`

-   `<hr>`用来在一篇文章中分隔两个不同的主题，浏览器会将其渲染为一根水平线。该标签是单独使用的，没有闭合标签

    ```html
    <p>第一个主题</p>
    <hr>
    <p>第二个主题</p>
    ```



#### `<pre>`

-   `<pre>`是一个块级元素，表示保留原来的格式（preformatted）

    ```html
    <pre>hello
       world</pre>
    ```

    

#### font

-   `<em> <i>`斜体
-   `<strong> <b>`粗体
-   `<sub> <sup> <var>`上下标和变量
-   `<u> <s>`下划线和删除线
-   `<blockquote> <site> <q>`引用和引言
-   `<code>`代码块
-   `<kbd> <samp>`获取输入和程序输出样例
-   `<mark>`突出显示
-   `<small>`以小一号字体显示
-   `<time> <data>`表示有效时间和值
    -   有效年份：`2011`
    -   有效月份：`2011-11`
    -   有效日期：`2011-11-18`
    -   无年份的日期：`11-18`
    -   年度的第几周：`2011-W47`
    -   有效时间：`14:54`、`14:54:39`、`14:54:39.929`
    -   日期和时间：`2011-11-18T14:54:39.929`
-   `<address>`表示联系方式（通常放在footer里）
-   `<abbr>`缩写
-   `<del> <ins>`删除和添加的内容
-   `<dfn>`专业术语
-   `<ruby>`东亚语言的语音
    -   `<rp>`：标注语音符号的起始符号（默认为半角括号）和结束符号（默认为半角右括号），默认不显示
    -   `<rt>`：标注语音符号
    -   `<rb>`：划分文字单位，与语音一一对应
    -   `<rbc>`：`<rb>`的容器，主要作用是将语音显示在文字的右侧
-   `<bdo> <bdi>`文本阅读方向（右到左）（左到右）



### 列表标签

#### `<ol>`

-   reversed

    产生倒序输出

-   start

    表示数字列表的起始编号

-   type

    指定数字编号的样式

    -   `a`：小写字母
    -   `A`：大写字母
    -   `i`：小写罗马数字
    -   `I`：大写罗马数字
    -   `1`：整数（默认值）



#### `<ul>`

`<ul>`标签是一个无序列表容器（unordered list）



#### `<li>`

`<li>`表示列表项，用在`<ol>`或`<ul>`容器之中，`<li>`有一个`value`属性，定义当前列表项的编号



#### `<dl> <dt> <dd>`

-   `<dl>`列表
-   `<dd>`默认在`<dt>`的下方缩进显示



### 图像标签

#### `<img>`

-   alt
-   width height
-   srcset sizes
-   referrerpolicy
-   crossorigin
    -   anonymous（跨域请求不带有用户凭证）通常式Cookie
    -   use-credentials（跨域请求带有用户凭证）
-   loading
    -   auto（浏览器默认行为）相当于不使用loading
    -   lazy（启用懒加载）
    -   eager（立即加载资源，无论其位置）

```html
<a href="example.html">
  <img
    src="../../local/demo.jpg"
    alt="demo picture"
    width="400"
    height="300"
    loading="lazy"
  />
</a>
```



#### `<figure> <figcaption>`

`<figure>`标签可以理解是一个图像区块，将图像和相关信息封装在一起。`<figcaption>`是它的可选的子元素，表示图像的标题

```html
<figure>
  <img src="https://example.com/foo.jpg">
  <figcaption>demo</figcaption>
</figure>
```

除了图像，`<figure>`还可以封装引言、代码、诗歌

```html
<figure>
  <p><code>const foo = 'hello';</code></p>
  <figcaption>JavaScript code example</figcaption>
</figure>
```



#### 响应式图像

给出不同的图像来适应不同的像素密度

```html
<img srcset="foo-320w.jpg,
             foo-480w.jpg 1.5x,
             foo-640w.jpg 2x"
     src="foo-640w.jpg">
```



不用尺寸的屏幕显示不同大小的图像

```html
<img srcset="foo-160.jpg 160w,
             foo-320.jpg 320w,
             foo-640.jpg 640w,
             foo-1280.jpg 1280w"
     sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            254px"
     src="foo-1280.jpg">
```



#### `<pictuire>`

-   `<source> <img>`

同时适配像素密度和屏幕大小

```html
<picture>
  <source
    srcset="homepage-person@desktop.png, homepage-person@desktop-2x.png 2x"
    media="(min-width: 990px)"
  />
  <source
    srcset="homepage-person@tablet.png, homepage-person@tablet-2x.png 2x"
    media="(min-width: 750px)"
  />
  <img
    srcset="homepage-person@mobile.png, homepage-person@mobile-2x.png 2x"
    alt="Shopify Merchant, Corrine Anestopoulos"
  />
</picture>
```



`<picture>`标签还可以用来选择不用格式的图像

```html
<picture>
  <source type="image/svg+xml" srcset="logo.xml">
  <source type="image/webp" srcset="logo.webp"> 
  <img src="logo.png" alt="ACME Corp">
</picture>
```



### 链接标签

#### `<a>`

```html
<a href="https://wikipedia.org/">维基百科</a>
<a href="https://www.example.com/">
  <img src="https://www.example.com/foo.jpg">
</a>
```

-   href

    `href`链接指向的网址，可以是一个URL或者锚点

    ```html
    <a href="#demo">示例</a>
    ```

    

-   hreflang

    `hreflang`属性给出链接指向的网址所使用的语言，纯粹是提示性的，没有实际功能

    ```html
    <a
      href="https://www.example.com"
      hreflang="en"
    >示例网址</a>
    ```

    

-   title

    ```html
    <a
      href="https://www.example.com/"
      title="hello"
    >示例</a>。
    ```

    

-   target

    指定如何展示打开的链接

    ```html
    <a
      href="https://www.example.com"
      target="_blank"
    >示例链接</a>
    ```

    -   `_self`：当前窗口打开，这是默认值
    -   `_blank`：新窗口打开
    -   `_parent`：上层窗口打开，这通常用于从父窗口打开的子窗口，或者`<iframe>`里面的链接。如果当前窗口没有上层窗口，这个值等同于`_self`
    -   `_top`：顶层窗口打开，如果当前窗口就是顶层窗口，这个值等同于`_self`

    

-   rel

    说明链接与当前页面的关系

    ```html
    <a href="help.html" rel="help">help</a>
    ```

    -   `alternate`：当前文档的另一种形式，比如翻译
    -   `author`：作者链接
    -   `bookmark`：用作书签的永久地址
    -   `external`：当前文档的外部参考文档
    -   `help`：帮助链接
    -   `license`：许可证链接
    -   `next`：系列文档的下一篇
    -   `nofollow`：告诉搜索引擎忽略该链接，主要用于用户提交的内容，防止有人企图通过添加链接，提高该链接的搜索排名
    -   `noreferrer`：告诉浏览器打开链接时，不要将当前网址作为 HTTP 头信息的`Referer`字段发送出去，这样可以隐藏点击的来源
    -   `noopener`：告诉浏览器打开链接时，不让链接窗口通过 JavaScript 的`window.opener`属性引用原始窗口，这样就提高了安全性
    -   `prev`：系列文档的上一篇
    -   `search`：文档的搜索链接
    -   `tag`：文档的标签链接

    

-   referrerpolicy

    `no-referrer`表示不发送`Referer`字段，`same-origin`表示同源时才发送`Referer`字段，`origin`表示只发送源信息（协议+域名+端口）

    

-   ping

    `ping`属性指定一个网址，用户点击的时候，会向该网址发出一个 POST 请求，通常用于跟踪用户的行为

    

-   type

    `type`属性给出链接 URL 的 MIME 类型，比如到底是网页，还是图像或文件

    ```html
    <a
      href="smile.jpg"
      type="image/jpeg"
    >示例图片</a>
    ```

    

-   download

    `download`属性表明当前链接用于下载，而不是跳转到另一个 URL

    ```html
    <a href="demo.txt" download>下载</a>
    <a href="foo.exe" download="bar.exe">点击下载</a>
    <a href="data:,Hello%2C%20World!">点击</a>
    <a href="data:,Hello%2C%20World!" download="hello.txt">点击</a>
    ```

    

    

#### 邮件链接

链接也可以指向一个邮件地址，使用`mailto`协议

```html
<a href="mailto:contact@example.com">联系我们</a>
<a
  href="mailto:foo@bar.com?cc=test@test.com&subject=The%20subject&body=The%20body"
  >发送邮件</a
>
<a href="mailto:">告诉朋友</a>
```



#### 电话链接

如果是手机浏览的页面，还可以使用`tel`协议，创建电话链接

```html
<a href="tel:13312345678">13312345678</a>
```



#### `<link>`

`<link>`标签主要用于将当前网页与相关的外部资源联系起来，通常放在`<head>`元素里面。最常见的用途就是加载 CSS 样式表

```html
<link rel="stylesheet" type="text/css" href="theme.css">

<link href="default.css" rel="stylesheet" title="Default Style">
<link href="fancy.css" rel="alternate stylesheet" title="Fancy">
<link href="basic.css" rel="alternate stylesheet" title="Basic">
```

`<link>`还可以加载网站的 favicon 图标文件

```html
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<!-- 手机访问时，网站通常需要提供不同分辨率的图标文件 -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png">
```

`<link>`也用于提供文档的相关链接，比如下面是给出文档的 RSS Feed 地址

```html
<link rel="alternate" type="application/atom+xml" href="/blog/news/atom">
```

`rel`属性表示外部资源与当前文档之间的关系，是`<link>`标签的必需属性。它可以但不限于取以下值

-   `alternate`：文档的另一种表现形式的链接，比如打印版
-   `author`：文档作者的链接
-   `dns-prefetch`：要求浏览器提前执行指定网址的 DNS 查询
-   `help`：帮助文档的链接
-   `icon`：加载文档的图标文件
-   `license`：许可证链接
-   `next`：系列文档下一篇的链接
-   `pingback`：接收当前文档 pingback 请求的网址
-   `preconnect`：要求浏览器提前与给定服务器，建立 HTTP 连接
-   `prefetch`：要求浏览器提前下载并缓存指定资源，供下一个页面使用。它的优先级较低，浏览器可以不下载
-   `preload`：要求浏览器提前下载并缓存指定资源，当前页面稍后就会用到。它的优先级较高，浏览器必须立即下载
-   `prerender`：要求浏览器提前渲染指定链接。这样的话，用户稍后打开该链接，就会立刻显示，感觉非常快
-   `prev`：表示当前文档是系列文档的一篇，这里给出上一篇文档的链接
-   `search`：提供当前网页的搜索链接
-   `stylesheet`：加载一张样式表

```html
<!-- 作者信息 -->
<link rel="author" href="humans.txt">
<!-- 版权信息 -->
<link rel="license" href="copyright.html">
<!-- 另一个语言的版本 -->
<link rel="alternate" href="https://es.example.com/" hreflang="es">
<!-- 联系方式 -->
<link rel="me" href="https://google.com/profiles/someone" type="text/html">
<link rel="me" href="mailto:name@example.com">
<link rel="me" href="sms:+15035550125">
<!-- 历史资料 -->
<link rel="archives" href="http://example.com/archives/">
<!-- 目录 -->
<link rel="index" href="http://example.com/article/">
<!-- 导航 -->
<link rel="first" href="http://example.com/article/">
<link rel="last" href="http://example.com/article/?page=42">
<link rel="prev" href="http://example.com/article/?page=1">
<link rel="next" href="http://example.com/article/?page=3">
```



##### 资源的预加载

-   <link rel="preload">

    `<link rel="preload">`告诉浏览器尽快下载并缓存资源（如脚本或样式表），该指令优先级较高，浏览器肯定会执行。当加载页面几秒钟后需要该资源时，它会很有用。下载后，浏览器不会对资源执行任何操作，脚本未执行，样式表未应用。它只是缓存，当其他东西需要它时，它立即可用

    ```html
    <link rel="preload" href="image.png" as="image">
    <link rel="preload" href="style.css" as="style">
    <link rel="preload" href="main.js" as="script">
    ```

    `as`属性指定加载资源的类型，它的值一般有下面几种

    -   script
    -   style
    -   image
    -   media
    -   document

    有时还需要`type`属性，进一步明确 MIME 类型

    ```html
    <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4">
    ```

    >   上面代码要求浏览器提前下载视频文件，并且说明这是 MP4 编码

    预下载字体文件

    ```html
    <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
    ```

    上面的预加载只是加载到浏览器的缓存，如果想要立即执行

    ```html
    <link rel="preload" as="style" href="async_style.css" onload="this.rel='stylesheet'">
    ```

    >   `onload`指定的回调函数会在脚本下载完成后执行，立即插入页面

    

-   `<link rel="prefetch">`

    `<link rel="prefetch">`的使用场合是，如果后续的页面需要某个资源，并且希望预加载该资源，以便加速页面渲染。该指令不是强制性的，优先级较低，浏览器不一定会执行。这意味着，浏览器可以不下载该资源，比如连接速度很慢时

    ```html
    <link rel="prefetch" href="https://www.example.com/">
    ```

    

-   `<link rel="preconnect">`

    `<link rel="preconnect">`要求浏览器提前与某个域名建立 TCP 连接。当你知道，很快就会请求该域名时，这会很有帮助

    ```html
    <link rel="preconnect" href="https://www.example.com/">
    ```

    

-   `<link rel="dns-prefetch">`

    `<link rel="dns-prefetch">`要求浏览器提前执行某个域名的 DNS 解析

    ```html
    <link rel="dns-prefetch" href="//example.com/">
    ```

    

##### media属性

`media`属性给出外部资源生效的媒介条件

```html
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">

<link rel="preload" as="image" href="map.png" media="(max-width: 600px)">
<link rel="preload" as="script" href="map.js" media="(min-width: 601px)">
```



##### 其他属性

-   `crossorigin`：加载外部资源的跨域设置
-   `href`：外部资源的网址
-   `referrerpolicy`：加载时`Referer`头信息字段的处理方法
-   `as`：`rel="preload"`或`rel="prefetch"`时，设置外部资源的类型
-   `type`：外部资源的 MIME 类型，目前仅用于`rel="preload"`或`rel="prefetch"`的情况
-   `title`：加载样式表时，用来标识样式表的名称
-   `sizes`：用来声明图标文件的尺寸，比如加载苹果手机的图标文件



#### `<script>`

`<script>`用于加载脚本代码，主要是js代码

```html
<script>
console.log('hello world');
</script>
```

`<script>`也可以加载外部脚本，src属性给出外部脚本的地址

```html
<script src="javascript.js"></script>
<!-- 完整写法 -->
<script type="text/javascript" src="javascript.js"></script>
<!-- type属性也可以设成module，表示这是一个 ES6 模块，不是传统脚本 -->
<script type="module" src="main.js"></script>
<!-- 对于那些不支持 ES6 模块的浏览器，可以设置nomodule属性。支持 ES6 模块的浏览器，会不加载指定的脚本。这个属性通常与type="module"配合使用，作为老式浏览器的回退方案 -->
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

-   `async`：该属性指定 JavaScript 代码为异步执行，不是造成阻塞效果，JavaScript 代码默认是同步执行
-   `defer`：该属性指定 JavaScript 代码不是立即执行，而是页面解析完成后执行
-   `crossorigin`：如果采用这个属性，就会采用跨域的方式加载外部脚本，即 HTTP 请求的头信息会加上`origin`字段
-   `integrity`：给出外部脚本的哈希值，防止脚本被篡改。只有哈希值相符的外部脚本，才会执行
-   `nonce`：一个密码随机数，由服务器在 HTTP 头信息里面给出，每次加载脚本都不一样。它相当于给出了内嵌脚本的白名单，只有在白名单内的脚本才能执行
-   `referrerpolicy`：HTTP 请求的`Referer`字段的处理方法



#### `<noscript>`

`<noscript>`标签用于浏览器不支持或关闭 JavaScript 时，所要显示的内容。用户关闭 JavaScript 可能是为了节省带宽，以延长手机电池寿命，或者为了防止追踪，保护隐私

```html
<noscript>
  您的浏览器不能执行 JavaScript 语言，页面无法正常显示。
</noscript>
```



### 多媒体标签

#### `<vedio>`

`<video>`标签是一个块级元素，用于放置视频。如果浏览器支持加载的视频格式，就会显示一个播放器，否则显示`<video>`内部的子元素

```html
<video src="example.mp4" controls>
  <p>你的浏览器不支持 HTML5 视频，请下载<a href="example.mp4">视频文件</a>。</p>
</video>
```

-   `src`：视频文件的网址
-   `controls`：播放器是否显示控制栏。该属性是布尔属性，不用赋值，只要写上属性名，就表示打开。如果不想使用浏览器默认的播放器，而想使用自定义播放器，就不要使用该属性
-   `width`：视频播放器的宽度，单位像素
-   `height`：视频播放器的高度，单位像素
-   `autoplay`：视频是否自动播放，该属性为布尔属性
-   `loop`：视频是否循环播放，该属性为布尔属性
-   `muted`：是否默认静音，该属性为布尔属性
-   `poster`：视频播放器的封面图片的 URL
-   `preload`：视频播放之前，是否缓冲视频文件。这个属性仅适合没有设置`autoplay`的情况。它有三个值，分别是`none`（不缓冲）、`metadata`（仅仅缓冲视频文件的元数据）、`auto`（可以缓冲整个文件）
-   `playsinline`：iPhone 的 Safari 浏览器播放视频时，会自动全屏，该属性可以禁止这种行为。该属性为布尔属性
-   `crossorigin`：是否采用跨域的方式加载视频。它可以取两个值，分别是`anonymous`（跨域请求时，不发送用户凭证，主要是 Cookie），`use-credentials`（跨域时发送用户凭证）
-   `currentTime`：指定当前播放位置（双精度浮点数，单位为秒）。如果尚未开始播放，则会从这个属性指定的位置开始播放
-   `duration`：该属性只读，指示时间轴上的持续播放时间（总长度），值为双精度浮点数（单位为秒）。如果是流媒体，没有已知的结束时间，属性值为`+Infinity`

```html
<video width="400" height="400"
    autoplay loop muted
    poster="poster.png">
</video>
```

使用`<source>`标签，放置同一个视频的多种格式

```html
<video controls>
  <source src="example.mp4" type="video/mp4">
  <source src="example.webm" type="video/webm">
  <p>你的浏览器不支持 HTML5 视频，请下载<a href="example.mp4">视频文件</a>。</p>
</video>
```



#### `<audio>`

`<audio>`标签是一个块级元素，用于放置音频，用法与`<video>`标签基本一致

```html
<audio controls>
  <source src="foo.mp3" type="audio/mp3">
  <source src="foo.ogg" type="audio/ogg">
  <p>你的浏览器不支持 HTML5 音频，请直接下载<a href="foo.mp3">音频文件</a>。</p>
</audio>
```

-   `autoplay`：是否自动播放，布尔属性
-   `controls`：是否显示播放工具栏，布尔属性。如果不设置，浏览器不显示播放界面，通常用于背景音乐
-   `crossorigin`：是否使用跨域方式请求
-   `loop`：是否循环播放，布尔属性
-   `muted`：是否静音，布尔属性
-   `preload`：音频文件的缓冲设置
-   `src`：音频文件网址



#### `<track>`

`<track>`标签用于指定视频的字幕，格式是 WebVTT （`.vtt`文件），放置在`<video>`标签内部。它是一个单独使用的标签，没有结束标签

```html
<video controls src="sample.mp4">
   <track label="英文" kind="subtitles" src="subtitles_en.vtt" srclang="en">
   <track label="中文" kind="subtitles" src="subtitles_cn.vtt" srclang="cn" default>
</video>
```

-   `label`：播放器显示的字幕名称，供用户选择
-   `kind`：字幕的类型，默认是`subtitles`，表示将原始声音成翻译外国文字，比如英文视频提供中文字幕。另一个常见的值是`captions`，表示原始声音的文字描述，通常是视频原始使用的语言，比如英文视频提供英文字幕
-   `src`：vtt 字幕文件的网址
-   `srclang`：字幕的语言，必须是有效的语言代码
-   `default`：是否默认打开，布尔属性



#### `<source>`

`<source>`标签用于`<picture>`、`<video>`、`<audio>`的内部，用于指定一项外部资源。单标签是单独使用的，没有结束标签

-   `type`：指定外部资源的 MIME 类型
-   `src`：指定源文件，用于`<video>`和`<audio>`
-   `srcset`：指定不同条件下加载的图像文件，用于`<picture>`
-   `media`：指定媒体查询表达式，用于`<picture>`
-   `sizes`：指定不同设备的显示大小，用于`<picture>`，必须跟`srcset`搭配使用



#### `<embed>`

`<embed>`标签用于嵌入外部内容，这个外部内容通常由浏览器插件负责控制。由于浏览器的默认插件都不一致，很可能不是所有浏览器的用户都能访问这部分内容，建议谨慎使用

```html
<embed type="video/webm"
       src="/media/examples/flower.mp4"
       width="250"
       height="200">
```

-   `height`：显示高度，单位为像素，不允许百分比
-   `width`：显示宽度，单位为像素，不允许百分比
-   `src`：嵌入的资源的 URL
-   `type`：嵌入资源的 MIME 类型



#### `<object> <param>`

`<object>`标签作用跟`<embed>`相似，也是插入外部资源，由浏览器插件处理。它可以视为`<embed>`的替代品，有标准化行为，只限于插入少数几种通用资源，没有历史遗留问题，因此更推荐使用

```html
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>
```

-   `data`：嵌入的资源的 URL
-   `form`：当前网页中相关联表单的`id`属性（如果有的话）
-   `height`：资源的显示高度，单位为像素，不能使用百分比
-   `width`：资源的显示宽度，单位为像素，不能使用百分比
-   `type`：资源的 MIME 类型
-   `typemustmatch`：布尔属性，表示`data`属性与`type`属性是否必须匹配



### iframe

#### 基本用法

`<iframe>`标签生成一个指定区域，在该区域中嵌入其他网页。它是一个容器元素，如果浏览器不支持`<iframe>`，就会显示内部的子元素

```html
<iframe src="https://www.example.com"
        width="100%" height="500" frameborder="0"
        allowfullscreen sandbox>
  <p><a href="https://www.example.com">点击打开嵌入页面</a></p>
</iframe>
```

-   `allowfullscreen`：允许嵌入的网页全屏显示，需要全屏 API 的支持，请参考相关的 JavaScript 教程
-   `frameborder`：是否绘制边框，`0`为不绘制，`1`为绘制（默认值）。建议尽量少用这个属性，而是在 CSS 里面设置样式
-   `src`：嵌入的网页的 URL
-   `width`：显示区域的宽度
-   `height`：显示区域的高度
-   `sandbox`：设置嵌入的网页的权限，详见下文
-   `importance`：浏览器下载嵌入的网页的优先级，可以设置三个值。`high`表示高优先级，`low`表示低优先级，`auto`表示由浏览器自行决定
-   `name`：内嵌窗口的名称，可以用于`<a>`、`<form>`、`<base>`的`target`属性
-   `referrerpolicy`：请求嵌入网页时，HTTP 请求的`Referer`字段的设置。参见`<a>`标签的介绍



#### sandbox属性

允许设置嵌入的网页的权限，等同于提供了一个隔离层，即“沙箱”

```html
<iframe src="https://www.example.com" sandbox>
</iframe>
```

-   `allow-forms`：允许提交表单
-   `allow-modals`：允许提示框，即允许执行`window.alert()`等会产生弹出提示框的 JavaScript 方法
-   `allow-popups`：允许嵌入的网页使用`window.open()`方法弹出窗口
-   `allow-popups-to-escape-sandbox`：允许弹出窗口不受沙箱的限制
-   `allow-orientation-lock`：允许嵌入的网页用脚本锁定屏幕的方向，即横屏或竖屏
-   `allow-pointer-lock`：允许嵌入的网页使用 Pointer Lock API，锁定鼠标的移动
-   `allow-presentation`：允许嵌入的网页使用 Presentation API
-   `allow-same-origin`：不打开该项限制，将使得所有加载的网页都视为跨域
-   `allow-scripts`：允许嵌入的网页运行脚本（但不创建弹出窗口）
-   `allow-storage-access-by-user-activation`：允许在用户激动的情况下，嵌入的网页通过 Storage Access API 访问父窗口的储存
-   `allow-top-navigation`：允许嵌入的网页对顶级窗口进行导航
-   `allow-top-navigation-by-user-activation`：允许嵌入的网页对顶级窗口进行导航，但必须由用户激活
-   `allow-downloads-without-user-activation`：允许在没有用户激活的情况下，嵌入的网页启动下载

>   注意，不要同时设置`allow-scripts`和`allow-same-origin`属性，这将使得嵌入的网页可以改变或删除`sandbox`属性



#### loading属性

`loading`属性可以触发`<iframe>`网页的懒加载

```html
<iframe src="https://example.com" loading="lazy"></iframe>
```

-   `auto`：浏览器的默认行为，与不使用`loading`属性效果相同
-   `lazy`：`<iframe>`的懒加载，即将滚动进入视口时开始加载
-   `eager`：立即加载资源，无论在页面上的位置如何

>   如果`<iframe>`是隐藏的，则`loading`属性无效

-   `<iframe>`的宽度和高度为4像素或更小
-   样式设为`display: none`或`visibility: hidden`
-   使用定位坐标为负`X`或负`Y`，将`<iframe`>放置在屏幕外



### 表格标签

#### `<table> <caption>`

`<table>`是一个块级容器标签，所有表格内容都要放在这个标签里面

```html
<table>
  <caption>示例表格</caption>
</table>
```



#### `<thead> <tbody> <tfoot>`

`<thead>`、`<tbody>`、`<tfoot>`都是块级容器元素，且都是`<table>`的一级子元素，分别表示表头、表体和表尾

```html
<table>
  <thead>... ...</thead>
  <tbody>... ...</tbody>
  <tfoot>... ...</tfoot>
</table>
```



#### `<colgroup> <col>`

`<colgroup>`是`<table>`的一级子元素，用来包含一组列的定义。`<col>`是`<colgroup>`的子元素，用来定义表格的一列

```html
<table>
  <colgroup>
    <col class="c1">
    <col class="c2">
    <col class="c3">
  </colgroup>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
</table>
```

`<col>`有一个`span`属性，值为正整数，默认为`1`。如果大于1，就表示该列的宽度包含连续的多列

```html
<table>
  <colgroup>
    <col>
    <col span="2">
    <col>
  </colgroup>
</table>
```



#### `<tr>`

`<tr>`标签表示表格的一行（table row）。如果表格有`<thead>`、`<tbody>`、`<tfoot>`，那么`<tr>`就放在这些容器元素之中，否则直接放在`<table>`的下一级

```html
<table>
  <tr>...</tr>
  <tr>...</tr>
  <tr>...</tr>
</table>
```



#### `<th> <td>`

`<th>`和`<td>`都用来定义表格的单元格。其中，`<th>`是标题单元格，`<td>`是数据单元格

```html
<table>
  <tr>
    <th>学号</th><th>姓名</th>
  </tr>
  <tr>
    <td>001</td><td>张三</td>
  </tr>
  <tr>
    <td>002</td><td>李四</td>
  </tr>
</table>
```

-   `colspan`属性，`rowspan`属性

    单元格会有跨越多行或多列的情况，这要通过`colspan`属性和`rowspan`属性设置，前者表示单元格跨越的栏数，后者表示单元格跨越的行数。它们的值都是一个非负整数，默认为1

    ```html
    <table>
      <tr>
        <td colspan="2">A</td><td>B</td>
      </tr>
      <tr>
        <td>A</td><td>B</td><td>C</td>
      </tr>
    </table>
    ```

    

-   `headers`属性

    如果表格很大，单元格很多，源码里面会看不清，哪个单元格对应哪个表头，这时就可以使用`headers`属性

    ```html
    <table>
      <tr>
        <th id="no">学号</th><th id="names">姓名</th>
      </tr>
      <tr>
        <td headers="no">001</td><td headers="names">张三</td>
      </tr>
      <tr>
        <td headers="no">002</td><td headers="names">李四</td>
      </tr>
    </table>
    ```

    标题栏的`<th>`设置了`id`属性，后面的`<td>`单元格的`headers`属性就对应这些`id`属性的值，因此就能看出来这些单元格对应哪个标题栏

    

-   `scope`属性

`scope`属性只有`<th>`标签支持，一般不在`<td>`标签使用，表示该`<th>`单元格到底是栏的标题，还是列的标题

```html
<table>
  <tr>
    <th scope="col">姓名</th>
    <th scope="col">学号</th>
    <th scope="col">性别</th>
  </tr>
  <tr>
    <th scope="row">张三</th>
    <td>001</td>
    <td>男</td>
  </tr>
  <tr>
    <th scope="row">李四</th>
    <td>002</td>
    <td>男</td>
  </tr>
</table>
```

-   `row`：该行的所有单元格，都与该标题单元格相关
-   `col`：该列的所有单元格，都与该标题单元格相关
-   `rowgroup`：多行组成的一个行组的所有单元格，都与该标题单元格相关
-   `colgroup`：多列组成的一个列组的所有单元格，都与该标题单元格相关
-   `auto`：默认值，表示由浏览器自行决定



### 表单标签

#### `<form>`

`<form>`标签用来定义一个表单，所有表单内容放到这个容器元素之中

```html
<form action="https://example.com/api" method="post">
  <label for="POST-name">用户名：</label>
  <input id="POST-name" type="text" name="user">
  <input type="submit" value="提交">
</form>
```

-   `accept-charset`：服务器接受的字符编码列表，使用空格分隔，默认与网页编码相同
-   `action`：服务器接收数据的 URL
-   `autocomplete`：如果用户没有填写某个控件，浏览器是否可以自动填写该值。它的可能取值分别为`off`（不自动填写）和`on`（自动填写）
-   `method`：提交数据的 HTTP 方法，可能的值有`post`（表单数据作为 HTTP 数据体发送），`get`（表单数据作为 URL 的查询字符串发送），`dialog`（表单位于`<dialog>`内部使用）
-   `enctype`：当`method`属性等于`post`时，该属性指定提交给服务器的 MIME 类型。可能的值为`application/x-www-form-urlencoded`（默认值），`multipart/form-data`（文件上传的情况），`text/plain`
-   `name`：表单的名称，应该在网页中是唯一的。注意，如果一个控件没有设置`name`属性，那么这个控件的值就不会作为键值对，向服务器发送。
-   `novalidate`：布尔属性，表单提交时是否取消验证
-   `target`：在哪个窗口展示服务器返回的数据，可能的值有`_self`（当前窗口），`_blank`（新建窗口），`_parent`（父窗口），`_top`（顶层窗口），`<iframe>`标签的`name`属性（即表单返回结果展示在`<iframe>`窗口）

##### encrypt

`<form>`表单的`encrypt`属性，指定了采用 POST 方法提交数据时，浏览器给出的数据的 MIMI 类型。该属性可以取以下值

-   application/x-www-form-urlencoded

    `application/x-www-form-urlencoded`是默认类型，控件名和控件值都要转义（空格转为`+`号，非数字和非字母转为`%HH`的形式，换行转为CR LF），控件名和控件值之间用`=`分隔。控件按照出现顺序排列，控件之间用`&`分隔

-   multipart/form-data

    `multipart/form-data`主要用于文件上传。这个类型上传大文件时，会将文件分成多块传送，每一块的 HTTP 头信息都有`Content-Disposition`属性，值为`form-data`，以及一个`name`属性，值为控件名

    ```html
    Content-Disposition: form-data; name="mycontrol"
    ```

    ```html
    <form action="https://example.com/api"
          enctype="multipart/form-data"
          method="post">
      用户名：<input type="text" name="submit-name"><br>
      文件：<input type="file" name="files"><br>
      <input type="submit" value="上传"> <input type="reset" value="清除">
    </form>
    ```



#### `<fieldset> <legend>`

`<fieldset>`标签是一个块级容器标签，表示控件的集合，用于将一组相关控件组合成一组

```html
<form>
  <fieldset>
    <p>年龄：<input type="text" name="age"></p>
    <p>性别：<input type="text" name="gender"></p>
  </fieldset>
</form>
```

-   `disabled`：布尔属性，一旦设置会使得`<fieldset>`内部包含的控件都不可用，都变成灰色状态
-   `form`：指定控件组所属的`<form>`，它的值等于`<form>`的`id`属性
-   `name`：该控件组的名称

`<legend>`标签用来设置`<fieldset>`控件组的标题，通常是`<fieldset>`内部的第一个元素，会嵌入显示在控件组的上边框里面

```html
<fieldset>
  <legend>学生情况登记</legend>
  <p>年龄：<input type="text" name="age"></p>
  <p>性别：<input type="text" name="gender"></p>
</fieldset>
```



#### `<label>`

`<label>`标签是一个行内元素，提供控件的文字说明，帮助用户理解控件的目的

```html
<label for="user">用户名：</label>
<input type="text" name="user" id="user">
```

>   `<label>`的`for`属性关联相对应的控件，它的值是对应控件的`id`属性。所以，控件最好设置`id`属性

控件也可以放在`<label>`之中，这时不需要`for`属性和`id`属性

```html
<label>用户名：
  <input type="text" name="user">
</label>
```

-   `for`：关联控件的`id`属性
-   `form`：关联表单的`id`属性。设置了该属性后，`<label>`可以放置在页面的任何位置，否则只能放在`<form>`内部

一个控件可以有多个关联的`<label>`标签

```html
<label for="username">用户名：</label>
<input type="text" id="username" name="username">
<label for="username"><abbr title="required">*</abbr></label>
```



#### `<input>`

`<input>`标签是一个行内元素，用来接收用户的输入。它是一个单独使用的标签，没有结束标志

```html
<input>
<!-- 等同于 -->
<input type="text">
```

-   `autofocus`：布尔属性，是否在页面加载时自动获得焦点
-   `disabled`：布尔属性，是否禁用该控件。一旦设置，该控件将变灰，用户可以看到，但是无法操作
-   `form`：关联表单的`id`属性。设置了该属性后，控件可以放置在页面的任何位置，否则只能放在`<form>`内部
-   `list`：关联的`<datalist>`的`id`属性，设置该控件相关的数据列表，详见后文
-   `name`：控件的名称，主要用于向服务器提交数据时，控件键值对的键名。注意，只有设置了`name`属性的控件，才会向服务器提交，不设置就不会提交
-   `readonly`：布尔属性，是否为只读
-   `required`：布尔属性，是否为必填
-   `type`：控件类型，详见下文
-   `value`：控件的值

##### 类型

-   text

    `type="text"`是普通的文本输入框，用来输入单行文本。如果用户输入换行符，换行符会自动从输入中删除

    ```html
    <input type="text" id="name" name="name" required
           minlength="4" maxlength="8" size="10">
    ```

    -   `maxlength`：可以输入的最大字符数，值为一个非负整数
    -   `minlength`：可以输入的最小字符数，值为一个非负整数，且必须小于`maxlength`
    -   `pattern`：用户输入必须匹配的正则表达式，比如要求用户输入4个～8个英文字符，可以写成`pattern="[a-z]{4,8}"`。如果用户输入不符合要求，浏览器会弹出提示，不会提交表单
    -   `placeholder`：输入字段为空时，用于提示的示例值。只要用户没有任何字符，该提示就会出现，否则会消失
    -   `readonly`：布尔属性，表示该输入框是只读的，用户只能看，不能输入
    -   `size`：表示输入框的显示长度有多少个字符宽，它的值是一个正整数，默认等于20。超过这个数字的字符，必须移动光标才能看到
    -   `spellcheck`：是否对用户输入启用拼写检查，可能的值为`true`或`false`

-   search

    `type="search"`是一个用于搜索的文本输入框，基本等同于`type="text"`。某些浏览器会在输入的时候，在输入框的尾部显示一个删除按钮，点击就会删除所有输入，让用户从头开始输入

    ```html
    <form>
      <input type="search" id="mySearch" name="q"
        placeholder="输入搜索词……" required>
      <input type="submit" value="搜索">
    </form>
    ```

-   button

    `type="button"`是没有默认行为的按钮，通常脚本指定`click`事件的监听函数来使用

    ```html
    <input type="button" value="点击">
    ```

    >   建议尽量不使用这个类型，而使用`<button>`标签代替，一则语义更清晰，二则`<button>`标签内部可以插入图片或其他 HTML 代码

-   submit

    `type="submit"`是表单的提交按钮。用户点击这个按钮，就会把表单提交给服务器

    ```html
    <input type="submit" value="提交">
    ```

    >   如果不指定`value`属性，浏览器会在提交按钮上显示默认的文字，通常是`Submit`

    该类型有以下配套属性，用来覆盖`<form>`标签的相应设置

    -   `formaction`：提交表单数据的服务器 URL
    -   `formenctype`：表单数据的编码类型
    -   `formmethod`：提交表单使用的 HTTP 方法（`get`或`post`）
    -   `formnovalidate`：一个布尔值，表示数据提交给服务器之前，是否要忽略表单验证
    -   `formtarget`：收到服务器返回的数据后，在哪一个窗口显示

-   image

    `type="image"`表示将一个图像文件作为提交按钮，行为和用法与`type="submit"`完全一致

    ```html
    <input type="image" alt="登陆" src="login-button.png">
    ```

    -   `alt`：图像无法加载时显示的替代字符串
    -   `src`：加载的图像 URL
    -   `height`：图像的显示高度，单位为像素
    -   `width`：图像的显示宽度，单位为像素
    -   `formaction`：提交表单数据的服务器 URL
    -   `formenctype`：表单数据的编码类型
    -   `formmethod`：提交表单使用的 HTTP 方法（`get`或`post`）
    -   `formnovalidate`：一个布尔值，表示数据提交给服务器之前，是否要忽略表单验证
    -   `formtarget`：收到服务器返回的数据后，在哪一个窗口显示

-   reset

    `type="reset"`是一个重置按钮，用户点击以后，所有表格控件重置为初始值

    ```html
    <input type="reset" value="重置">
    ```

-   checkbox

    `type="checkbox"`是复选框，允许选择或取消选择该选项

    ```html
    <input type="checkbox" id="agreement" name="agreement" checked>
    <label for="agreement">是否同意</label>
    ```

    >   `value`属性的默认值是`on`。也就是说，如果没有设置`value`属性，以上例来说，选中复选框时，会提交`agreement=on`。如果没有选中，提交时不会有该项

    ```html
    <fieldset>
      <legend>你的兴趣</legend>
      <div>
        <input type="checkbox" id="coding" name="interest" value="coding">
        <label for="coding">编码</label>
      </div>
      <div>
        <input type="checkbox" id="music" name="interest" value="music">
        <label for="music">音乐</label>
      </div>
    </fieldset>
    ```

-   radio

    `type="radio"`是单选框，表示一组选择之中，只能选中一项。单选框通常为一个小圆圈，选中时会被填充或突出显示

    ```html
    <fieldset>
      <legend>性别</legend>
      <div>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">男</label>
      </div>
      <div>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">女</label>
      </div>
    </fieldset>
    ```

    -   `checked`：布尔属性，表示是否默认选中当前项。
    -   `value`：用户选中该项时，提交到服务器的值，默认为`on`

-   email

    `type="email"`是一个只能输入电子邮箱的文本输入框。表单提交之前，浏览器会自动验证是否符合电子邮箱的格式，如果不符合就会显示提示，无法提交到服务器

    ```html
    <input type="email" pattern=".+@foobar.com" size="30" required>
     <!-- 多输入 -->
    <input id="emailAddress" type="email" multiple required>
    ```

    >   注意，如果同时设置了`multiple`属性和`required`属性，零个电子邮箱是允许的，也就是该输入框允许为空

    -   `maxlength`：可以输入的最大字符数
    -   `minlength`：可以输入的最少字符数
    -   `multiple`：布尔属性，是否允许输入多个以逗号分隔的电子邮箱
    -   `pattern`：输入必须匹配的正则表达式
    -   `placeholder`：输入为空时的显示文本
    -   `readonly`：布尔属性，该输入框是否只读
    -   `size`：一个非负整数，表示输入框的显示长度为多少个字符
    -   `spellcheck`：是否对输入内容启用拼写检查，可能的值为`true`或`false`

    ```html
    <input type="email" size="40" list="defaultEmails">
    <datalist id="defaultEmails">
      <option value="jbond007@mi6.defence.gov.uk">
      <option value="jbourne@unknown.net">
      <option value="nfury@shield.org">
      <option value="tony@starkindustries.com">
      <option value="hulk@grrrrrrrr.arg">
    </datalist>
    ```

    >   上面代码中，输入焦点进入输入框以后，会显示一个下拉列表，里面有五个参考项，供用户参考

-   password

    `type="password"`是一个密码输入框。用户的输入会被遮挡，字符通常显示星号（`*`）或点（`·`）

    ```html
    <input type="password" id="pass" name="password"
               minlength="8" required>
    ```

    -   `maxlength`：可以输入的最大字符数
    -   `minlength`：可以输入的最少字符数
    -   `pattern`：输入必须匹配的正则表达式
    -   `placeholder`：输入为空时的显示文本
    -   `readonly`：布尔属性，该输入框是否只读
    -   `size`：一个非负整数，表示输入框的显示长度为多少个字符
    -   `autocomplete`：是否允许自动填充，可能的值有`on`（允许自动填充）、`off`（不允许自动填充）、`current-password`（填入当前网站保存的密码）、`new-password`（自动生成一个随机密码）
    -   `inputmode`：允许用户输入的数据类型，可能的值有`none`（不使用系统输入法）、`text`（标准文本输入）、`decimal`（数字，包含小数）、`numeric`（数字0-9）等

-   file

    `type="file"`是一个文件选择框，允许用户选择一个或多个文件，常用于文件上传功能

    ```html
    <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg">
    ```

    -   `accept`：允许选择的文件类型，使用逗号分隔，可以使用 MIME 类型（比如`image/jpeg`），也可以使用后缀名（比如`.doc`），还可以使用`audio/*`（任何音频文件）、`video/*`（任何视频文件）、`image/*`（任何图像文件）等表示法
    -   `capture`：用于捕获图像或视频数据的源，可能的值有`user`（面向用户的摄像头或麦克风），`environment`（外接的摄像头或麦克风）
    -   `multiple`：布尔属性，是否允许用户选择多个文件

-   hidden

    `type="hidden"`是一个不显示在页面的控件，用户无法输入它的值，主要用来向服务器传递一些隐藏信息。比如，CSRF 攻击会伪造表单数据，那么使用这个控件，可以为每个表单生成一个独一无二的隐藏编号，防止伪造表单提交

    ```html
    <input id="prodId" name="prodId" type="hidden" value="xm234jq">
    ```

    

-   number

    `type="number"`是一个数字输入框，只能输入数字。浏览器通常会在输入框的最右侧，显示一个可以点击的上下箭头，点击向上箭头，数字会递增，点击向下箭头，数字会递减

    ```html
    <input type="number" id="tentacles" name="tentacles"
           min="10" max="100">
    ```

    -   `max`：允许输入的最大数值
    -   `min`：允许输入的最小数值
    -   `placeholder`：用户输入为空时，显示的示例值
    -   `readonly`：布尔属性，表示该控件是否为只读
    -   `step`：点击向上和向下箭头时，数值每次递减的步长值。如果用户输入的值，不符合步长值的设定，浏览器会自动四舍五入到最近似的值。默认的步长值是`1`，如果初始的`value`属性设为`1.5`，那么点击向上箭头得到`2.5`，点击向下箭头得到`0.5`

-   range

    `type="range"`是一个滑块，用户拖动滑块，选择给定范围之中的一个数值。因为拖动产生的值是不精确的，如果需要精确数值，不建议使用这个控件。常见的例子是调节音量

    ```html
    <input type="range" id="start" name="volume"
             min="0" max="11">
    ```

    -   `max`：允许的最大值，默认为100
    -   `min`：允许的最小值，默认为0
    -   `step`：步长值，默认为1

    ```html
    <input type="range" list="tickmarks">
    <datalist id="tickmarks">
      <option value="0" label="0%">
      <option value="10">
      <option value="20">
      <option value="30">
      <option value="40">
      <option value="50" label="50%">
      <option value="60">
      <option value="70">
      <option value="80">
      <option value="90">
      <option value="100" label="100%">
    </datalist>
    ```

-   url

    `type="url"`是一个只能输入网址的文本框。提交表单之前，浏览器会自动检查网址格式是否正确，如果不正确，就会无法提交

    ```html
    <input type="url" name="url" id="url"
           placeholder="https://example.com"
           pattern="https://.*" size="30"
           required>
    ```

    -   `maxlength`：允许的最大字符数
    -   `minlength`：允许的最少字符串
    -   `pattern`：输入内容必须匹配的正则表达式
    -   `placeholder`：输入为空时显示的示例文本
    -   `readonly`：布尔属性，表示该控件的内容是否只读
    -   `size`：一个非负整数，表示该输入框显示宽度为多少个字符
    -   `spellcheck`：是否启动拼写检查，可能的值为`true`（启用）和`false`（不启用）

    ```html
    <input id="myURL" name="myURL" type="url"
           list="defaultURLs">
    <datalist id="defaultURLs">
      <option value="https://developer.mozilla.org/" label="MDN Web Docs">
      <option value="http://www.google.com/" label="Google">
      <option value="http://www.microsoft.com/" label="Microsoft">
      <option value="https://www.mozilla.org/" label="Mozilla">
      <option value="http://w3.org/" label="W3C">
    </datalist>
    ```

-   tel

    `type="tel"`是一个只能输入电话号码的输入框。由于全世界的电话号码格式都不相同，因此浏览器没有默认的验证模式，大多数时候需要自定义验证

    ```html
    <input type="tel" id="phone" name="phone"
           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
           required>
    <small>Format: 123-456-7890</small>
    ```

    -   `maxlength`：允许的最大字符数
    -   `minlength`：允许的最少字符串
    -   `pattern`：输入内容必须匹配的正则表达式
    -   `placeholder`：输入为空时显示的示例文本
    -   `readonly`：布尔属性，表示该控件的内容是否只读
    -   `size`：一个非负整数，表示该输入框显示宽度为多少个字符

-   color

    `type="color"`是一个选择颜色的控件，它的值一律都是`#rrggbb`格式

    ```html
    <input type="color" id="background" name="background"
               value="#e66465">`
    ```

-   date

    ```html
    <input type="date" id="start" name="start"
           value="2018-07-22"
           min="2018-01-01" max="2018-12-31">
    ```

    -   `max`：可以允许的最晚日期，格式为`yyyy-MM-dd`
    -   `min`：可以允许的最早日期，格式为`yyyy-MM-dd`
    -   `step`：步长值，一个数字，以天为单位

-   time

    `type="time"`是一个只能输入时间的输入框，可以输入时分秒，不能输入年月日。日期格式是24小时制的`hh:mm`，如果包括秒数，格式则是`hh:mm:ss`。日期选择器的形式则随浏览器不同而不同

    ```html
    <input type="time" id="appt" name="appt"
           min="9:00" max="18:00" required>
    <small>营业时间上午9点到下午6点</small>
    ```

    -   `max`：允许的最晚时间
    -   `min`：允许的最早时间
    -   `readonly`：布尔属性，表示用户是否不可以编辑时间
    -   `step`：步长值，单位为秒

    ```html
    <input id="appt" type="time" name="appt" step="2">
    ```

-   month

    type="month"`是一个只能输入年份和月份的输入框，格式为`YYYY-MM

    ```html
    <input type="month" id="start" name="start"
           min="2018-03" value="2018-05">
    ```

    -   `max`：允许的最晚时间，格式为`yyyy-MM`
    -   `min`：允许的最早时间，格式为`yyyy-MM`
    -   `readonly`：布尔属性，表示用户是否不可以编辑时间
    -   `step`：步长值，单位为月

-   week

    `type="week"`是一个输入一年中第几周的输入框。格式为`yyyy-Www`，比如`2018-W18`表示2018年第18周

    ```html
    <input type="week" name="week" id="camp-week"
           min="2018-W18" max="2018-W26" required>
    ```

    -   `max`：允许的最晚时间，格式为`yyyy-Www`。
    -   `min`：允许的最早时间，格式为`yyyy-Www`。
    -   `readonly`：布尔属性，表示用户是否不可以编辑时间。
    -   `step`：步长值，单位为周。

-   datetime-local

    `type="datetime-local"`是一个时间输入框，让用户输入年月日和时分，格式为`yyyy-MM-ddThh:mm`。注意，该控件不支持秒

    ```html
    <input type="datetime-local" id="meeting-time"
           name="meeting-time" value="2018-06-12T19:30"
           min="2018-06-07T00:00" max="2018-06-14T00:00">
    ```

    -   `max`：允许的最晚时间，格式为`yyyy-MM-ddThh:mm`
    -   `min`：允许的最早时间，格式为`yyyy-MM-ddThh:mm`
    -   `step`：步长值，单位为秒，默认值是60

    

#### `<button>`

`<button>`标签会生成一个可以点击的按钮，没有默认行为，通常需要用`type`属性或脚本指定按钮的功能

```html
<button>点击</button>
<button name="search" type="submit">
  <img src="search.gif">搜索
</button>
```

-   `autofocus`：布尔属性，表示网页加载时，焦点就在这个按钮。网页里面只能有一个元素，具有这个属性
-   `disabled`：布尔属性，表示按钮不可用，会导致按钮变灰，不可点击
-   `name`：按钮的名称（与`value`属性配合使用），将以`name=value`的形式，随表单一起提交到服务器
-   `value`：按钮的值（与`name`属性配合使用），将以`name=value`的形式，随表单一起提交到服务器
-   `type`：按钮的类型，可能的值有三种：`submit`（点击后将数据提交给服务器），`reset`（将所有控件的值重置为初始值），`button`（没有默认行为，由脚本指定按钮的行为）
-   `form`：指定按钮关联的`<form>`表单，值为`<form>`的`id`属性。如果省略该属性，默认关联按钮所在父表单
-   `formaction`：数据提交到服务器的目标 URL，会覆盖`<form>`元素的`action`属性
-   `formenctype`：数据提交到服务器的编码方式，会覆盖`<form>`元素的`enctype`属性。可能的值有三种：`application/x-www-form-urlencoded`（默认值），`multipart/form-data`（只用于文件上传），`text/plain`
-   `formmethod`：数据提交到服务器使用的 HTTP 方法，会覆盖`<form>`元素的`method`属性，可能的值为`post`或`get`
-   `formnovalidate`：布尔属性，数据提交到服务器时关闭本地验证，会覆盖`<form>`元素的`novalidate`属性
-   `formtarget`：数据提交到服务器后，展示服务器返回数据的窗口，会覆盖`<form>`元素的`target`属性。可能的值有`_self`（当前窗口），`_blank`（新的空窗口）、`_parent`（父窗口）、`_top`（顶层窗口）



#### `<select>`

`<select>`标签用于生成一个下拉菜单

```html
<label for="pet-select">宠物：</label>
<select id="pet-select" name="pet-select">
  <option value="">--请选择一项--</option>
  <option value="dog">狗</option>
  <option value="cat">猫</option>
  <option value="others">其他</option>
</select>
```

`<option>`有一个布尔属性`selected`，一旦设置，就表示该项是默认选中的菜单项

```html
<select name="choice">
  <option value="first">First Value</option>
  <option value="second" selected>Second Value</option>
  <option value="third">Third Value</option>
</select>
```

-   `autofocus`：布尔属性，页面加载时是否自动获得焦点
-   `disabled`：布尔属性，是否禁用当前控件
-   `form`：关联表单的`id`属性
-   `multiple`：布尔属性，是否可以选择多个菜单项。默认情况下，只能选择一项。一旦设置，多数浏览器会显示一个滚动列表框。用户可能需要按住`Shift`或其他功能键，选中多项
-   `name`：控件名
-   `required`：布尔属性，是否为必填控件
-   `size`：设置了`multiple`属性时，页面显示时一次可见的行数，其他行需要滚动查看



#### `<option> <optgroup>`

`<option>`标签用在`<select>`、`<optgroup>`、`<datalist>`里面，表示一个菜单项

-   `disabled`：布尔属性，是否禁用该项
-   `label`：该项的说明。如果省略，则等于该项的文本内容
-   `selected`：布尔属性，是否为默认值。显然，一组菜单中，只能有一个菜单项设置该属性
-   `value`：该项提交到服务器的值。如果省略，则等于该项的文本内容

`<optgroup>`表示菜单项的分组，通常用在`<select>`内部

```html
<label>宠物：
  <select name="pets" multiple size="4">
    <optgroup label="四条腿的宠物">
      <option value="dog">狗</option>
      <option value="cat">猫</option>
    </optgroup>
    <optgroup label="鸟类">
      <option value="parrot">鹦鹉</option>
      <option value="thrush">画眉</option>
    </optgroup>
  </select>
</label>
```

-   `disabled`：布尔设置，是否禁用该组。一旦设置，该组所有的菜单项都不可选
-   `label`：菜单项的标题



#### `<datalist>`

`<datalist>`标签是一个容器标签，用于为指定控件提供一组相关数据，通常用于生成输入提示。它的内部使用`<option>`，生成每个菜单项

```html
<label for="ice-cream-choice">冰淇淋：</label>
<input type="text" list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">
<datalist id="ice-cream-flavors">
  <option value="巧克力">
  <option value="椰子">
  <option value="薄荷">
  <option value="草莓">
  <option value="香草">
</datalist>
```

`<option>`标签还可以加入`label`属性，作为说明文字。Chrome 浏览器会将其显示在`value`的下一行

```html
<datalist id="ide">
  <option value="Brackets" label="by Adobe">
  <option value="Coda" label="by Panic">
</datalist>
```



#### `<textarea>`

`<textarea>`是一个块级元素，用来生成多行的文本框

```html
<textarea id="story" name="story"
          rows="5" cols="33">
这是一个很长的故事。
</textarea>
```

-   `autofocus`：布尔属性，是否自动获得焦点
-   `cols`：文本框的宽度，单位为字符，默认值为20
-   `disabled`：布尔属性，是否禁用该控件
-   `form`：关联表单的`id`属性
-   `maxlength`：允许输入的最大字符数。如果未指定此值，用户可以输入无限数量的字符
-   `minlength`：允许输入的最小字符数
-   `name`：控件的名称
-   `placeholder`：输入为空时显示的提示文本
-   `readonly`：布尔属性，控件是否为只读
-   `required`：布尔属性，控件是否为必填
-   `rows`：文本框的高度，单位为行
-   `spellcheck`：是否打开浏览器的拼写检查。可能的值有`true`（打开），`default`（由父元素或网页设置决定），`false`（关闭）
-   `wrap`：输入的文本是否自动换行。可能的值有`hard`（浏览器自动插入换行符`CR + LF`，使得每行不超过控件的宽度），`soft`（输入内容超过宽度时自动换行，但不会加入新的换行符，并且浏览器保证所有换行符都是`CR + LR`，这是默认值），`off`（关闭自动换行，单行长度超过宽度时，会出现水平滚动条）



#### `<output>`

`<output>`标签是一个行内元素，用于显示用户操作的结果

```html
<input type="number" name="a" value="10"> +
<input type="number" name="b" value="10"> =
<output name="result">20</output>
```

-   `for`：关联控件的`id`属性，表示为该控件的操作结果
-   `form`：关联表单的`id`属性
-   `name`：控件的名称

#### `<progress>`

`<progress>`标签是一个行内元素，表示任务的完成进度。浏览器通常会将显示为进度条

```html
<progress id="file" max="100" value="70"> 70% </progress>
```

-   `max`：进度条的最大值，应该是一个大于`0`的浮点数。默认值为1
-   `value`：进度条的当前值。它必须是`0`和`max`属性之间的一个有效浮点数。如果省略了`max`属性，该值则必须在`0`和`1`之间。如果省略了`value`属性，则进度条会出现滚动，表明正在进行中，无法知道完成的进度

#### `<meter>`

`<meter>`标签是一个行内元素，表示指示器，用来显示已知范围内的一个值，很适合用于任务的当前进度、磁盘已用空间、充电量等带有比例性质的场合。浏览器通常会将其显示为一个不会滚动的指示条

```html
<p>烤箱的当前温度是<meter min="200" max="500"
  value="350"> 350 度</meter>。</p>
```

>   注意，`<meter>`元素的子元素，正常情况下不会显示。只有在浏览器不支持`<meter>`时才会显示

-   `min`：范围的下限，必须小于`max`属性。如果省略，则默认为`0`
-   `max`：范围的上限，必须大于`min`属性。如果省略，则默认为`1`
-   `value`：当前值，必须在`min`属性和`max`属性之间。如果省略，则默认为`0`
-   `low`：表示“低端”的上限门槛值，必须大于`min`属性，小于`high`属性和`max`属性。如果省略，则等于`min`属性
-   `high`：表示“高端”的下限门槛值，必须小于`max`属性，大于`low`属性和`min`属性。如果省略，则等于`max`属性
-   `optimum`：指定最佳值，必须在`min`属性和`max`属性之间。它应该与`low`属性和`high`属性一起使用，表示最佳范围。如果`optimum`小于`low`属性，则表示“低端”是最佳范围；如果大于`high`属性，则表示“高端”是最佳范围；如果在`low`和`high`之间，则表示“中间地带”是最佳范围。如果省略，则等于`min`和`max`的中间值
-   `form`：关联表单的`id`属性

Chrome 浏览器使用三种颜色，表示指示条所处的位置。较好情况时，当前位置为绿色；一般情况时，当前位置为黄色；较差情况时，当前位置为红色

```html
<meter id="fuel" name="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="50">
    at 50/100
</meter>
```



### 其他标签

#### `<dialog>`

`<dialog>`标签表示一个可以关闭的对话框

```html
<dialog open>
  <form method="dialog">
    <input type="text">
    <button type="submit" value="foo">提交</button>
  </form>
</dialog>
```



#### `<details> <summary>`

`<details>`标签用来折叠内容，浏览器会折叠显示该标签的内容

`<summary>`标签用来定制折叠内容的标题

```html
<details>
  <summary>这是标题</summary>
  这是一段解释文本。
</details>
```



