/* ------------------- */
/* SCROLL INDICATOR  */
/* ------------------- */

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