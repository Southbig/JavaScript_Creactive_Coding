const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

document.body.appendChild(canvas)

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'blue',
  draw: function () {
    ctx.beginPath();  // 새로운 경로를 만듭니다. 경로가 생성됬다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 됩니다.
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();  // 현재 하위 경로의 시작 부분과 연결된 직선을 추가합니다.
    ctx.fillStyle = this.color;
    ctx.fill();  // 경로의 내부를 채워서 내부가 채워진 도형을 그립니다.
  }
};

// ball.draw();