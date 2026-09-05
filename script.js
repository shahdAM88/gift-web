const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

next1.addEventListener("click", function () {
    step1.classList.remove("active");
    step2.classList.add("active");
});

next2.addEventListener("click", function () {
    step2.classList.remove("active");
    step3.classList.add("active");
}
)
const noBtn = document.getElementById("noBtn");
const crySticker = document.getElementById("crySticker");
const yesBtn = document.getElementById("yesBtn");
const yesWrapper = document.querySelector(".yes-wrapper");

let noClicks = 0;

noBtn.addEventListener("click", function () {
    noClicks++;

    crySticker.style.display = "block";

    yesWrapper.style.transform =
        `scale(${1 + noClicks * 0.15})`;

    noBtn.style.transform =
        `scale(${Math.max(0.4, 1 - noClicks * 0.10)})`;
});