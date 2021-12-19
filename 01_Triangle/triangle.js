export default function triangle(height, char = "#") {

    let str = "";
    let triangle = [];

    for(let i = 0; i < height; i++){
        str = str.concat(char);
        triangle.push(str);
    }

    return triangle;
}