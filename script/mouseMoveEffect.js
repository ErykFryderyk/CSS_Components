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