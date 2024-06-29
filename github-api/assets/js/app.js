// SELECT ITEMS OF THE DOM
let findBtn = document.querySelector(".findBtn");
let input = document.querySelector(".input");
let results = document.querySelector(".results");

// ADD LISTENER CLICK TO FIND BUTTON
findBtn.addEventListener("click", function (e) {
  // THIS PREVENT REFRESH THE PAGE AUTOMATICALLY
  e.preventDefault();
  // I SAVE THE CURRENT INPUT VALUE IN A VARIABLE
  let iValue = input.value;

  // FETCH API
  function getData(iValue) {
    // URL OF THE API WITH A VARIABLE FOR THE NAME OF THE USER
    const url = `https://api.github.com/users/${iValue}`;
    // FETCH API URL
    fetch(url)
      // TAKES RES AND CONVERTS TO JSON (OBJECT OF JS)
      .then((res) => res.json())
      // TAKES ALL DATA FROM 'DATA' AND EXECUTES THE NEXT CODE FOR SHOW IN RESULTS
      .then((data) => {
        results.innerHTML = `
          <p>Username: ${data.login}</p>
          <p>Name: ${data.name}</p>
          <p>Followers: ${data.followers}</p>
          <p>Following: ${data.following}</p>
          <p>Public repository: ${data.public_repos}</p>
          <p>URL: <a href="${data.html_url}">GITHUB</a></p>
        `;
      });
  }
  // EXECUTES THE FUNCTION WITH THE USER YOU TYPE IN THE INPUT FIELD
  getData(iValue);
});
