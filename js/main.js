  // ハンバーガーメニュー開閉
function toggleMenu() {
    const menu = document.getElementById("hamburgerMenu");
    menu.classList.toggle("hidden");
  }
  
  // 最近チェックした商品（仮データ）
  const recentItems = [
    { name: "バゲット", price: "470円", image: "images/all-breads/bugette.jpg" },
    { name: "チーズバーガー", price: "380円", image: "images/all-breads/cheeseburger.jpg" },
    { name: "シナモンロール", price: "694円", image: "images/all-breads/cinnamon-rolls.jpg" }
  ];
  const recentContainer = document.getElementById("recentItems");
  recentItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "recent-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <p class="price">${item.price}</p>
    `;
    recentContainer.appendChild(div);
  });
  
  // カートのアイテム数表示
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cartItems.length;
  
  // 横線タイトルのアニメーション
  const titles = document.querySelectorAll('.section-title');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.5 });
  titles.forEach(title => observer.observe(title));
  