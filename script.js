window.onscroll = function() { 
    makeStickyHeader();
};

var header = document.getElementById("header");

function makeStickyHeader() {
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
