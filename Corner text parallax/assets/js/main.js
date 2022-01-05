document.addEventListener('mousemove', parallaxText);

function parallaxText(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        let x = window.innerWidth - e.pageX * 2;
        layer.style.transform = `translate(${x}px)`;
    })
}