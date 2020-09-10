/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

console.log(numberOfFilms);

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