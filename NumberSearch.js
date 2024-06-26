/*
 Question	
 
    Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, 
    then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, 
    Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. 
    Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, 
    so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string 
    (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.

    Sample Test Cases

    Input:"H3ello9-9"
    Output:4

    Input:"One Number*1*"
    Output:0

*/

//Answer

function numberSearch(str) { 

  return Math.round(str.match(/[0-9]/g).reduce((item, next) => +item + +next) / str.match(/[a-zA-z]/g).length); 
         
}



//Control
console.log(numberSearch("H3ello9-9"));
console.log(numberSearch("One Number*1*"));




function number_search(str) { 
    const num = str.match(/[0-9]/g).reduce((item, next) => +item + +next);

   console.log(num)
    
  return Math.round(
      str.match(/[0-9]/g).
      reduce((item, next) => +item + +next) / str.match(/[a-zA-z]/g).length); 
         
}



//Control
console.log(number_search("H3ello9-9"));
console.log(number_search("One Number*1*"));
