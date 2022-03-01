const SHOWING_CLASS = 'showing'

const firstSlide = document.querySelector(".slider_item:first-child");

// firstSlide.classList.add(SHOWING_CLASS)

function slide() {
  // 클래스명이 'showing'인 요소가 존재한다면 해당 요소를, 존재하지 않는다면 null을 반환한다.
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)


  // showing 클래스가 있다면
  if (currentSlide) {
    // showing 클래스를 가지고 있는 요소에서 showing 클래스를 제거한다
    currentSlide.classList.remove(SHOWING_CLASS)

    // 기존에 showing 클래스를 가지고 있던 요소의 다음 형제 요소가 존재한다면 해당 요소를, 존재하지 않는다면 null을 반환한다
    // showing을 가지고 있던 요소가 마지막 노드였다면 null을, 마지막 노드가 아니라면 기존 요소의 다음 형제 노드를 반환
    const nexSlide = currentSlide.nextElementSibling

    // 다음 형제 노드가 존재한다면
    if (nexSlide) {
      // 그 노드에 showing 클래스를 추가
      nexSlide.classList.add(`${SHOWING_CLASS}`)
    }
    // 기존 노드가 마지막 노드여서 null을 반환 한다면
    else {
      // 첫번째 형제 노드에 showing 클래스를 추가
      // 맨 마지막 이미지 다음에는 다시 첫번째 이미지로 돌아오는 방식
      firstSlide.classList.add(`${SHOWING_CLASS}`)
    }

  }
  // showing 클래스가 없다면
  else {
    // showing 클래스가 없다는 말은 즉, 초기 생태이다 (맨처음 래더링 됐을때)
    // 초기 상태에는 첫 번째 형제 노드에 showing 클래스를 추가
    firstSlide.classList.add(SHOWING_CLASS)
  }
}

// 함수 실행
slide()

// 2초마다 해당 function (slide)을 불러온다
setInterval(slide, 2000);