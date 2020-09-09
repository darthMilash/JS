  "use strict";

                        // 1- LESSON        

//   let number = 5;
//   const leftBorderWidth = 1;

//   number = 10;
//   console.log(number);

//   const obj = {
//       a: 50
//   };

//   obj.a = 10;

//   console.log(obj);


//                         2- LESSON            
// let number = 4.6;

// console.log(4/0);
// console.log('string' * 9);

// const persone = 'Alex';

// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "Jack",
//     age: 25, 
//     isMarried: false
// };

// console.log(obj.name);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[0]);


                        // 3- LESSON       

// // const result = confirm("Are you here?");
// // console.log(result);

// // const answer = +prompt('Do you have 18', '18');
// // console.log(answer+5);

// const answers = [];

// answers[0] = prompt('What is your name', '');
// answers[1] = prompt('What is your second name', '');
// answers[2] = prompt('How old?', '');

// console.log(typeof(answers));

                        // 4- LESSON

//   const category = 'toys';

//   console.log(`https://someurl.com/${category}/5`);

//   const user = 'Ivan';

//   alert(`Hello, ${user}`);

                        // 5- LESSON
//   console.log(4+ +"5");
  
//   let incr = 10,
//       decr = 10;

//   incr++;
//   decr--;

//   console.log(++incr);
//   console.log(--decr);

//   console.log(5%2);

//   console.log(2*4 === 8);

//   const isChecked = true,
//         isClose = false;

//   console.log(isChecked && isClose);
//   console.log(isChecked || !isClose);

// LESSON 13

// const num = 50;

// if (num < 49) {
//       console.log('Error');
// } else if (num > 100) {
//       console.log("Not");
// } else {
//       console.log('Ok!');
// }

// (num == 50) ? console.log("OK!") : console.log('Error!');

// switch(num) {
//       case 49:
//             console.log('Error');
//             break;
//       case 100:
//             console.log('Error');
//             break;
//       case 50:
//             console.log('YES');
//             break;
//       default:
//             console.log('Error');
//             break;
// }
//                         14- LESSON
let num = 50;

while (num <=55) {
      console.log(num);
      num++;
}

do {
      console.log(num);
      num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
      if (i ===6 ) {
            // break;
            continue;
      }

      console.log(i);
}