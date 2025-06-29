// スライダー機能（手動と自動の競合防止）
const wrapper = document.getElementById("sliderWrapper");
const dotsContainer = document.getElementById("sliderDots");
const slides = wrapper.querySelectorAll("img");
let current = 0;
let autoSlideTimer;

// ドット生成
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.addEventListener("click", () => {
    moveToSlide(index);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll("div");

// スライド移動
function moveToSlide(index) {
  current = index;
  wrapper.style.transform = `translateX(-${100 * index}%)`;
  dots.forEach(d => d.classList.remove("active"));
  dots[index].classList.add("active");
}

// 自動スライドスタート
function startAutoSlide() {
  autoSlideTimer = setInterval(() => {
    current = (current + 1) % slides.length;
    moveToSlide(current);
  }, 5000);
}

// 手動操作でリセット
function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

// 矢印操作
function nextSlide() {
  current = (current + 1) % slides.length;
  moveToSlide(current);
  resetAutoSlide();
}
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  moveToSlide(current);
  resetAutoSlide();
}

// 初期表示＆自動スタート
moveToSlide(0);
startAutoSlide();
