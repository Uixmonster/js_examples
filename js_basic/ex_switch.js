// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


let browser = prompt("Your favorite browser??")
if (browser === 'Edge' ) {
    alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera' )  {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

let number = +prompt('Enter number between 0 and 3', '');
switch(number) {
    case 0:
        alert(`You entered the number ${number}`);
        break;
    case 1:
        alert(`You entered the number ${number}`);
    case 2:
    case 3:
        alert(`You entered the number ${number ? number = 2 : number = 3} or ${number ? number = 3 : number = 2}`);
        break;
    default:
        alert('Thank you!')
        break;
}