// Social Media Share

//Social Media #1

const socialLink = document.querySelector('.social-link');
const shareLink = document.querySelector('.share-link');

socialLink.addEventListener('click', function(){
    socialLink.classList.toggle('active');
    shareLink.classList.toggle('active');
})

//Social Media #2
const shareBtn = document.querySelector('#share-button');
const toggleShare = document.querySelector('#share-box');

shareBtn.addEventListener('click', () => {
    toggleShare.classList.toggle('active');
})