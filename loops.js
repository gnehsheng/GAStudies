// while (condition) {logic}

let condition = true
    while (condition) {
        const i = Math.floor(Math.random() * 10) // randomly print number from 0 to 9
        console.log(i)
        condition = i % 2 === 0 // modulous remainder operator looking for values that can be /2 and leaves a remainder of 0
    }

// use while if indeterminate no. of iterations of loop is going to run
// for loop when you know how many iterations you need to run