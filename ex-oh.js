
function ex_o_count(str) {
    let xcount = 0;
    let ocount = 0;
  
    for(let i of str){
        if(i === 'x') {
            xcount +=1;
        } else if( i === 'o') {
            ocount +=1;
        }
    }

     console.log('xcount', xcount);
     console.log('ocount', ocount);

    return String(xcount == ocount);
    
}


console.log(ex_o_count('xswecdf')); // return false
console.log(ex_o_count('xoxoxo')); // return true
