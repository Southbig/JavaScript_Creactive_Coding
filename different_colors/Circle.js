import Shape from './Shape.js'
import AnimatedValue from './AnimatedValue.js';

const PI2 = Math.PI * 2;

function createRandomColor() {
  // const r = Math.min(255, Math.round(Math.random() * 255) + 100);
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

export default class Circle extends Shape {
  constructor(position, radius) {
    super(position)
    // this.radius = radius;
    // this.angle = PI2 * Math.random()
    // this.speed = 100 * Math.random()

    this.radius = 10 * Math.random();
    this.angle = PI2 * Math.random();
    this.speed = 100 * Math.random();
    this.color = createRandomColor();

    this.radiusAnimatedValue = new AnimatedValue(0, 1, 300, this.speed * 10)

    // console.log(this.radiusAnimatedValue.value)
  }

  update(delta) {
    const velocity = this.speed * delta;
    this.position.x += Math.cos(this.angle) * velocity;
    this.position.y += Math.sin(this.angle) * velocity;

    this.radiusAnimatedValue.update(delta)
  }

  // 공 랜딩
  render(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.position.x, this.position.y, this.radius, 0, PI2);
    // context.arc(this.position.x, this.position.y, this.radius * this.radiusAnimatedValue.value, 0, PI2);
    context.fill();
  }
}