let buttons=document.querySelector('.buttons')
let btn=document.querySelectorAll('span')
let value = document.getElementById('values')

for(let i =0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        if(this.innerHTML == "="){
            value.innerHTML=eval(value.innerHTML)
        }else{
            if(this.innerHTML=="AC"){
                value.innerHTML="";
            }
            else if(this.innerHTML=="Del"){
                value.innerText = value.innerText.slice(0, -1)

            }else{
                value.innerHTML+=this.innerHTML
            }
        }
    })
};