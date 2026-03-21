function min(val1, val2) {
    const result = (val1 < val2) ? val1 : val2;
    return result;
}

const res1 = min(2, 5) == 2;
const res2 = min(3, -1) == -1;
const res3 = min(1, 1) == 1;

console.log(res1);
console.log(res2);
console.log(res3);


function pow(x, n) {
    const result = x ** n;
    return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));


// function pow2(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n >= 1 && n % 1 == 0) {
//   alert( pow2(x, n) );
// } else {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }