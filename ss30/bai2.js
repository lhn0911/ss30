let input;
let n;

for (;;) {
    let num = prompt("Nhập vào một số nguyên dương n:");
    n = parseInt(num);

    if (!isNaN(n) && n > 0) {
        break;
    } else {
        alert("Vui lòng nhập một số nguyên dương.");
    }
}
function inRaSoLe(n) {
    let soLe = [];
    for (let i = 1; i <= n; i += 2) {
        soLe.push(i);
    }

    if (soLe.reduce((a, b) => a + b, 0) % 2 === 0) {
        soLe.pop();
    }

    console.log("Các số nguyên dương lẻ sao cho tổng là số lẻ:");
    console.log(soLe);
}
inRaSoLe(n);
