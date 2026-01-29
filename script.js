// Armstrong Numbers

// function isArmstrong(num) {
//     let digits = num.toString().split('');
//     let power = digits.length;
//     let sum = 0;

//     for (let d of digits) {
//         sum += Math.pow(Number(d), power);
//     }

//     return sum === num;
// }

// let count = 0;
// let number = 1;

// while (count < 2) {
//     if (isArmstrong(number)) {
//         console.log(number);
//         count++;
//     }
//     number++;
// }

// Swapping first and last characters of a string

// let name = "NARAHARI";

// let firstChar = name[0];
// let lastChar = name[name.length - 1];
// let middle = name.substring(1, name.length - 1);

// let swappedName = lastChar + middle + firstChar;

// console.log("Original Name:", name);
// console.log("After Swapping:", swappedName);
// Counting Vowels and Consonants in a String

let name = "NARAHARI";
let vowels = "AEIOUaeiou";
let count = 0;

for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
        count++;
    }
}

console.log("Number of vowels in your name:", count);

 