/* ========= All-Breads page only ========= */
(function(){
    // この要素が無いページでは即 Return
    if(!document.getElementById('productGrid')) return;
  
    // —— ダミー商品データ ——（あとで fetch に差し替え可）
    const products = [
      { id:1, name:"バゲット",       price:280, img:"img/all-breads/bugette.jpg",            form:"https://forms.gle/xxxx" },
      { id:2, name:"クロワッサン",   price:220, img:"img/all-breads/chocolate-croissant.jpg", form:"https://forms.gle/xxxx" },
      { id:3, name:"メロンパン",     price:190, img:"img/all-breads/melon-bread.jpg",        form:"https://forms.gle/xxxx" },
      { id:4, name:"シナモンロール", price:240, img:"img/all-breads/cinnamon-rolls.jpg",    form:"https://forms.gle/xxxx" },
      { id:5, name:"ハードブレッド", price:300, img:"img/all-breads/hard.jpg",               form:"https://forms.gle/xxxx" },
      { id:6, name:"チーズバーガー", price:450, img:"img/all-breads/cheeseburger.jpg",       form:"https://forms.gle/xxxx" },
    ];
  
    const grid   = document.getElementById('productGrid');
    const search = document.getElementById('searchBox');
    const sort   = document.getElementById('sortSelect');
  
    const render = list => {
      grid.innerHTML = '';
      list.forEach(p => {
        const li = document.createElement('li');
        li.className = 'product-card';
        li.innerHTML = `
          <div class="product-content">
            <img src="${p.img}" alt="${p.name}">
            <div class="info">
              <h2>${p.name}</h2>
              <p class="price">¥${p.price.toLocaleString()}</p>
            </div>
          </div>
          <a href="${p.form}" target="_blank" class="reserve-btn">予約する</a>
        `;
        
        // 商品コンテンツ部分のクリックイベント
        const productContent = li.querySelector('.product-content');
        productContent.addEventListener('click', () => {
          addRecentItem({
            name: p.name,
            price: `¥${p.price.toLocaleString()}`,
            image: p.img
          });
        });
        
        grid.appendChild(li);
      });
    };
    render(products);          
    
    // —— 並び替え ——
    sort.addEventListener('change', () => {
      let list = [...products];
      if (sort.value === 'price-asc')  list.sort((a,b) => a.price - b.price);
      if (sort.value === 'price-desc') list.sort((a,b) => b.price - a.price);
      render(list);
    });

    const titles = document.querySelectorAll('.section-title');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.5 });
    titles.forEach(title => observer.observe(title));
})();
  