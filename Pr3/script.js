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

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function memberFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');

        if (a != '' && a != null && a.length <= 5) {
            for (let j = 0; j < numberOfFilms; j++) {
                let b = prompt('На сколько оцените его?', '');

                if (b != '' && b != null && b.length <= 5) {
                    personalMovieDB.movies[a] = b;
                    break;
                } else {
                    j--;
                    continue;
                }
            }
        } else {
            i--;
            continue;
        }
    }
}

function detectIMDB() {
    if (personalMovieDB.count < 3) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 3 && personalMovieDB.count < 4) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 5) {
        console.log("Вы киноман");
    } else {
        console.log('Error');
    }
}

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i-1] = a;
    }
}

start();
memberFilms();
detectIMDB();
showMyDB();
writeYourGenres();

// or

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);