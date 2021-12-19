export default function isEven(x){

    // Should only accept a whole number 
    if(isNaN(x) ||  typeof x !== "number" || x !== Math.trunc(x)) {
        return false;
    }

    let n = Math.abs(x);
    while(n !== 1 && n !== 0){
        n -= 2;
    }
    
    if(n === 0) return true;
    else if(n === 1) return false;
}
