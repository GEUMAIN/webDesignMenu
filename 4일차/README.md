### 4일차

### 메뉴06

---

![깃헙1](https://github.com/GEUMAIN/webDesignMenu/assets/128437656/f7b76382-d4ae-4482-81e1-1c90855b145d)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 메뉴 M-6</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
</head>

<body>
    <div id="wrap">
        <aside id="aside">
            <h1></h1>
            <nav class="nav">
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
                        </ul>
                    </li>
                    <li>
                        <a href="#">메뉴3</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴3-1</a></li>
                            <li><a href="#">서브메뉴3-2</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">메뉴4</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴4-1</a></li>
                            <li><a href="#">서브메뉴4-2</a></li>
                            <li><a href="#">서브메뉴4-3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">메뉴5</a>
                        <ul class="submenu">
                            <li><a href="#">서브메뉴5-1</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>

        <main id="main">
            <article id="slider"></article>
            <article id="link"></article>
            <section id="contents">
                <div class="content1"></div>
                <div class="content2"></div>
            </section>
        </main>

        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2">
                <div class="footer2-1"></div>
                <div class="footer2-2"></div>
            </div>
            <div class="footer3"></div>
        </footer>
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
    font-family: 'GmarketSans';
    margin: 0;
    padding: 0;
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
    display: flex;
    flex-wrap: wrap;
}

#aside {
    width: 200px;
}

#aside h1 {
    width: 100%;
    height: 100px;
    background-color: #efefef;
}

#aside nav {
    width: 100%;
    height: 700px;
    background-color: #e3e3e3;
}

#main {
    width: calc(100% - 200px);
}

#slider {
    width: 100%;
    height: 400px;
    background-color: #d9d9d9;
}

#link {
    width: 100%;
    height: 150px;
    background-color: #d1d1d1;
}

#contents {
    width: 100%;
    display: flex;
}

#contents .content1 {
    width: 50%;
    height: 250px;
    background-color: #c7c7c7;
}

#contents .content2 {
    width: 50%;
    height: 250px;
    background-color: #bcbcbc;
}

#footer {
    width: 100%;
    display: flex;

}

#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #b1b1b1;
}

#footer .footer2 {
    width: 60%;
}

#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #a3a3a3;
}

#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #9d9d9d;
}

#footer .footer3 {
    width: 20%;
    height: 120px;
    background-color: #929292;
}

.nav {
    position: relative;
    z-index: 1000;
}

.nav>ul>li {
    position: relative;
}

.nav>ul>li>a {
    padding: 10px;
    display: block;
    text-align: center;
    background-color: #ccc;
}

.nav>ul>li>a:hover {
    background-color: #aeaeae;
}

.nav>ul>li>ul {
    position: absolute;
    right: -500px;
    top: 0;
    width: 500px;
    display: none;
}

.nav>ul>li>ul>li {
    display: inline;
}

.nav>ul>li>ul>li>a {
    padding: 10px;
    display: inline-block;
    width: 100px;
}

.nav>ul>li>ul>li>a:hover {
    background-color: #a2a2a2;
}

#main {
    position: relative;
}

#main::after {
    content: '';
    width: 0%;
    height: 193px;
    background-color: #b0b0b0;
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 1;
    transition: all 300ms;
}

#main.on::after {
    width: 100%;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let navlist = document.querySelector(".nav>ul");

    navlist.addEventListener("mouseover", function () {
        navlist.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "block";
        });
        document.getElementById("main").classList.add("on");
    });

    navlist.addEventListener("mouseout", function () {
        navlist.querySelectorAll(".submenu").forEach(sub => {
            sub.style.display = "none";
        });
        document.getElementById("main").classList.remove("on");
    });
}
```

---

### **슬라이더 01-06**

---

![깃헙2](https://github.com/GEUMAIN/webDesignMenu/assets/128437656/a2290b01-6bac-45bc-84d2-d9c56d0d8358)

---

### HTML

```html
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 슬라이드 S-1</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
</head>

<body>
    <div id="wrap">
        <header id="header">
            <h1 class="logo"></h1>
            <nav class="nav"></nav>
        </header>

        <article id="slider">
            <div class="sliderwrap">
                <div class="slider s1">
                    <img src="./images/slider01.jpg" alt="이미지 설명">
                    <span>이미지1</span>
                </div>
                <div class="slider s2">
                    <img src="./images/slider02.jpg" alt="이미지 설명">
                    <span>이미지2</span>
                </div>
                <div class="slider s3">
                    <img src="./images/slider03.jpg" alt="이미지 설명">
                    <span>이미지3</span>
                </div>
            </div>
        </article>

        <main id="contents">
            <section class="content1"></section>
            <section class="content2"></section>
            <section class="content3"></section>
        </main>

        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2"></div>
            <div class="footer3"></div>
        </footer>

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
    font-family: 'GmarketSans';
    margin: 0;
    padding: 0;
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

.sliderwrap {
    position: relative;
}

.sliderwrap>div {
    display: none;
}

.sliderwrap>div:first-child {
    display: block;
}

.sliderwrap .slider {
    position: absolute;
    left: 0;
    top: 0;
}

.sliderwrap .slider img {
    vertical-align: top;
}

.sliderwrap .slider span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10px 20px;
    color: #fff;
}

.sliderwrap>div {
    display: block;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let currentIndex = 0;
    const slider = document.querySelectorAll(".slider");
    slider.forEach(img => img.style.opacity = "0");
    slider[0].style.opacity = "1";

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slider.length;

        slider[currentIndex].style.opacity = "0";
        slider[nextIndex].style.opacity = "1";

        slider.forEach(img => img.style.transition = "all 1s");

        currentIndex = nextIndex;
    }, 3000);
}
```
