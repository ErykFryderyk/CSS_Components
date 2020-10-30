// ACCORDION 

const accordion = document.querySelectorAll('.accordion-item')

accordion.forEach(element => {
    element.addEventListener('click', ()=>{
        element.classList.toggle('accordion-active');
    })
});

const btns= document.querySelectorAll('.loading-btn');

btns.forEach(item =>{
    item.addEventListener('click', evt => {
        evt.target.classList.add('active-loading');
    })
})


//Counter Animation 

const counts = document.querySelectorAll('.count');

counts.forEach(count => {
    const updateCount = () => {
        let currentCount = parseInt(count.innerText);
        let targetCount = count.getAttribute('data-target');
        let increaseSpeed = 40;
        let increaseCount = parseInt (targetCount / increaseSpeed);

            if( currentCount < targetCount) {
                count.innerText = currentCount + increaseCount; 

            }else{
                count.innerText = targetCount;
            }
            setTimeout(updateCount, increaseSpeed);
    }
    updateCount();
} )


// Forms Elements
const myInput = document.getElementById('myInput');
const myCheck = document.getElementById('myCheckBox');


 
const visibilityPassword = () => {
    if(myInput.type === "password"){
        myInput.type = 'test'
    }else{
        myInput.type = 'password';
    }
}  

myCheck.addEventListener('click', () => (myCheck.checked) ? visibilityPassword() : visibilityPassword());