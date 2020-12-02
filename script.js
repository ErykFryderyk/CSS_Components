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


//------------------------
//-----HOVER BUTTON #7
//------------------------

const btn7 = document.querySelector('.btn-click-1');

btn7.addEventListener('click', function(e){
    console.log('click');
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    const ripple = document.createElement('span');

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);

    setTimeout(function(){
        ripple.remove()
    }, 600);

});
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



const content = document.querySelector('.content');

content.addEventListener('scroll', myFunction);

function myFunction() {
    const contentScroll = content.scrollTop || content.scrollTop;
    // console.log(content.scrollHeight);
    const height = content.scrollHeight - content.clientHeight;
    const scrolled = (contentScroll / height) * 100;
    // console.log(scrolled);
    // console.log(contentScroll);
    // console.log(height);
    document.querySelector('.progress-bar').style.width = scrolled + '%';
}



// Parallax Hero Section 

const backgroundImage = document.querySelector('.background');
const moonImage = document.querySelector('.moon');
const mountainImage = document.querySelector('.mountain');
const roadImage = document.querySelector('.road');
const text = document.querySelector('.text-hero');


const parallax = () => { 
    const value = window.scrollY;
    // console.log(value);

    backgroundImage.style.top = value * 0.5 + 'px';
    moonImage.style.left = value * 0.5 + 'px';
    mountainImage.style.top = -value * 0.15 + 'px';
    roadImage.style.top = value * 0.15 + 'px';
    text.style.top = value * 0.5 + 'px';
}

window.addEventListener('scroll', parallax)


//Generate Password 

const inputPassword = document.querySelector('.password-box input');
const generatePasswordBtn = document.querySelector('.password-box-btn');

const generatePassword = (length = 16) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprsqtuvwxyz1234567890!@#$%^&*()_';
    let password = '';

    for (let i = 0; i < length; i++) {
        let at = Math.floor(Math.random() * (charset.length + 1));
        password += charset.charAt(at);
    }
    return password 
} 

generatePasswordBtn.addEventListener('click', () => {
    inputPassword.value = generatePassword(16);
})




// MOVE MOUSE BACKGROUND EFFECT

document.addEventListener('mousemove', moveEffect);
function moveEffect(e){

    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) /50;
        const y = (window.innerHeight - e.pageY * speed) /50;
        

        layer.style.transform = `translate(${x}px, ${y}px)`;
    })
}

// Social Media Share

const socialLink = document.querySelector('.social-link');
const shareLink = document.querySelector('.share-link');

socialLink.addEventListener('click', function(){
    socialLink.classList.toggle('active');
    shareLink.classList.toggle('active');
})
