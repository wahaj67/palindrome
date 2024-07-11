 function isPalindrome(input:string):boolean{
    const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    const reversedOnput = sanitizedInput.split("").reverse().join("")
    return sanitizedInput===reversedOnput
 }

 export function checkPalindrome():void{
   const inputText = (document.getElementById("inputText") as HTMLInputElement).value
  const result = document.getElementById("result")as HTMLParagraphElement
 
  if(isPalindrome(inputText)){
    result.textContent = `${inputText} is Palindrome!`
    result.style.color="green"
  }else {
    result.textContent= `${inputText} is not a Palindrome!`
    result.style.color = "red"
  }




 }