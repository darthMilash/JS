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
  // let num = 50;

  // while (num <=55) {
  //       console.log(num);
  //       num++;
  // }

  // do {
  //       console.log(num);
  //       num++;
  // }
  // while (num < 55);

  // for (let i = 1; i < 8; i++) {
  //       if (i ===6 ) {
  //             // break;
  //             continue;
  //       }

  //       console.log(i);
  // }

  //                         16- LESSON
  // let num = 20;

  // function showFirstMessage(text) {
  //       console.log(text);
  //       num = 10;
  // }

  // showFirstMessage("Hello World");
  // console.log(num);

  // function calc(a, b) {
  //       return a + b;
  // }

  // console.log(calc(5, 4));
  // console.log(calc(2, 1));

  // function salary(){
  //       let n = 200;
  //       return n;
  // }

  // console.log(salary());

  // const logger = function() {
  //       let r = 45;
  //       return r;
  // };
  // console.log(logger());

  // const calc2 = (a, b) => {
  //       console.log('1');
  //       return a + b;
  // };

  // console.log(calc2(8, 2));

  //                         17- LESSON

  // const str = 'hello dude   ';
  // const arr = [4, 2, 6]; 

  // console.log(str.length + ' ' + arr.length);
  // console.log(str[2]);
  // console.log(str.toUpperCase());
  // console.log(str.toLowerCase());

  // let fruit = 'Some fruit';

  // console.log(fruit.indexOf('fruit'));

  // const logg = 'hello world';

  // console.log(logg.slice(6, 11));

  // console.log(logg.substring(6, 11));

  // console.log(logg.substr(6, 4));

  // const num = 12.6;
  // console.log(Math.round(num));

  // const test = '12.2px';
  // console.log(parseInt(test));
  // console.log(parseFloat(test));

  // LESSON 19
  // function first() {
  // setTimeout(() => {
  //   console.log(1);
  // }, 500);
  // }

  // function second() {
  //   console.log(2);
  // }

  // first();
  // second();

  // function learnJS(lang, callback) {
  //   console.log(`I learn: ${lang}`);
  //   callback();
  // }

  // function done() {
  //   console.log('I do this course!');
  // }

  // learnJS('JavaScript', done);

  // LESSON 20

  // const options = {
  //   name: 'test',
  //   width: 1024,
  //   height: 1024,
  //   colors: {
  //     border: 'black',
  //     bg: 'red'
  //   },
  //   makeTest: function () {
  //     console.log("test");
  //   }
  // };

  // options.makeTest();

  // const {border, bg} = options.colors;
  // console.log(border);

  // console.log(Object.keys(options).length);

  // delete options.name;
  // console.log(options);
  // let counter = 0;

  // for (let key in options) {
  //   if (typeof (options[key]) === 'object') {
  //     for (let i in options[key]) {
  //       console.log(`Property ${i} has the value ${options[key][i]}`);
  //       counter++;
  //     }
  //   } else {
  //     console.log(`Property ${key} has the value ${options[key]}`);
  //     counter++;
  //   }
  // }
  // console.log(counter);

//   LESSON 21

//   const arr = [1, 2, 3, 6, 8];
//   arr.sort(compareNum);
//   arr.pop();
//   arr.push(10);

//   function compareNum(a, b){
//         return a-b;
//   }

//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//   }

//   for (let value of arr) {
//         console.log(value);
//   }

//   arr.forEach(function(item, i, array) {
//       console.log(`${i}: ${item} in massive ${array}`);
//   });

// const str = prompt(``, ``);
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join(`; `));


// LESSON 22 

let a = 5,
b =a;

b = b + 5;

console.log(b); 
console.log(a);

const ob = {
      a: 5,
      b: 1
};

const copy = ob;

copy.a = 10;

console.log(copy);
 console.log(ob);
