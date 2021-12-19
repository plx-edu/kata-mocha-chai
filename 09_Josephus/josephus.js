export function josephus(n, k){
    if(n === undefined || isNaN(n) || n <= 0){
        return NaN;
    }else if(+n === 1) return +n;

    // could be a random interval...
    if(k === undefined || k === 0) k = 1;
    else k = Math.abs(k);

    // Add prisoner(s) to 'circle'
    let p = setPrisoners(n);

    
    let bye = 1;
    let currentIndex = 0;
    let deadp = 0;
    do{
        // Kill prisoner(s)
        if(bye === k && n > 0){
            delete p[currentIndex];
            bye = 0;
            deadp++;
        }

        // update index counting
        currentIndex++;
        if(currentIndex > p.length -1){
            currentIndex = 0;
        }
        
        // if prisoner exists count
        if(p[currentIndex] !== undefined){
            bye++;
        }
        
    }while(deadp < n-1);

    p = cleanArray(p);
    return p[0];
}

// Removes empty slots from array
export function cleanArray(arr){
    if( arr === undefined || arr.length === 0) {
        return [];
    }

    let clean = [];

    for (const k of arr) {
        if(k !== undefined) clean.push(k);
    }

    return clean;
}

export function setPrisoners(n){
    let arr = [];

    for(let i = 0; i < n; i++){
        arr.push(i+1);
    }

    return arr;
}

