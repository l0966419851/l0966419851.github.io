const radios = document.querySelectorAll('input[name="p2"]');
const nextbtn = document.querySelector(".nextbtn");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (document.querySelector('input[name="p2"]:checked')) {
      nextbtn.classList.add("show");
    }
  });
});
