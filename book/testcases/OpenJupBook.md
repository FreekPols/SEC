# Open Jupyter Book

Deze pagina is bedoeld als materiaal voor workshops over het maken van Jupyter Books. Om goed te kunnen deelnemen is een installatie van anaconda noodzakelijk en wordt enige voorkennis over werken in een terminal verwacht. Werken in VisualStudioCode of bijv. Jupyter Lab wordt geadviseerd.

## Installeren 
Om gebruik te maken van Jupyter Books is het handig om te werken met [anaconda](https://www.anaconda.com/). Ik gebruik zelf [mini-conda](https://docs.conda.io/projects/miniconda/en/latest/) omdat dit de minste ruimte inneemt (je moet dan zelf wel alle packages installeren).

Voor Jupyter book is het noodzakelijk om Jupyter Book te installeren, zie [deze link](https://jupyterbook.org/en/stable/start/overview.html).

## Snelle start
Een van de snelste opties om aan de slag te gaan met Jupyter Books is het gebruik maken van een template book. Een andere mogelijkheid is het downloadde van een markdown file om de code te bestuderen, bijvoorbeeld van dit [demo boek](https://interactivetextbooks.tudelft.nl/open-textbooks-demonstration/content/markdown.html).

Om het template book aan te maken, doe het volgende:
1. Open de anaconda terminal (promt).
2. Navigeer naar de map waar je je boek wilt maken (eventueel nieuwe directory maken `mkdir Naam_folder`).
3. Ga naar de <a href="(https://jupyterbook.org/en/stable/start/create.html" target="_blank">website van jupyter book</a>.
4. Neem de code over in de terminal: `jupyter-book create testbook` en druk enter.

Als het gelukt is, ziet je map er uit zoals in {numref}` Figuur {number} <fig:ws:foldercontent>`.

```{figure} Figs/foldercontent.PNG
---
width: 50%
name: fig:ws:foldercontent
---
De mapinhoud nadat je templatebook is gemaakt.
```

Leuk dat we nu de inhoud lijken te hebben van een boek, maar we zien geen output. Die output krijg je pas als je de volgende code runt in de terminal:

> jupyter-book build testbook/

Jupyter zet nu de inhoud om naar leesbare HTML pagina's (terug te vinden in de map "_build"). Elke keer als je een wijziging maakt in je boek, moet je bovenstaande code runnen.

```{admonition} Opdracht
:class: dropdown
Pak nu je eigen tekst erbij die je om wilt zetten naar Jupyter book format.
```

## Aan de slag
We hebben nu een voorbeeld boek, maar willen aan de slag met ons eigen materiaal.

```{tip} 
:class: dropdown
Collega Timon Idema werkt aan een script dat LaTeX files omzet naar markdown files. Je kunt de files [hier](https://gitlab.tudelft.nl/opentextbooks/latex-to-markdown-conversion) vinden.
```

Open de "_toc" file. Deze ziet er uit als {numref}`Figuur {number} <fig:ws:TOC>`

```{figure} Figs/TOC.png
---
width: 50%
name: fig:ws:TOC
---
Het _toc bestand bevat de hoofdstukken van het boek, er zijn meerdere niveau's mogelijk (waaronder parts).
```

```{admonition} Opdracht
:class: dropdown
Voeg een hoofdstuk "test" toe.

Maak een markdown file aan met dezelfde naam. Voeg een titel toe in het bestand (`# TITELNAAM`), voeg ook eventuele secties (`## SECTIENAAM`) en subsecties (`### SUBSECTIENAAM`) en gebruik de build commando om het aangepaste boek te maken. 
```

```{tip}
:class: dropdown
Het is handig vooraf te denken over een heldere mappenstructuur waarin je je documenten kwijt kunt.
```

Als het goed is vind je nu je eigen gemaakte hoofdstuk terug in de "_build" map. Bekijk deze eens.

```{admonition} Opdracht
Voeg een <a href="https://jupyterbook.org/en/stable/content/figures.html?highlight=figure#figures" target="_blank">Figuur</a> en probeer eens een formule er in te zetten (zowel inline, zoals $E=mc^2$ als referenced), zoals eq. {eq}`eq:schrodinger` :

$$ E\psi=H\psi $$(eq:schrodinger)

Weet dat er hier ook meerdere oplossingen voor hetzelfde 'probleem' zijn, zoals <a href="https://jupyterbook.org/en/stable/content/math.html" target="_blank">hier</a> terug te zien. 
```

```{tip}
:class: dropdown
Wist je dat MarkDown vaak ook gewoon HTML toe staat? Wel zo makkelijk..
```

<div style="text-align: right; width: 70%; margin-left: 30%;">

Met gebruik van `div` kun je ook nog eens je teksten aanpassen. Supermooi toch? Probeer maar eens met deze code: `<div style="text-align: right; width: 50%; margin-left: 30%;">` en uiteraard ook deze division afsluiten met `</div>`.

</div>


## Iets meer structuur
Dingen die je bij elkaar horen, wil je bij elkaar zetten. Net als in LaTeX kun je hier werken met parts. Daarnaast kun je chapters scharen onder een grotere deel van het boek, zie maar eens bij veiligheid of Python. 

```{figure} Figs/parts.PNG
---
width: 50%
name: fig:ws:parts
---
Je kunt meerdere levels aanbrengen in je boek om overzicht aan te brengen.
```

```{admonition} Opdracht
:class: dropdown
Herstructureer je boek door twee parts aan te maken.
```