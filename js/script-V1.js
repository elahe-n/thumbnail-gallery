const t1= document.querySelector("#one")
const t2= document.querySelector("#two")
const t3= document.querySelector("#three")
const lg= document.querySelector("#bigpic")

t1.addEventListener(`click`,function(){
    const url= t1.getAttribute('src')
    lg.setAttribute("src",url) 
})

t2.addEventListener(`click`,function(){
    const url= t2.getAttribute('src')
    lg.setAttribute("src",url) 
})

t3.addEventListener(`click`,function(){
    const url= t3.getAttribute('src')
    lg.setAttribute("src",url) 
})



