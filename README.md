<img width="1440" alt="Schermafbeelding 2023-03-16 om 13 36 04" src="https://user-images.githubusercontent.com/89298385/225618880-1cd2cbc4-8a71-4bd4-a7c7-5d789f246df1.png">


# Dynamisch platform mijn oba 
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Voor de oba koos ik voor de volgende user story om uit te voeren:
> Als OBA lid wil ik de zoekresultaten kunnen filteren of sorteren, zodat ik gericht kan zoeken naar interessante boeken.

Na het bouwen heb ik onbewust ook deze user story uitgevoerd:
> Als OBA lid wil ik na het zoeken details van een boek kunnen bekijken, om te beoordelen of ik het boek wil lezen.

https://teal-clean-ostrich.cyclic.app/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Voor de bouw van dit platform heb ik gebruik gemaakt van diverse tools en technologieën.
* [Node](#node)
* [ejs](#ejs)
* [css](#css)

### node
In dit project heb ik node gebruikt om de data uit de API te laden. 
Zo gebruikte ik de volgende statement om de data uit de API te halen en te renderen op de overzichtspagina.

```js
// Maakt een route voor de overzichtspagina
app.get("/", (request, response) => {

	fetchJson(booksUrl).then((data) => {
		response.render("index", data);
		console.log(data);
	});
});
```

### ejs
Om content toe te voegen aan mijn site, heb ik gebruik gemaakt van `ejs` om zo data te laden uit de API en functies werkend te maken met node.  
Zo heb ik dat toegepast op de twee pagina's 

#### Overzichtspagina
```html
	<section class="searchbar">
		<h1>Waar bent u naar op zoek?</h1>
    <form action="/" method="GET">
      <input type="search" id="site-search" />
			<label>binnen de website zoeken</label>
			<button id="search-button">
				<svg
					width="37"
					height="37"
					viewBox="0 0 37 37"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.3373 0.25C7.00922 0.25 0.258057 7.00117 0.258057 15.3291C0.258057 23.6571 7.00922 30.4083 15.3373 30.4083C18.8612 30.4083 22.105 29.1977 24.6716 27.1725L33.2295 35.7303C33.9224 36.4231 35.0456 36.4231 35.7385 35.7303C36.4312 35.0376 36.4312 33.9143 35.7385 33.2215L27.1805 24.6637C29.2059 22.0968 30.4164 18.8532 30.4164 15.3291C30.4164 7.00117 23.6652 0.25 15.3373 0.25ZM3.80609 15.3291C3.80609 8.96069 8.96875 3.79803 15.3373 3.79803C21.7057 3.79803 26.8684 8.96069 26.8684 15.3291C26.8684 18.5139 25.5796 21.3942 23.4909 23.4829C21.4023 25.5716 18.522 26.8603 15.3373 26.8603C8.96875 26.8603 3.80609 21.6977 3.80609 15.3291Z"
						fill=""
					/>
				</svg>
			</button>
		</form>
	</section>
```

#### Detailpagina
```html
	<section class="item-view">
		<div>
			<img src="<%= results[0].coverimages[1] %>" alt="" />
		</div>
		<div>
			<h1><%= results[0].titles[0] %></h1>
			<h2>Over het boek</h2>
			<ul>
				<li>Schrijver: <%= results[0].authors[0] %></li>
				<li>ISBN: <%= results[0].isbn %></li>
				<li>Uitgever: <%= results[0].publisher %></li>
				<li>Genre: <%= results[0]['subject-topical'][2] %></li>
				<li>Taal: <%= results[0].languages %></li>
			</ul>
			<h2>Samenvatting</h2>
			<p><%= results[0].summaries[0] %></p>
		</div>
	</section>
```

### css
Met css heb ik veel van de vormgeving mogelijk gemaakt. Hierbij heb ik gebruik gemaakt van custom properties.

```css
/* Standaard eigen waardes */
:root {
    /* animaties */
    --a-quick: 0.2s;
    --a-default: 0.3s;
    --a-medium: 0.6s;
    --a-large: 1s;

    /* eenheden */
    --u-nano: 0.1em;
    --u-micro: 0.2em;
    --u-small: 0.4em;
    --u-medium: 0.5em;
    --u-default: 1em;
    --u-large: 2em;
    --u-round: 50%;

    /* lay-out */
    --w-quarter: 25vw;
    --w-third: 33vw;
    --w-half: 50vw;
    --w-full: 100%;

    /* kleuren */
    --c-primary-150: #600;
    --c-primary-100: #f00;
    --c-primary-50: #fcd9d9;
    --c-default: #fff;
    --c-accent-50: #e1e1e1;
    --c-accent-100: #999;
    --c-invert: #111;
}
```

## Installatie
Dit project bevat uiteraard nodeJS en is voor de ontwikkelaar die ermee aan de slag gaat alsvolgt te gebruiken:
1. Installeer eerst de meest aanbevolen versie van node
2. Fork deze repository en richt de mappenstructuur in.
3. Open de terminal in Visual Studio Code en voer het commando `npm init` uit.
4. Zodra node is gevonden kan door middel van `npm install` de mappenstructuur worden geïnstalleerd.
5. Het lokaal testen kan met behulp van `npm start` worden uitgevoerd.

## Gebruik
Dit project kunnen boeken worden gevonden en worden bekeken waar het over gaat.  

<img width="1440" alt="Schermafbeelding 2023-03-16 om 13 33 20" src="https://user-images.githubusercontent.com/89298385/225618260-8bdcbd1f-e12a-40c4-9a96-c36015d3cea9.png">

## Bronnen

[docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

https://zoeken.oba.nl/api/v1/search

https://github.com/ju5tu5/server-side-rendering

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
