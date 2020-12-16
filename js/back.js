var back =document.getElementById("back")
window.onscroll=function(){
    var st=document.documentElement.scrollTop

    if(st>300){
        back.style.display="block"
    }else{
        back.style.display="none"
    }
}

back.onclick=function(){
    document.documentElement.scrollTop=0
}