const positiveSum = (numbers) => {
    let sum = 0;

    for (const number of numbers) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}
const isDivisible = (number, divisorA, divisorB) => number % divisorB === 0 && number % divisorA === 0;
const solution = (str) => str.split('').reverse().join('');
const reverseSeq = (n) => {
    let answer = []; //intialize an array

    for (let i = n; i > 0; i--) { //loop down from n to 1
        answer.push(i); //push each i to the answer array
    }

    return answer; //return answer;
}