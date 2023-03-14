// Importeert express uit de node_modules map
import express, { request, response } from 'express';

// Opdeling de URL
const url = 'https://zoeken.oba.nl/api/v1/search/'
const urlSearch = '?q=boek'
const urlKey = '&authorization=1e19898c87464e239192c8bfe422f280';
const urlOutput = '&refine=true&output=json'


// Maakt een nieuwe express app
const app = express();

// Stel in hoe express gebruikt kan worden
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// Maakt een route voor de overzichtspagina
app.get('/', (request, response) => {
  const booksUrl = url + urlSearch + urlKey + urlOutput

  fetchJson(booksUrl).then((data) => {
    response.render('index', data);
    console.log(data);
  });
});

// Maakt een route voor de detailpagina
app.get('/book', (request, response) => {
  let bookIsbn = request.query.result || '?q=9789045120942'
  const resultUrl = url + bookIsbn + urlKey + urlOutput;

  fetchJson(resultUrl).then((data) => {
    response.render('book', data);
  });
});
// Stelt het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000);

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(
    `Application started on http://localhost:${app.get(
      'port'
    )}`
  );
});

async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error);
}
