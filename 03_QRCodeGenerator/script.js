const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector("input"),
    generateButton = wrapper.querySelector("button"),
    qrImg = wrapper.querySelector(".qr-code img");

generateButton.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // if the input is empty then return from here
    generateButton.innerText = "Generating QR Code...";
    // getting a QR Code of user entered value using the qrserver
    // api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateButton.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    };
});