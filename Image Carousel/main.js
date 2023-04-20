// let next=document.getElementById("next")
let current =1
let imgs=document.querySelector(".imgs")
// next.addEventListener('click' , () => {
//     imgs.style.transform = `translateX(${-current * 500}px)`
//     current++
//     if(current==3)
//         current=0
// })
// prev.addEventListener('click' , () => {
//     if(current<=1)
//         current=2
//     else{
//         imgs.style.transform = `translateX(${-current * 500}px)`
//         current--
//     }
// })
setInterval(()=> {
    current++;
    if(current==3) 
        current=0
    imgs.style.transform = `translateX(${-current * 800}px)`

},2000)
