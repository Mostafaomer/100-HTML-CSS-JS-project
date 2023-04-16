const btn=document.querySelectorAll('i')
let ans
btn.forEach((one) => {
    one.addEventListener('click' ,() => {
        ans= one.parentElement.nextElementSibling
        if(ans.style.maxHeight) {
            ans.style.maxHeight=null
            one.style.transform="rotate(0)"
        } else {
            ans.style.maxHeight=ans.scrollHeight+"px"
            one.style.transform="rotate(180deg)"
        }
    })
}) 
    
   
