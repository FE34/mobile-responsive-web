let height = document.getElementById("height");
let weight = document.getElementById("weight");
let age = document.getElementById("age");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");
let btnReset = document.getElementById("btnReset");
function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmi() {
    let p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    let bmi = Number(p[2]) / (Math.pow(Number(p[1]) / 100, 2)) ;
    let result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Normal Weight";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } else if (bmi >= 30) {
        result = "Obesity";
    }
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let t = document.createTextNode(result);
    let b = document.createTextNode("BMI: ");
    let r = document.createTextNode(parseFloat(bmi).toFixed(1));
    h2.appendChild(t);
    h3.appendChild(b);
    h3.appendChild(r);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);