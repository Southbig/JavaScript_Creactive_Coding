"use strict"

const SHOW_ITEM = 'showing'
const QUANTITY = 6
const container = document.querySelector('.container')

let first
let middle
let last


const next_btn = document.querySelector('.next')
const prev_btn = document.querySelector('.prev')

const next = () => {
  // console.log(first.textContent)
  // console.log(first.className)
  console.log(first)
  first.classList = 'nextDelete'
  first = first.nextElementSibling
  console.log(last)
  if (Number(first.textContent) <= parseInt(QUANTITY / 2)) {
    console.log('평균 미만')
    console.log(last.nextElementSibling === null)
    if (last.nextElementSibling !== null) {
      console.log('last.nextElementSibling 있다')
      console.log(last.textContent)
      last = last.nextElementSibling
      console.log(last.textContent)
      last.classList = 'item showing'
      console.log(last.textContent)
      return
    } else if (last.nextElementSibling === null) {
      console.log('last.nextElementSibling 없다')
      // last = document.querySelector('.nextDelete:first-child')
      findEl()
      console.log(last)
      // container.appendChild(last)
      // last.classList = 'item showing'
      return
    }
  }

  else if (Number(first.textContent) > parseInt(QUANTITY / 2)) {
    console.log('평균이상')
    // nextElete에서 첫번째 노드가 작은 숫자가 아닌 경우가 있다
    findEl()
    // last = document.querySelector('.nextDelete:first-child')
    // container.appendChild(last)
    // last.classList = 'item showing'
  }
}

const prev = () => {
  last.classList = 'nextDelete'
  last = last.previousElementSibling

  if (first.previousElementSibling) {
    first = first.previousElementSibling
    first.classList = 'item showing'
  } else {
    console.log('------------1')
    first = document.querySelector('.nextDelete:last-child')
    first.classList = 'item showing'
    // first.style.fontSize = '0'
    // first.style.float = "right";
    container.prepend(first)
  }

}

next_btn.addEventListener('click', next)
prev_btn.addEventListener('click', prev)



const fistRanding = () => {
  for (let i = 0; i < QUANTITY; i++) {
    const el = document.createElement('span')
    el.classList = 'item'
    el.textContent = i
    container.appendChild(el)
  }
  first = document.querySelector('.item:first-child')
  first.classList = 'item showing'
  middle = first.nextElementSibling
  middle.classList = 'item showing'
  last = middle.nextElementSibling
  last.classList = 'item showing'
}

fistRanding()


const findEl = () => {
  const firstNextDelete = document.querySelector('.nextDelete')
  const nextDeleteAll = document.querySelectorAll('.nextDelete')
  console.log(nextDeleteAll)
  last = firstNextDelete
  console.log('=============', last)
  let min
  for (let i = 1; i < nextDeleteAll.length; i++) {
    console.log(nextDeleteAll[i])
    min = Number(firstNextDelete.textContent)
    console.log('min', min)
    // console.log(ex[i].textContent)
    // arr.push(Number(ex[i].textContent))
    if (min > Number(nextDeleteAll[i].textContent)) {
      min = Number(nextDeleteAll[i].textContent)
      last = nextDeleteAll[i]
      console.log('??????????????????/', last)
    } else {
      continue
    }
  }
  console.log('min', min)
  console.log('last', last)
  container.appendChild(last)
  last.classList = 'item showing'
  return
}

const check = document.querySelector('.check')
check.addEventListener('click', findEl)