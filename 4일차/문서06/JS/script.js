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