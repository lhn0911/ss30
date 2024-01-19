function ktra(c) {
    let count = 0;
    c.sort((a, b) => a - b);
    for (let i = 0; i < c.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < c.length - 1; j++) {
            while (k < c.length && c[i] + c[j] > c[k]) {
                k++;
            }
            count += k - j - 1;
        }
    }

    return count;
}

let inputString = prompt("Nhập vào 1 chuỗi");
let arr = inputString.split(' ').map(Number);
let check = ktra(arr);
console.log(`Có ${check} tam giác`);
