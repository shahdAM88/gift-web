const SUPABASE_URL = "https://yoabjckratjgklgiyium.supabase.co";
const SUPABASE_KEY = "sb_publishable_RAIjaNPmbVlDraQZcwbfEQ_gbYkcsCo";


const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

supabaseClient.auth.getSession().then(({ data }) => {
    if (data.session) {
        window.location.href = "create.html";
    }
});

const loginForm = document.querySelector(".login-form");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const { error } = await supabaseClient.auth.signInWithPassword({
        email: loginEmail.value,
        password: loginPassword.value
    });
if (error) {
    console.error(error);
    loginMessage.textContent = error.message;
    return;
}

    window.location.href = "create.html";
});
