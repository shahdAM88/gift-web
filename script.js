const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const noBtn = document.getElementById("noBtn");
const yesWrapper = document.querySelector(".yes-wrapper");
const crySticker = document.getElementById("crySticker");
const questionText = document.getElementById("questionText");
const yesBtn = document.getElementById("yesBtn");
const step4 = document.getElementById("step4");

let noClicks = 0;


// الانتقال من الصفحة الأولى للثانية
next1.addEventListener("click", function () {
    step1.classList.remove("active");
    step2.classList.add("active");
});


// الانتقال من الصفحة الثانية للثالثة
next2.addEventListener("click", function () {
    step2.classList.remove("active");
    step3.classList.add("active");
});


// عند الضغط على زر "لا"
noBtn.addEventListener("click", function () {

    noClicks++;

    // تغيير السؤال
    if (noClicks === 1) {
        questionText.textContent = "هلاا؟";
    } else if (noClicks === 2) {
        questionText.textContent = "اقوووللل";
    } else if (noClicks === 3) {
        questionText.textContent = "هيييه لاتستهبلي";
    } else {
        questionText.textContent = "خلاص خلاص اضغططيي ايوه";
    }

    // إظهار الجيف
    crySticker.style.display = "block";


    // تكبير زر نعم مع الجيف
    yesWrapper.style.transform =
        `scale(${Math.min(2, 1 + noClicks * 0.15)})`;

    // تصغير زر لا
    noBtn.style.transform =
        `scale(${Math.max(0.5, 1 - noClicks * 0.10)})`;
});
// عند الضغط على زر "ايوه أنا"
yesBtn.addEventListener("click", function () {
    step3.classList.remove("active");
    step4.classList.add("active");
});