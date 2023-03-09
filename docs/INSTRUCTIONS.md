# Server-Side Website

Ontwerp en ontwikkel een server-side website voor een opdrachtgever.


## Context

Deze leertaak hoort bij sprint 8 "Server-Side Rendering". Dit is een leertaak die je individueel uitvoert voor een opdrachtgever.

In het college S08W1-01-Sprintplanning-server-side-rendering wordt uitgelegd wat je moet doen. Tijdens de sprintplanning met de opdrachtgever bespreek je de opdracht.

Bij deze leertaak hoort de deeltaak:
- [The Cient - Briefing/Debriefing](https://github.com/fdnd-task/the-client-briefing-debriefing/)


## Doel van deze opdracht

Je leert hoe je server-side data kunt gebruiken voor het maken van een website.


## Werkwijze

Voor deze leertaak krijg je eerst een sprintplanning met de opdrachtgever. Tijdens de sprintplanning bespreek je de taken van het project board en de content in de database. Elke opdrachtgever heeft content voor de website in een database. Met een een REST API kun je deze content gebruiken voor het maken van de website.

Voor deze opdracht doorloop je alle fases van de DLC [analyseren](#analyseren), [ontwerpen](#ontwerpen), [bouwen](#bouwen), [integreren](#integreren) en [testen](#testen).


### Analyseren
In de analysefase inventariseer je wat er moet gebeuren om een taak uit te voeren.

Bijvoorbeeld: grip krijgen op een taak door het voeren van een gesprek met jouw opdrachtgever, schrijven van een debriefing, inventarisatie van bestaande informatie, interface audit, interface inventory, planning, maken van een todo lijst en bepalen van definitions of done.

#### User Stories
Kies een of meerdere user stories uit de backlog van het project waar je aan gaat werken. De projecten staan bij [FDND Agency](https://github.com/fdnd-agency).

Bekijk per user story welke content in de REST API staat.

Bekijk per user story relevant studentenwerk uit semester 1.

#### Briefing/debriefing
Schrijf een debriefing. De debriefing is noodzakelijk voor de opdrachtgever om na te gaan of duidelijk is overgekomen wat hij voor ogen had. Maar ook voor jou om te controleren of je alles goed hebt begrepen en geconcretiseerd.

#### Inrichten ontwikkelomgeving

Fork deze leertaak en clone het naar je systeem. 

Je gaat een server-side website bouwen met Node/Express/EJS gebaseerd op een REST API met JSON. 
Installeer de Node ontwikkelomgeving en installeer de packages die je nodig hebt. Maak de files en folders aan die je nodig hebt op de Node server. 

Test de Node server door de JSON van de REST API te fetchen en te loggen. 

### Bronnen analyseerfase

* [Introduction to the server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
* [Client-side vs. Server-side: what’s the difference?](https://medium.com/@donotapply/client-side-vs-server-side-whats-the-difference-a933341cd60e)
* [Node.js Ultimate Beginner’s Guide in 7 Easy Steps](https://www.youtube.com/watch?v=ENrzD9HAZK4)
* [Learn JSON in 10 Minutes](https://www.youtube.com/watch?v=iiADhChRriM&t=513s)


### Ontwerpen
In de ontwerpfase neem je ontwerpbeslissingen en zorg je dat je precies weet wat je moet gaan bouwen.

Bijvoorbeeld: het maken van idee-schetsen, wireframes en wireflows tekenen. Content analyseren en onderzoek doen naar semantische HTML elementen die je nodig hebt, hoe je de layout in CSS zou kunnen maken en welke JS en CSS je nodig hebt voor interacties en animaties.

#### Schetsen
Schets de user story in een wireframe of wireflow. Bepaal de verschillende breakpoints die je nodig hebt.  

Maak een breakdown van de ingewikkelde componenten die je wil maken. Misschien wil je een carousel ontwerpen, of een responsive menu? 
Welke HTML, CSS en JS heb je daarvoor nodig?

Schrijf bij je schets welke elementen statisch zijn en welke elementen dynamsch. 

Schrijf bij je schets welke onderdelen van een pagina je in _partials_ kan opdelen.


### Bouwen
In de bouwfase realiseer je de beslissingen uit de ontwerpfase.

Je bouwt de website met Node, Express en EJS op de server en je gebruikt client-side technieken HTML, CSS of JS voor het responsive ontwerp of interactieve funcionaliteiten.


#### Bronnen bouwfase

<!-- * [Using EJS template engine with Express.js](https://www.topcoder.com/thrive/articles/using-ejs-template-engine-with-express-js) -->
<!-- * [Rendering Views with Node, Express, and EJS](https://medium.com/@bloomaman/rendering-views-with-node-express-and-ejs-415af1493c74) -->
* [Master EJS template engine with Node.js and Expressjs](https://medium.com/swlh/master-ejs-template-engine-with-node-js-and-expressjs-979cc22b69be)
* [How to Use JSON in Node.js](http://www.jsonexample.com/how-to-use-json-in-node-js/)




### Integreren
In de integratiefase voer je de aanpassingen door zodat iedereen ze kan zien.

Als je helemaal klaar bent en alles lokaal werkt ga je verder met het publiceren van jouw project op internet. Omdat we met Node werken is dit iets ingewikkelder dan voorheen, er moet namelijk een serveromgeving opgestart worden. Wij gebruiken cyclic.sh als hostingpartij maar je mag natuurlijk je eigen voorkeur volgen als die anders is.


### Testen
In de testfase controleer je of jouw aanpassingen werken zoals bedoeld en pas je zo nodig jouw ontwerp of de code aan om te beantwoorden aan jouw bevindingen.

Bijvoorbeeld: uitvoeren van code/design reviews, user tests met gebruikers, toegankelijkheid testen met lighthouse en handmatige tests, je bevindingen documenteren en bepalen of je nog een iteratie maakt.




## Criteria
*Definitions of done*

Focus sprint 8 - De focus van deze sprint ligt op het maken van een opdracht voor een opdrachtgever, leren hoe je op de server data kunt laden en presenteren.

Doel van deze opdracht:

* Je leert hoe je server-side data kunt gebruiken voor het maken van een website.

Voor deze leertaak gelden de gedragscriteria:

* C: Je luistert en vraagt door, neemt wat een ander zegt serieus
* C: Je kan ontwerpkeuzes, eigen ideeën en producten begrijpelijk overbrengen aan belanghebbenden
* P: Je combineert aangeboden principes en conventies op het gebied van frontend, interface design en vormgeving om een passende oplossing voor een opdrachtgever te realiseren
* ~~L: Je volgt aangeboden internationale ontwikkelingen in het vakgebied~~

Deze opdracht is done als:

- [ ] Je hebt een website ontworpen en gemaakt met Node, Express en EJS en een REST API
- [ ] Je website is online gepubliceerd
- [ ] Je hebt je proces bijgehouden in de Wiki
- [ ] Je toont aan dat je in de analysefase verschillende methoden en technieken hebt ingezet om te inventariseren wat er moet gebeuren
- [ ] Je toont aan dat je in de ontwerpfase verschillende methoden en technieken hebt ingezet die ervoor zorgen dat je precies weet wat je moet bouwen
- [ ] Je toont aan dat je in de bouwfase verschillende server-side en client-side methoden en technieken hebt ingezet om het ontwerp te realiseren

