/* ------------------- */
/* RANGE SLIDER   */
/* ------------------- */


/* RANGE SLIDER #1 */

const slideValue = document.querySelector('.slide-value span');
const inputSlider = document.querySelector('.slide-field input');

inputSlider.addEventListener('input',()=>{
    let value = inputSlider.value;
    slideValue.textContent = value; 
    slideValue.style.left = (value/2) + "%";
    slideValue.classList.add('show');
});


/* RANGE SLIDER #2 */

const slider = document.querySelector('#slider');
const selector = document.querySelector('#selector');
const selectValue = document.querySelector('#select-value');
const progressBar = document.querySelector('#progress-bar');

selectValue.innerHTML = slider.value;

slider.addEventListener('input', function(){
    selectValue.innerHTML = slider.value;
    selector.style.left = `${this.value/2}%`;
    progressBar.style.width = `${this.value/2}%`;

})