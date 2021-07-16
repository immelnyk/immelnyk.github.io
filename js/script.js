
gsap.to("#center-windows" ,5, {ease: Power0.easeNone, x: 10 , y: 20, repeat: -1, yoyo: true});
gsap.to("#left-windows" ,6, {ease: Power0.easeNone, x: 0 , y: 30,rotate: -5, repeat: -1, yoyo: true });
gsap.to("#right-window" ,4, {ease: Power0.easeNone, x: -10 , y: 30, rotate: 10 ,  repeat: -1, yoyo: true });
gsap.to("#details" ,10, { x: 20 , y: -10, repeat: -1, yoyo: true , rotate: 10 });


const windowHeight = window.innerHeight;
const windowLine = windowHeight * (2.3/3);

const allProgressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll' , () => {
    
    allProgressBars.forEach(bar => {

        if(bar.getBoundingClientRect().top <= windowLine){
            bar.classList.remove('pause');
            animatePercentage(bar);
        }
    })

    
})

function animatePercentage(el){
    if (!el.classList.contains('play')) {
        const getDataPercent = el.getAttribute('data-progress');

        function animateValue(id, start, end, duration) {
            if (start === end) return;
            let range = end - start;
            let current = start;
            let increment = end > start? 1 : -1;
            let stepTime = Math.abs(Math.floor(duration / range));
            let timer = setInterval(function() {
                current += increment;
                id.innerHTML = current + "%";
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
        
        animateValue(el.parentElement.nextElementSibling, 0, getDataPercent, 1500);

    }
    el.classList.add('play')
}

