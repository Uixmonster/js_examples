let user = new Object(); // синтаксис "конструктор объекта"
let secondUser = {};  // синтаксис "литерал объекта"


let user1 = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};

// получаем свойства объекта:
console.log( user1.name ); // John
console.log( user1.age ); // 30

// Давайте добавим свойство:
user.isAdmin = true;

// Для удаления свойства мы можем использовать оператор delete:
delete user1.age;

// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:

let user2 = {
//   name: "John",
//   age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

// An object declared with `const` can be modified.
const user3 = {
  name: "John"
};

user3.name = "Pete"; // (*)

console.log(user3.name); // Pete

// It might seem like the line (*) should cause an error, but no, everything is fine here. The reason is that the `const` declaration protects only the `user` variable itself from being modified, not its contents.

// The `const` declaration will only cause an error if we assign a different value to the variable: `user=....`


// For properties whose names consist of multiple words, accessing the value "via a dot" does not work:
// это вызовет синтаксическую ошибку: 
// user2.likes birds = true;

let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];


// Square brackets also allow you to access a property whose name may be the result of an expression. For example, the property name can be stored in a variable:

let key = "likes birds";


let user4 = {
  name: "John",
  age: 30
};

let key1 = prompt("Что вы хотите узнать u пользователе?", "name");

// доступ к свойству через переменную
console.log( user[key1] ); // John (если ввели "name")



// The "through-point" notation does not allow this:

let user5 = {
  name: "John",
  age: 30
};

let key2 = "name";
alert( user.key2 ); // undefined


// Computed properties
let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
  [fruit]: 5, // имя свойства будет взято из переменной fruit
};

console.log( bag.apple ); // 5, если fruit="apple"




// По сути, пример выше работает так же, как и следующий пример:
let fruit1 = prompt("Какой фрукт купить?", "apple");
let bag1 = {};

// имя свойства будет взято из переменной fruit
bag1[fruit] = 5;

let fruit3 = 'apple';
let bag3 = {
  [fruit3 + 'Computers']: 5 // bag.appleComputers = 5
};


// Property from a variable
function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...другие свойства
  };
}

let user6 = makeUser("John", 30);
alert(user6.name); // John


// Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:
let user = {
  name,  // тоже самое, что и name:name
  age: 30
};


// эти имена свойств допустимы
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6


// ============================================

let obj2 = {
  0: "Тест" // то же самое что и "0": "Тест"
};

// обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
alert( obj2["0"] ); // Тест
alert( obj2[0] ); // Тест (то же свойство)


// Есть небольшой подводный камень, связанный со специальным свойством __proto__. Мы не можем установить его в необъектное значение:
let obj3 = {};
obj3.__proto__ = 5; // присвоим число
alert(obj3.__proto__); // [object Object], значение - это объект, т.е. не то, что мы ожидали
// kак мы видим, присвоение примитивного значения 5 игнорируется.


// =====================================================

let user = {};

alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

// =====================================================
// Также существует специальный оператор "in" для проверки существования свойства в объекте.
// Синтаксис оператора:

"key" in object

// =====================================================

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age существует
alert( "blabs" in user ); // false, user.blabs не существует

// =====================================================

// Если мы опускаем кавычки, это значит, что мы указываем переменную, в которой находится имя свойства. Например:

let user = { age: 30 };

let key21 = "age";
alert( key21 in user ); // true, имя свойства было взято из переменной key

// =====================================================

let obj3 = {
  test: undefined
};

alert( obj3.test ); //  выведет undefined, значит свойство не существует?
alert( "test" in obj3 ); // true, свойство существует!

// Подобные ситуации случаются очень редко, так как undefined обычно явно не присваивается. Для «неизвестных» или «пустых» свойств мы используем значение null.

// =====================================================

// Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).

for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}

// =====================================================

// Math.trunc - встроенная функция, которая удаляет десятичную часть
alert( String(Math.trunc(Number("49"))) ); // "49", то же самое ⇒ свойство целочисленное
alert( String(Math.trunc(Number("+49"))) ); // "49", не то же самое, что "+49" ⇒ свойство не целочисленное
alert( String(Math.trunc(Number("1.2"))) ); // "1", не то же самое, что "1.2" ⇒ свойство не целочисленное

// =====================================================

 let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // добавим ещё одно свойство

// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
  alert( prop ); // name, surname, age
} 

// =====================================================

let codes = {
  "+49": "Германия",
  "+41": "Швейцария",
  "+44": "Великобритания",
  // ..,
  "+1": "США"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

// =====================================================

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // Меня зовут: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/