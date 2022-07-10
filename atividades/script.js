let timerSlide = 1;

document.getElementById("slide1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    timerSlide++;
    if(timerSlide>4){
        timerSlide = 1;
    }
    document.getElementById("slide"+timerSlide).checked = true;
}