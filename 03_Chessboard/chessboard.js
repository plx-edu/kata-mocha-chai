export function chessboard(size = 8) {
    if(isNaN(size)) return "";

    // Returns a string for display
    return makeBoard(size).join("\n");
}

export function makeBoard(size = 8) {
    let char = ["🁣", "🁢"];
    let result = [];
    
    // for(outer) Make chessboard rows
    for(let i = 0; i < size; i++){
        let line = "";

        // for(inner) Make columns in row
        for(let j = 0; j < size; j++){
            if(i%2 === 0) {
                if(j%2 === 0) line += char[0];
                else line += char[1];
            }else{
                if(j%2 === 0) line += char[1];
                else line += char[0];
            }
        }

        result.push(line);
    }

    // console.log(result.join("\n"));
    return result;
}