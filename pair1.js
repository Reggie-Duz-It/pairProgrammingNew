const prompt = require('prompt-sync') ({signit: true});
//Easy (1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter( n => n % 2);
let evens = arr.filter( n => n % 2 == 0);
console.log(odds);
console.log(evens);


// JORGE PRO //

//2)

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let myPrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
})
console.log(myPrimeArray);