/*
 Question	
 
    Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

    Sample Test Cases

    Input:"hello*3"
    Output:"Ifmmp*3"

    Input:"fun times!"
    Output:"gvO Ujnft!"

*/

//Answer

let letterChange = function nextLetter(str) {
    const strArr = str.split("");
    const alphabets = [
        "a","b","c","d","e","f","g",
        "h","i","j","k","l","m","n","o",
        "p","q","r","s","t","u","v","w",
        "x","y","z"
    ];
    

  const output = [];
    
    for (let char of strArr) {
        let charToLower = char.toLowerCase();
        
        if (charToLower == 'z') {
            output.push("A")
        } else if (alphabets.indexOf(charToLower) !== -1) {
            let char = alphabets[alphabets.indexOf(charToLower) + 1];
            
            if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
                output.push(char.toUpperCase());
            } else {
                output.push(char);
            }
            
        } else {
            output.push(char)
        }
    }

     //console.log(output);
    
    return output.join("")
   
}

console.log(letterChange('fun times!')); // output - gvO Ujnft!
console.log(letterChange('time*3'));// output - Ujnf*3
