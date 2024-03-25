export async function GetMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
    }

export async function GetFilmalaUne() {
    let answer = await fetch('http://localhost:8080/apifilm_a_la_une');
    let data = await answer.json();
    return data; 
    }

export async function GetSearchMovies() {
    let answer = await fetch('http://localhost:8080/api/searchmovies');
    let data = await answer.json();
    return data; 
    }

    export async function GetMoviebySearch(inputText) {
        let answer = await fetch(`http://localhost:8080/api/searchbymovie?query=${inputText}`);
        let data = await answer.json();
        return data; 
    }