document.querySelectorAll('.btn-box').forEach(button => {
    button.addEventListener('click', () => {
        const page = button.getAttribute('data-page');
        loadContent(page);

        // 修改網址（不重新整理頁面）
        history.pushState({ page }, '', `?page=${page}`);
    });
});

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('portfolio-area').innerHTML = data;
            window.scrollTo(0, 0);
        })
        .catch(error => console.error('Error loading:', error));
}

// 瀏覽器前進 / 後退時處理
window.addEventListener('popstate', (event) => {
    const page = new URLSearchParams(location.search).get('page');
    if (page) {
        loadContent(page);
    } else {
        // 如果沒有 page 參數，可以預設載入首頁內容
        loadContent('home.html');
    }
});

// 網頁初次載入時處理 URL
window.addEventListener('DOMContentLoaded', () => {
    const page = new URLSearchParams(location.search).get('page');
    if (page) {
        loadContent(page);
    }
});
