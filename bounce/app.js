import { Ball } from './ball.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas)

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 20);
  }

  resize() {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    this.canvas.width = this.stageWidth * 2
    this.canvas.height = this.stageHeight * 2
    this.ctx.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ball.draw(this.ctx, this.stageWidth, this.stageWidth);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
}

