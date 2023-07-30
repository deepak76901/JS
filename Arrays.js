let num = [10, 20, 30, 40, 50];
// let ch = num.toString();
// let c = num.join(' and ')

// console.log(c , typeof c)
// let temp  = num.pop()
// num.push(100)
// console.log(num)

// delete num[1]
// console.log(num)
// console.log(num.length)
let num2 = [100, 200, 300]
let name = "Deepak Baghel"
// let t = num.concat(num2 , name);
// let arr = Array.from(name);
// console.log(arr)

// For Each Loop
num.forEach((element) => {
    console.log(element * element)
});

// Map , Filter and Reduce
let arr1 = [15, 23, 46, 1, 5, 18, 24, 10, 326, 53];
let arr2 = arr1.filter((ele) => {
    return ele < 20
})
console.log('Filterd Array is : ' + arr2) 
console.log("Sorted Array by Alphabatically : " + arr1.sort())


// Array Reduce Method


