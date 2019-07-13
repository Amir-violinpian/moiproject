// var arr = [1,2,3,4,5,15];
// var resultmin = 0;
// var resultMax = 0;
// function sortFunc(a, b){
//     return a - b;
// }
// console.log(arr);
// arr.sort(sortFunc);
// console.log(arr);

// for(var i=0; i< arr.length; i++) {
//     if(i == 0)resultMax += arr[i];
//     if(i !== arr.length - 1) resultMin += arr[i];
// }

// console.log(arr);
// console.log(resultMin);
// console.log(resultMx);

var arr = [3, 9, 1, 5, 7]
var sortArray = arr.sort(function (a, b) {
    return a - b;
});


var minSum = sortArray.slice(0, 4).reduce(function (a, b) {
    return a + b;
});


var maxSum = sortArray.slice(1, 5).reduce(function (a, b) {
    return a + b;
});
// console.log(array.sort()) 
console.log(minSum + ' ' + maxSum);