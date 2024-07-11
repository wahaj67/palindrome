"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPalindrome = void 0;
function isPalindrome(input) {
    const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedOnput = sanitizedInput.split("").reverse().join("");
    return sanitizedInput === reversedOnput;
}
function checkPalindrome() {
    const inputText = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    if (isPalindrome(inputText)) {
        result.textContent = `${inputText} is Palindrome!`;
        result.style.color = "green";
    }
    else {
        result.textContent = `${inputText} is not a Palindrome!`;
        result.style.color = "red";
    }
}
exports.checkPalindrome = checkPalindrome;
