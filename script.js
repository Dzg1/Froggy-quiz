let astre = document.querySelector("#astre");
let fqz = document.querySelector("#title");
const span1 = document.querySelector("#span1");
let cloud = document.querySelector("#cloud");
let cloudBack = document.querySelector("#cloud-back")
let roggy = document.querySelector("#tds1")
let uiz = document.querySelector("#tds2")
let justQ = document.querySelector("#just-q")




document.addEventListener("scroll",() => {
    let value = window.scrollY;
fqz.style.top = value   +200+ "px";
if(value < 390){
    roggy.style.width =  value  + "px" ;
    uiz.style.width =  value  + "px" ;
}
    span1.style.marginLeft = value * 2 + "px";
if (value < 160  ){
    justQ.style.left= -130 + value  + "px";
}

astre.style.top = value * 1.1 -400 + "px";
astre.style.left = value * - .1 -150 + "px";
cloudBack.style.top = value * 0.9 +"px";
cloud.style.top =  value * 0.5  + "px";

} ); 