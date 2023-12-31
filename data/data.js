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