// const t1= document.querySelector("#one")
// const t2= document.querySelector("#two")
// const t3= document.querySelector("#three")
const tumbs=document.querySelectorAll(".thumbnail")
const lg= document.querySelector("#bigpic")

const setbgsrc= function(item){
    const url= item.getAttribute('src')
    lg.setAttribute("src",url)
}

const eventfunc=function(event){
    setbgsrc(event.target) 
}

// t1.addEventListener(`click`,eventfunc)
// t2.addEventListener(`click`,eventfunc)
// t3.addEventListener(`click`,eventfunc)

tumbs.forEach(function(eleThumb,i){
    eleThumb.addEventListener('click',eventfunc)
})
