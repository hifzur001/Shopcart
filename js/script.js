function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
function reveals() {
    var revealss = document.querySelectorAll(".reveals");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealss[i].classList.add("active");
        } else {
            revealss[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveals);

const init = function () {
    let items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++) {
        items[i].style.background = randomColor({ luminosity: 'light' });
    }
    cssScrollSnapPolyfill()
}
init();


function myHeart() {
    $(".heart").click(function () {
        alert("Hello")
        console.log("hello")
    })
}