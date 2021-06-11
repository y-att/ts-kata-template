/*
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37

Expected output:

20
30
40
*/

//Given a number return the closest number to it that is divisible by 10.

//pseudocode
// function returnClosestMultiple10 (number)
/**
 * return closest multiple of ten
 * @param  a input number
 * @returns number
 */
function returnClosestMultiple10(a: number): number {
  //if (a < 5 || a[0] < 5)

  //let closestMultiple : number = (a + 5)/10 * 10;  // closest integer to `a` that is divisible by `b`
  const c1: number = a - (a % 10);
  const c2: number = a + 10 - (a % 10);
  if (a - c1 > c2 - a) {
    return c2;
  } else {
    return c1;
  }
}

export default returnClosestMultiple10;

// tests
// closestMultiple = 0
// if number - or second digit is less than 5- round down nearest multiple
// if number- or second digit is greater than=> 5- round up
// closestMultiple = number
// return closestMultiple

// example returnClosestMultiple10 (6)
