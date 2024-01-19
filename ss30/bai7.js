function ktra(a, b) {
    let start = 0;
    let min = Infinity;
    let cout = 0;
    let c = [];
    for (let end = 0; end < a.length; end++) {
        cout += a[end];

        while (cout > b) {
            if (end - start + 1 < min) {
                min = end - start + 1;
                c = a.slice(start, end + 1);
            }
            cout -= a[start];
            start++;
        }
    }
    return c;
}       
let d = [1, 4, 45, 6, 10, 19];
let chek = 51;
let c = ktra(d, chek);
console.log(c);
