const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const itemSteps = document.querySelector('.production__item-steps');

let startX = 0;
let endX = 0;

itemSteps.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

itemSteps.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

itemSteps.addEventListener('touchend', () => {
    const deltaX = endX - startX;
    if (deltaX > 50) {
        // Свайп вправо
        itemSteps.classList.remove('process__active');
    } else if (deltaX < -50) {
        // Свайп влево
        itemSteps.classList.add('process__active');
    }
});

buttonLeft.addEventListener('click', () => {
  
    itemSteps.classList.remove('process__active');
});

buttonRight.addEventListener('click', () => {
  
    itemSteps.classList.add('process__active');
});
