/* トップへ戻るボタン */

const topBtn = document.getElementById("topBtn");

/* スクロール時 */

window.onscroll = function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    }

    else {
        topBtn.style.display = "none";
    }
};

/* ボタンクリック */

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
