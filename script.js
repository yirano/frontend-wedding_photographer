const engagement = document.getElementById("serviceOne");

engagement.addEventListener("mouseenter", function(){

});

window.addEventListener('scroll', function(){
    var navi = document.querySelector('.header');

    if(this.window.scrollY > 0) {
        navi.className += ' scrolledHeader';
    } else {
        console.log("reached top");
        navi.classList.remove("scrolledHeader");
    }
});



