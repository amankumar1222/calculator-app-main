
console.log('aasan hai');

let string = "";

let buttons = document.querySelectorAll('.button');

 
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('.input input').value = string;
            console.log(' i click');
        }
        else if(e.target.innerHTML == 'RESET'){
            string = ""
            document.querySelector('.input input').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.slice(1)
            document.querySelector('.input input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.input input').value = string;
            
        }
    })
})


let themeButtons = document.querySelectorAll('.sliderInput input');

themeButtons.forEach(color =>{
    window.onload
    color.addEventListener('click', ()=>{
        console.log(color.id);
        if(color.id == 1){
           let theme1 = document.querySelector('.container')
           theme1.classList.add('theme1')
            console.log('hello i am one');
            
        }
        else if(color.id == 2){
           let theme1 = document.querySelector('.container')
           theme1.classList.remove('theme1')
           theme1.classList.add('theme2')
            console.log('hello i am two');
            
        }
        else if(color.id == 3){
           let theme1 = document.querySelector('.container')
           theme1.classList.remove('theme2')
           theme1.classList.add('theme3')

            
        }
        else{
        window.location.reload();

        }
        if(color.id == 1){
            window.location.reload();
             
         }

    });

})



