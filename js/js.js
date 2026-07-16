
var btnadd=document.querySelector("#btn1")
var btnRemove=document.querySelector("#btn2")
var btnToggle=document.querySelector("#btn3")
var box=document.querySelector(".box")


btnadd.onclick = function(){
    box.classList.add("show")
}
btnRemove.onclick=function(){
    box.classList.remove("show")
}
btnToggle.onclick=function(){
    box.classList.toggle("show")
}

var btnAA=document.querySelector(".btnAA")
window.onscroll=function(){
    if(window.scrollY>200){
      btnAA.classList.add("show")
    }else
        btnAA.classList.remove("show")
}


 btnAA.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
 }
 
 
var x=document.querySelector(".demo")
setTimeout(function(){
    x.classList.add("ss")
},2000)

setInterval(function(){
    x.classList.remove("ss")
},10000)














