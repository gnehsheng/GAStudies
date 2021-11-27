/*
// while (condition) {logic}
// do {logic} while(condition);

let condition = true
    while (condition) {
        const i = Math.floor(Math.random() * 10) // randomly print number from 0 to 9
        console.log(i)
        condition = i % 2 === 0 // modulous remainder operator looking for values that can be /2 and leaves a remainder of 0
    }

do {
    i = Math.floor(Math.random() * 10)
    console.log(i)
 } while (i % 2 === 0)

// use while if indeterminate no. of iterations of loop is going to run
// for loop when you know how many iterations you need to run



// for (init: test: update) {logic}

 for (let i = 0; i < 10; i++) {
     if (i === 5){
        // continue // skip the iteration from this point onwards
        // break // stops the iteration once it reaches this value
     }
     console.log(`The number is ${i}`)

 }




// if (condition) {logic} 
// if (condition) {logic} else if {alt logic} // for when ther are multiple conditions
// if (condition) {logic} else {alt logic} // last condition


 const score = 75
 if (score >= 75) {
        console.log('You got A!')
    }else if (score >= 65 && score < 75) {
        console.log('You got B!')
    }else if (score >= 55 && score < 65) {
        console.log('You got C!')
    }else{
        console.log('You failed')
    }




// switch

let statusCode = 400
switch (statusCode) {
    case 200: console.log('OK'); break;
    case 400: console.log('Internal Server Error'); break;
    case 404: console.log('Code Missing'); break;
    default: console.log('Invalid status code')
}

*/