// ACCORDION 

const accordion = document.querySelectorAll('.accordion-item')

accordion.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('accordion-active');
    })
});