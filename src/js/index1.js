// var nav1 = document.querySelector('.navigation')
// var span1 = nav1.querySelectorAll("span")
// var dec1 = document.querySelector('.dec')
// var man1 = document.querySelector('.man')
// for (var i = 0; i < span1.length; i++) {
//     span1[i].onmouseover = function() {
//         man1.style.opacity = "1"
//         man1.style.transition = "all 0.2s  linear"
//         man1.style.backgroundColor = "#fff"
//     }
//     man1.onmouseover = function() {
//         man1.style.opacity = "1"
//         man1.style.display = "block"
//     }
//     man1.onmouseout = function() {
//         man1.style.opacity = "0"
//     }
//     span1[i].onmouseout = function() {
//         man1.style.opacity = "0"
//     }

// var a
// var b
// span1[i].onmouseout = function() {
//     return a = 1

// }
// man1.onmouseout = function() {
//     return b = 1
// }
// if (a == 1 && b == 1) {
//     man1.style.opacity = "0"
// }
// }
// $(".navigation span").hover(function() {
//     $(this).parent().siblings(".man").stop().slideDown(100).show()
// }, function() {
//      $(this).parent().siblings(".man").stop().slideUp(100)
// })
var timer;
$(".man").mouseenter(function() {
    clearTimeout(timer);
});
$(".man").mouseleave(function() {
    $(".man").stop().slideUp(1000)
})
$(".navigation>span").mouseover(function() {
    clearTimeout(timer);
    $(this).parent().siblings(".man").stop().slideDown(200).css("display", "block")
})
$(".navigation>span").mouseout(function() {
    timer = setTimeout(function() {
        $(".man").slideUp(200)
    }, 200)
})