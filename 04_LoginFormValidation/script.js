const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault; //preventing form from submitting
    if (eInput.value == "") { //if email is empty
        eField.classList.add("shake", "error");
    } else {
        checkEmail(); //calling checkEmail function
    }
    if (pInput.value == "") { //if password is empty
        pField.classList.add("shake", "error");
    }
    setTimeout(() => { //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
        checkEmail(); //calling checkEmail function
    }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate email
        if (!eInput.value.match(pattern)) { //if pattern not matched with user entered value
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            //if email is not empty then show enter a valid email address until email valid else show email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = () => {
        if (pInput.value == "") { //if password is empty
            pField.classList.add("error");
        } else {
            pField.classList.remove("error");
        }
    }

    //if error class not contains in eField and pField then user has entered proper details
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "#";
        console.log("Form Submitted!")
    }
}