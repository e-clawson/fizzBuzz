// Fizzbuzz

// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 3 === 0 ) {
//         console.log("fizz")
//     }
//     else if (i % 5 === 0 ) {
//         console.log("buzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// Primetime
// create a loop that divides itself by every number less than that 
// if all are true, console.log n  and then stop 
// if not all true, go to next increment 

n = 3; 

for (let i = n - 1; i > 1; i--) {
    if (n % i == 0) {
        console.log("Not Prime")
        break;
    } else {
        console.log("Prime")
    }
}

// for (let i = n-1; i > 1; i--) { 
//     if ( n % i != 0) {
//         console.log("not prime")
//     }

// }

function primeTime(n) {
        // prime is a true/false value to be checked 
        let prime;
        // set n to next value after n to see if it is prime
        n++;

        // continues until prime is true
        while (prime != true) {
            // checks if prime
            //temporarily sets prime to true
            prime = true;
            for (let i = n - 1; i > 1; i--) {
                if (n % i == 0) {
                    // if even 1 number is divisible, prime is false
                    prime = false;
                } 
            }
            if (prime == false) {
                // if prime is still false, increases n by one
                n++;
            } else {
                // if it makes it to here and prime is still true, new n is prime
                console.log(`${n} is the next prime number.`)
                prime = true;
            }
        }
}

// uncomment the next line placing any number there (sets n)
// primeTime(8);
