let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let generateBtn = document.querySelector(".generate-btn");
let colorButtons = document.querySelectorAll(".bgcolor");
let body = document.body;

function qrGenerater() {
    if (qrText.value.trim() !== "") {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        qrImage.style.display = "block";
    } else {
        alert("Please enter text or URL to generate a QR Code!");
    }
}

generateBtn.addEventListener("click", qrGenerater);

colorButtons.forEach(button => {
    button.addEventListener("click", function() {
        body.style.backgroundColor = this.getAttribute("data-color");
    });
});


window.addEventListener(("keyup"),function(e){
    if(e.keyCode===13){
        qrGenerater();
    }
})
