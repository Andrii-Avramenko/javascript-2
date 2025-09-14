const sliderInput = document.querySelector('.slider__input')
const sliderImage = document.querySelector('.slider__image')

sliderInput.addEventListener('input', _.debounce(() => {
    sliderImage.style.width = `${sliderInput.value}%`
}, 10))

const moveland = document.querySelector('#moveland')
const box = document.querySelector('#box')

moveland.addEventListener('mousemove', _.debounce((e) => {
    console.log(e.clientX, e.clientY)
    box.style.top = `${e.clientY - 20}px`;
    box.style.left = `${e.clientX - 20}px`;
}, 100))