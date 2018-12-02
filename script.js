const engagement = document.getElementById("serviceOne");
const serviceBox = document.getElementsByClassName("serviceBox");

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

for(i = 0; i < serviceBox.length; i++) {
    serviceBox[i].addEventListener('touchstart', function(){
        this.classname= ".hover";
        console.log("touchstart");
    });

}




