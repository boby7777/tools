const scrollSpeed = 2; // 調整滾動速度,值越小越快
const height = 2; // 調整每次滾動的距離,值越小越平滑

let animationId; // 儲存 requestAnimationFrame 的 ID
let isScrollingUp = false; // 控制向上滾動
let isScrollingDown = false; // 控制向下滾動

function autoScroll() {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  let targetPosition;

  if (isScrollingUp) {
    targetPosition = currentPosition - height;
  } else if (isScrollingDown) {
    targetPosition = currentPosition + height;
  } else {
    return; // 如果都沒按,就不滾動
  }

  if (targetPosition >= 0 && targetPosition < document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    animationId = requestAnimationFrame(autoScroll);
  } else {
    isScrollingUp = false;
    isScrollingDown = false;
  }
}

// 監聽鍵盤事件
document.addEventListener('keydown', function(event) {
  if (event.key === 'p') {
    isScrollingUp = false;
    isScrollingDown = false;
    cancelAnimationFrame(animationId);
  } else if (event.key === '[') {
    isScrollingUp = true;
    isScrollingDown = false;
    animationId = requestAnimationFrame(autoScroll);
  } else if (event.key === ']') {
    isScrollingUp = false;
    isScrollingDown = true;
    animationId = requestAnimationFrame(autoScroll);
  }
});

// 初始化動畫
animationId = requestAnimationFrame(autoScroll);
