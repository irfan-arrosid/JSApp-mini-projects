const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault; //preventing form from submitting
    if (eInput.value == "") { //if email is empty
        eField.classList.add("shake", "error");
    }
    if (pInput.value == "") { //if password is empty
        pField.classList.add("shake", "error");
    }
    setTimeout(() => { //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);
}