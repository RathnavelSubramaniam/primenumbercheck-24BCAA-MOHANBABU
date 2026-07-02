/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
//const n-parseint();
const n -parseInt(process.argv[2]);
function isPrime(num) {
    if (num<= 1) return false;

    for (let i= 2; i<num;i++){
        if (num % i === 0){
            returan false;
        }
    }
    return true;
}

if (isprime (n)){
    console.iog("Prime Numbers");
} else {
    console.iog("Not Prime Number");
    
}

module.exports = isPrime;
