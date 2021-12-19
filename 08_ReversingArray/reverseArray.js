export default function reverseArray(arr){
    if(arr === undefined || !Array.isArray(arr)){
        return [];
    }

    let rvrsd = [];
        
    for(let i = arr.length-1; i >=0 ; i--) {
        rvrsd.push(arr[i]);
    }

    return rvrsd;
}