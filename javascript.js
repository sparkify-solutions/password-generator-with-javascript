const passwordinput = document.querySelector(".password-box input"),
copyicon = document.querySelector(".password-box i"),
rangeinput = document.querySelector(".range-box Input"),
slidernumber = document.querySelector(".range-box .slider-number"),
generatenumber = document.querySelector(".generate-number");

let allCharacters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*";

const generatepassword =() => {
    let newpassword="";

    for(let i=0 ; i < rangeinput.value ; i++){
        let randomnumbers = Math.floor(Math.random() * allCharacters.length);
        newpassword +=allCharacters[randomnumbers];
}
        passwordinput.value = newpassword;
};

rangeinput.addEventListener("input" , () => {
    slidernumber.innerText= rangeinput.value;
    copyicon.classList.replace("bxs-message-alt-check" , "bxs-copy")
}
);

copyicon.addEventListener("click" , () =>{
    navigator.clipboard.writeText(passwordinput.value);
    copyicon.classList.replace("bxs-copy","bxs-message-alt-check")
});
generatepassword();
generatenumber.addEventListener("click" , generatepassword );