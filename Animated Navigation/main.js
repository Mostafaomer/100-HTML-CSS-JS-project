const btn=document.querySelector(".buttons")
const nav=document.querySelector("nav")
const line1=document.querySelector(".one") 
const line2=document.querySelector(".two") 
btn.addEventListener('click' , () => {
    nav.classList.toggle("active")
})