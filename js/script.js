
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
        const element = elements[i].getBoundingClientRect().top //くっつくと0　なるほど！！！！
            + elements[i].clientHeight * 0.6; //今上から見えてる画面からの距離 ６割見えたら。
        
        // console.log(element);
        if (window.innerHeight > element) { //現在のブラウザの高さを取得
            elements[i].classList.add("show");
        }
    }//for
});


// // headerClone
// $(".header").each(function () {
//     let $win = $(window),
//         $header = $(this),
//         headerBottom = $(".fv").offset().top + $(".fv").outerHeight();
//     let $headerClone = $header.contents().clone(),
//         $headerCloneBox = $('<div class"header-clone"></div>');
//     $headerCloneBox.append($headerClone);
//     $headerCloneBox.appendTo("body");

//     $win.on("scroll", function () {
//         if ($win.scrollTop() > headerBottom) {
//             $headerCloneBox.addClass("open");
//         } else {
//             $headerCloneBox.removeClass("open");
//         }
//     });
// });//each

    // panheader
    $(".header").each(function(){
        let $win =$(window),
            $header =$(this),
            headerbottom =$header.offset().top +$header.outerHeight();

        let $headerClone =$header.contents().clone(),
            $headerCloneBox = $('<div class="header-clone"></div>');
        
        $headerCloneBox.append($headerClone);
        $headerCloneBox.appendTo("body");

        $win.on("scroll",function(){

            if($win.scrollTop()>headerbottom){
                $headerCloneBox.addClass("ok");
                $headerCloneBox.find("a").addClass("ok");
            }else{
                $headerCloneBox.removeClass("ok");
                $headerCloneBox.find("a").removeClass("ok");
            }

        });//on
        $win.trigger("scroll");
    });///each





