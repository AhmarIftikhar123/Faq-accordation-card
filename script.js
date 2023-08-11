window.addEventListener('DOMContentLoaded', ()=>{
    let image1 = document.querySelector('.image1 img');
    let image2 = document.querySelector('.image2 img');
    let image3 = document.querySelector('.image3 img');

    let new_image1 = 'images/illustration-woman-online-desktop.svg';

    let new_image2 = 'images/bg-pattern-desktop.svg'

    const updatewindowimages = ()=>{

        if(window.innerWidth >= 1024){
            image1.setAttribute('src', new_image1) ;
            image2.setAttribute('src', new_image2) ;
            image3.style.display = 'block';


            image1.style.width = '21rem';
            image2.style.width = '21rem';
            image3.style.width = '120px';
        }
        if(window.innerWidth <= 1024){
            image3.style.display = 'none';

        }
    }


    updatewindowimages()
    window.addEventListener('resize', updatewindowimages)

})

let buttons = document.querySelectorAll(".question button")

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        let answer = button.parentElement.nextElementSibling;
        let question_color = button.parentElement;
        if(answer.style.display === 'none' || answer.style.display === ''){
            answer.style.display = 'block';
            question_color.style.fontWeight = '900';
        }
        else{
            answer.style.display = 'none';
            question_color.style.fontWeight = 'normal';
            
        }
    })
})


