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


/* Практическое задание № 2
1. Автоматизировать вопросы пользователю про фильмы при помощи цикла

2. Сделать так, чтобы пользователь не мог оставить ответ в виде пустой 
строки, отменить ответ или ввести название фильма длиннее, чем 50 символов.
Если это происходит - возвращаем пользователя к вопросам опять. 
(К любой строке можно обратиться как str.length - и получить ее длину)

3. При помощи условий проверить personalMovieDB.count, если он меньше 10 - вывести
сообщение  "Просмотрено довольно мало фмльсов" , если от 10 до 30 - 
"Вы классический зритель, а если больше - "Вы киноман". 
А если не подошло ни к одному варианту - "Произошла ошибка"

4. Потренироваться и переписать цикл еще двумя способами
*/


const numberOfFilms = prompt("How many movies have you watch?", " ");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
}

for (let i = 0; i < 2; i++) {
    const a = prompt("What the last movie did you watch?", "");
    const b = prompt("How would you rate it?", "");
    
    if (a != null && a != "" && a.length < 50) {
        console.log("done")
    } else { 
        console.log("error");
        i--
    }

    if (personaMovieDB.count < 10) {
        console.log("A few movies just watched");
    } else if (personaMovieDB.count > 10 || personaMovieDB < 30) {
        console.log("You are realy movies fanat!")
    } else { 
        console.log("Error")
    }
    personaMovieDB.movies[a] = b;
}


console.log(personaMovieDB);

