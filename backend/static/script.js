async function cloneVoice() {
    const file = document.getElementById("voice").files[0];
    const text = document.getElementById("text").value;
    const status = document.getElementById("status");
    const loader = document.getElementById("loader");
    const audio = document.getElementById("audio");
    const download = document.getElementById("download");

    if (!file || !text) {
        alert("Upload voice and enter text!");
        return;
    }

    loader.style.display = "block";
    status.innerText = "Generating...";

    let formData = new FormData();
    formData.append("voice", file);
    formData.append("text", text);

    try {
        let res = await fetch("/clone", {
            method: "POST",
            body: formData
        });

        let blob = await res.blob();
        let url = URL.createObjectURL(blob);

        audio.src = url;
        download.href = url;

        status.innerText = "✅ Voice generated!";
    } catch (err) {
        status.innerText = "❌ Error occurred";
    }

    loader.style.display = "none";
}

const voiceInput = document.getElementById("voice");
voiceInput.addEventListener("change", function () {
    const fileName = this.files[0]?.name || "Upload Voice Sample (10–30 sec)";
    document.getElementById("file-text").innerText = fileName;

    if(this.files.length > 0){
        this.parentElement.classList.add('selected');
    } else {
        this.parentElement.classList.remove('selected');
    }
});

function toggleAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal.style.display === 'flex') {
        modal.classList.remove('show');  
        setTimeout(() => { modal.style.display = 'none'; }, 400); 
    } else {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    }
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const msg = document.getElementById('login-message');

    if(email && password){
        msg.innerText = "✅ Login Successful!";
        msg.style.color = "green";
        setTimeout(() => toggleAuthModal(), 1500);
    } else {
        msg.innerText = "❌ Please fill all fields!";
        msg.style.color = "red";
    }

}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const msg = document.getElementById('signup-message');

    if(name && email && password){
        msg.innerText = "✅ Sign Up Successful!";
        msg.style.color = "green";
        setTimeout(() => toggleAuthModal(), 1500);
    } else {
        msg.innerText = "❌ Please fill all fields!";
        msg.style.color = "red";
    }

}

window.onclick = function(event) {
    const modal = document.getElementById('auth-modal');
    if (event.target == modal) {
        modal.classList.remove('show');
        setTimeout(() => { modal.style.display = 'none'; }, 400);
    }
}