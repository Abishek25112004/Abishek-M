var start=document.querySelector(".start-button")
var guide=document.querySelector(".guide")
var main=document.querySelector(".main")
var exit=document.querySelector(".exit")
var continue1=document.querySelector(".continue1")


start.onclick=()=>{
    guide.style.display="block"
    guide.style.transition=".5s"
    main.style.filter="blur(15px)"
}
exit.onclick=()=>{
    guide.style.display="none"
    guide.style.transition=".5s"
    main.style.filter="none"
}

