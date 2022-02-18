var slideIndex=0;
showSlie(slideIndex);
function current(n)
{
    slideIndex=n;
    showSlie(slideIndex);
}
function showSlie(n) {
    var i;
    var slides=document.getElementsByClassName('travel-slide__img')
    n=slideIndex
    if(n<0)
    {
        slideIndex=2;
    }
    if(n>=3)
    {
        slideIndex=0;
    }
    for(i=0;i<slides.length;i++) {
        slides[i].style.display="none";
    }
    slides[slideIndex].style.display="block";
    slideIndex++;
    setTimeout(showSlie,5000)

}
