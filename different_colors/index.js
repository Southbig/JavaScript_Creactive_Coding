import Shape from './Shape.js';
import Vector from './Vector.js';
import Circle from './Circle.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.startTime = Date.now();
    this.frameRequestHandle = window.requestAnimationFrame(this.frameRequest);
    document.body.appendChild(this.canvas)

    this.canvas.style = 'width: 50%;'


    this.shapes = []

    for (let i = 0; i < 100; i++) {
      this.shapes.push(
        new Circle(new Vector(this.canvas.width * 0.5, this.canvas.height * 0.5))
      )
    }

  }

  frameRequest = () => {
    this.frameRequestHandle = window.requestAnimationFrame(this.frameRequest);

    const currentTime = Date.now();
    this.delta = (currentTime - this.startTime) * 0.001;

    // loading 과 동시에 start time 생성 -> delta 값을 만든 후 현재시간(current time)을 start time에 할당해준다
    this.startTime = currentTime;


    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].update(this.delta);
      this.shapes[i].render(this.context);
    }
  }
}

window.addEventListener('load', () => {
  new App()
})