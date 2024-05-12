export async function GetMovies() {
  let answer = await fetch("https://cbs.quentinbrandy.fr/api/movies", {
    method: "GET",
    credentials: "include",
  });
  let data = await answer.json();
  return data;
}
export async function GetCategory() {
  let answer = await fetch("https://cbs.quentinbrandy.fr/api/category");
  let data = await answer.json();
  return data;
}

export async function GetFilmalaUne() {
  let answer = await fetch("https://cbs.quentinbrandy.fr/api/film_a_la_une");
  let data = await answer.json();
  return data;
}

export async function GetSearchMovies() {
  let answer = await fetch("https://cbs.quentinbrandy.fr/api/searchmovies", {
    method: "GET",
    credentials: "include",
  });
  let data = await answer.json();
  return data;
}

export async function GetMoviebySearch(inputText) {
  let answer = await fetch(
    `https://cbs.quentinbrandy.fr/api/searchbymovie?query=${inputText}`, {
      method: "GET",
      credentials: "include",
    });
  let data = await answer.json();
  return data;
}

export async function GetShowMovies(Categoryname) {
  let answer = await fetch(
    `https://cbs.quentinbrandy.fr/api/category/${Categoryname}`, {
      method: "GET",
      credentials: "include",
    });
  let data = await answer.json();
  return data;
}

export async function GetMovie(Moviename) {
  let answer = await fetch(`https://cbs.quentinbrandy.fr/api/movies/${Moviename}`);
  let data = await answer.json();
  return data;
}

export async function GetrelatedMovies(Categoryname) {
  let answer = await fetch(
    `https://cbs.quentinbrandy.fr/api/categories/${Categoryname}`,
  );
  let data = await answer.json();
  return data;
}
export async function Createuser(userData) {
  try {
    const response = await fetch("https://cbs.quentinbrandy.fr/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    return response;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
}
export async function Verifyuser(userData) {
  let user = userData.email;
  let answer = await fetch(`https://cbs.quentinbrandy.fr/api/user/${user}`, {
    method: "POST",
    body: JSON.stringify(userData),
    credentials: "include",
  });
  if (answer.ok) {
    return "ok";
  } else {
    return "no";
  }
}


export async function LogOut() {
  const answer = await fetch(`https://cbs.quentinbrandy.fr/api/user/logout`, {
    method: "GET",
    credentials: "include",
  });

  if (answer.ok) {
    return answer;
  } else {
    return "no";
  }
}


export async function GetUserbyToken() {
  const answer = await fetch(`https://cbs.quentinbrandy.fr/api/user`, {
    method: "GET",
    credentials: "include",
  });

  if (answer.ok) {
    const data = await answer.json();
    return data;
  } else {
    return "no";
  }
}

export async function ChangeEmail(userData) {
  try {
    const response = await fetch("https://cbs.quentinbrandy.fr/api/changemail", {
      method: "POST",
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to change email");
    }

    return response;
  } catch (error) {
    console.error("Error changing email", error.message);
    throw error;
  }
}

export async function ChangePassword(userData) {
  try {
    const response = await fetch("https://cbs.quentinbrandy.fr/api/changepassword", {
      method: "POST",
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to change password");
    }

    return response;
  } catch (error) {
    console.error("Error changing password:", error.message);
    throw error;
  }
}


export async function Updatehistory(Moviename) {
  try {
    const answer = await fetch(`https://cbs.quentinbrandy.fr/api/history`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(Moviename),
    });

    const data = await answer.json();
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
}
export async function Resethistory(email) {
  let answer = await fetch(
    `https://cbs.quentinbrandy.fr/api/user/delhistory?query=${email}`,
  );
  if (answer.ok) {
    const data = await answer.json();
    return data;
  } else {
    return "error";
  }
}
