// "use strict"

// //////////////// Sfetafor ishlashi //////////////////

// let light = prompt('enter value')

// if (light === 'red') {

//   console.log('STOP');

// } else if (light === 'yellow') {

//   console.log('ATTENTION');

// } else if (light === 'green') {

//   console.log('GO');

// } else {

//   console.log('404');

// }







///////////////////////////////////////////////////////



///////////////// Xaftalik kunlar //////////////////

/**
let dayNumber = +prompt('enter value');

if (dayNumber === 1 ) {

  console.log('Dushanba');

} else if (dayNumber === 2) {

  console.log('Seshanba');
} else if (dayNumber === 3) {

  console.log('Chorshanba');

} else if (dayNumber === 4) {

  console.log('Payshanba');

} else if (dayNumber === 5) {

  console.log('juma');

} else if (dayNumber === 6) {

  console.log('Shanba');

} else if (dayNumber === 7) {

  console.log('Yakshanba! Bugun dam olish kuni ');

} else {
  console.log('404');
}
*/




////////////////////////////////////////////////




/////////////////  switch -- ko'rinishda ////////////////////




// switch (dayNumber) {

//   case 1:
//     console.log('Dushanba');
//     break;
//   case 2:
//     console.log('Seshanba');
//     break;
//   case 3:
//     console.log('Chorshanba');
//     break;
//   case 4:
//     console.log('Payshanba');
//     break;
//   case 5:
//     console.log('Juma');
//     break;
//   case 6:
//     console.log('Shanba');
//     break;
//   case 7:
//     console.log('Yakshanba');
//     break;
//     default: console.log('Bunday kun yo\'q')

// }






///////////////// TOQ YOKI TOQ EMAS /////////////////////////



// let dayNumber = +prompt('enter value');

// if(dayNumber%2===1){
//   console.log(`Bu son ${dayNumber} toq`);
// }else{
//   console.log(`Bu son ${dayNumber} toq emas`);
// }


// 5 misol

// let a=+prompt('a=');
// let b=+prompt('b=');
// let c=+prompt('c=');

// if (a>b && b>c) {
//   console.log('xa');
// }else{
//   console.log('yo\'q')
// }





///////////////////////// To'g'ri yoki Xato ///////////////////////

// (3 < 2) ? console.log('bu tog\'ri'): console.log('bu xato');







////////////////////////// loop, while, do while, for //////////////////////////


//// while /////

// let n = 0;
// while (n < 100) {
//   n++
//   console.log('n')
// }

//// do /////

// do {
//   n--;
//   console.log(n);
// } while (n > 0)


//// for //////

// let n=+prompt ('n')

// for (let i = 0; i <= n; i+=2) {
//   console.log(i);
// }





/////////////// for da kara jadval chiqarish /////////////////



for (let i = 1; i <= 10; i++) {

    for (let e = 1; e <= 10; e++) {
        document.write(`${i} x ${e } = ${i*e} <br>  `);
    }
}