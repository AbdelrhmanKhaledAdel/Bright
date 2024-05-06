let header = document.querySelector(".header");

let mainHeader = () => {
    return (header.innerHTML = `
                <div class="roof">
                <div class="container">
                    <div class="pull">
                        <i class="bi bi-map"></i>
                        <p>Sydney NSW 2052, Australia</p>
                    </div>
                    <div class="contact">
                        <p><i class="bi bi-telephone-fill"></i> +61 2 9385 1000</p>
                        <p><i class="bi bi-envelope-fill"></i> <a href="#">hello@brightuniversity.edu</a></p>
                        <p><a href="login-page.html"><i class="bi bi-person-fill"></i> Login</a>/<a href="registration-form.html">Register</a></p>
                    </div>
                </div>
            </div>
            <div class="nav">
                <div class="container">
                    <div class="nav-one">
                        <div class="logo">
                            <i class="bi bi-mortarboard-fill"></i>
                            <h1>BRIGHT</h1>
                        </div>
                        <button class="close">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="nav-two">
                        <ul class="links">
                            <li>
                                <a href="#">Home <i class="bx bx-chevron-down arrow"></i></a>
                                <div class="mega-menu">
                                    <ul>
                                        <li><a href="index.html">Home Page 1</a></li>
                                        <li><a href="home.html">Home Page 2</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#">Courses <i class="bx bx-chevron-down arrow"></i></a>
                                <div class="mega-menu">
                                    <ul>
                                        <li><a href="courses-list.html">Courses List</a></li>
                                        <li><a href="courses-grid.html">Courses Grid</a></li>
                                        <li><a href="course-single.html">Single Course</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#">Pages <i class="bx bx-chevron-down arrow"></i></a>
                                <div class="mega-menu">
                                    <ul>
                                        <li><a href="about-page.html">About Page</a></li>
                                        <li><a href="gallery.html">Image Gallery</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="login-page.html">Login Page</a></li>
                                        <li><a href="single-teacher.html">Single Teacher</a></li>
                                        <li><a href="registration-form.html">Registration Form</a></li>
                                        <li><a href="contacts.html">Contacts</a></li>
                                        <li><a href="error.html">404</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#">Events <i class="bx bx-chevron-down arrow"></i></a>
                                <div class="mega-menu">
                                    <ul>
                                        <li><a href="events-grid.html">Events Grid</a></li>
                                        <li><a href="single-events.html">Single Event</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#">Blog <i class="bx bx-chevron-down arrow"></i></a>
                                <div class="mega-menu">
                                    <ul>
                                        <li><a href="blog.html">Blog - Right Sidebar</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                                        <li><a href="blog-full-width.html">Blog - Full Width</a></li>
                                        <li><a href="single-post.html">Blog Single Post</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="contacts.html" class="good">Contact</a></li>
                        </ul>
                        <div class="search">
                            <i class="bi bi-search"></i>
                            <div class="input-search">
                                <input class="form-control" type="text" placeholder="Search">
                                <i class="bx bx-x"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    `);
}
mainHeader();













var lis = document.querySelectorAll(".main-color li");

var classesList = [];

let localStorages = document.querySelector(".local-storage");

let localIcon = document.querySelector(".local-icon");




localIcon.addEventListener("click", () => {
    localStorages.classList.toggle("active")
})

let root = document.querySelector(":root")

if(window.localStorage.getItem("color")) { // If There Is Color In Local Storage
    // [1] Add Color To Root
    root.style.setProperty("--main-color", window.localStorage.getItem("main-color"))
    root.style.setProperty("--background-main-color", window.localStorage.getItem("bg-color"))
    // [2] Remove Active Class
    lis.forEach((li) => {
        li.classList.remove("open");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-color = "${window.localStorage.getItem('main-color')}"]`).classList.add("open")
}else { // If No Color In Local Storage

}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // console.log(e.currentTarget.dataset.color);
        // Remove Active Class From All Colors span
        lis.forEach((li) => {
            li.classList.remove("open");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("open");
        // Add Current Color To Local Storage
        window.localStorage.setItem("main-color", e.currentTarget.dataset.color);
        window.localStorage.setItem("bg-color", e.currentTarget.dataset.bg_color);
        // Change Root Color
        root.style.setProperty("--main-color", e.currentTarget.dataset.color)
        root.style.setProperty("--background-main-color", e.currentTarget.dataset.bg_color)
    })
})












let searchI = document.querySelectorAll(".search i");
let inputSearch = document.querySelector(".input-search")
let inputSearchI = document.querySelector(".input-search i")
let links = document.querySelector("ul.links");
let linksLi = document.querySelectorAll("ul.links li");


searchI[0].addEventListener("click", () => {
    inputSearch.classList.add("active")
})

inputSearchI.addEventListener("click", () => {
    inputSearch.classList.remove("active")
})

let navbarToggler = document.querySelector(".close");
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
    links.classList.toggle("active")
});

let arrow = document.querySelectorAll(".arrow");
let megaMenu = document.querySelectorAll(".mega-menu")

for(let i=0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', function () {
    arrow[i].classList.toggle("active");

    megaMenu[i].classList.toggle("active")
});
}



let headerNav = document.querySelector(".nav");
console.log(document.documentElement.scrollTop);

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 40) {
        headerNav.setAttribute("class", "nav scroll")
    }else {
        headerNav.setAttribute("class", "nav")
    }
})







// Dark Mode
function darkModeFunction() {
    let body = document.body;
    body.classList.toggle("dark");

    let theme;

    if(body.classList.contains("dark")) {
        theme = "DARK";
        // darkModeI.classList.replace("bx-moon", "bx-sun")
        document.querySelector(".theme-switch__checkbox").checked = true
    }else {
        theme = "LIGHT";
        // darkModeI.classList.replace("bx-sun", "bx-moon");
        document.querySelector(".theme-switch__checkbox").checked = false
    }
    localStorage.setItem("pageTheme", theme)
}

let getTheme = localStorage.getItem("pageTheme");

if(getTheme == "DARK") {
    document.body.classList = "dark";
    // darkModeI.classList.replace("bx-moon", "bx-sun");
    document.querySelector(".theme-switch__checkbox").checked = true

}



let btn = document.querySelector("button.up")
window.onscroll = function () {
    if(window.scrollY >= 600) {
        btn.classList.add("time");
    }else {
        btn.classList.remove("time");
    }
}
btn.onclick = function () {
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth",
    })
}

// Coaching Courses

let valueDisplays = document.querySelectorAll(".num");

let interval = 5000;



valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    console.log(endValue);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration) 
})




// Course Topics
let selectBtn = document.querySelectorAll(".select-btn");
let items = document.querySelectorAll(".list-items");
let plus = document.querySelectorAll(".plus i")
console.log(plus);

for(let i=0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener('click', function () {
    

    items[i].classList.toggle("active");
    if(items[i].classList == "list-items active") {
        plus[i].classList.replace("bx-plus-circle", "bx-minus-circle");
    }else {
        plus[i].classList.replace("bx-minus-circle", "bx-plus-circle");
    }
    
});
}





