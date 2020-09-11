/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

console.log(numberOfFilms);

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }

}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {}, 
    genres : [],
    privat : false
};

const q1 = 'Один из последних просмотренных фильмов?',
      q2 = 'На сколько оцените его?';
      

// personalMovieDB.movies[q1] = q2;
// personalMovieDB.movies[q3] = q4;  

for (let i = 0; i < numberOfFilms; i++) {
    let a = prompt(q1, '');
    if (a != '' && a != null && a.length <= 5) {

        for (let j = 0; j<numberOfFilms; j++) {
            let b = prompt(q2, '');
            if (b != '' && b != null && b.length <= 5) {
                personalMovieDB.movies[a] = b;
                break;
            }
            else {
                j--;
                continue;
            }
        }
    }
    else {
        i--;
        continue;
    }
    
    if (personalMovieDB.count < 3) {
        console.log("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count >= 3 && personalMovieDB.count < 4) {
        console.log("Вы классический зритель");
    }
    else if (personalMovieDB.count >= 5){
        console.log("Вы киноман");
    }
    else { console.log('Error'); 
    }
    

    
    
}

console.log(personalMovieDB);