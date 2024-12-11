const signupform = document.getElementById("signup-form");
const leftP = document.getElementById("left");
const rightP = document.getElementById("right");

const useremail = document.getElementById("user-email");
const erroremail = document.getElementById("error-email");
const emailinput = document.getElementById("email");
const submitbtn = document.getElementById("btn1");

const successmsg = document.getElementById("successmsg");
const dismissbtn = document.getElementById("btn2");

const form = document.getElementById("form");

function formSuccess() {
    successmsg.classList.add("active");
    signupform.classList.add("success");
    leftP.style.display = "none";
    rightP.style.display = "none";
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

form.addEventListener("submit", (e) => {
    // submitbtn.addEventListener("click", (e) => {

    e.preventDefault();
    const email = emailinput.value;
    console.log(email);
    console.log("hi");

    if (validateEmail(email)) {
        formSuccess()
        useremail.innerHTML = email;
        emailinput.value = "";

        erroremail.classList.remove("active");
        emailinput.classList.remove("active");


    } else {
        erroremail.classList.add("active");
        emailinput.classList.add("active");
        emailinput.style.color = "hsl(4, 100%, 67%)";
    }
})

dismissbtn.addEventListener("click", (e) => {
    leftP.style.display = "block";
    rightP.style.display = "block";
    signupform.classList.remove("success");
    successmsg.classList.remove("active");
})