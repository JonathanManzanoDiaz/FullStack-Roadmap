let menuBtn = document.getElementById("hambMenu");
let closeBtn = document.getElementById("closeBtn");
let menuMobile = document.getElementById("menuMobile");
let shortBtn = document.getElementById("shortBtn");
let input = document.getElementById("input");
let urlText = document.getElementById("urlText");
let copy = document.getElementById("copy");
let divcopy = document.getElementById("divcopy");

menuBtn.addEventListener("click", function () {
  menuMobile.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  menuMobile.classList.add("hidden");
});

shortBtn.addEventListener("click", function () {
  const apiKey = "TXGhOp36X1U12fuYNJ5MKhK302izsu6sXEAUGuCDgoSCI";
  const longUrl = input.value;

  if (!longUrl) {
    console.log("Please enter a valid URL");
    return;
  }

  // Validate URL FORMAT
  try {
    new URL(longUrl);
  } catch (_) {
    console.log("The URL provided is not valid.");
    return;
  }

  const apiUrl = "https://shrtlnk.dev/api/v2/link";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: longUrl }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.message) {
        divcopy.classList.remove("hidden");
        if (data.message === "This URL was already stored for this app") {
          urlText.innerHTML = `<a href="${data.shrtlnk}">${data.shrtlnk}</a>`;
          copy.addEventListener("click", function () {
            navigator.clipboard.writeText(data.shrtlnk);
            urlText.innerHTML = `URL COPIED!`;
          });
        } else {
          urlText.textContent = `Error in API: ${data.message}`;
        }
      } else {
        urlText.innerHTML = `<a href="${data.shrtlnk}">${data.shrtlnk}</a>`;
        copy.addEventListener("click", function () {
          navigator.clipboard.writeText(data.shrtlnk);
          urlText.innerHTML = `URL COPIED!`;
        });
      }
    })
    .catch((error) => `Short Url: ${error.message}`);
  input.value = "";
});
