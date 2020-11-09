// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");

    let duplicateValues = arr.filter((value, index) => arr.indexOf(value) !== index);
   
    let uniqueValues = arr.filter((d) => !duplicateValues.includes(d));

    let sumOfArray = uniqueValues.reduce((a, b) => a + b, 0);

    return sumOfArray;
}

singles([4,5,7,5,4,8]);

module.exports = {
    singles
};
