
const ball = () => {
  const canvas = document.createElement('canvas')
  canvas.classList.add('canvas_1')
  const ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)
  let x = 50;
  let y = 50;
  let radius = 50;
  // let color = 'yellow'
  // ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI * 2)
  // ctx.closePath()
  // ctx.fillStyle = color
  ctx.fill()
}

ball()

const triangle = () => {
  const canvas = document.createElement('canvas')
  canvas.classList.add('canvas_2')
  const ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)

  ctx.beginPath()
  ctx.moveTo(0, 0) // 시작 꼭지점
  ctx.lineTo(100, 0);  // x 축으로 100만큼 이동
  ctx.lineTo(100, 150);  // x축 100만큼, y축으로 100만큼 이동
  ctx.fill();
}

triangle()

const draw = () => {
  const canvas = document.createElement('canvas')
  canvas.classList.add('canvas_3')
  const ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)

  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2, true)

  ctx.moveTo(135, 100)
  ctx.arc(100, 100, 35, 0, Math.PI, false)

  ctx.moveTo(88, 80)
  ctx.arc(80, 80, 7, 0, Math.PI * 2, true)

  ctx.moveTo(128, 80)
  ctx.arc(120, 80, 7, 0, Math.PI * 2, true)
  ctx.stroke();
}

draw()

const line = () => {
  const canvas = document.createElement('canvas')
  canvas.classList.add('canvas_2')
  const ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)

  ctx.moveTo(0, 100)
  ctx.lineTo(100, 100)
  ctx.stroke()
}

line()
