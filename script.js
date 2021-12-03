// when scrolling down the page, the navbar would minimize

const navigation = document.getElementById('navbar')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navigation.style.padding = "3px";
        navigation.style.fontSize = "30px";
    }
    else {
        navigation.style.padding = "15px";
        navigation.style.fontSize = "35px";
    }
}