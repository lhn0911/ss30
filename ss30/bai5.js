function ktra(b) {
    let a = b.split(' ');
    for (let i = 0; i < a.length; i++) {
        let temp = a[i];
        if (temp.length > 1) {
            a[i] = temp.slice(0, -1) + temp.slice(-1).toUpperCase();
        } else {
            a[i] = temp.toUpperCase();
        }
    }

    return a.join(' ');
}

let c = prompt("Nhập vào một chuỗi:");
let chek = ktra(c);
console.log(chek);
