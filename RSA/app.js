const { gcd, modInverse } = require('./RSA');
const { findNextPrime } = require('./prime');

const primes = [1];
const MAXIMUM = 500;
let current;
while (true) {
    current = primes[primes.length - 1];
    current = findNextPrime(current);
    if(current > MAXIMUM)
        break;
    primes.push(current);
}

console.log('primes < ' + MAXIMUM + ' are: ' + primes);

// Given "primes" and calculating φ(n)
const p = 13;
const q = 23;
const n = p * q; // n = p*q, modulus for public and private keys
const phi = (p - 1) * (q - 1); // Euler's Totient Function φ(n)

let prevE;
for(let prime in primes) {
    // Choosing e, starting with the smallest possible e
// let e = 2;
let e = prime;
if(e <= prevE)
    continue;
prevE = e;
while (e < phi) {
    if (gcd(e, phi) == 1)
        break;
    else
        e++;
}
prevE = e;   
// Calculating d, the modular multiplicative inverse of e modulo φ(n)
const d = modInverse(e, phi);
console.log('e:', e, `Public Key: (${e}, ${n})`, `Private Key: (${d}, ${n})`);
}
