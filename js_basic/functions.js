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


// callback functions

function ask(question, showOk, showCancel) {
  if (confirm(question)) showOk()
  else showCancel();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);



function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

// Здесь функции объявляются прямо внутри вызова ask(...). У них нет имён, поэтому они называются анонимными. Такие функции недоступны снаружи ask (потому что они не присвоены переменным), но это как раз то, что нам нужно.


// Function Declaration
function sum(a, b) {
  return a + b;
}


// Function Expression
let sum = function(a, b) {
  return a + b;
};


// Более тонкое отличие состоит в том, когда создаётся функция движком JavaScript.

// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.

// После того, как поток выполнения достигнет правой части выражения присваивания let sum = function… – с этого момента, функция считается созданной и может быть использована (присвоена переменной, вызвана и т.д. ).

// С Function Declaration всё иначе.

// Function Declaration может быть вызвана раньше, чем она объявлена.

// Другими словами, когда движок JavaScript готовится выполнять скрипт или блок кода, прежде всего он ищет в нём Function Declaration и создаёт все такие функции. Можно считать этот процесс «стадией инициализации».

let age = prompt("Сколько Вам лет?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Привет!");
  };

} else {

  welcome = function() {
    alert("Здравствуйте!");
  };

}

welcome();  