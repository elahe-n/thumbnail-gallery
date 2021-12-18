const t1= document.querySelector("#one")
const t2= document.querySelector("#two")
const t3= document.querySelector("#three")
const lg= document.querySelector("#bigpic")

const setbgsrc= function(item){
    const url= item.getAttribute('src')
    lg.setAttribute("src",url)
}

t1.addEventListener(`click`,function(){  
    setbgsrc(t1) 
})

t2.addEventListener(`click`,function(){
    setbgsrc(t2) 
})

t3.addEventListener(`click`,function(){
    setbgsrc(t3)  
})



