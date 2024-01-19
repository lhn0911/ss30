function ktra(mang) {
    for (let i = 0; i < Math.floor(mang.length / 2); i++) {
        if (mang[i] !== mang[mang.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let a=prompt('Nhập vào mảng a:')
console.log(ktra(a));