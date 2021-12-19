export function sumOfRange(start, end, step){
    
    if(isNaN(start) || isNaN(end)){
        return NaN;
    }
    
    return sum(range(start, end, step));
}

export function sum(arr){
    if( arr === undefined || arr.length === 0) {
        return NaN;
    }

    let result = 0;

    for (let k of arr) {
        if(isNaN(k) || typeof k === 'string') continue;
        result += k;
    }

    // return result;
    return result;
}

export function range(start, end, step){
    start = +start;
    end = +end;
    step = +step;

    if(isNaN(step)){
        step = 1;
    }else if(step === 0){
        step = Math.abs(start - end);
    }else if (step < 0 && start < end){
        // ES6 has better new swap (check browser support)
        // [a, b] = [b, a];
        let tmp = start;
        start = end;
        end = tmp;
    }
    step = Math.abs(step);

    let arr = [];

    if(start < end ){

        for(let i = start; i <= end; i += step){
            arr.push(i);
        }
    }else if(start > end){

        for(let i = start; i >= end; i -= step){
            arr.push(i);
        }
    }else {
        arr = [start];
    }

    return arr;
}// range()