
// burger-btn

let $burger = $(".burger-btn-wp");

$burger.on("click", function () {
    $burger.toggleClass("cross");
    $(".header-nav").toggleClass("open");
    $("body").toggleClass("hidden");
    $(".bg-mask").toggleClass("open");
});


// // fadeIn
const elements = document.querySelectorAll(".fade-animation");
document.addEventListener("scroll", function () {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i].getBoundingClientRect().top 
            + elements[i].clientHeight * 0.6; //今上から見えてる画面からの距離 ６割
        
        // console.log(element);
        if (window.innerHeight > element) { 
            elements[i].classList.add("show");
        }
    }//for
});



