const lengthSlider = document.querySelector(".pass-length input"),
options = document.querySelectorAll(".option input"),
generateBtn = document.querySelectorAll(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"!@#$%^&*()_+:;<>?[]{}()~|-,."
}
const generatePassword = () =>{
    let staticPassword = "";

    options.forEach(Option => {
        if(options.checked){
            staticPassword += characters[Option.id];

        }
    })
}
const updateSlider = () =>{
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
}
updateSlider(); 


lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);