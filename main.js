const carousel = document.querySelector('.carousel');
const sliders = document.querySelectorAll('.slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const dots = document.querySelectorAll('.dots li');

let counter = 0;

function updateSlider() {
    // تحريك الحاوية بناءً على رقم الشريحة (0، 1، 2...)
    carousel.style.transform = 'translateX(' + (-counter * 100) + '%)';
    
    // تحديث النقاط (Dots)
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

nextBtn.onclick = () => {
    if (counter >= sliders.length - 1) {
        counter = 0; // يرجع للبداية
    } else {
        counter++;
    }
    updateSlider();
};

prevBtn.onclick = () => {
    if (counter <= 0) {
        counter = sliders.length - 1; // يذهب للنهاية
    } else {
        counter--;
    }
    updateSlider();
};
