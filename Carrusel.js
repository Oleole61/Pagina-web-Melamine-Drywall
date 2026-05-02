let index =0;
const track= document.getElementById("carrusel");
const img=track.children;

document.getElementById("next").addEventListener("click",() =>{
index++;
if(index >= img.length) index=0;
track.scrollLeft = img[index].offsetLeft;

});

document.getElementById("prev").addEventListener("click",()=>{
index--;
if(index<0) index=img.length-1;
track.scrollLeft = img[index].offsetLeft;
});
img.setInterval(() => {
    index++;
}, 1000);