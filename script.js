document.addEventListener('DOMContentLoaded', function(event){

    const engagement = document.getElementById("serviceOne");
    const serviceBox = document.getElementsByClassName("serviceBox");
    const menuCheck = document.getElementById("menuCheck");
    const burgerMenu = document.getElementById('burgerMenu');

    console.log("loaded");

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


    menuCheck.addEventListener('change', function(event){

        if(menuCheck.checked) {
            burgerMenu.style.display = 'block';
            console.log('checked');
        } else {
            burgerMenu.style.display = 'none';
            console.log('unchecked');
        }
    });
        

});