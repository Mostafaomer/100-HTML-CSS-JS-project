let next=document.getElementById("next")
let current =0
let imgs=document.querySelector(".imgs")
next.addEventListener('click' , () => {
    current++
    if(current==3)
        current=0
    imgs.style.transform = `translateX(${-current * 500}px)`
   
})
prev.addEventListener('click' , () => {
    current--
    if(current==-1)
        current=2
    imgs.style.transform = `translateX(${-current * 500}px)`
})