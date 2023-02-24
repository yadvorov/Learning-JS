/* Практическое задание №1 
1. Создать переменную numberOfFilms и в нее поместить ответ от пользователя на вопрос:
"Сколько фильмов вы уже посмотрели?"

2. Создать объект personaMovieDB и в него поместить такие свойства:
    -count - сюда передается ответ на первый вопрос
    -movie - в этой свойство поместить пустой объект
    -actors - Тоже поместить пустой объект
    -genres - сюда поместить пустой массив
    -privat - в это свойство поместить boolean(логическое) значение false 

3. Задайте пользователю по два раза вопросы:
    -"ОДин из последних просмотренных фильмов?"
    -"На сколько оцените его?"
Ответы стоит поместить в отдельные переменные 
Записать ответы в объект movies в формате 
    movies: {
            "logan": 8.1
    }
*/

const numberOfFilms = prompt("How many movies have you watch?", " ");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
}

const a = prompt("What the last movie did you watch?", "");
const b = prompt("How would you rate it?", "");
const c = prompt("What the last movie did you watch?", "");
const d = prompt("How would you rate it?", "");

personaMovieDB.movies[a] = b;
personaMovieDB.movies[d] = c;

console.log(personaMovieDB);
 