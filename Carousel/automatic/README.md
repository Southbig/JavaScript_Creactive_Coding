# HTML 마크업 표기

```
<body>
  <div id="container">
    <div class="slider_item">1</div>
    <div class="slider_item">2</div>
    <div class="slider_item">3</div>
    <div class="slider_item">4</div>
    <div class="slider_item">5</div>
  </div>
</body>
```

# CSS 스타일 적용

```
.slider_item {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center; /* 가로 정렬*/
  align-items: center; /* 세로 정렬*/

  position: absolute; // 한곳에 정렬
  top: 0;
  z-index: 0;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: scale(0.9);
  color: white;
}
```

```
.showing {
  opacity: 1;
  z-index: 1;
  transform: none;
}
```

각각의 엘리먼트에서 showing 클레스가 표기되면 이미지가 보이게 만든다

# nextElementSibling

# setInterval()
