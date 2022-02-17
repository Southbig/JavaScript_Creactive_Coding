# onload()

```
window.onload = () => {
  new App();
}
```

# canvas

Canvas API는 JavaScript와 HTML `<canvas>` 엘리먼트를 통해 그래픽을 그리기위한 수단을 제공한다
무엇보다도 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용된다

Canvas API는 주로 2D 그래픽에 중점을 두고 있습니다. WebGL API 또한 `<canvas>` 엘리먼트를 사용하며, 하드웨어 가속 2D 및 3D 그래픽을 그린다

HTMLCanvasElement.getContext() 메소드는 엘리먼트의 컨텍스트(렌더링될 그리기의 대상)를 얻는다

# getContext

HTMLCanvasElement.getContext() 메소드는 캔버스의 드로잉 컨텍스트를 반환한다
컨텍스트 식별자가 지원되지 않을 경우 null을 반환한다

# addEventListener / resize

resize 이벤트는 document view의 크기가 변경될 때 발생한다

window.onresize 속성(어트리뷰트)을 사용하거나,window.addEventListener('resize', ...)를 사용하여, 이벤트 핸들러에 resize 이벤트를 등록할 수 있다

# beginPath()

새로운 경로를 만든다
경로가 생성됬다면, 이후 그리기 명령들은 경로를 구성하고 만드는데 사용한다

경로를 만들기 위한 첫번째 단계는 beginPath() 메소드를 사용하는 것이다
내부적으로, 경로는 도형을 이루는 하위경로(선, 아치 등)들의 집합으로 이루어져있다
이 메소드가 호출될 때 마다, 하위 경로의 모음은 초기화되며, 우리는 새로운 도형을 그릴 수 있게 된다

# fill()

경로의 내부를 채워서 내부가 채워진 도형을 그린다

# arc()

호나 원을 그리기위해서는 arc() 혹은 arcTo() 메소드를 사용

arc(x, y, radius, startAngle, endAngle, anticlockwise)
(x, y) 위치에 원점을 두면서, 반지름 r을 가지고, startAngle 에서 시작하여 endAngle 에서 끝나며 주어진 anticlockwise 방향으로 향하는 (기본값은 시계방향 회전) 호를 그리게 된다

[MDN canvas](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API)
[캔버스(canvas)를 이용한 도형 그리기](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#arcs)
