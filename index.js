// Importeert express uit de node_modules map
import express, { request, response } from "express";

// Opdeling de URL
const url = "https://zoeken.oba.nl/api/v1/search/";
const urlSearch = "?q=";
const urlDefault = "boek";
const urlKey =
	;
const urlOutput = "&refine=true&output=json";
const booksUrl =
	url + urlSearch + urlDefault + urlKey + urlOutput;

// Maakt een nieuwe express app
const app = express();

// Stel in hoe express gebruikt kan worden
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// Maakt een route voor de overzichtspagina
app.get("/", (request, response) => {

	fetchJson(booksUrl).then((data) => {
		response.render("index", data);
		console.log(data);
	});
});

// Maakt een route voor de detailpagina
app.get("/book", async (request, response) => {
  let isbn = request.query.resultIsbn || "9789045117621";

	const uniqueUrl =
		url + urlSearch + isbn + urlKey + urlOutput;

	const data = await fetch(uniqueUrl)
		.then((response) => response.json())
		.catch((err) => err);
	response.render("book", data);

  console.log(uniqueUrl)
});

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
