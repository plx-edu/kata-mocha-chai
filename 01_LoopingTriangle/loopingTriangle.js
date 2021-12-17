
export function makeTriangle(height, char = "#") {
    // console.log("Looping a Triangle:");
    // console.log(height, "isNaN =", isNaN(height));

    let str = "";
    let triangle = [];

    for(let i = 0; i < height; i++){
        str = str.concat(char);
        triangle.push(str);
    }

    return triangle;
}

// for(const k of makeTriangle(10)) console.log(k);