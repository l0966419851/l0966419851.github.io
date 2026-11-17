// 抓取所有 Radio 選項
const radios = document.querySelectorAll('input[name="p3"]');

// 抓取繼續航行按鈕
const nextbtn = document.querySelector(".nextbtn");

// 監聽 Radio 選項的變化
radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    // 確認是否有選取選項
    const selected = document.querySelector('input[name="p3"]:checked');

    if (selected) {
      nextbtn.style.display = "flex";
    }
  });
});
