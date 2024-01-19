function ktra(songuyen) {
    if (songuyen < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(songuyen); i++) {
      if (songuyen % i === 0) {
        return false;
      }
    }
    return true;
}

let a = prompt("Nhập mảng:");
let mang = a.split(',').map(Number);
let b = mang.filter(ktra);
console.log( b);
