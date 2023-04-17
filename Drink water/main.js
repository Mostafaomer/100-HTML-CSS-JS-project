const spans=document.querySelectorAll("span")
const waterConteiner=document.querySelector(".res")
let counter=0
let current=-1
for(let i = 0; i<spans.length; i++ ) {
    spans[i].addEventListener('click' , () => {
      counter=(i+1)*250  
      
      waterConteiner.style.height=(counter / 2000) *100+"%"
      waterConteiner.children[0]. textContent=(counter / 2000) *100+"%"
      if(current>i) {
            for (let index = spans.length-1; index >i; index--) {
                spans[index].style.background="#fff"
                spans[index].style.color="#6ab3f8"
            } 
            current=i

        }
        else if(current<i) {
            for (let index = 0; index <=i; index++) {
                spans[index].style.background="#6ab3f8"
                spans[index].style.color="#fff"
            }  
            current=i
        }
        else {
            spans[current].style.background="#fff"
            spans[current].style.color="#6ab3f8"
            current--;
            counter=(i)*250  
            waterConteiner.style.height=(counter / 2000) *100+"%"
            waterConteiner.children[0]. textContent=(counter / 2000) *100+"%"
            
        }
    console.log(current);

    })
}
