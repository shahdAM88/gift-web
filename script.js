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
