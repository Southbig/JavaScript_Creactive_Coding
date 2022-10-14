function linear(t) {
  return t;
}

export default class AnimatedValue {
  constructor(from, to, duration, delay) {
    this.from = from;
    this.to = to;
    this.duration = duration;
    this.delay = delay * 0.001;
    this.easingFunction = linear
  }

  get value() {
    return this.from + (this.to - this.from) * this.easingFunction.call(null, this.elapsedTime)
  }

  update(delta) {
    this.time += delta;

    if (this.time < this.delay) {
      return
    }
    this.elapsedTime += delta * (1000 / this.duration);
    if (this.elapsedTime >= 1) {
      this.elapsedTime = 1
    }
  }
}