export class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius; // 반지름
    // vw, vy 는  X, Y 좌표값을 움직이는 속도
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = diameter + (Math.random() + stageWidth - diameter);
    this.y = diameter + (Math.random() + stageHeight - diameter);

    console.log(diameter)
    console.log(this.x)
  }

  draw(ctx, stageWidth, stageHeight) {
    // X, Y 값에 vx와 vy값을 더해줘서 공이움직이도록 만들어준다
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = '#fdd700';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  // 스테이지 넓이와 높이를 가져와서 스테이지 상에 닿았는지 판단
  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    // 만약 공이 닿았다면 반대로 공이 튕긴다
    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}