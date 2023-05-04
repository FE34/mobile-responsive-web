class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            var error = 0;
            var uid = document.getElementById("username").value;
            var pw = document.getElementById("password").value;

            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                if (self.validateFields(input) == false) {
                    error++;
                }
            });
            if (error == 0) {
                var user = localStorage.getItem("uid", uid);
                var pass = localStorage.getItem("pw", pw);
                if (uid == user) {
                    if (pw == pass) {
                        alert('Login Successful');
                        this.form.submit();
                    } else {
                        alert('Wrong Password');
                    }
                } else {
                    alert('Invalid User');
                    alert('Wrong Username or Password');
                }
            }
        })
    }

    validateFields(field) {
        if (field.value.trim() == "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} tidak boleh kosong`,
                "error"
            );
            return false;
        } else {
            if (field.type == "password") {
                if (field.value.length < 8) {
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} harus minimal 8 karakter`,
                        "error"
                    );
                    return false;
                } else {
                    this.setStatus(field, null, "success");
                    return true;
                }
            } else {
                this.setStatus(field, null, "success");
                return true;
            }
        }
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector(".error-message");

        if (status == "success") {
            if (errorMessage) {
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }

        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }

        if (status == "error") {
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }
}

const form = document.querySelector(".loginForm");
if (form) {
    const fields = ["username", "password"];
    const validator = new Login(form, fields);
}