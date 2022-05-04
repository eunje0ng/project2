let i = 0;
$(function(){
    setInterval(slide,2000);
})
function slide(){
    if(i >= 3) i=0;
    let newLeft = -1200 * i
    $("main-slide-items").animate({
        marginLeft: newLeft
    });
    i++;
}