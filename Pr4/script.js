/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    memberFilms: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');

            if (a != '' && a != null && a.length <= 5) {
                for (let j = 0; j < personalMovieDB.count; j++) {
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
    },
    detectIMDB: function () {
        if (personalMovieDB.count < 3) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 3 && personalMovieDB.count < 4) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 5) {
            console.log("Вы киноман");
        } else {
            console.log('Error');
        }
    },
    // showMyDB: function () {
    //     if (personalMovieDB.privat === false) {
    //         console.log(personalMovieDB);
    //     }
    // },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (a != null && a != "") {
                personalMovieDB.genres[i - 1] = a;
            }
            else { 
                i--;
            }        
        }
        // let a;
        // for (a in personalMovieDB.genres) {
        //     a++;
        //     console.log(`Любимый жанр ${a} - это ${personalMovieDB.genres[a-1]}`);
        // }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
};






personalMovieDB.start();
personalMovieDB.memberFilms();
personalMovieDB.detectIMDB();
// personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

// // or



personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);