const t1= document.querySelector("#one")
const t2= document.querySelector("#two")
const t3= document.querySelector("#three")
const lg= document.querySelector("#bigpic")

const eventfunc=function(event){
    t=event.target
    const url= t.getAttribute('src')
    lg.setAttribute("src",url) 
}

t1.addEventListener(`click`,eventfunc)
t2.addEventListener(`click`,eventfunc)
t3.addEventListener(`click`,eventfunc)



