export async function GetMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
    }

    export async function GetFilmalaUne() {
        let answer = await fetch('http://localhost:8080/api/film_a_la_une');
        let data = await answer.json();
        return data; 
        }