//uncompress('3(ab)') // 'ababab'
//uncompress('3(ab2(c))') // 'abccabccabcc'

function uncompress() {
var rNum = 0;
var rStr = '';
var out = '';
for(let char of str)  { 

    if (typeof char === 'string' && (char == '(' || char == ')') ) {
        continue;
    } else if (!isNaN(char)) {
        if(rStr != ''){
            out += rStr.repeat(rNum);
            rNum = parseInt(char);
            rStr = '';
        } else {
            rNum = parseInt(char);
        }
        
        console.log('Inside number', parseInt(char));
    } else if (typeof char === 'string') {
        rStr += char;
        console.log('Inside string', char);
    }
  
}

 out += rStr.repeat(rNum);

return out;
}

uncompress('3(ab2(c))') // 'abccabccabcc'


