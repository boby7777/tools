const scrollSpeed = 2; // 調整滾動速度,值越小越快
const height = 2; // 調整每次滾動的距離,值越小越平滑

function autoScroll() {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  const targetPosition = currentPosition + height;

  if (targetPosition < document.documentElement.scrollHeight - document.documentElement.clientHeight) {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    requestAnimationFrame(autoScroll);
  }
}

requestAnimationFrame(autoScroll);
