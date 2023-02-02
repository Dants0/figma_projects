const btn = document.getElementById("btnCheck");
const phrase = document.querySelector("#phrase");
const checkbox = document.getElementById("checkbox");

btn.addEventListener("click", startPalindrome, false);
checkbox.addEventListener("change", ()=>{
    document.body.classList.toggle("dark");
})

function startPalindrome() {
    let message = phrase.value;
    let re = /[\W_]/g;
    let lowerCase = message.toLowerCase().replace(re, "");
    let reverseStr = lowerCase.split("").reverse().join('');
    return alert(reverseStr === lowerCase);
}