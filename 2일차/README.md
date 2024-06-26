### 2일차

### 메뉴02

---

![깃헙1](https://github.com/GEUMAIN/webDesignMenu/assets/128437656/a6f45107-e0e7-41b5-8d3e-daf34ee30cee)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 메뉴 M-2</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
</head>

<body>
    <div id="wrap">
        <div id="header">
            <div class="logo">로고</div>
            <div class="nav">
                <ul>
                    <li>
                        <a href="#">메뉴1</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴1-1</a></li>
                            <li><a href="#">서브메뉴1-2</a></li>
                            <li><a href="#">서브메뉴1-3</a></li>
                            <li><a href="#">서브메뉴1-4</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">메뉴2</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴2-1</a></li>
                            <li><a href="#">서브메뉴2-2</a></li>
                            <li><a href="#">서브메뉴2-3</a></li>
                            <li><a href="#">서브메뉴2-4</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">메뉴3</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴3-1</a></li>
                            <li><a href="#">서브메뉴3-2</a></li>
                            <li><a href="#">서브메뉴3-3</a></li>
                            <li><a href="#">서브메뉴3-4</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">메뉴4</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴4-1</a></li>
                            <li><a href="#">서브메뉴4-2</a></li>
                            <li><a href="#">서브메뉴4-3</a></li>
                            <li><a href="#">서브메뉴4-4</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div id="slider">

        </div>

        <div id="contents">
            <div class="content1"></div>
            <div class="content2"></div>
            <div class="content3"></div>
        </div>

        <div id="footer">
            <div class="footer1"></div>
            <div class="footer2"></div>
            <div class="footer3"></div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="JS/script.js"></script>

</body>

</html>
```

---

### CSS

```css
* {
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans';
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}

#wrap {
    width: 1200px;
    margin: 0 auto;
}

#header {
    width: 100%;
    display: flex;
}

#header .logo {
    width: 20%;
    height: 100px;
    background-color: #efefef;
}

#header .nav {
    width: 80%;
    height: 100px;
    background-color: #e3e3e3;
}

#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #d1d1d1;
}

#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #c7c7c7;
}

#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}

#footer {
    width: 100%;
    display: flex;
}

#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #b1b1b1;
}

#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #a3a3a3;
}

#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}

.nav>ul {
    display: flex;
    justify-content: right;
    margin-top: 30px;
}

.nav>ul>li {
    position: relative;
}

.nav>ul>li>a {
    display: inline-block;
    padding: 10px 50px;
    background-color: #b0b0b0;
}

.nav>ul>li>a:hover {
    background-color: #696969;
}

.nav>ul>li>ul {
    position: absolute;
    left: 0;
    top: 38px;
    width: 100%;
    text-align: center;
    display: none;
}

.nav>ul>li>ul>li>a {
    display: inline-block;
    padding: 10px;
    background-color: #c1c1c1;
    width: 100%;
    box-sizing: border-box;
}

.nav>ul>li>ul>li>a:hover {
    background-color: #8f8f8f;
}

.nav>ul>li>ul {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 600ms;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover", function () {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        });
    });
    navList.addEventListener("mouseout", function () {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
    });
}
```

---

### 메뉴03

---

![깃헙2](https://github.com/GEUMAIN/webDesignMenu/assets/128437656/f94f98b8-5fa8-4e42-98c6-6ad474ee2870)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 메뉴 M-3</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">

</head>

<body>
    <div id="wrap">
        <div id="header">
            <div class="logo"></div>
            <div class="nav">
                <ul>
                    <li>
                        <a href="#">메뉴1</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴1-1</a></li>
                            <li><a href="#">서브메뉴1-2</a></li>
                            <li><a href="#">서브메뉴1-3</a></li>
                            <li><a href="#">서브메뉴1-4</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">메뉴2</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴2-1</a></li>
                            <li><a href="#">서브메뉴2-2</a></li>
                            <li><a href="#">서브메뉴2-3</a></li>
                            <li><a href="#">서브메뉴2-4</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">메뉴3</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴3-1</a></li>
                            <li><a href="#">서브메뉴3-2</a></li>
                            <li><a href="#">서브메뉴3-3</a></li>
                            <li><a href="#">서브메뉴3-4</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">메뉴4</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴4-1</a></li>
                            <li><a href="#">서브메뉴4-2</a></li>
                            <li><a href="#">서브메뉴4-3</a></li>
                            <li><a href="#">서브메뉴4-4</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div id="slider">

        </div>

        <div id="contents">
            <div class="content1"></div>
            <div class="content2"></div>
            <div class="content3"></div>
        </div>

        <div id="footer">
            <div class="footer1"></div>
            <div class="footer2"></div>
            <div class="footer3"></div>
        </div>
    </div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="JS/script.js"></script>

</html>
```

---

### CSS

```css
* {
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans';
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #000;
}

#wrap {
    width: 1200px;
    margin: 0 auto;
}

#header {
    width: 100%;
    display: flex;
}

#header .logo {
    width: 20%;
    height: 100px;
    background-color: #efefef;
}

#header .nav {
    width: 80%;
    height: 100px;
    background-color: #e3e3e3;
}

#slider {
    width: 100%;
    height: 300px;
    background-color: #d9d9d9;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .content1 {
    width: 33.3333%;
    height: 200px;
    background-color: #d1d1d1;
}

#contents .content2 {
    width: 33.3333%;
    height: 200px;
    background-color: #c7c7c7;
}

#contents .content3 {
    width: 33.3333%;
    height: 200px;
    background-color: #bcbcbc;
}

#footer {
    width: 100%;
    display: flex;
}

#footer .footer1 {
    width: 20%;
    height: 100px;
    background-color: #b1b1b1;
}

#footer .footer2 {
    width: 60%;
    height: 100px;
    background-color: #a3a3a3;
}

#footer .footer3 {
    width: 20%;
    height: 100px;
    background-color: #9d9d9d;
}

#header {
    position: relative;
}

#header::after {
    content: '';
    width: 100%;
    height: 0px;
    background-color: #808080;
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 1;
    transition: all 400ms;
}

#header.on::after {
    height: 155px;
}

.nav {
    z-index: 1000;
}

.nav>ul {
    display: flex;
    justify-content: right;
    margin-top: 61px;
}

.nav>ul>li {
    position: relative;
}

.nav>ul>li>a {
    display: inline-block;
    padding: 10px 50px;
    background-color: #b0b0b0;
}

.nav>ul>li>a:hover {
    background-color: #696969;
}

.nav>ul>li>ul {
    position: absolute;
    left: 0;
    top: 39px;
    width: 100%;
    text-align: center;
    display: none;
}

.nav>ul>li>ul>li>a {
    display: inline-block;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

.nav>ul>li>ul>li>a:hover {
    background-color: #8f8f8f;
}

/* 자바스크립트용 CSS */
.nav>ul>li>ul {
    display: block;
    height: 0;
    overflow: hidden;
    transition: all 400ms;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let navList = document.querySelector(".nav>ul");

    navList.addEventListener("mouseover", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "155px";
        });
        document.getElementById("header").classList.add("on");
    });

    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
        document.getElementById("header").classList.remove("on");
    });
}
```
