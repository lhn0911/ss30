function a(mang) {
    let ktra = [];
    for (let i = 0; i < mang.length; i++) {
      let char = mang[i];
      if (/[a-zA-Z]/.test(char)) {
        ktra.unshift(char);
      } else if (/[0-9]/.test(char)) {
        ktra.push(char);
      } else {
        ktra.push(char); 
      }
    }
    return ktra;
  }
  let b = prompt("Nhập vào một chuỗi bất kỳ:");
  let result = a(b);
  console.log("Kết quả sau khi sắp xếp là:");
  console.log(result);