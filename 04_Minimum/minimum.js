export default function min(a, b){
    a = +a;
    b = +b;

    if(isNaN(a) || isNaN(b)) return NaN;

    return ((a < b) ? a : b);
}


