export default function fizzBuzz(arr){
    let result = [];

    for(const k of arr){
        let a = "";
        if(k%3 === 0) a += "Fizz";
        if(k%5 === 0) a += "Buzz";
        if(a.length === 0) a = k;
    
        result.push(a);
    }

    return result.join(', ');
}