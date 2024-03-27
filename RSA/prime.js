function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true; // 2 and 3 are prime numbers

    // This is checked so that we can skip middle five numbers in below loop
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function findNextPrime(num) {
    let prime = num;
    let found = false;
    while (!found) {
        prime++;
        if (isPrime(prime)) found = true;
    }
    return prime;
}

// Example usage
// const num = 10; // Starting number to find the next prime
// console.log(`The next prime after ${num} is ${findNextPrime(num)}`);

module.exports = { findNextPrime };