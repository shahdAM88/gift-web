const SUPABASE_URL = "https://yoabjckratjgklgiyium.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_RAIjaNPmbVlDraQZcwbfEQ_gbYkcsCo";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const giftSong = document.getElementById("giftSong");
const songFileName = document.getElementById("songFileName");

giftSong.addEventListener("change", function () {
    if (giftSong.files.length > 0) {
        songFileName.textContent = "🎵 " + giftSong.files[0].name;
    } else {
        songFileName.textContent = "ما اخترتي أغنية للحين";
    }
});
const recipientName = document.getElementById("recipientName");
const giftMessage = document.getElementById("giftMessage");
const createGiftBtn = document.getElementById("createGiftBtn");

const giftPreview = document.getElementById("giftPreview");
const previewName = document.getElementById("previewName");
const previewMessage = document.getElementById("previewMessage");
const previewSong = document.getElementById("previewSong");
const confirmGiftBtn = document.getElementById("confirmGiftBtn");
createGiftBtn.addEventListener("click", function () {
    previewName.textContent = "هدية لـ " + recipientName.value + " 🎁";

    previewMessage.textContent = giftMessage.value;

    if (giftSong.files.length > 0) {
        previewSong.textContent = "🎵 " + giftSong.files[0].name;
    } else {
        previewSong.textContent = "ما تم اختيار أغنية";
    }

    giftPreview.style.display = "block";
});