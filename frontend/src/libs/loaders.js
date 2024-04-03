export async function GetMovies() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
    }
    export async function GetUserMovies(token) {
      let answer = await fetch(`http://localhost:8080/api/movies?token=${token}`);
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
                      body: JSON.stringify(userData),
                    });
                
                    if (!answer.ok) {
                      throw new Error('Failed to verify user');
                    }
                
                    let data = await answer.json();
                    return data;           
                }
                export async function GetUserbyToken(token) {
                  try {
                    const answer = await fetch(`http://localhost:8080/api/user`, {
                      method: 'GET',
                      headers: {
                        'Authorization': `Bearer ${token}`
                      }
                    });
                
                    const data = await answer.json();
                    return data;
                  } catch (error) {
                    console.error('Error fetching user data:', error.message);
                    throw error;
                  }
                }
                export async function Updatehistory(token , Moviename) {
                  try {
                    const answer = await fetch(`http://localhost:8080/api/history`, {
                      method: 'POST',
                      headers: {
                        'Authorization': `Bearer ${token}`
                      },
                      body: JSON.stringify(Moviename),
                    });
                
                    const data = await answer.json();
                    return data;
                  } catch (error) {
                    console.error('Error fetching user data:', error.message);
                    throw error;
                  }
                }
                export async function Resethistory(email) {
                  let answer = await fetch(`http://localhost:8080/api/user/delhistory?query=${email}`);
                  let data = await answer.json();
                  return data; 
              }