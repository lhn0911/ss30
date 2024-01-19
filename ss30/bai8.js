function findTriplets(arr, targetSum) {
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === targetSum) {
                    return [arr[i], arr[j], arr[k]];
                }
            }
        }
    }
    return [];
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myTargetSum = 15;

let result = findTriplets(myArray, myTargetSum);

if (result.length > 0) {
    console.log(`Có một bộ ba số trong mảng sao cho tổng bằng ${myTargetSum}: ${result}`);
} else {
    console.log(`Không có bộ ba số nào trong mảng sao cho tổng bằng ${myTargetSum}.`);
}
