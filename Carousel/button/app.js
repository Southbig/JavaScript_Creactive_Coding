const SHOWING_CLASS = 'showing'

const firstSlide = document.querySelector(".slider_item:first-child");
const lastSlide = document.querySelector(".slider_item:last-child");

const next_button = document.querySelector('.next_button')
const prev_button = document.querySelector('.prev_button')

const carousel = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  console.log(currentSlide)

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS)
    console.log('currentSlide', currentSlide)

    const nextSlide = currentSlide.nextElementSibling
    console.log('nextSlide', nextSlide)

    if (nextSlide) {
      nextSlide.classList.add(`${SHOWING_CLASS}`)
      console.log('nextSlide', nextSlide)
    } else {
      firstSlide.classList.add(`${SHOWING_CLASS}`)
      console.log('firstSlide', firstSlide)
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS)
    console.log('firstSlide', firstSlide)
  }
}

const backCarousel = () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  console.log('currentSlide', currentSlide)

  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS)
    console.log('currentSlide', currentSlide)

    const prevSlide = currentSlide.previousElementSibling
    console.log('prevSlide', prevSlide)

    if (prevSlide) {
      prevSlide.classList.add(`${SHOWING_CLASS}`)
      console.log('prevSlide', prevSlide)
    } else {
      lastSlide.classList.add(`${SHOWING_CLASS}`)
      console.log('lastSlide', lastSlide)
    }
  }
}

next_button.addEventListener('click', carousel)
prev_button.addEventListener('click', backCarousel)

carousel()
