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

