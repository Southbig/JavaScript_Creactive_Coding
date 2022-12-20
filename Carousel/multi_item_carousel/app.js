const container = document.querySelector('#container')
const nextButton = document.querySelector('.next_button')
const prevButton = document.querySelector('.prev_button')

let first = document.querySelector('.item:first-child')
let last = document.querySelector('.item:last-child')

console.log(first)
console.log(typeof last.textContent)


const nextClick = () => {
  let newSlide = document.createElement('div')
  newSlide.textContent = 1

  if (Number(last.textContent) < 6) {
    first.remove()
    first = document.querySelector('.item:first-child')
    newSlide.classList.add('item')
    newSlide.textContent = Number(last.textContent) + 1
    container.appendChild(newSlide)
    last = document.querySelector('.item:last-child')
  } else {
    first.remove()
    first = document.querySelector('.item:first-child')
    newSlide.classList.add('item')

    if (Number(first.textContent) === 5) {
      newSlide.textContent = 1
      container.appendChild(newSlide)
    } else {
      newSlide.textContent = Number(newSlide.textContent) + 1
      container.appendChild(newSlide)
      last = document.querySelector('.item:last-child')
    }
  }
}

const backClick = () => {
  console.log('뒤로 가라')
  let newSlide = document.createElement('div')
  newSlide.textContent = 1

  console.log(first, last)

  if (Number(last.textContent) === 3) {
    last.remove()
    last = document.querySelector('.item:last-child')
    newSlide.classList.add('item')
    newSlide.textContent = 6
  } else {
    last.remove()
    last = document.querySelector('.item:last-child')
    newSlide.classList.add('item')
    newSlide.textContent = Number(first.textContent) - 1
  }

  first.before(newSlide)
  first = document.querySelector('.item:first-child')

}

nextButton.addEventListener('click', nextClick)
prevButton.addEventListener('click', backClick)
