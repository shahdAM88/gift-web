const SUPABASE_URL = "https://yoabjckratjgklgiyium.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_RAIjaNPmbVlDraQZcwbfEQ_gbYkcsCo";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
supabaseClient.auth.getSession().then(({ data }) => {
    if (!data.session) {
        window.location.href = "  login.html";
    }
});
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

const giftPhotos = document.getElementById("giftPhotos");
const photoFileName = document.getElementById("photoFileName");

giftPhotos.addEventListener("change", function () {
    if (giftPhotos.files.length > 0) {
        photoFileName.textContent =
            "📸 تم اختيار " + giftPhotos.files.length + " صورة";
    } else {
        photoFileName.textContent = "ما اخترتي صور للحين";
    }
});

const giftPreview = document.getElementById("giftPreview");
const previewName = document.getElementById("previewName");
const previewMessage = document.getElementById("previewMessage");
const previewSong = document.getElementById("previewSong");
const previewPhotos= document.getElementById("previewPhotos");

const confirmGiftBtn = document.getElementById("confirmGiftBtn");
createGiftBtn.addEventListener("click", function () {
    previewName.textContent = "هدية لـ " + recipientName.value + " 🎁";

    previewMessage.textContent = giftMessage.value;

    if (giftSong.files.length > 0) {
        previewSong.textContent = "🎵 " + giftSong.files[0].name;
    } else {
        previewSong.textContent = "ما تم اختيار أغنية";
    }
if (giftPhotos.files.length > 0) {
    previewPhotos.textContent =
        "📸 " + giftPhotos.files.length + " صورة";
} else {
    previewPhotos.textContent = "ما تم اختيار صور";
}
    giftPreview.style.display = "block";
});
confirmGiftBtn.addEventListener("click", async function () {

    const shareToken = crypto.randomUUID();

    let songPath = null;
    const photoPaths = [];

    // رفع الأغنية
    if (giftSong.files.length > 0) {
        const songFile = giftSong.files[0];
        songPath = `${shareToken}/song/${Date.now()}-${songFile.name}`;

        const { error: songError } = await supabaseClient
            .storage
            .from("gift-file")
            .upload(songPath, songFile);

        if (songError) {
            console.error(songError);
            alert("صار خطأ في رفع الأغنية");
            return;
        }
    }

    // رفع الصور
    for (const photoFile of giftPhotos.files) {
        const photoPath =
            `${shareToken}/photos/${crypto.randomUUID()}-${photoFile.name}`;

        const { error: photoError } = await supabaseClient
            .storage
            .from("gift-file")
            .upload(photoPath, photoFile);

        if (photoError) {
            console.error(photoError);
            alert("صار خطأ في رفع الصور");
            return;
        }

        photoPaths.push(photoPath);
    }

    // حفظ بيانات الهدية
    const { error } = await supabaseClient
        .from("gift")
        .insert({
            recipient_name: recipientName.value,
            message: giftMessage.value,
            song_url: songPath,
            photos: photoPaths,
            share_token: shareToken
        });

    if (error) {
        console.error(error);
        alert("صار خطأ في إنشاء الهدية");
        return;
    }

    alert("تم إنشاء الهدية 🎁");
});