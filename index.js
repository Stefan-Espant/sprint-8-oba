// Importeert express uit de node_modules map
import express from "express";

// Initialiseert de URL
const url = "https://zoeken.oba.nl/api/v1"
const urlKey = "/search/?q=boek&authorization=1e19898c87464e239192c8bfe422f280&refine=true&output=json";

// Maakt een nieuwe express app
const app = express();

// Stel in hoe express gebruikt kan worden
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maakt een route voor de index
app.get("/", (request, response) => {
  let booksUrl =
    url + urlKey

  fetchJson(booksUrl).then((data) => {
    response.render("index", data);
    console.log(data);
  });
});

app.get('/book', (request, response) => {
  let resultUrl = url + "/search/?q=boek&authorization=1e19898c87464e239192c8bfe422f280&refine=true&output=json";
  
  fetchJson(resultUrl).then((data) => {
    // console.log(data)
    response.render('book', data)
  })
})

// Filtert het "=" teken uit de ouput van de API
let isbn = "";
let isbnFixed = isbn.substring(1);
console.log(isbnFixed);


// Stelt het poortnummer in waar express op gaat luisteren
app.set("port", process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(
    `Application started on http://localhost:${app.get(
      "port"
    )}`
  );
});

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error);
}
