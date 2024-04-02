export async function GetMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
    }

export async function GetCategory() {
    let answer = await fetch('http://localhost:8080/api/category');
    let data = await answer.json();
    return data; 
    }


export async function GetFilmalaUne() {
    let answer = await fetch('http://localhost:8080/api/film_a_la_une');
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

    export async function GetShowMovies(Categoryname) {
        let answer = await fetch(`http://localhost:8080/api/category/${Categoryname}`);
        let data = await answer.json();
        return data; 
    }

    export async function GetMovie(Moviename) {
        let answer = await fetch(`http://localhost:8080/api/movies/${Moviename}`);
        let data = await answer.json();
        return data; 
        }


        export async function GetrelatedMovies(Categoryname) {
            let answer = await fetch(`http://localhost:8080/api/categories/${Categoryname}`);
            let data = await answer.json();
            return data; 
        }
        export async function Createuser(userData) {
            try {
                const response = await fetch('http://localhost:8080/register', {
                  method: 'POST',
                  body: JSON.stringify(userData), // FormData contenant les données de l'utilisateur
                });
            
                if (!response.ok) {
                  throw new Error('Failed to create user');
                }
            
                return response;
              } catch (error) {
                console.error('Error creating user:', error.message);
                throw error;
              }
            }
            export async function Verifyuser(userData) {
              let user = userData.email;
                    let answer = await fetch(`http://localhost:8080/api/user/${user}` , {
                      method: 'POST',
                      body: JSON.stringify(userData), // FormData contenant les données de l'utilisateur
                    });
                
                    if (!answer.ok) {
                      throw new Error('Failed to verify user');
                    }
                
                    let data = await answer.json();
                    return data;           
                }
                export async function GetUserbyToken(token) {
                  try {
                    const response = await fetch(`http://localhost:8080/api/user`, {
                      method: 'GET',
                      headers: {
                        'Authorization': `Bearer ${token}`
                      }
                    });
                
                    if (!response.ok) {
                      throw new Error('Failed to fetch user data');
                    }
                
                    const data = await response.json();
                    return data;
                  } catch (error) {
                    console.error('Error fetching user data:', error.message);
                    throw error;
                  }
                }