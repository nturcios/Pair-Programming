//Easy 1 Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

function oddeven(array) {
    var oddlist=[];
    var evenlist=[];
    for (var i = 0; i < array.length; i++){
      if (array[i] % 2 ){
        oddlist.push(array[i]);
      }else{
        evenlist.push(array[i]);
      }
    }
    console.log("Even numbers:",evenlist)
    console.log("Odd numbers:",oddlist)
  }
oddeven([2, 4, 7, 11, 15, 16])

//Easy 2 Create a function that checks an array for prime numbers then inserts any pimes into a new array. 

function findPrimes(arr) {
    const primes = [];
  
    // Helper function to check if a number is prime
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    // Iterate through the input array and check for primes
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) {
        primes.push(arr[i]);
      }
    }
  
    return primes;
  }
  
  // Example usage
  const numbers = [ 2, 8, 12, 16, 19, 47,];
  const primeNumbers = findPrimes(numbers);
console.log(primeNumbers);

//Medium 1 Create a Function Called “vowelChecker” that takes in a single 
//argument(x) and logs weather or not the input is a vowel
function vowelchecker(string){
    ans = string == "a" || string=="e" || string=="i" ||string== "o" || string=="u" ? "This is a vowel" : "This is not a vowel";
    console.log(ans)
}
vowelchecker("e")










//Medium 2 Create a function that accepts two strings, 
//then determines whether or not the first string is an anagram of the second string by returning a boolean. 
function anagram(string1, string2){
    let str1 = string1.toLowerCase().split('').sort().join('').replaceAll(' ','');
    let str2 = string2.toLowerCase().split('').sort().join('').replaceAll(' ','');
    if(str1 === str2){
       console.log("True");
    } else {
       console.log("False");
    }
 }
 anagram("So dark the con of man","Madonna of the Rocks")


//Medium 3 Write a function that takes in two numbers and determines the largest positive integer 
//that divides the two numbers without a remainder. 

function largeCommonDivisor(num1, num2)
{
    for (x = 0; x < num1; x++) {
        if (num1 % x == 0) {
        if (num2 % x == 0) {
            answer = x 
        } 
    }

    }
    console.log(answer);
    
} 
largeCommonDivisor(78,126);

//Medium 4 Create a car object with the items: Make, Model, Year, Milage, and Color. 
//Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method,
// and runErrands method.Each of these methods should affect the car’s mileage adding to it each time 
//and console logging the old mileage and the new mileage.
let car = {
    make: "Nissan",
    model: "GTR",
    year: 2023,
    mileage: 3000,
    color: "Grey",
    

    driveToWork: function () {
        const oldMileage = this.mileage;
        const distance = 33;
        this.milage += distance;
        console.log(`old mileage: ${oldMileage}miles`);
        console.log(`new mileage: ${this.mileage} + ${distance} miles`);
    },

    driveAroundTheWorld: function () {
        const oldMileage = this.mileage;
        const distance = 24000;
        this.mileage += distance;
        console.log(`old mileage: ${oldMileage} miles`);
        console.log(`new mileage: ${this.mileage} miles`);
    },

    runErrands: function () {
        const oldMileage = this.mileage;
        const distance = 30;
        this.mileage += distance;
        console.log(`Old mileage: ${oldMileage} miles`);
        console.log(`New mileage: ${this.mileage} miles`);
    }
};

console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.mileage);
console.log(car.color);

car.driveToWork();
car.driveAroundTheWorld(); 
car.runErrands(); 

//Hard// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value

function brackets(string){
    length = string.length
    for (i=0;i<length;i++){
        if(string.charAt(0)==string.charAt(length - 1)){
            return true;
        }else if((string.charAt(0)==="{" && string.charAt(length-1)==="}")||(string.charAt(0)==="[" && string.charAt(length-1)==="]")||(string.charAt(0)==="(" && string.charAt(length-1)===")")){
            return true;
        }else{
          return false;
        }
    }
}
console.log(brackets("(hello world)"))