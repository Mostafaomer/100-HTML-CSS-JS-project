const right=document.querySelector(".bi-arrow-right-circle ")
const left=document.querySelector(".bi-arrow-left-circle ")
const body=document.querySelector("body")
const container=document.querySelector(".container")
let currentImage=0
let img=["Images/photo-1604916010805-18ea15fa6d32.avif","Images/photo-1605718665998-85fbd49c5eff.avif","Images/photo-1610620746460-de78cf3d1705.avif"]
container.style.backgroundImage=`url(${img[0]})`
right.addEventListener('click' , () => {
    if(currentImage==img.length-1) {
        currentImage=-1
    } 
    currentImage++;
    container.style.backgroundImage=`url(${img[currentImage]})`
    container.classList.add("ani")
    setTimeout(() => {
        container.classList.remove("ani")
    }, 300);
    body.style.backgroundImage=`url(${img[currentImage]})`
})
left.addEventListener('click' , () => {
    if(currentImage<=0) {
        currentImage=3
    } 
    currentImage--;
    container.style.backgroundImage=`url(${img[currentImage]})`
    container.classList.add("ani")
    setTimeout(() => {
        container.classList.remove("ani")
    },300)
    body.style.backgroundImage=`url(${img[currentImage]})`
})