const seats = {
    "VVD": 34,
    "D66": 24,
    "PVV": 17,
    "CDA": 15,
    "SP": 9,
    "GL-PvdA": 17,
    "FVD": 8,
    "PvdD": 6,
    "ChristenUnie": 5,
    "Volt": 3,
    "JA21": 3,
    "SGP": 3,
    "DENK": 3,
    "50PLUS": 1,
    "BBB": 1,
    "BIJ1": 1
}

const currentParties = [
    "D66", "GL-PvdA", "PvdD", "Volt", "VVD", "PVV", "CDA", "SP", "FVD", "ChristenUnie", "JA21", "BBB", "BIJ1", "DENK", "50PLUS", "SGP", "ChristenUnie"
];

const leftParties = [
    "GL-PvdA", "SP", "PvdD", "Denk", "BIJ1", "Piratenpartij - De Groenen", "Splinter"
];

const centreParties = [
    "VVD", "D66", "GL-PvdA", "CDA", "ChristenUnie", "Volt", "Denk", "50PLUS", "NSC", "Piratenpartij - De Groenen", "Splinter"
];

const rightParties = [
    "VVD", "CDA", "PVV", "BBB", "FVD", "SGP", "JA21", "BVNL", "Libertaire Partij"
];

const data = [
    {
        "theme": "Evenredige verdeling asielzoekers",
        "title": "Alle EU-landen moeten een evenredig aandeel asielzoekers opnemen.",
        "info": "Mensen die op de vlucht zijn voor oorlog of vervolging in hun eigen land, kunnen in de EU asiel krijgen. Die mensen komen vooral aan in landen aan de grenzen van de EU. Een deel van deze asielzoekers reist door naar rijkere EU-landen, zoals Nederland en Duitsland. Er zijn ook landen die weinig asielzoekers opnemen, zoals Hongarije en Slowakije. \n \nVolgens het akkoord van Dublin moeten asielzoekers asiel aanvragen in het eerste EU-land waar ze aankomen. Daarnaast zijn er afspraken over de verdeling van de toegelaten asielzoekers over de verschillende landen. Deze regels worden lang niet altijd nageleefd.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Mensen die asiel zoeken verdelen we eerlijk en evenredig over Europese lidstaten, waarbij we rekening houden met de draagkracht van samenlevingen en de situatie van de asielzoeker, zoals al aanwezige familieleden in een opvangland."
            },
            {
                "party": "VVD",
                "statement": "We moeten in Europa voorkomen dat bepaalde lidstaten, zoals Nederland, veel meer asielzoekers moeten opnemen dan anderen. We moeten ervoor zorgen dat alle lidstaten in de EU hun eerlijke steentje bijdragen en niet slechts enkele populaire landen van bestemming."
            },
            {
                "party": "CDA",
                "statement": "Op dit moment vangen bepaalde lidstaten substantieel meer asielzoekers op dan andere landen. Het CDA wil een eerlijke verdeling en solidariteit binnen de EU, zodat de lasten en verantwoordelijkheden van immigratie gelijkmatiger worden verdeeld over de lidstaten."
            },
            {
                "party": "D66",
                "statement": "D66 wil een sneller en effectiever asielbeleid. Kansarme asielzoekers vangen we op in grenslanden. Zo kunnen we hun procedure snel afhandelen en kunnen zij zo snel mogelijk terugkeren naar het land van herkomst. Om de grenslanden te ontlasten, worden vluchtelingen direct over lidstaten verdeeld."
            },
            {
                "party": "PvdD",
                "statement": "Een eerlijke verdeling van vluchtelingen naar draagkracht wordt het uitgangspunt van de EU."
            },
            {
                "party": "50PLUS",
                "statement": "Je zult dit aandeel met objectieve maatstaven moeten vaststellen en hierbij spelen elementen als bevolkingsdichtheid en aantal inwoners een rol."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Waarbij eventueel naar evenredigheid rekening gehouden kan worden met de economische kracht van een EU-land."
            },
            {
                "party": "ChristenUnie",
                "statement": "Kansrijke asielverzoeken worden eerlijk verdeeld over de Europese lidstaten. Bij deze verdeling wordt rekening gehouden met de bevolkingsdichtheid en het welvaartsniveau van de lidstaten. Ieder lidstaat heeft zijn steentje bij te dragen."
            },
            {
                "party": "SP",
                "statement": "Als vluchtelingen niet veilig in de eigen regio kunnen worden opgevangen nemen we ze op in de EU, tot ze veilig kunnen terugkeren. Alle lidstaten moeten hier een bijdrage aan leveren. Dit doen landen naar draagkracht, ook ons land. Dat betekent dat vluchtelingen beter verdeeld worden."
            },
            {
                "party": "Volt",
                "statement": "Eerlijke verdeling van asielzoekers over de Europese lidstaten is beter voor ons en beter voor de mensen op de vlucht. Volt wil een Europese spreidingswet: regionale en nationale afspraken voor eerlijke, menswaardige opvang van vluchtelingen en gezamenlijke controle van de Europese buitengrenzen."
            },
            {
                "party": "NSC",
                "statement": "Kansloze asielaanvragen (meerderheid) mogen niet tot toelating in de EU leiden en worden niet verdeeld. Alleen kansrijke asielzoekers worden na selectie verdeeld over de EU-lidstaten op basis van bevolkingsaantallen. Alleen dan zal de instroom van de afgelopen jaren sterk verminderen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor internationale mensenrechten. Solidariteit is een essentieel onderdeel van een rechtvaardig asielbeleid. Daarbij zijn goede samenwerking en flexibiliteit om van voorwaarden af te wijken ook belangrijk. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "FvD",
                "statement": "FVD wil dat Nederland volledig stopt met het opnemen van asielzoekers. Deze moeten opgevangen worden op een locatie zo dicht mogelijk bij hun thuisland. Er is in verreweg de meeste gevallen geen enkele reden om ze op te nemen in welk Europees land dan ook."
            },
            {
                "party": "PVV",
                "statement": "Als alle EU landen evenredig moeten opvangen dan wordt de ongekozen Europese Commissie dus de verdeler. Dan komt er dus een een Europese dwangwet. Nederland heeft de afgelopen decennia meer dan evenredig opgevangen met als gevolg dat ons land prop en prop vol is. Genoeg is genoeg!"
            },
            {
                "party": "JA21",
                "statement": "Asielzoekers dienen opgevangen te worden in de eigen regio of in partnerlanden buiten de EU. JA21 is tegen asielopvang in Nederland en wil bevoegdheden op het gebied van migratie terug om een eigen restrictief asielbeleid te voeren. Van verdeling van asielzoekers over lidstaten kan geen sprake zijn."
            },
            {
                "party": "SGP",
                "statement": "Het mechanisme om asielzoekers die vermoedelijk een verblijfstatus zullen krijgen te verdelen over de EU, wordt alleen ingezet bij crisissituaties. Lidstaten die geen vluchtelingen willen of kunnen opvangen, bijvoorbeeld omdat ze dichtbevolkt zijn, dragen financieel bij of zorgen voor de procedure."
            },
            {
                "party": "BBB",
                "statement": "Het aantal asielzoekers in Nederland en de gehele Europese Unie moet uiteindelijk drastisch omlaag worden gebracht in plaats van een dwingende Europese spreidingswet. BBB wil asielprocedures en -opvang verplaatsen naar veilige landen buiten de Europese Unie."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Nederland zit aan zijn taks met betrekking tot het opnemen van asielzoekers."
            },
            {
                "party": "BVNL",
                "statement": "BVNL is voor een volledige asielstop. BVNL wil controle aan de Europese buiten- en binnengrenzen van EU-lidstaten. We willen alle migratieverdragen en het vluchtelingenverdrag uit 1951 opzeggen."
            }
        ]
    },
    {
        "theme": "Nepnieuws",
        "title": "Sociale-mediabedrijven moeten zelf kunnen beslissen wat ze doen met nepnieuws.",
        "info": "Steeds meer mensen halen hun nieuws vooral van sociale media. Sociale media is een verzamelnaam voor alle websites en apps waarop mensen met elkaar in contact kunnen komen, zoals Facebook, Instagram en X (Twitter).\n\nOp sociale media gaat nepnieuws rond. Dat kan gaan om misinformatie, berichtgeving die niet klopt, maar zonder kwade bedoelingen. Maar het kan ook gaan om desinformatie, waarbij iemand bewust onwaarheden verspreidt om er zelf beter van te worden of uit naam van een regering.\n\nDe EU heeft richtlijnen gemaakt voor hoe grote sociale-mediabedrijven om moeten gaan met nepnieuws. Als de bedrijven iets anders doen, moeten ze daar uitleg over geven. Voor kleinere sociale-mediabedrijven gelden minder strenge regels.",
        "results": [
            {
                "party": "FvD",
                "statement": "FVD vindt dat sociale-mediabedrijven zelf mogen bepalen wat zij doen met de content op hun platform. FVD vindt het ook onwenselijk en bijzonder gevaarlijk als (supra)nationale overheden zouden bepalen wat 'nepnieuws' is. Burgers moeten in alle vrijheid aan waarheidsvinding kunnen doen."
            },
            {
                "party": "PVV",
                "statement": "Vrijheid van meningsuiting is een groot goed en de basis van een vrije samenleving. Het is niet aan de Europese Unie om te bepalen wat nepnieuws is en hoe sociale-mediabedrijven daarmee om moeten gaan, want dat zou dan misbruikt kunnen worden om niet gewenste feiten en meningen te boycotten."
            },
            {
                "party": "JA21",
                "statement": "Wat JA21 betreft ligt de primaire verantwoordelijkheid voor het modereren van sociale media bij de bedrijven zelf."
            },
            {
                "party": "BBB",
                "statement": "De bescherming van het recht op vrije meningsuiting en vrije nieuwsgaring weegt voor BBB zwaarder dan de risico's van desinformatie. We zullen dus andere manieren moeten vinden om ons tegen desinformatie te weren en in ieder geval moeten leren kritisch met informatie om te gaan."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Het is moeilijk vast te stellen wat nepnieuws is. Vrijheid van meningsuiting is een grondrecht. Het is uiteindelijk aan de rechter om vast te stellen of uitingen onrechtmatig/verboden zijn."
            },
            {
                "party": "BVNL",
                "statement": "We geloven dat iedereen het recht heeft om vrijelijk zijn of haar mening te uiten, zowel offline als online. We streven naar een open en inclusieve digitale ruimte waarin diverse perspectieven worden gehoord en gerespecteerd. De overheid en de EU mogen geen censuur plegen."
            },
            {
                "party": "GL-PvdA",
                "statement": "Wereldwijd zien we de gevaarlijke gevolgen van nepnieuws op sociale media. Wij willen nepnieuws en online haat tegengaan door algoritmes aan te pakken die uit zijn op polarisatie en ophef. Dat is in het belang van onze vrije, democratische samenleving."
            },
            {
                "party": "VVD",
                "statement": "De EU gaat de strijd aan met het verspreiden van desinformatie en het tegengaan van ongewenste inmenging vanuit buitenlandse mogendheden. De sociale-mediabedrijven hebben hier eveneens een verantwoordelijkheid in en moeten dus voldoen aan de Europese wetgeving."
            },
            {
                "party": "CDA",
                "statement": "Socialmedia-bedrijven moeten veel harder optreden tegen desinformatie. De afgelopen jaren is juist het gebrek aan optreden een gebrek geweest."
            },
            {
                "party": "D66",
                "statement": "D66 staat voor online veiligheid. Het is belangrijk dat wat offline niet mag, ook niet online zomaar mag. Sociale-mediabedrijven moeten hun verantwoordelijkheid daarvoor dragen. D66 is daarom voorstander van Europese regelgeving voor grote techgiganten."
            },
            {
                "party": "PvdD",
                "statement": "We willen dat internetgiganten meer verantwoordelijkheid nemen om nepnieuws te bestrijden, zonder dat zij te veel macht krijgen over de inhoud die op de platformen gedeeld wordt. Ook willen we dat internetbedrijven als Google en Meta transparant zijn over wat zij gebruikers laten zien en waarom."
            },
            {
                "party": "50PLUS",
                "statement": "De overheid behoort de inwoners te beschermen. Nepnieuws kan in een serieuze context ook leiden tot verkiezingsbeïnvloeding, opstanden of inwoners beschadigen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Waarheidsbepaling is cruciaal bij de uitwisseling van belangrijke informatie."
            },
            {
                "party": "ChristenUnie",
                "statement": "Onze democratische rechtsstaat kan worden bedreigd door desinformatie of bedreigingen via digitale platforms. Een stevige Europese zorgplicht voor digtale platforms en hostingbedrijven is nodig. Uitgangspunt is hierbij dat wat in de fysieke wereld niet is toegestaan, ook digitaal niet is toegestaan."
            },
            {
                "party": "SGP",
                "statement": "De EU-lidstaten moeten zich krachtig wapenen tegen online manipulatie en desinformatie in het nieuws en op sociale mediakanalen. De Digital Services Act kan een effectief middel zijn om bedrijven te dwingen illegale content te verwijderen. Dit mag echter niet de vrijheid van meningsuiting aantasten."
            },
            {
                "party": "SP",
                "statement": "Geen enkel overheidsorgaan mag zich ooit bemoeien met de vrije pers. Dat geldt voor onze Nederlandse overheid, maar zeker ook voor Europa. Maar optreden tegen nepnieuws op sociale media is wel een gedeelde taak. Zowel van de Europese Commissie als voor sociale platforms zelf."
            },
            {
                "party": "Volt",
                "statement": "Nepnieuws verspreidt zich razendsnel via sociale media. Dit kan grote gevolgen hebben. Sociale mediabedrijven moeten zich houden aan de regels die in de EU gelden en verantwoordelijk worden gehouden voor het verspreiden van desinformatie. Het nieuws dat jij leest hoort goed en betrouwbaar te zijn."
            },
            {
                "party": "NSC",
                "statement": "Het oordeel of iets nepnieuws is, ligt bij de onafhankelijke rechter en niet bij de overheden. Maak Social Mediabedrijven verantwoordelijk en aansprakelijk voor de inhoud van onware en feitelijk onjuiste informatie die zij faciliteren en verspreiden."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor mensenrechten en democratie. informatievoorziening is essentieel voor het functioneren van de democratie. Beslissing over nepnieuws kun je niet overlaten aan commerciële partijen, en ook niet aan een 'Ministerie van Waarheid'. Informeer jezelf: https://ppdg.eu/"
            }
        ]
    },
    {
        "theme": "Minimumbelasting bedrijven",
        "title": "Grote bedrijven moeten een minimumbelasting betalen in elk EU-land waar ze actief zijn.",
        "info": "Bedrijven betalen nu alleen winstbelasting in het land waar hun hoofdkantoor zit. Veel bedrijven kiezen voor een land met een lage belasting. Landen verlagen bovendien hun belastingen voor bedrijven om ze te verleiden om hun hoofdkantoor daar te plaatsen.\n\nGrote bedrijven zijn bedrijven die in meerdere landen actief zijn en meer dan 750 miljoen euro omzet per jaar hebben. Wereldwijd is afgesproken dat bedrijven een minimum percentage belasting moeten betalen in elk land waar zij actief zijn. Nog niet alle EU-landen hebben dit ingevoerd.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Grote bedrijven moeten eerlijk belasting betalen. Nu kunnen ze dreigen te vertrekken naar een EU-land met lagere belastingen, waardoor landen tegen elkaar worden uitgespeeld. Dat werkt een race naar de bodem in de hand. Daarom moet er in heel de EU eenzelfde minimumbelasting voor bedrijven gelden."
            },
            {
                "party": "VVD",
                "statement": "Wereldwijd hebben landen afgesproken dat grote bedrijven minimaal 15% winstbelasting betalen. De VVD steunt deze afspraak, omdat belastingontwijking hiermee wordt tegengegaan. De VVD is niet voor een extra EU-belasting."
            },
            {
                "party": "CDA",
                "statement": "In lijn met de eerdere EU-richtlijn minimumbelasting zijn wij voor. Besluitvorming die plaatsvindt in de Europese gedragscodegroep die zich bezighoudt met het aanpakken van schadelijke belastingconcurrentie in Europa moet transparanter"
            },
            {
                "party": "D66",
                "statement": "D66 wil dat bedrijven een eerlijke belasting betalen. Belastingontwijking betekent een ongelijk speelveld voor Nederlandse bedrijven. Daarom wil D66 een Europees minimumtarief voor de winstbelasting."
            },
            {
                "party": "PvdD",
                "statement": "De winstbelasting voor grote bedrijven verhogen we naar ten minste 35% in heel Europa."
            },
            {
                "party": "50PLUS",
                "statement": "De bestaande minimumbelasting voor bedrijven is een stap in het deels voorkomen van belastingontwijking. Bedrijven dragen zo bij aan de lasten van het land van vestiging."
            },
            {
                "party": "PVV",
                "statement": "Grote bedrijven zijn vaak actief in meerdere landen. Zij kunnen dan een gedeelte van hun bedrijf verplaatsen om minder belasting te betalen. In Nederland is per 2024 Pijler 2 in werking waardoor de staat belasting kan bij-heffen tot 15% als bedrijven in andere landen veel minder belasting betalen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Bedrijven moeten in de lidstaat waar ze gevestigd zijn belasting betalen over hun winsten. Belastingontwijking via postbusfirma's en geschuif met bv's moet voorkomen worden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Internationale afspraken over de minimale belasting die bedrijven moeten betalen zijn nodig om belastingontwijking en een race naar de bodem te voorkomen. De EU heeft een rol in de handhaving van dergelijke afspraken."
            },
            {
                "party": "SGP",
                "statement": "Voor de SGP is het belangrijk dat ook mondiale ondernemingen een eerlijke bijdrage aan de totale belastingopbrengst leveren. De SGP wil daarom werk maken van uitvoering van het OESO-akkoord over het minimumtarief van 15% winstbelasting voor multinationals. De lidstaten voeren dit uit."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Het belastingstelsel moet in alle lidstaten veel eenvoudiger zijn."
            },
            {
                "party": "SP",
                "statement": "Landen moeten gezamenlijk de strijd aangaan tegen belastingontwijkende multinationals. Wij kunnen belastingconcurrentie verminderen door als EU lid te worden van de OESO en ervoor te zorgen dat alle EU-lidstaten zich houden aan de afspraken van de OESO met betrekking tot een minimum belastingtarief."
            },
            {
                "party": "Volt",
                "statement": "Het is oneerlijk dat grote bedrijven veel winst maken, maar geen of weinig belasting betalen. De economie en jouw portemonnee zijn daar de dupe van. Om belastingontwijking te voorkomen en voor een eerlijke Europese economie, moeten deze bedrijven overal minimaal 22% belasting betalen."
            },
            {
                "party": "NSC",
                "statement": "NSC is tegen Europese belastingen. Wel moet grensoverschrijdende fraude en belastingmijding van zeer vermogenden en grote bedrijven op Europees niveau worden aangepakt. Multinationals moeten in ieder land een minimumbelasting betalen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen willen belastingontwijking door grote multinationals keihard aanpakken. Naast minimumbelasting ook door fiscale sluiproutes te ontmantelen. Wanneer grote bedrijven meer belasting betalen, kan de belasting voor burgers omlaag. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "FvD",
                "statement": "FVD vindt dat het wel of niet heffen van belastingen een keuze is voor individuele lidstaten, en niet van de Europese Unie."
            },
            {
                "party": "JA21",
                "statement": "Het heffen, verhogen, verlagen, afschaffen en invoeren van belastingen is aan lidstaten zelf. De EU moet zich daar niet in mengen."
            },
            {
                "party": "BBB",
                "statement": "BBB wil een eerlijke belasting op het bedrijfsleven, ook in Nederland. Per 1 januari 2024 is dit al het geval in 140 landen ter wereld en de EU. Belastingheffing is een Nederlandse aangelegenheid, geen EU-bevoegdheid."
            },
            {
                "party": "BVNL",
                "statement": "Geen door de EU opgelegde belastingen, Nederland gaat over haar eigen belastingstelsel en vestigingsklimaat."
            }
        ]
    },
    {
        "theme": "Stemgerechtigde leeftijd",
        "title": "De leeftijd waarop je mag stemmen voor het Europees Parlement moet omlaag van 18 jaar naar 16 jaar.",
        "info": "Het Europees Parlement of kortweg EP is de rechtstreeks verkozen volksvertegenwoordiging van de Europese Unie. Het is de enige EU-instelling die direct door de burgers wordt gekozen.\n\nIn Nederland moet je 18 jaar of ouder zijn om te mogen stemmen. Dit is niet in alle landen zo. België en Duitsland bijvoorbeeld hebben de stemgerechtigde leeftijd bij de Europees Parlementsverkiezingen verlaagd naar 16 jaar.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 vindt dat iedereen vanaf 16 jaar stemrecht moet krijgen bij Europese verkiezingen. Zo kunnen jongeren al op vroege leeftijd hun stem laten gelden in de Europese Unie. De minimale leeftijd voor kandidaten verlagen we in heel Europa naar 18 jaar."
            },
            {
                "party": "PvdD",
                "statement": "De politiek maakt keuzes die een grote impact hebben op de toekomst van jongeren. De kiesgerechtigde leeftijd wordt daarom verlaagd naar 16 jaar."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Mits er op scholen voldoende lessen geschiedenis en maatschappijleer gegeven worden en de jeugd een uitgebreide maatschappelijke kennis heeft opgedaan over de Europese geschiedenis en huidige politiek."
            },
            {
                "party": "Volt",
                "statement": "Er wordt nog niet genoeg nagedacht over de gevolgen van het huidige beleid op toekomstige generaties. Voor jongeren staat veel op het spel: genoeg banen, genoeg huizen en een gezond milieu. Daarom wil Volt dat jongeren vanaf 16 jaar al kunnen stemmen. Zo hebben ze invloed op hun eigen toekomst."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een democratie waarin iedereen mee kan doen. Wij vinden het daarnaast belangrijk om jongeren meer bij besluitvorming te betrekken, bijvoorbeeld via burgerberaden, enquêtes en online e-democracy platforms. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "GL-PvdA",
                "statement": "Uit onderzoek blijkt dat jonge kiezers net zo goed in staat zijn hun eigen mening te vormen als oudere kiezers, maar wat ons betreft mag iedere lidstaat voor de (Europese) verkiezingen zelf de stemleeftijd bepalen."
            },
            {
                "party": "VVD",
                "statement": "De VVD vindt jongeren betrekken bij de politiek en ze meer te laten deelnemen belangrijk, bijvoorbeeld via het Model European Parliament. Maar de VVD is niet voor verlaging van de stemgerechtigde leeftijd. Jongeren van 18 jaar zijn voor de wet volwassen en vanaf dan mogen jongeren dan ook stemmen."
            },
            {
                "party": "CDA",
                "statement": "Wat het CDA betreft blijft de kiesgerechtigde leeftijd, de leeftijd waarop mensen de volwassenen leeftijd van 18 jaar bereiken."
            },
            {
                "party": "FvD",
                "statement": "FVD wil de huidige stemgerechtigde leeftijd handhaven. Wij zien geen redenen om deze nog verder te verlagen."
            },
            {
                "party": "50PLUS",
                "statement": "In het voortgezet onderwijs is kiezen voor de richting van hun pad naar de toekomst al voor veel jongeren te vroeg, daarom de huidige leeftijd handhaven."
            },
            {
                "party": "PVV",
                "statement": "De PVV is voorstander van een stemgerechtigde leeftijd van 18 jaar."
            },
            {
                "party": "JA21",
                "statement": "De stemgerechtigde leeftijd voor de verkiezingen voor het Europees Parlement moet 18 jaar blijven, net als bij alle andere verkiezingen in Nederland."
            },
            {
                "party": "ChristenUnie",
                "statement": "De lidstaten gaan over hun eigen kiesrecht."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt het voor de hand liggend om de leeftijd voor het stemrecht te koppelen aan de leeftijd voor meerderjarigheid."
            },
            {
                "party": "BBB",
                "statement": "18 is de leeftijd dat jongeren volledig competent zijn. Vanaf dan betalen zij belastingen, kunnen ze dienen in het leger en mogen ze dus ook stemmen."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Stemmen is een verantwoordelijk voor volwassenen.Wij vinden dat kinderen ook kind mogen zijn. Stemmen op je 16e betekent dat je al een mening moet hebben over de geo-politiek en andere complexe vraagstukken. Jongeren zijn op de leeftijd nog druk met zichzelf te ontdekken en moeten die ruimte krijgen."
            },
            {
                "party": "SP",
                "statement": "Vanaf 18 jaar ben je volwassen en mag je stemmen. De leeftijd voor het stemrecht verlagen, moet wat de SP betreft gebonden zijn aan volwassenheid."
            },
            {
                "party": "BVNL",
                "statement": "18 jaar is een prima leeftijd om te beginnen met stemmen. Enige levenservaring is gewenst."
            },
            {
                "party": "NSC",
                "statement": "De stemleeftijd moet een nationale competentie blijven. NSC is voorstander van de stemleeftijd op 18 te houden."
            }
        ]
    },
    {
        "theme": "Prijs CO2-uitstoot",
        "title": "Bedrijven moeten meer gaan betalen voor hun CO2-uitstoot.",
        "info": "CO2 is een broeikasgas. Hoe meer ervan in de lucht zit, hoe minder warmte van de zon de aarde kan verlaten. De aarde wordt dan steeds warmer. CO2 komt vrij bij de verbranding van brandstoffen zoals olie, aardgas, kolen en hout. Veel bedrijven gebruiken deze brandstoffen om hun producten te kunnen maken. \n\nDe EU wil in 2050 klimaatneutraal zijn. Dat betekent dat er niet meer CO2 in de lucht mag komen dan de natuur kan opnemen. Om de CO2-uitstoot omlaag te krijgen, moeten bedrijven in de EU voor hun CO2-uitstoot betalen.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Vervuiling heeft enorme gevolgen voor onze gezondheid en het klimaat. Een CO2-heffing voor grote bedrijven is eerlijk omdat de vervuiler dan betaalt, wat nu nauwelijks het geval is. Ook worden bedrijven zo gestimuleerd om te verduurzamen. De opbrengst investeren we in een groen en sociaal Europa."
            },
            {
                "party": "VVD",
                "statement": "De VVD is voor het Europese emissiehandelssysteem, waarbij bedrijven betalen voor hun CO2-uitstoot. Dit moedigt aan om uitstoot terug te dringen. De VVD vindt een stapsgewijze hogere, maar verantwoorde prijs voor CO2-uitstoot ook belangrijk om de prikkel voor verduurzaming te behouden."
            },
            {
                "party": "CDA",
                "statement": "Dat geldt wat het CDA betreft voor bedrijven van binnen en buiten de EU. De in- en uitvoering van de CO2-grenscorrectie (CBAM) wordt geëvalueerd en waar mogelijk uitgebreid naar andere emissie-intensieve sectoren. Op deze manier kunnen Europese bedrijven eerlijk concurreren met bedrijven buiten de EU"
            },
            {
                "party": "D66",
                "statement": "D66 wil dat de vervuiler moet betalen. Met de opbrengst kunnen we groene bedrijven helpen om verder te groeien. Het huidige Europese emissiehandelssysteem is een mooie stap, maar de prijs voor vervuiling is te laag. D66 wil een Europese CO2-heffing waarmee er een minimumprijs voor vervuiling komt."
            },
            {
                "party": "PvdD",
                "statement": "Vervuilers hebben te lang het beleid in Europa bepaald en geprofiteerd van subsidies en fiscale voordelen, ten koste van gewone burgers. Dat gaan we veranderen: vervuilers gaan betalen in plaats van bepalen."
            },
            {
                "party": "50PLUS",
                "statement": "Beprijzing van CO₂ is een goed middel om uitstoot tegen te gaan. Beprijzing ook op producten van buiten de EU."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Pas als het elektriciteitsnetwerk haar capaciteit op orde heeft, kan hier een regel voor worden gemaakt."
            },
            {
                "party": "ChristenUnie",
                "statement": "Uitgangspunt: de vervuiler betaalt. Geen winst maken ten koste van natuur. Vervuilend gedrag wordt ontmoedigd, voor bedrijven binnen de Unie én voor bedrijven die toegang tot de Europese markt willen krijgen, zodat een eerlijk speelveld wordt gecreëerd. Emissiehandelssysteem wordt verder aangescherpt."
            },
            {
                "party": "SGP",
                "statement": "Bedrijven die onder het emissiehandelssysteem vallen, moeten betalen voor hun CO2-uitstoot. De prijs van emissierechten loopt ieder jaar op en vormt een prikkel om te verduurzamen. Door CO2 te beprijzen stellen we bedrijven in staat om kostenefficiënt de uitstoot terug te brengen."
            },
            {
                "party": "SP",
                "statement": "Tweedeling door klimaatbeleid staan wij niet toe. We stoppen met het subsidiëren van fossiele bedrijven. Er komt een CO2-heffing waarmee we gericht de grote industriële vervuilers belasten. De energierekening maken we rechtvaardig voor huishoudens."
            },
            {
                "party": "Volt",
                "statement": "Met een Europese CO2-belasting betalen vervuilende bedrijven eerlijk mee aan een groene en vernieuwende toekomst. Een deel van dat geld wordt teruggegeven aan mensen als 'klimaatinkomen'. Zo wordt verduurzaming voor iedereen mogelijk."
            },
            {
                "party": "NSC",
                "statement": "NSC is voorstander van het zogenaamde emissiehandelssysteem, waarbij bedrijven CO2-rechten moeten kopen om CO2 uit te stoten. Hierdoor worden bedrijven gestimuleerd te verduurzamen middels een marktmechanisme."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor 'de vervuiler betaalt'. Elk bedrijf dat broeikasgassen uitstoot dient daar eerlijk voor te betalen. Wanneer vervuilende bedrijven meer betalen, kan de belasting voor burgers omlaag. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "FvD",
                "statement": "FVD gaat niet mee in het narratief dat menselijke CO2-uitstoot een merkbare invloed heeft op het mondiale klimaatsysteem. Wij zien daarom ook geen reden om bedrijven te laten betalen voor hun uitstoot. Dit beleid zou de Nederlandse en de Europese industrie kortwieken."
            },
            {
                "party": "PVV",
                "statement": "Bedrijven betalen al genoeg over hun CO2-uitstoot via het Europese emissiehandelssysteem; de tarieven lopen steeds verder op. Een hogere kostprijs leidt bovendien tot een hogere consumentenprijs. De EU moet stoppen met het steeds verder op kosten jagen van bedrijven en consumenten."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil de soevereiniteit van de lidstaten over hun eigen energiebeleid behouden en zich verzetten tegen de bemoeienis van de EU. De EU moet stoppen met arbitraire Europese klimaatdoelen of CO2-heffingen, die de economische groei ondermijnen."
            },
            {
                "party": "BBB",
                "statement": "Gezien de geopolitieke spanningen kunnen we het ons niet veroorloven dat essentiële industrie verloren gaat vanwege te strenge klimaatbelastingen."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Wij staan voor doordachte besluitvorming. Voordat wordt gesproken over een toename moet eerst de huidige situatie in beeld worden gebracht. Experts dienen de impact van een verhoging vast te stellen. Als bedrijven meer betalen gaan de prijzen omhoog en het staat niet vast dat de CO2 uitstoot daalt."
            },
            {
                "party": "BVNL",
                "statement": "De hele CO2 discussie is onderdeel van de grote klimaatscam. Klimaatverandering is van alle tijden en wat BVNL betreft passen we ons daaraan aan. CO2-uitstoot heeft daar niets mee te maken en belasting op uitstoot is daarom onzinnig."
            }
        ]
    },
    {
        "theme": "Asielzoekers en ontwikkelingshulp",
        "title": "Landen die afgewezen asielzoekers niet terugnemen, moeten minder ontwikkelingshulp krijgen van de EU.",
        "info": "Afgewezen asielzoekers zijn mensen die bescherming in een EU-land hebben gezocht, maar zijn afgewezen (uitgeprocedeerd). Zij moeten het EU-land dan verlaten.\n\nOntwikkelingshulp is hulp van rijkere landen (zoals Nederland) aan armere landen om hen te helpen met bestuur en klimaat of om de economie sterker te maken.\n\nAls asielzoekers worden afgewezen, moeten ze terug naar hun thuisland. Nederland kan ontwikkelingshulp stoppen als het thuisland hen niet terugneemt. Sommige EU-landen doen dit ook, maar er is geen regel voor EU-ontwikkelingsgeld.",
        "results": [
            {
                "party": "VVD",
                "statement": "Landen van herkomst die niet meewerken aan de terugkeer van eigen onderdanen die illegaal naar Europa zijn gereisd, worden daarvoor bestraft met sancties, waaronder het korten van ontwikkelingshulp."
            },
            {
                "party": "CDA",
                "statement": "Wat het CDA betreft zijn fondsen afhankelijk van het respecteren van (basis)regels."
            },
            {
                "party": "FvD",
                "statement": "FVD wil in principe volledig stoppen met ontwikkelingshulp en alleen (eventueel) noodhulp verlenen aan getroffen regio's. Maar als het stopzetten of beperken van deze geldstromen gebruikt kunnen worden als troefkaart in onderhandelingen, dan moeten wij daar gebruik van maken."
            },
            {
                "party": "D66",
                "statement": "D66 is voor hulp aan kwetsbare mensen na rampen en oorlog. Het zorgt er ook voor dat oorzaken van vluchten worden weggenomen en migratie afneemt. We geven geen geld aan landen met autocratische regimes, maar direct aan organisaties en mensen."
            },
            {
                "party": "50PLUS",
                "statement": "Dat kunnen de individuele landen al doen. Afgewezen asielzoekers kunnen niet in Europa blijven, dus indien beperking helpt om de terugkeerders gemakkelijker te laten terugkeren, dan is dit een goed middel."
            },
            {
                "party": "PVV",
                "statement": "Asielzoekers uit veilige landen moeten direct terug naar land van herkomst. Nederland moet alles op alles zetten om landen te dwingen hun eigen inwoners weer terug te nemen. Minder ontwikkelingshulp is sowieso een goed idee, al helemaal als dit leidt tot het terug kunnen sturen van nep-vluchtelingen."
            },
            {
                "party": "JA21",
                "statement": "Tegenwerkende herkomstlanden van afgewezen asielzoekers moeten veel steviger worden aangepakt. Ontwikkelingshulp naar zulke landen moet worden stopgezet. Ook het intrekken van visa en landingsrechten zijn opties om de druk op te voeren om onderdanen terug te nemen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Naar een menswaardige oplossing voor de vluchteling moet altijd worden gezocht. Als een land geen solidaire verdeling van opvang toepast, kan een sanctie worden ingezet."
            },
            {
                "party": "SGP",
                "statement": "Afgewezen migranten gaan zo snel mogelijk terug. Visumbeleid, handelsovereenkomsten en hulpgelden aan de betreffende landen mogen hiervoor als instrument worden ingezet. Het geheel stoppen van ontwikkelingshulp kan echter disproportioneel en contraproductief zijn."
            },
            {
                "party": "BBB",
                "statement": "Noaberschap werkt twee kanten op. Als wij andere landen steunen, dan mogen wij ook verwachten dat ze ons helpen bij het oplossen van de migratiecrisis. Zo niet, dan is het geen goede buur en moeten we als EU-land(en) financiële steun stopzetten."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "De onafhankelijke kandidaten van MDD vinden dat afspraken die tussen de EU en de betreffende landen worden gemaakt ook nagekomen moeten worden."
            },
            {
                "party": "BVNL",
                "statement": "Iedere stap om de asieltsunami te stoppen is er een. BVNL wil geheel stoppen met ontwikkelingshulp. Geen geld, geen visa, geen betalingen, geen handel met landen die niet meewerken."
            },
            {
                "party": "NSC",
                "statement": "NSC staat voor een krachtige reductie van het migratiesaldo. Dat betekent onder meer dat we als Europa landen van herkomst die hun afgewezen kansarme asielzoekers niet willen terugnemen, moeten stimuleren dit wel te doen."
            },
            {
                "party": "ChristenUnie",
                "statement": "Ontwikkelingssamenwerking en internationale handel zijn onderdeel van een geheel aan bilaterale betrekkingen waarbinnen migratieafspraken kunnen worden gemaakt. Ontwikkelingssamenwerking is voor de ChristenUnie geen drukmiddel, maar de invulling kan wijzigen als ontwikkelingslanden zich niet aan gemaakte afspraken houden."
            },
            {
                "party": "GL-PvdA",
                "statement": "Ontwikkelingssamenwerking is bedoeld om de meest kwetsbare mensen te steunen. Die solidariteit laten we niet afhangen van de acties van een regime dat mensenlevens als handelswaar inzet. De overheid en hulporganisaties zorgen er zo goed mogelijk voor dat deze hulp bij de juiste mensen terechtkomt."
            },
            {
                "party": "PvdD",
                "statement": "De ontwikkelingssamenwerking richt zich op het versterken van de positie van kwetsbare groepen in ontwikkelingslanden. We zijn niet voor sancties die ten koste gaan van kwetsbare groepen of hele bevolkingsgroepen."
            },
            {
                "party": "SP",
                "statement": "Ontwikkelingshulp beperken pakt de gewone mensen in ontwikkelingslanden. We kunnen ons beter richten op de elite via sancties om het terugnemen van afgewezen asielzoekers af te dwingen."
            },
            {
                "party": "Volt",
                "statement": "Ontwikkelingshulp is cruciaal om structurele armoede en ongelijkheid tegen te gaan. Door dit in te houden raken we vooral de mensen. We moeten samenwerken aan een betere toekomst voor iedereen, daarom ziet Volt liever andere consequenties wanneer een land zich niet aan de afspraken houdt."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen zijn een internationale mensenrechtenbeweging. Het is ethisch onjuist om ontwikkelingshulp af te laten hangen van ruilhandel met mensen. Dit stellen naast ons ook andere mensenrechtenorganisaties, zoals Amnesty. Informeer jezelf: https://ppdg.eu/"
            }
        ]
    },
    {
        "theme": "Gezichtsherkenning politie",
        "title": "De EU moet de politie verbieden automatische gezichtsherkenning te gebruiken.",
        "info": "Gezichtsherkenning wordt al vaak gebruikt, bijvoorbeeld om smartphones te ontgrendelen. De politie gebruikt soms ook gezichtsherkenning om criminelen op te sporen. Ze kunnen bijvoorbeeld de beelden van beveiligingscamera’s op straat scannen om te kijken of er een verdachte op staat.\n\nVoor opsporingsdiensten zoals de politie zijn er nog geen wetten. In Nederland worden nu experimenten gedaan met automatische gezichtsherkenning, zodat ook juridisch kan worden uitgezocht of dat mag. Ook sommige andere landen experimenteren hiermee.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "We zijn tegen gezichtsherkenning, gedragsherkenning en andere biometrische surveillance in de publieke ruimte. Als de overheid iedereen overal kan volgen is dat een grote inbreuk op mensenrechten en kan het makkelijk misbruikt worden. Bovendien maken gezichtsherkenningscamera's nog te veel fouten."
            },
            {
                "party": "PvdD",
                "statement": "Camera’s met gezichtsherkenning staan we niet toe in de openbare ruimte, winkels en horeca. Al het Europese beleid op het gebied van aftappen, verzamelen en opslaan van gegevens van burgers wordt scherp herzien in het belang van de privacy."
            },
            {
                "party": "50PLUS",
                "statement": "De systemen falen nu nog steeds."
            },
            {
                "party": "SP",
                "statement": "Het is niet mogelijk om te stellen dat 'veiligheid belangrijker is dan privacy', zoals sommige politici doen, dat is een schijntegenstelling. Bij ieder voorstel dat inbreuk maakt op de privacy bekijken we of die inbreuk noodzakelijk is voor het te bereiken doel, of het niet op een andere manier kan."
            },
            {
                "party": "Volt",
                "statement": "De rechten van inwoners mogen niet ondergeschikt zijn aan veiligheid. Automatische gezichtsherkenning is een enorme inbreuk op privacy en gevaarlijk als het in de verkeerde handen valt."
            },
            {
                "party": "NSC",
                "statement": "De overheid moet in de eerste plaats de privacy van burgers beschermen. Inperking mag enkel plaatsvinden onder de volgende voorwaarden met het oog op het algemeen belang; als de noodzaak wordt aangetoond, als de privacy inbreuk in verhouding staat tot het doel, en alleen op de minst ingrijpende manier, met een sterk onafhankelijk toezicht."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor internationale mensenrechten. Automatische gezichtsherkenning geeft de politie de macht om constant bij te houden wie wanneer waar is. Deze totale massasurveillance is ontoelaatbaar in het vrije Europa waar wij voor staan! Informeer jezelf: https://ppdg.eu"
            },
            {
                "party": "VVD",
                "statement": "De VVD is voorstander van het gebruik van automatische gezichtsherkenning. Hiermee geven we onze veiligheidsdiensten een goed middel om Nederland veilig te houden."
            },
            {
                "party": "CDA",
                "statement": "We staan onder strikte voorwaarden het gebruik van gezichtsherkenningstechnologie in openbare ruimtes toe voor specifieke doeleinden: zoals het opsporen van vermiste kinderen, het voorkomen van een terroristische aanslag en het bestrijden van zware criminaliteit"
            },
            {
                "party": "FvD",
                "statement": "FVD denkt dat automatische gezichtsherkenning een zware inbreuk maakt op de privacy en rechten van burgers. De keuze om dit middel in te zetten hoort bij individuele lidstaten te liggen, en niet bij de EU."
            },
            {
                "party": "D66",
                "statement": "D66 is voor een verbod op massasurveillance. Het gebruik van gezichtsherkenning wil D66 alleen voor het opsporen van zware criminaliteit, onder strenge wettelijke waarborgen en onder toezicht van het OM. Lidstaten kunnen zelf het gebruik van gezichtsherkenning verder inperken."
            },
            {
                "party": "PVV",
                "statement": "De PVV is tegenstander van een verbod op het gebruik van gezichtsherkenning als opsporingsmiddel voor onze politie. We staan echter sceptisch tegenover het gebruik van middelen die de privacy van mensen kunnen schenden. Voor criminelen geldt dit uiteraard niet, maar voor de gewone burgers wel."
            },
            {
                "party": "JA21",
                "statement": "Automatische gezichtsherkenning kan bijvoorbeeld bij grenscontroles een noodzakelijk instrument zijn om de veiligheid van onze inwoners te beschermen. De EU moet dit niet verbieden. Uiteraard moet dit instrument terughoudend worden ingezet en met respect voor privacywetgeving."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Toestaan mits de veiligheid en privacy van de EU-burger gewaarborgd zijn."
            },
            {
                "party": "ChristenUnie",
                "statement": "Ter bestrijding van terrorisme en zware criminaliteit moet het voor de politie mogelijk zijn automatische gezichtsherkenning te gebruiken."
            },
            {
                "party": "SGP",
                "statement": "Gezichtsherkenning kan helpen om terroristen op te sporen. Dat heeft voor de SGP prioriteit. Echter worden ook onschuldige burgers gescreend. Het is nog onduidelijk wat er met de opgeslagen beelden gebeurt en wie daar toegang tot heeft."
            },
            {
                "party": "BBB",
                "statement": "Om zware criminaliteit en terrorisme tegen te gaan is gezichtsherkenning een belangrijk instrument. Op luchthavens of grote massale bijeenkomsten kan het een oplossing zijn. Echter mag het niet ongeremd uitgebreid worden, met het gevolg dat iedereen overal gescand wordt."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Ontwikkelingen op het gebied van ICT en AI dienen veilig te zijn en de grondrechten van burgers niet te schenden. Dat is nu (nog) niet gewaarborgd. Het is echter niet aan de EU om een verbod op te leggen aan de nationale politie."
            },
            {
                "party": "BVNL",
                "statement": "Wij willen strengere criteria voor het verzamelen en gebruiken van persoonsgegevens en ervoor zorgen dat digitale systemen veilig en betrouwbaar zijn. BVNL wil dat de veiligheid zo goed als mogelijk wordt gewaarborgd, automatische gezichtsherkenning kan helpen bij het opsporen van zware criminelen."
            }
        ]
    },
    {
        "theme": "Recht van initiatief",
        "title": "Het Europees Parlement moet het recht krijgen om zelf wetsvoorstellen te doen.",
        "info": "Het Europees Parlement wordt om de vijf jaar gekozen door de inwoners van de EU. Het is een van de instituties die een Europese wet moeten goedkeuren. Het Europees Parlement mag zelf geen wetsvoorstellen doen. De wetten worden gemaakt door de Europese Commissie. De Europese Commissie bestaat uit 27 commissarissen, een uit elk EU-land.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Wij willen dat het Europees Parlement als gekozen volksvertegenwoordiging ook initiatiefrecht krijgt om zelf wetgeving en beleid te maken. Zo kunnen we als EU meer voor elkaar krijgen, want op dit moment kan het Parlement alleen reageren op voorstellen van de Europese Commissie."
            },
            {
                "party": "CDA",
                "statement": "Wat het CDA betreft wordt Europees Parlement het initiatiefrecht toegekend om, gesteund door een meerderheid van de nationale parlementen, zelf wetsvoorstellen te doen"
            },
            {
                "party": "D66",
                "statement": "D66 wil een democratisch Europa. Daarbij past dat gekozen volksvertegenwoordigers zelf wetgeving kunnen starten, net als de Tweede Kamer. Zo is het Europees Parlement minder afhankelijk van de ongekozen Europese Commissie en wordt de Europese democratie versterkt."
            },
            {
                "party": "PvdD",
                "statement": "De invloed van burgers wordt vergroot door ook het Europees Parlement het recht te geven om initiatiefvoorstellen voor nieuwe wetgeving te doen."
            },
            {
                "party": "50PLUS",
                "statement": "Verstevigt de positie van het parlement."
            },
            {
                "party": "PVV",
                "statement": "Dit zou de democratische besluitvorming ten goede komen. Ook geeft het ons de kans om beklemmende regelgeving middels voorstellen vanuit het EP te torpederen. Dit zou een stap vooruit zijn in het van binnenuit veranderen van de EU."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Met het initiatiefverslag heeft het Parlement al een verkapt recht, omdat de Europese Commissie het opvolgen van een verzoek in de praktijk moeilijk naast zich neer kan leggen. Ook kan het Parlement gedurende het hele jaar middels resoluties de Commissie aansporen met wetgeving te komen."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Meer Directe Democratie. Wij zijn uw stem in Europa."
            },
            {
                "party": "SP",
                "statement": "Wat de SP betreft wordt de Commissie een uitvoerend orgaan en gaan de lidstaten in de Europese Raad bepalen welke wetten er op Europees niveau nodig zijn. Ook het initiatiefrecht voor het Europees Parlement kan bijdragen aan het democratisch proces op EU niveau."
            },
            {
                "party": "Volt",
                "statement": "In de EU van vandaag zetten lidstaten zich nog te veel in voor hun eigen nationale belangen, in plaats van de belangen van alle inwoners van de EU. Door het parlement het recht te geven zelf wetsvoorstellen in te dienen, kunnen verkozen vertegenwoordigers hun kiezers beter vertegenwoordigen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een democratisch Europa. Het direct verkozen Europees Parlement heeft nu geen wetgevende macht. Wij willen dat het Europees Parlement initiatiefrecht krijgt en eindverantwoordelijk wordt voor EU-beleid. Lees meer: https://ppdg.eu/"
            },
            {
                "party": "VVD",
                "statement": "De VVD vindt dat de Europese Commissie zich moet blijven focussen op de kerntaken, waaronder wetsvoorstellen opstellen. Daarbij zijn de Raad van de Europese Unie opdrachtgever en medewetgever, en het Parlement medewetgever en controleur. Dat moet zo blijven."
            },
            {
                "party": "FvD",
                "statement": "FVD wil uit de Europese Unie. Wij willen de controle terugpakken over onze regels en wetgeving. Daarom willen wij absoluut geen wetgevend mandaat neerleggen bij het Europees Parlement. Dit zou een overdracht van soevereiniteit betekenen."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil de macht van de nationale Parlementen versterken en bevoegdheden terughalen naar de lidstaten. Het uitbreiden van de bevoegdheden van het Europees Parlement is daarmee in strijd."
            },
            {
                "party": "ChristenUnie",
                "statement": "We willen een wildgroei aan voorstellen voorkomen. Daarnaast vrezen wij dat zodoende de parlementsleden de competenties van de EU niet goed zullen borgen."
            },
            {
                "party": "SGP",
                "statement": "Uitgangspunt voor de SGP is dat de democratische controle primair via de nationale parlementen verloopt en initiatieven voor nieuwe wetgeving vanuit de deelnemende landen zelf worden aangedragen. De rol van het Europees Parlement is ondersteunend en controlerend en heeft geen recht van initiatief."
            },
            {
                "party": "BBB",
                "statement": "Nederland moet zo veel mogelijk haar eigen soevereiniteit behouden en niet nóg meer bevoegdheden overhevelen aan Brussel. Wel is het logisch als het Europees Parlement een recht van amendement, in samenspel met nationale parlementen, krijgt."
            },
            {
                "party": "BVNL",
                "statement": "Hoe minder wetten er uit Brussel komen hoe beter. BVNL wil dat Nederland weer soeverein wordt. Op het gebied van energie, voedsel, milieu, gezondheid en onderwijs moeten we zelf weer gaan bepalen wat goed is voor ons land."
            },
            {
                "party": "NSC",
                "statement": "We kiezen voor uitbreiding van de bevoegdheden van de Tweede Kamer bij de totstandkoming van Europese wetgeving, niet voor uitbreiding van het initiatiefrecht voor het Europees Parlement."
            }
        ]
    },
    {
        "theme": "Meer kernenergie",
        "title": "De EU moet meer kernenergie gaan opwekken.",
        "info": "Kernenergie ontstaat als je de atoomkernen van de grondstof uranium splitst. Er is niet veel uranium nodig om veel energie op te wekken. Uranium komt uit mijnen en raakt uiteindelijk op. Na gebruik moet kernafval voor heel lange tijd veilig worden opgeslagen.  \n \nDe elektriciteit die op dit moment binnen de EU wordt opgewekt, bestaat voor ruim 20% uit kernenergie. Andere bronnen van elektriciteit zijn bijvoorbeeld zonne-energie en energie uit kolencentrales.",
        "results": [
            {
                "party": "VVD",
                "statement": "De VVD streeft ernaar dat de EU zoveel mogelijk zelfvoorzienend wordt op het gebied van energie en minder afhankelijk wordt van energie-importen. De VVD  beschouwt kernenergie als een essentieel onderdeel van de Europese energieonafhankelijkheid."
            },
            {
                "party": "CDA",
                "statement": "De hernieuwbare energiemix bestaat uit kernenergie, windenergie (vooral op zee), zonne-energie, duurzame biomassa, aardwarmte, waterstof, aquathermie, getijdencentrale, en andere schone brandstoffen"
            },
            {
                "party": "D66",
                "statement": "Wat D66 betreft is meer kernenergie goed voor het klimaat. Kernenergie zorgt namelijk voor minder CO2-uitstoot dan fossiele brandstoffen en is daardoor onderdeel van de oplossing voor schone energie. D66 vindt wel dat lidstaten zelf hun energiemix bepalen en of ze meer kernenergie willen."
            },
            {
                "party": "PVV",
                "statement": "Kernenergie is een efficiënte, betrouwbare en betaalbare vorm van energie. Méér kernenergie draagt bovendien bij aan méér energieonafhankelijkheid. We moeten daarom meer inzetten op kernenergie in plaats van onbetrouwbare weersafhankelijke energie, zoals wind- en zonne-energie."
            },
            {
                "party": "JA21",
                "statement": "Kernenergie is dé elektriciteitsbron van de toekomst. Kernenergie is schoon, veilig, stabiel en betaalbaar. Dit in tegenstelling tot instabiele en landschapsvervuilende windturbines en zonnevlaktes. Er moet daarom worden ingezet op een grootscheepse uitrol van kernenergie."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Mits de nieuwe technologie van gesmoltenzoutreactors wordt toegepast, waarmee veiligheid van bewoners wordt gegarandeerd en geen kernwapenproductie mogelijk is."
            },
            {
                "party": "SGP",
                "statement": "Kernenergie is veilig, duurzaam, CO2-neutraal en helpt bij het verminderen van de piekbelasting op het elektriciteitsnet. Kernenergie zorgt namelijk voor een stabiele energieaanvoer en helpt de pieken en dalen te ondervangen die onlosmakelijk verbonden zijn aan zonne- en windenergie."
            },
            {
                "party": "BBB",
                "statement": "Kernenergie is schoon, veilig en betrouwbaar. BBB zet zich dan ook maximaal in voor de bouw van nieuwe kerncentrales. Dit is overigens wel een Nederlandse aangelegenheid, geen Europese."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "We zijn afhankelijk van energie. Wind en zonne- energie zijn niet altijd voorhanden. Kernenergie is de meest effectieve bron van energie."
            },
            {
                "party": "Volt",
                "statement": "We willen dat iedereen in de EU toegang heeft tot voldoende energie, nu en in de toekomst. Om klimaatverandering tegen te gaan, moeten we overstappen op duurzame energiebronnen. Kernenergie is daarbij een belangrijke aanvulling op andere duurzame energiebronnen."
            },
            {
                "party": "BVNL",
                "statement": "Prima om daarin samen te werken, maar BVNL wil zo snel mogelijk energiesoeverein worden en betaalbare energie produceren voor de inwoners van Nederland. Nederland moet zelf gaan investeren in eigen kernenergie. De EU heeft hierin verder geen rol."
            },
            {
                "party": "NSC",
                "statement": "Het opwekken van kernenergie is aan de lidstaten. Dit moet de EU niet in de weg zitten. Kernenergie is veilig, duurzaam, schoon en een stabiele energiebron bij iedere weersomstandigheid."
            },
            {
                "party": "ChristenUnie",
                "statement": "Gelet op de nadelen die aan de huidige generatie kerncentrales kleven – met name de afvalproblematiek – hebben duurzame vormen van energie onze voorkeur. Kernenergie kan onder bepaalde voorwaarden een nuttige toevoeging zijn in de Europese energiemix."
            },
            {
                "party": "GL-PvdA",
                "statement": "Kernenergie is duur én het is geen duurzame energie. Het maakt ons kwetsbaar bij een aanval en het afval blijft nog lang stralingsgevaarlijk. Gelukkig is het ook niet nodig: we hebben genoeg aan zonne- en windenergie als we voor een goed netwerk en meer mogelijkheden zorgen om energie op te slaan."
            },
            {
                "party": "FvD",
                "statement": "FVD wil doorgaan met gebruik conventionele brandstoffen, zoals olie en gas. Hiernaast willen wij innovatie op het gebied van kernenergie zeker stimuleren, maar zijn wij van mening dat lidstaten zelf hier over moeten beslissen en niet de Europese Unie"
            },
            {
                "party": "PvdD",
                "statement": "De Partij voor de Dieren is tegen kernenergie. Kerncentrales brengen grote onnodige risico’s met zich mee. En zorgen voor afval dat honderdduizenden jaren gevaarlijk blijft. We passen EU-regels aan zodat kernenergie niet langer wordt gezien als 'duurzame' investering."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS is voor kernenergie. Toepassing hoort een afweging van de landen te zijn. De verbruiker en de belastingbetaler moeten niet opdraaien voor de eventueel hoge kosten die nieuwe centrales met zich mee zouden kunnen brengen. Voor het probleem van afval dient wel een langetermijnoplossing te zijn."
            },
            {
                "party": "SP",
                "statement": "Kernenergie is pas duurzaam als er een oplossing is voor de milieuveilige opslag van kernafval en er internationaal sprake is van duurzame winning van grondstoffen. Kernenergie kan daarom nu niet als alternatieve energiebron worden ingezet. Daarnaast is het heel duur."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen zijn niet dogmatisch tegen kernenergie, maar we willen enkel kernenergie wanneer dit huidige fossiele energiecentrales vervangt. Investeringen in kernenergie mogen niet ten koste gaan van investeringen in hernieuwbare energie. Informeer jezelf: https://ppdg.eu/"
            }
        ]
    },
    {
        "theme": "LHBTIQ+-rechten",
        "title": "De EU moet lidstaten verplichten lhbtiq+-stellen als wettelijke ouders van hun kinderen te erkennen.",
        "info": "De letters lhbtiq+ staan voor: lesbisch, homoseksueel, biseksueel, transgender, intersekse en queer. Er is geen Europees beleid dat het ouderschap regelt van stellen die niet uit een man en een vrouw bestaan. In Nederland zijn daar wel wetten voor. Lesbische stellen die getrouwd zijn of een samenlevingscontract hebben en een kind krijgen, worden allebei wettelijke ouder. Ook homostellen of anders samengestelde stellen kunnen een kind adopteren en hebben dan dezelfde rechten als hetero-ouders. In sommige EU-landen, zoals Italië, kunnen niet-biologische ouders in lhbtiq+-stellen geen wettelijke ouders zijn.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "In Italië zien we de gevolgen van een extreemrechtse regering: daar zijn LHBTQIA+-ouders uit de geboorteaktes van hun kinderen gehaald. De EU moet in alle lidstaten pal voor de rechten van LHBTQIA+'ers en de erkenning van (meer-)ouderschap staan."
            },
            {
                "party": "VVD",
                "statement": "Voor de VVD telt ieder gezin mee en het kan niet zo zijn dat je stopt ouder te zijn wanneer je de grens oversteekt. Voor het uitoefenen van de vrijheid van verkeer moeten EU-lidstaten de wettelijke ouders erkennen, ongeacht welke gezinsvorm. Dit is bevestigd door het Hof van Justitie van de EU."
            },
            {
                "party": "CDA",
                "statement": "De EU-brede erkenning van huwelijken en geregistreerde partnerschappen van partners van hetzelfde geslacht moet beter worden gehandhaafd. In het belang van het kind moet het ouderlijk gezag in alle lidstaten op dezelfde wijze worden erkend als in de lidstaat van herkomst."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat kinderen het recht hebben op wettelijke bescherming van hun ouders, overal in Europa. Daarom moeten lidstaten het ouderschap van kinderen van alle ouders erkennen en niet discrimineren op basis van seksuele gerichtheid of geslacht."
            },
            {
                "party": "PvdD",
                "statement": "De Europese Unie initieert een handvest voor fundamentele rechten van LHBTQIA+-mensen waarin hun rechten expliciet worden gegarandeerd. Alle paren krijgen dezelfde rechten als heteroseksuele paren, ook wat betreft de adoptie van kinderen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Als dit in harmonie wordt overeengekomen, is wettelijke erkenning geen probleem."
            },
            {
                "party": "SP",
                "statement": "Elke ouder moet in de hele EU erkend worden als de ouder van hun kind(eren)."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat lhbtq+-stellen met kinderen in alle EU-lidstaten erkend worden als wettelijke ouders. Dit draagt bij aan gelijkheid en het recht op een gezinsleven voor alle mensen, ongeacht hun seksuele oriëntatie of genderidentiteit."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor internationale mensenrechten. Alle mensen zouden dezelfde rechten moeten hebben om als wettelijke ouders erkend te worden, ongeacht seksualiteit of genderidentiteit. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "We weten dat dit een heel gevoelig onderwerp is. Maar hier gaat Europa niet over. Dit is aan de lidstaten. De meerderheid van Nederland wil geen uitbreiding van bevoegdheden."
            },
            {
                "party": "FvD",
                "statement": "FVD vindt dergelijke sociaal-culturele kwesties een aangelegenheid voor individuele lidstaten. Het is geen taak van de Europese Unie om op dit gebied normen op te leggen."
            },
            {
                "party": "50PLUS",
                "statement": "Dit hoort niet in de EU, maar is een zaak van de landen zelf."
            },
            {
                "party": "PVV",
                "statement": "Door de jaren heen is Nederland steeds meer bevoegdheden kwijtgeraakt aan Brussel. De Europese Unie wil op steeds meer vlakken zeggenschap. De PVV is voor Europese economische samenwerking, maar tegen EU-dictaten op andere vlakken."
            },
            {
                "party": "JA21",
                "statement": "Dit is een kwestie die aan lidstaten zelf is. Zoals wij niet zouden willen dat Brussel zich bemoeit met ons beleid inzake ethische kwesties, zo moet Brussel dat ook niet doen met het beleid van landen waar andere opvattingen heersen."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het is onwenselijk dat de Europese Unie voorschrijft hoe er over gezinssamenstellingen gedacht moet worden. Europese lidstaten denken hier heel verschillend over en het is daarom terecht dat we het familierecht op nationaal niveau regelen."
            },
            {
                "party": "SGP",
                "statement": "Het traditionele gezin staat ook vanuit de EU steeds vaker onder druk, terwijl het gezinsbeleid een exclusieve bevoegdheid is van de lidstaten. Er mag geen Europees ouderschapscertificaat komen, waarmee regenbooggezinnen bij verhuizing in de hele EU dezelfde rechten zouden moeten hebben."
            },
            {
                "party": "BBB",
                "statement": "Over deze vraagstukken wordt binnen de Europese Unie verschillend gedacht. Voor de samenwerking binnen Europa is het van belang dat deze verschillen gerespecteerd worden - ook als er in Nederland breedgedragen andere opvattingen bestaan."
            },
            {
                "party": "BVNL",
                "statement": "De EU moet zich hier niet mee bemoeien. Dit kunnen soevereine landen prima zelf beslissen."
            },
            {
                "party": "NSC",
                "statement": "De waarden en normen van gemeenschappen worden door NSC gerespecteerd en niet opgelegd door de EU. Dit blijft een nationale competentie."
            }
        ]
    },
    {
        "theme": "Europa van meerdere snelheden",
        "title": "EU-landen moeten meer mogelijkheden krijgen om op sommige onderwerpen niet mee te doen en zelf regels te maken.",
        "info": "De EU heeft regels en wetten over allerlei onderwerpen, bijvoorbeeld over handel en milieu. Deze regels en wetten gelden voor alle deelnemende landen. Op dit moment moeten EU-landen de regels en wetten van de EU op alle onderwerpen invoeren en overnemen. Dit is een van de voorwaarden om lid te kunnen worden van de EU. Wel hebben enkele landen via onderhandelingen ervoor gezorgd dat ze een uitzondering mochten vormen toen een bepaalde wet werd ingevoerd of toen ze toetraden tot de Europese Unie.",
        "results": [
            {
                "party": "VVD",
                "statement": "De VVD wil een opt-out op het gebied van asiel en migratie bedingen, als er niet snel voldoende resultaat wordt gemaakt op dit gebied. Daarnaast wil de VVD dat er beter gekeken wordt naar welke bestuurslaag het meest geschikt is voor voorstellen."
            },
            {
                "party": "CDA",
                "statement": "De Unie is nu met 27 lidstaten en mogelijke verdere groei wat het CDA betreft toe aan de volgende fase; een Europa van meerdere snelheden. Waarbij niet alles door alle lidstaten gedaan hoeft te worden, wel moet iedereen voldoen aan alle basisvoorwaarden en -regels"
            },
            {
                "party": "FvD",
                "statement": "FVD wil op alle onderwerpen onze eigen regels maken. Denk aan migratie, klimaat, defensie en energie. Om dat te bereiken willen wij uit de Europese Unie. Naar voorbeeld van BREXIT streven wij naar volledige uittreding en het herpakken van onze complete soevereiniteit."
            },
            {
                "party": "PVV",
                "statement": "De opt-out is ons paradepaardje. Al sinds de oprichting wil de PVV onze nationale soevereiniteit terugpakken en weer de baas worden over onze eigen grenzen, geld en wetten. Wij willen graag intensief samenwerken met andere landen, maar niet in een politieke unie. De opt-out is hiervoor het ideale middel."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil de EU terug naar de kern: economische samenwerking. De afgelopen decennia heeft de EU veel te veel bevoegdheden naar zich toegetrokken. JA21 wil deze terug naar de lidstaten. Tot die tijd zijn opt-outs een goede optie. Voor Nederland zou dit o.a. moeten gelden op het gebied van migratie."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Dat zou op beperkte schaal mogelijk moeten zijn, maar de voorwaarden moeten wel in lijn blijven met de grondbeginselen van een gezamenlijk Europa."
            },
            {
                "party": "SGP",
                "statement": "In het geval er besloten zou worden nieuwe bevoegdheden bij de Europese Unie te beleggen, moeten individuele lidstaten gebruik kunnen maken van een opt-out. Een opt-out is een uitzonderingsregel waarmee een lidstaat kan besluiten geen deel te nemen aan het betreffende EU-beleid."
            },
            {
                "party": "BBB",
                "statement": "BBB wil voor Nederland een zogenaamde “opt-out” op het gebied van migratie en natuurbeleid."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "De kandidaten van MDD vinden de soevereiniteit van de verschillende lidstaten belangrijk. De EU dient alleen die onderwerpen te regelen die ten aanzien van vrij verkeer zijn overeengekomen en die door democratische besluitvorming worden gedragen."
            },
            {
                "party": "SP",
                "statement": "Wat in Nederland georganiseerd kan worden, moet door Nederland zelf bepaald worden en niet door de Europese Unie. Onze pensioenen, ons openbaar vervoer en onze zorg bijvoorbeeld kunnen we prima zelf organiseren, zonder bemoeienis van bovenaf uit Brussel."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil dat Nederland weer soeverein wordt. Op het gebied van energie, voedsel, milieu, gezondheid en onderwijs moeten we zelf weer gaan bepalen wat goed is voor ons land. BVNL is voor Opt-Outs."
            },
            {
                "party": "NSC",
                "statement": "Nederland doet het liefst mee in de voorhoede van de EU-beleidsvorming waar invloed op de koers kan worden uitgeoefend. Als er sprake is van onvoldoende draagvlak, werkbaarheid of te hoog oplopende kosten, zoekt de Nederlandse regering naar een blokkerende minderheid van gelijkgezinde lidstaten."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Wij staan voor een democratie, waarin beslissingen zo lokaal mogelijk worden genomen. Wanneer het niet noodzakelijk is dat op EU-niveau wordt besloten, kunnen landen zelf, of in een groep, beslissen. Bij besluiten die om goede redenen bij de EU liggen willen we wel het vetorecht beperken. PPDG.EU"
            },
            {
                "party": "GL-PvdA",
                "statement": "Het is belangrijker dan ooit dat we als Europese Unie goed samenwerken. De grote uitdagingen van deze tijd, zoals klimaatverandering, oorlogen en internationale veiligheid, zijn alleen samen op te lossen. Versplintering zorgt voor minder daadkracht, en daadkracht is juist wat we nu nodig hebben."
            },
            {
                "party": "D66",
                "statement": "D66 wil beslissingen nemen op het juiste niveau. We moeten ons niet laten leiden door angst voor Brussel, maar een rationele afweging wat effectief is. Zaken zoals onderwijs en zorg in Nederland. Maar op veiligheid, economie en energie hebben we een sterk Europa nodig tegenover Rusland en China."
            },
            {
                "party": "PvdD",
                "statement": "Opt-outs mogen niet ten koste gaan van natuur, milieu en mensen- en dierenrechten."
            },
            {
                "party": "50PLUS",
                "statement": "Indien er gezamenlijke afspraken worden gemaakt dan kan men zich er als land niet aan onttrekken. Anders is er geen Europese samenwerking meer."
            },
            {
                "party": "ChristenUnie",
                "statement": "We willen wel dat er ruimte is voor eigenheid van en verschillen tussen lidstaten, regio's en gemeenschappen. Europese samenwerking vraagt echter ook om commitment aan gemaakte afspraken."
            },
            {
                "party": "Volt",
                "statement": "We moeten vooruit met de EU, in het belang van al haar inwoners. Het recht van lidstaten om, uit eigenbelang, belangrijke voorstellen te blokkeren staat vooruitgang in de weg en moet wat Volt betreft tot het verleden behoren."
            }
        ]
    },
    {
        "theme": "Genetische modificatie",
        "title": "De EU moet boeren toestaan meer genetisch gemodificeerde gewassen te verbouwen",
        "info": "Mensen zorgen er al eeuwenlang voor dat de kwaliteit van planten beter wordt. Dat doen ze door planten met goede eigenschappen met elkaar te kruisen, zodat hun nakomelingen die eigenschappen hebben.\n\nDat duurt lang. Het kan nu ook sneller, door het DNA van planten te veranderen. DNA is de basiscode van planten, mensen en dieren. Alle eigenschappen van levende organismen staan erin. Genetisch modificeren is het doen van kleine aanpassingen in het DNA van plantensoorten. Groente en fruit zijn hierdoor bijvoorbeeld beter bestand tegen bacteriën, schimmels en bestrijdingsmiddelen.\n\nEr zijn nog weinig genetisch gemodificeerde gewassen toegestaan in Europa.",
        "results": [
            {
                "party": "VVD",
                "statement": "We willen in Europa voorop blijven lopen om nieuwe, duurzame vormen van voedselproductie te stimuleren. Europese regelgeving moet dat faciliteren."
            },
            {
                "party": "CDA",
                "statement": "Als CDA zijn we kritisch op de zogenaamde GMO's, zeker als modificatie plaatsvindt met vreemd genetisch materiaal. Het CDA is voorstander van minder impactvolle vormen zoals Crisp Cas omdat daar geen vreemd genetisch materiaal aan te pas komt. Crisp Cas is goed voor de toekomstige voedselzekerheid."
            },
            {
                "party": "FvD",
                "statement": "FVD vindt beperkingen voor boeren absoluut geen taak voor de Europese Unie. Nederland kan zélf prima bepalen welke gemodificeerde gewassen voldoen aan voorwaarden voor voedselveiligheid."
            },
            {
                "party": "D66",
                "statement": "D66 is voor een veilige en duurzame manier van gewassen telen. Boeren moeten onder voorwaarden kunnen kiezen voor genetische gemodificeerde gewassen als deze hieraan bijdragen. We behouden betaalbaarheid en keuzevrijheid door te letten op patentrechten en het vormen van monopolies."
            },
            {
                "party": "50PLUS",
                "statement": "Echter wel onder strikte voorwaarden met betrekking tot veiligheid voor de mensen en de natuur. Gezondheidsbescherming staat voorop!"
            },
            {
                "party": "PVV",
                "statement": "Door planten weerbaarder te maken tegen ziektes is er minder inzet van bestrijdingsmiddelen nodig. Dit is beter voor de volksgezondheid en daarnaast komen er minder schadelijke stoffen in de bodem."
            },
            {
                "party": "JA21",
                "statement": "De techniek rond genetisch gemodificeerd organisme (GMO) kan de mondiale voedselvoorziening structureel op een hoger peil brengen, maar wordt om onbegrijpelijke redenen door clubs als Greenpeace afgedaan als ‘Frankenstein-food’. De VS negeert dit soort irrationele bezwaren, de EU moet dat ook doen."
            },
            {
                "party": "BBB",
                "statement": "Als we veilige ggo-gewassen kunnen ontwikkelen waardoor meer mensen gezond, betaalbaar en veilig voedsel kunnen eten dan steunt BBB het benutten van deze optie."
            },
            {
                "party": "Volt",
                "statement": "De toekomst van de landbouw moet eerlijker, voor natuur én mens. Daarom steunt Volt onderzoek naar innovatieve technieken die de landbouw en voedselproductie duurzamer maken."
            },
            {
                "party": "NSC",
                "statement": "Met innovatieve genomische technieken kan de EU de boeren ondersteunen in het behalen van milieu- en biodiversiteitsdoelen. Deze technieken maken het mogelijk gewassen duurzamer te produceren. NSC is hier groot voorstander van."
            },
            {
                "party": "GL-PvdA",
                "statement": "GroenLinks-PvdA houdt juist vast aan strenge Europese regels op het gebied van genetisch gemodificeerde gewassen. Genetisch gemodificeerde zaden worden alleen toegestaan als zij voldoen aan maatschappelijke waardes en echt bijdragen aan een duurzame, klimaatadaptieve voedselvoorziening."
            },
            {
                "party": "PvdD",
                "statement": "Genetische manipulatie, hoe gericht ook, kan leiden tot onbedoelde veranderingen die risico’s met zich kunnen meebrengen voor mens, dier en milieu. De Partij voor de Dieren blijft zich daarom sterk maken voor een gentechvrij Europa."
            },
            {
                "party": "NL PLAN EU",
                "statement": "De antibioticumresistente genen in deze gewassen kunnen ervoor zorgen dat bepaalde infectieziekten niet meer te behandelen zijn. Schade aan het ecosysteem is niet uit te sluiten. Het is niet bekend wat de gevolgen op de lange termijn zijn van het op grote schaal toepassen van genetische manipulatie."
            },
            {
                "party": "ChristenUnie",
                "statement": "ChristenUnie staat niet negatief tegenover genetische modificatie, wel terughoudend. Ons uitgangspunt is dat technieken niet soorten-overschrijdend zijn. Regels rondom Genetisch Gemodificeerde Organismen (GMO) worden niet verder verruimd en er blijft een GMO-vrije keten."
            },
            {
                "party": "SGP",
                "statement": "De SGP is tegen genetische modificatie van gewassen als genen van niet aanverwante soorten ingezet worden. God heeft het leven geschapen. De natuurlijke grenzen die in Zijn schepping liggen, zijn er niet voor niets."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Bijna niemand weet wat de gevolgen zijn. Wij van MDD willen dat er veel meer onderzoek naar wordt gedaan. Er moet duidelijkheid komen over de gevolgen voor de biodiversiteit en de impact op de ecosystemen."
            },
            {
                "party": "SP",
                "statement": "We moeten extreem voorzichtig zijn met welke gewassen we toelaten in de supermarkt. Zolang we niet zeker weten dat dit veilig is, hanteren we het voorzorgsbeginsel en laten we het niet toe."
            },
            {
                "party": "BVNL",
                "statement": "De EU moet zich hier niet mee bemoeien. Landen kunnen dit prima zelf bepalen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor voedselveiligheid en hebben mede daarom principiële bezwaren tegen het patenteren van leven. Door een monocultuur van gepatenteerde gemodificeerde gewassen ontstaan risico's die niet te overzien zijn. Informeer jezelf: https://ppdg.eu/"
            }
        ]
    },
    {
        "theme": "Verplichte vliegbelasting",
        "title": "De EU moet landen verplichten vliegbelasting te heffen.",
        "info": "Vliegbelasting is een belasting op vliegreizen. Passagiers die vanuit Nederland vertrekken, betalen op dit moment een belasting van € 26,43 bovenop het vliegticket. Het is nu niet verplicht voor EU-landen om belasting te heffen op vliegreizen. Naast Nederland heffen bijvoorbeeld ook Duitsland, Frankrijk en België vliegbelasting. De hoogte van de vliegbelasting verschilt per land.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Vliegen is vervuilend en wordt nauwelijks belast, terwijl op een treinkaartje wel belasting zit. Dat moet anders: als alle Europese landen vliegen eerlijk belasten, worden duurzame manieren van reizen sneller een goed alternatief. Binnen Europa zou de trein het makkelijkst en goedkoopst moeten zijn."
            },
            {
                "party": "VVD",
                "statement": "De luchtvaartsector moet verduurzamen en een maatregel die daarbij helpt is een Europese vliegbelasting."
            },
            {
                "party": "CDA",
                "statement": "Een Europese heffing op kerosine stimuleert een duurzamere luchtvaart en voorkomt oneerlijke concurrentie tussen EU-lidstaten in de luchtvaart"
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat alle Europese landen een eerlijke prijs moeten rekenen voor vliegreizen. Zo zorgt de Nederlandse vliegbelasting niet voor oneerlijke concurrentie. We willen dat de rekening vooral bij veelvliegers terechtkomt en minder bij mensen die één keer per jaar op vakantie gaan."
            },
            {
                "party": "PvdD",
                "statement": "Vliegtuigen zijn het meest vervuilende vervoersmiddel. Belastingvoordelen voor het vliegverkeer, zoals vrijstellingen van btw en accijnzen, worden afgeschaft."
            },
            {
                "party": "50PLUS",
                "statement": "De EU moet zich als economische macht sterk maken voor een wereldwijde invoering van vliegtax. Prijselement moet vliegen duurder maken t.o.v. andere vervoersmiddelen zolang elektrische vliegen nog niet realiseerbaar is. Dient wel overal gelijk te zijn, zodat er geen onderlinge concurrentie ontstaat."
            },
            {
                "party": "ChristenUnie",
                "statement": "ChristenUnie wil dat de lidstaten Europese afspraken maken over BTW op vliegtickets (en mogelijk aanvullende heffingen) en accijns op kerosine."
            },
            {
                "party": "SGP",
                "statement": "De luchtvaart moet verduurzamen. Het aantal (vakantie)vluchten binnen Europa moet afnemen. Een middel om dat te stimuleren is het verhogen van de vliegbelasting op Europese bestemmingen. Voor een gelijk speelveld moet de hoogte van de belasting in de EU, door de lidstaten geïnd, gelijk zijn."
            },
            {
                "party": "Volt",
                "statement": "Vliegtickets zijn nog steeds veel goedkoper dan treinkaartjes, terwijl vliegen enorm schadelijk is. Met de opbrengsten van vliegbelasting wil Volt het treinnetwerk verbeteren en goedkoper maken. Zo kun jij nog steeds makkelijk, betaalbaar én schoon op reis."
            },
            {
                "party": "NSC",
                "statement": "We pleiten voor de invoering van btw op vliegtickets, accijns op kerosine en een afstandsafhankelijke vliegbelasting voor intercontinentale vluchten door lidstaten, maar afgestemd in Europees verband."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor 'de vervuiler betaalt'. Daarom willen we o.a. belasting heffen op kerosine en BTW op vliegtickets. Van de opbrengsten willen we internationale treinreizen goedkoper maken, zodat de duurzame optie niet langer de dure optie is. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "FvD",
                "statement": "FVD wil vliegen betaalbaar houden voor iedereen. Daarnaast is FVD van mening dat lidstaten zelf hier over moeten beslissen en niet de Europese Unie"
            },
            {
                "party": "PVV",
                "statement": "De PVV vindt dat iedereen zelf moet bepalen op welke manier iemand naar zijn of haar bestemming reist. De overheid moet zich daar niet mee bemoeien. Nederlanders moeten ook betaalbaar kunnen blijven vliegen vanaf onze eigen Nederlandse luchthavens. Wat ons betreft verdwijnt de vliegbelasting dan ook."
            },
            {
                "party": "JA21",
                "statement": "De EU moet lidstaten niet lastigvallen en opzadelen met nieuwe belastingen. In plaats van nóg duurder moet vliegen juist betaalbaarder worden gemaakt. JA21 wil daarom de nationale vliegtaks afschaffen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Pas na twee retour-vliegreizen per jaar kan vliegbelasting worden geheven."
            },
            {
                "party": "BBB",
                "statement": "BBB is voorstander van wereldwijde regels die de luchtvaart en scheepvaart geleidelijk richting het gebruik van duurzame brandstoffen bewegen. Eenzijdige Europese normen verzwakken de concurrentiepositie van Nederlandse en Europese luchtvaartbedrijven."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "De onafhankelijke kandidaten van MDD vinden dat belastingen een nationale aangelegenheid zijn."
            },
            {
                "party": "SP",
                "statement": "We verzetten ons tegen maatregelen waarvan de kosten alleen bij mensen komen te liggen. Hoge prijzen maken het leven onbetaalbaar voor mensen met een laag en gemiddeld inkomen. Tweedeling door klimaatbeleid staan wij niet toe."
            },
            {
                "party": "BVNL",
                "statement": "BVNL is tegen EU-belastingen."
            }
        ]
    },
    {
        "theme": "Digitale Euro",
        "title": "De Europese Centrale Bank (ECB) moet naast munten en bankbiljetten ook een digitale euro gaan uitgeven.",
        "info": "In Nederland en veel andere Europese landen betalen we met de euro. De Europese Centrale Bank (ECB) geeft papiergeld en munten uit. De ECB is geen gewone bank, maar een EU-instelling. Een gewone bank is een bedrijf.\n\nIn Nederland zetten veel mensen hun geld op een rekening bij een gewone bank. De bank is verantwoordelijk voor dat geld en voor het goed verlopen van de betalingen vanaf de rekening.\n\nEen digitale euro komt in een persoonlijke digitale portemonnee en dus niet op een bankrekening bij één bank.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Op den duur kan een digitale Euro een snelle en toegankelijke toevoeging zijn aan huidige systemen en cash geld. Maar er wordt nog onderzoek gedaan naar risico’s rondom veiligheid en privacy. Pas als die vragen beantwoord zijn, kan er definitief een beslissing over invoering worden genomen."
            },
            {
                "party": "VVD",
                "statement": "De VVD heeft in de discussie over de digitale euro steeds gehamerd op belangrijke randvoorwaarden. Zo moet privacy van gebruikers gewaarborgd zijn en mag een digitale munt niet programmeerbaar zijn. Ook blijft contant geld beschikbaar. Pas met die voorwaarden kan er een digitale euro komen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Mits dit geen gevolgen heeft voor de niet-digitale euro, privacy, cybersecurity en stabiliteit van het financiële stelsel. De digitale euro mag niet programmeerbaar worden."
            },
            {
                "party": "Volt",
                "statement": "Als de digitale munt aan een aantal belangrijke voorwaarden voldoet, zoals veiligheid en privacy, is het een goede aanvulling op het geld dat we nu gebruiken. Met een digitale euro kunnen mensen makkelijker betalen en versterken we de financiele zekerheid van de landen in de Europese Unie."
            },
            {
                "party": "D66",
                "statement": "De digitale euro kan een goed publiek alternatief zijn voor privaat digitaal geld. Bij het huidige voorstel zijn echter nog te veel vraagtekens om de digitale euro veilig te gebruiken. D66 wil daarom eerst meer waarborgen zien, bv. op privacy en dat de digitale euro niet geprogrammeerd kan worden."
            },
            {
                "party": "CDA",
                "statement": "We handhaven ons zeer efficiënte Nederlandse digitale betalingsverkeer. Op dit moment is het CDA geen voorstander van de plannen voor een digitale euro"
            },
            {
                "party": "FvD",
                "statement": "Met een digitale euro krijgt de overheid inzicht in alles wat we kopen en verkopen, oftewel: in bijna alles wat we doen en laten. Het is een stap verder richting een samenleving waarin controle de norm is en privacy verleden tijd zal zijn. FVD zal hier onder geen enkele voorwaarde mee akkoord gaan."
            },
            {
                "party": "PvdD",
                "statement": "Zolang de invloed van de commerciële banken bij de uitrol van de digitale euro niet wordt teruggedrongen én zolang er geen gezonde, democratische, Europa-brede discussie komt over de relevante onderwerpen, zoals privacy en programmeerbaarheid van de valuta, wordt de digitale euro niet ingevoerd."
            },
            {
                "party": "50PLUS",
                "statement": "Er is nog veel onduidelijk wat de gevolgen van een digitale euro zullen zijn. Cash (chartaal) geld moet in ieder geval blijven bestaan, anders zou dit ten koste gaan van onze individuele vrijheid."
            },
            {
                "party": "PVV",
                "statement": "De PVV maakt zich zorgen over de mogelijke komst van de digitale euro, onder andere vanwege privacy-gerelateerde risico’s, een verdere soevereiniteitsoverdracht en het gebrek aan nut en noodzaak ervan."
            },
            {
                "party": "JA21",
                "statement": "JA21 is tegen de CBDC, ook wel de digitale euro genoemd. Nederland beschikt immers al over het meest efficiënte betaalsysteem binnen Europa. Er is dan ook geen probleem dat opgelost zou worden met een digitale euro als betaalmiddel. JA21 wil een verbod op de introductie van de digitale euro."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is geen voorstander van de digitale euro omdat het nut en de noodzaak voor de burger vooralsnog niet duidelijk zijn. Mocht de digitale euro er toch komen dan moet deze de internationale rol van de euro versterken en moeten de hoogst mogelijke eisen aan privacy worden gesteld."
            },
            {
                "party": "SGP",
                "statement": "De SGP is tegen de komst van een digitale euro. Er is te veel onduidelijkheid rondom nut, noodzaak en privacy. Het geeft de ECB te veel macht en controle. Zo zou de digitale euro op termijn programmeerbaar kunnen worden."
            },
            {
                "party": "BBB",
                "statement": "BBB is kritisch op een verplichting voor uitgifte van een digitale euro vanwege het risico voor de privacy. BBB wil in alle gevallen contant geld als gelijkwaardig behouden en borgen."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "MDD denkt dat dit tot problemen leidt in de praktijk en met de uitvoering. Daarnaast vraagt MDD zich af welk probleem hiermee wordt opgelost."
            },
            {
                "party": "SP",
                "statement": "We zien niets in een digitale euro die de macht van bankiers onaangetast laat en de privacy van mensen kan schaden."
            },
            {
                "party": "BVNL",
                "statement": "Hoe minder controle op ons geld hoe beter. BVNL wil daarom dat contant geld beschikbaar blijft en is tegen de digitale euro en tegen de CBDC."
            },
            {
                "party": "NSC",
                "statement": "Een digitale euro (als CBDC) is in potentie mogelijk een tegenwicht tegen de dominantie van commerciële banken in het digitale geldverkeer. Maar de huidige visie van de ECB biedt veel te weinig houvast. Daarnaast zou digitaal geld, net als contant geld, de optie tot anonieme besteding moeten hebben."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor het behoud van contant geld. De 'digitale euro' (CBDC) is nu zo ingericht dat er eigenlijk geen behoefte aan bestaat. Het zou pas nuttig worden als cash verdwijnt, en dat willen we nu juist voorkomen! Informeer jezelf: https://ppdg.eu/"
            }
        ]
    },
    {
        "theme": "Samenwerking Israël",
        "title": "De EU moet samenwerking met Israël stoppen totdat de Palestijnen een eigen staat hebben.",
        "info": "De EU heeft een associatieverdrag met Israël. Door dat verdrag kan Israël onder meer makkelijker producten verkopen in de EU. De EU is de grootste exportmarkt voor Israëlische producten.\nIn de jaren negentig van de vorige eeuw zijn er internationale afspraken gemaakt over een aparte Palestijnse en Israëlische staat. De EU heeft haar steun hiervoor uitgesproken. De Palestijnen hebben nog geen eigen staat. Ze hebben wel eigen besturen in Gaza en de Westelijke Jordaanoever.\n\nIn Gaza leidt Hamas het bestuur. Bij een terroristische aanslag door Hamas in 2023 vielen 1.200 Israëlische slachtoffers. Als reactie viel Israël Gaza binnen. Dit heeft tot meer dan 30.000 Palestijnse slachtoffers geleid.",
        "results": [
            {
                "party": "PvdD",
                "statement": "Na decennia van geweld en onderdrukking is het van het grootste belang dat mensen in Palestijns gebied perspectief wordt geboden. De EU oefent druk uit op de Israëlische regering om te stoppen met de bezetting en annexatie van Palestijnse gebieden, indien nodig met sancties."
            },
            {
                "party": "SP",
                "statement": "Zolang Israël grootschalig mensenrechten schendt en de bezetting voortduurt, zijn we voor het opschorten van het associatieverdrag met Israël. Ook kunnen we handelssancties overwegen om Israël aan te sporen een andere koers te kiezen en het recht op zelfbeschikking van Palestijnen te erkennen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor vrede, veiligheid en verzoening. De oorlogsmisdaden van Israël zijn onacceptabel, met welke aanleiding dan ook. Daarom willen wij sancties instellen, waaronder het stopzetten van samenwerkingen, totdat de Palestijnen een eigen staat hebben."
            },
            {
                "party": "GL-PvdA",
                "statement": "De EU moet werken aan duurzame vrede en het beëindigen van de illegale bezetting van Palestijns gebied. Die vrede vereist een democratische Palestijnse staat en een veilig Israël, met gelijke rechten voor allen. We leveren geen militair materieel als Israël er het internationaal recht mee schendt."
            },
            {
                "party": "D66",
                "statement": "Voor D66 is de tweestatenoplossing de enige weg vooruit om de mensen in de regio perspectief te bieden. Veilig Israël naast een veilig Palestina. We leveren geen militaire steun aan Israël die bij dragen aan schendingen van het internationaal recht. Om vrede te bereiken is goede regionale samenwerking nodig vanuit de EU, dus ook met Israël."
            },
            {
                "party": "Volt",
                "statement": "Stellingen van stemhulpen zijn per definitie ongenuanceerd maar bij zo een complex conflict is een simpele (on)eens geen optie. Militaire samenwerking met Israël moet direct stoppen, maar niet alle samenwerking."
            },
            {
                "party": "VVD",
                "statement": "Israël heeft het recht op zelfverdediging tegen de terroristische groepering Hamas. Het is in ieders belang dat er uitzicht komt op duurzame vrede tussen Israëliërs en Palestijnen. De EU zal het perspectief op een levensvatbare Palestijnse staat – naast een veilig Israël – moeten blijven nastreven."
            },
            {
                "party": "CDA",
                "statement": "Het CDA pleit voor een tweestatenoplossing en daar hopen we zo snel mogelijk werk van te kunnen maken. Een samenwerking stoppen gaat nu niet bijdragen aan een snellere oplossing."
            },
            {
                "party": "FvD",
                "statement": "FVD is van mening dat Nederland zélf gaat over samenwerking met andere landen. Wij moeten bekijken welke samenwerking in ons belang is, en niet wat het belang is van Frankrijk of Duitsland."
            },
            {
                "party": "50PLUS",
                "statement": "De EU zal zich inspannen om te zorgen voor een vredige 2 statenoplossing waarbij de regeringen niet de vernietiging van een andere staat promoten. Niet samenwerken brengt vrede niet dichterbij."
            },
            {
                "party": "PVV",
                "statement": "De PVV is een grote vriend van Israël; de enige echte democratie in het Midden-Oosten. Ook cultureel is Nederland zeer verbonden aan Israël. Nederland heeft overigens al een ambassade in Amman, de hoofdstad van de enige echte Palestijnse staat: Jordanië."
            },
            {
                "party": "JA21",
                "statement": "Het Israëlisch-Palestijnse conflict is een schoolvoorbeeld van een buitenlandse kwestie waar de EU zich níét mee moet bemoeien. Het aandringen op een Palestijnse staat is totaal niet aan de EU. De EU moet samenwerken in het Europese economische belang en buitenlands beleid aan lidstaten overlaten."
            },
            {
                "party": "NL PLAN EU",
                "statement": "De EU kan niet bepalen wie of wat een eigen staat gaat krijgen of daar op gaan staan wachten. Geen samenwerking is altijd ingegeven door conflict."
            },
            {
                "party": "ChristenUnie",
                "statement": "We maken ons grote zorgen over de spiraal van geweld tussen Israëliërs en Palestijnen maar houden hoop op verzoening tussen Israël en de Palestijnen. Een vredesregeling kan pas standhouden met veilige en erkende grenzen voor Israël en de erkenning van het recht op zelfbeschikking voor de Palestijnen."
            },
            {
                "party": "SGP",
                "statement": "Vrede komt in zicht wanneer het bestaansrecht van Israël wordt erkend en de Palestijnen het geweld tegen Israël afzweren. Erkenning van een Palestijnse staat mag geen resultaat zijn van een eenzijdige internationale verklaring van bovenaf. De EU steunt constructieve initiatieven van onderop."
            },
            {
                "party": "BBB",
                "statement": "Israël is een belangrijke democratische bondgenoot in het Midden-Oosten waarvan de geschiedenis diep vervlochten is met de Nederlandse. BBB hoopt op een snelle vrede in de Gazastrook, zodra Hamas de Israelische gijzelaars heeft vrijgelaten. BBB steunt een tweestatenoplossing."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Wij vinden dat dit de vrede niet bevordert. Als MDD vinden wij het belangrijk dat de dialoog moet worden gevoerd. Oorlog is voor alle burgers vreselijk."
            },
            {
                "party": "BVNL",
                "statement": "De EU moet zich inzetten voor vrede en dat wordt niet bereikt door het stopzetten van samenwerking."
            },
            {
                "party": "NSC",
                "statement": "Nederland erkent de democratische staat Israël en helpt het land bij de bescherming van zijn burgers. Wij zijn voor een twee-staten-oplossing waar geen plaats is voor terroristische groeperingen en mensenrechtenschendingen."
            }
        ]
    },
    {
        "theme": "Geschoolde migranten",
        "title": "Het moet gemakkelijker worden voor geschoolde werknemers om in de EU te komen wonen en werken.",
        "info": "In veel EU-landen is een groot tekort aan mensen die kunnen werken, bijvoorbeeld goed opgeleide verpleegkundigen of IT-mensen. Het is nu niet altijd even makkelijk om voor die banen mensen van buiten de EU aan te nemen. Er bestaat een regeling om tijdelijk in de EU te komen werken, de Blue Card. Hier wordt weinig gebruik van gemaakt.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "In sommige belangrijke werkvelden, zoals de zorg, kan arbeidsmigratie helpen met het oplossen van arbeidstekorten. Maar dat kan alleen wanneer we arbeidsmigratie goed reguleren en er sprake is van eerlijk, veilig en goed(betaald) werk, onder leiding van de overheid."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil meer keuzevrijheid hebben over wie we toelaten en in welke sectoren. Wel moeten werknemers nog steeds aan dezelfde voorwaarden voldoen"
            },
            {
                "party": "D66",
                "statement": "D66 wil keuzes maken om grip te krijgen op migratie. Wij kiezen voor een sterke economie. Dat betekent dat we bv. in slachthuizen en distributiecentra kiezen voor minder arbeidsmigratie. Maar wél voor geschoold personeel dat we keihard nodig hebben voor onze zorg, onderwijs en innovatieve bedrijven."
            },
            {
                "party": "50PLUS",
                "statement": "Het vergemakkelijken van toegang voor geschoolde werknemers in de EU vereist zorgvuldige vacatureselectie en controle, met aandacht voor woningmarktuitdagingen door arbeidsmigratie."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Dit geldt zeker voor de specifieke sectoren die cultuurgebonden zijn. Vakbekwaam personeel is essentieel voor tal van bedrijven. Ook arbeidsmogelijkheden voor stagiairs/studenten moeten worden uitgebreid."
            },
            {
                "party": "BBB",
                "statement": "BBB wil circulaire arbeidsmigratie waarbij mensen die onze economie kunnen versterken in cruciale sectoren tijdelijk in Nederland kunnen werken."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Wij ondersteunen de huidige EU Blue Card-procedure voor hoogopgeleide arbeidsmigratie. Dit zou niet alleen op basis van opleidingsniveau moeten zijn, maar er moet worden gekeken aan welke beroepen behoefte is en aan welke vaardigheden er een tekort is."
            },
            {
                "party": "Volt",
                "statement": "De EU staat voor grote uitdagingen. We hebben tekorten in o.a. de zorg, het onderwijs, de ICT en op het gebied van verduurzaming en innovatie. Om ervoor te zorgen dat we deze uitdagingen aan kunnen hebben we internationale talenten nodig."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een vrij Europa en een goede economie. Geschoolde werknemers kan de economie van de EU goed gebruiken. Daar willen we geen onnodige beperkingen aan opleggen. Informeer jezelf: https://ppdg.eu"
            },
            {
                "party": "VVD",
                "statement": "Als het aan de VVD ligt voeren Nederland en de Europese Unie een kritischer beleid op arbeidsmigratie. Vooral hoogwaardige kennismigratie levert een positieve bijdrage aan de Europese economie. Andere vormen van arbeidsmigratie van buiten de EU gaan we kritischer beoordelen."
            },
            {
                "party": "FvD",
                "statement": "De steeds voortgaande migratie naar Nederland zorgt voor enorme sociale, culturele en economische problemen. FVD wil migratie naar de EU en naar Nederland radicaal beperken."
            },
            {
                "party": "PvdD",
                "statement": "Het aantrekken van werknemers van buiten de EU is vooral gunstig voor werkgevers. We zijn voor goede regulering van arbeidmigratie."
            },
            {
                "party": "PVV",
                "statement": "Nederland is prop en prop vol. We hebben letterlijk geen bedden over in ons land voor ongecontroleerde arbeidsmigratie. Bovendien houden de goedkope arbeiders uit verre landen de lonen van onze eigen Nederlandse werknemers laag."
            },
            {
                "party": "JA21",
                "statement": "Voor geschoolde werknemers met aantoonbare meerwaarde moet ruimte blijven. Tegelijkertijd is Nederland de grip op arbeidsmigratie compleet verloren. In plaats van versoepeld moet arbeidsmigratie strakker worden gereguleerd, maar dan met name voor laaggeschoolde arbeid."
            },
            {
                "party": "ChristenUnie",
                "statement": "Vanwege het tekort aan woonruimte, is het begrijpelijk dat Nederland terughoudend is om arbeidskrachten van buiten de EU/EER toe te laten. Niet vraag en aanbod moeten leidend zijn, maar een duurzame, toekomstbestendige economie."
            },
            {
                "party": "SGP",
                "statement": "Arbeidsmigranten van buiten de EU moeten we niet hierheen willen halen om onze rijkdom in stand te houden. Ze kunnen beter meewerken aan de ontwikkeling van hun eigen land. De enige beperkte uitzondering geldt voor bepaalde vakspecialisten die we in de EU niet hebben, maar wel nodig hebben."
            },
            {
                "party": "SP",
                "statement": "Op dit moment vormen arbeidsmigranten veruit het grootste deel van de migranten die het land binnenkomen. De SP wil een vergunningstelsel voor arbeidsmigratie. Werkgevers moeten dan aantonen dat er echt geen andere mogelijkheid is dan de inzet van een arbeidsmigrant voor het werk dat gedaan moet worden."
            },
            {
                "party": "BVNL",
                "statement": "Voor hoog opgeleide specialistische werknemers moet het mogelijk zijn om een tijdelijke werkvergunning te krijgen. Voor anderen juist niet. Eerst moet het arbeidspotentieel in eigen land worden benut."
            },
            {
                "party": "NSC",
                "statement": "Arbeidsmigranten van buiten de EU willen we selectief toelaten op basis van wat de Nederlandse arbeidsmarkt nodig heeft. Hiervoor kan een puntensysteem naar het Canadees model worden ingesteld, al dan niet samen met andere landen."
            }
        ]
    },
    {
        "theme": "Geen uitbreiding EU",
        "title": "Er mogen de komende jaren geen nieuwe landen bij de EU.",
        "info": "Er zitten nu 27 landen bij de EU. Zij maken samen wetten en regels in Europa. Er willen nog meer landen lid worden van de EU. Bijvoorbeeld Bosnië en Herzegovina, Montenegro en Oekraïne. Voordat een land lid mag worden moet het onderhandelen met de EU en EU-wetten invoeren. Dat is een proces dat jaren duurt. De voorwaarden om lid te worden van de EU zijn vastgelegd in de zogenoemde Kopenhagen-criteria.",
        "results": [
            {
                "party": "FvD",
                "statement": "FVD wil absoluut geen verdere uitbreiding van de EU. De landen die nu kandidaat zijn voor lidmaatschap zijn in de meeste gevallen intens corrupt, worden slecht bestuurd en zullen financieel weinig tot niks bijdragen."
            },
            {
                "party": "PvdD",
                "statement": "De Partij voor de Dieren onderschrijft de steun aan buurlanden van de EU. Uitbreiding van de EU is echter niet de oplossing zolang de EU gericht blijft op onbeperkte vrijhandel en zelf niet hervormt en democratischer wordt."
            },
            {
                "party": "50PLUS",
                "statement": "Landen moeten voldoen aan alle criteria (Kopenhagen). Als dat zo is zijn er geen redenen om hen niet te laten toetreden."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil geen verdere uitbreiding van de EU of stappen in die richting."
            },
            {
                "party": "JA21",
                "statement": "De Europese Unie heeft zijn grenzen al lange tijd geleden bereikt. JA21 wil geen verdere uitbreiding van de EU. Toetreding van nieuwe lidstaten zoals Oekraïne, Moldavië en Georgië is op geen enkele manier in het Nederlands belang en moet worden tegengegaan."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Geen uitbreiding met landen die territoriale disputen hebben of hervormingen moeten doorvoeren, omdat deze niet voldoen aan de voorwaarden van een stabiele democratie, eerbiediging van mensenrechten, bescherming van minderheden, en meegaan met het functioneren en de ontwikkeling van de EU."
            },
            {
                "party": "ChristenUnie",
                "statement": "We bestrijden corruptie en zijn kritisch op toetreding van nieuwe lidstaten."
            },
            {
                "party": "SGP",
                "statement": "Eventuele uitbreiding van de EU moet gebaseerd zijn op strikte toepassing van de Kopenhagen-criteria, met oog voor de interne stabiliteit van de EU. Op dit moment zijn de huidige kandidaat-landen niet klaar voor toetreding. Wél kan de EU op andere manieren met deze landen samenwerken."
            },
            {
                "party": "BBB",
                "statement": "Snelle en overhaaste uitbreiding is een ernstige bedreiging voor de stabiliteit, samenhang en voortbestaan van de huidige Europese samenwerking. BBB is daarom tegen elke uitbreiding met landen die niet (volledig) aan de Kopenhagen-criteria voldoen, zoals de eisen omtrent democratie en rechtsstaat."
            },
            {
                "party": "SP",
                "statement": "Het toetreden tot de EU is een langdurig en complex proces, zowel voor het land als voor de rest van de EU. Daarom moet uitbreiding in een verantwoord tempo plaatsvinden. De EU is in het verleden te snel gegroeid. Uitbreiding met nog meer landen is nu dan ook niet verstandig."
            },
            {
                "party": "BVNL",
                "statement": "Zo is dat! Geen nieuwe EU-lidstaten. Eerst het eigen huis op orde!"
            },
            {
                "party": "NSC",
                "statement": "We moeten eerlijk zijn over het perspectief om lid te worden van de EU: dit proces zal – gelet op de strenge criteria die gelden voor toetreding – op zijn minst vele jaren vergen. Datzelfde geldt ook voor Moldavië, Georgië en landen van de westelijke Balkan."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor behoorlijk bestuur. Er gelden duidelijke voorwaarden voor toetreding tot de EU. De komende jaren zullen er geen landen zijn die aan deze voorwaarden kunnen voldoen. Op dit moment kan er dus nog geen sprake zijn van toetreding. Informeer jezelf: https://ppdg.eu"
            },
            {
                "party": "GL-PvdA",
                "statement": "We ondersteunen de kandidaat-lidstaten actief in hun weg naar het EU-lidmaatschap. Daarbij houden we strikt vast aan de voorwaarden om democratische hervormingen door te voeren. We pleiten voor stapsgewijze toetreding: landen worden bijvoorbeeld eerst alleen lid van de douane-unie."
            },
            {
                "party": "VVD",
                "statement": "De VVD is strikt en fair op uitbreiding. Voldoen aan de toetredingseisen en een gezonde rechtsstaat zijn leidend bij de beslissing of een land lid mag worden."
            },
            {
                "party": "CDA",
                "statement": "We bieden perspectief op toetreding, maar potentiele lidstaten moeten aan alle voorwaarden, de zogenaamde Kopenhagen-criteria, voldoen"
            },
            {
                "party": "D66",
                "statement": "D66 wil een sterk Europa dat een vuist kan maken richting Rusland en China. Voor landen lid mogen worden van de Europese Unie, moeten ze aan een aantal harde eisen voldoen. Die zijn wat D66 betreft niet onderhandelbaar."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "MDD is voor toetreding van de west-Balkanlanden, als aan alle voorwaarden wordt voldaan. We zijn gereserveerd tegenover uitbreiding met alle landen. Dit moet van geval tot geval worden bekeken. Is er oorlog, corruptie of zijn er mensrechtenschendingen dan vinden we toetreding onverstandig."
            },
            {
                "party": "Volt",
                "statement": "De EU staat op voor gedeelde vrede en welvaart. Daarom vinden we het belangrijk dat de EU nieuwe leden verwelkomt die onze democratische waarden en mensenrechten delen. Zo zorgen we voor een EU die niet alleen zichzelf verantwoordelijk houdt, maar actief opkomt voor rechtvaardigheid en gelijkheid."
            }
        ]
    },
    {
        "theme": "Inkoop wapens",
        "title": "EU-landen moeten vaker samen wapens en ander defensiemateriaal gaan inkopen.",
        "info": "Alle Europese landen hebben een eigen leger. Ze werken wel samen, maar dat doen ze niet in EU-verband. De samenwerking gaat vooral via de NAVO, waar bijna alle EU-landen lid van zijn.\n\nLegers hebben wapens en andere spullen nodig, zoals auto’s, communicatiesystemen en tenten. EU-landen kopen nu meestal zelf hun materiaal in.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Het is echte noodzaak dat Europa zichzelf goed kan verdedigen. Dat vraagt om sterke samenwerking en gezamenlijke organisatie van onze krijgsmachten. Daar hoort bij dat we wapensystemen samen ontwikkelen, aankopen en onderhouden."
            },
            {
                "party": "VVD",
                "statement": "Gezamenlijke inkoop van wapens en defensiemateriaal vergroot de afzetmarkt voor onze defensie-industrie, de productiecapaciteit gaat omhoog, de kosten omlaag, en we kunnen beter in onze eigen behoeften voorzien. Daarnaast zorgt gezamenlijke aankoop voor makkelijkere samenwerking tussen landen."
            },
            {
                "party": "CDA",
                "statement": "We gaan in Europa intensiever samenwerken op het gebied van defensie in de vorm van o.a. gemeenschappelijke munitieproductie en gezamenlijke inkoop. Daarbij moeten we ook werken aan de versterking van de Europese defensie-industrie door middel een Europees defensie-investeringsprogramma."
            },
            {
                "party": "D66",
                "statement": "Europa moet zichzelf kunnen beschermen. Gezamenlijke inkoop van materieel is effectiever, goedkoper en innovatiever. Daarom is D66 daar een groot voorstander van."
            },
            {
                "party": "PvdD",
                "statement": "We zijn voor Europese samenwerking op defensiegebied, maar EU-landen blijven wat ons betreft zelf beslissen over het inzetten van hun leger en levering van wapens."
            },
            {
                "party": "50PLUS",
                "statement": "Goed om onderlinge afstemming en inkoop te hebben binnen de EU. Kan prima door samen te werken tussen landen. NAVO dient hierin een vooraanstaande rol te spelen."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het is belangrijk dat de EU bijdraagt aan de efficiëntere besteding van nationale defensiebudgetten, gericht op het versterken van de interoperabiliteit, standaardisatie van materieel en gemeenschappelijke ontwikkel- en inkoopprogramma’s."
            },
            {
                "party": "SGP",
                "statement": "Europese defensiesamenwerking kan, in aanvulling op de NAVO, meerwaarde hebben rondom interoperabiliteit en de ontwikkeling en aanschaf van capaciteiten en materieel, maar wordt getoetst aan de criteria van subsidiariteit, proportionaliteit, noodzaak en meerwaarde."
            },
            {
                "party": "BBB",
                "statement": "Slim samen inkopen zorgt voor betere afstemming en snellere productie. Belangrijke voorwaarde die BBB stelt is dat bij gezamenlijke inkoop er ook een welvarende defensie-industrie in Nederland wordt opgebouwd, en niet alle projecten in Frankrijk of Duitsland worden gebouwd. BBB wijst gemeenschappelijke EU-defensieschulden af."
            },
            {
                "party": "Volt",
                "statement": "Een veilige EU moet snel en goed omgaan met bedreigingen om de landen en hun inwoners te beschermen. De EU moet niet langer afhankelijk zijn van anderen voor haar militair materiaal. Het samen inkopen van materiaal is goedkoper en maakt samenwerken makkelijker."
            },
            {
                "party": "NSC",
                "statement": "De EU moet meer investeren in Europese productiecapaciteit voor wapens en munitie. Daarnaast moeten EU-landen defensiemateriaal gezamenlijk inkopen, aangezien dit voordeliger is en de EU-landen hierbij een gezamenlijk doel hebben: dat van Europese veiligheid."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Wij staan voor efficiënt beleid. Daarbij past onderlinge afstemming van de aanschaf van militair materieel. De huidige situatie, waarin granaten moeten worden bijgeslepen omdat ze niet passen, is een gotspe. Samen inkopen is efficiënter en goedkoper. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "JA21",
                "statement": "De NAVO dient onze militaire veiligheid en dient strikt gescheiden te blijven van de EU. JA21 wil geen Europese krijgsmacht of diplomatieke bevoegdheden voor de EU. Wel kan de EU belemmeringen op de interne markt wegnemen voor defensie-investeringen en bijvoorbeeld aanbestedingen coördineren."
            },
            {
                "party": "FvD",
                "statement": "FVD wil absoluut geen Europees leger of een gezamenlijk Europees defensiebeleid. Soevereine natiestaten horen hun eigen leger en hun eigen defensiepolitiek te hebben."
            },
            {
                "party": "PVV",
                "statement": "PVV is niet tegen het inkopen van wapens en defensiemateriaal met andere landen. Echter, het uitrollen van een EU-strategie om in EU verband wapens en defensiematerieel in te kopen gaat ten koste van de Nederlandse industrie, want investeringen komen veelal niet in Nederland zelf terecht."
            },
            {
                "party": "NL PLAN EU",
                "statement": "EU-burgers verwachten dat de EU veiligheid en vrede garandeert, maar de EU kan zich beter richten op haar interne markt. De NAVO gaat over beslissingen met militaire implicaties."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "We zijn tegen het aangaan van gemeenschappelijke schulden hiervoor. En er dienen eerst belangrijke vragen of eigenaarschap beantwoord te worden, voordat dit goed kan worden beoordeeld."
            },
            {
                "party": "SP",
                "statement": "We waken voor een wapenwedloop waarbij miljarden euro’s naar wapens gaan. Een wapenwedloop brengt vrede niet dichterbij. Het maakt de wereld nóg onveiliger. We zijn kritisch over de militaire rol die de EU naar zich toe trekt."
            },
            {
                "party": "BVNL",
                "statement": "Geen EU-leger. Nederland bepaalt zelf in welke conflicten wij ons mengen en wij leveren geen militairen voor door de EU bepaalde missies."
            }
        ]
    },
    {
        "theme": "Begrotingstekort",
        "title": "De EU moet lidstaten een groter begrotingstekort toestaan dan nu het geval is.",
        "info": "De economieën van de Europese landen zijn sterk met elkaar verbonden. Veel EU-landen gebruiken bijvoorbeeld de gemeenschappelijke munt, de euro. Als een land een begrotingstekort heeft, geeft het meer geld uit dan er belastingen binnenkomen. De EU heeft regels voor hoe groot een begrotingstekort mag zijn. De reden daarvoor is dat grote begrotingstekorten gevolgen kunnen hebben voor andere landen of voor de euro. De euro kan dan minder waard worden, waardoor in de EU gemaakte producten duurder worden (inflatie).",
        "results": [
            {
                "party": "PvdD",
                "statement": "De EU richt zich niet langer primair op het terugdringen van begrotingstekorten van de lidstaten, maar op het terugdringen van het Europese ecologisch tekort."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Een toekomstige crisis met ernstige financieel-economische gevolgen altijd incalculeren. De general escape clause, waarbij EU-lidstaten op nationaal niveau maatregelen nemen om de economie te stimuleren zonder dat er sprake is van regelovertreding, moet de Europese Commissie verlengen."
            },
            {
                "party": "SP",
                "statement": "Lidstaten moeten zelf kunnen beslissen over hun begroting. Het beperken van het overheidstekort tot 3% van het bruto binnenlands product (bbp) en het beperken van de overheidsschuld tot 60% van het bbp, hebben na de economische crisis het herstel van Nederland eerder belemmerd dan bevorderd."
            },
            {
                "party": "Volt",
                "statement": "De huidige norm is voor veel EU-landen onhaalbaar en daarmee zelfs schadelijk, daarom wil Volt deze uitbreiden. Zo voorkomen we dat landen in de EU enorm veel moeten bezuinigen (waardoor jij meer moet betalen) en blijft investeren mogelijk."
            },
            {
                "party": "GL-PvdA",
                "statement": "Begrotingsregels zijn nodig om gezonde overheidsfinanciën te garanderen. Wel vinden we dat landen de ruimte moeten krijgen om te investeren in publieke en sociale voorzieningen, in de energietransitie, en om de economie van een land sterker en toekomstbestendig te maken."
            },
            {
                "party": "VVD",
                "statement": "Wij willen geen schulden doorschuiven naar toekomstige generaties en we willen dat landen hun eigen broek ophouden."
            },
            {
                "party": "CDA",
                "statement": "Het CDA blijft bij de lijn dat het de staatsschuld van het Rijk moet beperkt blijven, onder de Maastricht-criteria van 60%. De overheidsuitgaven moeten worden aangepast en gerichte lastenverlichting en investeringen moeten worden doorgevoerd om weer toe te werken naar de 3% begrotingstekortnorm"
            },
            {
                "party": "FvD",
                "statement": "FVD wil uit de Europese Unie treden, zodat wij niet hoeven op te draaien voor de begrotingstekorten van andere lidstaten. Zolang Nederland echter nog in de EU zit, is het van belang dat we het toegestane begrotingstekort absoluut niet verhogen."
            },
            {
                "party": "D66",
                "statement": "D66 wil een sterke Europese economie. Daarom moeten landen niet te grote begrotingstekorten opbouwen en hun economie hervormen. D66 wil de begrotingsregels ook hervormen om meer ruimte bieden voor investeringen in klimaat, defensie of onze economie. Daarbij geldt wel: afspraak is afspraak."
            },
            {
                "party": "50PLUS",
                "statement": "EU-landen moeten zich houden aan de nieuwe versie van Groei en Stabiliteitspact. De lessen uit het verleden laten zien dat te forse bezuinigingen in tijden van economische nood de crisis onnodig verdiepen en het duurt dan langer tot een herstel optreedt."
            },
            {
                "party": "PVV",
                "statement": "De PVV vindt dat de EU, lidstaten geen groter begrotingstekort moet toestaan dan nu het geval is. Indien een groter begrotingstekort wordt toegestaan, heeft het verleden aangetoond dat andere lidstaten een zooitje maken van hun overheidsfinanciën waarvoor Nederland uiteindelijk de rekening betaalt."
            },
            {
                "party": "JA21",
                "statement": "De eurozone moet een economische eliteclub zijn. Daarom is strikte handhaving op Europese begrotingsafspraken (Stabiliteits- en groeipact) noodzakelijk. Als een land niet aan de afspraken voldoet moet het (al dan niet tijdelijk) uit de eurozone vertrekken."
            },
            {
                "party": "ChristenUnie",
                "statement": "De euro kent een aantal fundamentele gebreken die aan het licht komen in de verschillen in verdienvermogen en concurrentiepositie van de eurolanden. Het niet handhaven van begrotingsregels moet worden gesanctioneerd."
            },
            {
                "party": "SGP",
                "statement": "De SGP hecht aan een goed functionerend begrotingspact. Afspraak is afspraak! Landen moeten hun verdragsverplichtingen nakomen, zorgen voor voldoende buffers in hun begrotingen en te hoge staatsschulden verlagen. De eis van een begrotingstekort van maximaal 3% van het bbp blijft onverkort staan."
            },
            {
                "party": "BBB",
                "statement": "De fiscale afspraken binnen de EU staan naar de mening van BBB fier overeind. Lidstaten dienen hun begrotingstekorten onder controle te houden en te brengen."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Meer overheidsbestedingen wakkeren inflatie aan. Inflatie betekent hogere prijzen voor consumenten. Een hoger begrotingstekort, betekent ook een hogere staatschuld. Als de overheid meer schulden maakt leidt dit onherroepelijk tot hogere belastingen."
            },
            {
                "party": "BVNL",
                "statement": "BVNL is tegen collectieve schulden van de eurozone. Nederland moet niet meebetalen aan de Zuid-Europese schuldenlast en BVNL is tegen EU-fondsen en EU-belastingen."
            },
            {
                "party": "NSC",
                "statement": "Lidstaten zijn zelf verantwoordelijk voor een sluitende begroting en een houdbare staatsschuld. Dus een land mag geen groter begrotingstekort hebben dan 3% per jaar. De totale staatsschuld mag niet boven de 60% van het Bruto Binnenlands Product stijgen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor gezonde financiën. Een groter begrotingstekort dan 3% toestaan, bedreigt de financiële stabiliteit. Informeer jezelf: https://ppdg.eu"
            }
        ]
    },
    {
        "theme": "Landen uit de EU zetten",
        "title": "Het moet mogelijk worden om een land uit de EU te zetten als het zich niet aan de basisregels voor democratie en rechtsstaat houdt.",
        "info": "Om lid te kunnen worden van de EU moet een land een goed werkende democratie en rechtsstaat hebben. Dat betekent dat wetten en regels op een eerlijke manier worden gemaakt door mensen die daarvoor door de bevolking zijn gekozen. Bovendien moet iedereen, ook de regering en de politie, zich aan die wetten houden.\n\nAls een land eenmaal lid is van de EU, kan een regering minder eerlijke wetten invoeren. Het is nu niet mogelijk om een land uit de EU te zetten, het kan alleen vrijwillig vertrekken.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Wij beschermen de democratie. GroenLinks-PvdA loopt voorop met het nemen van maatregelen, zoals een boete, tegen landen die de rechtsstaat op het spel zetten. We sluiten geen instrument uit als de situatie dusdanig uit de hand loopt en een lidstaat een gevaar vormt voor andere landen in de Unie."
            },
            {
                "party": "VVD",
                "statement": "Stemrecht van een lidstaat opschorten moet makkelijker worden indien de rechtsstaat grof wordt geschonden. Ook moet de geldkraan van EU-geld dan worden dichtgedraaid. Indien deze maatregelen onvoldoende blijken, moet worden onderzocht of het uit de EU zetten de rechtsstaat en de EU ten goede komt."
            },
            {
                "party": "CDA",
                "statement": "Landen die lid willen worden van de EU zullen aan onze voorwaarden moeten voldoen. Landen die al lid zijn van de EU die lak hebben aan de rechtsstaat worden stevig aangepakt. Zij worden gekort op EU-fondsen of verliezen hun stemrecht in de EU-raden. Uittreding uit de EU is de ultieme sanctie"
            },
            {
                "party": "D66",
                "statement": "D66 wil vooroplopen om de rechtsstaat te beschermen. Autocratische leiders van EU-lidstaten mogen niet langer ongestraft wegkomen met schendingen. Daarom is D66 voor het eventueel ontnemen van stemrecht, stilleggen van EU-geldstromen en als laatste redmiddel om landen uit de EU te kunnen zetten."
            },
            {
                "party": "PvdD",
                "statement": "Europa spreekt zich uit tegen ecocide en het schenden van mensen- en dierenrechten. Lidstaten die grondrechten schenden, krijgen sancties opgelegd door de EU."
            },
            {
                "party": "50PLUS",
                "statement": "Er zijn regels voor toetreding tot de EU. Indien landen hier niet aan voldoen dan worden ze niet toegelaten. Maar eenmaal toegelaten leden moeten hieraan wel blijven voldoen. Indien je structureel hier niet aan wilt of kunt voldoen en strafmaatregelen niet helpen, dan moet je er vanaf kunnen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Een EU-lidstaat onderschrijft in principe de grondbeginselen van de EU. Een specifieke sanctiewet is wellicht een goed drukmiddel om een stabiele democratie te waarborgen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De Europese Unie bestaat bij de gratie van menselijke waardigheid, solidariteit en de democratische rechtsstaat. Wanneer hieraan getornd wordt dan ondermijnt dat de samenwerking binnen de Unie."
            },
            {
                "party": "SP",
                "statement": "Waarden zoals democratie, de rechtsstaat en de rechten van de mens zijn nooit vrijblijvend. Wanneer landen niet langer voldoen aan de toetredingscriteria, zullen wij voorstellen om sancties op te leggen. In het uiterste geval zullen wij voorstellen om het betreffende land uit de unie te verwijderen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Wij staan voor een vrij Europa, met stevige democratie en rechtsstaat. Wanneer lidstaten, na waarschuwingen sancties, waaronder het intrekken van stemrecht, een dictatoriaal bewind blijven voeren en mensenrechten blijven schenden. Dan wordt uitzetting als alleruiterste optie bespreekbaar. PPDG.EU"
            },
            {
                "party": "PVV",
                "statement": "De basisregels van de democratie en de rechtsstaat moeten worden gerespecteerd. Met dit voorstel bestaat echter het risico dat landen omwille van afwijkende politieke redenen door de EU worden bestraft. Met name kleinere lidstaten zijn in het Europees Parlement ondervertegenwoordigd en lopen hiermee het risico op (politieke) chantage door grotere lidstaten. De PVV staat dus neutraal tegenover deze stelling."
            },
            {
                "party": "JA21",
                "statement": "Wanneer landen basisregels met voeten treden is ingrijpen een logische stap. We zien in de praktijk echter dat de EU met twee maten meet en haar macht misbruikt door voornamelijk EU-kritische regeringen in het verdachtenbankje te plaatsen. Dat is kwalijk. Gelijke monniken, gelijke kappen."
            },
            {
                "party": "BBB",
                "statement": "BBB steunt de bescherming van de democratische rechtsstaat binnen de EU. Effectief optreden tegen lidstaten die deze principes schenden is belangrijk. De EU heeft krachtige instrumenten, maar deze moeten wel politiek neutraal blijven en niet als drukmiddel worden gebruikt."
            },
            {
                "party": "FvD",
                "statement": "De EU zet termen als democratie en rechtsstaat in als politiek wapen om landen te straffen wanneer zij simpelweg niet de gewenste politieke lijn volgen. Nederland moet niet meegaan in deze goedkope, politieke stemmingmakerij."
            },
            {
                "party": "SGP",
                "statement": "De lidstaten spreken elkaar aan op schendingen van de rechtstaat. Bij grove schendingen van de rechtstaat kan de Raad actie ondernemen om lidstaten te korten op EU-fondsen. Hieraan gaat een dialoog vooraf."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Dit is niet bevoordelijk voor de vrede. Sancties zijn een effectievere maatregel."
            },
            {
                "party": "Volt",
                "statement": "EU-landen moeten zich aan onze gezamenlijke democratische waarden houden. Als we landen uit de EU zetten, kunnen we er niet voor zorgen dat ze zich wél aan de regels houden en zijn inwoners er de dupe van. Volt wil andere consequenties, zoals het inhouden van subsidies en ontnemen van stemrecht."
            },
            {
                "party": "BVNL",
                "statement": "BVNL staat voor vruchtbare, economische samenwerking in Europa. Wat de regels voor het goed functioneren van een democratie en rechtsstaat zijn, is aan de individuele lidstaten zelf.  EU-lidstaten dienen zich aan de financiële regels te houden. Over al het andere beslissen de lidstaten zelf."
            },
            {
                "party": "NSC",
                "statement": "Er mag geen cent naar EU-landen die zich niet aan de basisregels van de democratie en rechtsstaat houden. Maar ze kunnen niet uit de EU gezet worden. Landen kunnen wel financieel gestraft worden en zij kunnen hun stemrecht verliezen in de Europese Raad. Hier is NSC voorstander van."
            }
        ]
    },
    {
        "theme": "Intensieve veeteelt",
        "title": "De EU moet stoppen met het subsidiëren van de intensieve veeteelt.",
        "info": "Bij intensieve veeteelt worden bijvoorbeeld varkens, koeien en kippen in een kleine ruimte gehouden voor zoveel mogelijk vlees, melkproducten en eieren. Subsidiëren betekent dat de overheid geld (subsidie) geeft aan een persoon, organisatie of activiteit om ze te helpen met wat ze doen.\n\nBoeren krijgen geld van de EU. Hoeveel geld ze krijgen, is afhankelijk van de hoeveelheid grond die ze bezitten. Hierbij wordt er geen rekening gehouden met de ruimte per dier.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Er gaan gigantische subsidies naar de vee-industrie in Europa. Met alle gevolgen van dien voor onze gezondheid, het dierenwelzijn en het klimaat. De Europese veestapel moet echt kleiner, mede door een verbod op megastallen en strengere dierenwelzijnseisen. We steunen veehouders die willen stoppen."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat de Europese subsidies moeten worden ingezet voor boeren die stappen zetten richting duurzame landbouw. De subsidies kunnen daarnaast gebruikt worden als inkomenssteun voor boeren die doen aan natuurbeheer."
            },
            {
                "party": "PvdD",
                "statement": "Geen miljardensubsidies meer voor megastallen! De huidige vervuilende en verwoestende Europese landbouw- en visserijsubsidies worden afgeschaft. Het bespaarde geld zetten we in om boeren en vissers te helpen omschakelen naar duurzame banen, plantaardige, biologische landbouw en natuurherstel."
            },
            {
                "party": "50PLUS",
                "statement": "Niet subsidiëren, maar zorgen dat de boer een goede prijs krijgt voor zijn (biologische) producten en dat zij niet worden uitgebuit door de grote winstmakende supermarktconcerns en veevoederbedrijven."
            },
            {
                "party": "PVV",
                "statement": "PVV is tegen subsidies, grote intensieve veehouderijen moeten hun eigen broek ophouden."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Een veeteeltbedrijf moet staan voor een diervriendelijke samenleving."
            },
            {
                "party": "ChristenUnie",
                "statement": "Nederlandse boeren leveren uitstekende producten die we dagelijks op ons bord vinden. Door het landbouwbeleid van de afgelopen decennia is het evenwicht tussen intensieve agrarische productie en de draagkracht van de bodem en de natuur echter verstoord. De ChristenUnie vindt dat dit anders moet."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "MDD is tegen intensieve veeteelt, omdat het dieronvriendelijk is. Subsidiëring door EU dient volgens de kandidaten MDD tot een minimum beperkt (of zelfs uitgebannen) te worden."
            },
            {
                "party": "SP",
                "statement": "Zo’n 80 procent van de Europese subsidies voor inkomensondersteuning van de boeren gaat naar 20 procent van de bedrijven. Dat zijn de grootste en meest intensieve bedrijven. Wij zijn niet tegen boeren. Sterker nog: de SP wil méér boeren. Die kleinschalig en schoner kunnen produceren."
            },
            {
                "party": "Volt",
                "statement": "We willen dat onze landbouw een toekomst heeft en gezond is voor mens, dier en natuur. Daarvoor moeten we investeren in natuurinclusieve landbouw en stoppen met het subsidieren van intensieve veeteelt. Die subsidies moeten worden ingezet om boeren te helpen die overgang te maken."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen willen vervuilende bedrijven zwaarder belasten, zodat de inkomstenbelasting verder omlaag kan. In plaats van subsidies uit te delen voor intensieve veeteelt, zouden deze vervuilende bedrijven juist meer belasting moeten betalen! Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "VVD",
                "statement": "De Nederlande intensieve veehouderij is enorm innovatief vergeleken met andere EU-landen. Desondanks is het voor de intensieve veehouderij belangrijk dat zij toegang hebben tot sommige subsidies voor innovatie, het verbeteren van dierenwelzijn en verduurzaming."
            },
            {
                "party": "CDA",
                "statement": "Het toekomstig Gemeenschappelijk Landbouwbeleid wordt stap voor stap vernieuwd naar beloning voor maatschappelijke, innovatieve en groene diensten die veehouders en telers vervullen, maar dat moeten we nadrukkelijk wel stap voor stap doen"
            },
            {
                "party": "FvD",
                "statement": "FVD wil uit de EU, en controle terugpakken over onze eigen regels. Maar zolang we nog deel uitmaken van de EU zien wij geen enkele reden om subsidies weg te nemen van de intensieve veeteelt."
            },
            {
                "party": "JA21",
                "statement": "Er moet flink bezuinigd worden op de enorme hoeveelheden landbouwsubsidies, die vooral vloeien naar achterhaalde bedrijfsmodellen van Zuid- en Oost-Europese boeren. Op kosten van onze boeren. In een vrije markt, met minder (strenge) wet- en regelgeving, zullen de Nederlandse boeren juist profiteren."
            },
            {
                "party": "SGP",
                "statement": "Het Gemeenschappelijk Landbouwbeleid wordt eenvoudiger en de basissteun wordt niet belast met voorwaarden die onvoldoende aansluiten bij de praktijk. Extra inspanningen op het vlak van natuur worden beloond."
            },
            {
                "party": "BBB",
                "statement": "De Europese veehouderij draagt bij aan voedselzekerheid en produceert tegen de hoogste mondiale normen. Daarom blijven landbouwsubsidies van groot belang voor het betaalbaar voeden van heel Europa met gezonde dierlijke en plantaardige eiwitten."
            },
            {
                "party": "BVNL",
                "statement": "BVNL is tegen subsidies en voor het langzaam afbouwen van bestaande landbouwsubsidies. Maar onmiddellijk stoppen is de doodsklap voor de boeren. Er moet dus een afbouwtraject komen met een herstelplan waarbij boeren een goede boterham kunnen verdienen en onze voedselzekerheid wordt gewaarborgd."
            },
            {
                "party": "NSC",
                "statement": "De intensieve veehouderij zal geleidelijk meer grondgebonden en circulair moeten worden, meer moeten bijdragen aan biodiversiteit, landschap en dierenwelzijn en aan verminderde risico’s voor de volksgezondheid. NSC vindt dat de Europese subsidies ingezet moeten worden om hieraan bij te dragen. Stoppen met subsidiëren is iets anders dan op een andere manier dezelfde sector subsidiëren."
            }
        ]
    },
    {
        "theme": "Arbeidsmigratie binnen EU",
        "title": "EU-landen moeten zelf kunnen beslissen of ze werknemers uit andere lidstaten toelaten.",
        "info": "Burgers in de Europese Unie mogen nu werken in elk land dat lid is van de EU. Dat maakt het makkelijker voor mensen uit armere landen, waar weinig werk is en de lonen laag zijn, om te verhuizen naar rijkere landen, waar meer werk is en waar ze meer kunnen verdienen. Landen mogen de komst van werknemers uit andere EU-landen niet beperken of verhinderen.",
        "results": [
            {
                "party": "CDA",
                "statement": "Het CDA wil dat de lidstaten meer sturingsmogelijkheden krijgen inzake arbeidsmigratie. Daarbij moeten lidstaten de mogelijkheid hebben om te bepalen welk type arbeidsmigranten (en in welke sector) zij verwelkomen. Hiertoe gaan we in EU het debat aan over de reikwijdte van vrij verkeer van personen"
            },
            {
                "party": "FvD",
                "statement": "FVD wil de controle over onze grenzen en ons migratiebeleid terugpakken. Ook arbeidsmigratie moet beperkt kunnen worden."
            },
            {
                "party": "PvdD",
                "statement": "De Partij voor de Dieren wil de positie van arbeidsmigranten verbeteren en Nederland minder afhankelijk maken van buitenlandse werknemers. Er moet een onderzoek komen tot herinvoering van tewerkstellingsvergunningen voor werknemers van binnen de Europese Economische Ruimte (EER)."
            },
            {
                "party": "PVV",
                "statement": "Binnen de EU geldt vrij verkeer van personen. Eenmaal een status in EU land dan krijgt zo’n buitenlandse werknemer het recht om door te reizen naar ons land. Gezien de gigantische tekorten op de huizenmarkt zou het goed zijn als EU landen zelf besluiten wat het beste is voor hun land en bevolking."
            },
            {
                "party": "JA21",
                "statement": "Nederland is de grip op arbeidsmigratie volkomen verloren. Ongereguleerde arbeidsmigratie heeft een grote negatieve impact op de leefbaarheid in onze steden. JA21 is voor een werkvergunningsstelsel waarbij lidstaten weer zelf kunnen bepalen hoeveel arbeidsmigranten per sector worden toegelaten."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil dat het mogelijk wordt voor lidstaten om onderling afspraken te maken over arbeidsmigratie. Deze afspraken gaan bijvoorbeeld over maatregelen die invloed kunnen hebben op het aantal arbeidsmigranten of de duur van de arbeidsperiode."
            },
            {
                "party": "SGP",
                "statement": "Lidstaten moeten de bevoegdheid krijgen om werkvergunningen in te voeren voor arbeiders uit andere EU-lidstaten. Momenteel zijn er immers teveel problemen met huisvesting en de impact van forse groepen arbeidsmigranten op de samenleving is te groot. Voor seizoensarbeid kunnen uitzonderingen gelden."
            },
            {
                "party": "BBB",
                "statement": "Momenteel kan Nederland zelf geen keuzes maken over de instroom van Europese arbeidsmigranten. Dit zijn oude Europese regels, BBB zou deze graag vernieuwen om het mogelijk te maken voor Nederland om te kiezen welke arbeidsmigranten we willen hebben."
            },
            {
                "party": "SP",
                "statement": "Ongecontroleerde arbeidsmigratie leidt tot sociale dumping: uitbuiting, leegloop van landen en ontworteling van gemeenschappen. Vooral de werkgevers profiteren van arbeidsmigratie, terwijl publieke voorzieningen en de volkshuisvesting onder druk staan."
            },
            {
                "party": "BVNL",
                "statement": "Dit is inderdaad het recht van iedere soevereine lidstaat."
            },
            {
                "party": "GL-PvdA",
                "statement": "Dit gaat in tegen het verdrag én een van de basisprincipes van de Europese Unie: vrij verkeer van personen en het recht om overal in de EU te wonen en werken, waar ook veel Nederlanders gebruik van maken. Wanneer we dat loslaten, kan onze interne markt niet goed meer werken."
            },
            {
                "party": "VVD",
                "statement": "De VVD vindt het vrije verkeer van personen in de EU een groot en belangrijk goed. Desondanks blijft de VVD wel oog houden voor de draagkracht van arbeidsmigratie en diens negatieve aspecten in de samenleving. Waar nodig zal de overheid extra maatregelen moeten nemen om overlast aan te pakken."
            },
            {
                "party": "D66",
                "statement": "Een groot deel van onze welvaart danken we aan vrijhandel in Europa. We zetten het fundament van de Europese samenwerking op losse schroeven als we vrij reizen voor geschoolde werknemers onmogelijk maken. D66 wil wel arbeidsmigratie terugdringen in sectoren zoals slachthuizen en distributiecentra."
            },
            {
                "party": "50PLUS",
                "statement": "Binnen Europa is er vrij verkeer van arbeidersmigranten. Dit recht treft de basis van wat de EU is. Arbeidsmigranten zijn wel ons grootste probleem op de woningmarkt en bij de sociale voorzieningen en zorgen bovendien voor een groeiende groep daklozen."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Het vrije verkeer van werknemers is een van de grondbeginselen van de EU. Een lidstaat stelt zelf de voorwaarden voor verblijf en het uitoefenen van een beroep op haar grondgebied."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Vrij verkeer van personen en de mogelijkheid om in een andere lidstaat te werken is van de belangrijke pijlers van de Europese unie. MDD steunt de waarden en principes van de Europese Unie."
            },
            {
                "party": "Volt",
                "statement": "De vrijheid om in heel de EU te kunnen werken is cruciaal voor onze economie en werkgelegenheid. Volt is dan ook tegen het beperken van die vrijheid."
            },
            {
                "party": "NSC",
                "statement": "We houden ons aan de afspraken van Schengen (vrij verkeer van personen), maar tegelijkertijd zijn er ook oneigenlijke bewegingen ontstaan. We maken afspraken met andere lidstaten hoe we de onderlinge arbeidsmigratie regelen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een vrij Europa. Het recht om je vrij te bewegen binnen de EU is een essentieel mensenrecht. Landen kunnen natuurlijk wel hun economie aanpassen om de noodzaak tot arbeidsmigratie te beperken. Informeer jezelf: https://ppdg.eu/"
            }
        ]
    },
    {
        "theme": "Europese treinen",
        "title": "De EU moet geld steken in uitbreiding van het netwerk van Europese treinen.",
        "info": "In Europa kunnen mensen en spullen vrij de grens over. Toch zijn de treinen vaak heel nationaal en sluiten bijvoorbeeld de sporen van EU-landen niet altijd op elkaar aan. In 2023 is de EU op kleine schaal begonnen om dit te verbeteren.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Reizen met de trein zou de meest makkelijke én betaalbare optie moeten zijn in Europa. Daarom willen wij echt werk maken van een Europees netwerk van snelle (nacht)treinen, een Europese dienstregeling en een handig boekingssysteem om treinkaartjes te kopen."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil investeringen in internationaal vervoer per trein zodat dit makkelijker en goedkoper wordt. Het beter op elkaar laten aansluiten van de verschillende nationale spoornetbeheerders is bijvoorbeeld een belangrijke stap."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil investeren in een Europees hogesnelheidsnetwerk en goede nachtverbindingen tussen Europese grote steden. Daarnaast willen we treinverkeer aantrekkelijker te maken met kaartjes voor de hele reis van start tot finish (‘through tickets’)."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat de hogesnelheidstrein een duurzaam, bereikbaar en betaalbaar alternatief wordt voor vliegen. Daarom willen we investeren in nieuwe verbindingen, betere dienstverleningen en willen we het eenvoudiger maken om tickets te boeken."
            },
            {
                "party": "PvdD",
                "statement": "Er komt een Europees masterplan om het openbaar vervoer per trein (en bus) fors uit te breiden. De EU investeert in een betaalbaar en toegankelijk Europees treinnetwerk en dringt erop aan dat EU-landen de btw op internationale treintickets afschaffen."
            },
            {
                "party": "50PLUS",
                "statement": "De trein is een milieuvriendelijk vervoermiddel. Bevordering van het internationaal spoorverkeer bij grensovergangen is zeer welkom."
            },
            {
                "party": "NL PLAN EU",
                "statement": "NL PLAN EU is voor een goedkoop, snel en betrouwbaar hogesnelheidslijnnetwerk om grote Europese steden te verbinden, en daarmee milieuvervuilend vliegverkeer en autogebruik te verminderen. De treinreisprijs moet ook concurrerend zijn t.o.v. een vliegticket. Waardevolle natuur wordt beschermd."
            },
            {
                "party": "ChristenUnie",
                "statement": "Om te zorgen dat de trein hét alternatief wordt voor het vliegtuig voor reizen tot 1000 kilometer binnen Europa willen we investeren in een Europees railnetwerk waarbij de nationale netwerken beter op elkaar aansluiten."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil een snel internationaal treinnetwerk met goede bereikbaarheid van grote delen van Europa, zodat treinreizen een serieus alternatief wordt voor vliegen. Daarom wil de SGP dat zowel de EU als de lidstaten fors investeren in grensoverschrijdende treinverbindingen."
            },
            {
                "party": "BBB",
                "statement": "Treinen kunnen een goed alternatief bieden voor korteafstandsvluchten en zijn belangrijk voor grensregio’s. Als tickets betaalbaar worden en er genoeg bestemmingen zijn dan kan dit flinke klimaatwinst opleveren."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "De onafhankelijke kandidaten van MDD vinden het belangrijk dat burgers nu en in de toekomst zich betaalbaar kunnen verplaatsen. Wat heb je aan een recht van vrij bewegen als het onbetaalbaar en dus onuitvoerbaar is. Reizen met de trein is duurzaam, veilig, betrouwbaar, toegankelijk voor iedereen."
            },
            {
                "party": "SP",
                "statement": "Samen met de spoorwegbedrijven uit andere landen breiden we het aantal treinverbindingen in Europa uit. We bouwen aan een Europees breed netwerk van hogesnelheidstreinen zoals deze al bestaan binnen landen."
            },
            {
                "party": "Volt",
                "statement": "De trein moet een écht alternatief worden voor vliegen. Volt wil dat reizen met de trein makkelijker en goedkoper wordt in heel de EU. Meer bestemmingen, betere en snellere verbindingen en goedkopere treinkaartjes. Zo kun jij nog steeds makkelijk, betaalbaar én schoon op reis."
            },
            {
                "party": "NSC",
                "statement": "We zetten in op een betaalbaar en toegankelijk Europees hsl-treinnetwerk. De verbindingen tussen de grote steden in Europa worden verbeterd, zodat het aandeel korteafstandsvluchten kan worden beperkt."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor 'de vervuiler betaalt'. We willen internationale treinreizen goedkoper maken, zodat de duurzame optie niet langer de dure optie is. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "FvD",
                "statement": "FVD vindt dergelijke spoorverbindingen een positieve ontwikkeling, maar wij zijn van mening dat lidstaten dit prima onderling kunnen regelen. Het is niet nodig is om deel uit te maken van de Europese Unie om dit te faciliteren."
            },
            {
                "party": "PVV",
                "statement": "We krijgen het in Nederland niet eens voor elkaar om onze eigen treinen fatsoenlijk te laten rijden. Zuurverdiend Nederlands belastinggeld moeten we daarom niet uitgeven aan spoorprojecten in het buitenland, maar in Nederland!"
            },
            {
                "party": "JA21",
                "statement": "JA21 is groot voorstander van het uitbreiden en verbeteren van het netwerk van treinverbindingen in Europa. Het is echter niet aan de EU om hier geld in te steken. Dit is primair een opgave voor lidstaten onderling."
            },
            {
                "party": "BVNL",
                "statement": "De EU moet zich hier niet mee bemoeien. Dit kunnen soevereine landen prima zelf onderling regelen. Een goede infrastructuur is essentieel maar er is hier geen rol voor de EU."
            }
        ]
    },
    {
        "theme": "Asiel aanvragen buiten EU",
        "title": "Asielzoekers moeten hun asielaanvraag indienen in landen buiten de EU en daar afwachten of ze in de EU mogen komen wonen.",
        "info": "Mensen die op de vlucht zijn voor oorlog of vervolging in hun eigen land kunnen in de EU asiel krijgen. Maar zij moeten wel eerst naar Europa komen om asiel aan te vragen. Het is nu niet mogelijk om buiten de EU asiel aan te vragen in een Europees land.",
        "results": [
            {
                "party": "VVD",
                "statement": "Registratie en identificatie van asielzoekers vinden buiten de EU plaats, gevolgd door een procedure om de asielaanvraag te controleren. Asielzoekers die weinig of geen kans maken op een vluchtelingenstatus worden snel teruggestuurd."
            },
            {
                "party": "CDA",
                "statement": "Wat het CDA betreft krijgen asielzoekers uit veilige landen een versnelde procedure aan de buitengrens en krijgen geen toegang tot het grondgebied van de EU. Afgewezen asielzoekers keren vanuit de grensprocedure terug naar het land van herkomst."
            },
            {
                "party": "FvD",
                "statement": "FVD wil stoppen met de massale en alsmaar voortgaande instroom van kansarme migranten uit Afrika en het Midden-Oosten. Faciliteer desnoods opvang in de regio, maar onder geen beding mag de Europese grensbewaking, Frontex, doorgaan met de huidige pendeldienst."
            },
            {
                "party": "50PLUS",
                "statement": "Geeft duidelijkheid en controle op wie binnenkomt. Hierdoor wordt voorkomen dat er gevaarlijke overtochten zijn en de asielzoekers maandenlang door Europa zwerven."
            },
            {
                "party": "PVV",
                "statement": "Het maakt weinig uit waar asielzoekers hun asielaanvraag indienen. Zolang de optie bestaat dat Nederland toch het eindstation wordt zal de toestroom en instroom niet significant dalen. Vluchtelingen moeten in hun eigen regio worden opgevangen en voor gelukzoekers hebben we hier gewoon geen ruimte meer."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil geen asielopvang in Nederland. Asielzoekers dienen opgevangen te worden in de eigen regio of in partnerlanden. De uitkomst van zo'n procedure kan wat ons betreft dus geen opvang in de EU zijn. De komst van kansloze asielzoekers voorkomen is echter een eerste stap in de goede richting."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Idealiter zou er zo een betere verdeling van asielzoekers over Europa kunnen plaatsvinden. Met ondersteuning van het EU-agentschap voor asielzaken (EASO) kan het beheer van migratie in de EU effectiever en duurzamer worden."
            },
            {
                "party": "ChristenUnie",
                "statement": "In principe wel. Echter, niet in alle landen buiten de EU kunnen veilige aanmeldcentra komen. Daarom moeten er ook aan de buitengrenzen van Europa veilige aanmeldmogelijkheden zijn. Hierbij gelden dezelfde voorwaarden als bij aanmeldcentra buiten de EU."
            },
            {
                "party": "BBB",
                "statement": "Dit noemen we het externaliseren van asielprocedures. Het garandeert dat Europa niet overspoeld wordt met vluchtelingen. BBB wil asielprocedures én -opvang buiten de EU vormgeven."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "De aanvraag moet zo dicht mogelijk bij land van herkomst plaatsvinden. MDD pleit dat na vaststelling een uitnodiging en ticket van een EU-lidstaat volgen voor veilige overkomst naar Europa. Dit voorkomt overbelasting van asielcentra, dodelijke smokkelroutes en geldstromen naar dictators."
            },
            {
                "party": "SP",
                "statement": "SP is niet principieel tegen migratieafspraken, op voorwaarde dat de opvang op een menswaardige manier  plaatsvindt. Met een goede overeenkomst zouden opvangcentra buiten de EU mogelijk moeten zijn. Alle eventuele afspraken met derde landen zullen in overeenstemming zijn met internationaal recht."
            },
            {
                "party": "BVNL",
                "statement": "Prima 1e stap, verder wil BVNL per direct een asielstop invoeren en wil het strenge grensbewaking aan de buitengrenzen van de EU. BVNL is voor opvang in de regio."
            },
            {
                "party": "NSC",
                "statement": "NSC staat voor een krachtige reductie van het migratiesaldo. Onderdeel hiervan is het weren van kansarme asielzoekers aan de buitengrenzen en hen laten huisvesten in gesloten opvang om teruggestuurd te worden naar het land van herkomst."
            },
            {
                "party": "GL-PvdA",
                "statement": "Mensen die naar Europa zijn gevlucht vanwege oorlog of geweld, die zullen we nooit wegsturen. Om grip op migratie te krijgen, zorgen wij voor betere reguliere routes en een eerlijke verdeling van de opvang. Ook zorgen we dat mensen die geen asiel krijgen, echt terugkeren."
            },
            {
                "party": "D66",
                "statement": "D66 wil het verdienmodel van mensensmokkelaars doorbreken met veilige en legale vluchtroutes. Daarom moet het mogelijk zijn om buiten de EU een aanvraag te doen. Het recht op een asielaanvraag op Europese grond zal wat D66 betreft wel blijven bestaan voor mensen op de vlucht."
            },
            {
                "party": "PvdD",
                "statement": "Iedereen die in de Europese Unie asiel aanvraagt, heeft recht op een zorgvuldige asielprocedure. De EU ziet erop toe dat de lidstaten zorgen voor een eerlijke en snelle asielprocedure en voor een humane opvang."
            },
            {
                "party": "SGP",
                "statement": "Het is goed om te voorkomen dat migranten de gevaarlijke oversteek over de Middellandse Zee wagen. We moeten de drempel om asiel aan te vragen echter niet te zeer verlagen. De SGP bepleit dat lidstaten zelf vrij zijn om humanitaire visa af te geven aan personen buiten de EU."
            },
            {
                "party": "Volt",
                "statement": "We willen dat vluchtelingen hun asielprocedure kunnen aangaan in het land waar ze uiteindelijk terechtkomen. Het moet daar dan ook mogelijk zijn om tegelijkertijd te integreren."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor internationale mensenrechten. Wanneer mensen vluchten bestaat vaak niet de mogelijkheid om in het land van herkomst een asielaanvraag in te dienen, dus dit kun je niet eisen. Informeer jezelf: https://ppdg.eu"
            }
        ]
    },
    {
        "theme": "Stagevergoeding",
        "title": "Het moet in de hele EU verplicht worden om stagiairs een vergoeding te betalen.",
        "info": "Stagiairs lopen in het kader van hun opleiding een tijdje mee bij een bedrijf, overheidsinstelling of andere werkplek. Ze worden opgeleid en nemen meestal ook werkzaamheden op zich. Sinds dit jaar is het in Nederland verplicht om stagiairs een vergoeding te betalen. Dat is niet in alle EU-landen het geval.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Een stage is heel leerzaam, en nuttig voor zowel de stagiair als het stagebedrijf, maar het is wel zo eerlijk dat je als stagiair een vergoeding krijgt voor je stagewerk. Of je een vergoeding krijgt moet niet afhangen van het EU-land waar je stage loopt."
            },
            {
                "party": "CDA",
                "statement": "Wat het CDA betreft is het niet meer dan normaal stagiairs een vergoeding te geven voor geleverde diensten, korte meeloopstages zijn hiervan uitgesloten."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat stagiairs een eerlijke vergoeding moeten krijgen voor hun werk. Daarom willen we dat regelen voor bedrijven in Nederland, maar ook voor alle Europese bedrijven. Anders krijgen Nederlandse bedrijven oneerlijke concurrentie uit andere landen waar ze deze vergoeding niet hoeven te geven."
            },
            {
                "party": "PvdD",
                "statement": "Werkgevers worden verplicht een fatsoenlijke stagevergoeding te betalen aan hun stagiairs."
            },
            {
                "party": "50PLUS",
                "statement": "Ieder land moet de hoogte van de vergoeding zelf bepalen."
            },
            {
                "party": "PVV",
                "statement": "Het zou wel zo netjes zijn als stagiairs een stagevergoeding krijgen voor het werk dat ze verrichten. De PVV is hier dus voorstander van."
            },
            {
                "party": "NL PLAN EU",
                "statement": "De stagiair moet beschermd worden tegen uitbuiting. Een vergoeding van de werkelijke kosten voor levensonderhoud is reëel."
            },
            {
                "party": "SP",
                "statement": "Stagiairs krijgen een eerlijke vergoeding en worden niet misbruikt als goedkope arbeidskrachten. Maar regels rond de hoogte van de stagevergoeding worden nationaal bepaald."
            },
            {
                "party": "Volt",
                "statement": "Als je werkt, heb je recht op eerlijke vergoeding. Stagiairs dus ook. Iedereen die stage loopt moet daarvoor een vergoeding krijgen. Bij een fulltime stage moet dat wat Volt betreft in Nederland minimaal 550 euro per maand zijn. Dat is eerlijk en voorkomt dat studenten onnodig in de schulden raken."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor internationale mensenrechten. We staan voor stevige rechten voor arbeiders en zijn tegen tegen elke vorm van dwangarbeid. Voor stagiairs dient er altijd goede begeleiding en een eerlijke stagevergoeding te zijn. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "VVD",
                "statement": "EU-landen moeten zelf blijven gaan over sociale zaken en werkgelegenheid."
            },
            {
                "party": "FvD",
                "statement": "FVD is voor het geven van vergoedingen aan stagiairs, maar is van mening dat lidstaten zelf hier over moeten beslissen en niet de Europese Unie"
            },
            {
                "party": "JA21",
                "statement": "Dit is aan lidstaten zelf. De Europese Unie moet zich niet bemoeien met onze arbeidsvoorwaarden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Werknemers die in hetzelfde land werken moeten gelijk loon voor gelijk werk ontvangen ongeacht geslacht, nationaliteit of de vestiging van het hoofdkantoor. Tegelijkertijd is dit aan lidstaten om te bepalen, maar wat ons betreft zou het goed zijn als elk EU-land dit zou doen."
            },
            {
                "party": "SGP",
                "statement": "Het sociale beleid is aan lidstaten en dat moet zo blijven. In de landen van de EU zijn er immers veel verschillende tradities, culturen en welvaartsniveaus. Het is niet nodig om over te gaan tot een algehele harmonisatie van sociale zekerheidsstelsels in de EU."
            },
            {
                "party": "BBB",
                "statement": "BBB wil dat stagiairs een eerlijke stagevergoeding krijgen. Maar de hoogte daarvan is geen EU-bevoegdheid, en dus regelen we dat in Nederland"
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Stageplekken zijn ultra belangrijk. En wij zijn voor stagevergoedingen. Echter vinden wij niet dat dit door EU geregeld moet worden. Het risico loop je dat het aantal stageplekken naar beneden gaat omdat er organisaties zullen zijn die zich dit niet kunnen veroorloven. Ook is de EU hier niet toe bevoegd."
            },
            {
                "party": "BVNL",
                "statement": "De EU moet zich hier helemaal niet mee bemoeien. Soevereine lidstaten kunnen dit prima zelf bepalen."
            },
            {
                "party": "NSC",
                "statement": "Inkomensbeleid en sociale regelingen als minimumloon of stagevergoeding moeten nationaal worden geregeld."
            }
        ]
    },
    {
        "theme": "Grenscontroles in EU",
        "title": "Er moeten weer grenscontroles komen tussen de landen van de EU.",
        "info": "De meeste landen van de EU behoren tot de Schengenzone. Reizigers tussen landen die allebei in de Schengenzone zitten, kunnen de grens oversteken zonder grenscontroles. Goederen kunnen binnen de hele EU grenzen over zonder grenscontroles omdat er vrij verkeer van goederen is. Als grenscontroles opnieuw worden ingevoerd, controleert de douane bij de grens identiteitsbewijzen en soms wat mensen meenemen.",
        "results": [
            {
                "party": "FvD",
                "statement": "FVD wil de controle terugpakken over onze grenzen, om de massale en alsmaar voortgaande instroom van kansarme migranten uit Afrika en het Midden-Oosten te stoppen. Naar voorbeeld van BREXIT streven wij naar volledige uittreding en het herpakken van onze complete soevereiniteit."
            },
            {
                "party": "PVV",
                "statement": "Zonder grenscontroles kunnen terroristen, zware criminelen en vooral veel mensensmokkelaars vrijelijk hun gang gaan. Om Nederland veiliger te maken en vooral ook om illegale migratie tegen te kunnen gaan moet Nederland de mogelijkheid krijgen om de eigen grenzen te bewaken."
            },
            {
                "party": "JA21",
                "statement": "De Europese buitengrenzen moeten hermetisch worden afgesloten voor illegale migratie, zodat reizigers aan de binnengrenzen zo min mogelijk hinder hoeven te ondervinden. Zolang de buitengrenzen echter nog zo lek zijn als een mandje, moet Nederland grensbewaking invoeren (art. 25 Schengengrenscode)."
            },
            {
                "party": "BBB",
                "statement": "BBB wil gerichte grenscontroles zoals Denemarken die uitvoert tegen migratie, criminaliteit en kidnapping. Om dit werkbaar te maken bieden nieuwe cameratechnieken en kunstmatige intelligentie uitkomst."
            },
            {
                "party": "BVNL",
                "statement": "Per direct een asielstop invoeren, hierbij kunnen grenscontroles tussen EU-lidstaten (tijdelijk) helpen. Verder grensbewaking aan de buitengrenzen van de EU."
            },
            {
                "party": "NSC",
                "statement": "Nieuw Sociaal Contract is voor een krachtige reductie van het migratiesaldo. Als het richtgetal voor migratie overschreden dreigt te worden, worden aanvullende maatregelen getroffen. Dan maken wij met bepaalde EU-landen afspraken over aanvullende controles aan de gezamenlijke ‘binnengrenzen’."
            },
            {
                "party": "ChristenUnie",
                "statement": "Wat de ChristenUnie betreft is er op dit moment geen noodzaak om grenscontroles in te voeren. Tegelijkertijd zou dat in de (nabije) toekomst wel nodig kunnen zijn. Er rust geen taboe op het strenger controleren van grenzen."
            },
            {
                "party": "SGP",
                "statement": "Bij gevaarlijke situaties of een situatie waarbij grote groepen ongereguleerde asielzoekers een land binnenkomen, mag een lidstaat zelf beslissen om tijdelijk grenscontroles in te voeren. Uiteraard moet dit in overleg met de buurlanden en niet langer dan noodzakelijk."
            },
            {
                "party": "GL-PvdA",
                "statement": "Vrij verkeer van personen en goederen zijn een belangrijk deel van de Europese Unie. Zo hebben we samen een interne markt. We zien de gevolgen van de Brexit: gigantische files aan de grens. Juist Nederland is gebaat bij open grenzen, voor onze economie en voor iedereen die vaak naar buurlanden reist."
            },
            {
                "party": "VVD",
                "statement": "Vrij reizen door de EU is een groot goed. Dit is belangrijk voor reizigers maar ook voor onze handel. Echter vindt de VVD dat er in geval van crisissituaties zoals een grote instroom van migranten wel tijdelijke grenscontroles ingevoerd mogen worden, zoals een mini-Schengenzone."
            },
            {
                "party": "CDA",
                "statement": "Wij geloven dat dit voor een open economie als Nederland schadelijk is. Wel wil het CDA dat lidstaten meer sturingsmogelijkheden krijgen op het gebied van arbeidsmigratie en willen daar in de EU het gesprek over aangaan."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat we goede Europese afspraken moeten maken hoe we asielzoekers eerlijk verdelen over de lidstaten. Dat maakt grenscontroles overbodig. Grenscontroles leiden niet tot minder migratie en zijn slecht voor de economie omdat ze vrij handelen en reizen onmogelijk maken."
            },
            {
                "party": "PvdD",
                "statement": "De Partij voor de Dieren is voorstander van vrij reizen binnen de Schengenzone van de Europese Unie."
            },
            {
                "party": "50PLUS",
                "statement": "Je moet geen middelen uitsluiten om de migratiecrisis op te lossen. Maar de EU is juist gebaseerd om vrij verkeer in Europa te creëren. Heilloze weg en dit is echt schadelijk voor de economie."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Het Schengenakkoord heeft juist als doel grenscontroles in de EU af te schaffen. Bij aanhoudende terreurdreiging en onvoorziene grote stromen vluchtelingen geldt een tijdelijke uitzondering."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Deze maatregel brengt kosten met zich mee, en er wordt niets opgelost. Het ondermijnt één van de essentiële Europese kernwaarden van vrij verkeer. Alleen in uitzonderlijke situaties zoals in geval van terrorisme kan een uitzondering worden gemaakt."
            },
            {
                "party": "SP",
                "statement": "We moeten werken aan een beter Europees migratiebeleid en we voeren een vergunningsplicht in voor arbeidsmigratie."
            },
            {
                "party": "Volt",
                "statement": "Dankzij de open grenzen is handelen en reizen in de EU goedkoper en makkelijker. Volt zet in op betere bescherming en controle van de buitengrenzen van de Europese Unie."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een vrij Europa. Grenscontroles tussen EU-landen zijn een onnodige vrijheidsbeperking. Wij willen juist minder controle en surveillance en meer vrijheid. Informeer jezelf: https://ppdg.eu"
            }
        ]
    },
    {
        "theme": "Recht op abortus",
        "title": "De EU moet het recht op abortus erkennen als een grondrecht.",
        "info": "Bij een abortus wordt een zwangerschap beëindigd door een dokter. EU-landen hebben eigen regels over abortus. Frankrijk is het enige land met abortus als grondrecht. In Nederland is abortus toegestaan tot 24 weken, maar dat ligt niet vast als grondrecht. Malta is het enige EU-land waar abortus onder alle omstandigheden verboden is.\n \nAls abortus wordt opgenomen in het Handvest van de Grondrechten van de Europese Unie, kunnen mensen bij een rechter afdwingen dat het mag. Landen kunnen het dan niet meer volledig verbieden.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Helaas zijn er nog steeds landen in Europa waarin 'baas in eigen buik' nog niet geldt en het zelfbeschikkingsrecht onder druk staat. Daarom is het belangrijk dat de Europese Unie zich hierover uitspreekt en het recht op abortus verankerd wordt in de Europese grondrechten."
            },
            {
                "party": "VVD",
                "statement": "Abortus is in Nederland al toegestaan. De VVD vindt dat alle vrouwen in de EU hier recht op hebben."
            },
            {
                "party": "D66",
                "statement": "D66 wil het recht op abortus in Europese verdragen vastleggen. Hierdoor houden vrouwen in Europa toegang tot veilige en betaalbare abortuszorg."
            },
            {
                "party": "PvdD",
                "statement": "We zijn voorstander ervan om het recht op abortus op te nemen in het Handvest van de grondrechten. Eenieder heeft het recht op veilige en legale abortus."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Vrouwen moeten zelf over hun lichaam kunnen beslissen. Abortustoerisme is onwenselijk."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Wij staan volledig achter de erkenning van abortus als grondrecht. Erkenning betekent dat er een keuze is en dat het niet moet. Vrijheid van keuze is belangrijk."
            },
            {
                "party": "Volt",
                "statement": "Zelfbeschikking is belangrijk. Je moet zelf keuzes kunnen maken over je lichaam. Daarom moet abortus uit het wetboek van strafrecht en het recht op abortus vastgelegd worden als Europees grondrecht."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor internationale mensenrechten. Abortus is onderdeel van het zelfbeschikkingsrecht en van het recht op medische zorg. Dat zou niet af moeten hangen van waar je woont. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "CDA",
                "statement": "Dit is een nationale aangelegenheid en wat het CDA betreft blijft dit ook zo"
            },
            {
                "party": "FvD",
                "statement": "FVD vindt abortus geen normale medische ingreep: het is niet gericht op het beschermen van leven, maar op het beëindigen ervan. Het moet dus ook niet als een grondrecht worden behandeld. Daarnaast is FVD van mening dat lidstaten zelf hier over moeten beslissen en niet de Europese Unie"
            },
            {
                "party": "50PLUS",
                "statement": "Moet ieder land zelf bepalen. Niet alle volken hebben hier eenzelfde mening over en dit moet gekoesterd worden. Volksgezondheid valt momenteel niet onder de EU."
            },
            {
                "party": "PVV",
                "statement": "Ethische kwesties zoals abortus zijn een nationale aangelegenheid. De Europese Commissie moet zich daar verre van houden."
            },
            {
                "party": "JA21",
                "statement": "Dit onderwerp hoort thuis in lidstaten zelf, waar burgers zich er in democratische verkiezingen over kunnen uitspreken."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie zal het belang van menselijke waardigheid en het recht op leven ook op de EU-agenda blijven uitdragen en staat afwijzend tegenover Europese voorstellen die ‘beschermwaardigheid van het leven’ inperken. Het past daarom niet om abortus als mensenrecht te kwalificeren."
            },
            {
                "party": "SGP",
                "statement": "Het kwetsbare (ongeboren) leven verdient bescherming. Abortus is geen mensenrecht en wordt op grond van de Bijbel afgewezen."
            },
            {
                "party": "BBB",
                "statement": "Regels over medisch-ethische vraagstukken zijn voor BBB een nationale aangelegenheid en een terrein waarop de EU zich niet dient te begeven."
            },
            {
                "party": "SP",
                "statement": "Europa gaat niet over ons zorgstelsel. De SP vindt het recht op abortus erg belangrijk en steunt de strijd voor veilige en legale abortussen wereldwijd. Hoe een lidstaat zijn abortusbeleid invult is vervolgens wel een nationale aangelegenheid waar de EU zich niet mee moet bemoeien."
            },
            {
                "party": "BVNL",
                "statement": "Abortus is een individuele kwestie en vrouwen moeten dit helemaal zelf kunnen beslissen. Nederland heeft een goede abortuswet en dat willen we zo houden. De EU mag niet voor afzonderlijke lidstaten bepalen wat de grondrechten zijn."
            },
            {
                "party": "NSC",
                "statement": "De waarden en normen van gemeenschappen worden door NSC gerespecteerd en niet opgelegd door de EU. Dit blijft een nationale competentie."
            }
        ]
    },
    {
        "theme": "Gekozen voorzitter EC",
        "title": "De voorzitter van de Europese Commissie moet rechtstreeks door de inwoners van de EU worden gekozen.",
        "info": "De Europese Commissie (EC) is een soort regering van de EU. Er zit voor elk land één commissaris in de EC.\n\nHet Europees Parlement wordt gekozen door de inwoners van de EU en controleert de Europese Commissie. De regeringen van de EU-landen moeten akkoord gaan met de benoeming van alle commissarissen en van de voorzitter van de Europese Commissie. Ook het Parlement moet akkoord gaan met de benoemingen.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 wil een democratisch Europa. D66 wil dat de voorzitter van de Europese Commissie een rechtstreeks mandaat van kiezers krijgt. Dat draagt bij aan een democratischer Europa en betere verantwoording aan kiezers."
            },
            {
                "party": "PvdD",
                "statement": "Een groot deel van de Brusselse macht ligt bij de Europese Commissie, een ondemocratisch bestuursorgaan waar burgers en volksvertegenwoordigers nauwelijks vat op hebben. Het rechtstreeks kiezen van de voorzitter van de Europese Commissie draagt bij aan het democratiseren van de EU."
            },
            {
                "party": "50PLUS",
                "statement": "Dit zou de interesse en het draagvlak voor Europa goed doen, vooral omdat de burger iets meer invloed krijgt."
            },
            {
                "party": "NL PLAN EU",
                "statement": "NL PLAN EU is voor directe democratie. Een selectie van geschikte kandidaten kan voor de verkiezing worden aangewezen."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Wij zijn voor een beter democratisch en integer openbaar bestuur. Wij zijn in principe voor, maar er moet wel goed nagedacht worden over een methode waardoor het mogelijk blijft voor kandidaten van kleine landen om verkozen te worden."
            },
            {
                "party": "BVNL",
                "statement": "Democratie terug naar de mensen. Geen schimmige benoemingen maar directe democratie. BVNL is daarom ook voor een bindend referendum."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een democratisch Europa. Wij willen de EU democratischer maken door de Europese Commissie rechtstreeks te verkiezen, en het Europees Parlement de macht te geven leden van de Europese Commissie te ontslaan. Informeer jezelf: https://ppdg.eu/"
            },
            {
                "party": "PVV",
                "statement": "De PVV is geen voorstander van de ongekozen Europese Commissie. Het direct kunnen kiezen van de voorzitter van de Europese Commissie door de inwoners van de EU zou een kleine stap in de goede richting zijn om enige democratische controle op dit bureaucratisch moloch uit te oefenen."
            },
            {
                "party": "GL-PvdA",
                "statement": "De voorzitter van de Europese Commissie moet worden gekozen op basis van de verkiezingsuitslag. Dat is democratischer dan het achterkamertjesproces zoals dat nu vaak plaatsvindt. Directe verkiezingen zijn hiervoor niet het juiste instrument."
            },
            {
                "party": "VVD",
                "statement": "Momenteel dragen de EU-lidstaten samen de voorzitter van de Europese Commissie voor. De voorzitter van de Europese Commissie wordt verkozen in het Europees Parlement, door de gekozen volksvertegenwoordigers. Deze procedure biedt volgens de VVD reeds voldoende draagvlak en democratische legitimiteit."
            },
            {
                "party": "CDA",
                "statement": "Het CDA ziet nu geen reden om deze rol rechtstreeks verkozen te maken"
            },
            {
                "party": "FvD",
                "statement": "Een gekozen voorzitter van de Europese Commissie zou een verlies van de democratische legitimiteit en de soevereiniteit van onze eigen nationale overheid betekenen. FVD wil de soevereiniteit van Nederland volledig terugpakken en zeker niet verder overhandigen aan de EU."
            },
            {
                "party": "JA21",
                "statement": "Het kiezen van de voorzitter van de Europese Commissie klinkt misschien leuk, maar betekent in de praktijk dat de EC ten onrechte de schijn van democratische legitimiteit krijgt. De EC is een compleet uit de kluiten gewassen secretariaat dat fors moet worden gesaneerd."
            },
            {
                "party": "ChristenUnie",
                "statement": "Om de democratische legitimiteit van besluitvorming te vergroten, moeten de Europese Raad en het Europees Parlement voorafgaand aan de verkiezingen een benoemingsprocedure vaststellen voor de voorzitter van de Europese Commissie."
            },
            {
                "party": "SGP",
                "statement": "De SGP is tegen het werken met ‘Spitzenkandidaten’, waarbij leiders van de politieke fracties strijden om het voorzitterschap van de Europese Commissie. De Commissie moet meer gaan functioneren als een politiek-neutrale ambtelijke organisatie."
            },
            {
                "party": "BBB",
                "statement": "Dit zou de Europese Commissie nog meer macht geven, dat wil BBB voorkomen."
            },
            {
                "party": "SP",
                "statement": "Lidstaten moeten weer gaan bepalen waar Europa zich mee bezig houdt. We hebben dus geen Europese regering nodig die het beleid bepaalt, en daarom al helemaal geen gekozen voorzitter van de Commissie."
            },
            {
                "party": "Volt",
                "statement": "De EU moet democratischer. Daarom wil Volt een Europese regering die de huidige Europese Commissie vervangt. Met daarin een minister-president die door de leden van het Europees Parlement gekozen wordt. Tot die tijd zou het Europees Parlement de voorzitter van de Europese Commissie moeten kiezen."
            },
            {
                "party": "NSC",
                "statement": "De Europese Unie was, is en wordt geen supranationale staat met een staatshoofd (wel of niet gekozen)."
            }
        ]
    },
    {
        "theme": "Verbod glyfosaat",
        "title": "De EU moet het gebruik van landbouwgif met glyfosaat volledig verbieden.",
        "info": "Boeren gebruiken gif om ervoor te zorgen dat de eetbare planten niet in de weg gezeten worden door onkruid of beestjes. Met het landbouwgif glyfosaat kan je onkruid voor meerdere jaren bestrijden. Landbouwgif komt bij gebruik ook in de lucht, de bodem en het water terecht. Daardoor kunnen mensen kleine hoeveelheden glyfosaat binnenkrijgen.\n\nBoeren en telers in de EU mogen de komende 10 jaar landbouwgif met glyfosaat gebruiken. In Nederland mogen mensen glyfosaat alleen in hun (landbouw)bedrijf en niet in hun tuin gebruiken.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Chemische bestrijdingsmiddelen zoals glyfosaat zijn ontzettend slecht voor de natuur, en bovendien schadelijk voor de gezondheid van boeren en anderen die ermee in aanraking komen. Daarom vindt GroenLinks-PvdA dat glyfosaat in de Europese Unie verboden zou moeten worden."
            },
            {
                "party": "D66",
                "statement": "D66 is hiervoor omdat er aanwijzingen zijn dat het gebruik ziektes als Parkinson kan veroorzaken. Ook kan glyfosaat onze natuur en ons drinkwater beschadigen. Er zijn veiligere manieren om gewassen te beschermen tegen insecten en ziekten. Daar zet D66 op in."
            },
            {
                "party": "PvdD",
                "statement": "Glyfosaat, waarvan al lang is aangetoond dat het zeer schadelijk is voor mens, dier en natuur, wordt per direct in heel Europa verboden."
            },
            {
                "party": "50PLUS",
                "statement": "Een van kerntaken van de EU is bescherming van de volksgezondheid en bescherming van de natuur."
            },
            {
                "party": "PVV",
                "statement": "Glysofaat is schadelijk voor de bijen, de belangrijkste bestuivers van de bomen en planten waar wij van eten. Het tekort aan bijen brengt de bestuiving van productiegewassen in gevaar."
            },
            {
                "party": "NL PLAN EU",
                "statement": "De EU mag de goedkeuring voor 10 jaar van dit bestrijdingsmiddel, dat als antibiotica werkt, niet doorvoeren. Negatieve effecten op bodem-diversiteit, in het water levende organismen en mens (41 procent meer kans op non-Hodgkin-lymfoon en Parkinson) moeten worden voorkomen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is fel tegen tegenstander van het langer gebruiken van glyfosaat. Hoe eerder we van dit middel af zijn, hoe beter het is."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "Er is discussie over de veiligheid van het gebruik. Wij willen dat voor gebruik of voor verkoop van chemische landbouwmiddelen aangetoond wordt dat er geen ernstige schade, zoals bijvoorbeeld kanker en Parkinson, aan de gezondheid wordt aangericht."
            },
            {
                "party": "SP",
                "statement": "Wij zijn tegen het gebruik van glyfosaat; het is een schande dat de EU heeft besloten dit nog 10 jaar toe te staan. Er moet alsnog zo snel mogelijk een verbod op komen."
            },
            {
                "party": "Volt",
                "statement": "Landbouwgif met glysofaat is schadelijk voor mens, dier en natuur. Wij willen dat iedereen gezond is én blijft. Daarom moeten alle chemische stoffen die onze gezondheid en onze natuur schaden verboden worden."
            },
            {
                "party": "NSC",
                "statement": "NSC maakt zich zorgen over de alarmerende onderzoeksresultaten met betrekking tot glyfosaat. Miljoenen mensen lopen hiermee mogelijk een verhoogd risico op de ziekte van Parkinson. Glyfosaat zou zo snel als mogelijk verboden moeten worden en tegelijkertijd moet de EU werken aan alternatieven."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor bescherming van mens, dier en natuur. Glyfosaat veroorzaakt ziekte en sterfte onder omwonenden en het ecosysteem. Dit bedreigt de voedselzekerheid en de volksgezondheid. Er bestaan bovendien prima alternatieven. Informeer jezelf: https://ppdg.eu"
            },
            {
                "party": "VVD",
                "statement": "De VVD vindt dat de toelating van gewasbeschermingsmiddelen zoals glyfosaat gebaseerd moet zijn op de wetenschap. Aangezien de wetenschappers van de Europese Autoriteit voor Voedselveiligheid glyfosaat als veilig middel hebben beoordeeld, hoeft deze dus niet verboden te worden."
            },
            {
                "party": "CDA",
                "statement": "Gewasbeschermingsmiddelen moeten we pas verbieden als er een goed (milieuvriendelijker) alternatief is. Wat het CDA betreft zetten we stevig in op innovatie op dit gebied"
            },
            {
                "party": "FvD",
                "statement": "Meerdere Europese instanties bestempelen deze stof momenteel als 'veilig'. Daarnaast zijn er op dit moment onvoldoende alternatieve stoffen om aan de vraag van de landbouwsector te voldoen. Daarom wil FVD deze stof nu niet verbieden."
            },
            {
                "party": "JA21",
                "statement": "Strenge Brusselse natuur- en milieuwetgeving waarvan het effect op datzelfde milieu dubieus is, brengt boeren en vissers aan de bedelstaf. Er moet een pas op de plaats worden gemaakt in plaats van de agrarische sector te confronteren met nog meer regels en beperkingen."
            },
            {
                "party": "SGP",
                "statement": "Boeren en tuinders moeten voldoende middelen hebben om plantgezondheid te waarborgen. Een goed gevulde medicijnkast is onmisbaar voor effectieve inzet van middelen op het moment dat het nodig is. Regelgeving moet vooral gericht zijn op het verminderen van de aantasting van het milieu."
            },
            {
                "party": "BBB",
                "statement": "Het is belangrijk dat we genoeg voedsel hebben om iedereen te voeden. Veilige gewasbeschermingsmiddelen kunnen daarin een belangrijke bijdrage leveren. BBB aanvaardt de wetenschappelijke bevindingen van de onafhankelijke toelatingsautoriteit EFSA over de veiligheid van werkzame stoffen."
            },
            {
                "party": "BVNL",
                "statement": "Daar gaan de lidstaten zelf over. Boeren en vissers moeten worden gekoesterd, in plaats van verjaagd. EU-regelgeving op het gebied van landbouw en natuur wordt drastisch teruggeschroefd en gebaseerd op wetenschappelijk aantoonbare feiten en effectiviteit."
            }
        ]
    },
    {
        "theme": "Wapens voor Oekraïne",
        "title": "De EU moet meer wapens voor Oekraïne betalen.",
        "info": "In 2022 is Rusland een oorlog begonnen tegen Oekraïne. De Europese Unie heeft sancties ingesteld tegen Rusland. Rusland kan daardoor geen zaken meer doen in de EU. Ook draagt de EU bij aan de verdediging van Oekraïne door wapens voor het land te betalen. Sommige lidstaten dragen ook in hun eentje bij.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Rusland kan en mag deze oorlog niet winnen, want daarmee staan de vrede en veiligheid in heel Europa op het spel. Daarom blijft Nederland wat GroenLinks-PvdA betreft een leidende rol spelen in het bijstaan van Oekraïne. Ook scherpen we de sancties tegen Rusland verder aan."
            },
            {
                "party": "VVD",
                "statement": "Oekraïne is illegaal binnengevallen door Rusland en heeft het recht op zelfverdediging. Rusland is de grootste veiligheidsdreiging voor het Europese continent. De EU heeft de verantwoordelijkheid en het belang om meer wapens aan Oekraïne te leveren."
            },
            {
                "party": "CDA",
                "statement": "Wat het CDA betreft moeten we tot het uiterste gaan om deze oorlog op ons continent winnend af te kunnen sluiten"
            },
            {
                "party": "D66",
                "statement": "Poetin mag de oorlog niet winnen. Dat maakt Europa en Nederland ook onveilig. Daarom moet de steun aan Oekraïne doorgaan. Er zijn al initiatieven van EU-landen om wapens en financiering aan Oekraïne te leveren. Dit moet wat D66 betreft worden voortgezet zolang het nodig is."
            },
            {
                "party": "PvdD",
                "statement": "De Partij voor de Dieren veroordeelt de ongekende Russische agressie tegen Oekraïne. In het licht van oorlog aan de directe grenzen van de Europese Unie is het belangrijk om samen te werken en onderlinge solidariteit te tonen."
            },
            {
                "party": "50PLUS",
                "statement": "Uiteindelijk is de NAVO ons defensiebondsgenootschap. De financiering van wapens kan wat ons betreft via de EU lopen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De EU blijft onverminderde steun geven aan Oekraïne om zich te verdedigen tegen de Russische agressie."
            },
            {
                "party": "SGP",
                "statement": "De SGP is voor ruimhartige politieke, militaire en humanitaire steun aan Oekraïne – zónder de oorlog tot de onze te maken en mét de bereidheid tot het sluiten van vrede."
            },
            {
                "party": "Volt",
                "statement": "Deze oorlog laat zien dat onze veiligheid niet vanzelfsprekend is. Door Oekraine te blijven steunen, beschermen we ook onze eigen waarden en democratie tegen Poetin. De EU moet Oekraïne daarom ondersteunen met wapens en andere middelen, zo lang als dat nodig is."
            },
            {
                "party": "NSC",
                "statement": "NSC steunt de gezamenlijke koop van wapens door de EU namens alle lidstaten, bestemd voor Oekraïne. Dit kan in de toekomst verhoogd worden."
            },
            {
                "party": "PVV",
                "statement": "De PVV is bereid om te spreken over steun voor Oekraïne in haar strijd tegen de Russische agressor. Dit betekent niet per se dat we de EU het mandaat willen geven om zich (nog verder) in deze oorlog te mengen. Dit is een debat dat primair in Nederland gevoerd dient te worden."
            },
            {
                "party": "JA21",
                "statement": "JA21 steunt Oekraïne in de strijd tegen de Russische agressie. Steun aan Oekraïne is echter aan lidstaten zelf, en niet aan de EU. Het staat lidstaten vrij dit via de Raad van de Europese Unie te doen."
            },
            {
                "party": "BBB",
                "statement": "BBB steunt de huidige militaire steun aan de verdediging van Oekraïne. Dit doen wij samen met bondgenoten, waarvan we verwachten dat zij elk hun bijdrage leveren. Defensie is geen EU-bevoegdheid. BBB is tegen Europese defensieschulden (defense bonds)."
            },
            {
                "party": "Meer Directe Democratie",
                "statement": "We moeten investeren in vrede. Met alleen geld voor wapens wordt volgens de onafhankelijke kandidaten van MDD het probleem niet opgelost."
            },
            {
                "party": "FvD",
                "statement": "FVD wil inzetten op een snelle beëindiging van het conflict in Oekraïne. Onze huidige financiële steun prolongeert de oorlog alleen maar. Wij willen hiermee stoppen en inzetten op vrede."
            },
            {
                "party": "NL PLAN EU",
                "statement": "Het begunstigen van het militair-industrieel complex verlaagt de kans op vrede. Met de destabilisatie van de Europese veiligheidsorde is een gemeenschappelijk veiligheids- en defensiebeleid cruciaal om burgers van de EU te beschermen en internationale vrede en veiligheid te versterken."
            },
            {
                "party": "SP",
                "statement": "De SP heeft veel wapenleveranties kunnen steunen, maar heeft bij elke levering van wapens opnieuw de afweging gemaakt of het vrede dichterbij brengt en of het de verdediging van Oekraïne helpt. Maar we moeten waken voor een wapenwedloop."
            },
            {
                "party": "BVNL",
                "statement": "Meer wapens leidt niet tot vrede. Diplomatieke initiatieven zijn prima, maar geen geld, wapens of soldaten naar Oekraïne."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor vrede en veiligheid. Zolang Rusland niet instemt met een staakt-het-vuren en terugtrekking uit de bezette gebieden in Oekraïne, blijven wij Oekraïne steunen met wapens. We stemmen er niet mee in om onvoorwaardelijk meer wapens te sturen dan we al doen. PPDG.EU"
            }
        ]
    }
];

const data2023 = [
    {
        "theme": "Vee",
        "title": "De regering moet ervoor zorgen dat de hoeveelheid vee minstens de helft kleiner wordt.",
        "info": "In Nederland houden boeren veel dieren, zoals koeien, kippen, varkens en schapen, voor hun vlees of andere producten zoals melk, eieren en wol. Een deel van die producten verkopen ze in Nederland en een deel in het buitenland. De dieren zorgen voor vervuiling met stoffen als methaan, een gas dat bijdraagt aan klimaatverandering, en stikstof, dat slecht is voor kwetsbare natuurgebieden.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 zet in op een duurzame landbouwtransitie waarbij boeren met minder vee straks alsnog een goede boterham kunnen verdienen. Er is nu te veel vee in een klein land als Nederland, met negatieve gevolgen voor klimaat en de gezondheid van de natuur."
            },
            {
                "party": "GL-PvdA",
                "statement": "We hebben veel te veel vee in Nederland en dat betekent een hoop vervuiling. Het gevolg: schade aan de natuur, dierenleed in de stal en risico's voor onze gezondheid. Wij willen werken aan een duurzame landbouw met minder dieren. Samen met al die boeren die dat ook willen."
            },
            {
                "party": "PvdD",
                "statement": "Om dierenleed terug te dringen, klimaat-, stikstof- en waterdoelen te halen en de kans op uitbraken van op mensen overdraagbare dierziektes te beperken, verkleinen we de veehouderij met minstens 75% binnen twee jaar. Boeren helpen we overschakelen op duurzaam geteelde plantaardige eiwitgewassen."
            },
            {
                "party": "BIJ1",
                "statement": "De bio-industrie moet afgebouwd worden en uiteindelijk verdwijnen. Dit moet deels gebeuren door het uitkopen, sluiten en onteigenen van grote intensieve veehouders (megastallen). Daarnaast moet de overheid sterk investeren in diervriendelijkere landbouw en nieuwe initiatieven daartoe ondersteunen."
            },
            {
                "party": "Splinter",
                "statement": "Het tegengaan van stikstofuitstoot, herstel van de natuur, het bevorderen van dierenwelzijn en het voorkomen van zoönosen (van dier-op-mens overdraagbare ziekten) zijn prioriteit voor Splinter."
            },
            {
                "party": "LEF",
                "statement": "Er leven te veel dieren op te weinig oppervlakte. Dat maakt mensen en dieren ziek. En het bodemleven sterft door een teveel aan stikstof. Daardoor komt onze voedselvoorziening op de lange termijn in gevaar. Bovendien is al die zuivel en vlees bestemd voor het buitenland. Overproductie is niet nodig."
            },
            {
                "party": "Volt",
                "statement": "De intensieve veehouderij past niet in de nieuwe landbouw. Verschillende Europese landen hebben veel strengere normen op het aantal dieren dan Nederland. Volt wil met een verbod op megastallen weer een Europese koploper worden."
            },
            {
                "party": "VVD",
                "statement": "Het is belangrijk dat we aan de slag gaan en op korte termijn zorgen voor stikstofreductie, herstel van de natuur en toekomstperspectief voor ondernemers. De aanpak moet gericht zijn op het verminderen van de stikstofuitstoot, niet op de hoeveelheid vee als doel."
            },
            {
                "party": "PVV",
                "statement": "Onze boerensector is de beste ter wereld! Hardwerkende boeren zorgen voor ons dagelijks voedsel. Daarom: houd onze voedselvoorziening in eigen land en bied de boeren een goed toekomstperspectief en een eerlijke prijs."
            },
            {
                "party": "CDA",
                "statement": "Ook de komende jaren zal de agrarische sector inzetten op verdere verduurzaming en het beperken van emissies. De maatregelen die hiervoor genomen worden kunnen effect hebben op dieraantallen, maar krimp van de veestapel is geen doel op zich."
            },
            {
                "party": "SP",
                "statement": "De hoeveelheid vee zal flink krimpen als het aan ons ligt, omdat wij dierenwelzijnsnormen zullen aanscherpen en daarop zullen handhaven. De grootschalige bio-industrie die vooral gericht is op export moet stoppen. Halvering is geen doel op zich. We maken boeren met kleinere aantallen dieren mogelijk"
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat boeren gewoon moeten kunnen boeren. De stikstofproblematiek is enkel een probleem op papier. We moeten af van de modellenwereld en terug naar de echte wereld."
            },
            {
                "party": "ChristenUnie",
                "statement": "Wat de ChristenUnie betreft moeten stikstofemissies, zowel ammoniak als stikstofoxiden, met de helft omlaag. Dat is het doel, niet de halvering van de veestapel. Reductie van stikstof is goed voor de natuur. Alle sectoren dragen hieraan hun evenredige steentje bij."
            },
            {
                "party": "JA21",
                "statement": "Wij koesteren onze agrarische sector en de veeteelt. JA21 is dan ook tegen het inkrimpen van de veestapel. Onze landbouw, veeteelt en visserij zijn van cruciaal belang voor de voedselzekerheid. We stoppen dan ook met het gedwongen inkrimpen van onze veeteeltsector. JA21 laat de boeren weer boeren."
            },
            {
                "party": "SGP",
                "statement": "Het is goed om boeren die willen stoppen omdat ze bijvoorbeeld geen opvolger hebben daarbij te helpen. De SGP wil echter niet sturen op halvering van de veehouderij. Onze boeren doen het internationaal gezien goed als het gaat om klimaat en dierenwelzijn. De akkerbouw heeft ook dierlijke mest\nnodig."
            },
            {
                "party": "DENK",
                "statement": "Het bevorderen van het dierenwelzijn is uiterst belangrijk. Daarvoor is een minder intensieve veehouderij nodig. Tegelijkertijd willen wij dat de boeren hun boterham kunnen verdienen en ons van voldoende voedsel kunnen voorzien. Daarom zijn wij niet voor een zeer verregaande halvering."
            },
            {
                "party": "50PLUS",
                "statement": "Een kleinere veestapel is zeker wenselijk alleen dient voor 50PLUS de leefomstandigheden van dieren leidend te zijn in het te bepalen van de te houden maximum aantallen dieren."
            },
            {
                "party": "BBB",
                "statement": "BBB zet zich in voor het belang van voedselzekerheid en een gezonde economie. BBB is tegen halvering van de veestapel. Boeren leveren essentiële diensten en producten en een grote maatschappelijke bijdrage aan natuur-, landschapsbeheer en leefbaarheid op het platteland."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een betrouwbare overheid. Ineens de veestapel halveren is een enorme koerswijziging, en laat grote vervuilende industrie buiten schot. Bovendien is het de verkeerde uitkomstmaat. Stuur liever op stikstof en vervuiling, niet op de grootte van de veestapel."
            },
            {
                "party": "BVNL",
                "statement": "BVNL ziet dat het aantal zetels bij partijen die stellen dat de veestapel minstens met de helft kleiner wordt smelt als sneeuw voor de zon. En dat is maar goed ook, want zonder boeren, geen eten. Wij koesteren onze boeren en zijn trots op deze prachtige sector."
            },
            {
                "party": "NSC",
                "statement": "De hoeveelheid vee moet beter afgestemd worden op de milieugebruiksruimte en de beschikbare grond in Nederland. In de veeteelt zetten we verdere stappen richting een toekomstige landbouw, die meer in evenwicht is met de omgeving."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Boeren moeten de kans krijgen om te herstellen van decennia van overheidsregulering, die de Libertaire Partij direct wil afschaffen. In de vrije markt binnen een sterke rechtsstaat, zoals wij voorstaan, zal vanzelf blijken wat een duurzame veepopulatie is."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Het houden van vee is belangrijk voor onze eigen voedselvoorziening."
            }
        ]
    },
    {
        "theme": "Lagere prijs benzine",
        "title": "De accijns op benzine, gas en diesel moet omlaag.",
        "info": "Accijns is een belasting op producten. De overheid gebruikt accijns om producten duurder te maken. Dit moet ervoor zorgen dat mensen door hoge kosten minder gaan gebruiken van die producten. De overheid wil met een hoge accijns op gas, diesel en benzine dat mensen zuiniger auto’s kopen en minder rijden.",
        "results": [
            {
                "party": "VVD",
                "statement": "Om te zorgen dat autorijden betaalbaar blijft, willen we de accijnzen aan de pomp verlagen. Daarnaast willen we de reiskostenvergoeding verhogen. Dat helpt ook mensen die met het OV naar hun werk gaan."
            },
            {
                "party": "PVV",
                "statement": "We betalen ons blauw aan benzine, gas en diesel. Dat is onacceptabel. De PVV wil daarom de accijns omlaag."
            },
            {
                "party": "CDA",
                "statement": "Voor het CDA geldt het principe: \"de vervuiler betaalt\", maar dat mag niet betekenen dat prijzen zó hoog worden dat mensen met lage of middeninkomens die afhankelijk zijn van een auto de kosten niet meer kunnen dragen, of dat mensen in grensregio's massaal over de grens gaan tanken."
            },
            {
                "party": "SP",
                "statement": "Het leven is al veel te duur. De accijns zijn al (tijdelijk) verlaagd en de SP steunt dat. Als er niets gebeurt, dan gaan de accijns per 2024 weer (flink) omhoog en dan zullen wij pleiten voor verlaging. Ook de prijsstijgingen in het OV willen we schrappen. Vervoer moet voor iedereen betaalbaar zijn"
            },
            {
                "party": "FVD",
                "statement": "FVD wil accijns en wegenbelasting omlaag en het kwartje van Kok teruggeven. Nederland mag niet langer het duurste autoland van Europa zijn."
            },
            {
                "party": "JA21",
                "statement": "De auto wordt steeds meer een melkkoe van de Nederlandse overheid. De brandstofprijzen schieten door het dak.  Benzine in Nederland is zelfs het duurste van heel Europa. Dat komt door de hoge accijnzen. JA21 wil de accijnzen op benzine, diesel en lpg fors verlagen."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil de accijnzen verlagen. Door de hoge accijnzen is autorijden voor veel mensen nauwelijks meer te betalen. De belasting op bijvoorbeeld brandstof is al heel hoog, daar moet verandering in komen."
            },
            {
                "party": "DENK",
                "statement": "Nederland heeft de hoogste brandstofprijzen in Europa. Die mogen daarom fors omlaag."
            },
            {
                "party": "50PLUS",
                "statement": "Vanwege de accijns op autobrandstof wordt het autorijden voor veel mensen. Ook voor mensen die volledig afhankelijk zijn van hun eigen mobiliteit om van A naar B te kunnen komen. 50PLUS wil dat die mobiliteit gegarandeerd blijft."
            },
            {
                "party": "BBB",
                "statement": "BBB erkent de financiële last van hoge brandstofprijzen voor burgers en ondernemers. Door de accijnzen te verlagen, wordt mobiliteit toegankelijker en wordt economische activiteit in alle regio’s gestimuleerd, met bijzondere aandacht voor de agrarische en transport sector."
            },
            {
                "party": "BIJ1",
                "statement": "Alhoewel BIJ1 het van uiterst belang acht dat er radicale stappen worden genomen om de uitstoot te verlagen, moeten de lasten van klimaatbeleid eerlijk verdeeld worden. Autorijden moet betaalbaar blijven zolang het openbaar vervoer nog niet toegankelijk en betaalbaar is voor iedereen."
            },
            {
                "party": "BVNL",
                "statement": "Alhoewel de benzine en diesel volgend jaar, mede dankzij BVNL, niet duurder wordt, zijn de Nederlandse accijnzen nog steeds torenhoog. Daarom zetten wij in op verdere verlaging van de accijns op benzine, gas en diesel."
            },
            {
                "party": "NSC",
                "statement": "Bij accijns op brandstoffen streven we, mede vanwege de grenseffecten, naar beperkte verschillen met andere landen."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Koopkracht moet zo snel mogelijk worden hersteld doormiddel van het afschaffen van accijns. Hogere welvaart leidt tegelijk tot een grotere zorg voor de leefomgeving."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Brandstof moet betaalbaarder worden!"
            },
            {
                "party": "D66",
                "statement": "D66 wil dat het betaalbaar is om van A naar B te komen. Daarom kiezen we voor investeringen in het OV en meer steun voor lage inkomens. Mensen kunnen zo zelf bepalen waar ze het extra geld aan uitgeven. Ook wil D66 een klimaatticket in het OV invoeren voor een laag bedrag per maand."
            },
            {
                "party": "GL-PvdA",
                "statement": "We moeten minder fossiele brandstoffen gebruiken. Daarom stimuleren wij het gebruik van ov, elektrische fietsen en elektrische auto's. Ook gaan mensen betalen naar verbruik. Regio's waar mensen afhankelijk zijn van de auto, omdat het openbaar vervoer geen goed alternatief is, betalen minder."
            },
            {
                "party": "PvdD",
                "statement": "Om de klimaatdoelen te halen moeten we zo snel mogelijk van fossiele brandstoffen af. De accijns hierop gaat juist omhoog, we verbieden fossiele reclame en er komt een waarschuwing op verkooppunten van fossiele brandstof, vliegreizen, cruisereizen en voertuigen met een fossiele brandstofmotor."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil het fiscaal veel minder aantrekkelijk maken om het klimaat en de leefomgeving te belasten. Daarom willen we stoppen met fossiele fiscale voordelen. Een accijnsverlaging past daar niet bij."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat de belasting op vervuilend verbruik van fossiele grondstoffen verhogen. Dit is essentieel voor de transitie naar een klimaatneutraal Nederland en Europa."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Accijnzen op brandstof mogen omhoog, als de overheid compenseert middels lagere wegenbelasting. De vervuiler betaalt. Belastingen en accijnzen moeten op Europees niveau geharmoniseerd worden. Piratenpartij - De Groenen zijn voor belasting op grondstoffen."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is geen voorstander van het verlagen van de accijns, maar we willen ook geen verhoging. Veel mensen zijn afhankelijk van hun auto en we willen geen mobiliteitsarmoede in de hand werken voor mensen die een elektrische auto niet kunnen betalen."
            },
            {
                "party": "LEF",
                "statement": "Fossiele brandstof moet zo snel mogelijk worden uitgefaseerd. Lagere accijnzen geven een verkeerd signaal. Autorijden brengt veel verborgen kosten met zich mee. LEF is voor een gezonde samenleving waar meer gefietst en gewandeld wordt en alle voorzieningen binnen 15 minuten afstand te vinden zijn."
            }
        ]
    },
    {
        "theme": "Eigen risico zorgverzekering",
        "title": "Het eigen risico bij zorgverzekeringen moet worden afgeschaft.",
        "info": "Alle volwassenen in Nederland moeten zich verzekeren tegen ziektekosten met een basisverzekering. De kosten van de zorg voor zieke mensen worden zo verdeeld onder alle Nederlanders. Elk jaar betaal je de eerste 385 euro aan zorgkosten zelf, dat heet het eigen risico. Mensen die meestal gezond zijn, maar zo nu en dan zorg nodig hebben, betalen dit bedrag het ene jaar wel en het andere jaar niet. Maar mensen met een chronische ziekte betalen dit bedrag elk jaar. Als het eigen risico wordt afgeschaft, gaat de maandelijkse premie voor iedereen omhoog.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "Iedereen kan ziek worden, daarop hoort geen boete te staan. Het is eerlijk en solidair om deze kosten te verdelen. Door het eigen risico stapsgewijs af te schaffen en de zorgpremie te verlagen, is de zorgtoeslag niet meer nodig. Zo versimpelen we ook het toeslagenstelsel."
            },
            {
                "party": "PVV",
                "statement": "Het hoge eigen risico in de zorg is voor veel mensen onbetaalbaar en leidt tot het mijden van zorg. Dat leidt tot grote gezondheidsschade. Zorg moet voor iedereen toegankelijk zijn. Daarom schaft de PVV het eigen risico af."
            },
            {
                "party": "SP",
                "statement": "Het eigen risico is een boete op ziek zijn. Mensen met een chronische ziekte betalen dit bovendien elk jaar en andere mensen kunnen de kosten niet opbrengen. Dat is oneerlijk. Het is eerlijker en socialer om de zorgkosten inkomensafhankelijk te maken."
            },
            {
                "party": "PvdD",
                "statement": "Het eigen risico leidt ertoe dat mensen zorg mijden uit angst voor hoge kosten. We schaffen zowel het eigen risico als de eigen bijdrage voor chronisch zieken af. Het ziekenfonds voeren we weer in, met een uitgebreide dekking (zoals voor mondzorg, fysiotherapie en anticonceptie)."
            },
            {
                "party": "DENK",
                "statement": "Het hoge eigen risico raakt vooral lagere inkomens. Zij vermijden zorg uit angst voor de rekening. Dat is onacceptabel. Het eigen risico dient daarom worden afgeschaft."
            },
            {
                "party": "50PLUS",
                "statement": "Het eigen risico is ooit in het leven geroepen om de zorgvraag te verminderen maar is ondertussen verworden tot een extra belasting. 50PLUS acht dat onwenselijk en wil dat het eigen risico wordt afgeschaft."
            },
            {
                "party": "BBB",
                "statement": "BBB wil het eigen risico sterk verlagen en indien mogelijk de komende jaren afschaffen. Het idee is dat eigen betalingen ervoor zorgen dat onnodig zorggebruik wordt tegengegaan. Maar in de praktijk is het eigen risico een straf op (chronisch) ziek zijn."
            },
            {
                "party": "BIJ1",
                "statement": "Wat BIJ1 betreft moet zorg voor iedereen gratis zijn."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen vinden goede, betaalbare basisvoorzieningen een essentieel onderdeel van bestaansrecht. Het verplichte eigen risico is een straf op (chronisch) ziek zijn. Het leidt tot het uitstellen of vermijden van zorg. Dat is gevaarlijk en heeft uiteindelijk hogere kosten tot gevolg."
            },
            {
                "party": "BVNL",
                "statement": "Er zou een bepaalde vorm van eigen risico kunnen blijven om misbruik te voorkomen maar het eigen risico is op dit moment voor veel mensen zo hoog dat het dan beter afgeschaft kan worden."
            },
            {
                "party": "Splinter",
                "statement": "Een eigen risico werkt \"zorg mijden\" in de hand. Op de lange termijn veroorzaakt uitgestelde zorg voor meer complexe zorg en hogere zorgkosten. Het is belangrijk dat zorg toegankelijk blijft voor mensen met een laag inkomen."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Het is aan individuen om hun eigen risicobereidheid te bepalen. De overheid moet daarom niet langer het minimale verzekeringspakket of het eigen risico vaststellen."
            },
            {
                "party": "LEF",
                "statement": "LEF wil universele zorg zonder eigen risico. Zorg is een recht, geen verdienmodel. Zorgmijding moet koste wat kost voorkomen worden. We willen dat iedereen naar de tandarts, huisarts en ziekenhuis kan zonder angst om met schulden opgezadeld te worden."
            },
            {
                "party": "VVD",
                "statement": "We zorgen dat het eigen risico niet omhoog gaat. Het eigen risico blijft wel nodig om te voorkomen dat de zorgkosten en de premie die mensen betalen verder stijgen."
            },
            {
                "party": "D66",
                "statement": "D66 wil voorkomen dat de zorgpremie met honderden euro's omhoog gaat door het afschaffen van het eigen risico. Daarom bevriezen we het eigen risico en zorgen we dat je in het ziekenhuis maximaal 150 euro per keer betaalt. Zo ben je niet in één keer het hele bedrag kwijt."
            },
            {
                "party": "CDA",
                "statement": "Het afschaffen van het eigen risico betekent dat de maandelijkse premie omhoog moet. Het CDA is daar tegen. Het CDA vindt wel dat het eigen risico niet hoger mag worden dan dat het nu is."
            },
            {
                "party": "FVD",
                "statement": "FVD wil het eigen risico verlagen naar 200 euro."
            },
            {
                "party": "ChristenUnie",
                "statement": "De zorg moet betaalbaar blijven voor mensen. Daarom gaat de zorgpremie omlaag (van 150 naar 50 euro) en voorkomen we dat het eigen risico verder stijgt. Het betalen van het eigen risico wordt verspreid over behandelingen, om niet in één keer veel geld kwijt te zijn."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een eenvoudiger (financieel) zorgsysteem, zodat zorg beter afgestemd wordt met de individu. Dit moet er ook voor zorgen dat zorg betaalbaar blijft voor iedereen."
            },
            {
                "party": "JA21",
                "statement": "Door het eigen risico houden we de zorg betaalbaar, toegankelijk en van hoge kwaliteit. Het afschaffen van het eigen risico zorgt voor een enorme druk op de begroting én de zorg, wat uiteindelijk ten koste zal gaan van onze zorgkwaliteit."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil dat het eigen risico de komende jaren gelijk blijft."
            },
            {
                "party": "NSC",
                "statement": "We zorgen ervoor dat het eigen risico voor mensen minder belastend is door hen niet te dwingen om het volledige eigen risico in één keer te betalen, maar per behandeling een deel van het eigen risico."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Samen voor Nederland wil het eigen risico niet per direct afschaffen, maar wel zo snel mogelijk verlagen."
            }
        ]
    },
    {
        "theme": "Kiezen per regio",
        "title": "Elke regio in Nederland moet een vast aantal mensen in de Tweede Kamer krijgen.",
        "info": "Na de verkiezingen kijkt de Kiesraad hoeveel stemmen een politieke partij in heel Nederland gekregen heeft en welk deel van het totaal aantal stemmen dat is. Op basis daarvan worden de zetels in de Tweede Kamer verdeeld. Dit systeem leidt ertoe dat er uit sommige regio’s meer mensen in de Tweede Kamer zitten dan uit andere regio’s. Dat kan veranderen als elke regio een vast aantal plaatsen in de Tweede Kamer krijgt.",
        "results": [
            {
                "party": "D66",
                "statement": "Alle regio’s moeten goed vertegenwoordigd zijn in de Tweede Kamer. Dat kan als kiezers meer invloed krijgen op welke kandidaten van een lijst gekozen worden. Daarom wil D66 de voorkeursstem zwaarder laten wegen."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil meer Kamerleden met wortels in de eigen regio of stad om de band tussen kiezer en Kamerlid te versterken. Het CDA wil de vertegenwoordiging van de regio’s in de politiek verbeteren door de invoering van een regionaal kiesstelsel met behoud van de evenredige vertegenwoordiging."
            },
            {
                "party": "JA21",
                "statement": "JA21 pleit voor een gedeeltelijk districtenstelsel, waar mensen zowel voor landelijke als voor regionale vertegenwoordigers kunnen kiezen. Regionale vertegenwoordigers worden gekozen door kiezers in hun district. Dit vergroot de band tussen kiezer en gekozene en de vertegenwoordiging van de regio."
            },
            {
                "party": "DENK",
                "statement": "Bij onze representatieve democratie hoort een representatieve vertegenwoordiging van alle regio's. Op deze wijze verzekeren wij dat alle regio's goed worden vertegenwoordigd en daarmee ook hun belangen."
            },
            {
                "party": "BBB",
                "statement": "BBB wil dat mensen een regionale vertegenwoordiger kunnen kiezen om hen in de Tweede Kamer te vertegenwoordigen."
            },
            {
                "party": "BVNL",
                "statement": "Er is een groeiende kloof tussen Randstad en landelijk gebied én tussen stad en platteland. Om die kloof te dichten is het goed dat in de Tweede kamer een vast aantal mensen vanuit elke regio/provincie zijn vertegenwoordigd."
            },
            {
                "party": "NSC",
                "statement": "De stem uit de regio is te lang genegeerd in de Tweede Kamer. Daarom willen we het kiesstelsel veranderen: elk kiesdistrict krijgt voortaan een vast aantal Kamerzetels."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Libertaire Partij staat voor subsidiariteit, waarbij hogere overheden hun mandaat ontvangen van lagere overheden. Een kamerindeling op basis van regio is een stap in de goede richting om onze wens voor een bottom-up samenleving te realiseren."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "SvN is van mening dat iedere provincie vertegenwoordigd moet zijn in de Tweede Kamer. Voor een vast totaal-quotum pleit SvN niet. Met een minimum van 2 Tweede Kamerleden per provincie zijn wij tevreden."
            },
            {
                "party": "VVD",
                "statement": "We vinden dat elke regio vertegenwoordigd zou moeten zijn in de Tweede Kamer. Het is uiteindelijk echter aan de kiezer wie verkozen wordt."
            },
            {
                "party": "GL-PvdA",
                "statement": "Elke stem telt even zwaar in Nederland. Of je nou in Utrecht, Nijverdal of Holwerd woont. Dat maakt de democratie eerlijk en gelijkwaardig. Natuurlijk vinden we dat de Tweede Kamer een afspiegeling van de samenleving moet zijn, daarom zie je de diversiteit in Nederland terug op onze kandidatenlijst."
            },
            {
                "party": "PVV",
                "statement": "Het is aan politieke partijen om ervoor te zorgen dat regionale kandidaten op hun kandidatenlijst voorkomen. Kiezers kunnen dan op hun favoriete kandidaat uit hun regio stemmen. Een districtenstelsel is daarvoor niet nodig."
            },
            {
                "party": "SP",
                "statement": "Nederland had vroeger een zogeheten districtenstelsel en daar is met goede redenen mee gestopt.. Het huidige stelsel van evenredige vertegenwoordiging, waarbij elke stem telt, is eerlijker. De SP probeert zelf wel een lijst te maken met mensen uit het hele land."
            },
            {
                "party": "FVD",
                "statement": "FVD denkt dat het Nederlandse kiessysteem resulteert in de beste en meest eerlijke afspiegeling van Nederland in de Tweede Kamer. Daar willen wij niet onnodig aan sleutelen."
            },
            {
                "party": "PvdD",
                "statement": "Wij zijn tegen een districtenstelsel of gedeeltelijk regionaal kiesstelsel. Dit voorstel zien wij als een verkapt gedeeltelijk regionaal kiesstelsel. Wat de PvdD betreft is het aan partijen zelf om te zorgen dat hun lijst een goede regionale afspiegeling vormt van het land."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie gelooft in de samenleving. Daar past ons huidige stelsel het best bij. In een districtenstelsel gaat het meer over poppetjes en minder over de inhoud en is het lastiger voor kleinere groepen in de samenleving om in de Kamer vertegenwoordigd te worden."
            },
            {
                "party": "Volt",
                "statement": "Volt wil Nederlandse kieslijsten voor Nederlandse verkiezingen. Wel is het belangrijk dat partijen op hun lijsten voor een goede afspiegeling van de samenleving zorgen."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt dat iedere volksvertegenwoordiger in principe oog moet hebben voor wat in het hele land speelt, of het nu om problemen in Amsterdam of Zoutelande gaat. Het zou niet af moeten hangen van waar een volksvertegenwoordiger vandaan komt."
            },
            {
                "party": "50PLUS",
                "statement": "De Tweede Kamer moet representatief blijven. De Eerste Kamer daarentegen wordt door Provinciale Statenleden gekozen en zij zouden enkel op kandidaten uit hun eigen provincie moeten kunnen stemmen."
            },
            {
                "party": "BIJ1",
                "statement": "Voor BIJ1 is representatie uiterst belangrijk. Wij willen de Tweede Kamer meer representatief maken door het aantal zetels te vergroten. Hierdoor is er meer ruimte voor regionale vertegenwoordiging."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Wij staan voor een democratie die erop vertrouwt dat mensen zelf in staat zijn te bepalen wie hen het beste vertegenwoordigt. Hierbij past het wel om de voorkeursdrempel te verwijderen zodat kandidaten sneller op voorkeursstemmen worden verkozen, ook als ze laag op de lijst zijn geplaatst."
            },
            {
                "party": "Splinter",
                "statement": "Regionale vertegenwoordiging hoort in de decentrale politiek. In de Tweede Kamer dienen volksvertegenwoordigers het algemeen belang, niet alleen het belang van hun regio. Het staat zelfs in de gedragsregels, regel 1: \"Het Kamerlid oefent zijn ambt uit in onafhankelijkheid en in het algemeen belang.\""
            },
            {
                "party": "LEF",
                "statement": "Er zijn wel meer punten waarop de kamer diverser kan. Leeftijd bijvoorbeeld. LEF wil een Derde Kamer waar continue burgerraden plaatsvinden met behulp van loting. Zo wordt iedereen in Nederland gehoord en krijgen we ook regels die werken voor iedereen, niet alleen de kaste van politici."
            }
        ]
    },
    {
        "theme": "OV voor 65-plussers",
        "title": "Mensen vanaf 65 jaar moeten gratis met trein, tram en bus kunnen reizen.",
        "info": "In sommige gemeenten reizen mensen die ouder zijn dan 65 al gratis met het openbaar vervoer. Ook hebben veel vervoersbedrijven kortingsregelingen voor ouderen. Als mensen vanaf 65 jaar gratis met trein, tram en bus kunnen reizen, hebben de vervoersbedrijven minder inkomsten.",
        "results": [
            {
                "party": "PVV",
                "statement": "Onze ouderen verdienen gratis openbaar vervoer."
            },
            {
                "party": "SP",
                "statement": "Openbaar vervoer dient voor iedereen goedkoper en toegankelijker te worden. Specifiek voor deze doelgroep is dit extra belangrijk. In een aantal gemeenten mogen ouderen al gratis met het OV reizen. Het is eerlijk om dit landelijk voor iedereen te regelen."
            },
            {
                "party": "FVD",
                "statement": "FVD denkt dat ouderen vanaf 65 jaar genoeg gedaan hebben voor Nederland, en het is goed om iets terug te doen."
            },
            {
                "party": "DENK",
                "statement": "Veel ouderen hebben niet genoeg geld om de hoge OV-kosten te betalen. Het OV dient daarom gratis te zijn voor onze ouderen. Rijke ouderen sluiten wij hiervan uit. Die kunnen het immers zelf betalen."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS vindt dat iedereen met gratis openbaar vervoer moet kunnen reizen en om te beginnen in de daluren."
            },
            {
                "party": "BBB",
                "statement": "BBB ziet gratis OV voor 65-plussers als een investering in sociale mobiliteit en betrokkenheid. Dit beleid vergroot de toegankelijkheid van openbaar vervoer voor ouderen, bevordert hun sociale activiteit en vermindert isolement."
            },
            {
                "party": "BIJ1",
                "statement": "BIJ1 wil dat het openbaar vervoer voor iedereen toegankelijk is. Het openbaar vervoer moet daarom voor iedereen gratis worden."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen willen het OV gratis maken voor iedereen. Dit kost slechts 4 miljard; 1/10 van wat we nu uitgeven aan fossiele subsidies. Dit stimuleert duurzaam vervoer en is de goedkoopste manier om het fileprobleem op te lossen. Dat is beter voor milieu en klimaat."
            },
            {
                "party": "BVNL",
                "statement": "BVNL is zelfs voor gratis OV. Het biedt o.a. meer mogelijkheden voor mantelzorgers, minder files, minder parkeerproblemen en minder auto’s in steden."
            },
            {
                "party": "Splinter",
                "statement": "Openbaar vervoer moet voor iedereen toegankelijk zijn. Om het autogebruik tegen te gaan, is het verstandig om deze specifieke doelgroep gratis OV aan te bieden, omdat het OV zo langzamerhand onbetaalbaar aan het worden is."
            },
            {
                "party": "LEF",
                "statement": "LEF wilt gratis openbaar vervoer voor iedereen."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Dit komt ten goede van de inkomsten van onze ouderen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een nieuw tarievenstelsel voor het openbaar vervoer. Waarbij het combineren van vervoersmiddelen, lange reizen en reizen in de regio goedkoper wordt. Dit kan in sommige gevallen gratis zijn."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil de betaalbaarheid van het hele OV verbeteren voor iedereen. Op dit moment krijgen 65-plussers korting in het openbaar vervoer. In diverse gemeentes kunnen 65-plussers al gratis met het openbaar vervoer. We laten het aan gemeentes om de afweging te maken of 65-plussers gratis mogen reizen."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat het openbaar vervoer voor iedereen betaalbaar en toegankelijk is. Daarom stelt D66 een Klimaatticket voor waarmee je voor een vaste lage prijs per maand buiten de spits onbeperkt gebruik kan maken van trein, bus, tram en metro. Deze geldt voor jong en oud."
            },
            {
                "party": "GL-PvdA",
                "statement": "Het openbaar is voor veel 65-plussers belangrijk voor een sociaal leven en een duurzame manier van reizen. Wij zijn er daarom voor dat gemeenten de ruimte hebben om gratis OV aan te beiden voor bepaalde doelgroepen, waaronder 65-plussers. Dit hoeft wat ons betreft niet landelijk worden afgedwongen."
            },
            {
                "party": "CDA",
                "statement": "Mensen van 65 jaar en ouder krijgen momenteel korting op de trein, tram en bus. Wat het CDA betreft blijft dat zo. Gratis openbaar vervoer voor deze groep zou in de praktijk leiden tot hogere belastingen om deze maatregel te kunnen financieren. Het CDA is daar tegen."
            },
            {
                "party": "PvdD",
                "statement": "We maken het openbaar vervoer voor iedereen 50% goedkoper, en schaffen de btw op tickets af. Dit betalen we bijvoorbeeld door het afschaffen van fossiele subsidies. Wel maken we treinstations beter toegankelijk voor ouderen en mensen met een beperking. Het klassesysteem in de trein schaffen we af."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het openbaar vervoer moet voor iedereen betaalbaarder worden, niet enkel voor ouderen."
            },
            {
                "party": "JA21",
                "statement": "Wij verlagen liever voor iedereen de kosten van het Openbaar Vervoer, dan dat we het met belastinggeld voor één groep gratis maken."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil een algemene btw-vrijstelling voor reizen met het ov, zodat het voor iedereen wat aantrekkelijker wordt. Er zijn genoeg 65-plussers die een ov-reis prima kunnen betalen. Steun voor 65-plussers die het financieel moeilijk hebben, moet op andere wijze geregeld worden."
            },
            {
                "party": "NSC",
                "statement": "We hechten aan betaalbaar en betrouwbaar openbaar vervoer voor iedereen. We verkennen de invoering van een ticket voor onbeperkt reizen door het hele land in de daluren voor een bedrag per maand, naar Duits voorbeeld."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De overheid dient geen enkele groep mensen te bevoordelen ten opzichte van andere groepen. Het principe \"De gebruiker betaalt\" is eerlijk."
            }
        ]
    },
    {
        "theme": "CO2-opslag",
        "title": "De regering moet meer investeren in opslag van CO2 onder de grond.",
        "info": "CO2, koolstofdioxide, is een gas dat vrijkomt bij het verbranden van fossiele brandstoffen zoals kolen en gas. Hoe meer CO2 er in de lucht zit, hoe meer de warmte van de zon op aarde blijft hangen. Dit heet het broeikaseffect. Het is een belangrijke oorzaak van klimaatverandering. Het is moeilijk om snel helemaal stoppen met het verbranden van fossiele brandstoffen. Een tussenoplossing is het bewaren van CO2 onder de grond.",
        "results": [
            {
                "party": "VVD",
                "statement": "We willen in 2050 klimaatneutraal zijn. CO2-opslag speelt een onmisbare rol in de klimaatdoelen tot 2030 en erna. Het opvangen van CO2 is cruciaal om de klimaatdoelen te halen. Niet alleen om emissies uit de industrie te verminderen maar ook om bijvoorbeeld blauwe waterstof mogelijk te maken."
            },
            {
                "party": "D66",
                "statement": "D66 wil de CO2-uitstoot snel naar beneden brengen en daarom CO2 opslaan als tijdelijke oplossing. Zo zorgen we ervoor dat we snel stappen kunnen maken voor het klimaat zonder direct de kosten voor huishoudens en ondernemers fors te verhogen. Veiligheid is daarbij een harde voorwaarde."
            },
            {
                "party": "Volt",
                "statement": "Volt wil meer CO2-uitstoot uit de lucht halen. Daarvoor plaatsen we bomen en planten in heel Europa, en door in te zetten op CO2-opslag."
            },
            {
                "party": "DENK",
                "statement": "Alle oplossingen die helpen om de uitstoot te beperken moeten we aangrijpen. De gevaren van CO2 onder de grond dienen wel goed onderzocht te worden."
            },
            {
                "party": "50PLUS",
                "statement": "CO2 afvang en opslag in de grond is een manier om klimaatverandering tegen te gaan. 50PLUS is ervoor dat de lege gasvelden in Groningen volgepompt worden om toekomstige aardbevingschade te verminderen."
            },
            {
                "party": "BBB",
                "statement": "Naast CO2 opslag onder de grond wil BBB de CO2-binding in ons voedsel van landbouwproducten meenemen in onze CO2-reductiedoelstellingen."
            },
            {
                "party": "GL-PvdA",
                "statement": "Hoe meer subsidie we steken in opslag van CO2, hoe langer bedrijven doorgaan met uitstoten zonder écht te veranderen. CO2-opslag is vooral uitstel van het probleem, en nog geen bewezen techniek. Om de klimaatcrisis aan te pakken, moeten we stoppen met fossiel en overgaan op schone energie."
            },
            {
                "party": "PVV",
                "statement": "De obsessie met CO2-reductie moet zo snel mogelijk gestopt worden. Nederland is verantwoordelijk voor nog geen half procent van de totale wereldwijde CO2-uitstoot. Er moet dus geen cent gaan naar reductie, opslag of andere zinloze klimaathobby’s."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt het niet nodig om nog meer te investeren in CO2-opslag. Er is de afgelopen jaren door de overheid al veel geïnvesteerd in CO2-opslag. Door de hoge CO2-prijs in het Europese emissiehandel systeem hebben bedrijven mogelijk ook nauwelijks nog subsidie nodig voor CO2-opslag."
            },
            {
                "party": "SP",
                "statement": "Dit is slechts een tijdelijke oplossing. Dat geld is beter besteed aan structurele oplossingen, zoals zonnepanelen op daken en windmolens op zee."
            },
            {
                "party": "FVD",
                "statement": "FVD wil geen geld verspillen aan nodeloze klimaat-technologiën. Dit geld kan veel beter geïnvesteerd worden in bijvoorbeeld de ontwikkeling van kernenergie."
            },
            {
                "party": "PvdD",
                "statement": "We stoppen met het investeren in lapmiddelen. Het afvangen en opslaan van broeikasgassen (carbon capture and storage, CCS) stimuleert bedrijven door te gaan met vervuiling. We stoppen met CCS en draaien de subsidiekraan dicht."
            },
            {
                "party": "ChristenUnie",
                "statement": "We moeten wel meer CO2 opslaan, maar daar hoeft geen extra overheidsgeld bij, omdat de prijs voor CO2 al hoog genoeg is om dit rendabel zonder overheidssteun te doen. De opslag van CO2 is een tijdelijke maatregel op weg naar een meer duurzame economie en is nodig om klimaatdoelen te halen."
            },
            {
                "party": "JA21",
                "statement": "JA21 vindt CO2-opslag onwenselijk, omdat de effecten voor de externe veiligheid nog onvoldoende in beeld zijn. Daarnaast is het een erg kostbare operatie om dwangmatig CO2-neutraal te worden. Wij investeren daar geen geld in. Laten we inzetten op kernenergie."
            },
            {
                "party": "SGP",
                "statement": "CO2-opslag onder de Noordzee is een relatief goedkope klimaatmaatregel. Dát hier wat geld voor uitgetrokken wordt is goed. De SGP wil wel voorkomen dat investeren in opslag de omschakeling naar echte verduurzaming van de energievoorziening dwarszit. Dus meer geld is niet verstandig."
            },
            {
                "party": "BIJ1",
                "statement": "Het opslaan van CO2 onder de grond negeert de oorzaak van het probleem. We kunnen beter meer investeren in verduurzaming."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen willen geen subsidie uitdelen om de troep van vervuilende bedrijven onder het tapijt te vegen. In plaats van miljarden subsidie aan multinationals voor CO2-opslag te geven, voeren we een CO2-taks in, zodat we droge voeten houden en milieuvervuiling effectief ontmoedigen."
            },
            {
                "party": "BVNL",
                "statement": "Geen CO2-experimenten onder onze voeten. Zeker in bewoond gebied moeten we zo snel mogelijk stoppen met (de voorbereidingen voor) CO2-opslag onder de grond. Bovendien is CCS een oplossing die niet duurzaam is."
            },
            {
                "party": "NSC",
                "statement": "We vinden het afvangen en opslaan van CO2 (CCS) eigenlijk geen duurzame oplossing, maar we accepteren dat dit de komende jaren onderdeel is van de maatregelen die nodig zijn om de klimaatdoelen te halen."
            },
            {
                "party": "Splinter",
                "statement": "Van het totaal beschikbare budget voor de energietransitie gaat een fors deel naar ondergrondse CO2-opslag. CO2 opslaan onder de grond is geen oplossing voor CO2 reductie, omdat bedrijven door kunnen gaan met hun vervuilende productie."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De regering reguleert te veel en maakt te vaak foute keuzes ten koste van onze leefomgeving; ook bij duurzame investeringen. De optimale balans tussen belangen ontstaat bij private investeringen, lokale onderhandeling en rechtspraak."
            },
            {
                "party": "LEF",
                "statement": "CO2 opslag onder de grond is slechts een verplaatsing van het probleem. Natuurlijke vormen van CO2 opslag zoals in bomen en gras hebben de voorkeur. LEF is voor het versterken van onze ecosystemen. Daarnaast is LEF voor het verminderen van het energieverbruik en daarmee de uitstoot."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Samen voor Nederland wil dat alles aangaande klimaathysterie van tafel gaat."
            }
        ]
    },
    {
        "theme": "Visum Surinamers",
        "title": "De regering moet ervoor zorgen dat Surinamers zonder visum naar Nederland kunnen reizen.",
        "info": "Suriname was tot 1975 een kolonie van Nederland. Daarom wordt er Nederlands gesproken en hebben veel Surinamers familie die in Nederland woont. Nu hebben mensen die in Suriname wonen een visum nodig om naar Nederland te reizen. Wie naar Nederland reist, reist automatisch ook naar de Europese Unie. De Europese landen bepalen samen vanuit welke landen mensen een visum nodig hebben om naar Europa te komen. Nederland moet de visumvrije toegang van Surinamers dus met de andere landen regelen en kan dat niet alleen doen.",
        "results": [
            {
                "party": "D66",
                "statement": "Veel Nederlandse Surinamers hebben familie in Suriname, en andersom. De bestaande visumplicht doet geen recht aan onze nauwe banden. Daarom zijn we voorstander van visumvrij reizen."
            },
            {
                "party": "GL-PvdA",
                "statement": "Nederland en Suriname hebben een diepe band. Veel mensen hebben familie in beide landen. Toch heb je nog steeds een visum nodig om vanuit Suriname naar Nederland te komen. Dat is niet alleen onhandig, het doet ook geen recht aan onze gedeelde geschiedenis."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt dat de visumplicht voor Surinamers die naar Nederland willen reizen moet worden versoepeld of afgeschaft. Veel Nederlandse Surinamers hebben familie in Suriname en andersom. Door de lange visumprocedures missen Surinamers begrafenissen, verjaardagen en huwelijken in Nederland."
            },
            {
                "party": "SP",
                "statement": "Voor veel Surinamers is het een doorn in het oog dat zij een visum moeten aanvragen voor een bezoek aan familie in Nederland."
            },
            {
                "party": "PvdD",
                "statement": "Nederland en Suriname hebben een gedeeld verleden. De PvdD vindt het belangrijk dat Surinamers visumvrij door de Europese Unie kunnen reizen en zal zich daarvoor inzetten."
            },
            {
                "party": "ChristenUnie",
                "statement": "Een visumaanvraag is voor veel Surinamers belemmerend in het bezoeken van familie in Nederland. Daarom is de ChristenUnie vanuit historische verbondenheid voorstander van het schrappen van deze verplichting."
            },
            {
                "party": "Volt",
                "statement": "Volt wil zich in Europees verband inzetten om visumvrij reizen z.s.m. mogelijk te maken."
            },
            {
                "party": "DENK",
                "statement": "Nederland heeft een speciale relatie met Suriname. Net zoals Europese landen visumvrij kunnen reizen naar Nederland zou dat ook moeten kunnen met Suriname."
            },
            {
                "party": "BIJ1",
                "statement": "Nederland en Suriname zijn onlosmakelijk met elkaar verbonden. De huidige visa procedure is profilerend, racistisch en houdt koloniale machtsverhoudingen in stand. Surinamers moeten zonder visum naar Nederland mogen reizen, net zoals Nederlanders dit nu naar Suriname mogen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "De Schengen-visumplicht voor Surinamers valt onder de verantwoordelijkheid van de Europese Commissie. Wij vinden dat Nederland ervoor zou moeten pleiten om deze af te schaffen, zeker gezien ons verleden met Suriname. Voor veel andere Zuid-Amerikaanse landen geldt al geen visumplicht."
            },
            {
                "party": "BVNL",
                "statement": "BVNL hecht veel waarde aan warme banden met Suriname. Zonder visum voor Surinamers die naar Nederland komen zal dat nog beter verlopen. Dat is goed voor zowel de handel als het familiecontact met de vele Surinamers die in Nederland wonen."
            },
            {
                "party": "NSC",
                "statement": "We blijven bijdragen aan de samenwerking met Suriname, gezien de bijzondere band tussen beide landen en samenlevingen. Mensen uit Suriname moeten visumvrij naar Europa kunnen komen."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Zo min mogelijk belemmering aan regels voor migratie. Geen nationaliteit onderscheid. Ieder mag negentig dagen in Nederland verblijven. Wie langer wil blijven moet aantonen in eigen levensonderhoud te kunnen voorzien of een sponsor hebben. De overheid hoeft dit niet te faciliteren en financieren."
            },
            {
                "party": "LEF",
                "statement": "Nederland en Suriname zijn door het verleden onlosmakelijk verbonden zowel in de cultuur als de bevolking. Er is een grote groep Surinamers in Nederland. Het is zó onrechtvaardig om Surinamers niet direct toegang te geven tot Nederland. Laten we dat wel doen."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Gelet op het verleden en de binding is dit logisch."
            },
            {
                "party": "VVD",
                "statement": "Surinamers kunnen pas visumvrij naar Nederland reizen als het land voldoet aan de voorwaarden die de EU stelt voor visumvrij reizen naar de Schengenzone. Dat is nog niet het geval. Nederland kan wel helpen als Suriname daarbij advies nodig heeft."
            },
            {
                "party": "PVV",
                "statement": "De PVV is tegen de afschaffing van visa voor mensen die naar Nederland komen."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt niet dat Suriname een aparte status verdient."
            },
            {
                "party": "JA21",
                "statement": "JA21 is geen voorstander van het versoepelen van de visumplicht voor Surinamers. De benodigde financiële garantstelling voor Surinamers dient dan ook in stand te blijven."
            },
            {
                "party": "SGP",
                "statement": "Mensen uit Suriname moeten nu een visum aanvragen om naar Nederland te komen. De SGP wil dit niet wijzigen."
            },
            {
                "party": "50PLUS",
                "statement": "Suriname is geen land van de Europese Unie en ook behoort Suriname niet tot het Koninkrijk der Nederlanden."
            },
            {
                "party": "BBB",
                "statement": "BBB erkent de historische en culturele banden tussen Nederland en Suriname, maar benadrukt ook het belang van gecontroleerde en beheerde migratiestromen. Directe invoering van visumvrij reizen kan onbedoelde migratie-effecten hebben die zorgvuldig moeten worden overwogen en beheerd."
            },
            {
                "party": "Splinter",
                "statement": "Er moet weer een Nederlandse ambassade komen in Paramaribo om willekeur te voorkomen en dat in aantoonbare noodgevallen, overlijden of ziekten Surinamers snel bij hun familie in Nederland kunnen zijn."
            }
        ]
    },
    {
        "theme": "2% voor defensie",
        "title": "Er moet een wet komen waarin staat dat Nederland altijd 2% van het bruto binnenlands product uitgeeft aan defensie.",
        "info": "Nederland is lid van de NAVO, een bondgenootschap van Europese en Noord-Amerikaanse landen. De landen hebben beloofd dat zij elkaar zullen helpen als een van hen wordt aangevallen. Ook hebben zij afgesproken dat zij een bedrag dat gelijk is aan 2% van het bruto binnenlands product aan defensie zullen uitgeven, bijvoorbeeld aan soldaten of wapens. Nederland doet dat nu niet. Het bruto binnenlands product is al het geld wat mensen in een land per jaar verdienen.",
        "results": [
            {
                "party": "VVD",
                "statement": "We willen voorkomen dat er direct op defensie bezuinigd wordt als de wereld iets veiliger lijkt, en we bij een volgend conflict in Europa eerst jarenlang onze krijgsmacht moeten opbouwen."
            },
            {
                "party": "D66",
                "statement": "We moeten blijven investeren in de Nederlandse krijgsmacht voor onze veiligheid. Extra middelen willen we effectief inzetten, zodat we onze verantwoordelijkheid nemen voor de veiligheid van onszelf en bondgenoten. Daarom zullen wij voor begrotingswetten stemmen die naar de 2%-norm gaan."
            },
            {
                "party": "GL-PvdA",
                "statement": "Door de oorlog in Oekraïne en een veranderende wereld is het opbouwen van een sterke, Europese tak binnen de NAVO noodzakelijk. Daarvoor moeten we investeren in defensie en voldoen aan de NAVO-norm van 2%. Hoewel we onszelf en onze waarden beter moeten kunnen verdedigen, is en blijft vrede het doel."
            },
            {
                "party": "CDA",
                "statement": "Nederland hoort een betrouwbare bondgenoot te zijn die zich aan afspraken houdt. Het CDA is mede-initiatiefnemer van de ‘Defensiewet’, waarmee de 2% NAVO-norm wettelijk wordt vastgelegd. Het vastleggen van de NAVO-norm als minimum draagt bij aan stabiele, langjarige financiering."
            },
            {
                "party": "FVD",
                "statement": "FVD wil het defensiebudget ophogen naar 2% van het BBP en van ons leger weer een fatsoenlijke organisatie maken."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil dat Nederland aan zijn internationale afspraken voldoet. Dat betekent 2% van de begroting standaard aan defensie-uitgaven maar ook 0,7% van de begroting standaard aan Ontwikkelingssamenwerking. Het een kan wat de ChristenUnie betreft niet zonder het ander."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat de 2% NAVO-norm wettelijk vastgelegd wordt."
            },
            {
                "party": "JA21",
                "statement": "Onze krijgsmacht is jarenlang uitgehold door onderbestedingen. JA21 wil de \nminimale 2%-norm wettelijk vast te leggen. De komende jaren willen wij boven de 2% norm uitkomen door een defensiefonds voor de komende 10 jaar op te zetten waarmee kapitale investeringen in materieel worden bekostigd."
            },
            {
                "party": "SGP",
                "statement": "De SGP heeft, samen met VVD, CDA en Volt, met dit doel een wetsvoorstel aanhangig gemaakt. Om duurzaam te beschikken over een krijgsmacht die adequaat is toegerust om onze onafhankelijkheid, vrede en veiligheid te verdedigen en beschermen, is het wenselijk de budgettaire ondergrens van 2% van het bbp."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS vindt dat er structureel financieel geïnvesteerd moet worden op onze veiligheid/defensie. De 2% uitgave aan defensie van ons bruto binnenlands product is een harde afspraak binnen de NATO waar Nederland zich aan moet gaan houden."
            },
            {
                "party": "BBB",
                "statement": "Om Nederland vrij en veilig te houden moeten wij onze NAVO afspraken over militaire investeringen nakomen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen ondersteunen de gezamenlijke inspanningen om de lidstaten van de Europese Unie te beschermen. De EU moet streven naar een eigen veiligheidsparaplu die onafhankelijk van, en gezamenlijk met de Amerikaanse strijdkrachten (NAVO) kan opereren."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil per direct voldoen aan de 2% BNP-norm die de NAVO stelt. We stimuleren daarnaast onze eigen Nederlandse defensie-industrie."
            },
            {
                "party": "NSC",
                "statement": "We committeren ons aan de norm om minimaal 2% van het bbp te besteden aan defensie en investeren in slagkracht, gereedheid, uitrusting en oefeningen. Deze uitgavennorm wordt in de wet verankerd."
            },
            {
                "party": "Splinter",
                "statement": "Tenminste 2% van het bbp dient aan Defensie besteed te worden, conform de NAVO-norm. Tekorten aan personeel, materieel en financiering bij de Nederlandse strijdkrachten dienen te worden opgelost, evenals de borging van kwaliteit en vorming in de defensie-opleidingen."
            },
            {
                "party": "PVV",
                "statement": "De PVV koestert onze defensie en onze militairen. Maar wij willen ons leger vooral inzetten om de Nederlandse grenzen te bewaken en doen niet meer mee aan kostbare internationale missies."
            },
            {
                "party": "SP",
                "statement": "Militarisering maakt de wereld niet veiliger.  Alleen de militaire industrie profiteert van de wapenwedloop. SP wil goed zorgen voor defensiepersoneel en investeren in bijvoorbeeld hun lonen en omstandigheden, maar duur oorlogsmaterieel voor buitenlandse missies zullen wij niet aanschaffen."
            },
            {
                "party": "PvdD",
                "statement": "Het defensiebudget wordt niet verder verhoogd. Er komt geen wettelijke verankering van de NAVO-norm voor een defensiebudget van 2% van de rijksbegroting. In tijden dat Nederland niet bij oorlogen betrokken is, is zo’n bijdrage verspilling van kostbaar belastinggeld."
            },
            {
                "party": "DENK",
                "statement": "Defensie is belangrijk voor onze veiligheid. Onze soldaten worden niet fatsoenlijk betaald en beschikken niet over het beste materiaal. Aan de andere kant hoeft voor het op orde krijgen van de basis niet 2% van ons BBP naar defensie. Zo kunnen we meer geld uitgeven aan de bestrijding van armoede."
            },
            {
                "party": "BIJ1",
                "statement": "BIJ1 is een pacifistische partij en zet zich in om de krijgsmacht te krimpen en uiteindelijk te vervangen door een civiele hulporganisatie."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Een wet die voorschrijft dat er altijd een vast percentage van het bruto nationaal product aan een specifiek doel moet worden besteed is stupide. Bij de aanschaf van defensiematerieel is doelmatigheid de belangrijkste factor."
            },
            {
                "party": "LEF",
                "statement": "Vasthouden aan 2% is onnodig. We gaan als Nederland zelf over hoeveel geld we besteden. LEF is voor vreedzame manieren om conflicten op te lossen, niet voor investeringen in wapens. Liever geven we meer geld uit aan onderwijs en het klimaat."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Samen voor Nederland is er geen voorstander van om zich te houden aan internationale afspraken die worden gemaakt over uitgaven."
            }
        ]
    },
    {
        "theme": "Cultuuronderwijs",
        "title": "De overheid moet meer geld geven aan scholen voor lessen in kunst en cultuur.",
        "info": "Op de lessen in muziek, kunst en cultuur is sinds 2008 flink bezuinigd. Het gevolg hiervan is dat op scholen minder les wordt gegeven over kunst en cultuur. Meer geld hiervoor betekent dat kinderen meer kunnen leren over kunst en cultuur.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 vindt het belangrijk dat we iedereen de kans geven om hun talenten te ontdekken en creativiteit te stimuleren. Kunst en cultuur zou voor iedereen toegankelijk moeten zijn. Scholen zijn de beste plek voor kinderen om daar kennis mee te maken."
            },
            {
                "party": "GL-PvdA",
                "statement": "Goed cultuuronderwijs hoort bij een fijne en leerzame schooltijd. Kunst leert je op verschillende manieren naar de wereld te kijken, je eigen mening te vormen en je creatieve talenten te ontwikkelen. En door dit op school te doen, heeft élk kind er toegang toe."
            },
            {
                "party": "SP",
                "statement": "Kunst en cultuur zijn geen sluitstuk van de begroting, maar een basis voor onze beschaving. Wij willen meer investeren in kunstenaars en muzikanten van Nederlandse bodem en dat begint al op school. Daarnaast moet flink geïnvesteerd worden in meer docenten voor de klas."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt het van groot belang we alle mooie dingen die het Westen heeft voortgebracht weer onderwijzen en uitdragen. Cultuur- en muziekeducatie moeten een vaste plek krijgen in het curriculum."
            },
            {
                "party": "PvdD",
                "statement": "We willen een ruim aanbod van lessen in praktische en culturele vaardigheden. Er komt extra geld voor cultuurlessen (oa theater, dans, muziek, schilderen), en voor handarbeid, schoolzwemmen, sportlessen en schooltuinen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat scholen medialessen gaan geven waarin de creativiteit en empathie van kinderen ontwikkeld worden door middel van kunstvormen zoals drama, film en muziek."
            },
            {
                "party": "DENK",
                "statement": "Gezien het hoge lerarentekort is het belangrijk om onze aandacht te richten op het oplossen daarvan. Daarnaast is het erg noodzakelijk om werk te maken van betere basisvaardigheden zoals rekenen en schrijven. Daarnaast is investeren in de culturele ontplooiing van kinderen van groot belang."
            },
            {
                "party": "50PLUS",
                "statement": "Kunst en cultuur dragen bij aan de opvoeding van kinderen. Kunst en cultuur dient daarom laagdrempelig te zijn en onderwijs kan daar aan bijdragen."
            },
            {
                "party": "BIJ1",
                "statement": "Kunst- en cultuureducatie wordt een verplicht onderdeel van zowel het basisonderwijs als het voortgezet onderwijs en het mbo. Hierbij wordt samenwerking gezocht tussen onderwijs, de culturele omgeving van de school en de kunst- en cultuursector."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor toegankelijke kennis, kunst en cultuur. Dit is is een voorwaarde voor de sociale, technologische en economische ontwikkeling van onze samenleving. Daarom hebben wij het meest ambitieuze onderwijs programma van alle partijen."
            },
            {
                "party": "Splinter",
                "statement": "Kunst en cultuur zijn belangrijk voor de ontwikkeling van kinderen en tieners tot kritische en mondige burgers. Kunst en cultuur geven stof tot nadenken en zijn een bron voor gezonde discussie. Het inspireert om verder te kijken dan de eigen overtuigingen en in gesprek te gaan met andersdenkenden."
            },
            {
                "party": "LEF",
                "statement": "Absoluut. Kunst en cultuur is cruciaal voor identiteitsvorming. Leer jongeren om zichzelf uit te drukken. LEF wil een sport- en cultuurpas waardoor alle jongeren onder de 18 gratis musea, voorstellingen en kunst kunnen bezoeken en gratis kunnen meedoen aan zang-, dans of muziekles en (denk)sporten."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil dat extra geld vooral wordt besteed aan het versterken van de basisvaardigheden. Er blijft vanzelfsprekend plaats voor goed cultuuronderwijs."
            },
            {
                "party": "PVV",
                "statement": "Op dit moment is het helaas zo dat veel kinderen van school komen zonder dat ze goed kunnen rekenen, lezen en schrijven. Extra geld moet daar dus aan worden besteed."
            },
            {
                "party": "CDA",
                "statement": "Scholen krijgen via de zogenaamde lumpsum financiering geld waarmee ze zelf de vrijheid hebben hoe ze dit geld willen besteden. Het CDA vindt niet dat de overheid meer geld moet geven aan scholen voor lessen in kunst en cultuur maar dat scholen zelf mogen bepalen waar ze het geld aan besteden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Ieder kind verdient toegang tot cultuur, niet alleen via de school. Daarom wil de ChristenUnie bibliotheken openhouden, juist in dunbevolkte gebieden. Cultuuronderwijs en muziekonderwijs moeten toegankelijk zijn voor alle kinderen. En we willen een betere spreiding van cultuuraanbod door het land."
            },
            {
                "party": "JA21",
                "statement": "Scholen moeten zich zoveel mogelijk focussen op de basis; lezen, schrijven en rekenen. Daar moet extra geld heen, omdat de kwaliteit van het onderwijs achteruit dreigt te gaan. Lessen in kunst en cultuur zijn van grote toegevoegde waarde, maar moet plaats vinden binnen de huidige budgetten."
            },
            {
                "party": "SGP",
                "statement": "De SGP heeft daar geen extra middelen voor gereseveerd."
            },
            {
                "party": "BBB",
                "statement": "BBB erkent het belang van cultuuronderwijs maar gelooft niet dat het noodzakelijk is om hier meer overheidsmiddelen aan te besteden. Stimuleren kan ook zonder extra financiële impuls, door bijvoorbeeld bestaande middelen effectiever in te zetten of partnerschappen aan te gaan"
            },
            {
                "party": "BVNL",
                "statement": "Het onderwijs moet weer terug naar de basis. Meer aandacht voor basisvaardigheden als rekenen, lezen en schrijven, meer aandacht voor aardrijkskunde, geschiedenis, en biologie en minder tijd voor ideologisch gedreven curriculum. Ruimte voor kunst en cultuur is prima, maar wel aanvullend op kerntaken"
            },
            {
                "party": "NSC",
                "statement": "We erkennen het belang van cultuureducatie en -participatie en stimuleren dat jongeren al op school in aanraking komen met kunst en cultuur waarbij naast basisvorming ook nadrukkelijk ruimte moet zijn voor het ontwikkelen van talent."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Het financieren van onderwijs door de overheid resulteert in kostbaar onderwijs van matige kwaliteit. De LP streeft naar dit te veranderen door een strikte scheiding tussen de staat en het onderwijs te bewerkstelligen. Geen bevoordeling tussen wat er wel of niet door de instelling aangeboden wordt."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Scholen maken zelf keuzes in het aanbod dat ze hebben, niet de overheid."
            }
        ]
    },
    {
        "theme": "Kerncentrales",
        "title": "In Nederland moeten meer kerncentrales komen.",
        "info": "In een kerncentrale wordt elektriciteit opgewekt. Hier komt geen CO2 bij vrij. Daarom zijn kerncentrales beter voor het klimaat dan elektriciteitscentrales die draaien op kolen en gas. Een kerncentrale gebruikt radioactief materiaal. Na het gebruik kan de straling van het radioactieve materiaal nog tienduizenden jaren gevaarlijk zijn. Het afval moet dus voor zeer lange tijd goed worden opgeslagen.",
        "results": [
            {
                "party": "VVD",
                "statement": "Kernenergie is onmisbaar in een klimaatneutrale samenleving. We willen de huidige plannen voor kernenergie doorzetten en daar bovenop extra kerncentrales bouwen. Deze kerncentrales hebben we nodig om volledig schoon en betrouwbaar elektriciteit te kunnen produceren."
            },
            {
                "party": "D66",
                "statement": "D66 wil zo snel mogelijk het klimaat redden. Daarbij hebben we niet de luxe om opties uit te sluiten. Kernenergie is een goede aanvulling op wind op zee en zon op dak, waar we zo veel mogelijk op inzetten. We hebben oog voor nadelen zoals hoge kosten en risico's. Daar gaan we zorgvuldig mee om."
            },
            {
                "party": "PVV",
                "statement": "Kernenergie is schoner, goedkoper en efficiënter dan windmolens en kolencentrales. De PVV is voor het snel bouwen van nieuwe kerncentrales."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil dat er twee nieuwe kerncentrales worden gebouwd en dat er wordt geïnvesteerd in de ontwikkeling van kleine modulaire kerncentrales."
            },
            {
                "party": "FVD",
                "statement": "FVD wil kernenergie stimuleren goede langetermijnrandvoorwaarden te scheppen."
            },
            {
                "party": "ChristenUnie",
                "statement": "Gelet op de nadelen van kernenergie hebben duurzamere vormen van energie onze voorkeur. Gezien de urgentie van het uitfaseren van gas- en kolencentrales, zal kernenergie, inclusief 2 nieuwe toekomstige centrales, een integraal (tijdelijk) onderdeel van het Nederlandse energiesysteem dienen te zijn."
            },
            {
                "party": "Volt",
                "statement": "Volt wil de bouw van meerdere nieuwe, kleine kerncentrales juridisch mogelijk maken en daarmee inzetten op kernenergie in de mix van duurzame energie."
            },
            {
                "party": "JA21",
                "statement": "Kernenergie is betrouwbaar, betaalbaar en maakt  Nederland energieonafhankelijk. Wij kiezen dan ook voluit voor kernenergie. Wij willen kerncentrales bouwen en Small Modular Reactors (SMR), die al voor 2030 operationeel kunnen zijn."
            },
            {
                "party": "SGP",
                "statement": "De SGP is voorstander van kerncentrales. Wind- en zonne-energie zorgen voor fluctuerende stroomproductie. Dat vergt veel van het volle energienet. Ook zijn er grenzen aan de landschappelijke inpassing. De SGP wil daarom verbreding van de energiemix met onder meer kerncentrales."
            },
            {
                "party": "DENK",
                "statement": "Alle opties ter verduurzaming moeten verkend worden, waaronder dus ook kernenergie."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS is voorstander van het gebruik van kernenergie tot andere CO2 neutrale energiebronnen beschikbaar komen."
            },
            {
                "party": "BBB",
                "statement": "Kernenergie is een stabiele energiebron die nauwelijks CO2 uitstoot."
            },
            {
                "party": "BVNL",
                "statement": "Nederland moet zo snel mogelijk energiesoeverein worden en betaalbare energie produceren voor de inwoners van Nederland. Dit kan o.a. door kerncentrales te bouwen en het gasveld in Groningen veilig en verantwoord open te houden."
            },
            {
                "party": "NSC",
                "statement": "Kernenergie levert een onmisbare bijdrage aan een continue en CO2-vrije energievoorziening. We treffen voorbereidingen voor de bouw van ten minste twee kerncentrales en verkennen actief de mogelijkheden voor Small Modular Reactors (SMR’s)."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP beschouwt kernenergie als de meest geschikte oplossing voor een uitstootvrije baseload. Een stabiele baseload is van essentieel belang voor het beheer van het elektriciteitsnet om een betrouwbare en continue stroomvoorziening te garanderen."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Kerncentrales zijn de drijvende kracht achter duurzaamheid."
            },
            {
                "party": "GL-PvdA",
                "statement": "Kernenergie is heel duur én het is geen duurzame energie. Het maakt ons kwetsbaar bij een aanval en het afval blijft nog lang stralingsgevaarlijk. Gelukkig is het ook niet nodig: we hebben genoeg aan zonne- en windenergie als we ervoor zorgen dat de opslagcapaciteit van ons netwerk wordt uitgebreid."
            },
            {
                "party": "SP",
                "statement": "Kernenergie is nu geen duurzaam alternatief voor fossiele energie omdat er geen goede/veilige oplossing is voor de verwerking van kernafval. Bovendien duurt het bouwen van een kerncentrale langer dan tien jaar en het is heel duur."
            },
            {
                "party": "PvdD",
                "statement": "Nederland bouwt geen nieuwe kerncentrales en bestaande centrales worden gesloten. Kerncentrales komen te laat, het kost miljarden aan belastinggeld die we beter kunnen steken in het sneller terugdringen van de uitstoot, en het is immoreel om toekomstige generaties met kernafval op te zadelen."
            },
            {
                "party": "BIJ1",
                "statement": "In plaats van het bouwen van dure vervuilende kerncentrales wil BIJ1 zich inzetten voor verduurzaming en energiebesparing."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "De Piratenpartij - De Groenen zijn niet dogmatisch tegen alle vormen van kernenergie. We juichen meer onderzoek naar gesmolten-zout-reactoren en kernfusie toe. We zijn voor kernenergie wanneer het fossiele kan vervangen, zonder dat het ten koste gaat van investeringen in hernieuwbare energie."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is voor een gebalanceerde energiemix: kernenergie wordt niet bij voorbaat uitgesloten. We ondersteunen onderzoek om kernenergie op een veilige en betaalbare manier in de mix te brengen, maar we wachten er niet op! Splinter wil wel maximaal inzetten op duurzame hernieuwbare energiebronnen."
            },
            {
                "party": "LEF",
                "statement": "Kernenergie is vervuilend, duur en risicovol. Wat mis kan gaan, gaat ooit mis, toont Fukushima aan. LEF wil niemand opzadelen met kernafval of een kernramp. LEF zet 100% in op energiebesparing (isolatie en afschaffen fossiele subsidies) en op écht duurzame energie zoals zon op daken, wind op zee, bodemwarmte en koud-warmte opslag."
            }
        ]
    },
    {
        "theme": "Vliegbelasting",
        "title": "De belasting op vliegreizen moet omhoog.",
        "info": "Sinds 2021 betaalt elke passagier die vanuit Nederland vliegt daar belasting voor. Het bedrag is nu 26,43 euro. Vliegtuigen stoten veel koolstofdioxide (CO2) uit, dat bijdraagt aan opwarming van de aarde. De belasting op vliegreizen moet ervoor zorgen dat de prijsverschillen tussen vliegtickets en treinkaartjes kleiner worden. Deze belasting geldt niet voor vrachtverkeer, kleine vliegtuigen en mensen die overstappen.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 wil een eerlijke vliegbelasting gericht op mensen die heel veel en ver vliegen. Daarnaast wil D66 privévluchten veel zwaarder belasten. Zo ontzien we het gezin dat af en toe op vakantie gaat."
            },
            {
                "party": "GL-PvdA",
                "statement": "Het vliegtuig is het meest vervuilende vervoersmiddel, maar vliegen wordt nu door de overheid goedkoop gehouden met allerlei belastingvoordelen. Dat moet veranderen. Als alternatief zetten wij in op duurzaam reizen, zoals internationale treinen voor korte afstanden."
            },
            {
                "party": "CDA",
                "statement": "Voor het CDA geldt het principe: \"de vervuiler betaalt\", ook in de luchtvaart. Het CDA vindt dat passagiers van privéjets, overstappers en mensen die grote afstanden vliegen daarom ook een bijdrage moeten leveren."
            },
            {
                "party": "PvdD",
                "statement": "Er komt een progressieve vliegtaks voor consumenten, die hoger wordt als je vaker vliegt. Privévluchten worden verboden. We investeren in internationale treinverbindingen om deze goedkoper, sneller en toegankelijker te maken en helpen luchtvaartpersoneel aan banen met een beter toekomstperspectief."
            },
            {
                "party": "ChristenUnie",
                "statement": "Vliegen is ontzettend vervuilend, maar die vervuiling wordt bijna niet belast. Daarom moet er een hogere belasting op vliegreizen komen en moet het juist goedkoper worden om (internationale) treinreizen te maken over langere afstand."
            },
            {
                "party": "Volt",
                "statement": "Volt wil de vliegbelasting verhogen op basis van afstand (hoe groter de afstand, hoe hoger de belasting). Daarnaast moet er onderzoek gedaan worden hoe we ook extra kunnen belasten op basis van hoe vaak iemand vliegt."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil verhoging van de vliegbelasting. Nu wordt nog nauwelijks belasting betaald voor (verre) vliegreizen, terwijl het wel schadelijke gevolgen heeft voor het milieu. \nDe SGP wil de belasting op vliegtickets verhogen."
            },
            {
                "party": "50PLUS",
                "statement": "In het kader van klimaatverbetering is vliegen zeer onwenselijk. Door de prijzen van vliegreizen te verhogen zal het reizen met de trein aantrekkelijker worden en dat is gunstig voor het klimaat. De belastingverhoging vliegreizen moet dan wel aangewend worden voor het aanleggen van spoorlijnen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staat voor 'de vervuiler betaalt'. Daarom willen we o.a. belasting heffen op kerosine en BTW op vliegtickets. Van de opbrengsten willen we internationale treinreizen goedkoper maken, zodat de duurzame optie niet langer de dure optie is."
            },
            {
                "party": "NSC",
                "statement": "In internationaal verband pleiten we voor BTW op vliegtickets, accijns op kerosine en een afstandsafhankelijke vliegbelasting voor intercontinentale vluchten."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is voorstander van het beperken van het aantal vluchten en wil vervuiling belasten. Splinter wil inzetten op duurzame openbare vervoersmiddelen, zoals betaalbare internationale treinverbindingen."
            },
            {
                "party": "LEF",
                "statement": "Er wordt momenteel geen belasting geheven op kerosine en geen BTW over vliegtickets. Dit moet vanzelfsprekend wel gebeuren om onze klimaatdoelen te halen. LEF wil terug naar 0 graden opwarming. Het boek Drawdown van Paul Hawken toont 100 manieren waarop dat kan."
            },
            {
                "party": "VVD",
                "statement": "We willen dat vliegtuigen schoner worden en de trein een beter alternatief. Daarvoor zijn investeringen nodig en Europese afspraken over het gelijker belasten van kerosine. Vliegtickets extra belasten betekent dat meer mensen vanuit België of Duitsland gaan vliegen."
            },
            {
                "party": "PVV",
                "statement": "De PVV is tegen het extra belasten van vliegen."
            },
            {
                "party": "SP",
                "statement": "De SP is tegen de vliegtaks. 8% van de bevolking maakt 40% van de vliegreizen. Nog eens 40% van de vliegreizen wordt gemaakt door mensen die overstappen op Schiphol. Wij willen gericht veelvliegers belasten, niet mensen die één keer per jaar op vakantie gaan."
            },
            {
                "party": "FVD",
                "statement": "FVD is voor een algehele belastingverlaging."
            },
            {
                "party": "JA21",
                "statement": "Vliegen moet weer betaalbaar worden en JA21 wil af van fiscale ontmoedigende maatregelen zoals de vliegbelasting. De verdriedubbeling van de\nvliegbelasting willen we terugdraaien. Op deze manier wordt vliegen direct weer een stuk betaalbaarder."
            },
            {
                "party": "DENK",
                "statement": "Veel Nederlanders hebben familie wonen in verre landen. Het verhogen van de prijzen voor vliegtickets kan ertoe leiden dat zij niet meer hun familieleden kunnen bezoeken. DENK is daarom tegen een vliegtaks."
            },
            {
                "party": "BBB",
                "statement": "Hoewel de vliegbelasting recent verveelvoudigd is, vindt BBB dat elke beleidsoptie zorgvuldig overwogen moet worden. We staan open voor gesprekken over vliegtaks in heel Europa, maar wensen niet per definitie voor of tegen te zijn zonder uitgebreide overweging."
            },
            {
                "party": "BIJ1",
                "statement": "Er komt BTW en accijns op kerosine, en we zetten ons op Europees niveau in om een Europees spoornetwerk te realiseren om korteafstandsvluchten uit te faseren. Voor gemeenschappen uit de voormalige koloniën worden prijsstijgingen van vliegtickets naar hun land van herkomst gecompenseerd."
            },
            {
                "party": "BVNL",
                "statement": "Er moet geen vliegtax komen. We gaan investeren in de vliegvelden Schiphol, Rotterdam/The Hague, Eindhoven en Eelde. Vliegveld Lelystad gaat zo snel mogelijk open."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Alle belastingen, waaronder die voor vliegen, moeten worden afgeschaft. De Libertaire Partij is tegen iedere vorm van gedragsbeïnvloeding door de overheid."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Vliegen moet voor iedereen mogelijk blijven."
            }
        ]
    },
    {
        "theme": "Kopen huurwoning",
        "title": "Huurders moeten het recht krijgen om hun sociale huurwoning te kopen van de woningcorporatie.",
        "info": "Sociale huurwoningen zijn woningen met een huurprijs van maximaal 808,06 euro per maand. Deze woningen zijn alleen beschikbaar voor mensen met een inkomen van maximaal 48.625 euro per jaar. Ze worden verhuurd door woningcorporaties. Woningcorporaties verkopen soms huurwoningen en ontvangen hiervoor geld. Het initiatief voor de verkoop ligt bij de woningcorporatie, niet bij de huurder. Er zijn nog meer mensen die hun sociale huurwoning willen kopen, maar dit aanbod niet krijgen. Als zij dit wel kunnen doen, vermindert het aanbod sociale huurwoningen.",
        "results": [
            {
                "party": "VVD",
                "statement": "Elke huurder van een sociale huurwoning krijgt een wettelijk recht om de eigen huurwoning te kopen. Het gaat om de huurder die al in de woning woont. We maken daarom een Kooprechtwet, zodat dit recht verankerd wordt. We passen deze wet eerst toe op kleine appartementencomplexen en rijtjeshuizen."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat als een woningcorporatie een woning wil verkopen, dat altijd eerst aangeboden moeten worden aan de zittende huurder. Wel moet het totaal aantal sociale huurwoningen omhoog."
            },
            {
                "party": "GL-PvdA",
                "statement": "Voor sommige mensen is het kopen van hun sociale huurwoning een goede oplossing. Bovendien gaat het huis dan naar iemand die er zelf gaat wonen, en niet naar een belegger. Voorwaarde is wel dat het aantal sociale huurwoningen op peil blijft."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil het woningbezit bevorderen en dit is daartoe een uitstekend instrument."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil dat corporatiehuurders meer kans krijgen om een corporatiewoning te kopen. Hierdoor neemt het aanbod aan koopwoningen voor lagere en middeninkomens toe. De financiële opbrengsten investeren woningcorporaties vervolgens in nieuwbouw en verduurzaming."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat eigen woningbezit gestimuleerd moet worden. Wonen in sociale huurwoningen moet niet de norm worden. Daarom moeten huurders de kans krijgen om hun sociale huurwoning te kopen van de woningcorportatie om zo een gezonde woningmarkt te creëren."
            },
            {
                "party": "JA21",
                "statement": "JA21 vindt woningbezit een groot goed. Het is in dat kader een goede zaak wanneer huurders in de gelegenheid zijn hun sociale huurwoning te kopen van de corporatie."
            },
            {
                "party": "DENK",
                "statement": "Voor het stimuleren van het bezit van een eigen huis is het goed als mensen met een terugkoopgarantie hun woning van de corporatie kunnen kopen. De voorraad sociale huurwoningen moet echter wel op peil blijven."
            },
            {
                "party": "50PLUS",
                "statement": "Een woningcorporatie bouwt, beheert, verhuurt woonruimte voor mensen met een smalle beurs. Huurders moeten het recht hebben van de woningcorporatie een huurwoning te kopen."
            },
            {
                "party": "BBB",
                "statement": "Het recht om sociale huurwoningen te kopen bevordert eigendom en kan financiële mobiliteit voor huurders stimuleren. Dit concept geeft kansen op vermogensopbouw en woonzekerheid. Echter, waarborgen zijn nodig om de beschikbaarheid van betaalbare huurwoningen voor toekomstige huurders te garanderen en speculatie te voorkomen."
            },
            {
                "party": "BVNL",
                "statement": "Eigendomsrecht moet gestimuleerd worden, zodat mensen minder afhankelijk worden van de overheid."
            },
            {
                "party": "LEF",
                "statement": "LEF is voor sociale cohesie in de buurt. Dat gaat makkelijker als mensen die al jaren een woning huren deze kunnen kopen. Zo blijven huizen die zijn bedoeld voor de gemeenschap eigendom van de gemeenschap. LEF wil dat het aantal sociale huurwoningen op pijl blijft. Woningbouwcorporaties moeten daarom het recht op eerste (terug)koop krijgen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil waarborgen dat er voldoende sociale huurwoningen blijven. Woningcoöperaties waar huurders onderdeel van kunnen zijn, moeten woningen kunnen overkopen, maar dit mag niet ten koste gaan van het bestaande aanbod."
            },
            {
                "party": "SP",
                "statement": "De afgelopen jaren zijn er al te veel sociale huurwoningen verkocht. Eenmaal verkocht, zijn deze huizen nooit meer beschikbaar voor een betaalbare huur. Wonen wordt zo onbetaalbaar in ons land. De SP wil niet minder sociale huurwoningen, maar meer, zodat mensen eerder een betaalbare woning krijgen."
            },
            {
                "party": "PvdD",
                "statement": "Er worden geen sociale huurwoningen meer verkocht. Door sociale huur in de verkoopte doen groeit het tekort aan betaalbare woningen. Wel helpen we mensen die een huis willen kopen, onder andere door op korte termijn bestaande kantoorpanden en industrieterreinen naar woningbouw te transformeren."
            },
            {
                "party": "ChristenUnie",
                "statement": "Dit leidt tot minder sociale huurwoningen. Er zijn juist méér sociale huurwoningen nodigen. Wel is het belangrijk dat er voldoende betaalbare koopwoningen zijn. Daarom wil de ChristenUnie dat het voor koopstarters makkelijker wordt een woning te kopen."
            },
            {
                "party": "SGP",
                "statement": "Het moet geen absoluut recht worden, maar onder voorwaarden kan dat wel."
            },
            {
                "party": "BIJ1",
                "statement": "BIJ1 wil omschakelen naar een systeem van daadwerkelijke volkshuisvesting. Bewoners krijgen meer inspraak over hun woning, maar de woningen blijven in collectieve handen. Zo kunnen toekomstige generaties betaalbaar blijven wonen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piraten staan voor voldoende betaalbare woningen voor iedereen. Er zijn nu enorme wachtlijsten voor sociale huurwoningen. Wanneer deze worden opgekocht, verdwijnen er nog meer sociale huurwoningen en worden de wachtlijsten nog langer."
            },
            {
                "party": "NSC",
                "statement": "Niet elke sociale huurwoning kan verkocht worden aan de huurder, we moeten immers ook zorgen voor voldoende sociale huurwoningen. Maar indien er sprake is van verkoop krijgt de bewoner de eerste optie op koop."
            },
            {
                "party": "Splinter",
                "statement": "Door deze maatregel zal het aanbod van betaalbare huurwoningen afnemen terwijl de sociale huurmarkt al onder grote druk staat."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Libertaire Partij staat voor economische vrijheid en binnen dit kader is er geen ruimte voor de verplichting om eigendommen te verkopen."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Er moet voldoende aanbod huurwoningen zijn. Dit draagt hieraan niet bij."
            }
        ]
    },
    {
        "theme": "Kinderopvang zonder winstoogmerk",
        "title": "Kinderopvang mag alleen worden aangeboden door organisaties die geen winst maken.",
        "info": "In Nederland is grote behoefte aan kinderopvang. De wachttijden voor een plaats op de kinderopvang zijn lang. De kinderopvang wordt meestal aangeboden door instellingen die winst (willen) maken. Het gaat om 3 op de 5 locaties voor kinderopvang.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 maakt kinderopvang 5 dagen per week gratis. Zo is kinderopvang geen struikelblok om meer te gaan werken. Ouders beslissen zelf of ze hier gebruik van maken. D66 wil voorkomen dat het geld vooral naar de winst van private equity gaat, maar naar gewone kinderopvang en gastouders."
            },
            {
                "party": "GL-PvdA",
                "statement": "In de kinderopvang moet één ding vooropstaan: het kind. Met goede, voor iedereen betaalbare opvang. Buitenlandse investeringsfondsen gebruiken kinderopvang nu als winstmachines, van ons belastinggeld. Daarom willen we hier weer een publieke voorziening van maken."
            },
            {
                "party": "PVV",
                "statement": "Winstbejag bij kinderopvang is ongewenst."
            },
            {
                "party": "CDA",
                "statement": "Het CDA is een voorstander van kinderopvang zonder winstoogmerk. De behaalde winst moet worden geïnvesteerd in de zorg voor en ontwikkeling van kinderen."
            },
            {
                "party": "SP",
                "statement": "Sinds de invoering van de marktwerking grepen buitenlandse commerciële bedrijven hun kans. Zij kochten kinderopvangorganisaties met maar één doel: winst maken. Dit is ten koste gegaan van de kwaliteit. De SP wil kinderopvang gratis maken en dergelijke commerciële bedrijven weren uit de kinderopvang."
            },
            {
                "party": "PvdD",
                "statement": "Geld dat verdiend wordt met kinderopvang moet gaan naar goede zorg voor kinderen, en niet verdwijnen in de zakken van aandeelhouders."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het opvangen van kinderen is geen verdienmodel. De ChristenUnie vindt een winstoogmerk, gezien de grote maatschappelijke functie van kinderopvang en financiering met veel gemeenschapsgeld niet gepast. Alle kinderopvangorganisaties moeten daarom non-profit worden."
            },
            {
                "party": "Volt",
                "statement": "Volt wil op dat de opvang van kinderen tot 12 jaar een publieke voorziening wordt. Deze moet bekostigd worden zoals het primair onderwijs. Wegens de hoge werkdruk en het tekort en personeel beginnen we met 3 dagen gratis opvang voor alle kinderen."
            },
            {
                "party": "DENK",
                "statement": "Kinderopvang is een essentieel beroep. Zonder kinderopvang kunnen ouders niet werken en loopt onze economie vast. Kinderopvang is dus een publieke dienst en daar hoort geen winstoogmerk bij.  Daarnaast moet het geld gebruikt worden om onze kinderen goed op te vangen, niet om winst te maken."
            },
            {
                "party": "50PLUS",
                "statement": "Kinderopvang moet een basisvoorziening zijn en mag niet vanwege marktwerking te duur worden voor jonge ouders. Daarom is het goed dat kinderopvang alleen aangeboden mag worden zonder winstoormerk."
            },
            {
                "party": "BIJ1",
                "statement": "Opvang is duurder bij kinderopvanginstellingen die uit zijn op winst. BIJ1 vindt dat kinderopvang gratis moet zijn, maar tot die tijd in ieder geval betaalbaar."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een samenleving waarin belangrijke basisvoorzieningen verzekerd zijn voor iedereen. Daarvoor dienen ze te worden ingericht als publieke voorziening en niet als markt. Het mag niet zo zijn dat subsidie als winst bij directeuren en aandeelhouders belandt."
            },
            {
                "party": "NSC",
                "statement": "We zijn doorgeschoten in een neoliberaal model waarin het rendement van aandeelhouders allesbepalend lijkt te zijn. Werkenden, werkgevers en ondernemers zouden zich moeten verbinden aan de ‘brede welvaart’ van onze samenleving op de lange termijn met waardering voor kennis en vakmanschap."
            },
            {
                "party": "LEF",
                "statement": "LEF wil gratis kinderopvang en een ruimhartig ouderverlof. Zo kunnen kinderen zich gezond hechten aan hun ouders en vriendjes leren maken op jonge leeftijd."
            },
            {
                "party": "VVD",
                "statement": "Elke organisatie die voldoet aan onze strenge kwaliteitseisen mag kinderopvang aanbieden. We hebben al het aanbod hard nodig om elk kind een plekje te bieden."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat kinderopvang door elke gekwalificeerde organisatie mag worden aangeboden. De huidige tekorten in de kinderopvang moeten niet vergroot worden door kinderopvang alleen aan te laten bieden door organisaties die geen winst maken."
            },
            {
                "party": "JA21",
                "statement": "Er is nu al een groot tekort aan kinderopvang. Het verder inperken van aanbieders is dan geen oplossing. Ouders moeten zelf de keuze kunnen maken naar welke kinderopvang ze hun kinderen willen brengen, daarbij hoort ook de keuze tussen commerciële en niet-commerciële organisaties."
            },
            {
                "party": "SGP",
                "statement": "Een totaalverbod op het maken van winst in de kinderopvangsector vindt de SGP niet nodig, maar er moeten wel maatregelen genomen worden om te voorkomen dat gemeenschapsgeld wegvloeit naar aandeelhouders."
            },
            {
                "party": "BBB",
                "statement": "Kinderopvang dient toegankelijk en kwalitatief te zijn. Of een organisatie winst maakt, hoeft geen bepalende factor te zijn zolang de kwaliteit en betaalbaarheid gewaarborgd zijn."
            },
            {
                "party": "BVNL",
                "statement": "De kinderopvang kent een groeiende vraag. Dat er organisaties zijn die winst maken binnen deze branche is niet het probleem, misbruik van het systeem wel. BVNL is voor een prijsplafond, ergens boven de maximum-uurprijs. De maatregel voorkomt excessieve prijzen en daarmee buitenproportionele winsten."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is voor gratis kinderopvang. Puur winstbejag van private investeerders moet voorkomen worden, dus we pakken overwinsten aan. De focus moet in de kinderopvang liggen op kwaliteit. Onze kinderen zijn geen lucratief verdienmodel. Een verbod op het maken van winst zou echter averechts werken."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Ouders zijn vrij om te kiezen bij wie zij hun kinderen onderbrengen en tegen welke vergoeding."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Profit en non-profit organisaties kunnen prima naast elkaar bestaan."
            }
        ]
    },
    {
        "theme": "Gezinshereniging",
        "title": "Als een vluchteling in Nederland mag blijven, mag het gezin nu naar Nederland komen. De regering moet dat beperken.",
        "info": "Nederland heeft met andere landen afspraken gemaakt over de opvang van vluchtelingen. Die afspraken liggen vast in wat we internationaal recht noemen. Ze gaan onder andere over gezinshereniging. Vluchtelingen die in Nederland mogen blijven, mogen ook hun gezinsleden (zoals een partner, ouders of kinderen) naar Nederland laten komen. Alleen bij hoge uitzondering mogen ook andere gezinsleden naar Nederland komen.",
        "results": [
            {
                "party": "VVD",
                "statement": "We willen bescherming bieden aan wie dit het hardste nodig heeft. Juist om er te zijn voor de mensen die ons echt nodig hebben, willen we wet- en regelgeving meer in lijn brengen met de rest van de EU. Misbruik maken van het systeem wordt niet getolereerd."
            },
            {
                "party": "PVV",
                "statement": "Er moet een asielstop komen. We hebben ons maximum aan asielzoekers inmiddels ruimschoots bereikt. Echte vluchtelingen kunnen\nin veilige landen in de eigen regio worden opgevangen."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt dat gezinshereniging moet worden beperkt. Het CDA wil met een twee statusstelsel onderscheid maken tussen permanente vluchtelingen en mensen die tijdelijke bescherming zoeken. Alleen permanente vluchtelingen mogen hun kerngezin over laten komen, in lijn met EU-recht."
            },
            {
                "party": "FVD",
                "statement": "FVD wil de asielindustrie ontmantelen."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil een asielstop invoeren en werk maken van een geheel nieuw asielbeleid, met opvang in de eigen regio en partnerlanden in plaats van in Nederland. Tot die tijd wil JA21 de instroom en gezinshereniging maximaal beperken, onder andere door afschaffing van het éénstatusstelsel."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil dat de Nederlandse nareisvoorwaarden niet langer soepeler zijn dan die in ons omringende landen. Daarnaast moet misbruik van de regeling worden tegengegaan  door nareis alleen toe te passen voor het kerngezin."
            },
            {
                "party": "50PLUS",
                "statement": "De ongeremde nareis-immigratie kan niet zo door blijven gaan dus 50PLUS is voor een beperking ervan."
            },
            {
                "party": "BBB",
                "statement": "Het is essentieel dat we zorgvuldig en weloverwogen omgaan met gezinshereniging. Het huidige beleid kan leiden tot ongewenste 'stapeling' van gezinsherenigingsprocedures. Terwijl we het belang van gezinshereniging erkennen, is het van belang dat we balans en beheersbaarheid behouden in ons asielbeleid. Dat betekent dat de huidige 10.915 gezinshereniging per jaar onacceptabel veel zijn."
            },
            {
                "party": "BVNL",
                "statement": "Een vluchteling dient tijdelijk in Nederland te blijven en na stabilisatie in het land van herkomst terug te keren. Bij die visie past geen gezinshereniging. Daarnaast gelooft BVNL, indien mogelijk, in opvang in de eigen regio."
            },
            {
                "party": "NSC",
                "statement": "We moeten meer grip krijgen op alle vormen van migratie, ook op gezinshereniging. Hierbij houden we ons aan internationale afspraken over het recht op gezins- en familieleven."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Of je komt als persoon, of je komt als gezin. Gezinshereniging dient te stoppen. Wij zijn uiteindelijk voor een immigratiestop #focusopnederland."
            },
            {
                "party": "D66",
                "statement": "D66 staat voor een rechtvaardig en effectief asielbeleid, waarbij niet iedereen de mogelijkheid heeft om naar Nederland te komen of in Nederland te blijven. De genoemde beperking betekent echter dat we van mensen vragen hun gezin achter te laten in oorlogsgebied, dat is voor D66 geen optie."
            },
            {
                "party": "GL-PvdA",
                "statement": "Mensen die vluchten voor oorlog en vervolging zullen we altijd helpen. Daarom zorgen we voor snelle en zorgvuldige procedures met oog voor onze draagkracht. Ook staan we voor het recht op gezinsleven. Dat betekent dat we niet meewerken aan het scheiden van kinderen en ouders uit oorlogsgebieden."
            },
            {
                "party": "SP",
                "statement": "Als iemand het recht heeft om hier te blijven, dan staan we dat toe.  De opvang van asielzoekers moet wel onder controle worden gebracht, maar niet op deze manier. Wij willen goede opvang in de regio en aanmeldcentra aan de rand van Europa."
            },
            {
                "party": "PvdD",
                "statement": "Het beperken van gezinshereniging is strijdig met mensenrechtenverdragen. De PvdD gaat hier niet mee akkoord. Ook niet-traditionele vormen van familie, zoals queer families en banden buiten het ‘kerngezin’, komen in aanmerking voor hereniging."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het gezinsleven is belangrijk. De ChristenUnie is tegen maatregelen die kinderen onnodig scheiden van ouders of inperking van het recht op familieleven, met het doel om vluchtelingen af te schrikken of te straffen voor hun aanwezigheid in Nederland."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat kinderen bij hun ouders kunnen zijn, zoals dat ook verplicht is door Europese en internationale regelgeving. Volt wil dat Nederland zich daar altijd aan houdt, en niet gezinshereniging beperkt, zelfs niet als noodmaatregel."
            },
            {
                "party": "DENK",
                "statement": "Het is onmenselijk om kinderen gescheiden te houden van hun ouders. DENK is voor gezinshereniging."
            },
            {
                "party": "BIJ1",
                "statement": "De criteria voor familiehereniging moeten versoepeld. De criteria voor EU-burgers worden ook toegepast op mensen van buiten de EU. Extra ruime mogelijkheden voor vluchtelingen blijven. Ook niet-traditionele families, zoals LHBTQIA+ families en banden buiten het ‘kerngezin', komen in aanmerking."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Over gezinshereniging en immigratie circuleren veel broodje-aap verhalen. Gezinshereniging is maar een zeer beperkt deel van de asielinstroom en valt nu al onder strikte voorwaarden. Wij vinden dat Nederland mensenrechten moet naleven. Legale immigranten moeten zo snel mogelijk integreren."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is voor een humaan vluchtelingenbeleid, waarbij aan mensenrechten niet getornd wordt. De perverse prikkel om kinderen vooruit te sturen moeten wel zo veel mogelijk tegengaan."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Afschaffing asielstatus, COA wordt vervangen door (lokale) particuliere en private opvang. Zo worden asielzoeker en vluchtelingopvang automatisch afgestemd op draagvlak en capaciteit. Zo min mogelijk belemmering voor migratie, wie wil blijven voorziet in eigen levensonderhoud of heeft een sponsor."
            },
            {
                "party": "LEF",
                "statement": "Gezinshereniging betreft een hele kleine groep mensen. Deze mensen zijn welkom in Nederland om ook een veilig heenkomen te hebben. Arbeidsmigratie en studiemigratie zijn veel grotere groepen mensen. Als je migratie wil beperken, draai dan aan die knoppen."
            }
        ]
    },
    {
        "theme": "Belasting op vermogen",
        "title": "De belasting op vermogen boven 57.000 euro moet omhoog.",
        "info": "Mensen die meer dan 57.000 euro vermogen hebben, betalen daar belasting over. Vermogen bestaat uit spaargeld, aandelen van bedrijven en een tweede huis. Het eigen huis waarin iemand woont telt niet mee. Mensen die een fiscale partner hebben, beginnen pas bij het dubbele, 114.000 euro, belasting te betalen.",
        "results": [
            {
                "party": "D66",
                "statement": "Op weinig plekken zijn vermogens zo scheef verdeeld als in Nederland. D66 wil daarom de allerhoogste vermogens meer belasten, zodat we kunnen investeren in de economie, veiligheid en onderwijs. We ontzien kleine spaarders of ondernemers die voor hun pensioen sparen."
            },
            {
                "party": "GL-PvdA",
                "statement": "Wie nu veel geld heeft in Nederland wordt slapend nog rijker. Veel mensen die belangrijk werk doen blijven arm. Dat moet eerlijker! Daarom verlaagt GL-PvdA de belasting op inkomen en verhogen we de belasting op vermogen. Zo verkleinen we de verschillen in de samenleving en op de werkvloer."
            },
            {
                "party": "PVV",
                "statement": "De sterkste schouders moeten de zwaarste lasten dragen."
            },
            {
                "party": "SP",
                "statement": "Vooral mensen met grote vermogens betalen in Nederland weinig belasting in vergelijking met andere landen. Grote vermogens willen we eerlijker belasten. Zo kan bijvoorbeeld de inkomstenbelasting van werkende mensen omlaag. Daar profiteren veel meer mensen van."
            },
            {
                "party": "PvdD",
                "statement": "Er komt een progressieve vermogensbelasting van 1% tot 500.000 euro oplopend tot 5% voor vermogens boven 5 miljoen euro. De vrijstelling wordt verhoogd, zodat gewaarborgd is dat mensen die zuinig hebben geleefd en netjes hebben gespaard, geen belasting hoeven te betalen voor hun spaarzaamheid."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie maakt de vermogensbelasting eerlijker door het rendement te belasten. Dus geen belasting over de boom (het vermogen) maar alleen de vruchten van de boom (het rendement). Daarboven introduceren we een brede vermogensbelasting voor vermogens van 1 miljoen euro en hoger."
            },
            {
                "party": "DENK",
                "statement": "DENK is voor het verlagen van de arbeidsbelasting en de belastingen voor kleine ondernemers. Om dat te compenseren, mogen vermogenden wat meer gaan bijdragen aan de samenleving. Hierbij willen wij dat grote vermogens meer bijdragen dan de kleinere vermogens. Dat is eerlijk delen."
            },
            {
                "party": "50PLUS",
                "statement": "De belasting op vermogen boven 57.000 euro moet beperkt omhoog."
            },
            {
                "party": "BIJ1",
                "statement": "Er is te veel ongelijkheid in Nederland.\nDaarom wil BIJ1 een limiet op vermogen, waarboven een marginaal belastingtarief van 100% geldt. De hoogte van deze limiet wordt democratisch besloten. Vermogens- en erfbelasting wordt drastisch verhoogd."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een eerlijk belastingstelsel. De vermogensongelijkheid is hoog. De rijksten betalen vaak maar weinig belasting. Progressieve vermogensbelasting maakt het belastingstelsel eerlijker. Bezit van eigen woning stellen we hierbij vrij van de vermogenstoets."
            },
            {
                "party": "LEF",
                "statement": "LEF wil de belasting op arbeid verlagen en de belasting op vermogen omhoog. De sterke schouders zouden de zwaarste lasten moeten dragen. De belastingvrije voet van 57.000 voor individuen en 114.000 voor huishoudens is oké. Daarna mag het tarief geleidelijk omhoog."
            },
            {
                "party": "Volt",
                "statement": "We introduceren belastingmaatregelen die de vermogensongelijkheid verminderen. Wij weten nog niet zeker of dit betekent dat dit voor alle vermogens boven de 57.000 euro moet. Maar, we stellen een belasting voor voor vermogens boven één miljoen euro en op vermogenswinst uit de verkoop van een huis en schaffen de belastingvoordelen van eigenwoningbezit af."
            },
            {
                "party": "VVD",
                "statement": "We willen dat er alleen (box 3) belasting wordt geheven over rendement dat mensen ook echt maken. Mensen die veel rendement maken, betalen dan meer. Kleine spaarders worden juist ontzien."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil dat er een eerlijke belasting op vermogen komt, namelijk door het rendement te belasten dat daadwerkelijk op het vermogen wordt behaald. Daarbij wil het CDA kleinere spaarders zoveel mogelijk ontzien, want het is juist goed als mensen buffers opbouwen."
            },
            {
                "party": "FVD",
                "statement": "FVD is voor een algehele belastingverlaging."
            },
            {
                "party": "JA21",
                "statement": "Belastingen op vermogen worden vooral gedragen door werkenden. Belastingen op kapitaal ontmoedigen investeren. JA21 wil een zogenaamde WIN-rekening. Mensen kunnen al het door werk verdiende geld (na belastingen) op zo’n rekening storten, waarna dit geld is vrijgesteld van vermogensbelasting."
            },
            {
                "party": "SGP",
                "statement": "Een financiële buffer is heel verstandig en sparen moet juist gestimuleerd worden. Heel veel mensen hebben zuinig geleefd en een buffer van enkele tienduizenden euro's aangelegd. Die moeten niet zwaarder belast worden."
            },
            {
                "party": "BBB",
                "statement": "Het verhogen van belasting op vermogen boven 57.000 euro bestraft sparen en investeren voor bijvoorbeeld pensioen, wat nadelig kan zijn voor economische groei en stabiliteit. Een gebalanceerde aanpak in belastingheffing, die zowel welgestelde als minder welgestelde burgers niet ontmoedigt om te investeren, is essentieel om economische stabiliteit te behouden."
            },
            {
                "party": "BVNL",
                "statement": "De stapeling van belastingen is een vorm van diefstal door de overheid. De belastingen moeten fors worden verlaagd en er moet substantieel gesneden worden in het overheidsapparaat. Minder ambtenaren, minder regels en lagere belastingen."
            },
            {
                "party": "NSC",
                "statement": "In de komende vier jaar willen we een ambitieuze start maken met een hervorming van het belastingstel. Volgens de rechter wordt vermogen oneerlijk belast. We willen het reële rendement belasten, de tarieven verhogen we niet."
            },
            {
                "party": "Splinter",
                "statement": "Mensen die in hun leven goed gespaard hebben mogen daar niet voor worden gestraft. In deze grillige economische tijden zou een overheid blij moeten zijn met mensen die kunnen en willen sparen. Overwaarde op huizen moet sowieso uitgezonderd worden van de vermogenstoets."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Libertaire partij schaft directe belasting op loon, winst en vermogen af. Wij streven naar een kleine overheid, die bestaat uit een aantal essentiële functies. De kosten voor deze ‘nachtwakersstaat’ worden per factuur voldaan."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Belastingen moeten omlaag, niet omhoog. De kosten moeten omlaag."
            }
        ]
    },
    {
        "theme": "Controle op religieuze groepen",
        "title": "De overheid moet strenger controleren wat jongeren leren bij kerken, moskeeën en andere organisaties die les geven op basis van een levensbeschouwing.",
        "info": "De overheid heeft regels gemaakt voor scholen om ervoor te zorgen dat kinderen alleen zaken leren die passen bij Nederlandse normen en waarden. Dat wordt ook gecontroleerd. Er zijn organisaties die op basis van religie of levensbeschouwing jongeren lesgeven buiten schooltijden. Over de inhoud van die lessen zijn geen afspraken gemaakt en er is bijna geen controle op.",
        "results": [
            {
                "party": "VVD",
                "statement": "Geen enkel kind mag onderwijs krijgen dat aanzet tot haat, geweld of discriminatie. Als er signalen zijn dat dit wel gebeurt, is toezicht nodig. De VVD wil dat de onderwijsinspectie toezicht houdt en in kan grijpen als er signalen zijn dat lessen haaks staan op de vrije democratische rechtstaat"
            },
            {
                "party": "D66",
                "statement": "D66 staat voor de vrijheid van godsdienst en iedereen heeft het recht hier buiten schooltijd meer over te leren. Maar daarbij is er geen ruimte voor onderwijs dat ingaat tegen de waarden van de Nederlandse rechtsstaat. We maken lesmateriaal van weekendscholen bovendien openbaar."
            },
            {
                "party": "GL-PvdA",
                "statement": "In een gelijkwaardig land horen alle kinderen dezelfde basis te krijgen. Goede lessen over burgerschap zijn belangrijk voor het vertrouwen in elkaar en in de samenleving. Kerken en moskeeën mogen daar zelf invulling aangeven, maar de onderwijsinspectie ziet toe op de kwaliteit van deze lessen."
            },
            {
                "party": "PVV",
                "statement": "Controle op islamitische scholen en koranscholen is zeer verstandig."
            },
            {
                "party": "SP",
                "statement": "We beschermen onze vrije en democratische samenleving op verschillende manieren. Door beter toezicht, maar ook door ronselaars en haatpredikers te weren uit ons land. De financiering en aansturing van politieke en religieuze organisaties vanuit het buitenland staan we niet toe."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil de bron van radicalisering aanpakken. Wij verbieden buitenlandse financiering van moskeeën en\nsluiten instellingen waar wordt aangezet tot\ngeweld, waaronder moskeeën en informele islamitische onderwijsinstellingen. Er moet streng toezicht komen op informeel islamitisch onderwijs."
            },
            {
                "party": "50PLUS",
                "statement": "Net zoals het onderwijs in Nederland onder controle staat van een overheid over haar leerdoelen, methodes en resultaten zo dienen kerken, moskeeën en andere organisaties die jongeren lesgeven op basis van een levensbeschouwing streng gecontroleerd te worden."
            },
            {
                "party": "BVNL",
                "statement": "BVNL gelooft in controle, o.a. bij salafistische moskeescholen. Bij minstens vijftig onderwijsplekken door het hele land zijn anti-integratieve, antidemocratische en anti-rechtsstatelijke overtuigingen opgelegd aan meer dan duizend kinderen. Dat moeten we voorkomen, vandaar controle."
            },
            {
                "party": "Splinter",
                "statement": "Splinter wil dat er strenger controleert wordt op anti-democratisch gedachtengoed in het religieuze onderwijs. We mogen niet naïef zijn en moeten er zeker van te zijn dat er geen waarden aangeleerd worden die haaks staan op onze democratische rechtsstaat en de basis vormen voor radicalisering."
            },
            {
                "party": "LEF",
                "statement": "Vrouwenrechten en LHBTQIA+ rechten staan onder druk door de opkomst van conservatieve organisaties. De regering moet voorkomen dat groepen die angst, haat en verdeeldheid zaaien teveel macht krijgen. LEF vindt FvD en de PVV ook zulke organisaties. Met LEF stappen we over angsten heen, groot en klein"
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt dat op basis van de vrijheid van godsdienst en de scheiding van kerk en staat het niet aan de overheid is om te controleren wat jongeren leren bij kerken, moskeeën en andere organisaties."
            },
            {
                "party": "FVD",
                "statement": "FVD gelooft dat elk onderwijs is gebaseerd op een levingsbeschouwing, zo ook het liberale open onderwijs. Er moet alle ruimte zijn voor onderwijs dat gebaseerd is op levensbeschouwelijke overtuigingen. Een strengere controle vanuit de overheid is niet nodig."
            },
            {
                "party": "PvdD",
                "statement": "De PvdD staat voor godsdienstvrijheid. Deze stopt waar andere vrijheden in het geding komen, b.v. bij homofobie of haat jegens andere religies. Signalen daarvan moeten worden onderzocht en zo nodig moet de Onderwijsinspectie optreden. Maar zonder aanleiding streng controleren is discriminatie."
            },
            {
                "party": "ChristenUnie",
                "statement": "Nederland kent gelukkig vrijheid van godsdienst, vrijheid van meningsuiting en vrijheid van vereniging. Dat betekent dat de overheid niks te zoeken heeft in de kerk bij de cathechesatie of bij de zondagsschool."
            },
            {
                "party": "Volt",
                "statement": "Volt is tegen discriminatie op basis van religie."
            },
            {
                "party": "SGP",
                "statement": "De SGP pleit voor de vrijheid van onderwijs en godsdienst en beziet deze plannen met zorg."
            },
            {
                "party": "DENK",
                "statement": "De scheiding van kerk en staat is een groot goed. De overheid heeft niets te zoeken achter de deuren van een kerk of een moskee. Zo moet het ook blijven. Wij handelen niet vanuit wantrouwen."
            },
            {
                "party": "BBB",
                "statement": "BBB steunt het recht van elke Nederlander om zijn kinderen de opleiding te geven die bij hun past. Het curriculum is voor iedere school gelijk."
            },
            {
                "party": "BIJ1",
                "statement": "Dit beleid zou lijden tot religieuze discriminatie. Religieuze gemeenschappen moeten de vrijheid hebben hun religie uit te oefenen zoals ze dat willen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen zijn tegen overheidssurveillance. Enkel bij een concrete verdenking past het om een specifieke levensbeschouwelijke groep in de gaten te houden."
            },
            {
                "party": "NSC",
                "statement": "De overheid moet streng optreden tegen het overdragen van onverdraagzaamheid en ondemocratische opvattingen. In het bijzonder op scholen. We zijn echter terughoudend als het gaat om strenger controleren en een over-controlerende houding van de overheid."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Elke Nederlander is een zelfstandig individu dat, door zijn of haar keuzes, mede vormgeeft aan de bredere cultuur in Nederland. Culturele identiteit en levensbeschouwelijke ontwikkeling zijn geen verantwoordelijkheid van de overheid."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Kerk en staat dienen te allen tijde gescheiden te zijn en te blijven van elkaar."
            }
        ]
    },
    {
        "theme": "Stikstof",
        "title": "De regering moet ervoor zorgen dat er in 2030 minstens de helft minder stikstof in de lucht komt.",
        "info": "Grote bedrijven, de bouw, het verkeer en vee zorgen voor de meeste stikstof in de lucht.  Om de Europese natuurdoelen te halen moet de uitstoot van stikstof flink omlaag, want die is slecht voor de natuur. Door stikstof gaan namelijk veel planten, bomen en dieren dood. De regering heeft in de wet vastgelegd dat er in 2035 de helft minder stikstof in de lucht moet zijn. Volgens deze stelling zou dat dus eerder moeten.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 wil schonere lucht, schoon water en een gezonde bodem zodat we goed voedsel kunnen verbouwen. Daarvoor moet de stikstofuitstoot omlaag, en kijkt D66 niet alleen naar de landbouw maar ook de industrie en luchtvaart. Zo herstellen we de natuur en kunnen we weer huizen bouwen."
            },
            {
                "party": "GL-PvdA",
                "statement": "De hoge stikstofuitstoot in Nederland is schadelijk voor onze natuur, de kwaliteit van het water en van de bodem. Daarom moet de veestapel kleiner en de industrie schoner. We gaan zo snel mogelijk aan de slag om de natuur te herstellen, bijvoorbeeld door het verbinden van natuurgebieden."
            },
            {
                "party": "PvdD",
                "statement": "De natuur heeft zwaar te leiden onder het stikstofoverschot. Om de achteruitgang van de natuur te stoppen, moet er minimaal 70% minder stikstof worden uitgestoten in 2030. We leggen dit doel wettelijk vast. De veehouderij krimpt met 75% en ook industriële bedrijven dringen hun uitstoot terug."
            },
            {
                "party": "Volt",
                "statement": "Volt wil de uitstoot van stikstof sterk terugdringen. We moeten zo snel mogelijk met Europese regels komen én staan achter de internationale afspraken om in 2030 de meest kwetsbare natuur tot beschermd natuurgebied uit te roepen."
            },
            {
                "party": "BIJ1",
                "statement": "De urgentie is enorm hoog. Het navelstaren op jaartallen vertroebelt deze urgentie. Wat BIJ1 betreft, als de stikstofuitstoot niet gisteren al op 0 stond, dan morgen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Neerslag van stikstof zorgt ervoor dat een klein aantal soorten anderen gaat overwoekeren, en bedreigt ecosystemen en biodiversiteit. Grote vervuilers als hoogovens, luchthavens en de bio-industrie zijn te lang met rust gelaten. We moeten stikstofuitstoot inperken en de biodiversiteitscrisis keren."
            },
            {
                "party": "Splinter",
                "statement": "In 2030 wil Splinter het stikstofgehalte gehalveerd hebben ten opzichte van 2020. Ecologen waarschuwen: hoe langer je wacht met maatregelen, hoe meer de natuur achteruitgaat en hoe duurder het uiteindelijk wordt om dit te herstellen. Uitstel leidt daardoor ook tot minder perspectief voor boeren."
            },
            {
                "party": "LEF",
                "statement": "De stikstofuitstoot moet direct omlaag. Dat is beter voor de economie en de natuur. LEF wil circulair ondernemen versnellen door de echte prijs te berekenen voor producten. De uitstoot kan dan binnen no time omlaag. TATA Steel, dat meer uitstoot dan landbouw en veehouderij samen, moet direct dicht."
            },
            {
                "party": "VVD",
                "statement": "De discussie over stikstof is gepolariseerd, ook als het gaat om de jaartallen. We moeten gewoon aan de slag gaan. Wij richten onze aandacht op een effectieve aanpak die zorgt voor een daling van de stikstofuitstoot. Het doel in de huidige Stikstofwet voor 2035 staat. Maar hoe sneller, hoe beter."
            },
            {
                "party": "PVV",
                "statement": "Stikstofregels moeten van tafel of op zijn minst worden versoepeld, zodat er weer huizen en wegen kunnen worden gebouwd en onze boeren weer kunnen boeren."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil de natuur zo snel mogelijk in goede staat brengen door middel van een gebiedsgerichte aanpak samen met boeren en tuinders. Hierbij kiezen we voor een realistisch tijdspad en houden we vast aan de huidige stikstofwet waarin het streefjaar op 2035 staat."
            },
            {
                "party": "SP",
                "statement": "We stoten in ons land te veel stikstof uit. Dat is slecht voor de natuur. Dit doel (2030) was goed, maar is door falen van het kabinet onmogelijk geworden. De nieuwe regering moet met provincies en boeren verloren tijd inhalen en uitstoot snel beperken. Daarbij moet er perspectief zijn voor boeren."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat het volledige stikstofbeleid van tafel moet. Het is een volledig bureaucratisch probleem - er is dus geen enkele reden om door te gaan met het beleid."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het is goed en nodig om de stikstofuitstoot te halveren. Dat is belangrijk voor de natuur. 2030 is niet realistisch, daarom hanteert de ChristenUnie de deadline uit de huidige stikstofwet, dat is 2035.  Alle sectoren, dus ook industrie en luchtvaart, moeten daaraan hun steentje bijdragen."
            },
            {
                "party": "JA21",
                "statement": "JA21 heeft een initiatiefnota geschreven om de grote knelpunten in de Stikstofwet op te lossen. De huidige rekenmodellen zijn totaal onrealistisch. Door een realistische interpretatie van \"de staat van de natuur\" halen we Nederland van het stikstofslot. Halvering van stikstof voor 2030 is onnodig."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt dit onhaalbaar. Onder meer de landbouw heeft mogelijkheden om de stikstofuitstoot te verlagen. De vele gezinsbedrijven in deze sector hebben hier echter voldoende tijd, instrumenten en geld voor nodig. De SGP wil geen beleid over de rug van boeren."
            },
            {
                "party": "DENK",
                "statement": "DENK staat voor klimaatrealisme. De kwaliteit van onze natuurgebieden hangt van meer af dan alleen stikstof. Daarom wil DENK zich niet fixeren op stikstof alleen, maar moet er een realistische maatstaf komen voor de algehele kwaliteit van de natuur."
            },
            {
                "party": "50PLUS",
                "statement": "Om in deze stikstofcrisis de toenemende belasting van het milieu door aanwas verkeer, intensivering landbouw, groei industrie terug te dringen zijn maatregelen nodig. Op Europees niveau moet onderzocht worden hoeveel stikstof er minder kan op welk tijdstip en met welke maatregelen."
            },
            {
                "party": "BBB",
                "statement": "De huidige Stikstofwet gaat wat BBB betreft van tafel. Bij de stikstofaanpak willen we de focus leggen op natuurkwaliteit, in plaats van dieraantallen, hectares en stikstof. Daarnaast willen we innovatie inzetten om stikstofuitstoot te verminderen en Nederland van het stikstofslot te halen."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil dat de stikstofdwaling per direct van tafel gaat. Boeren, vissers en bouwers worden knettergek van dit  verzonnen probleem. Bovendien zet deze stikstofhoax onze voedselsoevereiniteit op het spel, daar boeren en vissers gedwongen moeten stoppen."
            },
            {
                "party": "NSC",
                "statement": "De uitstoot van stikstof moet significant worden teruggedrongen in 2035. Daartoe vervangen wij de normen voor stikstofdepositie in de wet door reductiedoelen voor stikstofuitstoot, waarbij onderscheid wordt gemaakt tussen uitstoot van ammoniak (NH3) en stikstofoxiden (NOx)."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Libertaire Partij ziet milieumaatregelen als vergunning om te mogen vervuilen. Bij schade of dreigende schade door vervuiling moet je bij de rechter je gelijk kunnen halen."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Alle klimaat/stikstof gekte moet DIRECT van tafel."
            }
        ]
    },
    {
        "theme": "Afschaffen kostendelersnorm",
        "title": "Als je recht hebt op een uitkering en je woont samen, moet je hetzelfde bedrag krijgen als wanneer je alleen woont.",
        "info": "In de Participatiewet is afgesproken dat mensen met een uitkering minder geld krijgen als ze samenwonen met iemand die ook geld binnenkrijgt. Het gaat dan bijvoorbeeld om de partner, maar ook om kinderen boven de 27 jaar of inwonende ouders. Die mensen hebben werk of zelf ook een uitkering. Dat noemen we de kostendelersnorm.",
        "results": [
            {
                "party": "GL-PvdA",
                "statement": "We schaffen de kostendelersnorm af. Dat betekent dat je uitkering niet omlaag gaat als je met meerdere volwassenen in een huis woont. We willen namelijk geen boete op samenwonen, mantelzorg, of gezinnen met volwassen kinderen."
            },
            {
                "party": "SP",
                "statement": "Het is oneerlijk  om mensen financieel te straffen als zij bepaalde kosten willen delen door samen te wonen. Wij zouden dit juist moeten bevorderen om samenhorigheid en solidariteit tussen mensen te belonen. Daarnaast is het juist goed voor de woningnood als mensen samen willen gaan wonen."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat uitkeringen niet afhankelijk moeten zijn van iemands woonsituatie."
            },
            {
                "party": "PvdD",
                "statement": "We halen het wantrouwen uit regels voor de sociale zekerheid. Mensen in hetzelfde huishouden hebben recht op een bijstandsuitkering. We schrappen de kostendelersnorm en partnertoets. Bijverdienen wordt mogelijk en we eisen geen tegenprestatie meer van mensen met recht op bijstand."
            },
            {
                "party": "DENK",
                "statement": "DENK is vóór de afschaffing van de zogeheten \"kostendelersnorm\". Dit is feitelijk een boete op samenwonen."
            },
            {
                "party": "50PLUS",
                "statement": "Gezien de woningnood zou het woningdelen/samenwonen moeten worden bevorderd en niet ontmoedigd. 50PLUS wil de solidariteit tussen familieleden en vrienden daarom stimuleren en kiest dan ook voor het afschaffen van de kostendelersnorm voor alle uitkeringen."
            },
            {
                "party": "BBB",
                "statement": "BBB wil de kostendelersnorm afschaffen omdat deze regel belemmerend werkt voor samenwoning en daarmee, vaak onbedoeld, financiële problemen kan veroorzaken voor individuen die kosten willen delen door samen te wonen."
            },
            {
                "party": "BIJ1",
                "statement": "Bestaanszekerheid voor mensen met een uitkering moet zoveel mogelijk beschermd worden. Samenwonen mag hier volgens BIJ1 geen invloed op hebben, net zo min als dat het invloed zou mogen hebben op toeslagen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "We willen het uitkerings- en belastingstelsel vereenvoudigen, met een onvoorwaardelijk basisinkomen. Mensen zijn dan vrij om een samenlevingsvorm te kiezen die past, zonder gevolgen voor hun inkomen. Door de samenwoonboete af te schaffen, kunnen we de wooncrisis verzachten."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil de kostendelersnorm afschaffen. Deze norm bepaalt dat bijstandsgerechtigden, die samenwonen met iemand die ouder is dan 21 jaar, worden gekort op hun uitkering. Een perverse prikkel die ervoor zorgt dat bijstandsgerechtigden huizen vasthouden, omdat ze niet gaan samenwonen."
            },
            {
                "party": "Splinter",
                "statement": "De kostendelersnorm komt te vervallen; mensen in hetzelfde huishouden hebben ook onverkort recht op een bijstandsuitkering. Ook de verplichte tegenprestatie zoals passende arbeid als voorwaarde voor bijstandsuitkering wordt afgeschaft."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP wil een einde maken aan bijstandsuitkeringen inclusief het toeslagenencircus en vervangen door een individueel voorwaardelijk basisinkomen."
            },
            {
                "party": "LEF",
                "statement": "Mensen worden nu gekort op hun uitkering als ze gaan samenwonen. Daardoor worden onnodig veel woningen bezet. LEF wil alle toeslagen en uitkeringen vervangen met een basisinkomen van €1550 per persoon pet maand. Daardoor kunnen mensen probleemloos samenwonen en is de woningnood in één klap opgelost."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Uitkeringen gelden als basis voor een persoon en is niet afhankelijk van een momentopname van de persoon."
            },
            {
                "party": "ChristenUnie",
                "statement": "Als je een jongere onder de 27 in huis neemt of een vriend in nood tijdelijk in huisneemt, mag dat geen gevolgen hebben voor je bijstandsuitkering. Maar het volledig afschaffen van deze regel is wat de Christenunie betreft nog niet aan de orde."
            },
            {
                "party": "VVD",
                "statement": "Als je samenwoont deel je veel kosten en vaste lasten die je anders alleen zou moeten betalen. Daarom is er een minder hoge uitkering per persoon nodig voor samenwonende mensen."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat mensen rond kunnen komen. Daarom verhogen we de uitkeringen vanwege gestegen prijzen. We vinden het redelijk om rekening te houden met de thuissituatie, daarbij maken we uitzonderingen voor jongeren en mantelzorgers. Mensen die zorg verlenen, mogen geen nadeel krijgen."
            },
            {
                "party": "PVV",
                "statement": "Tienduizenden Nederlanders hebben te maken met de zogenaamde kostendelersnorm. \nDeze maatregel betekent dat een bijstandsuitkering verlaagd wordt als er meerdere personen op één adres wonen."
            },
            {
                "party": "CDA",
                "statement": "Gehuwden en samenwonenden hebben samen minder vaste lasten en krijgen een bijstandsuitkering voor samenwonenden. Het CDA wil wel dat de kostendelersnorm voor familieleden wordt afgeschaft, zodat je niet gekort wordt op je uitkering wanneer je bijvoorbeeld je ouders of kinderen in huis neemt."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een maandelijkse huishoudtoelage die toeslagen vervangt. De inkomensonafhankelijke toelage bestaat uit een vaste basisuitkering per huishouden. Bovenop de basis wordt er per volwassene en per kind extra geld uitgekeerd. Ook alleenstaande ouders ontvangen extra geld bovenop de basisuitkering"
            },
            {
                "party": "JA21",
                "statement": "JA21 vindt het van groot belang dat mensen deelnemen aan het arbeidsproces. Werken moet gestimuleerd worden en lonender worden gemaakt ten opzichte van een bijstandsuitkering. Het afschaffen van de kostendelersnorm in de bijstand past daar niet bij."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt het logisch dat gezinsleden elkaar (financieel) ondersteunen, als het bij één van hen financieel tegenzit."
            },
            {
                "party": "NSC",
                "statement": "Uitkeringen (zoals AOW en bijstand) houden wél rekening met wel of niet samenwonen. Wij willen hier geen veranderingen in aanbrengen.\nVoor diverse uitkeringen op het gebied van werkloosheid en arbeidsongeschiktheid geldt dat je er individueel recht op hebt, omdat je ook premie hebt betaald."
            }
        ]
    },
    {
        "theme": "Uitbreiding Europese Unie",
        "title": "De regering moet zich ertegen verzetten dat meer landen lid worden van de Europese Unie.",
        "info": "De Europese Unie (EU) telt op dit moment 27 landen. Er zijn tien landen die ook bij de EU willen. Landen kunnen pas lid worden als ze voldoen aan bepaalde eisen van de EU. Zo moeten ze democratisch zijn, de economie op orde hebben en corruptie bestrijden. Alle 27 landen moeten akkoord gaan met nieuwe leden. Als één land zich daartegen verzet, gaat uitbreiding van de EU niet door.",
        "results": [
            {
                "party": "PVV",
                "statement": "Hoe minder landen in de EU hoe beter. Sterker nog: de PVV wil een bindend referendum over Nexit."
            },
            {
                "party": "SP",
                "statement": "De verschillen binnen de EU zijn nu al te groot. Dat geldt voor de economische verschillen, maar bijvoorbeeld ook hoe er tegen de rechtsstaat aangekeken wordt. Verdere uitbreiding brengt het risico met zich mee dat de verschillen nog groter worden en besluiten nog moeilijker genomen kunnen worden."
            },
            {
                "party": "FVD",
                "statement": "FVD wil per direct stoppen met een verdere uitbreiding van de Europese Unie."
            },
            {
                "party": "PvdD",
                "statement": "De EU wordt niet verder uitgebreid zolang de democratische controle niet op orde is en de interne markt leidend is."
            },
            {
                "party": "JA21",
                "statement": "JA21 is terughoudend als het gaat om verdere uitbreiding van de EU. Nederland is een netto-betaler en is er niet bij gebaat als meer zwakke landen toetreden. Wat JA21 betreft mag de EU alleen uitbreiden als een meerderheid van Nederland via een referendum zich hierover positief heeft uitgesproken."
            },
            {
                "party": "SGP",
                "statement": "Verdere EU-uitbreiding is onwenselijk omdat de eenheid dan nóg verder onder druk komen te staan. Met strategische landen langs de buitengrenzen van de EU, zoals Georgië en Oekraïne, komen er bij voorkeur alternatieve samenwerkingsvormen. De toetredingscriteria van Kopenhagen gelden onverkort."
            },
            {
                "party": "50PLUS",
                "statement": "De Europese Unie zal eerst de eigen democratische organisatie dienen te optimaliseren alvorens de gaan investeren in extra landen toevoegen."
            },
            {
                "party": "BVNL",
                "statement": "De EU is veel te groot en daarmee inefficiënt geworden. Er moeten niet meer landen lid worden van de EU, Nederland zou er na een bindend referendum juist uitmoeten. De overdracht van soevereiniteit naar de EU moet stoppen en we moeten i.i.g. de mogelijkheid krijgen tot opt-ins en opt-outs."
            },
            {
                "party": "ChristenUnie",
                "statement": "Nieuwe landen die willen toetreden tot de Europese Unie moeten voldoen aan de eisen die bijh onze waardengemeenschap hoort en ook op economisch niveau geloofwaardig kunnen aansluiten. Daar willen we niet aan toornen. Turkije kwalificeert zich niet voor deze criteria en kan niet toetreden tot de EU."
            },
            {
                "party": "VVD",
                "statement": "De VVD is strikt en fair op het gebied van EU-uitbreiding. Europese landen kunnen lid worden van de EU als zij er echt klaar voor zijn en de juiste hervormingen hebben doorgevoerd. Op dit moment zijn er geen nieuwe landen die aan alle eisen voldoen."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat landen moeten voldoen aan scherpe eisen om te kunnen toetreden tot de Europese Unie. Een totale stop drijft grenslanden van de EU in de armen van Poetin en China. Dat is niet in het belang van de veiligheid, stabiliteit en economie van Nederland en Europa."
            },
            {
                "party": "GL-PvdA",
                "statement": "In een snel veranderende wereld is Europese eenheid belangrijk. Als Europese Unie hebben we gedeelde waarden en idealen. Het is een goede zaak dat landen zich hierbij willen aansluiten, maar landen moeten wel voldoen aan de voorwaarden op het gebied van mensenrechten, democratie en rechtsstaat."
            },
            {
                "party": "CDA",
                "statement": "Kandidaat-lidstaten kunnen alleen toetreden wanneer aan alle toelatingscriteria zijn voldaan, waarbij rechtsstatelijkheid een  prioriteit is. Hierop zijn geen uitzonderingen te maken. Voor Oekraïne gelden dezelfde eisen als voor andere kandidaat-lidstaten."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat Nederland zich inzet voor een snelle uitbreiding van de EU. Om het\nuitbreidingsproces te kunnen versnellen zonder de criteria te verzwakken, pleit Volt voor\nhervorming van het toetredingsproces waarbij het lidmaatschap, met bijbehorende\nrechten, in porties verkregen kan worden."
            },
            {
                "party": "DENK",
                "statement": "De Europese Unie heeft een procedure met eisen als landen lid willen worden van de EU. Als landen voldoen aan die eisen en een lidmaatschap niet schadelijk is voor Nederland, zijn wij niet tegen meer leden bij de EU."
            },
            {
                "party": "BBB",
                "statement": "BBB benadrukt het belang van stabiliteit en gezond beheer binnen de EU alvorens uitbreiding te overwegen. Hoewel we terughoudend zijn over snelle uitbreiding, erkennen we dat geopolitieke en stabiliteit overwegingen soms samenwerking noodzakelijk maken."
            },
            {
                "party": "BIJ1",
                "statement": "Wij vinden niet dat de regering zich moet verzetten tegen uitbreiding van de EU. Wel moet bij de toetsing van toelatingscriteria de focus liggen op het naleven van mensenrechten in plaats van het hebben van het ‘juiste’ economisch beleid."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen zijn een internationale beweging. Wij werken graag samen, waar mogelijk. De EU heeft strikte procedures voor toetreding. Als een land voldoet aan die eisen om mee te doen, gaan wij daar niet voor liggen."
            },
            {
                "party": "NSC",
                "statement": "Een verdere uitbreiding van de EU is in beginsel mogelijk. Maar als een land niet voldoet aan de zogeheten 'Kopenhagen-criteria' (eisen m.b.t. democratie, rechtsstaat, aanpak corruptie etc.) verwachten wij dat de regering zich tegen de toelating van dat land verzet."
            },
            {
                "party": "Splinter",
                "statement": "Onder bepaalde voorwaarden mogen landen zich aansluiten bij de Europese Unie. Bijvoorbeeld als het VK terug wil komen, moeten we die gesprekken zeker aangaan. Voor nieuwe Oost Europese landen hanteren we een strikt toetredingsbeleid."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Libertaire Partij streeft naar een herpositionering binnen een samenwerkingsmodel vergelijkbaar met de EEG. In deze samenwerking zijn landen die willen toetreden meer dan welkom. Als dit niet haalbaar blijkt te zijn, is Nederland genoodzaakt uit de EU te treden."
            },
            {
                "party": "LEF",
                "statement": "De Europese Unie is een geweldig economisch samenwerkingsverband, hier zouden zoveel mogelijk landen deel van uit moeten maken. De nadruk van deze samenwerking dient hierin te liggen op het economisch aspect, de EU trekt momenteel te veel macht naar zich toe door een gecentraliseerde machtsstructuur."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Nederland moet uit de Europese Unie, direct. Wat die Unie erna beslist is daarmee geen issue meer voor Nederland."
            }
        ]
    },
    {
        "theme": "Risicoprofilering op basis van nationaliteit",
        "title": "De overheid mag nooit de afkomst of nationaliteit van mensen gebruiken om risico’s op criminaliteit in te schatten.",
        "info": "De overheid gebruikt steeds vaker gegevens van burgers. Bijvoorbeeld om fraude met uitkeringen op te sporen. Of om criminaliteit tegen te gaan. Die gegevens gaan over de wijk waar ze wonen, maar ook over persoonlijke informatie van burgers, zoals hun leeftijd, woonplaats of afkomst. Op basis van een reeks instructies (algoritme) doen computersystemen daarmee voorspellingen voor groepen mensen. Het gebruik van afkomst of nationaliteit in een algoritme zorgt ervoor dat daarop ook wordt beoordeeld.",
        "results": [
            {
                "party": "D66",
                "statement": "Het onrecht van etnisch profileren werd door het toeslagenschandaal pijnlijk duidelijk. De rechter oordeelde dit jaar dat selecteren op etniciteit verboden is. D66 wil dat alle instanties en uitvoeringsorganisaties van de overheid stoppen met het gebruik van afkomst in risicoprofielen."
            },
            {
                "party": "GL-PvdA",
                "statement": "In het toeslagenschandaal hebben we gezien wat er gebeurt als mensen op hun afkomst worden geselecteerd en gediscrimineerd. Duizenden levens zijn erdoor kapotgemaakt. GL-PvdA wil een betrouwbare overheid, die zich houdt aan de Grondwet en dus niemand discrimineert."
            },
            {
                "party": "CDA",
                "statement": "Het CDA staat pal voor artikel 1 van onze Grondwet. Wat het CDA betreft, is er voor discriminatie en etnisch profileren geen plek in Nederland, dus het inschatten van risico's op criminaliteit mag niet gebaseerd zijn op de afkomst of nationaliteit van mensen."
            },
            {
                "party": "SP",
                "statement": "Dit zal in de praktijk leiden tot discriminatie van onschuldige mensen. Dat is onacceptabel. De misstanden bij de belastingdienst rondom het toeslagenschandaal hebben laten zien wat het kan betekenen voor mensen als je onschuldig bent, maar de overheid je toch op een zwarte lijst heeft gezet."
            },
            {
                "party": "PvdD",
                "statement": "De overheid behandelt alle burgers gelijk. Etnisch profileren leidt tot stigmatisering en grote problemen bij individuele burgers en hele bevolkingsgroepen, en wordt wettelijk verboden. Preventief fouilleren werkt etnisch profileren en stigmatiseren in de hand en staan we niet langer toe."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het enkel controleren van mensen met een bepaalde nationaliteit en afkomst wekt discriminatie door de overheid in de hand."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een minister voor Discriminatiebestrijding, Inclusie en Gelijkwaardigheid. Deze is verantwoordelijk voor gelijkheid in wetten, het publieke domein en op de werkvloer."
            },
            {
                "party": "DENK",
                "statement": "Afkomst of nationaliteit hebben niets te maken met criminaliteit. Het verband daartussen leggen is racisme. Criminaliteit heeft te maken met het individuele handelen. De overheid dient zich te richten op individuen die crimineel gedrag vertonen."
            },
            {
                "party": "50PLUS",
                "statement": "In het kader van discriminatie is dit niet toegestaan."
            },
            {
                "party": "BBB",
                "statement": "BBB is tegen etnisch profileren en vindt dat de overheid bij risico-inschattingen op criminaliteit altijd moet uitgaan van individueel gedrag, niet van afkomst of nationaliteit, om eerlijke en gelijke behandeling te waarborgen."
            },
            {
                "party": "BIJ1",
                "statement": "Het gebruik van risicoprofielen is een vorm van institutioneel racisme. Er komt een verbod op het gebruik van etniciteit en nationaliteit in risicoprofielen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor gelijke rechten en kansen voor iedereen. Etnische profilering maakt mensen vanwege hun afkomst bij voorbaat sneller verdacht. Dat is onaanvaardbaar."
            },
            {
                "party": "NSC",
                "statement": "Het toeslagenschandaal heeft laten zien dat (automatische) beoordelingen, onder meer op basis van culturele achtergrond, kunnen leiden tot ernstige en onherstelbare fouten, zoals discriminatie en onjuiste terugvorderingen."
            },
            {
                "party": "Splinter",
                "statement": "Het Toeslagenschandaal heeft bewezen dat het profileren van mensen om frauderisico's in te schatten alleen maar ellende veroorzaakt."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Het voorspellen van criminaliteit is een glijdende schaal richting \"pre-crime\". Dat mag nimmer gebeuren op institutioneel niveau. De Libertaire Partij is vel tegenstander van sleepnet methoden."
            },
            {
                "party": "LEF",
                "statement": "De afkomst en nationaliteit van mensen mag nooit als leidende factor gebruikt worden binnen ons strafrecht. Dat is strijdig met Artikel 1 van de grondwet."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Afkomst of Nationaliteit mag nooit gebruikt worden om risico's op criminaliteit in te schatten."
            },
            {
                "party": "VVD",
                "statement": "De VVD vindt dat etnisch profileren en andere vormen van onterechte profilering nooit mogen. Maar de overheid moet wel mogelijkheden hebben op een verantwoorde manier risico’s in te schatten, bijv. bij signalen van mensenhandel."
            },
            {
                "party": "PVV",
                "statement": "Bij de bestrijding van criminaliteit mag het registreren van nationaliteit geen taboe zijn. Al is het maar om criminelen met een dubbele nationaliteit te kunnen denaturaliseren en uitzetten."
            },
            {
                "party": "FVD",
                "statement": "FVD wil opsporing bespoedigen door justitie toe te staan te profileren op basis van statistisch relevante categorieën."
            },
            {
                "party": "JA21",
                "statement": "JA21 vertrouwt op de deskundigheid en professionaliteit van onze politie en justitie. Wij stoppen met de misplaatste obsessie met 'etnisch profileren' en geven onze agenten de vrijheid en de ruimte om effectief te werk te gaan."
            },
            {
                "party": "SGP",
                "statement": "Als in een bepaalde wijk criminele bendes met een bepaalde etnische achtergrond actief zijn mag de politie screenen op bijvoorbeeld kentekens uit deze landen."
            },
            {
                "party": "BVNL",
                "statement": "Het is aan politie en veiligheidsdiensten om een professionele risicoanalyse te maken. De focus moet liggen op het tegengaan van criminaliteit."
            }
        ]
    },
    {
        "theme": "Elektrische auto's",
        "title": "De overheid moet geen geld meer geven aan mensen om een elektrische auto te kopen.",
        "info": "Het wegverkeer in Nederland stoot ongeveer 20 procent van de broeikasgassen uit. Een elektrische auto stoot tijdens het rijden geen broeikasgassen uit. Daarom geeft de overheid geld aan mensen die een elektrische auto kopen: 2.000 euro voor een gebruikte elektrische auto en 2.950 euro voor een nieuwe. Voor het opladen van een elektrische auto moet natuurlijk elektriciteit worden opgewekt en daarbij kunnen wel broeikasgassen vrijkomen.",
        "results": [
            {
                "party": "PVV",
                "statement": "Het is niet eerlijk dat de gewone Nederlander die geen dure elektrische auto kan betalen moet opdraaien voor de dikke Tesla van een ander.\nWij vinden dan ook dat subsidies op elektrische auto’s gestopt moeten worden."
            },
            {
                "party": "SP",
                "statement": "Elektrische auto's zijn duurder dan vergelijkbare auto's die rijden op benzine of diesel. Daardoor kunnenmensen met een relatief hoog inkomen die wel betalen. Het is oneerlijk om deze groep te blijven subsidiëren. De SP kiest voor klimaatrechtvaardigheid waarbij iedereen mee kan doen."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat de overheid geen actieve rol moet spelen in de hedendaagse 'klimaathype'. Als mensen zelf een elektrische auto kopen is dat prima, maar de overheid moet hier niet in faciliteren door subsidie te verstrekken."
            },
            {
                "party": "JA21",
                "statement": "Het rijden van een elektrische auto is een eigen keuze. JA21 wil subsidies en andere fiscale voordelen op elektrische auto’s beperken. Daarbij willen wij een gelijk speelveld voor alle technologieën creëren, zoals het stimuleren van E-fuel-techniek. Ook moeten de accijns op brandstof omlaag."
            },
            {
                "party": "50PLUS",
                "statement": "De subsidie op elektrische auto’s is vooral een subsidie voor rijk Nederland gebleken."
            },
            {
                "party": "BIJ1",
                "statement": "Elektrische auto’s zijn momenteel een luxe die niet voor iedereen toegankelijk is, ook met subsidie.  BIJ1 zet zich voorlopig liever in op gratis en toegankelijk OV."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor efficiënt ruimtegebruik en duurzame oplossingen. Auto's nemen veel ruimte in. Wij stimuleren liever het delen van auto's, en het gebruik van het Openbaar Vervoer."
            },
            {
                "party": "BVNL",
                "statement": "Het wel of niet stimuleren van de elektrische auto moet aan de markt worden gelaten en is geen taak voor de overheid."
            },
            {
                "party": "NSC",
                "statement": "We willen dat gebruik van een auto betaalbaar blijft. Elektrische auto’s, die jarenlang fors fiscaal zijn gesubsidieerd, gaan meer bijdragen aan de belastingopbrengsten."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De overheid dient alle burgers gelijk te behandelen. Het bevoordelen van bepaalde groepen ten opzichte van anderen is onacceptabel. Bovendien beschouwt de Libertaire Partij subsidies als een vorm van ongewenste marktmanipulatie."
            },
            {
                "party": "LEF",
                "statement": "Elektrische auto's zijn duur en kunnen alleen aangeschaft worden door de hogere middenklasse. Subsidie doet geen recht aan de klassen hieronder."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Vrije keuze, ook bij de aanschaf van auto's maar niet subsidiëren."
            },
            {
                "party": "VVD",
                "statement": "In de toekomst gaan we meer elektrisch rijden. Elektrische auto’s zijn voor de meeste mensen nog te duur. Het is daarom nu nog nodig dat de overheid mensen helpt om elektrisch te gaan rijden, zodat er de komende jaren meer betaalbare modellen en occasions op de markt komen."
            },
            {
                "party": "D66",
                "statement": "D66 wil werken aan een schonere lucht en het klimaat. Daarom blijven wij het aanschaffen van elektrische auto’s stimuleren. Dit bouwen we af, maar is nu nog nodig. Deze steun moet vooral gaan naar tweedehands auto's, zodat dit voor zo veel mogelijk mensen bereikbaar wordt."
            },
            {
                "party": "GL-PvdA",
                "statement": "Subsidies voor elektrische auto’s zijn nu vooral in het voordeel van mensen die al veel geld hebben. We willen sociale ongelijkheid tussen mensen juist verminderen. Daarom helpen we mensen met een laag- en middeninkomen om over te stappen op een elektrische auto, met gerichte subsidies."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil schoner en duurzamer rijden stimuleren.  Daarom willen wij dat het rijden van een elektrische auto ook mogelijk wordt voor gezinnen met lagere of middeninkomens. Om dat te bereiken vinden we dat stimulering vooral naar auto's in het lage en middensegment moet gaan."
            },
            {
                "party": "PvdD",
                "statement": "De klimaatcrisis vereist dat we snel stoppen met olie. Daarom stimuleren we de overgang naar elektrische auto’s. Maar het aantal auto’s moet ook minder, ze nemen veel ruimte in en er zijn heel veel vervuilende grondstoffen voor nodig. Daarom zetten we in op meer en goedkoper ov en deelmobiliteit."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil ervoor zorgen dat elektrisch rijden na 2025 goedkoper wordt en niet duurder, zoals nu dreigt te gebeuren."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een omslag naar uitstootvrij, en dus wil Volt dat mensen tot 2030 een subsidie kunnen ontvangen voor de aanschaf van een elektrische auto. Volt wil echter ook dat de maximum catalogusprijs van auto’s die met subsidie worden gekocht na 2025 langzaam maar zeker afgebouwd wordt."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil geen financiële steun voor grote, zware elektrische auto's (SUV's), omdat deze meer energie gebruiken dan nodig is en het wegdek belasten. Integendeel. De SGP wil wel financiële steun voor kleinere, nieuwe, maar ook tweedehands elektrische auto's voor de gewone man."
            },
            {
                "party": "DENK",
                "statement": "DENK is tegen Tesla-subsidies voor miljonairs. Daarentegen wil DENK wél subsidies voor de gewone burger die een elektrische auto wil kopen. Lage- en middeninkomens moeten ook de kans krijgen om een elektrische auto aan te schaffen."
            },
            {
                "party": "BBB",
                "statement": "BBB steunt subsidies voor elektrische auto's, echter we benadrukken het belang van onderzoek naar en stimulering van diverse duurzame vervoersmiddelen, niet enkel focussen op elektrisch rijden. Netcongestie en alternatieve brandstoffen verdienen ook aandacht."
            },
            {
                "party": "Splinter",
                "statement": "Elektrisch rijden moet gestimuleerd worden voor de lagere inkomens. Duurzaam vervoer moet voor iedereen beschikbaar zijn. Daarom wil Splinter investeren in subsidie voor kleine elektrische auto's en niet in een subsidie voor alleen rijke mensen die ook zelfstandig een elektrische auto kunnen kopen."
            }
        ]
    },
    {
        "theme": "Hoger minimumloon",
        "title": "Het minimumloon moet binnen drie jaar van 11,51 euro bruto per uur naar 16 euro bruto per uur.",
        "info": "Alle werknemers vanaf 21 jaar hebben recht op het wettelijk minimumloon. Dit is het loon dat je minimaal moet ontvangen als je werkt. De regering stelt het minimumloon vast. De hoogte van de bijstandsuitkering en de AOW (de Algemene Ouderdomswet) is gekoppeld aan het minimumloon.",
        "results": [
            {
                "party": "D66",
                "statement": "Mensen die hard werken moeten kunnen rondkomen. Daarom stelt D66 voor het minimumloon met 10% te verhogen naar €17,50 per uur in 2028. Op die manier gaat werken meer lonen en stijgen ook andere salarissen mee. We kijken daarbij goed naar de effecten op de prijzen en de economie."
            },
            {
                "party": "GL-PvdA",
                "statement": "Mensen die minimumloon verdienen hebben te vaak moeite met rondkomen. Vaak gaat het om de mensen die onmisbaar werk doen, zoals bouwvakkers, zorgpersoneel en schoonmakers. Daarom verhogen we het minimumloon naar €16 bruto per uur voor iedereen vanaf 18 jaar. Ook de uitkeringen stijgen mee."
            },
            {
                "party": "PVV",
                "statement": "Werken moet lonen. Het verhogen van het minimumloon verhoogt het salaris van mensen met een baan en dat is zeer gewenst. Het is ook goed dat de pensioenen en uitkering meegroeien."
            },
            {
                "party": "SP",
                "statement": "De SP verhoogt het minimumloon in één keer naar 16 euro per uur. Het aantal mensen dat in armoede leeft dreigt flink toe te nemen in Nederland. De beste manier om dit te voorkomen is door de lonen, uitkeringen en AOW structureel te verhogen."
            },
            {
                "party": "PvdD",
                "statement": "We verhogen het minimumloon naar 16 euro per uur. We hanteren de vuistregel dat het minimumloon meebeweegt met de andere inkomens en minimaal 60% van het mediane inkomen in Nederland is. Uitkeringen, waaronder de AOW, WIA, Wajong en bijstand, stijgen mee."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het minimumloon is te laag om van rond te komen. De ChristenUnie stelt voor het minimumloon de komende kabinetsperiode te verhogen met meer dan 10% extra te verhogen, waarmee het minimumloon in 2028 uitkomt op bijna € 18 per uur."
            },
            {
                "party": "Volt",
                "statement": "Volt wil het minimumloon dit jaar nog verhogen naar 14 euro uur en ontkoppelen van minimum- en AOW-uitkeringen. Het minimumloon zal in de jaren daarna tot boven de 16 euro per uur stijgen."
            },
            {
                "party": "DENK",
                "statement": "Het minimumloon was voor de coronacrisis al te laag. Daarna hebben we zeer zware inflatie gehad die de koopkracht onder druk zet. Om het verlies aan inkomsten te compenseren, is het noodzakelijk om de minimumlonen te laten stijgen tot 16 euro per uur."
            },
            {
                "party": "50PLUS",
                "statement": "Gezien de enorme inflatie is €16/uur een zeer reëel uurloon. 50PLUS wil de koppeling van de AOW en overige uitkeringen met het minimumloon behouden blijft zodat ook deze uitkeringen verhoogt worden."
            },
            {
                "party": "BBB",
                "statement": "BBB streeft naar een hoger minimumloon, rekening houdend met inflatie en levenskosten, om bestaanszekerheid te waarborgen. Een stijging naar €16 binnen drie jaar sluit aan bij de ambitie om werknemers een eerlijk en leefbaar loon te bieden."
            },
            {
                "party": "BIJ1",
                "statement": "Het minimumloon is veel te laag. BIJ1 pleit ervoor om te beginnen met een verhoging naar 16 euro per uur. Ook verlagen we de werkweek van 40 uur naar 30 uur per week met loonbehoud."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor eerlijke arbeidsvoorwaarden. Werken moet lonen. Daarom willen we een toereikend minimumloon conform de Europese norm van 60% van het mediaanloon. In Nederland is dat nu 16 euro per uur. Daarnaast willen we een basisinkomen."
            },
            {
                "party": "Splinter",
                "statement": "We zien steeds meer werkende armen met twee banen of meer, die het hoofd niet boven water kunnen houden. Het sociaal minimum moet daarom flink omhoog."
            },
            {
                "party": "LEF",
                "statement": "Van een minimumloon kan je niet rondkomen. 16 euro is een goede start maar biedt nog geen bestaansminimum. LEF wil gelijk loon voor gelijk werk, afschaffing van het jeugdloon en de invoering van een basisinkomen van €1550 per persoon per maand. Een universeel basisinkomen is échte bestaanszekerheid."
            },
            {
                "party": "VVD",
                "statement": "We verhogen het minimumloon om werkende Nederlanders te steunen. We doen dit geleidelijk om kleine bedrijven te ontzien en te voorkomen dat prijzen onnodig extra stijgen."
            },
            {
                "party": "CDA",
                "statement": "Wie normaal werkt voor de kost mag niet in armoede vervallen. Het CDA wil dat bereiken door gerichte lastenverlichting, een verhoging van het minimumloon (we volgen het CPB-pad en verhogen het minimumloon naar €16,- in 2028) of een combinatie van ingrepen."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat een hoger minimumloon averechts werkt. Het klinkt sympatiek, maar zal in de praktijk zorgen voor verdere monopolisering van de bedrijven van het grootkapitaal en een hogere inflatie. FVD is daarom voor een algehele belastingverlaging voor werkenden."
            },
            {
                "party": "JA21",
                "statement": "Een verhoging van het minimumloon zorgt voor hogere kosten voor onze bedrijven. Zij moeten dit doorberekenen in hun producten, waardoor een prijsopdrijvend effect ontstaat. Het verhogen van het minimumloon is dan ook niet de oplossing. In plaats daarvan maken we de eerste 20.000 euro belastingvrij."
            },
            {
                "party": "SGP",
                "statement": "De SGP is voorstander van verhoging van het nettominimumloon door de lasten\nop arbeid te verlagen, maar wil geen generieke stijging van het brutominimumloon met meer dan de\ncao-ontwikkeling. Dit verhoogt vooral de lasten voor werkgevers en is slecht voor onze economie en werkgelegenheid."
            },
            {
                "party": "BVNL",
                "statement": "BVNL deelt de mening dat het minimumloon omhoog moet, maar pleit voor een verhoging naar 14 euro bruto per uur. Tegelijkertijd wil BVNL de werkgeverslasten fors verlagen, hetgeen we bekostigen door substantieel te snijden in het overheidsapparaat."
            },
            {
                "party": "NSC",
                "statement": "Bestaanszekerheid betekent dat we het minimumloon en de daaraan gekoppelde uitkeringen herijken. Ook de kosten voor wonen, boodschappen en bv. energie spelen een belangrijke rol. We zetten ons in voor een verbetering van de koopkracht door beheersing van de kosten voor wonen, voedsel en energie."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP neemt een voorbeeld aan landen als Zweden en Oostenrijk, en streeft naar het afschaffen van het minimumloon. De beloning voor werk is een vrijwillige overeenkomst werknemer en werkgever en geen taak van de overheid."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Dit is slecht voor de economie. Dit betekent automatisch verlies voor de onderneming of het minder mensen aannemen en daarmee een hogere werkdruk op de werknemers.\n\nPrijzen zullen er door stijgen, dus uiteindelijk is niemand hierbij gebaat"
            }
        ]
    },
    {
        "theme": "Bouwen op landbouwgrond",
        "title": "De regering moet het bouwen van woonwijken op landbouwgrond gemakkelijker maken.",
        "info": "In de komende zeven jaar zullen er ongeveer 900.000 woningen bij moeten komen om het woningtekort in Nederland op te lossen. Gemeenten die woningen willen laten bouwen, moeten nu eerst kijken of het mogelijk is in bebouwd gebied. Pas onder strenge voorwaarden mag het op landbouwgebied. Als het gemakkelijker wordt, kunnen er sneller nieuwe woningen worden gebouwd.",
        "results": [
            {
                "party": "VVD",
                "statement": "We willen meer huizen bouwen. Dat is niet specifiek gericht op landbouwgrond. Dat kan niet alleen binnen de huidige grenzen van een stad of dorp. Daarom zullen we ook aan de randen daarvan moeten bouwen. Het is dus niet zo dat op grote schaal landbouwgrond bestemd wordt voor woningbouw."
            },
            {
                "party": "D66",
                "statement": "D66 wil meer betaalbare huizen voor mensen. Woningen moeten vooral gebouwd worden waar al infrastructuur en voorzieningen zijn: daar is het beter wonen, en bouwen sneller en goedkoper. Maar we zijn niet tegen bouwen op landbouwgrond, als gemeenten of boeren dat willen."
            },
            {
                "party": "GL-PvdA",
                "statement": "Er zijn meer betaalbare woningen nodig. Het liefst bouwen we in stedelijk gebied, maar het is onvermijdelijk om een deel van de landbouwgrond in te zetten voor woningbouw. We betrekken boeren hierbij, zo kunnen op boerenerven bijvoorbeeld starters- of seniorenwoningen komen."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil regels voor bouwen in het groen versoepelen, zodat elke gemeente ruimte krijgt om er een straat of wijk bij te bouwen. Dit leidt niet tot grootschalige omzetting van landbouwgrond. Het CDA wil vruchtbare landbouwgronden juist een beschermde status geven, want grondsoort doet ertoe."
            },
            {
                "party": "SP",
                "statement": "Er is een dringende behoefte aan meer betaalbare woningen, die moeten we snel gaan bouwen. Wij kiezen voor meer woningen en meer natuur. De grootschalige bio-industrie, die vooral gericht is op export, willen wij stoppen. Er blijft natuurlijk volop ruimte voor boeren met minder dieren."
            },
            {
                "party": "PvdD",
                "statement": "We verminderen het aantal dieren in de veehouderij met 75% voor natuur, milieu, klimaat en de dieren, maar zo maken we ook ruimte voor meer natuur en meer betaalbare woningen. Maar de meeste betaalbare woningen realiseren we binnen de bebouwde kom en door het ombouwen van bestaande gebouwen."
            },
            {
                "party": "Volt",
                "statement": "Vanwege de woningnood is er landelijke regie nodig om te bepalen waar gebouwd mag worden en waar ruimte komt voor andere bestemmingen. Dat betekent dat er ook gebouwd moet kunnen worden op grond die nu voor landbouw wordt gebruikt."
            },
            {
                "party": "DENK",
                "statement": "Het woningtekort noopt ons tot het benutten van elke mogelijke oplossing om meer te kunnen bouwen."
            },
            {
                "party": "50PLUS",
                "statement": "Er is een wooncrisis en er zijn veel woningen nodig. Die woningen kunnen niet allemaal in de stad gebouwd worden. Daarom moet aan de randen van de stad extra ruimte voor woningen komen. Maar de vruchtbare landbouwgrond voor andere doeleinden dan landbouw blijft eerder een uitzondering dan regel."
            },
            {
                "party": "BIJ1",
                "statement": "BIJ1 wil het recht op wonen wettelijk afdwingbaar maken. Iedereen zou voorzien moeten worden van een passende woning. Hiervoor moeten er veel woningen beschikbaar gemaakt worden. Dit doen we door middel van onteigening en actieve verwerving van private grond."
            },
            {
                "party": "Splinter",
                "statement": "Om de wooncrisis tegen te gaan moeten we alles op alles zetten om zo snel mogelijk betaalbare woningen te realiseren. Vaak is de natuurwaarde van landbouwgrond (helaas) relatief laag, dus bruikbaar voor woningbouw. Wel wil Splinter duurzaam bouwen en een gezonde groene leefomgeving creëren."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Grondbezitters zouden de vrijheid moeten hebben om hun land naar eigen inzicht te benutten. De Libertaire Partij ziet in de Omgevingswet en de daarvan afgeleide omgevingsplannen een groeiende centralisatie en een verslechtering ten opzichte van de bestaande situatie met lokale bestemmingsplannen."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil landbouwgrond zoveel mogelijk behouden. Het liefst bouwen we dan ook woningen binnen bestaande kernen en aan de randen van steden en dorpen. De woningnood is echter hoog, dus bouwen op landbouwgrond kan niet geheel uitgesloten worden. Uiteraard evenwichtig en op basis van vrijwilligheid."
            },
            {
                "party": "LEF",
                "statement": "Het is niet óf óf. Er zijn heel veel leegstaande boerderijen. Het moet makkelijker worden om boerderijen om te bouwen naar woningen. Daardoor loopt het platteland niet leeg en helpen we woningzoekende mensen aan hun droomhuis."
            },
            {
                "party": "PVV",
                "statement": "Zeker niet. Boerenland moet van boeren blijven. Er mogen ook geen huizen voor statushouders op hun land worden gebouwd. Er moet wel veel meer worden gebouwd zowel in de stad als daarbuiten."
            },
            {
                "party": "FVD",
                "statement": "FVD vindt dat landbouwgrond behoort aan de boeren en dat er onder geen beding landbouwgrond opgeofferd mag worden aan de megalomane landelijke plannen om Nederland vol te bouwen."
            },
            {
                "party": "ChristenUnie",
                "statement": "We moeten zuinig zijn op goede landbouwgrond. Alleen, de komende tien jaar moeten er ongeveer 1 miljoen woningen worden bijgebouwd. Vooral in bestaand stedelijk gebied, maar niet uit te sluiten valt dat ook daarbuiten huizen moeten worden bijgebouwd, bijvoorbeeld in de omgeving van Almere."
            },
            {
                "party": "SGP",
                "statement": "Ook landbouwgrond is nodig voor voedselvoorziening en een meer grondgebonden veehouderij. De SGP vindt dat er nu al voldoende instrumenten zijn om zo nodig landbouwgronden op te kopen voor het bouwen van woonwijken."
            },
            {
                "party": "BBB",
                "statement": "We gaan in het binnenstedelijke gebied meer inzetten op bouwen in de hoogte met daarbij oog voor design en passend in de omgeving. De vruchtbare landbouwgrond in Nederland is essentieel voor de voedselvoorziening van onze eigen inwoners en mensen in landen met minder vruchtbare grond."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor betaalbare woningen voor iedereen. Hiervoor willen wij met name inzetten op bebouwing in bestaande kernen (verdichting). Daarnaast willen wij flexibeler omgaan met bestemmingsplannen om alternatieve woonvormen makkelijker mogelijk te maken."
            },
            {
                "party": "BVNL",
                "statement": "Zolang landbouw kansrijk is, leveren we landbouwgronden niet in. De woningnood lossen we o.a. op met een asielstop, schrappen van het stikstofbeleid en duurzaamheidseisen, het afgeven van bouwvergunningen, minder regels en bureaucratie. Bij een gezonde woningmarkt zijn vraag en aanbod in balans."
            },
            {
                "party": "NSC",
                "statement": "Het bouwen van nieuwe woningen heeft voor ons hoge prioriteit. Dit zal op sommige plekken ten koste gaan van landbouwgrond. Gemeenten hebben voldoende middelen om gronden te verwerven en boeren te compenseren."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "In de basis is SvN van mening dat landbouwgrond in Nederland haar landbouwbestemming al te gemakkelijk verliest. Het staat bedrijven binnen de landbouwsector vanzelfsprekend vrij om deze bestemming te veranderen in overleg met het lokale bestuur. De rol van de regering hierin dient volgens SvN nietig te zijn."
            }
        ]
    },
    {
        "theme": "Referendum",
        "title": "Inwoners van Nederland moeten een nieuwe wet kunnen tegenhouden met een referendum.",
        "info": "In Nederland stemt het parlement, dat bestaat uit de Eerste en de Tweede Kamer, over wetten. Inwoners van Nederland kunnen daar niet zelf over stemmen. Een volksstemming over een bepaalde wet heet een referendum. Invoering van dit voorstel betekent dat inwoners kunnen aangeven of ze het wel of niet eens zijn met een wet die al door het parlement is aangenomen. Het gaat om een bindend referendum: als voldoende mensen tegen zo’n wet stemmen, gaat deze niet door.",
        "results": [
            {
                "party": "D66",
                "statement": "Een correctief bindend referendum kan werken als uiterste noodrem. Inspraak moet ook in een eerder stadium beter geregeld worden. De opkomst moet hoog genoeg zijn, zodat het niet door een minderheid misbruikt kan worden om democratische besluiten te dwarsbomen. Verdragen zijn uitgezonderd."
            },
            {
                "party": "GL-PvdA",
                "statement": "We willen het vertrouwen in de democratie herstellen. Dat kan alleen als iedereen kan meepraten. Het correctief referendum is een manier om mensen meer invloed te geven. Wel kijken we hoe het referendum past in andere wetgeving, internationale verdragen en de rechtsstaat."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil een bindend referendum. Dit geeft het Nederlandse volk de mogelijkheid om de politici in Den Haag tot de orde te roepen. Het referendum is een belangrijk instrument om het volk het laatste woord te geven, iets wat in een democratie vanzelfsprekend zou moeten zijn."
            },
            {
                "party": "SP",
                "statement": "Te vaak zien we bestuurders dingen doen waar mensen nooit voor hebben gestemd. De bevolking krijgt daarom het recht om de politiek terug te fluiten, op het moment dat die besluiten neemt die mensen niet willen. Daarom: Een bindend en correctief referendum op nationaal, provinciaal en lokaal niveau."
            },
            {
                "party": "FVD",
                "statement": "FVD wil een bindend referendum invoeren naar Zwitsers model."
            },
            {
                "party": "PvdD",
                "statement": "We voeren een correctief bindend referendum in, óók bij besluitvorming over handelsverdragen. We voeren ook het raadgevend referendum, burgerberaden en andere vormen van burgerparticipatie in ter versterking van de democratie."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil  zorgen dat de stem van de bevolking niet alleen tijdens verkiezingen gehoord wordt, maar dat Nederlanders de kans krijgen om zich tussentijds uit te spreken over belangrijke kwesties. Hiertoe pleit JA21 voor de invoering van bindende referenda."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS vindt maatschappelijke participatie zeer wenselijk en het referendum is daar een instrument van."
            },
            {
                "party": "BBB",
                "statement": "BBB staat voor een correctief referendum waarin burgers hun stem kunnen laten horen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor een versteviging van de democratie. Het buitenland laat zien dat in landen met een bindend correctief referendum als noodrem, er beter geluisterd wordt naar burgers, om een referendumgang te voorkomen."
            },
            {
                "party": "BVNL",
                "statement": "Wat BVNL betreft komt er zo snel mogelijk een bindend referendum, zodat de politiek weer dichter bij de mensen komt."
            },
            {
                "party": "NSC",
                "statement": "We steunen de invoering van een correctief wetgevingsreferendum. We beschouwen zo'n referendum als een aanvulling op de representatieve democratie. Het referendum wordt alleen ingezet om de vraag te beantwoorden of een door het Parlement aangenomen wet van kracht moet worden."
            },
            {
                "party": "Splinter",
                "statement": "Het bindend correctief referendum wordt ingevoerd, zowel landelijk als lokaal. Burgers kunnen het initiatief nemen voor het houden van een referendum, wat de overheid vervolgens zal faciliteren."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Referenda zijn een uitstekende manier voor de bevolking om inspraak te hebben."
            },
            {
                "party": "LEF",
                "statement": "LEF is een groot voorstander van het burgerinitiatief en het recht op uitdagen. Als burgers een betere manier weten om iets in te richten moeten ze daar campagne voor kunnen voeren en wetsvoorstellen voor kunnen lanceren. LEF wil een permanent burgerberaad (Derde Kamer) en meerkeuze (p)referenda."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Een BINDEND referendum. De grens van de geldigheid moet wel aangepast worden."
            },
            {
                "party": "VVD",
                "statement": "We vinden dat het de taak is van de Tweede Kamer om namens alle Nederlanders goede wetten te maken. De kiezer bepaalt wie er in de Tweede Kamer zitten."
            },
            {
                "party": "CDA",
                "statement": "Een referendum vergroot en verscherpt de tegenstellingen in de samenleving. Daarom vindt het CDA het belangrijk om burgers juist eerder in het besluitvormingsproces te betrekken, bijvoorbeeld door middel van burgerberaden, zodat het draagvlak voor voorstellen wordt vergroot."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is geen voorstander van referenda. Referenda bieden schijninvloed. De werkelijkheid is bovendien ingewikkelder dan een stem vóór of tégen een wet of voorstel."
            },
            {
                "party": "Volt",
                "statement": "Volt is tegen een bindend correctief referendum, omdat je wetgeving niet kan\nversimpelen tot een ja/nee-vraag. Het vergroot de verdeeldheid en ontslaat\npolitici van hun verantwoordelijkheid. Volt wil een Nationaal Permanent\nBurgerberaad om inwoners al vroeg bij het wetgevingsproces te betrekken."
            },
            {
                "party": "SGP",
                "statement": "De SGP is geen voorstander van referenda."
            },
            {
                "party": "DENK",
                "statement": "Veelal is een wetsbehandeling een intensief proces waarbij veel belangen gewogen worden. Dat is niet te vatten in een simpel ja of nee. Zie bijvoorbeeld de schadelijke wijze waarop het Brexit referendum is gehouden. DENK is wel voor de terugkeer van het raadgevend referendum."
            },
            {
                "party": "BIJ1",
                "statement": "Alhoewel BIJ1 zich hard maakt voor meer democratische inspraak, waken we voor het overmatig gebruik van referenda. Referenda kunnen gemakkelijk misbruikt worden door een vocale groep om onderdrukkend beleid door te voeren. We zijn voor de invoering van wijkraden, burgerfora en burgerberaden."
            }
        ]
    },
    {
        "theme": "Vuurwerk",
        "title": "De regering moet het afsteken van vuurwerk door particulieren helemaal verbieden.",
        "info": "In de coronaperiode was het afsteken van vuurwerk helemaal verboden. Nu mag het afsteken van siervuurwerk wel, maar knalvuurwerk niet meer. Volgens deze stelling moet ook siervuurwerk verboden worden. Alleen gemeenten of andere organisaties zouden dan nog vuurwerkshows mogen organiseren.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 wil een fijne jaarwisseling voor iedereen. Helaas heeft afsteken van vuurwerk geleid tot steeds grotere veiligheidsrisico's voor hulpverleners, stijgende kosten en schade aan de gezondheid. Dit staat voor D66 niet meer in verhouding. Een gedeeltelijk verbod bleek te moeilijk te handhaven."
            },
            {
                "party": "GL-PvdA",
                "statement": "Particulier vuurwerk is gevaarlijk, vervuilend en slecht voor de gezondheid van mensen en dieren. Als we het verbieden, geven we politie, ambulance en brandweer eindelijk ook kans op een mooie oud en nieuw. En professionele shows met vuurwerk, drones of lasers zijn een uitstekend alternatief."
            },
            {
                "party": "PvdD",
                "statement": "Er komt een verbod op consumentenvuurwerk en carbidschieten. Professionele vuurwerkshows of spektakelshows worden georganiseerd op locaties waar mensen, dieren, natuur en milieu daarvan geen schade ondervinden."
            },
            {
                "party": "ChristenUnie",
                "statement": "De vuurwerktraditie in Nederland kost mensenlevens, veel inzet van hulpdiensten, miljoenen aan schade en is een enorme aanslag op de luchtkwaliteit. Vuurwerk met oud en nieuw wordt alleen nog mogelijk door middel van gemeentelijk georganiseerde vuurwerkshows."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een verbod op consumentenvuurwerk. Het beschadigd onze natuur en zorgt ieder jaar voor miljoenen aan schade. Daarnaast zorgt een verbod voor minder incidenten op de avond dat hulpverleners vaak te maken hebben met agressie."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt dat het afsteken van vuurwerk door particulieren veel te veel overlast, schade en slachtoffers veroorzaakt. De SGP wil alleen ruimte voor lokale vuurwerkshows en/of het afsteken van vuurwerk op aangewezen locaties door buurtverenigingen."
            },
            {
                "party": "50PLUS",
                "statement": "Het vuurwerk is gevaarlijk zwaar oorlogsgeschut geworden. Het heeft weinig tot niets meer met gezellige volkstradities te maken. Elke gewonde veroorzaakt door vuurwerk is volledig onacceptabel en moeten wij niet willen als samenleving. 50PLUS opteert voor prachtige professionele vuurwerkshows."
            },
            {
                "party": "BIJ1",
                "statement": "Alhoewel BIJ1 begrijpt dat veel mensen plezier hebben in het afsteken van vuurwerk, strijdt BIJ1 voor de rechten van mens, dier en natuur. Helaas veroorzaakt vuurwerk voor veel dieren onwijze angst, en bevat vuurwerk zware metalen en andere giftige stoffen die erg schadelijk zijn voor het milieu."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Om tegemoet te komen aan de gevolgen van het vuurwerkverbod, is een verenigingsplan met vergunningen een mooie tussenvorm die recht doet aan de vuurwerktraditie. We willen het afsteken van vuurwerk mogelijk houden in georganiseerd verband via lokale vuurwerkclubs."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is voorstander van een vuurwerkverbod voor het afsteken van consumentenvuurwerk rond de jaarwisseling. Vuurwerkoverlast in het algemeen wordt harder aangepakt. De gemeenten dienen een professionele vuurwerkshow met Oud & Nieuw te faciliteren."
            },
            {
                "party": "LEF",
                "statement": "Vingers, ogen en mensenlevens wegknallen is geen feestelijk begin van het jaar. Het veroorzaakt heel november en december al overlast. Liever organiseren we centrale vuurwerkshows waar iedereen kan genieten van lichteffecten, drones, muziek en een oliebol. Sterretjes blijven het hele jaar toegestaan."
            },
            {
                "party": "VVD",
                "statement": "Vuurwerk hoort voor veel Nederlanders bij oud en nieuw. Wel moeten we veel meer inzetten op het aanpakken van illegaal vuurwerk."
            },
            {
                "party": "PVV",
                "statement": "We moeten de Nederlandse oudejaarstraditie koesteren en de vuurwerkbranche niet de nek om draaien. Wel moet de handhaving op het gebruik van illegaal vuurwerk strenger."
            },
            {
                "party": "CDA",
                "statement": "Het CDA staat volledig achter het al geldende verbod op zwaar en gevaarlijk vuurwerk (categorie F3). Wat betreft consumentenvuurwerk is het CDA geen voorstander van een verbod, omdat het afsteken van vuurwerk een mooie Nederlandse traditie is die past bij het vieren van de jaarwisseling."
            },
            {
                "party": "SP",
                "statement": "Veel mensen zien dit als een leuke traditie. Een verbod zou daarom hoogstwaarschijnlijk leiden tot een enorme toename van illegaal vuurwerk in ons land en dat is erg gevaarlijk. Een verbod werkt dan juist contraproductief."
            },
            {
                "party": "FVD",
                "statement": "FVD wil de traditie van het afsteken van vuurwerk met de nieuwjaarswisseling bewaren en beschermen."
            },
            {
                "party": "JA21",
                "statement": "Vuurwerk is een mooie Nederlandse traditie. Eenmaal per jaar is het gedurende een periode van acht uur toegestaan om goedgekeurd vuurwerk af te steken. Deze traditie houdt JA21 graag in stand. We gaan het afsteken van vuurwerk niet verbieden. Overlast en illegaal vuurwerk moeten worden aangepakt."
            },
            {
                "party": "DENK",
                "statement": "Jaarlijks worden honderden kinderen het slachtoffer van vuurwerk. DENK is daarom voor het verbieden van meer soorten gevaarlijk vuurwerk. Het afsteken van klein vuurwerk dat weinig schade oplevert moet echter mogelijk blijven als dat geen gevolgen heeft voor de gezondheid."
            },
            {
                "party": "BBB",
                "statement": "BBB waardeert tradities en begrijpt dat vuurwerk voor velen onderdeel is van de viering van de jaarwisseling. Een totaalverbod gaat ons te ver, er zijn al strenge normen. Echter, het is cruciaal dat veiligheid gewaarborgd en overlast goed gereguleerd worden door handhaving van de huidige regels."
            },
            {
                "party": "BVNL",
                "statement": "Volgens Nederlanders is zo'n totaalverbod niet te handhaven en blijft er illegaal afgestoken worden. En gelijk hebben ze! Bovendien wordt de jaarwisseling minder feestelijk en gaat er bij een verbod een belangrijke traditie verloren. Veilig afsteken door particulieren moet dus kunnen!"
            },
            {
                "party": "NSC",
                "statement": "We zijn niet voor een landelijk verbod. Gemeenten hebben de ruimte om vuurwerk op bepaalde plaatsen/wijken te verbieden en vuurwerkshows te organiseren."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Beleid rondom het afsteken van vuurwerk kan prima op lokaal niveau worden bepaald. Geen landelijke inmenging."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Een traditie die bij veel landen in ere moet blijven. Zo ook in Nederland"
            }
        ]
    },
    {
        "theme": "Duurzame bedrijven",
        "title": "De overheid moet bedrijven minder geld geven om duurzamer te worden.",
        "info": "Bedrijven – industrie, dienstverlening en landbouw – kunnen nu van de overheid geld krijgen om hun productie milieuvriendelijker te maken. Denk aan koop en gebruik van elektrische wagens, slimmere manieren om afval te verwerken, gebruik van duurzame energie, isolatie van het gebouw of hergebruik van grondstoffen. Minder geld daarvoor betekent dat bedrijven zelf meer moeten gaan betalen om duurzamer te werken. Of dat ze daar minder snel voor kiezen.",
        "results": [
            {
                "party": "PVV",
                "statement": "Het is niet een taak van de overheid om duurzaamheid te financieren."
            },
            {
                "party": "SP",
                "statement": "Bedrijven krijgen nu te veel subsidie van de regering, zonder dat daar iets tegenover staat. Dat gaat om geld van de belastingbetaler. Veel doelen kun je echter ook behalen door regels te maken en normen te stellen, of door vervuiling te belasten. Dat is eerlijker en goedkoper voor de samenleving."
            },
            {
                "party": "FVD",
                "statement": "FVD wil stoppen met het opleggen van duurzaamheidseisen aan particulieren en bedrijven, en de subsidiestructuur rondom deze industrie saneren."
            },
            {
                "party": "PvdD",
                "statement": "We zorgen dat bedrijven vergroenen door regels te stellen en vervuiling te beprijzen. We verhogen de belasting op CO2 en breiden die uit naar alle broeikasgassen en sectoren. Er komt een klimaatplicht voor grote vervuilers en financiële instellingen."
            },
            {
                "party": "JA21",
                "statement": "JA21 vindt het subsidiëren van onrendabele duurzaamheidsmaatregelingen onhoudbaar. Verduurzaming is een keuze die ondernemers in de eerste plaats zelf moeten kunnen maken. Overheidssubsidiëring betekent in de praktijk dat de samenleving opdraait voor die enorme uitgaven. Dat vindt JA21 onwenselijk."
            },
            {
                "party": "50PLUS",
                "statement": "Bedrijven hebben een eigen verantwoordelijkheid om in deze tijd van klimaatverandering te zorgen voor de meest duurzame bedrijfsvoering. Daar hoeft de overheid geen financiële stimulans voor te regelen."
            },
            {
                "party": "BVNL",
                "statement": "We moeten terug naar een kleine dienstbare overheid. Om het overheidsapparaat te saneren en 20% van de ambtenaren zo spoedig mogelijk af te laten vloeien, schrappen we ook het idee dat de overheid bedrijven geld moeten geven om duurzamer te worden."
            },
            {
                "party": "NSC",
                "statement": "Het is belangrijk dat bedrijven verduurzamen. De overheid speelt hierbij een rol als het gaat om faciliteren, aanjagen, duidelijk beleid en een terughoudend subsidiebeleid. Bedrijven moeten zelf een bijdrage leveren en minder afhankelijk worden van subsidies om te verduurzamen."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Libertaire Partij verzet zich tegen de ongelijke behandeling van bedrijven door de overheid. We zijn tegen het verstrekken van subsidies en het mogelijk maken van wetgeving die bepaalde belangen bevoordeelt."
            },
            {
                "party": "LEF",
                "statement": "LEF is tegen subsidies en voor eerlijke prijzen. Geld kan goed doen maar dan moeten de spelregels ook eerlijk zijn. De grootste vervuilers maken gebruik van de meeste subsidies. Dat is slecht gedrag belonen. Nederland moet de wetten handhaven, de markt reguleren en milieuvervuilers weren. Heel simpel"
            },
            {
                "party": "BIJ1",
                "statement": "Wat BIJ1 betreft moeten de lasten van de energietransitie eerlijker verdeeld worden. Dit betekent dat mensen met lage- en middeninkomens en kleine ondernemers niet de lasten dragen van grote bedrijven. Grote bedrijven moeten zichzelf vergroenen, en als ze dat niet kunnen worden ze genationaliseerd."
            },
            {
                "party": "VVD",
                "statement": "We maken bindende afspraken met de industrie over verduurzaming. We gaan door met het stapsgewijs afbouwen van fiscale voordelen en vrijstellingen voor het gebruik van fossiele brandstoffen. We doen dit in een verantwoord tempo, zodat bedrijven ook echt kunnen verduurzamen."
            },
            {
                "party": "D66",
                "statement": "D66 wil investeren in de economie van de toekomst. We maken veel geld vrij voor de groene economie. Belangrijk hierbij is dat deze regelingen ook toegankelijk zijn voor het mkb en gefinancierd worden door fossiele subsidies af te schaffen en vervuilende bedrijven meer te belasten."
            },
            {
                "party": "GL-PvdA",
                "statement": "Bij het vergroenen van Nederland hebben we iedereen nodig: overheid, burgers én bedrijven. Ondernemers die Nederland helpen verduurzamen kunnen op onze steun rekenen. Zo zorgen we ook voor nieuwe innovaties en de banen van de toekomst."
            },
            {
                "party": "CDA",
                "statement": "Het CDA staat voor een eerlijke en duurzame economie. Dat betekent dat het CDA duidelijke en afrekenbare afspraken wil maken met grote bedrijven over vergroening, maar ook dat we de bakker om de hoek helpen met verduurzamen zodat de energierekening omlaag gaat."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie zet in op verantwoord consumeren (consuminderen, anders consumeren), circulair produceren in Nederland en Europa en duidelijke regels voor duurzaam importeren. Waar nodig stimuleren we dat niet vrijblijvend. Gezien de uitdagingen waar we voor staan is afschalen niet aan de orde."
            },
            {
                "party": "Volt",
                "statement": "Volt vindt dat bedrijven die willen verduurzamen geholpen moeten worden door middel van innovatiesubsidies en -fondsen. Zo verlagen we de drempel om te innoveren en investeren in cruciale processen en infrastructuur zoals batterijen, waterstofproductie en de grondstoffentransitie."
            },
            {
                "party": "SGP",
                "statement": "De SGP is voor verduurzaming van het energiegebruik en andere activiteiten van bedrijven. Dat is goed voor klimaat en leefomgeving. De overheid moet bedrijven daarbij ondersteunen, zodat ze er niet alleen voor staan en het niet moeten afleggen tegen concurrenten in het buitenland."
            },
            {
                "party": "DENK",
                "statement": "De overheid dient verduurzaming fiscaal te stimuleren.  Deze subsidies dienen echter ook daadwerkelijk te leiden naar verduurzaming en niet in de zakken verdwijnen van aandeelhouders. Daar dient de overheid strenger op toe te zien."
            },
            {
                "party": "BBB",
                "statement": "Als we van bedrijven verlangen dat ze duurzamer worden, dan is het logisch dat we ze daar bij ondersteunen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen willen de belasting op grondstoffen verhogen en op arbeid verlagen. Op deze manier belonen we bedrijven als ze duurzamer handelen. Dit stimuleert arbeidsparticipatie en zet een rem op grondstoffenverspilling. Daarnaast willen we meer transparantie in de productieketens."
            },
            {
                "party": "Splinter",
                "statement": "De overheid moet juist bedrijven stimuleren om te verduurzamen, innovatie aanmoedigen en drempels wegnemen."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "De overheid dient bedrijven sowieso geen geld te geven. \nAls een bedrijf acties onderneemt t.b.v. \"duurzaamheid\" dan is dit haar eigen keuze."
            }
        ]
    },
    {
        "theme": "Voltooid leven",
        "title": "Mensen die vinden dat ze klaar zijn met hun leven, moeten hulp kunnen krijgen bij zelfdoding.",
        "info": "Het komt voor dat mensen hun leven voltooid vinden en dat ze willen sterven. Bijvoorbeeld omdat ze een goed en lang leven hebben gehad. Of omdat ze ‘levensmoe’ zijn. Deze mensen mogen volgens de wet geen hulp krijgen bij zelfdoding. Want alleen mensen die ondraaglijk en uitzichtloos lijden mogen die hulp krijgen. Dit lijden moet een psychische of lichamelijke oorzaak hebben. Artsen kunnen in die bijzondere gevallen iemand helpen met sterven.",
        "results": [
            {
                "party": "VVD",
                "statement": "De VVD wil de mogelijkheid voor iedereen (inclusief mensen met een voltooid leven zonder medische oorzaak) om zelf te kiezen voor een waardig levenseinde, mits dit op verantwoorde wijze en volgens zorgvuldige procedures en eisen gebeurt."
            },
            {
                "party": "D66",
                "statement": "D66 staat op voor de vrijheid van mensen. Ook als het gaat over invulling geven aan het levenseinde is de eigen keuze van mensen leidend. De D66-wet over Voltooid leven zorgt dat mensen goed geholpen worden bij het maken van deze belangrijke keuze met goede zorg."
            },
            {
                "party": "GL-PvdA",
                "statement": "Uiteindelijk heb jij zelf de keuze om te bepalen wat er met jouw lichaam gebeurt. Bijvoorbeeld als je lijden ondraaglijk en uitzichtloos is, lichamelijk of geestelijk, maar ook als je vindt dat je leven voltooid is. Dat is aan jou om te bepalen, en aan niemand anders."
            },
            {
                "party": "PvdD",
                "statement": "De PvdD hecht aan zelfbeschikking en vindt dat mensen zelf mogen bepalen wanneer ze sterven, op een waardige manier. Hier moet wel een zeer zorgvuldig traject aan voorafgaan."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat mensen met een vrijwillige en weloverwogen stervenswens legaal en onder begeleiding toegang krijgen tot euthanasie. De hulp bij vrijwillige en weloverwogen euthanasie hoort niet thuis in ons Wetboek van Strafrecht."
            },
            {
                "party": "50PLUS",
                "statement": "Het nemen van het besluit dat het leven voltooid is, is geen lichtzinnige beslissing. Iemand die vindt dat hij of zij klaar is met zijn of haar leven en beslist om uit het leven te stappen moet daarbij alle hulp en steun krijgen."
            },
            {
                "party": "BIJ1",
                "statement": "Mensen die hun leven als voltooid ervaren, moeten de vrijheid hebben een weloverwogen en vrijwillige keuze te maken om hun leven op een waardige manier te beëindigen."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor zelfbeschikkingsrecht. Mensen die vinden dat ze klaar zijn met hun leven, moeten recht krijgen op euthanasie. Het alternatief is namelijk zelfmoord. Wel moet er voldoende psychische hulp aanwezig zijn. Daarvoor willen we de capaciteit van de GGZ vergroten."
            },
            {
                "party": "BVNL",
                "statement": "Als volwassen mensen euthanasie willen plegen binnen de huidige wetgeving, dan is dat een eigen keuze. BVNL is een partij die vrijheid van het individu laat prevaleren boven de sociale druk van de meerderheid."
            },
            {
                "party": "Splinter",
                "statement": "Splinter vindt dat mensen de vrijheid moeten hebben om hun leven op een menswaardige manier te beëindigen op het moment dat zij vinden dat hun leven voltooid is. Vastgesteld moet worden hoe vaststaand de beslissing is. En we moeten investeren in GGZ, zorg/medische hulp en tegengaan van eenzaamheid."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De Liberaire Partij vindt dat hulp bij zelfdoding niet verboden mag worden."
            },
            {
                "party": "LEF",
                "statement": "Mensen die ondragelijk lijden of uitbehandeld zijn moeten voor euthanasie kunnen kiezen. Maar we moeten niet te makkelijk naar deze middelen grijpen. Er zijn veel maatschappelijke oorzaken voor psychisch en fysiek lijden. Laten we deze oorzaken zoveel mogelijk minimaliseren."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Vrije keuze staat bij Samen voor Nederland centraal. Ook deze keuze is van de mens zelf. Zelfbeschikkingsrecht staat bij ons hoog in het vaandel."
            },
            {
                "party": "PVV",
                "statement": "Medische ethische kwesties, zoals voltooid leven, zijn bij de PVV een vrije kwestie. Dat wil zeggen dat ieder fractielid bij een stemming zijn of haar eigen persoonlijke afweging kan maken. Het past daarom om hier te kiezen voor het standpunt ‘geen van beide’."
            },
            {
                "party": "BBB",
                "statement": "BBB benadrukt de noodzaak van zorgvuldigheid bij levensbeëindiging en ziet belang in investeren in expertisecentra voor levenseinde-kennis voor artsen. Bij ons is medisch-ethische besluitvorming individueel bepaald per Kamerlid, respecterend persoonlijke levensvisies en overtuigingen."
            },
            {
                "party": "CDA",
                "statement": "Wanneer ouderen zich alleen, verlaten of verloren voelen hebben zij aandacht nodig. Het CDA is er resoluut tegen dat de overheid mensen zou moeten helpen met zelfdoding als daar geen ondraaglijk en uitzichtloos lijden aan ten grondslag ligt."
            },
            {
                "party": "SP",
                "statement": "De SP is voorstander van de mogelijkheid tot euthanasie en een menswaardige dood bij ondraaglijk en uitzichtloos lijden. Dat moet beoordeeld worden samen met een arts, niet als individu. Mensen die desondanks vinden dat ze klaar zijn met hun leven moeten hulp krijgen in het leven."
            },
            {
                "party": "FVD",
                "statement": "FVD wil de huidige euthanasiewetgeving handhaven."
            },
            {
                "party": "ChristenUnie",
                "statement": "Elk mensenleven heeft intrinsieke waarde. De ChristenUnie is tegen een wettelijke regeling voor mensen met een doodswens zonder dat zij ernstig ziek zijn. De overheid is er om kwetsbaren te beschermen, niet om hulp te bieden bij zelfdoding."
            },
            {
                "party": "JA21",
                "statement": "JA21 steunt de huidige euthanasiepraktijk, die door artsen en patiënten als zorgvuldig wordt ervaren. Verdere uitbreiding van deze wet naar mensen zonder uitzichtloos, medisch lijden of wilsonbekwamen, achten wij onwenselijk."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt dat de overheid het leven moet beschermen van het prille begin tot het broze einde. We zijn tegen een 'wet voltooid leven'."
            },
            {
                "party": "DENK",
                "statement": "DENK wil dat de nadruk ligt op de preventie van zelfdoding. Daarom moeten we mensen die eenzaam zijn en/of andere problemen meer hulp geven. DENK wil dat die oorzaken worden aangepakt in plaats van zelfdoding faciliteren."
            },
            {
                "party": "NSC",
                "statement": "De huidige wetgeving betreffende euthanasie is een afgewogen geheel en behoeft geen wijziging. Wel zijn wij kritisch over euthanasie bij wilsonbekwame patiënten, we gaan hierover in gesprek met zorgverleners en ethici. We steunen de Wet voltooid leven niet."
            }
        ]
    },
    {
        "theme": "Ontwikkelingshulp en asielzoekers",
        "title": "Nederland moet geen ontwikkelingshulp geven aan landen die weigeren uitgeprocedeerde asielzoekers terug te nemen.",
        "info": "Nederland geeft ontwikkelingslanden geld om armoede te verminderen. Vaak heeft dat geld een duidelijk doel: betere gezondheidszorg, voeding en water of bescherming tegen klimaatverandering. Soms stelt de regering voorwaarden aan ontwikkelingshulp, zoals het inzetten van Nederlandse bedrijven. Het koppelen van ontwikkelingshulp aan het terugnemen van asielzoekers zou ook zo’n voorwaarde kunnen zijn. Landen die weigeren om uitgeprocedeerde asielzoekers terug te nemen van wie duidelijk is dat die uit dat land komen, zouden dan geen geld meer krijgen.",
        "results": [
            {
                "party": "VVD",
                "statement": "De VVD wil dat landen uitgeprocedeerde asielzoekers terugnemen. Ook maken we afspraken met landen om opvang in de regio te organiseren en migratie te voorkomen. Als onderdeel van deze afspraken kunnen voorwaarden gesteld worden voor het ontvangen van ontwikkelingshulp."
            },
            {
                "party": "D66",
                "statement": "D66 is voor hulp aan kwetsbare mensen na rampen en oorlog. Dat zorgt er ook voor dat oorzaken voor vluchten worden weggenomen en minder mensen migreren. We geven geen geld aan landen met autocratische regimes, maar direct aan organisaties en mensen."
            },
            {
                "party": "PVV",
                "statement": "Nederland moet sowieso geen ontwikkelingshulp geven maar zeker niet aan landen die uitgeprocedeerde asielzoekers niet terugnemen."
            },
            {
                "party": "CDA",
                "statement": "Het is belangrijk om goede afspraken te maken met derde landen over migratie. Wat het CDA betreft worden er als onderdeel van deze partnerschappen ook afspraken gemaakt over de terugkeer van uitgeprocedeerde asielzoekers."
            },
            {
                "party": "FVD",
                "statement": "FVD is principieel tegen het geven van ontwikkelingshulp. Dit geld moet worden besteed aan problemen in Nederland."
            },
            {
                "party": "JA21",
                "statement": "Herkomstlanden die weigeren om hun uitgeprocedeerde onderdanen terug te nemen moeten sancties opgelegd krijgen zoals het stoppen van ontwikkelingshulp en het intrekken van landingsrechten en visa. Daarnaast wil JA21 ontwikkelingshulp terugbrengen tot noodhulp en hulp bij opvang in de regio."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS vindt dat het terugnemen van uitgeprocedeerde asielzoekers een zeer terechte randvoorwaarde is voor het kunnen ontvangen van ontwikkelingsgelden."
            },
            {
                "party": "BBB",
                "statement": "Landen die ons niet willen helpen met het oplossen van onze migratieproblemen, verdienen ook onze financiële steun niet. BBB gaat uit van wederkerigheid."
            },
            {
                "party": "BVNL",
                "statement": "Landen die uitgeprocedeerde asielzoekers weigeren terug te nemen, moeten geen ontwikkelingshulp meer krijgen. Ontwikkelingsgeld geef je aan landen om toekomst te bieden aan hun inwoners, dan mag je ook aan ze vragen om mensen die hier illegaal zijn, weer terug te nemen."
            },
            {
                "party": "NSC",
                "statement": "We willen nadrukkelijk een relatie leggen tussen ontwikkelingsbeleid en migratiebeleid, met een focus op landen van oorsprong en transit van irreguliere migratie, vooral in het Midden-Oosten, Noord-Afrika en delen van Sub-Sahara Afrika."
            },
            {
                "party": "Splinter",
                "statement": "Landen die worden ondersteund met ontwikkelingshulp moeten ook zelf verantwoordelijkheid nemen. Het terugnemen van uitgeprocedeerde asielzoekers is daar een goed voorbeeld van."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is van mening dat ontwikkelingshulp geen verantwoordelijkheid van de overheid is, maar overgalaten kan worden aan vrijwillige burgerinitiatieven en organisaties. Bovendien pleit de LP voor de afschaffing van de asielstatus. Iedereen die in zijn of haar eigen levensonderhoud kan of wordt voorzien, is welkom in Nederland en zou de vrijheid moeten hebben om te werken."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "De komende jaren is het Focus op Nederland. Dus voorlopig een geen geld beschikbaar stellen aan ontwikkelingshulp."
            },
            {
                "party": "GL-PvdA",
                "statement": "Ontwikkelingssamenwerking is bedoeld om de meest kwetsbare mensen te steunen. Die solidariteit laten we niet afhangen van afspraken met een regime dat mensenlevens als handelswaar inzet. De overheid en hulporganisaties zorgen er zo goed mogelijk voor dat dit bij de juiste mensen terechtkomt."
            },
            {
                "party": "SP",
                "statement": "Uitgeprocedeerde asielzoekers moeten terug. Dit kabinet faalt hierin, waardoor mensen die geen recht hebben op asiel plekken bezet houden voor vluchtelingen in nood. We moeten harde eisen stellen, zodat landen hun mensen terugnemen. Neemt niet weg dat er ook in dat land mensen in nood kunnen zitten. Wij zijn voor afspraken met harde eisen waar financiën een rol in kunnen spelen, maar ontwikkelingshulp wordt altijd geleverd waar dat nodig is wat ons betreft."
            },
            {
                "party": "PvdD",
                "statement": "Ontwikkelingssamenwerking dient om mensen elders perspectief te bieden, niet als drukmiddel bij migratie- en asielbeleid, en ook niet als verkapte promotie van bedrijfsbelangen. Ontwikkelingslanden en lokale maatschappelijke organisaties krijgen meer invloed op de besteding van ontwikkelingsgelden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Ontwikkelingssamenwerking is bedoeld om gemeenschappen te helpen die in extreme armoede leven. Zij mogen niet de dupe worden van politieke keuzes van machtshebbers. Wel willen we afspraken maken met landen om meer mensen terug te nemen die geen toekomst in Nederland hebben."
            },
            {
                "party": "Volt",
                "statement": "Volt stelt mensenrechten voorop. Mensen mogen niet gereduceerd worden tot ruilmiddel. Bovendien is ontwikkelingsgeld voor het aanpakken van de grondoorzaken van migratie."
            },
            {
                "party": "SGP",
                "statement": "Op basis van 'respect' en 'gelijkwaardigheid' moeten landen hun afspraken nakomen, óók inzake terugname van uitgeprocedeerde asielzoekers. Gebeurt dit niet, dan kan dit (financiële) consequenties hebben. Maar het geheel stoppen van ontwikkelingshulp kan disproportioneel en contraproductief zijn."
            },
            {
                "party": "DENK",
                "statement": "Ontwikkelingshulp helpt juist om de asielinstroom omlaag te krijgen. Uitgeprocedeerde asielzoekers moeten op andere manieren naar hun land van herkomst geholpen worden, bijvoorbeeld door afspraken te maken met de landen van herkomst."
            },
            {
                "party": "BIJ1",
                "statement": "De landenselectie voor internationale hulp moet bepaald worden op basis van noodzaak en behoefte in de landen zelf, en de toegevoegde waarde van de Nederlandse bijdrage."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen willen een gemeenschappelijk Europees asielbeleid gebaseerd op adviezen van mensenrechtenorganisaties. Ontwikkelingshulp is geen instrument om migratie te managen. Het is ontzettend cynisch en onmenselijk om migranten zo te gebruiken als geopolitiek drukmiddel."
            },
            {
                "party": "LEF",
                "statement": "Ontwikkelingshulp kan bijdragen aan een gestabiliseerd land waardoor migratie bij de bron aangepakt wordt."
            }
        ]
    },
    {
        "theme": "Huurstijging",
        "title": "De huurprijs van woningen mag de komende drie jaar niet stijgen.",
        "info": "Voor sociale huurwoningen met een huur tot 808,06 euro (in 2023) mag de huur niet hoger zijn dan is toegestaan op basis van het puntensysteem voor huurwoningen. De overheid stelt die regels vast. Elk jaar wordt de huur verhoogd met de inflatie. Ook voor de meeste woningen in de vrije sector stelt de overheid regels vast voor de maximale verhoging van de huur. Door de huur niet te verhogen gaan de lasten van huurders niet omhoog, maar krijgen de verhuurders minder geld.",
        "results": [
            {
                "party": "D66",
                "statement": "D66 wil het leven betaalbaar maken voor iedereen, daarom verhogen we de lonen en verlagen we de belasting. We beperken de huurstijgingen, maar blijven ervoor zorgen dat woningcorporaties kunnen investeren in nieuwbouw of verduurzaming."
            },
            {
                "party": "GL-PvdA",
                "statement": "Huizen zijn om in te wonen, niet om winst mee te maken. Toch verdienen veel verhuurders veel geld over de rug van huurders. We voeren een puntensysteem in voor alle huurhuizen, zodat je een eerlijke prijs betaalt voor wat je krijgt. Daarnaast komt er huurverlaging voor slecht geïsoleerde woningen."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil zelfs dat de huren met 20% gaan dalen."
            },
            {
                "party": "SP",
                "statement": "Door samen met huurders actie te voeren dwong de SP eerder al af dat de huren werden bevroren. Wonen wordt onbetaalbaar in Nederland, terwijl dit een basisrecht van iedereen zou moeten zijn. De huren moeten niet omhoog, maar juist omlaag."
            },
            {
                "party": "PvdD",
                "statement": "Steeds meer mensen komen in de knel door hun hoge huur, of kunnen geen aanspraak maken op een huurwoning. De komende vijf jaar bevriezen we de huren, terwijl we werken aan rechtvaardiger lange termijnbeleid om de woningnood duurzaam op te lossen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De betaalbaarheid van huren staat onder druk door forse huurverhogingen. De maximale huurstijging moet onder de inflatie of stijging van CAO-lonen liggen, zodat de inkomenspositie van huurders verbetert in plaats van verslechtert."
            },
            {
                "party": "DENK",
                "statement": "De huurprijzen zijn te hard gestegen de afgelopen jaren. Veel huurders kunnen nauwelijks de rekening meer betalen. Zij verdienen financiële rust en daarom is een bevriezing van de huur een goede maatregel."
            },
            {
                "party": "50PLUS",
                "statement": "Vooral voor sociale- en middeninkomens zijn er amper woningen beschikbaar (wooncrisis). Schaarste betekent dat huurprijzen stijgen met als gevolg dat er nog minder woningen beschikbaar zijn voor sociale- en midden-sector. Dit voorkomen we door tijdelijk voor drie jaar huurstijging te verbieden."
            },
            {
                "party": "BIJ1",
                "statement": "BIJ1 wil het recht op wonen wettelijk afdwingbaar maken. Iedereen zou voorzien moeten worden van een passende woning. Voordat dit gebeurt pleiten we voor een huurbevriezing en huurplafond, voor zowel de sociale als de private sector."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor betaalbare woningen. Huurprijzen zijn de afgelopen jaren veel te hard gestegen. Bevriezing van huurprijzen is noodzakelijk om dakloosheid te verminderen en bestaanszekerheid te garanderen."
            },
            {
                "party": "Splinter",
                "statement": "Terwijl de huurprijzen ongekend stijgen, daalt het aanbod. De bestaanszekerheid van mensen staat onder grote druk en de woningnood is gigantisch. Splinter wil daarom de huurprijs bevriezen. In de tussentijd bouwen we meer huizen zodat de huurprijs in de toekomst betaalbaar blijft."
            },
            {
                "party": "LEF",
                "statement": "LEF is voor een maximale huurprijs. Dat betekent dat er een einde moet komen aan de absurde huurstijgingen van ieder jaar 3,1%. Het huis wordt toch niet 3,1% groter? Wonen is een recht, geen verdienmodel."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Samen voor Nederland pleit voor betaalbare woningen. Kijk naar ons partijprogramma voor een uitgebreide uitleg. www.samen-voor-nederland.nl"
            },
            {
                "party": "VVD",
                "statement": "Om de stijging van vaste uitgaven tegen te gaan, nemen we maatregelen om de huurstijgingen te remmen. Voor de sociale huursector doen we dat het meest. Dat helpt huren betaalbaar te houden."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt dat de huurprijzen niet te snel mogen stijgen. Maar een volledige huurprijsbevriezing vindt het CDA geen goed idee, omdat verhuurders de stijgende kosten voor beheer en onderhoud moeten kunnen blijven betalen. Ook gaat dit ten koste van investeringen in nieuwbouw en verduurzaming."
            },
            {
                "party": "FVD",
                "statement": "FVD wil geen overmatige overheidsbemoeienis in de woningmarkt. Wij willen de woningmarkt weer gezond en betaalbaar maken door te stoppen met de massale immigratie"
            },
            {
                "party": "Volt",
                "statement": "Volt wil meer controles op eerlijke huurprijzen, ook als er wordt gewisseld van huurder. De gemeente moet deze controles proactief uitvoeren en boetes uitdelen wanneer verhuurders de maximale huurprijzen niet respecteren. Plaatselijk kan dit betekenen dat de huurprijs niet stijgt."
            },
            {
                "party": "JA21",
                "statement": "JA21 vindt het niet een taak van de overheid om de huurprijzen te bevriezen. Door minder regeldruk voegen we meer woningen toe aan het aanbod. Door concurrentie van aanbod in middenhuur dalen\nde huren in de vrije sector automatisch mee."
            },
            {
                "party": "SGP",
                "statement": "De huren mogen beperkt stijgen, omdat de lasten voor verhuurders ook stijgen. Grote huurstijgingen moeten wel aan banden worden gelegd, maar helemaal geen huurstijgingen meer zorgt ook voor een veel kleiner aanbod."
            },
            {
                "party": "BBB",
                "statement": "BBB gelooft in een evenwichtige woningmarkt waar zowel huurders als verhuurders rechten hebben. Een algehele bevriezing van de huurprijzen kan investeringen in de woningmarkt ontmoedigen en de beschikbaarheid van huurwoningen beperken, wat nadelig kan zijn op lange termijn."
            },
            {
                "party": "BVNL",
                "statement": "BVNL past ervoor om in te grijpen in het eigendomsrecht. Voer een asielstop in en stimuleer woningcorporaties en de markt om meer woningen te bouwen, zodat vraag en aanbod en dus ook de prijs weer in balans komen."
            },
            {
                "party": "NSC",
                "statement": "Woonlasten zijn een steeds grotere kostenpost voor huishoudens en een belangrijke oorzaak van armoede. We willen het gereguleerde deel van de huursector uitbreiden. Om nu te zeggen dat de huurprijs van alle woningen, dus ook de luxere huurwoningen, drie jaar lang niet mag stijgen is niet wenselijk."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De prijzen van producten en diensten, waaronder ook de huurprijs van woningen, dienen vrijelijk tot stand te komen. Bovendien zal de prijs altijd blijven stijgen zolang er sprak is van inflatiebeleid. De Libertaire Partij is tegen elke vorm van marktmanipulatie."
            }
        ]
    },
    {
        "theme": "Minimumstraffen",
        "title": "Er moeten minimumstraffen komen voor mensen die zwaar geweld gebruiken.",
        "info": "De wetgever bepaalt welke straffen een rechter kan opleggen als iemand een misdaad heeft begaan. Denk aan een geldboete, een taakstraf of een gevangenisstraf. Nederland heeft wel maximumstraffen, maar geen minimumstraffen. Rechters kijken bij straffen altijd naar elk geval afzonderlijk. Een minimumstraf zou dat veranderen.",
        "results": [
            {
                "party": "VVD",
                "statement": "De VVD vindt het belangrijk dat straffen recht doen aan slachtoffers en nabestaanden en de samenleving wordt beschermd. Daarom willen wij voor zeer ernstige misdrijven dat in Nederland minimumstraffen moeten komen."
            },
            {
                "party": "PVV",
                "statement": "Criminelen moeten keihard worden gestraft. De huidige straffen zijn veel te laag. De PVV wil daarom dat rechters hoge straffen moeten geven."
            },
            {
                "party": "FVD",
                "statement": "FVD wil minimumstraffen voor bepaalde geweldsdelicten, waarvan de rechter slechts goed gemotiveerd mag afwijken."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil minimumstraffen invoeren voor gewelds- en\nzedendelicten. Daarnaast maken we levenslang mogelijk na drie ernstige geweldsdelicten en willen we een ‘getrapte’ strafschaal voor veelplegers, waarbij zij na ieder nieuw delict een zwaardere straf kunnen krijgen."
            },
            {
                "party": "SGP",
                "statement": "Met name bij zeden- , levens- en geweldsdelicten, bij terroristische misdrijven en bij recidive moet de strafmaat omhoog. Ook kan het gerechtvaardigd zijn dat er een minimumstraf wordt ingesteld."
            },
            {
                "party": "DENK",
                "statement": "Voor ernstige delicten moet het mogelijk zijn om minimumstraffen op te leggen."
            },
            {
                "party": "50PLUS",
                "statement": "Ondanks dat de strafmaatbepaling het beste in handen is bij de rechter die alle factoren kan meewegen in de opgelegde straf is 50PLUS er wel voor dat de strafmaat opgeschroefd wordt omdat er steeds meer zware geweldsincidenten plaatsvinden."
            },
            {
                "party": "BBB",
                "statement": "Mensen die meermaals zwaar geweld gebruiken vormen een gevaar voor de samenleving en moeten daardoor zwaarder gestraft worden."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil het toenemende geweld de kop in smoren. Daarom moeten we komen met minimumstraffen voor mensen die zwaar geweld gebruiken en met minimumstraffen voor recidive bij zware misdrijven."
            },
            {
                "party": "Samen voor Nederland",
                "statement": "Zwaar geweld koop je niet af met een geldboete."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat rechters altijd vrij zijn om de meest effectieve straf op te leggen die de samenleving veilig maakt. Soms is een hoge vrijheidsstraf effectief, in andere gevallen zorgt een andere soort straf er juist voor dat daders minder snel in herhaling gaan. Veiligheid moet voorop staan."
            },
            {
                "party": "GL-PvdA",
                "statement": "Het is in een rechtsstaat altijd aan de rechter om te beoordelen wat de juiste straf is. Minimumstraffen horen daar niet bij. Het is wel aan de politiek om de maximale strafmaat te bepalen. Als er zwaar geweld gebruikt wordt bij een haatmisdrijf willen we dat daar zwaarder voor gestraft kan worden."
            },
            {
                "party": "CDA",
                "statement": "Met het invoeren van minimumstraffen gaat volgens het CDA de politiek op de stoel van de rechter zitten. De rechter moet per geval de ruimte hebben een eigen afweging te maken. Minimumstraffen leiden tot het inperken van de beoordelingsvrijheid van de rechter."
            },
            {
                "party": "SP",
                "statement": "Dan zou de rechter, onafhankelijk van de omstandigheden, de dader tot een minimale straf moeten veroordelen. Dit zou een begrenzing zijn van de rechter, die in tegenstelling tot de Tweede Kamer (wetgever) wél kijkt naar individuele gevallen en situaties. Dat is onwenselijk."
            },
            {
                "party": "PvdD",
                "statement": "Door minimumstraffen in te stellen, zou de wetgever de rol innemen van de rechter. De rechter moet zelf een proportionele straf kunnen bepalen, waarbij ongelijke gevallen ongelijk behandeld worden. Onderzoek wijst uit dat criminaliteit in landen met minimumstraffen niet effectiever wordt bestreden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Minimumstraffen maken Nederland onveiliger, omdat rechters minder ruimte krijgen om rekening te houden met specifieke omstandigheden. Wel moeten voor zware delicten, zoals drugscriminaliteit en mensenhandel de straffen omhoog."
            },
            {
                "party": "Volt",
                "statement": "Volt is geen voorstander van minimumstraffen en vindt dat rechters per geval een afweging moeten maken."
            },
            {
                "party": "BIJ1",
                "statement": "BIJ1 strijdt voor een zorgzame samenleving. Ons huidige systeem is een systeem dat misdaad niet voorkomt, maar eerder creëert met een cultuur van bestraffing en geweld. Ons is wijsgemaakt dat het opsluiten en bestraffen van mensen veiligheid creëert, maar veiligheid komt niet voort vanuit geweld."
            },
            {
                "party": "Piratenpartij - De Groenen",
                "statement": "Piratenpartij - De Groenen staan voor de democratische rechtsstaat. Hierbinnen hebben rechters de ruimte om alles af te wegen en de strafmaat te bepalen. Minimumstraffen zijn belerend tegenover rechters. Bovendien blijkt uit onderzoek dat harder straffen niet werkt tegen impulsieve criminaliteit."
            },
            {
                "party": "NSC",
                "statement": "Zwaar geweld moet zwaar bestraft worden, maar het blijft voorbehouden aan de rechter."
            },
            {
                "party": "Splinter",
                "statement": "Splinter is voorstander van een onafhankelijke rechtspraak en wil rechters de ruimte geven om passend te straffen. Daar horen minimumstraffen niet bij. De onafhankelijke rechter is heel goed in staat om weloverwogen recht te spreken. De politiek mag niet op de stoel van de rechter gaan zitten."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP streeft naar verminderde wettelijke vastlegging en pleit voor het \"common law-systeem.\" Dit betekent dat rechtspraak wordt gebaseerd op jurisprudentie, waarbij rechters beslissingen nemen op basis van eerdere uitspraken in soortgelijke gevallen."
            },
            {
                "party": "LEF",
                "statement": "Minimumstraffen nemen geen uitzonderingsgronden in acht. Er is altijd een reden waarom geweld gepleegd wordt. Deze reden moet meegenomen worden binnen het strafrecht en de straf moet in verhouding staan tot de reden."
            }
        ]
    }
];
