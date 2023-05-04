class Auth {
    constructor() {
        document.querySelector("body").style.display = "none";
        const uid = localStorage.getItem("uid");
        const pw = localStorage.getItem("pw");
        this.validateAuth(uid, pw);
    }

    validateAuth(uid, pw) {
        if (uid == null && pw == null) {
            window.location.replace("/dist/login.html");
        } else {
            document.querySelector("body").style.display = "block";
        }
    }

    logOut() {
        localStorage.removeItem("uid");
        localStorage.removeItem("pw");
        window.location.replace("/");
    }
}