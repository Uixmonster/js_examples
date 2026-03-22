
//  (...args) => expression
//  (...args) => { body }


let sum = (a, b) => a + b;
console.log(sum(2,4));

let pow = n => n * n;
console.log(pow(8))
// примерно то же, что и: let double = function(n) { return n * 2 }

let sayHi = () => console.log("Hello!");
// Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать
sayHi();


//Стрелочные функции можно использовать так же, как и Function Expression.
let age = prompt("Сколько Вам лет?", 18);

let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();

// Многострочные стрелочные функции
let sum1 = (a, b) => {                      // \  фигурная скобка, открывающая тело многострочной функции
  let result = a + b;                       //  |
  return result;                            // /  если мы используем фигурные скобки, то нам нужно явно указать "return"
};

alert( sum1(1, 2) ); // 3


// example to rewrite 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


// answer 
const ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);