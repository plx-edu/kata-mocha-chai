export default function countChar(sti, ctc){
    // sti: string to inspect
    // ctc: char to count
    if(!isNaN(ctc)) ctc = ""+ctc;

    let a = 0;
    for (const k in sti) {
        if(sti[k] === ctc) a++;
    }

    return a;
}