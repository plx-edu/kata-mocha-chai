export function sumOfRange(start, end, step){
    
    if(isNaN(start) || isNaN(end) || isNaN(step)){
        return NaN;
    }
    
    sum(range(start, end, step));
    
    return NaN;
}

export function sum(arr){
    if( arr === undefined || arr.length === 0) {
        return NaN;
    }

    // console.log("###################", arr.length);
    let result = 0;

    for (let k of arr) {
        result += k;
    }

    // console.log("Sum result:", result);
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
    }else{
        step = Math.abs(step);
    }

    let arr = [];
    // console.log("start ", arr);

    if(start < end){
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

    // console.log(`Range: ${start}, ${end} - Step: ${step}`);
    // console.log(arr);
    return arr;
}// range()