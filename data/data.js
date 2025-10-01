const seats = {
    "VVD": 28,
    "D66": 10,
    "PVV": 27,
    "CDA": 4,
    "SP": 5,
    "GL-PvdA": 25,
    "FVD": 4,
    "PvdD": 5,
    "ChristenUnie": 4,
    "Volt": 3,
    "JA21": 1,
    "SGP": 3,
    "DENK": 4,
    "BBB": 6,
    "NSC": 21
}

const data = [
    {
        "theme": "Hypotheekrenteaftrek",
        "title": "De hypotheekrenteaftrekIcon moet worden afgeschaft.",
        "info": "Als je een huis koopt met een hypotheek, dan moet je rente betalen aan de bank. In Nederland mag je deze rente aftrekken van je inkomen bij de belastingaangifte. Daardoor betaal je minder belasting. Dat heet hypotheekrenteaftrek. De hypotheekrenteaftrek is hoger als je een hogere hypotheek hebt of een hoger inkomen en lager als je een lagere hypotheek hebt of een lager inkomen.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Huizen zijn veel te duur geworden en starters komen er bijna niet meer tussen. De hypotheekrenteaftrek drijft prijzen op en helpt vooral mensen met dure huizen. Door deze stap voor stap af te bouwen en de opbrengst te steken in lastenverlichting en woningbouw, maken we huizen betaalbaarder."
            },
            {
                "party": "D66",
                "statement": "D66 kiest voor geleidelijke afbouw van de hypotheekrenteaftrek. We ontzien daarbij mensen die net een hypotheek hebben afgesloten en steken de opbrengsten geheel in lagere inkomstenbelasting voor iedereen. Zo heeft iedereen belastingvoordeel en remmen we de stijging van de huizenprijzen."
            },
            {
                "party": "CDA",
                "statement": "In een zeer krappe woningmarkt heeft de hypotheekrenteaftrek een nog verder prijsopdrijvend effect. We willen daarom heel geleidelijk de hypotheekrenteaftrek afschaffen en dit geld één op één terugsluizen in verlaging van de inkomstenbelasting om het effect voor huishoudens te verzachten."
            },
            {
                "party": "SP",
                "statement": "De hypotheekrenteaftrek drijft de prijzen omhoog. Op de lange termijn moet deze daarom verdwijnen. Op korte termijn willen we deze afschaffen voor huizen boven de 600 duizend euro. Zo komt er jaarlijks tot 6 miljard euro vrij voor betaalbare huurwoningen en woningen voor starters."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Het geleidelijk afschaffen van de hypotheekrenteaftrek voor bedragen boven 450.000 euro maakt ruimte voor betaalbare en groene huizen, die toegankelijk zijn voor iedereen. Hypotheekrenteaftrek verhoogt huizenprijzen en zorgt voor ongelijkheid. Het systeem stimuleert nu bezit boven recht op wonen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is voor de gelijke behandeling van woningeigenaren en huurders, en wil lagere woningprijzen. Om die reden faseren we de hypotheekrenteaftrek langzaam uit. Tegelijk schaffen we de belastingen op het bezitten van een woonhuis (eigenwoningforfait) of voor huizen onder de miljoen euro."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een eerlijke woningmarkt. Daarom schaffen we de hypotheekrenteaftrek en het eigenwoningforfait snel af. Zo dalen grond- en huizenprijzen en krijgen starters meer kansen. We kunnen het vrijgekomen geld investeren in bijvoorbeeld sociale zekerheid of duurzame woningen."
            },
            {
                "party": "BIJ1",
                "statement": "De hypotheekrenteaftrek (of: de bezitters-subsidie) wordt gefaseerd in 10 jaar afgeschaft. Om te voorkomen dat woonlasten op korte termijn exploderen voor huishoudens met weinig reserves, komt er een tijdelijke woonlastencompensatie voor huishoudens onder een inkomen van €50.000."
            },
            {
                "party": "Piratenpartij",
                "statement": "Hypotheekrenteaftrek kost miljarden en leidt tot kunstmatig hoge huizenprijzen. Het is bovendien een verkapte subsidie aan banken. Enkel de allerrijksten profiteren. Wij willen de HRA afbouwen, eerst door aftoppen boven de miljoen. Van de opbrengsten verlagen we de inkomstenbelasting!"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond schaft eigenwoningforfait, overdrachtsbelasting en vermogensbelasting op de woning af. Ook de hypotheekrenteaftrek verdwijnt, zodat één eenvoudig en eerlijk stelsel ontstaat dat wonen betaalbaarder maakt."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil dat er niet getornd wordt aan de hypotheekrenteaftrek, omdat veel huiseigenaren afhankelijk zijn van deze aftrek."
            },
            {
                "party": "VVD",
                "statement": "De hypotheekrenteaftrek moet overeind blijven. De hypotheekrenteaftrek zorgt voor rust op de woningmarkt, helpt werkende Nederlanders en zorgt dat meer mensen een eigen huis kunnen bemachtigen. Pogingen van andere partijen om het eigen huis zwaarder te belasten, wijzen wij hard af."
            },
            {
                "party": "NSC",
                "statement": "NSC wil de hypotheekrenteaftrek behouden. Het volledig afschaffen van de hypotheekrenteaftrek zou veel huiseigenaren financieel zwaar raken en hun zekerheid ondermijnen. NSC wil de woningmarkt hervormen met oog voor betaalbaarheid en draagvlak."
            },
            {
                "party": "BBB",
                "statement": "Voor BBB is de woning geen nieuwe bron van inkomsten voor de overheid. De hypotheekrenteaftrek mag niet verder worden beperkt en de (over)waarde van de eigen woning mag niet worden belast."
            },
            {
                "party": "DENK",
                "statement": "Het volledig afschaffen van de hypotheekrenteaftrek gaat de woningmarkt verstoren en gaat ook ten koste van de koopkracht. DENK is echter wel vóór de afschaffing van de hypotheekrenteaftrek voor de superrijken. De overheid hoeft niet hun dure woningen te subsidiëren."
            },
            {
                "party": "FvD",
                "statement": "Behoud hypotheekrenteaftrek; wonen betaalbaar houden en eigenaarschap beschermen."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil de hypotheekrenteaftrek behouden"
            },
            {
                "party": "JA21",
                "statement": "JA21 wil niet tornen aan de hypotheekrenteaftrek. Huizenbezit is een goede zaak en moet fiscaal niet onaantrekkelijker worden gemaakt."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Nederland heeft de hoogste woonlasten van Europa. 60% van de huishoudens heeft een hypotheek. Te veel mensen worden onevenredig geraakt door zo'n maatregel met het risico dat de economie ontwricht raakt"
            },
            {
                "party": "BVNL",
                "statement": "De overheid heeft de woningmarkt mede door de massa-immigratie volledig gesloopt. Daar helpt het verhogen van de lasten voor woningeigenaren niets aan. Starters en middeninkomens zijn dan juist de sigaar."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP pleit voor algehele belastingverlaging, niet alleen voor mensen met hypotheek. HRA is een maatregel van bankenlobby voor meer leningen/hogere rentes, verstoort de markt en zorgt voor hogere huizenprijzen. De LP is wel tegen afschaffen HRA zolang belastingen niet verlaagd worden voor iedereen."
            },
            {
                "party": "50PLUS",
                "statement": "De beloning op het aflossen van de hypotheek op de eigen woning (de wet Hillen) keert terug. De eigen woning wordt gedefiscaliseerd. Dat wil zeggen geen afschaf van de hypotheekrenteaftrek, geen woningforfait en geen overwaarde in box 3."
            },
            {
                "party": "FNP",
                "statement": "De hypotheekrenteaftrek kan prijzen opdrijven en dat is zorgelijk. Afschaffing maakt huizen door schaarste niet plots betaalbaarder. Starters en jonge gezinnen profiteren van de aftrek. Daarom zijn wij tegen volledige afschaffing. Afschaffing van het deel boven de NHG zien wij wel als bespreekbaar."
            },
            {
                "party": "De Linie",
                "statement": "De hypotheekrenteaftrek mag niet zomaar worden afgeschaft omdat veel kopers anders in grote financiële problemen komen. Bovendien is de hypotheekaftrek al ernstig versoberd en wordt deze al uitgefaseerd."
            }
        ]
    },
    {
        "theme": "Aanwezigheid bij demonstratie",
        "title": "De politie moet bijhouden wie aanwezig is bij een demonstratie die door de burgemeester is verboden.",
        "info": "In Nederland heb je het recht om te demonstreren. Een demonstratie moet van tevoren worden aangemeld bij de burgemeester. Meestal wordt toestemming gegeven, maar de burgemeester kan een demonstratie verbieden als die denkt dat deze een gevaar is voor de openbare orde of als de rechten van anderen op dat moment belangrijker worden gevonden. Nu wordt niet bijgehouden wie er aan een verboden demonstratie meedoet, tenzij iemand ook iets anders doet wat verboden is. Bijhouden kan bijvoorbeeld met foto's of met camera's met gezichtsherkenning.",
        "results": [
            {
                "party": "PVV",
                "statement": "Maar dan ook bij alle demonstraties en niet met 2 maten meten door de autoriteiten, zoals bijvoorbeeld het zonder consequenties laten doorgaan van XR demonstraties terwijl de blokkeer-Friezen zware (cel)straffen opgelegd kregen."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil dat de politie alle mogelijkheden krijgt om ervoor te zorgen dat relschoppers die het demonstratierecht misbruiken om strafbare feiten te plegen kunnen worden geïdentificeerd."
            },
            {
                "party": "CDA",
                "statement": "Het is simpelweg verboden om deel te nemen aan een illegale demonstratie, dus de politie mag hierop handhaven door te registeren wie aanwezig is. Op die manier kan aan mensen die de wet overtreden bijvoorbeeld een boete opgelegd worden."
            },
            {
                "party": "SGP",
                "statement": "Niet alleen bijhouden, maar ook aanhouden. Verboden demonstraties zijn illegaal en deelnemers derhalve strafbaar."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het lokale gezag verbiedt niet zomaar een demonstratie. De vrijheid van vereniging en het demonstratierecht wegen namelijk zwaar. Als een demonstratie tóch wordt verboden, kan het voor de politie, om goed te kunnen optreden, nodig te zijn te weten wie deelneemt aan een verboden demonstratie."
            },
            {
                "party": "JA21",
                "statement": "Onder het mom van 'demonstreren' wordt onze samenleving steeds vaker ontwricht door radicale groepen. Hier moet paal en perk aan gesteld worden. JA21 wil een verbod op gezichtsbedekkende kleding bij demonstraties, blokkades verbieden en veel strenger optreden tegen illegale demonstraties."
            },
            {
                "party": "50PLUS",
                "statement": "Betere handhaving en strenger optreden bij overtreders bevordert de veiligheid in Nederland. Niet alleen bij verboden demonstraties."
            },
            {
                "party": "FNP",
                "statement": "Een verbod is een verbod. Daartegen ingaan is dus een overtreding."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Demonstreren is een grondrecht. Bijhouden wie aanwezig is, tast vrijheid en privacy aan en kan mensen afschrikken om hun stem te laten horen. Handhaven bij verboden protesten kan, maar registreren van burgers hoort niet in een democratie."
            },
            {
                "party": "NSC",
                "statement": "NSC staat voor het beschermen van grondrechten; optreden tegen wanorde moet, maar registreren van namen van burgers die alleen aanwezig zijn wekt wantrouwen. Uiteraard moet de politie wel de ruimte krijgen om in gevallen zoals ordeverstoringen en vernielingen te kunnen registreren wie aanwezig is."
            },
            {
                "party": "D66",
                "statement": "Het demonstratierecht is een groot goed. Als de burgemeester een demonstratie verbiedt, moet de politie natuurlijk iedereen kunnen oppakken en arresteren als dat nodig is voor de openbare orde. Verplicht iedereen registreren gaat veel te ver. Hiervoor heeft de politie ook veel te weinig capaciteit."
            },
            {
                "party": "BBB",
                "statement": "Standaard moeten bijhouden wie een verboden demonstratie bijwoont, gaat te ver. Wat BBB betreft, kan de politie bijhouden wie een verboden demonstratie bijwoont als dat verband houdt met betrekking tot opsporing en vervolging wegens gepleegde strafbare feiten."
            },
            {
                "party": "SP",
                "statement": "Demonstreren is een grondrecht. Iedereen heeft het recht om aanwezig te zijn. De politie mag hen niet willekeurig registreren of noteren."
            },
            {
                "party": "DENK",
                "statement": "Burgers moeten kunnen demonstreren zonder in de gaten te worden gehouden door de politie, ongeacht of het een verboden demonstratie betreft of niet. DENK vindt het een te grote aantasting van het demonstratierecht om demonstranten te controleren."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Demonstraties zijn geen verstoring van de orde, maar een krachtig democratisch middel en een teken van hoop. Bijhouden wie er bij een verboden demonstratie aanwezig was vormt een belemmering voor vrije demonstraties. Wij staan pal voor het demonstratierecht."
            },
            {
                "party": "FvD",
                "statement": "Geen zwarte lijsten van demonstranten. Handhaaf orde, maar respecteer privacy en grondrechten."
            },
            {
                "party": "Volt",
                "statement": "Volt beschermt het recht op protest. Demonstraties zijn vreedzaam en waardevol voor onze democratie. Bijhouden wie protesteert, ook bij verboden demonstraties, werkt intimiderend en schrikt mensen af. Iedereen moet zich kunnen uitspreken, zich gehoord voelen en veilig zijn."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Demonstratierecht is een groot goed."
            },
            {
                "party": "BVNL",
                "statement": "Hij die de wet overtreedt dient te worden bestraft of beboet. Voorzichtigheid is hier echter geboden aangezien ongekozen burgemeesters nu al zeer selectief zijn in het al dan niet toestaan van demonstraties."
            },
            {
                "party": "BIJ1",
                "statement": "Iedereen moet veilig kunnen demonstreren. Het registreren van aanwezigen bij demonstraties schendt privacy en ondermijnt fundamentele democratische rechten."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP ziet privacy van inwoners als een van de belangrijkste grondrechten. Massasurveillance is het grootschalig monitoren van menselijk gedrag en inlichtingendiensten beschikken over infrastructuur die niet zou misstaan in Orwells 1984."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor het recht om te demonstreren, het recht op privacy en de democratische rechtsstaat. Het demonstratierecht staat nu al onder druk. Wij willen juist het recht om vrij en onbespied te demonstreren verstevigen! Informeer jezelf: https://programma.piratenpartij.nl/"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor maximale bescherming van grondrechten. Registratie van aanwezigen bij verboden demonstraties ondermijnt privacy en vrijheid van meningsuiting. Handhaaf bij strafbare feiten, maar geen massale toezicht of registraties van burgers."
            },
            {
                "party": "De Linie",
                "statement": "Het demonstreren is een onvervreemdbaar recht voor elke Nederlander. Bijhouden wie deelneemt aan een illegale demonstratie leidt tot profilering en is ongewenst."
            }
        ]
    },
    {
        "theme": "Leeftijd minimumloon omlaag",
        "title": "Het minimumloonIcon voor volwassenen moet gelden vanaf 18 jaar. Dat is nu nog 21 jaar.",
        "info": "Op dit moment hebben alle werknemers van 21 jaar en ouder recht op het minimumloon. Dat is het bedrag dat je minimaal moet ontvangen als je werkt. De regering stelt het minimumloon vast. Jongeren van 15 tot en met 20 jaar krijgen nu een percentage van het minimumloon. Daardoor zijn ze voor werkgevers goedkoper om in dienst te nemen.",
        "results": [
            {
                "party": "PVV",
                "statement": "Met 18 jaar ben je volwassen. Je mag dan stemmen, alcohol drinken en je rijbewijs halen. Er is dus geen enkele reden om iemand van 18 jaar minder te betalen. Hetzelfde werk, hetzelfde betaald."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Jongeren werken vaak net zo hard als hun oudere collega's, maar krijgen minder loon. Dat is oneerlijk en schaadt onze samenleving. Het minimumloon vanaf 18 helpt jongeren zelfstandig leven, verkleint armoede en geeft hen een sterke start op de arbeidsmarkt."
            },
            {
                "party": "NSC",
                "statement": "Jongeren van 18 jaar draaien vaak al volledig mee in het arbeidsproces. Het is eerlijker dat zij hetzelfde minimumloon krijgen als oudere collega’s, wat hun bestaanszekerheid versterkt en beter aansluit bij NSC’s inzet op een rechtvaardige arbeidsmarkt."
            },
            {
                "party": "D66",
                "statement": "D66 vindt het wel zo eerlijk dat een 18-jarige die hetzelfde werk doet als een 21-jarige, hetzelfde verdient. Om te voorkomen dat bedrijven hierdoor in de problemen komen, maken we het voor hen goedkoper om mensen in dienst te nemen."
            },
            {
                "party": "BBB",
                "statement": "BBB wil het minimumloon voor volwassenen verlagen naar 18 jaar in plaats van 21. Zo profiteren jongeren van 18 tot 21 eerder van een volwaardig loon, wat werkervaring, zelfstandigheid en financiële zelfstandigheid bevordert, zonder werkgevers te ontmoedigen om hen aan te nemen."
            },
            {
                "party": "SP",
                "statement": "Gelijk werk verdient gelijk loon, daarom schaffen we het minimumjeugdloon voor volwassenen vanaf 18 jaar af. De lonen voor jongeren stijgen naar verhouding mee per leeftijdsgroep, waardoor een vijftienjarige nooit minder dan driekwart van het minimumloon verdient."
            },
            {
                "party": "DENK",
                "statement": "DENK staat voor een eerlijk loon voor iedereen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Volwassenen horen een volwassen loon te krijgen. Het rechttrekken van het minimumloon voor volwassenen vanaf 18 jaar zorgt ervoor dat jongvolwassenen eerlijker worden betaald, beschermt hen tegen uitbuiting en maakt het eenvoudiger om volwaardig deel te nemen aan de samenleving."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is voorstander van het stapsgewijs verhogen van het huidige jeugdminimumloon voor 18-jarigen en ouder tot het niveau van het minimumloon voor werknemers van 21 jaar en ouder."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat jongeren vanaf 18 jaar hetzelfde minimumloon krijgen als volwassenen. We bouwen het minimumjeugdloon stap voor stap af. Wie werkt, moet eerlijk betaald krijgen, ook als je jong bent."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Leeftijdsdiscriminatie bij de toekenning van het minimumloon is onrechtvaardig en contraproductief."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil dat het minimumloon ook voor 18-jarigen gaat gelden. BVNL snoeit fors in de regelgeving en de werkgeverslasten, zodat deze verhoging voor werkgevers niet nadelig uitpakt. Daarmee wordt tevens de inflatoire werking van de verhoging van het minimumloon geëlimineerd."
            },
            {
                "party": "BIJ1",
                "statement": "Het jeugdloon moet verdwijnen. Het betaalt jongeren minder voor hetzelfde werk en drukt de lonen van volwassen werknemers. Grote bedrijven misbruiken het voor goedkope arbeid, zodat ze hogere winstmarges kunnen pakken. Dat moet stoppen. Werk is werk: iedereen heeft recht op hetzelfde minimumloon."
            },
            {
                "party": "50PLUS",
                "statement": "Op 18 jarige leeftijd ben je volwassen voor de wet. Dan ook voor loon."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor eerlijke arbeidsvoorwaarden. Volwassen werk verdient een volwassen loon. De Piratenpartij wil een minimumloon van tenminste 18 euro per uur voor iedereen vanaf 18 jaar. Informeer jezelf: programma.piratenpartij.nl"
            },
            {
                "party": "FNP",
                "statement": "Vanaf 18 jaar is men volwassen en moet dit ook financieel weerspiegeld worden. Een volwassen minimumloon geeft jongeren zelfstandigheid, ondersteunt zelfredzaamheid en verantwoordelijkheid, en sluit aan bij andere rechten en plichten die vanaf deze leeftijd gelden."
            },
            {
                "party": "VVD",
                "statement": "We willen dat iedereen rond kan komen. Het verhogen van het minimumloon voor jongvolwassenen vinden we niet verstandig omdat dit de kosten voor ondernemers flink verhoogt en omdat meer jongeren hun opleiding niet zullen afmaken."
            },
            {
                "party": "CDA",
                "statement": "Wij steunen de verhoging van het jeugdminimumloon in de komende jaren, maar zijn niet voor het verlagen van de leeftijdsgrens. Het is belangrijk om jongeren te blijven stimuleren hun opleiding af te maken. Bovendien krijgen veel jongeren onder de 21 al het hogere minimumloon, door Cao-afspraken."
            },
            {
                "party": "FvD",
                "statement": "Verhoog niet verplicht het volwassen minimumloon voor 18–20-jarigen; dat kost banen."
            },
            {
                "party": "SGP",
                "statement": "Het minimum(jeugd)loon is de afgelopen jaren al flink gestegen, wat een flinke last legt op werkgevers. De SGP is voorstander van een eerlijk minimumjeugdloon. Afschaffing is niet in het belang van jongeren omdat dat schooluitval in de hand werkt en leidt tot afname van werkgelegenheid onder jongeren."
            },
            {
                "party": "JA21",
                "statement": "Het op jongere leeftijd laten ingaan van het minimumloon voor volwassenen maakt het voor werkgevers onaantrekkelijker om starters op de arbeidsmarkt in dienst te nemen. Daarnaast kan het ertoe leiden dat jongeren hun opleiding afbreken om te gaan werken, wat hun latere loopbaan kan belemmeren."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is voor het afschaffen van minimumloon. De overheid moet niet tussen overeenkomsten van werkgevers en werknemers gaan zitten. Als arbeidsovereenkomsten vrijwillig tot stand komen hebben werkgevers en werknemers de vrijheid om zelf afspraken te maken over, onder andere, het salaris."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond wil geen aanpassing van het minimumloon, maar een nieuw inkomensstelsel. Met negatief basisinkomen en vlaktaks krijgt iedereen vanaf 18 jaar zekerheid en eenvoud. Zo vervalt de leeftijdsdiscussie en ontstaat een eerlijker systeem."
            },
            {
                "party": "De Linie",
                "statement": "Veel MKB bedrijven kunnen overleven doordat zij de lager betaalde jongeren kunnen inhuren. De leeftijd voor het minimumloon blijft derhalve op 21 jaar."
            }
        ]
    },
    {
        "theme": "Lelystad Airport",
        "title": "Lelystad Airport moet open voor commerciële luchtvaartIcon.",
        "info": "Lelystad Airport, een vliegveld bij Lelystad, zou vakantievluchten gaan overnemen van Schiphol. In 2022 kreeg het vliegveld geen natuurvergunning, waardoor het niet open kon. Een natuurvergunning is toestemming van de overheid voor activiteiten die slecht zijn voor de natuur, zoals stikstofuitstoot of lawaai. Het vliegveld heeft deze vergunning nog steeds niet gekregen. Daarom kunnen er geen commerciële passagiersvluchten komen op Lelystad Airport. Eerder dit jaar is Lelystad Airport wel aangewezen als trainingsplek voor vliegtuigen van het leger.",
        "results": [
            {
                "party": "PVV",
                "statement": "Het vliegveld ligt er volledig klaar. Dus wat de PVV betreft: zo snel mogelijk openen"
            },
            {
                "party": "VVD",
                "statement": "We moeten ophouden met vergaderen over een kant-en-klaar vliegveld. Wat de VVD betreft gaat Lelystad Airport open voor zowel defensie- als burgerluchtvaart. Dat is goed voor de economie en daarmee kunnen we Schiphol ontlasten."
            },
            {
                "party": "DENK",
                "statement": "DENK vindt dat Lelystad Airport kan bijdragen aan een betere verdeling van de commerciële luchtvaart in ons land."
            },
            {
                "party": "FvD",
                "statement": "Open Lelystad voor commerciële luchtvaart; bereikbaarheid en economie varen er wel bij."
            },
            {
                "party": "JA21",
                "statement": "Lelystad Airport is van belang voor het vestigingsklimaat, kan Schiphol ontlasten en geeft een economische impuls aan Flevoland. Bovendien is er al 240 miljoen euro in geïnvesteerd. Het vliegveld gesloten houden is pure kapitaalvernietiging. JA21 wil Lelystad Airport zo snel mogelijk openen."
            },
            {
                "party": "BVNL",
                "statement": "Het vliegveld is klaar voor de burgerluchtvaart. Vliegroutes dienen maximaal rekening te houden met omwonenden."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP vindt dat publieke investeringen in elk geval moeten renderen en dat moeten faciliteren waarvoor ze gebouwd zijn. Verder ziet de LP het liefst dat het beheren van luchthavens geen taak van de overheid is."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Of Lelystad Airport opent, bepalen belanghebbenden, luchtvaartmaatschappijen en reizigers, niet de overheid. Geen politieke blokkades, maar ruimte voor de gemeenschap om te besluiten welke luchthavens wenselijk zijn."
            },
            {
                "party": "De Linie",
                "statement": "Lelystad Airport had allang open moeten zijn voor de commerciële luchtvaart om Schiphol te ontlasten."
            },
            {
                "party": "SGP",
                "statement": "De SGP heeft nog geen knoop doorgehakt over definitieve openstelling van Lelystad Airport voor de burgerluchtvaart. We vinden onder meer dat eventuele openstelling gepaard moet gaan met afspraken over minder vluchten van en naar Schiphol waar nu veel geluidsoverlast is. Dat is nog onduidelijk."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Lelystad Airport openen betekent meer vluchten, meer CO₂ en meer lawaai. Dat schaadt natuur en gezondheid, terwijl er al genoeg vliegcapaciteit is. Wij kiezen voor klimaat en leefomgeving en investeren in duurzame alternatieven zoals goed treinverkeer."
            },
            {
                "party": "NSC",
                "statement": "Het openen van Lelystad Airport voor commerciële vluchten legt extra druk op de leefomgeving van omwonenden door meer geluidsoverlast en verkeersdrukte. NSC wil investeren in bestaanszekerheid en een gezonde woonomgeving; uitbreiding van de luchtvaart past daar niet bij."
            },
            {
                "party": "D66",
                "statement": "Lelystad Airport kan niet open voor commerciële vluchten. De opgaven op het gebied van klimaat, biodiversiteit en leefkwaliteit zijn dusdanig groot dat het openen van een nieuwe luchthaven niet verantwoord is."
            },
            {
                "party": "BBB",
                "statement": "Lelystad Airport krijgt een bestemming als luchtmachtbasis op basis van militair medegebruik. Pas na het volledig legaliseren van de PAS-melders valt met BBB te praten over commerciële vluchten. Géén laagvliegroutes met extra hinder en uitstoot."
            },
            {
                "party": "CDA",
                "statement": "Lelystad Airport wordt een belangrijke thuisbasis voor Defensie met de stationering van F-35’s. Commercieel gebruik van het vliegveld is voor het CDA geen doel op zich, maar kan alleen bij strikte voorwaarden: stiller en schoner vliegen en een oplossing voor laagvliegroutes."
            },
            {
                "party": "SP",
                "statement": "Er zijn grote en terechte zorgen van de bewoners over de uitbreiding van luchthaven Lelystad. De groei van het vliegveld gaat voor meer overlast en vervuiling zorgen. Lelystad Airport gaat niet open en er komen geen nieuwe aanvliegroutes voor Schiphol."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Lelystad Airport openen voor vakantievluchten is onwenselijk vanwege schade aan het klimaat, de volksgezondheid en de schaarse stikstofruimte. De Tweede Kamer heeft in 2024 een voorstel van ons aangenomen om Lelystad Airport definitief niet te openen voor vakantievluchten."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is tegen het openen van Lelystad Airport voor burgerluchtvaart. Het doel als overloopluchthaven van Schiphol kan niet gehaald worden en er zullen laagvliegroutes nodig zijn. De gedane publieke en private investeringen worden ruimhartig gecompenseerd."
            },
            {
                "party": "Volt",
                "statement": "Volt kiest voor gezonde lucht en minder geluidsoverlast. We investeren daarom juist meer in ruimte voor duurzame alternatieven, zoals internationale treinen."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "De luchtvaart moet drastisch krimpen."
            },
            {
                "party": "BIJ1",
                "statement": "Er komen geen nieuwe vliegvelden bij. Nederlandse vliegvelden, waaronder Schiphol, mogen niet uitbreiden. Het totale aantal vliegbewegingen wordt afgebouwd, met als doel een structurele krimp van de luchtvaart."
            },
            {
                "party": "50PLUS",
                "statement": "Alleen open als er bij andere vliegvelden verminderd wordt. Momenteel zijn er genoeg andere mogelijkheden in Nederland."
            },
            {
                "party": "Piratenpartij",
                "statement": "Piratenpartij staat voor duurzaam vervoer en een gezonde leefomgeving. Lelystad Airport kan niet uitbreiden, omdat dit ten koste gaat van de gezondheid van omwonenden en de omliggende natuur. Boerderijen opkopen voor meer vluchten is onwenselijk. Informeer jezelf: https://programma.piratenpartij.nl/"
            },
            {
                "party": "FNP",
                "statement": "Er zijn voldoende vliegvelden in Nederland. Wij zijn eerder voor het terugdringen van het aantal vluchten door bijvoorbeeld vliegtaks en belasting op kerosine dan het openen van nieuwe commerciële vliegvelden."
            }
        ]
    },
    {
        "theme": "Voorrang statushouders",
        "title": "Gemeenten moeten zelf kunnen bepalen of ze statushoudersIcon voorrang geven op een sociale huurwoning.",
        "info": "Statushouders zijn mensen die in Nederland asiel hebben aangevraagd en een verblijfsvergunning hebben gekregen. Gemeentes zijn verplicht om deze mensen een passende woning aan te bieden en kunnen statushouders daarom voorrang geven op een sociale huurwoning. Zo komt er ruimte in asielzoekerscentra. Er zijn vaak lange wachttijden voor sociale huurwoningen. Er is een wetsvoorstel gedaan om de voorrangsregelingen van gemeenten voor statushouders af te schaffen.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Het tekort aan betaalbare woningen wordt gebruikt om groepen tegen elkaar op te zetten. Meer betaalbare huizen zijn de oplossing, niet de uitsluiting van kwetsbare groepen. Daarom draaien we het verbod op voorrang voor statushouders terug. Gemeenten bepalen zelf wie voorrang moet krijgen."
            },
            {
                "party": "D66",
                "statement": "D66 wil radicaal meer woningen bouwen. Gemeenten mogen zelf bepalen wie ze voorrang geven en wie niet. D66 wil dat niet verplichten en niet verbieden. Een verbod leidt tot extreme situaties, zoals slachtoffers van brand of huiselijk geweld die dakloos worden, alleen omdat ze statushouder zijn."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt dat gemeenten de vrijheid moeten houden om naar eigen inzicht voorrang te kunnen geven aan kwetsbare groepen. Met de spreidingswet vragen we gemeenten wel om hun verantwoordelijkheid te nemen door een bijdrage te leveren aan de opvang van asielzoekers in hun regio."
            },
            {
                "party": "SP",
                "statement": "De voorrangsregels voor statushouders voor sociale huurwoningen zijn moeilijk uit te leggen aan andere urgente woningzoekenden. Het veroorzaakt een concentratie van kwetsbare groepen in wijken met veel problemen. Daarom moeten statushouders vaker worden opgevangen in rijke wijken en gemeenten."
            },
            {
                "party": "SGP",
                "statement": "Dit past volgens ons in de beleidsvrijheid van gemeenten. Gemeenten mogen niet verplicht worden de urgentie voor statushouders in te voeren, maar mogen dit zelf bepalen. Als ze, zolang de taakstelling er is, de taakstelling ook op een andere manier in kunnen vullen is dat aan gemeenten zelf."
            },
            {
                "party": "ChristenUnie",
                "statement": "Alle gemeenten blijven de ruimte houden om statushouders te huisvesten. Voorrang van huisvesting van statushouders kan alleen vervallen als een realistisch alternatief wordt geboden, waardoor de asielketen niet vastloopt."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat alle gemeenten bijdragen aan het huisvesten van statushouders. Dat mag niet afhangen van waar je woont. We zorgen voor eerlijke spreiding én ruimte voor maatwerk, zodat elke gemeente het op een manier kan doen die past bij de lokale situatie."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Gemeenten hebben autonomie in barmhartigheid."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP wil macht decentraliseren naar gemeenten. Wij zijn voor afschaffing speciale status asielzoekers/statushouders en recht op voorkeursbehandeling. Niemand heeft recht op asiel op kosten van de belastingbetaler. Inburgering/hulp aan migranten wordt aan vrijwillige burgerinitiatieven overgelaten."
            },
            {
                "party": "FNP",
                "statement": "Status alleen zou geen reden tot voorrang moeten zijn, omdat ook lokale woningzoekenden dringend een thuis nodig hebben. Maar gemeenten moeten zelf kunnen beslissen wat ze hiermee willen doen. Wij vertrouwen op lokale afwegingen en draagvlak in plaats van Haagse dwang."
            },
            {
                "party": "PVV",
                "statement": "De PVV is tegen de voorrang van statushouders op sociale huurwoningen. Wij zetten de Nederlanders weer op 1!"
            },
            {
                "party": "VVD",
                "statement": "We vinden het eerlijk als iedereen op zijn beurt moet wachten, we verbieden daarom de voorrang voor statushouders. Voor statushouders kan met flexwoningen tijdelijke woonruimte worden aangeboden om een eerste stap uit het asielzoekerscentrum te zetten."
            },
            {
                "party": "NSC",
                "statement": "Voorrang uitsluitend op basis van de status vinden wij geen goed idee. Wel vinden wij dat voorrang op basis van andere criteria, zoals medische urgentie of huiselijk geweld, e.d. voor iedereen in Nederland geldt, dus ook voor statushouders. Het zou discriminerend zijn om hen daarvan uit te sluiten."
            },
            {
                "party": "BBB",
                "statement": "Het is onverteerbaar dat jonge Nederlanders jarenlang wachten op een woning, terwijl nieuwkomers direct worden gehuisvest. BBB maakt een einde aan voorrang voor statushouders bij het toekennen van sociale huurwoningen. Iedereen sluit achteraan in de rij van woningzoekers, ook statushouders."
            },
            {
                "party": "DENK",
                "statement": "DENK wil dat de huisvesting van statushouders rechtvaardig over gemeenten wordt verdeeld. Daarnaast is snelle huisvesting essentieel om direct mee te doen in de samenleving. Landelijke regie en woningurgentie blijven daarom noodzakelijk."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Gemeentes mogen verplicht worden statushouders voorrang te geven op een sociale huurwoning. De asielketen loopt vast waardoor het noodzakelijk is dat statushouders doorstromen. Slecht woonbeleid heeft geleid tot tekorten van woningen, niet asielzoekers. Er moet meer sociale huur gebouwd worden."
            },
            {
                "party": "FvD",
                "statement": "Voorrang voor statushouders verdringt Nederlanders die al jaren wachten; geen voorkeursbehandeling."
            },
            {
                "party": "JA21",
                "statement": "Het asielbeleid leidt tot een enorme druk op de woningmarkt. Nederlandse starters staan jarenlang op de wachtlijst voor een sociale huurwoning. JA21 wil geen voorrang voor statushouders op de woningmarkt en wil tevens de verplichting voor gemeenten schrappen om statushouders te huisvesten."
            },
            {
                "party": "BVNL",
                "statement": "Gemeenten die weigeren de wet uit te voeren worden gekort op het gemeentefonds."
            },
            {
                "party": "BIJ1",
                "statement": "Wonen is een recht voor iedereen. De krapte in de sociale huursector is veroorzaakt door de massale uitverkoop van sociale huurwoningen, niet door statushouders. De overheid moet de plicht op huisvesting voor iedereen nakomen met grootschalige sociale woningbouw - ook voor statushouders."
            },
            {
                "party": "50PLUS",
                "statement": "Iedereen moet dezelfde kans krijgen op een sociale huurwoning. Denk hierbij ook aan kinderen van inwoners in dezelfde gemeente of mensen uit cruciale beroepen."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij is een internationale mensenrechtenbeweging. Als alle gemeenten bijdragen aan het huisvesten van statushouders, voorkomen we dat dat de asielketen verstopt raakt, wat uitmondt in peperdure noodopvang. Daarom handhaven wij ook de Spreidingswet. Meer info: programma.piratenpartij.nl"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Wonen moet eerlijk en bereikbaar zijn voor iedereen. Zolang we asiel tijdelijk stopzetten, komen er geen nieuwe statushouders bij. Voorrang op sociale huurwoningen is dan niet nodig en werkt alleen maar scheef."
            },
            {
                "party": "De Linie",
                "statement": "Er moet een landelijk beleid komen welke de voorrang bepaalt voor statushouders en een huurwoning."
            }
        ]
    },
    {
        "theme": "Leeftijdsgrens sociale media",
        "title": "De regering moet een leeftijdsgrens van 15 jaar instellen voor sociale mediaIcon.",
        "info": "Voor het gebruik van de meeste sociale media zoals TikTok, Snapchat en Instagram is de minimumleeftijd nu 13 jaar. Maar veel gebruikers zijn jonger, want kinderen kunnen liegen over hun leeftijd. De Europese Unie heeft in 2024 een wet aangenomen die strenge eisen stelt aan leeftijdscontrole en bescherming van minderjarigen door sociale mediaplatforms. De EU stelt geen minimumleeftijd voor, maar landen kunnen zelf ook regels opstellen, zolang die passen binnen de Europese regels. Op dit moment adviseert de Nederlandse overheid ouders al om kinderen pas vanaf 15 jaar op sociale media te laten.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Iedereen moet online veilig zijn. Daarvoor is meer nodig dan een leeftijdsgrens. We pakken in Europa het verdienmodel van Big Tech aan, zodat zij geen geld verdienen aan telefoonverslaving en ophef. Nationaal komt er meer les over mediawijsheid en voeren we een Digitale Kijkwijzer in voor apps."
            },
            {
                "party": "VVD",
                "statement": "Sociale media zijn een steeds groter deel van ons leven uit gaan maken. Om kinderen tegen online pesten, seksuele intimidatie en ronselen door criminelen te beschermen, omarmen we het leeftijdsadvies voor het gebruik van sociale media en werken een effectief sociale media verbod uit voor jongeren."
            },
            {
                "party": "NSC",
                "statement": "Sociale media hebben een grote invloed op jongeren en kunnen leiden tot verslaving, druk en mentale problemen. Een grens van 15 jaar helpt kinderen langer te beschermen in hun ontwikkeling, iets wat aansluit bij NSC’s inzet op een weerbare samenleving en bescherming van jongeren."
            },
            {
                "party": "D66",
                "statement": "Grote techbedrijven beschadigen het geluk en de gezondheid van onze kinderen. Sociale media zijn ontworpen om verslavend te zijn, stellen kinderen bloot aan schadelijke content en geven kinderen mentale problemen. Daarom heeft D66 voorgesteld om een minimumleeftijd van 15 jaar in te stellen."
            },
            {
                "party": "BBB",
                "statement": "Nederland gaat zich binnen de EU inzetten op een uniform en privacyvriendelijk leeftijdsverificatiesysteem dat apps zoals sociale media binnen de EU moeten hanteren om de veiligheid van persoonlijke data te garanderen. Daarbij past ook een hogere leeftijdsgrens."
            },
            {
                "party": "CDA",
                "statement": "We vinden het belangrijk dat we onze kinderen goed leren omgaan met sociale media. Daarom willen we een verplichte leeftijdscheck voor sociale media invoeren."
            },
            {
                "party": "SP",
                "statement": "De overheid moet het gebruik van sociale media door kinderen waar mogelijk beperken. We verbieden sociale media voor kinderen onder de vijftien jaar. Leeftijdsverificatie moet plaatsvinden zonder opslag van persoonsgegevens, zodat de privacy gewaarborgd blijft."
            },
            {
                "party": "DENK",
                "statement": "Een grens van 15 jaar helpt kinderen te beschermen. Jongeren mogen sociale media gebruiken, maar moeten worden afgeschermd van iedereen met kwade bedoelingen richting kinderen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "De minimumleeftijd voor het gebruik van sociale media wordt 16 jaar. Socialmediabedrijven worden verantwoordelijk voor de handhaving hiervan en krijgen een boete als een kind toch een account aanmaakt. Het is belangrijk om rekening te houden met privacy en de toegang van Big Tech tot deze data."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil een verbod op sociale media voor kinderen jonger dan 15 jaar vanwege verslavingsgevoeligheid en schadelijke content waar zij aan blootgesteld kunnen worden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Kinderen hebben het recht veilig op te groeien, ook online. Hierbij ligt de zorg in eerste instantie bij ouders. Het is de taak van de overheid om grenzen te stellen aan de grote techbedrijven. Hierbij hoort een leeftijdsgrens voor sociale media."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat jongeren beter worden beschermd tegen verslaving, schadelijke algoritmes en manipulatie op sociale media. Daarom steunen we een leeftijdsgrens van 15 jaar. Online veiligheid van jongeren staat voorop."
            },
            {
                "party": "JA21",
                "statement": "Social media hebben veel positieve kanten. Tegelijkertijd moeten we niet blind zijn voor de keerzijde van social mediagebruik onder kinderen, waaronder verslaving en nadelige effecten op het mentale welzijn. Een leeftijdsgrens is daarom verdedigbaar."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Kinderen moeten vooral kind kunnen zijn."
            },
            {
                "party": "50PLUS",
                "statement": "Het advies vanuit de rijksoverheid ondersteunt 50PLUS. Ook Europees is men met wetgeving bezig."
            },
            {
                "party": "FNP",
                "statement": "Een minimumleeftijd van 15 jaar voor sociale media beschermt jongeren tegen schadelijke content, cyberpesten en verslaving. Vanaf 15 zijn zij beter in staat risico’s te begrijpen. Handhaving kan via leeftijdsverificatie en streng toezicht op aanbieders."
            },
            {
                "party": "PVV",
                "statement": "Een leeftijdsgrens van 15 jaar voor sociale media is een betuttelende maatregel die geen problemen oplost. Ook beperkt het jongeren in de ontplooiing van hun digitale vaardigheden en daarmee hun digitale weerbaarheid."
            },
            {
                "party": "FvD",
                "statement": "Ouders en scholen zijn aan zet, niet Den Haag. Geen landelijke leeftijdsgrens; bestrijd verslaving via opvoeding en voorlichting."
            },
            {
                "party": "BVNL",
                "statement": "Opvoeden en toezicht hoort bij de ouders. De overheid moet zich terugtrekken uit ons privédomein."
            },
            {
                "party": "BIJ1",
                "statement": "Deze maatregel beperkt de autonomie van jongeren. We sturen aan op meer controle op 'big-tech' om jongeren beter te beschermen."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De overheid moet niet bepalen wie gebruik mag maken van social media. Dit is hooguit aan de ouders van minderjarigen. Invoering betekent digitale controle voor iedereen. LP kan hier nooit mee instemmen. Het grootste gevaar voor privacy is de overheid met haar macht om jouw vrijheid in te perken."
            },
            {
                "party": "Piratenpartij",
                "statement": "Piratenpartij staat voor digitale burgerrechten en online vrijheid. Een leeftijdsgrens is praktisch oncontroleerbaar en maakt online anonimiteit onmogelijk, ook voor volwassenen. Reguleer liever Big Tech, zodat ze sociale media minder schadelijk en verslavend maken en geef onderwijs in mediawijsheid"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Het is niet aan de overheid om te bepalen vanaf welke leeftijd iemand geschikt wordt bevonden om gebruik te mogen maken van sociale media. Het is aan de ouders om, al dan niet in overleg met het kind, afspraken te maken over (het gebruik van) sociale media"
            },
            {
                "party": "De Linie",
                "statement": "Wij zijn voor een leeftijdsgrens van 12 jaar voor social media."
            }
        ]
    },
    {
        "theme": "Meer geld voor ontwikkelingshulp",
        "title": "Nederland moet meer geld uitgeven aan ontwikkelingshulpIcon.",
        "info": "Ontwikkelingshulp is hulp van rijke landen aan arme landen om armoede te verminderen en ervoor te zorgen dat mensen in die landen een beter leven kunnen opbouwen. Er is een internationale afspraak om 0,7 procent van het bruto nationaal inkomen uit te geven aan ontwikkelingshulp. Het bruto nationaal inkomen is al het geld dat alle mensen in Nederland in een jaar verdienen. Sinds 2013 haalt Nederland die 0,7 procent niet meer door bezuinigingen.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Armoede, oorlog en klimaatproblemen elders hebben ook gevolgen voor Nederland. Door meer te investeren helpen we mensen vooruit, verkleinen we ongelijkheid en voorkomen we migratie, conflicten en instabiliteit. Dat is rechtvaardig én in ons belang."
            },
            {
                "party": "NSC",
                "statement": "NSC wil ontwikkelingshulp doelgericht inzetten, gekoppeld aan duidelijke voorwaarden en afspraken waar ook Nederland iets aan heeft, bijvoorbeeld over migratiesamenwerking en terugkeer. Zo komt hulp niet zomaar bovenop het bestaande budget, maar draagt het bij aan een eerlijk en uitvoerbare migratie"
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat Nederland meer moet investeren in ontwikkelingssamenwerking. Veiligheid begint bij het aanpakken van armoede, honger en waterschaarste. Door te investeren in onderwijs en duurzame ontwikkeling helpen we mensen vooruit en maken we de wereld veiliger."
            },
            {
                "party": "CDA",
                "statement": "Economisch perspectief helpt migratie tegengaan, is een steunpilaar tegen radicalisering en bevordert regionale ontwikkeling. Het CDA is voorstander van de norm van 0,7% bbp voor ontwikkelingssamenwerking, conform internationale afspraak, en zet stappen in fases naar het het behalen van deze norm."
            },
            {
                "party": "SP",
                "statement": "Ontwikkelingssamenwerking is een kwestie van internationale solidariteit. Daar moeten welvarende landen als Nederland hun eerlijke steentje aan bijdragen. Daarom moet Nederland minstens 0,7 procent van het BNI uitgeven aan ontwikkelingssamenwerking."
            },
            {
                "party": "DENK",
                "statement": "Nederland heeft een verantwoordelijkheid om haar steentje bij te dragen aan een rechtvaardigere wereld, zeker gezien de toenemende honger en geweld in de wereld. DENK is daarom vóór méér budget voor ontwikkelings- én noodhulp."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij zetten in op meer geld voor ontwikkelingssamenwerking: minimaal 1% van ons bruto nationaal inkomen. We investeren in herstel, perspectief en gelijkwaardigheid, zodat hulp eerlijk, duurzaam is en uiteindelijk overbodig wordt."
            },
            {
                "party": "SGP",
                "statement": "Vanuit onze welvaart en naar onze welvaart delen met de verre naaste in nood. Terug richting 0,7 procent BNI. Kaalslag in onze bijdrage en andere landen die bijdragen tegen hongersnood, droogte etc, daarnaast ook eigenbelang zoals stabiliteit."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil dat Nederland weer toegroeit naar de internationale norm om 0,7% van ons bni uit te geven aan ontwikkelingssamenwerking. Hiermee doen we recht aan de allerarmsten wereldwijd. Ook vanuit geopolitiek oogpunt is investeren in ontwikkelingssamenwerking verstandig."
            },
            {
                "party": "Volt",
                "statement": "Volt vervangt traditionele ontwikkelingshulp door samenwerking op basis van gelijkwaardigheid. Er gaat meer geld naar landen die zich inzetten voor democratie en mensenrechten. We geven lokale organisaties een belangrijke rol en de financiering van projecten gebeurt in de lokale valuta."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Vrede voor Dieren wil veel meer aandacht voor ontwikkelingshulp, omdat veel inwoners van ontwikkelingslanden lijden onder wat NL daar in het verleden aangericht heeft en direct slachtoffer worden van klimaatverandering en ontbossing. Het voorkomen van vluchtelingenstromen vergt bovendien dat we inwoners van ontwikkelingslanden helpen bij het opbouwen van een eigen toekomst."
            },
            {
                "party": "BIJ1",
                "statement": "Het budget voor internationale armoedebestrijding wordt opgehoogd tot 1% van het Bruto Binnenlands Product (BBP). Het beschermen van mensenrechten en het wereldwijd behalen van de Sustainable Development Goals staat centraal in ons buitenlandbeleid."
            },
            {
                "party": "FNP",
                "statement": "Na de korting van het vorige kabinet moet budget voor ontwikkelingshulp worden hersteld. Het geld moet effectief worden ingezet, met duidelijke, onderbouwde en controleerbare doelstellingen, zodat hulp daadwerkelijk bijdraagt aan bijvoorbeeld betere gezondheid en duurzame ontwikkeling wereldwijd."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil de ontwikkelingshulp volledig afschaffen en het geld in Nederland besteden."
            },
            {
                "party": "VVD",
                "statement": "In een onveiliger wordende wereld is het noodzakelijk om te investeren in onze eigen veiligheid en defensie. Dit betekent dat we minder uitgeven aan ontwikkelingssamenwerking."
            },
            {
                "party": "BBB",
                "statement": "BBB wil de uitgaven aan ontwikkelingshulp meer dan halveren en belastinggeld voor binnenlandse zaken besteden. We zijn voor een gerichte, tijdelijke en toetsbare hulp die bijdraagt aan stabiliteit en het tegengaan van migratiestromen."
            },
            {
                "party": "FvD",
                "statement": "Geld en aandacht moeten naar eigen land. Ontwikkelingshulp is vaak ineffectief en dient zelden het Nederlandse belang."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil ontwikkelingshulp beperken tot noodhulp en ondersteuning bij opvang in de regio."
            },
            {
                "party": "BVNL",
                "statement": "Wij willen stoppen met ontwikkelingshulp."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP wil alle buitenlandse steun/geldstromen stoppen die vanuit belastinggeld komen. Inwoners mogen zelf vrijwillig initiatieven steunen maar worden niet verplicht via belastingen. Wij geloven in de initiatieven die op eigen kracht in de samenleving ontstaan, juist zonder oplegging van bovenaf."
            },
            {
                "party": "50PLUS",
                "statement": "Handhaving van het huidige niveau heeft de voorkeur. Dit moet wel effectief en rechtvaardig zijn."
            },
            {
                "party": "Piratenpartij",
                "statement": "Geld geven, buiten noodhulp, houdt een afhankelijkheidsrelatie in stand. Mensen in armere landen hebben meer aan het wegnemen van belemmeringen op het gebied van handel, intellectueel eigendom en vrije toegang tot informatie. Lees meer: https://programma.piratenpartij.nl/#ontwikkelingssamenwerking"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Sterke zorg voor eigen inwoners hoort voorop te staan. Vrijwillige solidariteit werkt beter dan verplichte afdrachten. Het geld dat nu naar ontwikkelingshulp gaat, besteden we effectiever in Nederland."
            },
            {
                "party": "De Linie",
                "statement": "Het geld voor ontwikkelingshulp kan beter besteed worden aan verbetering van het Nederlands onderwijs."
            }
        ]
    },
    {
        "theme": "Controle op religieuze les",
        "title": "De overheid moet strenger controleren wat jongeren leren bij kerken, moskeeën en andere organisaties die lesgeven op basis van levensbeschouwing.",
        "info": "De overheid heeft regels gemaakt voor scholen om ervoor te zorgen dat kinderen alleen zaken leren die passen bij Nederlandse normen en waarden. Dat wordt ook gecontroleerd. Er zijn organisaties die op basis van religie of levensbeschouwing jongeren lesgeven buiten schooltijden. Over de inhoud van die lessen zijn geen afspraken gemaakt en er is nu bijna geen controle op.",
        "results": [
            {
                "party": "PVV",
                "statement": "De overheid moet streng controleren wat jongeren in moskeeën, koranscholen en islamitische organisaties leren, vanwege antiwesterse en antisemitische indoctrinatie. De sharia verwerpt onze democratie en bedreigt onze vrijheid. Kerken en Nederlandse organisaties zijn wel te vertrouwen."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Lessen die kerken, moskeeën of andere organisaties geven, kunnen waardevol zijn voor de ontwikkeling van een kind. Helaas gaan deze lessen soms ook in tegen de Nederlandse waarden en normen, zoals over de positie van de vrouw of lhbtiq+-personen. Als dit zo is, moet de overheid kunnen ingrijpen."
            },
            {
                "party": "VVD",
                "statement": "Voor het aanleren van onvrije waarden is in geen enkele vorm van onderwijs ruimte. Als er signalen zijn dat dit wel gebeurt, moet er ingegrepen kunnen worden. De VVD vindt daarom dat de onderwijsinspectie toezicht moet houden bij signalen zoals haatzaaien of discriminatie."
            },
            {
                "party": "NSC",
                "statement": "Vrijheid van godsdienst en onderwijs is een groot goed, maar die stopt waar jongeren worden blootgesteld aan haat of antidemocratische invloeden. NSC wil daarom dat de overheid kan ingrijpen en strenger controleert wanneer lessen in kerken of moskeeën in strijd zijn met waarden van onze rechtsstaat."
            },
            {
                "party": "D66",
                "statement": "D66 staat voor de vrijheid van godsdienst en iedereen heeft het recht hier buiten schooltijd meer over te leren. Maar daarbij is er geen ruimte voor onderwijs dat ingaat tegen de waarden van de Nederlandse rechtsstaat. We maken lesmateriaal van weekendscholen bovendien openbaar."
            },
            {
                "party": "BBB",
                "statement": "Buitenlandse mogendheden steken graag hun lange arm uit naar hun onderdanen in Nederland. Daarom is BBB voor verregaande maatregelen tegen ongewenste buitenlandse beïnvloeding en inmenging, bijvoorbeeld via Koranscholen of moskeeën."
            },
            {
                "party": "SP",
                "statement": "Iedereen mag geloven wat hij wil, maar onderwijs mag geen middel zijn voor haat of uitsluiting. Om kinderen en samenleving te beschermen moet er toezicht zijn op religieuze scholen en lessen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Onderwijsvrijheid is waardevol, maar mag nooit leiden tot discriminatie. Jongeren moeten in een veilige omgeving kunnen opgroeien, waarin ze zichzelf kunnen leren kennen en in vrijheid kunnen ontwikkelen. Onderwijssegregatie wordt actief bestreden zodat alle leerlingen gelijk worden behandeld."
            },
            {
                "party": "JA21",
                "statement": "Informeel islamitisch onderwijs vormt een bron van radicalisering en werkt de integratie tegen. JA21 wil streng toezicht op Koran- en islamitische weekendscholen en deze direct sluiten bij misstanden. Daarnaast moet buitenlandse financiering van islamitische instellingen worden tegengegaan."
            },
            {
                "party": "BVNL",
                "statement": "Toezicht is vereist. Buitenlandse financiering verboden. Instellingen waar haat jegens het westen en onze normen en waarden worden gepredikt, ook onder het mom van religie, of welke ideologie dan ook, worden gesloten."
            },
            {
                "party": "50PLUS",
                "statement": "Onderwijs controle wordt uitgevoerd door de inspectie van het onderwijs. Lesgeven op basis van levensbeschouwing mag niet leiden tot een broedplaats van radicalisering. Vanuit preventie heeft de overheid daar een taak in."
            },
            {
                "party": "CDA",
                "statement": "Het staat ouders vrij om hun kinderen op te voeden volgens hun geloofsovertuiging. We staan pal voor de vrijheid van godsdienst en vrijheid van onderwijs. Dat betekent niet dat er aangezet mag worden tot haat en discriminatie. Daar wil het CDA streng tegen blijven optreden."
            },
            {
                "party": "DENK",
                "statement": "De vrijheid van godsdienst betekent dat religieuze gemeenschappen in vrijheid hun geloof moeten kunnen belijden zonder overheidsbemoeienis."
            },
            {
                "party": "FvD",
                "statement": "Respecteer vrijheid van onderwijs en religie; geen extra staatscontrole op levensbeschouwelijke lessen."
            },
            {
                "party": "SGP",
                "statement": "De overheid heeft zich terecht altijd afzijdig gehouden van toezicht op informele levenssfeer van burgers in kerken en maatsch.organisaties, omdat het een inbreuk maakt op klassieke vrijheden.Specifieke problemen zoals het ondermijnen van de rechtsstaat moeten op een gerichte manier beschermd worden"
            },
            {
                "party": "ChristenUnie",
                "statement": "Nederland kent gelukkig vrijheid van godsdienst, vrijheid van meningsuiting en vrijheid van vereniging. Dat betekent dat de overheid niks te zoeken heeft in de kerk bij de catechisatie of bij de zondagsschool."
            },
            {
                "party": "Volt",
                "statement": "Volt staat voor gelijke behandeling. Discriminatie op basis van religie mag nooit. De overheid moet daarom religieuze lessen niet strenger controleren dan andere vormen van lesaanbod. Wel wil Volt inclusief onderwijs en gelijke rechten voor alle jongeren, ongeacht je achtergrond."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Nederland heeft vrijheid van godsdienst."
            },
            {
                "party": "BIJ1",
                "statement": "De surveillance van religieuze groepen belemmert godsdienstvrijheid. We pleiten voor meer investering in maatschappelijke initiatieven die direct het contact opzoeken met jongeren."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP verdedigt vrijheid van geloof en vrijheid van meningsuiting. Het is niet de taak van de overheid om preventief te controleren wat religieuze instellingen overbrengen als er geen duidelijke aanleiding is van een (mogelijk) misdrijf."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij is tegen zulke overheidssurveillance. Hoe de NCTV met ‘mystery moslims’ infiltreerde, ging veel te ver! Enkel bij een concrete verdenking past het om een specifieke levensbeschouwelijke groep in de gaten te houden. Informeer jezelf: https://programma.piratenpartij.nl/#burgerrechten"
            },
            {
                "party": "FNP",
                "statement": "De overheid kan nu al ingrijpen bij strafbare zaken. Het is ongewenst zulke taken bij bijvoorbeeld de onderwijsinspectie te leggen, die haar eigen taken niet goed kan uitvoeren. We willen overheidsbemoeienis beperken tot strikt noodzakelijke zaken, niet te veel achter de voordeur."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrijheid van onderwijs en geloof staat centraal. Ouders en jongeren kiezen zelf hun overtuiging. De overheid ziet toe op basisveiligheid en eindniveaus, maar bemoeit zich niet met de inhoud van het onderwijs. Zo blijft vrijheid van godsdienst en onderwijs gewaarborgd."
            },
            {
                "party": "De Linie",
                "statement": "Controleren in besloten omgevingen (zoals bv kerken) is een aantasting van onze vrijheid. Tenzij er zeer zwaarwegende redenen zijn waardoor controle zinvol is."
            }
        ]
    },
    {
        "theme": "Minder kinderbijslag",
        "title": "Huishoudens met een hoog inkomen moeten minder kinderbijslag krijgen.",
        "info": "Kinderbijslag is geld dat je van de overheid krijgt om te helpen met de kosten voor het opvoeden van je kind. Dat is een vast bedrag per kind en ouders of verzorgers krijgen het tot het kind 18 jaar is geworden. Als de kinderbijslag zou afhangen van het inkomen, zouden mensen met een hoger inkomen minder kinderbijslag krijgen.",
        "results": [
            {
                "party": "PVV",
                "statement": "Miljonairs en echt hoge inkomens hebben geen kinderbijslag nodig."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "We zijn voorstander van een brede herziening van het belasting- en toeslagenstelsel, waarbij mensen met een laag of middeninkomen erop vooruitgaan en mensen met een hoog inkomen meer gaan bijdragen. Zo zorgen we dat de sterkste schouders de zwaarste lasten dragen en solidariteit voorop staat."
            },
            {
                "party": "NSC",
                "statement": "Kinderbijslag is bedoeld om de kosten van kinderen te verlichten, vooral bij gezinnen die dat harder nodig hebben. Door hogere inkomens minder te geven, kan de overheid gerichter steun bieden aan gezinnen met een kleinere beurs, wat past bij NSC’s inzet op bestaanszekerheid en eerlijke verdeling"
            },
            {
                "party": "D66",
                "statement": "D66 vindt het belangrijk dat de verschillen tussen rijk en arm niet te groot zijn. Daarom geven we liever wat meer kinderbijslag aan mensen die het echt nodig hebben, in plaats van aan rijke mensen die het niet nodig hebben."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Publieke middelen moeten eerlijk worden ingezet. Zolang er nog toeslagen zijn maken we daarom de kinderbijslag inkomensafhankelijk. Steun voor sociale of duurzame maatregelen moet terecht komen bij mensen en op de plekken waar dit het hardst nodig is."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Kinderbijslag alleen indien nodig"
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor simpele en rechtvaardige sociale zekerheid. Wij willen een basistoeslag voor kinderen, dat verweven is met een progressief belastingstelsel. Dit betekent in praktijk dat mensen minder ontvangen naarmate hun inkomen stijgt."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor eenvoud en voorspelbaarheid. Kinderbijslag en andere toeslagen verdwijnen en worden vervangen door onvoorwaardelijke steun voor wie dat nodig heeft."
            },
            {
                "party": "VVD",
                "statement": "De kinderbijslag is een regeling voor alle ouders. Als de kinderbijslag afbouwt naarmate je meer gaat verdienen zorgt dat ervoor dat werken en ambitie hebben minder oplevert, omdat je kinderbijslag moet inleveren. Voor ouders met een laag inkomen bestaat bovendien het kindgebonden budget al."
            },
            {
                "party": "BBB",
                "statement": "De fijnmazige sturing van de overheid op toeslagen en allerlei belastingmaatregelen is gillend uit de hand gelopen. Het zorgt voor een onmogelijke uitvoering waarin de Belastingdienst compleet is doorgedraaid en mensen in de knel komen. BBB heeft een concreet plan voor het vervangen van dit stelsel."
            },
            {
                "party": "CDA",
                "statement": "Gezinnen zijn de stille kracht van de samenleving. We willen gezinnen helpen door de kinderbijslag en het kindgebonden budget te verhogen en samen te voegen tot één eenvoudige regeling."
            },
            {
                "party": "SP",
                "statement": "Wij vinden dat hogere inkomens en vermogens hun eerlijke deel moeten bijdragen aan belastingen, zodat deze omlaag kunnen voor de lage- en middeninkomens. Inkomensafhankelijke regelingen zijn erg bureaucratisch en foutgevoelig, daarom hoeft dit niet via de kinderbijslag te gaan."
            },
            {
                "party": "DENK",
                "statement": "Kinderen zijn de toekomst en verdienen steun. DENK vindt dat de overheid haar waardering moet laten zien voor de volgende generatie en daarom moet de kinderbijslag behouden blijven voor alle huishoudens."
            },
            {
                "party": "FvD",
                "statement": "Kinderbijslag is universeel; geen straf voor hogere inkomens en geen extra bureaucratie."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil de kinderbijslag, het kindgebonden budget en de kinderopvangtoeslag samenvoegen in één kinderbijdrage. We zijn geen voorstander van het verlagen van de kinderbijslag, maar willen juist meer geld naar gezinnen met kinderen."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het belastingstelsel is de afgelopen decennia veel te complex geworden door talloze van inkomensafhankelijke regelingen. Het is daarom geen goed idee om de kinderbijslag ook inkomensafhankelijk te maken. Wat de ChristenUnie betreft verhogen we de kinderbijslag juist fors voor alle kinderen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een goede basis voor iedereen. Dat lossen we niet op met aanpassingen in de kinderbijslag. We schaffen toeslagen en regelingen, zoals de kinderbijslag, af. En we vervangen deze door een basisinkomen: een eerlijke bijdrage waarmee ieder huishouden vooruit kan."
            },
            {
                "party": "JA21",
                "statement": "JA21 is geen voorstander van inkomenspolitiek via de kinderbijslag. Er zijn al inkomensafhankelijke kindregelingen zoals het kindgebonden budget. Daarnaast wil JA21 het toeslagenstelsel fors vereenvoudingen en de bestaande toeslagen vervangen door één kindertoeslag."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil een vlaktaks en een belastingvrije voet van € 20.000. Dan kunnen we alle toeslagen schrappen. De uitvoeringskosten dalen dan tevens fors. De overheid wordt dan kleiner. BVNL is tegen inkomensafhankelijke toeslagen."
            },
            {
                "party": "BIJ1",
                "statement": "Kinderbijslag is een basisrecht en moet voor iedereen gelden, ongeacht inkomen. Eenvoudige en universele regelingen zorgen voor zekerheid, minder bureaucratie en lagere uitvoeringskosten."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is tegen progressieve toeslagen en belastingen en ziet dit als een ordinaire poging tot gedwongen herverdeling van privébezit. Wij willen alle vormen van toeslagen uitfaseren tegelijk met het uitfaseren van alle vormen van belasting."
            },
            {
                "party": "50PLUS",
                "statement": "Kinderbijslag is voor iedereen gelijk."
            },
            {
                "party": "FNP",
                "statement": "Hogere inkomens betalen al meer belasting en kunnen ook meer bijdragen aan bijvoorbeeld de kinderopvang. Werken moet echter blijven lonen, dus de extra belastingdruk mag niet verder stijgen om mensen te blijven stimuleren te werken."
            },
            {
                "party": "De Linie",
                "statement": "Wij zijn geen voorstander van een inkomensafhankelijke kinderbijslag."
            }
        ]
    },
    {
        "theme": "Geld naar publieke omroep",
        "title": "Er moet minder geld naar de publieke omroepIcon.",
        "info": "De publieke omroep in Nederland bestaat uit drie televisiezenders (NPO 1, 2 en 3) en zes radiozenders. Doel is om niet alleen programma’s te maken voor een breed publiek, maar ook voor kleinere groepen mensen. De publieke omroep krijgt daarvoor geld van de overheid. Commerciële zenders als RTL en SBS6 krijgen geen geld van de overheid.",
        "results": [
            {
                "party": "PVV",
                "statement": "Sterker nog: de PVV wil de publieke omroep afschaffen."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil een publieke omroep die zich richt op haar kerntaken. Dat kan met een slanker budget. De belastingbetaler hoeft niet op te draaien voor amusementsprogramma's of reality-tv op de publieke omroep."
            },
            {
                "party": "BBB",
                "statement": "BBB streeft naar een sobere publieke omroep die zich richt op nieuws, informatie, educatie en beperkt cultuur. Entertainment, doublures en hoge digitaliseringskosten schrappen we. Zo besparen we structureel, zonder dat kwaliteit van nieuws en duiding verloren gaat."
            },
            {
                "party": "FvD",
                "statement": "De publieke omroep is te duur en te activistisch; slankere publieke taken, meer pluriformiteit."
            },
            {
                "party": "SGP",
                "statement": "De SGP is voorstander van een compactere omroep die zich meer op de kerntaken richt, zoals betrouwbare informatievoorziening, en niet op amusement."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil de publieke omroep terugbrengen naar twee zenders, gericht op zaken als nieuws, documentaires en geschiedenis. Entertainment kan aan commerciële omroepen worden overgelaten. Het stelsel van ledenomroepen is achterhaald en moet worden afgeschaft."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil af van de publieke omroep die zich sinds jaar en dag niet houdt aan de mediawet."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Media faciliteren is geen taak voor de overheid. De LP wil publieke omroepen schrappen of privatiseren. De LP is voorvechter van een kleine, dienstbare overheid die zich beperkt tot rechtsstaatbescherming. Alle andere taken doen af aan de individuele vrijheid/verantwoordelijkheid van burgers."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Onafhankelijke media bloeien in een vrije markt. Journalistiek is geen overheidstaak en hoort niet van belastinggeld afhankelijk te zijn. Minder geld naar de publieke omroep bespaart én versterkt de vrijheid van de pers."
            },
            {
                "party": "De Linie",
                "statement": "Het geld voor de publieke omroep mag minder worden en kan beter besteed worden aan beter onderwijs."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Vrije en diverse media zijn onmisbaar voor onze democratie. Ons doel is een reclamevrije publieke omroep met focus op cultuur, educatie, nieuws en betrouwbare informatie. Nederland geeft in vergelijking met andere landen overigens relatief weinig geld uit aan de publieke omroep."
            },
            {
                "party": "NSC",
                "statement": "NSC wil dat de publieke omroep zich concentreert op haar kerntaken, zoals nieuws, cultuur en educatie. Dat betekent minder middelen naar amusement en dure shows, en meer nadruk op betrouwbare informatie. Het gaat dus niet om bezuinigen, maar om een doelgerichte inzet van het bestaande budget."
            },
            {
                "party": "D66",
                "statement": "D66 investeert in een sterke publieke omroep met een divers en kwalitatief hoogstaand media-aanbod. We versterken de kerntaak van de publieke omroep: mensen voorzien van betrouwbare informatie. We bewaken dat publiek geld goed wordt besteed, ook bij bedrijven die buiten het bestel worden ingehuurd."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt persvrijheid heel belangrijk. Goede en betrouwbare media zijn nodig in deze tijd van nepnieuws en propaganda. Wij willen een pluriform, publieksonafhankelijk omroepbestel met sterke representatie van de samenleving."
            },
            {
                "party": "SP",
                "statement": "We stoppen de bezuinigingen en investeren juist in de publieke omroep. We pleiten voor een brede en diverse publieke omroep, waar kijkcijfers niet meer leidend zijn. Bij de publieke omroep komt meer ruimte voor kritische journalistiek, Nederlands drama en documentaires."
            },
            {
                "party": "DENK",
                "statement": "DENK vindt dat de publieke omroep een belangrijke rol vervult in onze democratie en gewaarborgd moet worden. Minder geld mag niet ten koste gaan van de kwaliteit, maar tegelijkertijd kan er efficiënter gewerkt worden, door bijvoorbeeld kritisch te kijken naar topsalarissen en interne structuren."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "De Nederlandse Publieke Omroep (NPO) is opgericht om een breed en divers publiek te voorzien van informatie, cultuur en educatie. Het is belangrijk dat de NPO deze rol kan blijven vervullen. Daarom willen wij dat de bezuiniging op de NPO worden teruggedraaid."
            },
            {
                "party": "ChristenUnie",
                "statement": "De publieke omroep is heel waardevol als plek van onafhankelijk en pluriform media-aanbod. We willen meer ruimte voor regionale omroepen en betere onderzoeksjournalistiek."
            },
            {
                "party": "Volt",
                "statement": "Volt wil juist meer investeren in de publieke omroep. De publieke omroep informeert en verbindt. Onafhankelijke journalistiek, educatie en cultuur zijn belangrijk voor onze samenleving én democratie."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "De Nederlandse publieke omroep is een van de goedkoopste van Europa."
            },
            {
                "party": "BIJ1",
                "statement": "De publieke omroep vervult een democratische kerntaak in Nederland. Namelijk het vertegenwoordigen van verschillende geluiden en gemeenschappen in het (culturele) medialandschap. BIJ1 wil daarom juist een sterke en diverse publieke omroep die niet door de overheid of winstbejag wordt beïnvloed."
            },
            {
                "party": "50PLUS",
                "statement": "De publieke omroep is belangrijk. Echter zij dient efficiënter om te gaan met de gelden door betere samenwerking."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor een vrije democratie. Goed gefinancierde publieke media en journalistiek zijn hierin essentieel, als waakhond. Journalistiek moet politieke en maatschappelijke ontwikkelingen goed kunnen controleren, met betere checks en balances om onafhankelijkheid te waarborgen."
            },
            {
                "party": "FNP",
                "statement": "De publieke omroep is een groot goed in onze democratische rechtstaat. Daar moet niet minder geld heen. De publieke omroep vervult ook in de regio en lokaal een belangrijke taak die wij koste wat het kost overeind willen houden."
            }
        ]
    },
    {
        "theme": "Palestijnse staat",
        "title": "Nederland moet de Palestijnse staat zo snel mogelijk erkennen.",
        "info": "In de jaren negentig van de vorige eeuw zijn er internationale afspraken gemaakt over een aparte Palestijnse en Israëlische staat. De Palestijnen hebben nu eigen besturen in Gaza en de Westelijke Jordaanoever, maar nog geen volledig zelfbestuur. De Palestijnse staat zou dat wel hebben.De Nederlandse regering is al langer voorstander van een tweestatenoplossing waarbij Israël en de Palestijnse staat naast elkaar bestaan. Tot nu toe wacht Nederland met het erkennen van de Palestijnse staat. Landen als Frankrijk, België, Canada en het Verenigd Koninkrijk hebben recent besloten om de Palestijnse staat te erkennen.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Palestijnen hebben net als Israëliërs recht op een eigen staat en een veilige toekomst. De bezetting van de Westoever en het genocidale geweld in Gaza maken dat onmogelijk. Voor een eerlijke tweestatenoplossing moet Nederland Palestina snel erkennen."
            },
            {
                "party": "D66",
                "statement": "Een tweestatenoplossing is de enige duurzame oplossing voor zowel een veilig Israël als een veilig Palestina. Daarvoor is het erkennen van de Palestijnse staat noodzakelijk. Daarbij mag Hamas uiteraard geen rol spelen in het toekomstige bestuur van een Palestijnse staat."
            },
            {
                "party": "SP",
                "statement": "De illegale bezetting van Palestijns land, de genocide en het apartheidsbeleid moet worden gestopt. Wij erkennen Palestina als onafhankelijke staat en staan pal voor het recht van het Palestijnse volk op zelfbeschikking."
            },
            {
                "party": "DENK",
                "statement": "DENK staat voor één staat tussen de rivier en zee, met gelijke rechten voor iedereen, en die staat heet Palestina. Het erkennen van de Palestijnse staat is de erkenning van de realiteit dat de Palestijnen recht hebben op zelfbeschikking. Dat moet vandaag nog gebeuren."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij willen dat Nederland Palestina zo snel mogelijk erkent. Alleen door erkenning en gelijke rechten voor Palestijnen kan er sprake zijn van een rechtvaardige en duurzame vrede. Nederland moet hierin het voortouw nemen."
            },
            {
                "party": "FvD",
                "statement": "Erkenning van Palestina is een belangrijke stap richting de tweestatenoplossing en daarmee een duurzame vrede in het Midden-Oosten."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat Nederland Palestina onmiddellijk erkent. Alleen zo zetten we stappen naar een tweestatenoplossing waarin Palestijnen en Israëli’s veilig en vreedzaam kunnen leven. Daarna moeten er zo snel mogelijk vrije verkiezingen in Palestina komen."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Het Palestijnse volk heeft recht op zelfbeschikking."
            },
            {
                "party": "BIJ1",
                "statement": "Nederland moet het recht op Palestijnse zelfbeschikking en op georganiseerd verzet tegen bezetting en genocide (ook gewapend, zoals verankerd in het internationaal recht) zo snel mogelijk erkennen."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor vrede, veiligheid en verzoening. De Israëlische oorlogsmisdaden zijn onacceptabel, met welke aanleiding ook. Daarom willen wij de wapenhandel stoppen, tenminste totdat de Palestijnen een eigen staat hebben, alle gijzelaars vrijkomen en alle partijen de wapens neerleggen."
            },
            {
                "party": "PVV",
                "statement": "Er is al een Palestijnse staat, genaamd Jordanië"
            },
            {
                "party": "VVD",
                "statement": "We zijn voorstander van een tweestatenoplossing, maar zijn van mening dat de erkenning van een Palestijnse staat een sluitstuk van een vredesproces moet zijn, waarbij een veilig Israël naast een levensvatbare Palestijnse staat wordt bewerkstelligd."
            },
            {
                "party": "NSC",
                "statement": "NSC steunt een tweestatenoplossing, dus erkenning van Palestina hoort daar op termijn bij, maar zonder enige betrokkenheid van het terreurbewind van Hamas. Nu Palestina erkennen wordt door Hamas geïnterpreteerd als beloning voor hun terreuraanslag van 7 oktober 2023."
            },
            {
                "party": "BBB",
                "statement": "BBB streeft naar een passende oplossing voor de Palestijnen zoals bijvoorbeeld twee staten en vrede met onvoorwaardelijke erkenning van de staat Israël, mits dit voortkomt uit een vredesproces en daadwerkelijk leidt tot duurzame vrede."
            },
            {
                "party": "CDA",
                "statement": "Het CDA is voorstander van het onder voorwaarden erkennen van de Staat Palestina. Wel moet eerst aan die voorwaarden zijn voldaan, waaronder het houden van vrije verkiezingen, het uitsluiten van Hamas en andere terreurorganisaties en het ondubbelzinnig erkennen van het bestaansrecht van Israël."
            },
            {
                "party": "SGP",
                "statement": "De SGP is tegen eenzijdige erkenning van een Palestijnse staat. Zeker na 7 oktober 2023 zijn er weinig lichtpuntjes waaruit valt af te leiden dat een Palestijnse staat niet een herhaling wordt van Gaza of leidt tot een soort mini-Iran of een mini-Afghanistan. Daarom moet ook worden nagedacht over alternatieven voor de tweestaten oplossing."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil vooral dat er weer gesproken gaat worden Israël en de Palestijnen over vrede. Erkenning van een Palestijnse staat zou pas kunnen als onderdeel van onderhandelingen, mede omdat nu in de Palestijnse gebieden nog sprake is van verdeeld, ondemocratisch leiderschap en corruptie."
            },
            {
                "party": "JA21",
                "statement": "Een tweestatenoplossing lijkt sinds de aanslagen door Hamas op 7 oktober 2023 helaas voor langere tijd onmogelijk geworden. Nu eenzijdig overgaan tot erkenning van de Palestijnse staat is onverstandig en onverantwoord."
            },
            {
                "party": "BVNL",
                "statement": "Er is geen Palestijnse staat, noch een bestuur, noch een homogene gemeenschap om te erkennen. Terreur moet niet worden beloond."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is tegen elke vorm van buitenlandbeleid. Wel erkennen wij de mensenrechten van alle Palestijnen. We kijken met afschuw naar de onderdrukkende regimes van Netanyahu en Hamas maar zijn tegen internationale samenwerkingen die ons bij conflicten betrekken die Nederland niets aangaan."
            },
            {
                "party": "50PLUS",
                "statement": "De Palestijnse staat moet nu eerst aan enkele voorwaarden voldoen, namelijk geen terroristische organisaties die kans maken op bestuurlijke macht."
            },
            {
                "party": "FNP",
                "statement": "Als wordt bedoeld dat de erkenning morgen al klaar moet zijn als drukmiddel zijn wij tegen. Wij zijn wel van mening dat erkenning van een Palestijnse staat zonder Hamas kan bijdragen aan een twee-statenoplossing en duurzame vrede. Dit moet op het juiste moment, zonder extra druk op onderhandelingen."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor neutraliteit en terughoudendheid. Nederland moet geen partij kiezen door Palestina eenzijdig te erkennen. Echte stabiliteit komt van diplomatie en samenwerking, niet van symbolische besluiten of ideologische inmenging."
            },
            {
                "party": "De Linie",
                "statement": "Nederland moet de Palenstijnse staat (ooit) gaan erkennen maar zolang HAMAS daar de scepter zwaait zijn we daar geen voorstander van."
            }
        ]
    },
    {
        "theme": "Heffing op plastic",
        "title": "Voor het eenmalig gebruik van plastic, zoals bekers en eetbakjes, betaal je extra. Die heffing moet verdwijnen.",
        "info": "Voor plastic dat je maar één keer gebruikt (zoals bij afhaaleten of ijs) moet je soms extra betalen door een heffing. Het doel is dat we daardoor minder plastic gaan gebruiken en minder plastic afval krijgen. De extra kosten staan apart op de kassabon. De heffing zorgt voor meer kosten en ook voor meer administratie voor ondernemers. Zij hoeven de inkomsten uit die heffing niet aan de overheid te geven.",
        "results": [
            {
                "party": "PVV",
                "statement": "De PVV wil geen onnodige lastenverzwaring, maar lastenverlichting."
            },
            {
                "party": "VVD",
                "statement": "Een heffing op plastic maakt het al niet goedkope leven nog eens extra duur. Bovendien zijn er onvoldoende (voedselveilige) alternatieven zonder plastic. Om het milieu en klimaat te beschermen, moeten consumenten en producenten hun verantwoordelijkheid nemen om plastic te recyclen."
            },
            {
                "party": "NSC",
                "statement": "De extra heffing zorgt vooral voor hogere kosten en frustratie bij burgers, terwijl het milieueffect beperkt is. NSC wil praktisch en uitvoerbaar beleid zonder onnodige lasten voor gewone mensen; eenvoudiger regels zijn effectiever dan nieuwe heffingen."
            },
            {
                "party": "D66",
                "statement": "Deze heffing gaat verdwijnen, mede omdat hij niet effectief en duidelijk genoeg is. D66 is niet van plan dat tegen te houden. We blijven knokken voor een circulaire economie, maar dat moet wel met maatregelen die werken en eerlijk zijn."
            },
            {
                "party": "BBB",
                "statement": "BBB staat niet achter de heffingen op plastic, zoals de heffing op wegwerpverpakkingen. Deze maatregelen leggen onevenredige lasten bij consumenten en het bedrijfsleven neer zonder dat het gewenste milieueffect duidelijk is."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil het gebruik van eenmalig plastic zeker terugdringen, maar een heffing is niet het enige middel. Als een heffing niet effectief is, kiezen we liever voor andere oplossingen die beter werken en draagvlak hebben bij ondernemers en consumenten."
            },
            {
                "party": "SP",
                "statement": "Een plastictaks wordt niet gevoeld door mensen met een hoog inkomen die relatief veel uitstoot veroorzaken, maar vooral door de werkende klasse. In plaats daarvan verbieden we overbodige verpakkingen en wordt het gebruik van plastic verpakkingen drastisch verminderd."
            },
            {
                "party": "DENK",
                "statement": "DENK is tegen een plastictaks op bekers en eetbakjes. Deze belasting werkt niet en zorgt alleen maar voor hogere kosten. Hierdoor wordt de ongelijkheid vergroot."
            },
            {
                "party": "FvD",
                "statement": "Schrap de wegwerpheffing; symboolmaatregel die burgers en ondernemers op kosten jaagt."
            },
            {
                "party": "SGP",
                "statement": "Het is voor snackbarhouders en andere verkopers moeilijk werkbaar, terwijl het effect beperkt is. De SGP wil minder gebruik van plastics, maar dan door onder meer een heffing eerder in de productieketen."
            },
            {
                "party": "JA21",
                "statement": "Deze taks is een schoolvoorbeeld van een ineffectieve, bureaucratische en betuttelende maatregel die tot grote ergernis bij ondernemers en consumenten leidt. JA21 wil deze schrappen."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "De heffing draagt niet bij aan het terugdringen van gebruik. Er zijn betere manieren om het afval te verminderen."
            },
            {
                "party": "BVNL",
                "statement": "Weg met alle peperdure symboolpolitiek."
            },
            {
                "party": "BIJ1",
                "statement": "De lasten van klimaatbeleid worden niet langer gedragen door gewone burgers maar door grote vervuilers. Klimaatbeleid gaat niet langer ten koste van bestaanszekerheid."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De heffing op eenmalig plastic is een opgedrongen maatregel waardoor ondernemers extra kosten moeten doorberekenen. Het maakt voedingsmiddelen onnodig duurder en schendt de vrijheid van onschuldige ondernemers en consumenten. Wij zien liever dat vervuilers worden aangepakt bij schade aan de natuur."
            },
            {
                "party": "50PLUS",
                "statement": "Dit is een verkapte vorm van prijsopdrijving voor de consument."
            },
            {
                "party": "Piratenpartij",
                "statement": "Piraten staan voor effectieve maatregelen om plastic vervuiling te stoppen. Piraten willen dat bedrijven ZELF belasting gaan betalen voor hun plasticgebruik, waarbij we meteen zorgen dat gerecycled plastic en alternatieven (bvb uit hennep) goedkoper worden dan vervuilende 'virgin plastics'"
            },
            {
                "party": "FNP",
                "statement": "We zien dat deze heffing het gedrag van consumenten niet effectief beïnvloedt. Een vorm van statiegeld werkt bijvoorbeeld veel beter. Zoek daarom naar effectievere maatregelen om het gebruik van plastic terug te dringen zonder daar mensen mee in de beurs te raken terwijl de vervuiling blijft."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor lagere lasten en echte oplossingen. De heffing op wegwerpplastic levert nauwelijks milieuwinst op en straft burgers en ondernemers. Innovatie en recycling maken duurzame alternatieven vanzelf aantrekkelijk, zonder symbolische belastingen."
            },
            {
                "party": "De Linie",
                "statement": "De heffing op allerlei verpakkingen, waaronder plastic verpakkingen, heeft weinig nut. Beter is het om alle plastic verpakkingen, bekers en eetbakjes te vervangen door afbreekbare alternatieven."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Deze heffing helpt afval voorkomen, omdat meer mensen kiezen voor herbruikbare bekers en bakjes. Dat betekent schonere natuur, gezondere dieren en minder microplastics in ons eten. De opbrengst moet niet naar bedrijven gaan, maar naar het Rijk. Dat kan daarmee investeren in een circulaire economie."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Plastic voedt de klimaatcrisis en vervuilt water en natuur. Er komt een verbod op wegwerpplastic. Waar nog plastic wordt gebruikt, moet dat gerecycled zijn. We dringen het gebruik van plastic verpakkingen terug door te kiezen voor herbruikbare verpakkingen en bijvulmogelijkheden in de supermarkt."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil het gebruik van plastic in de economie terugdringen. Dat is beter voor mens en milieu. De meerprijs voor eenmalig plasticgebruik blijft bestaan, zolang er een herbruikbaar alternatief voor consumenten mogelijk is. Hierbij is ook oog voor administratieve lasten van ondernemers."
            },
            {
                "party": "Volt",
                "statement": "Volt wil eerlijke prijzen die rekening houden met de impact op natuur en gezondheid. Wegwerpplastic vervuilt. Daarom blijft de heffing. Zo stimuleren we hergebruik en schonere alternatieven. Met de opbrengsten maken we duurzame producten aantrekkelijker."
            }
        ]
    },
    {
        "theme": "Huurstijging sociale huurwoning",
        "title": "De huurprijs van een sociale huurwoningIcon mag de komende drie jaar niet harder stijgen dan de inflatieIcon.",
        "info": "Sociale huurwoningen zijn bedoeld om betaalbare woonruimte te bieden aan mensen met een lager of middeninkomen. De maximumprijs bedraagt 900,07 euro per maand (2025). De overheid bepaalt elk jaar hoeveel die huur mag stijgen. Dat hangt af van de inflatie en van allerlei kosten van verhuurders. Inflatie is de gemiddelde prijsstijging van de goederen en diensten die consumenten kopen.",
        "results": [
            {
                "party": "PVV",
                "statement": "Sterker nog: wij willen dat de sociale huren met 10% worden verlaagd in 2026."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Steeds meer mensen komen in de knel door hoge inflatie en huren. Huizen zijn om in te wonen, niet voor de winst. Toch verdienen veel verhuurders grof geld over de rug van huurders. Dat moet stoppen, door huurbeperking en invoering van een puntensysteem voor alle huurhuizen."
            },
            {
                "party": "NSC",
                "statement": "Huurders moeten beschermd worden tegen buitensporige lastenstijgingen. NSC wil betaalbare woningen en ziet huurmatiging als een belangrijk middel om bestaanszekerheid te versterken."
            },
            {
                "party": "D66",
                "statement": "D66 wil huren betaalbaar houden en steunt wetten die huurprijzen beperken. Tegelijk moeten we fors meer betaalbare woningen bouwen. Daarom kijken we ook naar woningbouwproductie. Een volledige huurbevriezing leidt in de praktijk snel tot bouwbevriezing en steunen we niet."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil dat sociale huren de komende jaren niet harder stijgen dan het driejarig gemiddelde van de inflatie. Zo houden we huren betaalbaar en voorspelbaar, krijgen huurders zekerheid en kunnen woningbouwcorporaties blijven investeren in nieuwbouw en verduurzaming."
            },
            {
                "party": "SP",
                "statement": "De woonlasten zijn jarenlang harder gestegen dan de inkomens. Dat drijft mensen uit hun buurt en zet levens op pauze. Om het tij te keren bevriezen wij daarom de huren. Zo houden mensen meer over om te leven, niet alleen om te overleven."
            },
            {
                "party": "DENK",
                "statement": "De huren zijn de afgelopen jaren enorm gestegen. Veel huurders kunnen hierdoor niet meer rondkomen. Het is de hoogste tijd om een grens te trekken. DENK wil daarom dat de huur van sociale huurwoningen niet meer harder mag stijgen dan de inflatie."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wonen is een recht, geen verdienmodel. De huren bevriezen we voor vijf jaar. Zo beschermen we huurders tegen hoge woonlasten. Woningcorporaties krijgen compensaties om te kunnen blijven bouwen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De afgelopen jaren zijn de huren hard gestegen. De ChristenUnie wil de huurstijging koppelen aan de gemiddelde prijsontwikkeling over meerdere jaren. Daardoor stijgen deze minder hard en houden huurders meer geld over."
            },
            {
                "party": "Volt",
                "statement": "Volt wil sociale huurwoningen betaalbaar houden. Ook middeninkomens krijgen bescherming en gemeenten moeten streng controleren op eerlijke huurprijzen."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Want wonen moet betaalbaar blijven."
            },
            {
                "party": "BIJ1",
                "statement": "Zo goed als alle huren zijn (veel) te hoog. Daarom moeten alle huren onmiddellijk worden bevroren en waar mogelijk verlaagd. Corporaties worden gecompenseerd via staatssubsidies, zodat zij zich weer kunnen richten op het bouwen en onderhouden van goede, betaalbare woningen voor iedereen."
            },
            {
                "party": "50PLUS",
                "statement": "Huurders hoeven niet de financieringsbron te zijn voor nieuwbouw. Hier dient overheid zijn verantwoordelijkheid te nemen."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij ziet betaalbare woonruimte als basisrecht. Doordat huren harder zijn gestegen dan inflatie, is wonen steeds duurder geworden. Huurprijzen zouden juist moeten bevriezen. Huurverhoging leidt nu in de praktijk ook niet tot beter onderhoud. Informeer jezelf: programma.piratenpartij.nl"
            },
            {
                "party": "FNP",
                "statement": "Wij vinden betaalbare huur van groot belang. Iedereen moet in een huis kunnen wonen, dat is een grondrecht. Daarom waren wij eerder voor de afschaffing van de verhuurdersheffing en zullen wij voor maatregelen zijn die huur betaalbaar houden zoals het niet harder laten stijgen dan met de inflatie."
            },
            {
                "party": "De Linie",
                "statement": "Voor de prijsstijging van sociale huurwoningen is de inflatie een goede norm."
            },
            {
                "party": "SGP",
                "statement": "Het moet mogelijk zijn huurprijzen jaarlijks te laten stijgen. Daar moet heldere systematiek voor komen, die huurder als verhuurder langjarig zekerheid geeft. Dat betekent niet perse dat de huren harder of juist minder hard stijgen dat de inflatie. SGP: huurstijging mogelijk koppelen aan loonstijging."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil redelijke huurprijzen. De overheid heeft met verhuurders afspraken gemaakt over hoe hard de huren de komende jaren mogen stijgen. Daar houden we ons netjes aan. Je moet namelijk voor een normaal bedrag een goed huis kunnen huren. We willen wel dat verhuurders kunnen bouwen van nieuwe woningen om het woningtekort op te lossen."
            },
            {
                "party": "BBB",
                "statement": "BBB wil huur betaalbaar houden en tegelijk voorkomen dat verhuurders afhaken en woningen verkopen door te strenge regels en onhaalbare eisen. We willen de Wet betaalbare huur afschaffen en inzetten op eerlijkere puntentelling, voorspelbare belastingen en ruimte voor tijdelijke contracten."
            },
            {
                "party": "FvD",
                "statement": "Prijsplafonds en micromanagement verstikken de huurmarkt; meer aanbod en minder regels drukken de huur."
            },
            {
                "party": "JA21",
                "statement": "De stijging van huren in de sociale sector wordt wettelijk gemaximeerd. Daarbinnen moet stijging mogelijk zijn. Het niet laten stijgen van de huren leidt ertoe dat er veel minder woningen gebouwd worden. Dat is onverantwoord in tijden van grote woningnood."
            },
            {
                "party": "BVNL",
                "statement": "Dit zou de mogelijkheid tot inkomensafhankelijke huurverhogingen voor scheefwoners onmogelijk maken en wij zijn juist voor meer contractvrijheid. De overheid moet zich zoveel mogelijk terugtrekken uit de woningmarkt."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Bevriezen van prijzen door de overheid is economisch wanbeleid, vaak gezien in communistische planeconomieën. Het lost problemen niet op en creëert schaarste. Prijsstijgingen zorgen voor meer bouwen, prijsplafonds zorgen dat investeerders wegblijven. De LP is voor het afschaffen van prijsplafonds."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Meer woningen bouwen maakt huren betaalbaar. Huurplafonds houden de markt scheef en blokkeren doorstroming. In plaats van nieuwe regels kiezen we voor eigenaarschap en een vrijere woningmarkt."
            }
        ]
    },
    {
        "theme": "Geld voor onderzoek",
        "title": "De regering moet meer geld uitgeven aan wetenschappelijk onderzoek.",
        "info": "Op dit moment is de overheid van plan om minder geld te steken in wetenschappelijk onderzoek en innovatie. Het bedrag daalt van 9,7 miljard euro in 2024 naar 8,4 miljard euro in 2029. Dat geld gaat vooral naar universiteiten, hogescholen en kennisinstellingen.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Wetenschap helpt ons vooruit. Van medische zorg tot klimaat en van landbouwinnovaties tot economie. Het zorgt ook voor nieuwe banen en een sterke economie. Met publieke steun blijft kennis toegankelijk voor iedereen en bouwen we aan een eerlijke, duurzame toekomst."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil meer geld uitgeven aan wetenschappelijk onderzoek en innovatie met een Investeringsagenda voor nationale groei. Zo bouwen we aan de vaardigheden van toekomstige generaties en stimuleren we innovatie die cruciaal is voor economische groei en het oplossen van maatschappelijke uitdagingen."
            },
            {
                "party": "NSC",
                "statement": "Investeren in wetenschap versterkt onze economie en helpt oplossingen te vinden voor grote maatschappelijke uitdagingen. NSC wil een sterke kennisbasis en praktische innovatie. Ook voor de uitdagingen van de toekomst en onze weerbaarheid is een sterk en innovatief land nodig."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat Nederland weer koploper wordt in onderzoek en innovatie. Daarom draaien we eerdere bezuinigingen terug én investeren we extra in de wetenschap. Dit geld gaat naar universiteiten, hogescholen en onderzoeksinstellingen. Zo krijgen zij de ruimte voor het onderzoek dat nodig is."
            },
            {
                "party": "CDA",
                "statement": "Onderzoek en innovatie zijn de motor van ons toekomstig verdienvermogen en dragen bij aan de toekomst van Nederland. Daar moeten we dus meer geld in investeren."
            },
            {
                "party": "SP",
                "statement": "We investeren fors in fundamenteel en onafhankelijk onderzoek. Niet alles hoeft direct toepasbaar of rendabel te zijn. Alleen als onderzoekers zich niet voortdurend hoeven te bewijzen tegenover de markt, kunnen ze echte vernieuwing tot stand brengen."
            },
            {
                "party": "DENK",
                "statement": "DENK staat voor méér investeringen in onze kenniseconomie."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Er moet extra overheidsgeld naar onderzoek dat bijdraagt aan een groene, gezonde, en rechtvaardige maatschappij. Dit komt ook de onafhankelijkheid en kwaliteit van de wetenschap ten goede. Subsidies voor dierproeven moeten zo snel mogelijk worden afgebouwd en ingezet worden voor alternatieven."
            },
            {
                "party": "SGP",
                "statement": "De SGP vindt wel dat dit extra geld vooral structureel en stabiel moet zijn, zonder bureaucratische verantwoording."
            },
            {
                "party": "ChristenUnie",
                "statement": "Voor een competitieve en duurzame economie in de toekomst moeten we nu investeren in wetenschap en onderzoek. De ChristenUnie wil dat de publieke en private uitgaven aan innovatie en onderzoek op termijn toegroeien naar 3% van het nationaal inkomen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil meer investeren in wetenschappelijk onderzoek. Kennis en innovatie zijn de basis voor vooruitgang. Met vaste financiering en steun voor jonge onderzoekers blijft Nederland aantrekkelijk voor talent en nieuwe ideeën."
            },
            {
                "party": "JA21",
                "statement": "Nederland moet haar kenniseconomie koesteren. Wetenschappelijk onderwijs en onderzoek zijn daar een belangrijk onderdeel van. JA21 wil de recente bezuiniging op het wetenschappelijk onderwijs daarom terugdraaien."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "In een tijdperk van wetenschapsontkenning , past geen bezuiniging op wetenschap. Extra geld voor wetenschap is noodzakelijk voor een bestendige toekomst."
            },
            {
                "party": "BIJ1",
                "statement": "Wetenschappelijk onderzoek is essentieel voor een gezonde, lerende samenleving. De overheid moet daar structureel en ruim in investeren, met prioriteit voor onderzoeken die het collectieve belang van alle Nederlanders dienen."
            },
            {
                "party": "Piratenpartij",
                "statement": "Piraten staan voor een stevige kenniseconomie. We willen een groter aandeel vaste financiering, voor meer professionele vrijheid in de wetenschap. Daarnaast maken we alle wetenschappelijke kennis openbaar toegankelijk en stimuleren we innovatie door auteursrecht en patenten te hervormen."
            },
            {
                "party": "FNP",
                "statement": "Nederland is van oudsher een kennisland. Meer investering in wetenschappelijk onderzoek, vooral regionaal en in samenwerking met het bedrijfsleven, versterkt innovatie, economische groei en maatschappelijke vooruitgang, en benut de kenniscapaciteit van ons land optimaal."
            },
            {
                "party": "De Linie",
                "statement": "Daar Nederland een land is waar veel wetenschappelijk onderzoek wordt verricht, willen we aan baanbrekend onderzoek meer geld uitgeven."
            },
            {
                "party": "PVV",
                "statement": "Er wordt reeds voldoende geïnvesteerd in wetenschappelijk onderzoek. Gezien de schaarse middelen heeft de PVV andere prioriteiten voor de besteding van overheidsgeld."
            },
            {
                "party": "BBB",
                "statement": "Voor BBB geldt: wetenschap moet bijdragen aan de samenleving, aan onze kennispositie én aan oplossingen voor maatschappelijke vraagstukken. Dat vraagt om ruimte voor toegepast onderzoek, vakgericht onderwijs en samenwerking met het midden- en kleinbedrijf, zorg, landbouw en industrie."
            },
            {
                "party": "FvD",
                "statement": "Investeer gericht en op kwaliteit in plaats van ‘meer geld’. Schrap bureaucratie en financieer direct."
            },
            {
                "party": "BVNL",
                "statement": "Er is geen reden om te vermoeden dat er nu te weinig geld naartoe gaat. Een herschikking van middelen van niet-relevante beleidsvelden naar relevante ligt wel voor de hand."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Wetenschappelijk onderzoek moet aan de markt overgelaten worden. Private partijen gebruiken immers de resultaten om winst te maken. Staatssteun voor onderzoek ondermijnt de vrije markt en beloont bedrijven die het goed zijn in het overtuigen van ambtenaren, vaak niet de meest innovatieve bedrijven."
            },
            {
                "party": "50PLUS",
                "statement": "Relatief ontvangt Nederland minder subsidie van de EU dan andere landen. Laat de EU meer geld subsidiëren."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Wetenschap bloeit door vrijheid en eigen initiatief. Universiteiten, bedrijven en particulieren kunnen onderzoek prima zelf organiseren en financieren. Vrij Verbond kiest voor minder subsidies en meer eigen verantwoordelijkheid, niet voor hogere overheidsuitgaven."
            }
        ]
    },
    {
        "theme": "Wolven",
        "title": "Gemeenten en provincies moeten makkelijker een vergunning krijgen om wolven af te schieten die problemen veroorzaken.",
        "info": "De wolf is een beschermde diersoort. Volgens Europese regels mogen wolven niet zomaar worden gedood. Dat mag alleen als een wolf problemen veroorzaakt, bijvoorbeeld als hij mensen aanvalt of dieren die zich achter beschermende hekken bevinden. De provincie vraagt daarvoor  een vergunning aan. Nederland kan proberen de Europese regels zo soepel mogelijk uit te leggen. Dan worden er meer vergunningen gegeven.",
        "results": [
            {
                "party": "PVV",
                "statement": "Wolven die problemen veroorzaken moeten worden afgeschoten."
            },
            {
                "party": "VVD",
                "statement": "De terugkeer van de wolf leidt tot grote zorgen bij omwonenden en veehouders. De VVD wil voldoende beheersmaatregelen, zowel preventief als actief, in gebieden waar de wolf tot overlast leidt. In uiterste gevallen moet afschot mogelijk zijn om de veiligheid van dier en mens te waarborgen."
            },
            {
                "party": "NSC",
                "statement": "Wolven kunnen een bedreiging vormen voor vee en de veiligheid in landelijke gebieden. NSC wil praktische oplossingen die draagvlak houden. Waar sprake is van probleemwolven willen we deze actief beheren."
            },
            {
                "party": "D66",
                "statement": "Probleemwolven die mensen in gevaar brengen moeten afgeschoten kunnen worden. Maar als ze ons met rust laten en geen problemen veroorzaken, moeten wij hen ook met rust laten."
            },
            {
                "party": "BBB",
                "statement": "Zoveel mogelijk wolven (minimaal één per roedel) moeten een zender krijgen. Bij ongewenst gedrag en aanvallen op vee is ingrijpen nodig. Afschot is voor BBB geen taboe en gemeenten en provincies krijgen makkelijker een vergunning om probleemwolven af te schieten."
            },
            {
                "party": "CDA",
                "statement": "De wolf is terug in Nederland en de populatie moet beheersbaar blijven. Om problemen te voorkomen, moeten gemeenten en provincies makkelijker toestemming krijgen om wolven af te schieten die problemen veroorzaken. Zo zorgen we voor veiligheid en een goede balans tussen mens en natuur."
            },
            {
                "party": "FvD",
                "statement": "Bescherm mens en vee; probleemwolven actief kunnen afschieten hoort bij nuchter faunabeheer."
            },
            {
                "party": "SGP",
                "statement": "De wolf is een intelligent dier, woont in de natuur, maar zo’n roofdier in een dichtbevolkt land vraagt om actief beheer. Cruciaal is dat de wolf uit de buurt van mensen en hun dieren blijft, dus angst voor mensen houdt en er niet aan went. Er is ruimte nodig voor het actief verjagen en bejagen."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil de populatie wolven actief beheren, met een zorgvuldig vastgesteld quotum en, als het niet anders kan, gecontroleerd afschot. Wolven die mensen aanvallen worden afgeschoten."
            },
            {
                "party": "JA21",
                "statement": "Nederland is te dichtbevolkt voor de wolf. De wolf heeft hier geen natuurlijke vijand, maar alleen maar prooien. Dit zorgt voor enorm veel leed onder veehouders en hun vee. JA21 wil inzetten op een lagere beschermingsstatus voor de wolf, zodat bestrijding mogelijk wordt."
            },
            {
                "party": "BVNL",
                "statement": "De overlast en het gevaar is onacceptabel. Wij kiezen voor de boeren, voor het vee en voor onze veiligheid."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP wil de macht zoveel mogelijk decentraliseren naar gemeenten/gemeenschappen. Qua natuurbeheer kunnen de gebruikers afspreken hoeveel een natuurlijke hulpbron gebruikt kan worden zonder deze te beschadigen. Gemeenschappen hebben het recht zichzelf/eigendom te verdedigen tegen schade uit fauna."
            },
            {
                "party": "50PLUS",
                "statement": "Het weren van gevaarlijke dieren zoals de wolf uit ons dichtbevolkte land. De eerste stap moet zijn het vangen en verplaatsen van dieren."
            },
            {
                "party": "FNP",
                "statement": "Problematiek zoals de opkomst van de wolf pakken we hard aan: probleemwolven moeten we probleemloos kunnen bejagen. De FNP heeft altijd gepleit voor een lagere beschermingsstatus voor de wolf, zodat daadwerkelijk kan worden ingegrepen om vee, maar ook de mens, te beschermen."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Lokale bestuurders kennen hun gebied en moeten snel kunnen handelen bij wolvenschade. Minder landelijke en Europese regels, meer vertrouwen in gemeenten en provincies. Veiligheid van mensen, vee en leefomgeving gaat boven bureaucratie."
            },
            {
                "party": "De Linie",
                "statement": "Per gemeente mag de noodzaak bepaald worden of zij vergunningen afgeeft voor het afschieten van wolven."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "De wolf hoort bij onze natuur. Afschieten is alleen een optie bij hoge nood, als er gevaar voor mensen is. We willen boeren helpen met preventie, zoals hekken en herdershonden. Zo beschermen we dieren én natuur zonder een beschermde soort te doden."
            },
            {
                "party": "SP",
                "statement": "De wolf is een Europees beschermde soort. Wel denken we dat er meer moet gebeuren om overlast en onveilige situaties te voorkomen. De SP pleit voor maatregelen om conflicten tussen mens en wolf te vermijden."
            },
            {
                "party": "DENK",
                "statement": "DENK is géén voorstander van het makkelijker maken om dieren af te schieten. Dierlijk leven moet beschermd worden. Uitzonderingen hierop mogen alleen wanneer er acuut gevaar dreigt voor de veiligheid of de volksgezondheid, en lichtere maatregelen ontoereikend blijken."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij vinden dat wolven strikt beschermd moeten blijven. Ze verrijken de natuur en vergroten biodiversiteit. Knelpunten worden aangepakt met preventie, voorlichting en subsidies voor beschermende maatregelen, niet met afschot. Bescherming en handhaving staan voorop."
            },
            {
                "party": "Volt",
                "statement": "Volt wil goed samenleven met wilde dieren. Boeren krijgen hulp bij bescherming van vee. Wolven worden gevolgd om hun gedrag beter te begrijpen en we geven ze genoeg ruimte. Alleen als het echt niet anders kan, grijpen we in."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Gemeenten en provincies moeten geen problemen voor wolven veroorzaken."
            },
            {
                "party": "BIJ1",
                "statement": "Belangrijke ecosystemen, natuurgebieden en wilde dieren moeten rechten krijgen om bescherming, behoud en eventueel herstel te waarborgen."
            },
            {
                "party": "Piratenpartij",
                "statement": "Wolven hebben een belangrijke functie in de natuur. Ze zorgen ervoor dat prooidierpopulaties gezond blijven. Ook is er door hun aanwezigheid weer ruimte voor bepaalde plantensoorten om zich te ontwikkelen. Boeren en herders kunnen aanspraak maken op steun om hun vee te beschermen. Lees ons programma"
            }
        ]
    },
    {
        "theme": "Enkelband als straf",
        "title": "De rechter moet mensen kunnen straffen door het dragen van een enkelband  in plaats van een korte celstraf.",
        "info": "Nederlandse rechters kunnen bij het uitspreken van een straf kiezen tussen een korte of lange gevangenisstraf, een taakstraf of een boete. Een nieuw wetsvoorstel geeft rechters straks ook de mogelijkheid om te kiezen voor elektronische detentie. Dan krijg je een enkelband om en kan de politie zien waar je bent. De veroordeelde kan zijn of haar straf dan thuis uitzitten en dit kan elektronisch worden gecontoleerd. Het is de bedoeling om daarmee het aantal korte gevangenisstraffen te verminderen.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Bij kleine overtredingen is een enkelband of taakstraf soms beter dan een celstraf. Mensen kunnen werken, leren en bij hun gezin blijven en komen niet tussen de zwaardere criminelen in een gevangenis. Het is menselijker, goedkoper en de kans is kleiner dat ze opnieuw de fout ingaan."
            },
            {
                "party": "NSC",
                "statement": "NSC wil dat rechters de mogelijkheid moeten kunnen hebben om bij lichte vergrijpen de enkelband op te leggen in plaats van een korte celstraf. Dit kan recidive helpen voorkomen en tegelijkertijd de druk op de overvolle gevangenissen verminderen, zodat gedetineerden altijd hun straf kunnen uitzitten."
            },
            {
                "party": "D66",
                "statement": "D66 staat voor een veilig Nederland, met straffen die werken. Korte celstraffen vergroten recidive. Ook overvolle gevangenissen maken ons land niet veiliger. Daarom moet de rechter vaker een enkelband kunnen opleggen, aangevuld met andere rechtvaardige en effectieve straffen."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil dat de rechter meer mogelijkheden krijgt om slimmer te straffen. We zien de enkelband als volwaardige straf en daarom introduceren we de mogelijkheid voor de rechter om dit als hoofdstraf op te leggen."
            },
            {
                "party": "SP",
                "statement": "Door jarenlang bezuinigingsbeleid is er een tekort aan gevangenispersoneel en staan zij onder hoge werkdruk. Het zou helpen als iemand thuis de straf kan uitzitten. Wij snappen dat dit niet rechtvaardig voelt, daarom is het cruciaal dat we weer gaan investeren in de gevangenissen."
            },
            {
                "party": "DENK",
                "statement": "DENK laat het aan de rechter over om te bepalen welke straf het meest passend is. Als het dragen van een enkelband de meest effectieve vorm van straf is, dan volgen wij het oordeel van de rechter."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Het strafrecht wordt hervormd met focus op herstel en preventie. Korte gevangenisstraffen worden ontmoedigd, omdat ze leiden tot meer terugval. Het opleggen van zo’n straf moet expliciet gemotiveerd worden. Taakstraffen en elektronische detentie worden beter benut en de reclassering versterkt."
            },
            {
                "party": "ChristenUnie",
                "statement": "In sommige gevallen is een enkelband met reclasseringstoezicht een passendere straf dan een kort verblijf in de gevangenis. De ChristenUnie heeft er vertrouwen in dat rechters in het juiste geval de juiste straf opleggen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil meer gebruik maken van alternatieve straffen, zoals een enkelband. Dat helpt om herhaling te voorkomen en vergroot de kans dat mensen succesvol terugkeren in de samenleving. Straffen moeten bijdragen aan veiligheid én re-integratie."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Van celstraf wordt niemand beter."
            },
            {
                "party": "BIJ1",
                "statement": "Straffen moeten in de eerste plaats de samenleving beschermen. Als dat kan met een enkelband in plaats van een celstraf dan is dat een betere keuze, want het is minder kostbaar en minder repressief."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Zolang de rechter de richtlijnen van de wet aanhoudt, ziet LP dit als mogelijkheid. Een belangrijk aspect van lokale veiligheidsplannen is maatwerk; voorkomen is beter dan repressie. Door samen te werken met de gemeente kan beter vorm gegeven worden aan individuele oplossingen voor veelplegers."
            },
            {
                "party": "50PLUS",
                "statement": "Het is aan de rechter om de inzet van enkelband of celstraf te kiezen."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor de democratische rechtsstaat en effectieve straffen. Wanneer rechters voor een enkelband kunnen kiezen, kunnen zij beter maatwerk bieden. Bovendien is een enkelband goedkoper en efficiënter, en voorkomt het dat criminelen in de gevangenis gaan netwerken. Piratenpartij.nl"
            },
            {
                "party": "FNP",
                "statement": "Voor lichte vergrijpen is dit een oplossing die de druk op de gevangenissen af kan laten nemen en ervoor kan zorgen dat de mensen die nog straf uit moeten zitten dit eindelijk kunnen gaan doen."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Slim straffen houdt de rechtsstaat sterk. Een enkelband is vaak effectiever dan korte celstraffen: goedkoper, menselijker en sneller. Rechtsgelijkheid blijft daarbij vooropstaan, met gelijke regels voor iedereen."
            },
            {
                "party": "De Linie",
                "statement": "Om de gevangenis capaciteit te kunnen vergroten, is een van de manieren om meer enkelband straffen uit te delen."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil dat er zwaarder wordt gestraft. Met een enkelband thuis op de bank gamen en bier drinken hoort daar niet bij."
            },
            {
                "party": "VVD",
                "statement": "Een enkelband is een lichtere straf dan een gevangenisstraf. Thuis met een biertje op de bank mogen zitten is niet vergelijkbaar met een gevangenisstraf. De VVD vindt wel dat enkelbanden vaker moeten worden ingezet om contact- en locatieverboden te handhaven."
            },
            {
                "party": "BBB",
                "statement": "De enkelband mag enkel worden ingezet als controlemiddel. BBB is tegen de enkelband als zelfstandige straf."
            },
            {
                "party": "FvD",
                "statement": "Vervang geen celstraf door enkelband bij geweld en overlast. Pak straffeloosheid hard aan."
            },
            {
                "party": "SGP",
                "statement": "Opleggen van het verplicht dragen van een enkelband als hoofdstraf is geen oplossing voor cellentekort, maar symptoombestrijding. Straffen dienen afschrikwekkend effect te hebben. Enkelband als extra maatregel naast bv taakstraf of als controlemiddel bij gebieds-of contactverbod moet mogelijk zijn"
            },
            {
                "party": "JA21",
                "statement": "De enkelband mag geen vervanging zijn van een gevangenisstraf. Het rechtsgevoel van de maatschappij is een belangrijk onderdeel van het strafrecht."
            },
            {
                "party": "BVNL",
                "statement": "Enkelbanden mogen geen celstraffen vervangen. De overheid dient voor voldoende gevangeniscellen te zorgen."
            }
        ]
    },
    {
        "theme": "Kortere WW",
        "title": "Als je werkloos wordt, moet je maximaal 12 maanden WWIcon krijgen. Dat is nu nog 24 maanden.",
        "info": "De afkorting WW staat voor Werkloosheidswet. Deze wet regelt een tijdelijke uitkering voor mensen die geheel of gedeeltelijk werkloos zijn geworden. Werknemers betalen er via hun loon premie voor. Hoe langer je hebt gewerkt, hoe langer je recht hebt op een WW-uitkering. Nu krijg je maximaal twee jaar een WW-uitkering.",
        "results": [
            {
                "party": "VVD",
                "statement": "Een groeiende economie heeft een moderne arbeidsmarkt nodig. De VVD kiest daarom voor het moderniseren van de werkloosheidswet, waarbij we de duur verkorten, maar de hoogte aan het begin verhogen. Zo zorgen we dat mensen minder terugvallen in inkomen en houden we het systeem betaalbaar."
            },
            {
                "party": "FvD",
                "statement": "De WW is een overbruggingsregeling, geen basisinkomen. Korter en gericht prikkelt tot werk en verlaagt lasten."
            },
            {
                "party": "SGP",
                "statement": "De SGP is voorstander van een hogere en kortere WW-uitkering, zodat je minder achteruit gaat in inkomen als je werkloos wordt."
            },
            {
                "party": "JA21",
                "statement": "Om de sociale zekerheid op langere termijn toegankelijk en betaalbaar te houden zijn heldere keuzes nodig. De eerste stap naar een kortere WW-duur is al door het huidige kabinet gezet. Een belangrijke voorwaarde hierbij is dat werknemers die hun baan verliezen beter begeleid worden naar nieuw werk."
            },
            {
                "party": "BVNL",
                "statement": "De WW-uitkering kan inderdaad worden beperkt met uitzondering van zware beroepen vanaf 55 jaar. Mensen moeten gestimuleerd worden om zo snel mogelijk een nieuwe baan te vinden."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP wil af van opgedrongen solidariteit. We willen het vangnet hervormen tot een écht vangnet en zelfredzaamheid stimuleren. Gedwongen solidariteit creëert een wereld waarin bureaucratie boven menselijkheid gaat. Door ruimte te geven om het zelf te organiseren ontstaat oprechte sociale cohesie."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor eenvoud en zekerheid. In plaats van WW komt er een negatief basisinkomen: een gegarandeerd inkomen voor iedereen vanaf 18 jaar. Zo vervalt de discussie over 12 of 24 maanden en wordt het stelsel eerlijker."
            },
            {
                "party": "PVV",
                "statement": "De PVV is tegen een verkorting van de WW."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Het halveren van de WW-uitkering tast bestaanszekerheid aan. Het vinden van werk duurt soms langer dan 12 maanden, zeker voor ouderen. Mensen hebben jarenlang premie betaald en verdienen bescherming. Wij kiezen voor steun én goede begeleiding naar nieuw werk."
            },
            {
                "party": "NSC",
                "statement": "Mensen die werkeloos worden verdienen een fatsoenlijk vangnet en zekerheid ober hun rechten. NSC wil bestaanszekerheid waarborgen en kiest daarom voor een evenwichtige balans: stimuleren om snel weer werk te vinden maar wel met voldoende vangnet voor wie langer nodig heeft."
            },
            {
                "party": "D66",
                "statement": "D66 vindt het belangrijk dat er een goed sociaal vangnet is. De huidige WW is nog gedateerd uit de tijd dat de werkloosheid hoog lag. Daarom pleit D66 voor een nieuwe, gemoderniseerde WW met een verhoogde uitkering voor een kortere periode."
            },
            {
                "party": "BBB",
                "statement": "Het overgrote deel van de instromers in de WW maakt bij lange na geen gebruik van deze volledige termijn. De kleine groep die dat wel nodig heeft, verdient een vangnet. BBB houdt de maximale WW-duur daarom op 24 maanden."
            },
            {
                "party": "CDA",
                "statement": "Het CDA heeft geen plannen om de WW-uitkering verder te verkorten."
            },
            {
                "party": "SP",
                "statement": "Handen af van de WW. Mensen hebben recht op ondersteuning als het ze niet lukt om een baan te vinden. Je moet nu al 24 jaar werken om recht te hebben op 24 maanden WW. Tegelijkertijd krijgen politici 38 maanden wachtgeld. In plaats van de WW af te breken versterken we juist ons sociale vangnet."
            },
            {
                "party": "DENK",
                "statement": "DENK vindt dat de werknemersrechten beschermd dienen te worden."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij laten mensen niet vallen na 12 maanden. De WW inkorten levert extra druk op aan werkloze mensen zonder de echte problemen op te lossen, waaronder flexcontracten, uitbuiting en gebrek aan begeleiding en omscholing. Vertrouwen in plaats van wantrouwen moet uitgangspunt zijn van sociaal beleid."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het huidige kabinet heeft aangekondigd de duur van de WW met 6 maanden te verlagen. Dit raakt met name werklozen die ook in de huidige arbeidsmarkt moeilijk een nieuwe baan kunnen vinden, zoals sommige ouderen of mensen met een beperking. De ChristenUnie handhaaft de duur van de WW op twee jaar"
            },
            {
                "party": "Volt",
                "statement": "Volt kiest voor steun en begeleiding in plaats van straf. Mensen die hun baan verliezen, hebben recht op een vangnet én goede steun om weer aan de slag te gaan. We helpen hen naar werk dat maatschappelijk nodig is, zodat zekerheid en bijdrage aan de samenleving samengaan."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Wij beschermen het belang van ze zwaksten tegen het recht van de sterkste."
            },
            {
                "party": "BIJ1",
                "statement": "De participatiewet wordt per direct herzien waarbij de nadruk komt te liggen op persoonlijke ontwikkeling, toekomstperspectief en kwaliteit van leven. Er wordt (samen)gewerkt vanuit vertrouwen. Uitkeringen worden regelluw."
            },
            {
                "party": "50PLUS",
                "statement": "Het arbeidsverleden bepaalt de duur. Nu geldt na 38 jaar werken recht op 24 maanden WW. Dit terugbrengen naar 12 maanden treft alle oudere werknemers. De 50plusser heeft minder kansen op de arbeidsmarkt."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor rechtvaardige en simpele sociale zekerheid. Werkenden sparen zelf voor hun WW. We willen mensen niet tegen hun wil hun zekerheid afpakken, waar ze zelf voor gespaard hebben. Na de WW geldt bij ons voor iedereen het regulier onvoorwaardelijk basisinkomen. Piratenpartij.nl"
            },
            {
                "party": "FNP",
                "statement": "Het vangnet bij onvrijwillige werkloosheid is belangrijk om mensen financiële zekerheid te bieden. Tegelijkertijd moet er stimulans zijn om snel terug te keren naar de arbeidsmarkt en actief bij te dragen aan de maatschappij, zodat uitkeringen niet leiden tot passiviteit."
            },
            {
                "party": "De Linie",
                "statement": "De WW periode hangt af van het aantal jaren dat je gewerkt hebt (dus premie betaald hebt) - wat ons betreft blijft dat zo."
            }
        ]
    },
    {
        "theme": "Minder stikstof",
        "title": "De regering moet ervoor zorgen dat er in 2030 minstens de helft minder stikstofIcon in de lucht komt ten opzichte van 2019.",
        "info": "Om de Europese natuurdoelen te halen heeft Nederland besloten om de uitstoot van stikstof flink omlaag te brengen. Door stikstof gaat namelijk een deel van de planten, bomen en dieren dood. Op dit moment heeft de regering nog als doel dat de uitstoot van stikstof in 2035 de helft minder moet zijn dan in 2019, niet in 2030. Grote bedrijven, de bouw, het verkeer en vee zorgen voor de meeste stikstof in de lucht.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Iedereen zou recht moeten hebben op schone lucht, water en grond. Maar de hoge stikstoofuitstoot schaadt de natuur, de kwaliteit van ons water en de bodem. Wij kiezen voor schone industrie, minder luchtvaart en een kleinere veestapel. Zo maken we ruimte voor woningen en natuurherstel."
            },
            {
                "party": "D66",
                "statement": "D66 wil Nederland van het slot halen. De stikstofcrisis belemmert de starters, bedrijven en schaadt de natuur. Door eindelijk écht in actie te komen, ontstaat ruimte voor bouw en economie. D66 wil de landbouw helpen omschakelen naar een duurzamer model."
            },
            {
                "party": "SP",
                "statement": "Het terugdringen van stikstof is noodzakelijk voor natuur, boeren en gezondheid. De SP heeft dit gesteund, want zonder drastische verlagingen verliezen we natuur, loopt de bouw vast en blijven boeren klem zitten. We doen dit echter niet over de rug van boeren en geven hen voldoende steun."
            },
            {
                "party": "DENK",
                "statement": "Nederland moet van het slot af om de woningbouw, het verkeer en economische activiteit weer mogelijk te maken. DENK vindt daarom dat de uitstoot van stikstof drastisch verlaagd moet worden."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Het halveren van stikstof in 2030 is niet genoeg: wij willen snellere en verdere vermindering. Uiterlijk in 2030 moet 75% van de stikstofgevoelige natuur onder de veilige stikstofgrens liggen. Alleen met stevige reductie beschermen we biodiversiteit, gezondheid en toekomstbestendige landbouw."
            },
            {
                "party": "Volt",
                "statement": "Volt vindt dat de hoeveelheid stikstof in de lucht omlaag moet. Te veel stikstof is schadelijk voor de water- en luchtkwaliteit. Wij kiezen voor structurele oplossingen met een eerlijke behandeling voor alle boeren. Zo zorgen we voor schone lucht, herstel van natuur en een gezonde leefomgeving."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Het is al veel te lang vooruitgeschoven."
            },
            {
                "party": "BIJ1",
                "statement": "Stikstof tast natuur, gezondheid en leefomgeving ernstig aan. Vooral intensieve landbouw, industrie en verkeer veroorzaken te veel uitstoot op een klein stukje Nederland. Halvering is nodig om natuur te herstellen en onze omgeving leefbaar te houden."
            },
            {
                "party": "Piratenpartij",
                "statement": "Neerslag van stikstof zorgt ervoor dat een klein aantal soorten anderen gaat overwoekeren. Dit bedreigt ecosystemen en biodiversiteit. Grote vervuilers als hoogovens, luchthavens en de bio-industrie zijn te lang met rust gelaten. We moeten stikstofuitstoot inperken en de biodiversiteitscrisis keren."
            },
            {
                "party": "PVV",
                "statement": "Door stikstof gaat de natuur niet kapot, ze verandert slechts een beetje. En dat is helemaal niet erg. Wat ons betreft gaan de stikstofregels van tafel."
            },
            {
                "party": "VVD",
                "statement": "Wij willen een substantiële, geborgde reductie van de stikstofuitstoot in 2035, inclusief tussendoelen en evaluatiemomenten, zodat er weer ruimte komt voor onze economie; om huizen te bouwen, bedrijven te verduurzamen en boerenbedrijven klaar te maken voor de toekomst. Daarbovenop bekijken we per natuurgebied wat aanvullend nodig is om vergunningverlening los te trekken."
            },
            {
                "party": "NSC",
                "statement": "Zo’n harde halvering in 2030 is onrealistisch en leidt tot onuitvoerbare maatregelen die de landbouw en woningbouw lamleggen. NSC wil stikstof wel stevig aanpakken, maar met haalbare doelen en meer regie vanuit de overheid, zodat natuurherstel hand in hand gaat met ruimte voor wonen en werken."
            },
            {
                "party": "BBB",
                "statement": "BBB kiest voor een koers waarbij juridische houdbaarheid, innovatie en praktische uitvoerbaarheid centraal staan. Doel is het lostrekken van de vergunningverlening, herstel van vertrouwen in de rechtsstaat en een einde aan krimp als standaardoplossing."
            },
            {
                "party": "CDA",
                "statement": "Nederland moet van het stikstofslot. Vergunningverlening voor woningbouw, infrastructuur en landbouw moet weer op gang komen. Het CDA wil sturen op stikstofreductie in 2035 via emissienormen per bedrijf en het stikstoffonds herstellen voor de transitie in landbouw en natuurbeheer."
            },
            {
                "party": "FvD",
                "statement": "Het stikstofbeleid is onzinnig en schadelijk. Schrap de 2030-doelstelling en geef ruimte aan boeren en bouw."
            },
            {
                "party": "SGP",
                "statement": "Halvering van de stikstofuitstoot in 2030 is niet haalbaar. SGP wil verlaging van de stikstofuitstoot om uit het juridische moeras te komen, maar wel dat boeren mee kunnen schakelen. Grote stappen, snel thuis? Zo simpel is het niet. Boeren werken met natuur en hebben geen schoorsteen, waar een filter op kan."
            },
            {
                "party": "ChristenUnie",
                "statement": "De stikstofcrisis verlamt ons land. Huizen en infrastructuur kunnen niet meer worden gebouwd. De uitstoot van stikstof door mobiliteit, industrie en landbouw wordt daarom de komende tien jaar gehalveerd ten opzichte van 2019. 2030 is niet realistisch. Alle sectoren dragen eerlijk bij."
            },
            {
                "party": "JA21",
                "statement": "Nederland heeft zichzelf opgezadeld met onwerkbaar strenge stikstofnormen. De gevolgen voor de agrarische sector, de bouw en de industrie zijn dramatisch. JA21 wil het stikstofbeleid grondig herzien, de KDW uit de wet schrappen en Nederland van het stikstofslot halen."
            },
            {
                "party": "BVNL",
                "statement": "Sinds de jaren '90 is de emissie reeds met tweederde afgenomen. We moeten af van onhaalbare en onbetaalbare doelstellingen voor marginale problemen."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP pleit voor onmiddellijke afschaffing van de klimaatdoelen. Energiebeleid en klimaatbeleid worden ontkoppeld. Bij de energievoorziening draait het primair weer om betrouwbaar en betaalbaar."
            },
            {
                "party": "50PLUS",
                "statement": "Dezelfde regels voor iedereen binnen Europa. Dus geen nationale heffingen en geen extra regels bovenop de Europese afspraken."
            },
            {
                "party": "FNP",
                "statement": "Er moet zeker wat gebeuren, maar dit is te rigide. Wij kiezen voor realistische normen en heldere doelen met overgangstijd, rekening houdend met regio en praktijk. Bijvoorbeeld haalbare veebezettingsnormen, meer dierlijke mest, minder kunstmest, met geleidelijke verandering en ondersteuning."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor milieubeleid op basis van feiten, niet modellen. Een centraal reductiedoel van 50% in 2030 blokkeert landbouw en woningbouw. Alleen projecten die aantoonbaar schade veroorzaken moeten worden beperkt, niet hele sectoren."
            },
            {
                "party": "De Linie",
                "statement": "Voor het verminderen van de stikstof moeten er realistische normen en een goed haalbaar en betaalbaar plan van aanpak komen."
            }
        ]
    },
    {
        "theme": "Abortus",
        "title": "Abortus moet uit het Wetboek van StrafrechtIcon.",
        "info": "Abortus is het afbreken van een zwangerschap door een pil of een medische ingreep. In Nederland staat abortus in het Wetboek van Strafrecht en dat betekent dat het in principe strafbaar is om een zwangerschap af te breken. Toch kan een abortus legaal worden uitgevoerd, als wordt voldaan aan een aantal wettelijke voorwaarden. Als abortus uit het Wetboek van Strafrecht wordt gehaald, kan er niet meer sprake zijn van een  strafbaar feit.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Abortus is zorg en hoort niet thuis in het Wetboek van Strafrecht. Dat het er nog wel in staat, houdt het stigma op abortus in stand. Dit staat veilige en toegankelijke zorgverlening in de weg, terwijl dat juist zo belangrijk is voor mensen die abortus nodig hebben."
            },
            {
                "party": "VVD",
                "statement": "Abortus is geen misdrijf. Als VVD vinden we het vooral van belang dat de abortuspraktijk goed geregeld wordt. Abortus kan uit het strafrecht, zolang er een wettelijke regeling voor in de plaats komt die bijvoorbeeld de termijnen regelt."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat vrouwen die een abortus ondergaan, dat veilig en zonder taboe moeten kunnen doen. Abortus in het strafrecht leidt tot een stigma en onzekerheid bij artsen en vrouwen over strafvervolging. Abortus is een medische handeling en hoort niet thuis in het Wetboek van Strafrecht."
            },
            {
                "party": "SP",
                "statement": "Abortuszorg is zorg en hoort daarom niet thuis in het strafrecht. Eventuele overtredingen van de abortuswet kunnen dan nog steeds worden bestraft via het tuchtrecht."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Abortus hoort bij zorg, niet bij straf. Als het onderdeel van het strafrecht blijft, kan een anti-abortusregering het recht snel en makkelijk beperken. Wij willen abortus uit het Wetboek van Strafrecht halen om abortus veilig, vrij en toegankelijk te houden."
            },
            {
                "party": "Volt",
                "statement": "Volt vindt dat vrouwen het recht hebben om over hun eigen lichaam te beslissen. Door abortus uit het Wetboek van Strafrecht te halen, voorkomen we dat abortus opnieuw strafbaar wordt. We willen vrije toegang tot abortus, zonder druk, bemoeienis of intimidatie."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Zelfbeschikking is geen misdaad maar een recht."
            },
            {
                "party": "BIJ1",
                "statement": "Abortus is een mensenrecht en hoort bij basisgezondheidszorg. Dat het nog steeds in het Wetboek van Strafrecht staat, is onacceptabel."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Bepalen over abortus is geen taak voor de overheid. De LP staat voor vrijheid om je eigen leven te leiden zolang dit de vrijheid van een ander niet inperkt. Abortus betreft de tegenstelling tussen lichamelijke autonomie en recht van het ongeboren kind; wij laten dit aan lokale gemeenschappen."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS ziet abortus niet als strafrecht maar meer als zorgrecht. Uiteraard moet er een drempel zijn om weloverwogen een besluit te nemen."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor zelfbeschikkingsrecht. Daarom willen we bovendien de verplichte bedenktijd afschaffen en de abortuspil beschikbaar stellen via de huisarts. Daarnaast willen we anticonceptie gratis in het basispakket. Informeer jezelf: https://programma.piratenpartij.nl/"
            },
            {
                "party": "FNP",
                "statement": "De FNP kiest voor ‘recht op abortus mits’ in plaats van ‘strafbaar tenzij’, passend bij individuele vrijheid en een overheid die vertrouwen geeft. Belangrijk is dat voorwaarden, zoals uitvoering door een bevoegd arts in een vergunninghoudende kliniek en binnen termijn, gewaarborgd blijven."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Abortus is een medische keuze, geen misdaad. Vrij Verbond kiest voor vertrouwen in vrouwen en zorgverleners, niet voor strafrecht en veroordeling. Zorg en eigen verantwoordelijkheid horen centraal te staan, niet strafrechtelijke bemoeienis."
            },
            {
                "party": "De Linie",
                "statement": "Wij zijn van mening dat abortus een recht is van elke vrouw en dient derhalve niet strafbaar te zijn."
            },
            {
                "party": "PVV",
                "statement": "Abortus is legaal. Artikel 296 zorgt ervoor dat degenen die illegale abortussen uitvoeren en daarmee vrouwen blootstellen aan ernstige medische en psychische risico’s, gestraft kunnen worden. Dit artikel beschermt vrouwen en het ongeboren leven tegen onwettige abortussen."
            },
            {
                "party": "NSC",
                "statement": "We handhaven de huidige wetgeving rondom abortus. Abortus moet veilig, zeldzaam en legaal zijn, en moet zoveel mogelijk worden voorkomen door goede voorlichting, goede toegang tot zorg en het vrij verkrijgbaar zijn van anticonceptie."
            },
            {
                "party": "BBB",
                "statement": "Abortus hoort in het Wetboek van Strafrecht thuis om duidelijkheid en rechtszekerheid te bieden. Zo blijft vastgelegd onder welke voorwaarden abortus toegestaan is, waardoor bescherming van zowel de vrouw als het ongeboren kind gewaarborgd blijft."
            },
            {
                "party": "CDA",
                "statement": "In de huidige wet is een zorgvuldig uitgevoerde abortus al niet strafbaar. Alleen een onzorgvuldig uitgevoerde abortus is strafbaar. In het belang van zowel de vrouw als het ongeboren kind is het van belang dat dit zo blijft."
            },
            {
                "party": "DENK",
                "statement": "De gezondheid van de vrouw staat voor ons voorop. Daarom is DENK het oneens met de stelling. Door het schrappen van abortus uit het Wetboek van Strafrecht kunnen illegale abortussen die gevaarlijk zijn voor vrouwen niet meer effectief bestraft worden."
            },
            {
                "party": "FvD",
                "statement": "Normaliseer abortus niet verder; kies voor zorgvuldigheid en bescherming van ongeboren leven."
            },
            {
                "party": "SGP",
                "statement": "Abortus hoort in het Wetboek van Strafrecht thuis. Ieder mensenleven is waardevol en verdient (wettelijke) bescherming. Niet alleen tegen abortus met toestemming van de moeder, maar ook tegen abortus zonder toestemming van de moeder. Deze bescherming valt weg als abortus uit het Wetboek van Strafrecht gaat."
            },
            {
                "party": "ChristenUnie",
                "statement": "De zwangerschapsafbreking wordt niet uit het Wetboek van Strafrecht gehaald. Dit is een bescherming van het ongeboren leven en het beschermt de vrouw tegen een gedwongen abortus. Abortus is geen mensenrecht. De Nederlandse abortuspraktijk wordt niet naar het buitenland geëxporteerd."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil op dit vlak de huidige wetgeving handhaven."
            },
            {
                "party": "BVNL",
                "statement": "BVNL wil de huidige wetgeving niet wijzigen, zodat abortus is toegestaan binnen de huidige juridische kaders van de Wet Afbreking Zwangerschap."
            }
        ]
    },
    {
        "theme": "Geen verhoging bijstand",
        "title": "Verhoging van het minimumloonIcon moet niet langer automatisch leiden tot verhoging van de bijstandsuitkering.",
        "info": "De hoogte van de bijstand hangt af van het wettelijk minimumloon. Dat betekent dat de bijstand hoger wordt als het wettelijk minimumloon omhoog gaat. Als de bijstand niet meestijgt met het minimumloon, wordt het verschil tussen mensen die werken en mensen met een bijstandsuitkering groter.",
        "results": [
            {
                "party": "VVD",
                "statement": "De VVD vindt dat werkenden er altijd meer op vooruit moeten gaan dan mensen die niet werken. Dat vinden wij eerlijk. Als alternatief wil de VVD de bijstand voortaan koppelen aan de inflatie: als de boodschappen duurder worden stijgt de uitkering gewoon mee."
            },
            {
                "party": "FvD",
                "statement": "Maak werken lonend; koppel de bijstand los van automatische verhogingen door minimumloonstijgingen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een goede basis voor iedereen. Dit doen we met een basisinkomen en een minimumloon van €19,- per uur. De bijstandsuitkering garandeert op dit moment al het sociaal minimum. Hierdoor kunnen we de stijging van de bijstandsuitkering loskoppelen van de stijging van het minimumloon."
            },
            {
                "party": "JA21",
                "statement": "JA21 vindt dat werken moet lonen. Wie (meer) gaat werken moet erop vooruitgaan. Het laten meestijgen van de bijstand met het minimumloon gaat ten koste van dat effect. De koppeling met onder andere de AOW willen we wel in stand laten."
            },
            {
                "party": "BVNL",
                "statement": "Werken moet lonen. Het verschil tussen werken en niet werken moet worden vergroot. Meer werken leidt nu zelfs geregeld tot een lager netto inkomen. Dat is onbestaanbaar."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is tegen het verhogen van minimumloon en tegen het verhogen van uitkeringen. Dit leidt namelijk alleen maar tot een loon-prijsspiraal die vooral basis levensbehoeftes treft. Minimumlonen en uitkeringen door opgedrongen ‘solidariteit’ horen niet bij ons beeld van overheidstaken."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor eenvoud en voorspelbaarheid. De bijstand verdwijnt en wordt vervangen door een negatieve inkomstenbelasting. Zo is er geen koppeling met het minimumloon meer nodig en krijgt iedereen een eerlijke inkomensaanvulling zonder bureaucratie."
            },
            {
                "party": "PVV",
                "statement": "De PVV koestert de koppeling van het minimumloon aan de uitkeringen en de AOW"
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Als het minimumloon stijgt, moet de bijstand meegroeien. Zonder koppeling vallen mensen in de bijstand verder terug en wordt armoede groter. Bijstand moet zekerheid geven én ruimte om vooruit te kijken. Dat is sociaal, en zo zorgen we dat mensen kunnen blijven meedoen."
            },
            {
                "party": "NSC",
                "statement": "NSC staat voor bestaanszekerheid voor iedereen, dus ook voor mensen in een kwetsbare positie. Het is daarom van groot belang dat de koppeling tussen minimumloon en andere uitkeringen behouden blijft. Zo voorkomen we dat mensen onder het bestaansminimum raken."
            },
            {
                "party": "D66",
                "statement": "D66 wil niemand laten vallen. Door de bijstandsuitkering mee te laten stijgen met het minimumloon, worden ook de zwakste schouders ondersteund. Daar staat natuurlijk wel tegenover dat we van mensen verwachten dat ze een serieuze inspanning doen om een baan te vinden, als dat voor hen mogelijk is."
            },
            {
                "party": "BBB",
                "statement": "De bijstandsuitkering moet blijven meestijgen met het minimumloon. BBB kan zich daarin vinden. Zo wordt voorkomen dat een groep mensen die het toch al niet breed heeft er sluipend op achteruit gaat."
            },
            {
                "party": "CDA",
                "statement": "Het CDA vindt dat de uitkeringen gekoppeld moeten blijven aan de loonstijging, zodat iedereen mee profiteert van stijging van de welvaart."
            },
            {
                "party": "SP",
                "statement": "Als je niet of tijdelijk niet meer kunt werken, dan heb je recht op een goed inkomen. We garanderen een leefbaar inkomen door uitkeringen mee te laten stijgen met de verhoging van het minimumloon en de bijstand op een menswaardig niveau te brengen."
            },
            {
                "party": "DENK",
                "statement": "De gestegen kosten voor boodschappen en levensonderhoud benadelen ook uitkeringsgerechtigden. DENK vindt daarom dat de koppeling van de hoogte van de bijstandsuitkering met het minimumloon behouden moet blijven, zodat ook uitkeringsgerechtigden rond kunnen komen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij willen bestaanszekerheid voor iedereen. De boodschappen, de huur en andere vaste lasten worden steeds duurder. Als het minimumloon stijgt moet de bijstand daarom ook omhoog. Zo houden mensen zonder werk genoeg geld over om van te leven en voorkomen we meer armoede en ongelijkheid."
            },
            {
                "party": "SGP",
                "statement": "Voor mensen die echt niet meer kunnen rondkomen is er een vangnet, en dat steunt de SGP. Fatsoenlijk omgaan met minima betekent ook dat periodiek de bijstand wordt verhoogd, aan de hand van de kostenstijging van boodschappen en andere levensbehoeften."
            },
            {
                "party": "ChristenUnie",
                "statement": "Als het minimumloon omhoog gaat, moet de bijstand meestijgen. De koppeling hiertussen houden we in stand."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Iedereen in Nederland moet tenminste genoeg geld hebben voor een bestaansminimum."
            },
            {
                "party": "BIJ1",
                "statement": "De bijstand is nu onleefbaar laag, terwijl die bedoeld is als vangnet. Dat moet anders: de uitkering moet structureel omhoog naar een leefbaar niveau en altijd meestijgen met het minimumloon."
            },
            {
                "party": "50PLUS",
                "statement": "Alle uitkeringen moeten gekoppeld blijven aan het minimumloon. Denk aan AOW, Bijstand, WW, Wajong, enz."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij wil een onvoorwaardelijk basisinkomen. Vervolgens mag dit mee blijven stijgen met het minimumloon. Omdat dit basisinkomen de 'vrije voet' vervangt, en je dus in een progressief belastingstelsel direct belasting betaalt over wat je ernaast verdient, verdwijnt hiermee de armoedeval"
            },
            {
                "party": "FNP",
                "statement": "Het loslaten van de koppeling tussen bijstand en minimumloon geeft beleidsvrijheid, maar vergroot ook het risico dat uitkeringen achterblijven en bestaanszekerheid onder druk komt. Wij willen dat de koppeling behouden blijft om armoede en ongelijkheid te voorkomen."
            },
            {
                "party": "De Linie",
                "statement": "Verhoging van het minimumloon leidt momenteel automatisch tot verhoging van de bijstandsuitkering en o.a. de AOW. Dit moet absoluut zo blijven omdat hele groepen anders onder het bestaansminimum gaan vallen."
            }
        ]
    },
    {
        "theme": "Minder vee",
        "title": "De hoeveelheid vee in Nederland moet met minstens de helft omlaag.",
        "info": "In Nederland houden boeren veel dieren, zoals koeien, kippen, varkens en schapen, voor hun vlees of andere producten zoals melk, eieren en wol. Een deel van die producten verkopen ze in Nederland en een deel in het buitenland. De dieren zorgen voor vervuiling met stoffen als methaan, een gas dat bijdraagt aan klimaatverandering, en stikstof, dat slecht is voor kwetsbare natuurgebieden.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Nederland heeft te veel vee. Dat veroorzaakt vervuiling, natuur- en gezondheidsproblemen, dierenleed én stikstof, waardoor we nu minder huizen kunnen bouwen. Het meeste vlees gaat naar de export. Nederland hoeft niet de grootste exporteur van Europa te zijn. Minder dieren betekent duurzame landbouw."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "In Nederland worden meer dan 500 miljoen dieren per jaar gedood. Dit zorgt voor veel dierenleed en heeft grote impact op leefomgeving en klimaat. Het aantal dieren in de vee-industrie moet binnen twee jaar minimaal 75% krimpen om dierenleed te voorkomen en de natuur- en klimaatcrisis aan te pakken."
            },
            {
                "party": "Volt",
                "statement": "Volt wil de veestapel flink verkleinen. Er komen minder dieren per boer en megastallen verdwijnen. Het aantal dieren stemmen we af op wat de grond aankan. Zo herstellen we de natuur en luchtkwaliteit en creëren we ruimte voor gezonde en duurzame landbouw."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "En zo snel mogelijk. Nederland is het meest veedichte land ter wereld. De bio-industrie moet geheel worden afgeschaft."
            },
            {
                "party": "BIJ1",
                "statement": "Er is een drastische reductie van de veestapel nodig: deze moet met grote snelheid minstens gehalveerd. Dit moet op een rechtvaardige manier gebeuren. We pleiten voor het opzetten van een sociaal verantwoorde uitkoopregeling en rechtvaardigheid voor getroffen boeren."
            },
            {
                "party": "Piratenpartij",
                "statement": "Nederland hoeft niet langer vlees voor de hele wereld te produceren. De Piratenpartij wil minder vee en meer boeren. We pleiten voor efficiënter ruimtegebruik. De regionale milieu-impact en schade voor de volksgezondheid door bijvoorbeeld kanker en Q-koorts van de huidige bio-industrie is te hoog."
            },
            {
                "party": "PVV",
                "statement": "De consequentie hiervan zal zijn dat boeren worden gedwongen om te stoppen. De PVV is tegen gedwongen onteigening van boeren."
            },
            {
                "party": "VVD",
                "statement": "De platte redenering dat 'de veestapel moet halveren' heeft in het recente verleden tot veel onrust geleid en brengt de oplossing alleen maar verder weg. We moeten ons richten op vermindering van emissies, zodat er weer ruimte komt voor vergunningen om te bouwen, te boeren en te ondernemen."
            },
            {
                "party": "NSC",
                "statement": "Een halvering van de veestapel zou enorme economische en sociale gevolgen hebben voor boeren en plattelandsgemeenschappen. NSC kiest voor realistisch en uitvoerbaar stikstof- en landbouwbeleid, met oog voor natuur én bestaanszekerheid van boeren, niet voor rigide halveringsdoelen."
            },
            {
                "party": "D66",
                "statement": "Minder vee is geen doel op zich, maar wel nodig om doelen voor klimaat, water, natuur en dierenwelzijn te halen. D66 wil dat boeren geholpen en gecompenseerd worden. Zo zorgen we voor een zachte landing én dat Nederland van het slot gaat om weer huizen te bouwen."
            },
            {
                "party": "BBB",
                "statement": "Halvering van de veestapel leidt tot het verdwijnen van agrariërs, wat werkgelegenheid, kennis, natuurbeheer, toerisme en maatschappelijke zorg aantast. BBB pleit voor realistisch beleid zonder gedwongen maatregelen, zodat onze boeren kunnen blijven doen waar ze goed in zijn en wat dit land nodig heeft."
            },
            {
                "party": "CDA",
                "statement": "Krimp van de veestapel is voor het CDA nooit een doel op zich. We sturen op stikstofreductie in 2035 via emissienormen per bedrijf. Koplopers worden beloond, achterblijvers moeten meer doen. Het stikstoffonds wordt hersteld en we voeren regie op vrijwillige bedrijfsbeëindiging en herverdeling."
            },
            {
                "party": "SP",
                "statement": "De SP wil niet minder maar meer boeren. Die wel kleinschaliger kunnen boeren en minder afhankelijk zijn van de lage prijzen die supermarkten willen betalen voor de producten. Kleinschaliger boeren zorgt voor een kleinere veestapel."
            },
            {
                "party": "DENK",
                "statement": "DENK vindt in het belang van de klimaatdoelstellingen dat de uitstoot door de veehouderij omlaag moet. Dat hoeft niet perse met de halvering van de hoeveelheid vee. DENK staat ook open voor innovatieve manieren om de uitstoot omlaag te krijgen."
            },
            {
                "party": "FvD",
                "statement": "Halvering van de veestapel is onnodig en destructief. Geef boeren rust en ruimte."
            },
            {
                "party": "SGP",
                "statement": "Meer veehouderij in Nederland is duurzamer dan in veel andere landen. Boeren moeten voldoende dieren kunnen houden om eten te verdienen en investeringen in dierenwelzijn & milieu te kunnen betalen. Er zijn mogelijkheden voor minder schadelijke uitstoot en beter dierenwelzijn zonder verlaging van de veestapel."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is tegen gedwongen uitkoop van bedrijven of dierrechten. Wij willen boeren benaderen vanuit vertrouwen in hun vakmanschap. Elk boerenbedrijf krijgt een specifiek doel om minder stikstof uit te stoten. Er komt daarmee minder nadruk op opkoop van vee of bedrijven. Dat is effectiever."
            },
            {
                "party": "JA21",
                "statement": "De landbouwsector staat onder enorme druk als gevolg van een totaal onrealistisch stikstofbeleid op basis van onwerkbare normen. JA21 wil het stikstofbeleid grondig hervormen en is tegen gedwongen uitkoop van boeren en gedwongen krimp van de veestapel."
            },
            {
                "party": "BVNL",
                "statement": "Nederland is een agrarisch land met de beste agrariërs ter wereld. Die gaan we steunen, niet wegtreiteren."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Het is op geen enkele manier een taak voor de overheid om de veestapel te reguleren. Stop alle vormen van regulering van stikstof-/methaanuitstoot. Laat boeren vrij om te ondernemen. De LP pleit voor onmiddellijke afschaffing van de klimaatdoelen. Energiebeleid en klimaatbeleid worden ontkoppeld."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS kiest voor een Nederlands landbouwbeleid dat niet strenger is dan dat van onze buurlanden."
            },
            {
                "party": "FNP",
                "statement": "Het verminderen van vee is geen doel op zich. We steunen familiebedrijven en jonge boeren bij noodzakelijke veranderingen. Geef hen ruimte voor innovatie en verduurzaming op basis van realistische doelen met voldoende overgangstijd en ondersteuning."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor boeren en innovatie. Geen verplichte halvering op basis van modellen, maar beleid op meetbare feiten. Alleen waar aantoonbaar schade is, grijpen we in. Boeren krijgen ruimte voor duurzame oplossingen zonder gedwongen krimp."
            },
            {
                "party": "De Linie",
                "statement": "De hoeveelheid vee in Nederland hoeft wat ons betreft niet omlaag."
            }
        ]
    },
    {
        "theme": "Illegaal verblijf",
        "title": "Illegaal verblijf in Nederland moet strafbaar worden.",
        "info": "Als iemand geen verblijfsvergunning heeft, mag die persoon niet in Nederland blijven. Maar die persoon is nu niet strafbaar. Als illegaal verblijf wel strafbaar wordt, dan mag de politie iemand oppakken en kan diegene van de rechter een boete krijgen of zelfs een gevangenisstraf.",
        "results": [
            {
                "party": "PVV",
                "statement": "Wie geen recht heeft om in Nederland te verblijven, moet het land verlaten. Strafbaarstelling van illegaliteit is een noodzakelijke stok achter de deur om illegalen te motiveren Nederland te verlaten."
            },
            {
                "party": "VVD",
                "statement": "Uitgeprocedeerde migranten moeten Nederland snel verlaten, vrijwillig of gedwongen. Nu gebeurt dit te weinig. Door illegaliteit strafbaar te stellen kunnen zij worden vervolgd en vastgezet, waardoor meer migranten zullen meewerken aan hun vertrek."
            },
            {
                "party": "NSC",
                "statement": "Illegaal verblijf ondermijnt het draagvlak voor migratie en maakt handhaving moeilijk. We vinden dat niet meewerken aan uitzetting strafbaar zou moeten worden. Dit geeft de overheid meer mogelijkheden om effectief op te treden en sluit aan bij NSC’s inzet op een streng en realistisch migratiebeleid."
            },
            {
                "party": "BBB",
                "statement": "Onrechtmatig verblijf in Nederland moet strafbaar worden. Dit geldt ook voor het doelbewust mogelijk maken van illegaal verblijf, zoals het bewust onderverhuren van een kamer. Dit geldt niet voor het bieden van (nood)hulp aan iemand die hier illegaal verblijft."
            },
            {
                "party": "CDA",
                "statement": "Het is strafbaar voor uitgeprocedeerde asielzoekers om niet mee te werken aan terugkeer naar het land van herkomst. Het strafbaar stellen van mensen of organisaties die uitgeprocedeerde asielzoekers helpen, is voor het CDA onbespreekbaar. Medemenselijkheid is geen misdrijf."
            },
            {
                "party": "FvD",
                "statement": "Illegaal verblijf ondermijnt de rechtsstaat; stel het strafbaar en voer uitzetting uit."
            },
            {
                "party": "SGP",
                "statement": "Wie na een zorgvuldige rechtsgang geen recht op verblijf heeft, heeft de wettelijke plicht tot terugkeer naar het land van herkomst. Het is onwenselijk als mensen zich aan deze plicht onttrekken en kiezen voor de illegaliteit. Daarom is de SGP voorstander van strafbaarstelling van illegaal verblijf."
            },
            {
                "party": "JA21",
                "statement": "Een groot deel van de uitgeprocedeerde asielzoekers in Nederland keert niet terug naar het land van herkomst, maar verdwijnt in de illegaliteit. Deze situatie is onhoudbaar en is veel te lang op zijn beloop gelaten. JA21 is voor strafbaarstelling van illegaliteit en het faciliteren ervan."
            },
            {
                "party": "BVNL",
                "statement": "En illegalen zetten we uit. Daarvoor zetten we alle beschikbare diplomatieke en economische maatregelen in jegens het land van herkomst van de illegaal."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Iedereen is welkom die kan voorzien in zijn/haar eigen levensbehoeftes - dus genoeg inkomen/vermogen/een sponsor heeft. Bezoekers mogen maximaal 90 dagen blijven. Langer blijven zonder zelfvoorziening is strafbaar. Straffen proportioneel: geldboete of uitzetting op eigen kosten."
            },
            {
                "party": "50PLUS",
                "statement": "Vervolg- en beroepsprocedures worden wettelijk beperkt. Maar humanitaire hulp aan illegalen is niet strafbaar tenzij het uitzettingsbeleid wordt ondermijnd."
            },
            {
                "party": "De Linie",
                "statement": "Illegaal in Nederland langdurig verblijven is strafbaar."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Illegaal verblijf strafbaar maken criminaliseert kwetsbare mensen en lost niets op. Het maakt terugkeer niet sneller en vergroot onveiligheid, omdat mensen zorg of politie mijden. Iedereen heeft basisrechten, ongeacht verblijfsstatus. Wij kiezen voor menselijkheid."
            },
            {
                "party": "D66",
                "statement": "D66 wil dat mensen vertrekken die geen recht hebben om hier te zijn. Het strafbaar stellen ongedocumenteerd in Nederland te zijn, draagt aantoonbaar niks bij aan terugkeer, maar zorgt wel voor meer mensen op straat zonder inkomen of opvang. Dat maakt onze samenleving juist onveiliger."
            },
            {
                "party": "SP",
                "statement": "Mensen illegaal verklaren slaat nergens op. Het duwt hen het illegale circuit in, waar uitbuiting en mishandeling veel voorkomen. Dit is onmenselijk en zorgt ook niet voor een oplossing. Daarom verzetten we ons tegen het strafbaar stellen van mensen die ongedocumenteerde asielzoekers zijn of helpen."
            },
            {
                "party": "DENK",
                "statement": "De strafbaarstelling van illegaal verblijf zal leiden tot onmenselijke situaties. Mensen verdwijnen erdoor uit zicht, waardoor ze niet meer geholpen kunnen worden. Dit is in het belang van niemand."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Mensen zonder papieren moeten niet gecriminaliseerd worden. Hetzelfde geldt voor het helpen van mensen zonder documenten. Migratiebeleid dient menselijk te zijn en richt zich op het wegnemen van de oorzaken waardoor mensen hun land moeten ontvluchten."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil meer grip op migratie en investeren in de asielketen om aanvragen snel te beoordelen. Strafbaarstelling drukt kwetsbare mensen de illegaliteit in, dat belemmert het meewerken aan vertrek en toekomstperspectief. Hulp aan ongedocumenteerden wordt nooit strafbaar."
            },
            {
                "party": "Volt",
                "statement": "Volt vindt dat geen mens illegaal is. Strafbaarstelling lost niets op en vergroot kwetsbaarheid en misbruik. We investeren juist in opvang, zorg en begeleiding. We helpen gemeenten hierbij. Want ieder mens verdient perspectief."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Illegaal verblijf in Nederland moet opgelost worden."
            },
            {
                "party": "BIJ1",
                "statement": "Geen mens is illegaal. Het is een basaal mensenrecht om waar dan ook op aarde te verblijven. Mensen opsluiten of vervolgen voor het simpelweg bestaan is absurd en onmenselijk. Iedereen verdient bescherming, vrijheid en veiligheid, ongeacht bureaucratische verblijfsstatus."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij stelt mensenrechten boven grenzen, surveillance en repressie. Migranten kunnen er vaak weinig aan doen als hun land van oorsprong ze niet terugneemt. Hulpverlening mag nooit strafbaar worden! Liever Piraten!"
            },
            {
                "party": "FNP",
                "statement": "Illegaal verblijf strafbaar stellen helpt niet en vertraagt terugkeer. Wie terug kan, moet snel vertrekken. Voor wie niet terug kan, moet er een duidelijke en humane oplossing zijn. Zo blijft het beleid adequaat en uitvoerbaar."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Illegaal verblijf is nu al een bestuursrechtelijke overtreding met boete, uitzetting en straf bij inreisverbod. Extra strafbaarstelling voegt niets toe, maar vergroot criminalisering, bureaucratie en kosten. Vrij Verbond kiest voor een nuchter, selectief migratiebeleid met duidelijke grenzen."
            }
        ]
    },
    {
        "theme": "Rekeningrijden",
        "title": "In plaats van belasting te betalen voor het bezit van een auto moeten automobilisten per gereden kilometer gaan betalen.",
        "info": "In Nederland betaal je belasting voor het bezit van een motorvoertuig, zoals auto, motorfiets of vrachtwagen. Ook als je maar weinig rijdt, betaal je die belasting. Bij rekeningrijden betaal je geen vast bedrag meer, maar betaal je meer als je meer kilometers rijdt. De overheid kan daarbij ook variëren in prijs. Zo kan ze het duurder maken om in de spits te rijden.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Betalen per kilometer is eerlijker: wie weinig rijdt, betaalt minder, en wie veel vervuilt betaalt meer. Zo stimuleren we fietsen en verminderen we files en uitstoot. In regio’s waar mensen afhankelijk zijn van de auto vanwege beperkt openbaar vervoer geldt een lager tarief."
            },
            {
                "party": "D66",
                "statement": "D66 wil een eerlijke kilometerheffing die rekening houdt met plaats, tijd, brandstofsoort en gewicht. Wie het meest gebruik maakt van het wegennet, betaalt het meest. Op die manier verminderen we ook de files in Nederland."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "We voeren een intelligente kilometerheffing in op alle wegen en voor alle voertuigen, naar type voertuig en brandstofgebruik. Mensen die veel rijden gaan daarmee een eerlijk deel bijdragen, met uitzondering van mensen met een beperking en mensen die afgelegen wonen. Strikte privacywaarborgen gelden."
            },
            {
                "party": "ChristenUnie",
                "statement": "Betalen per gereden kilometer is eerlijker en duurzamer. De ChristenUnie is voor een intelligente kilometerprijs: op het platteland laag, op drukke momenten in de brede Randstad hoger. Bij de invoering worden privacyoverwegingen, fraudegevoeligheid en uitvoerbaarheid meegewogen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil een eerlijke kilometerheffing. Geen vaste bedragen, maar betalen naar gebruik: hoe meer je rijdt en vervuilt, hoe meer je betaalt. We houden daarbij rekening met type voertuig, uitstoot, tijd en plaats. Zo belasten we autorijden eerlijker en stimuleren we schone alternatieven."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "De gebruiker betaalt."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP staat achter het concept van “de gebruiker betaalt”. Echter willen wij op den duur ook deze belastingen uitfaseren, aangezien wij infrastructuur niet als een overheidstaak zien."
            },
            {
                "party": "PVV",
                "statement": "De PVV is tegen rekeningrijden, automobilisten zijn geen melkkoe."
            },
            {
                "party": "VVD",
                "statement": "De VVD is geen voorstander van rekeningrijden. We willen dat werkende Nederlanders er niet op achteruit gaan."
            },
            {
                "party": "NSC",
                "statement": "NSC wil dat de auto betaalbaar blijft omdat mensen buiten de Randstad vaak geen alternatief hebben en zo extra worden geraakt. Gewone gezinnen mogen niet de dupe worden van nieuwe lasten."
            },
            {
                "party": "BBB",
                "statement": "De auto blijft voor veel Nederlanders hét vervoermiddel voor werk, gezin en vrije tijd. Met name in de regio blijft de auto van onschatbare waarde. De auto is onmisbaar voor onze bereikbaarheid, economie en persoonlijke vrijheid."
            },
            {
                "party": "CDA",
                "statement": "Het CDA is tegen een algemene kilometerheffing, we willen juist doelgericht beleid. We willen de belasting baseren op voertuigoppervlak en een heffing in de spits op drukke wegen, waarvan de opbrengst wordt geïnvesteerd in de verbetering van onze wegen en onze bereikbaarheid."
            },
            {
                "party": "SP",
                "statement": "De SP is tegen rekeningrijden. Een hovenier uit Hengelo mag niet op hoge kosten gejaagd worden omdat hij een auto nodig heeft. Autorijden moet schoner worden, niet duurder. Dat dwingen we af bij de autofabrikanten."
            },
            {
                "party": "DENK",
                "statement": "DENK is tegen rekeningrijden. Dit legt namelijk een te zware druk op de portemonnee van de lage inkomens, waardoor autorijden een luxegoed wordt voor de hogere inkomens."
            },
            {
                "party": "FvD",
                "statement": "Geen rekeningrijden. Eén keer wegenbelasting en klaar; houd autorijden betaalbaar."
            },
            {
                "party": "SGP",
                "statement": "De brandstofprijzen zijn al fors omhoog gegaan. Een deel van de bevolking is afhankelijk van de auto, bijvoorbeeld in het landelijk gebied waar het openbaar vervoer geen serieus alternatief is. De SGP wil niet dat autorijden voor hen onbetaalbaar wordt."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil af van maatregelen om autogebruik te ontmoedigen en wil investeren in nieuwe en bredere wegen om filedruk tegen te gaan. We zijn absoluut tegen maatregelen zoals rekeningrijden en een spitsheffing."
            },
            {
                "party": "BVNL",
                "statement": "Er is al een kilometerheffing en die heet accijnzen en BTW op brandstof. Geen spionagekastjes in de auto."
            },
            {
                "party": "BIJ1",
                "statement": "Zo lang het openbaar vervoer nog niet gratis en toegankelijk is moet autorijden betaalbaar zijn. De lasten van klimaatbeleid worden niet langer gedragen door gewone burgers maar door grote vervuilers."
            },
            {
                "party": "50PLUS",
                "statement": "Of je veel of weinig rijdt, de weg dient goed onderhouden te worden. Daar betaal je voor. Het is een inbreuk op de privacy wanneer bijgehouden wordt wanneer je waar heen rijdt. Tenslotte zijn velen op de auto aangewezen wegens gebrek aan goed openbaar vervoer."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor privacy. Kilometerheffing kan niet zonder privacyschendingen. Je betaalt al per kilometer door accijns op benzine. Auto's staan nu voor 95% van de tijd stil en nemen onnodig veel (parkeer)ruimte in beslag. Delen stimuleren is beter. Meer info: programma.piratenpartij.nl"
            },
            {
                "party": "FNP",
                "statement": "De auto is nog altijd een veelgebruikt en onmisbaar vervoersmiddel in de regio. Landelijke maatregelen zoals rekeningrijden, die de regio extra benadelen, zijn wij tegen. De FNP zal niet accepteren dat een Fries of Achterhoeker straks meer betaalt, terwijl hier weinig alternatieven voor de auto zijn"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor betaalbare en voorspelbare mobiliteit. Geen kilometerheffing: die verhoogt kosten, tast privacy aan en vergroot bureaucratie. Lagere accijnzen maken autorijden eenvoudiger en houden de vrijheid van automobilisten overeind."
            },
            {
                "party": "De Linie",
                "statement": "De kilometerheffing is al 30 jaar gespreksonderwerp en men is nooit tot uitvoering gekomen. Het invoeren heeft ernstige consequenties o.a. voor de privacy. Daarom zijn we geen voorstander."
            }
        ]
    },
    {
        "theme": "Eigen risico zorgverzekering",
        "title": "Het eigen risico bij zorgverzekeringenIcon wordt per 2027 gehalveerd. Dat moet worden teruggedraaid.",
        "info": "In Nederland ben je verplicht een zorgverzekering af te sluiten, waarvoor je premie moet betalen. De zorgverzekeraar vergoedt veel zorgkosten, zoals medicijnen of ziekenhuisbezoek. Maar iedereen heeft een eigen risico - dat is het bedrag dat je eerst zelf moet betalen voordat de zorgverzekering de rest betaalt. Per 1 januari 2027 wordt het eigen risico gehalveerd, van 385 euro naar 192,50 euro per jaar.",
        "results": [
            {
                "party": "VVD",
                "statement": "Het eigen risico is voor ons belangrijk om de zorgkosten betaalbaar te houden. We willen wel dat het eigen risico per behandelmoment gemaximeerd wordt. Zo ben je niet in een keer alles kwijt. Hiernaast zorgen we voor een speciale regeling voor chronisch zieken, zij kunnen hun eigen risico afkopen."
            },
            {
                "party": "D66",
                "statement": "D66 vindt het halveren van het eigen risico een dure en onverstandige maatregel. Lagere inkomens gaan juist méér betalen voor zorg via een hogere premie en de zorg is niet meer te betalen voor volgende generaties. Wij investeren daarom in een tegemoetkoming voor chronisch zieken en gehandicapten."
            },
            {
                "party": "CDA",
                "statement": "De verlaging van het eigen risico door het vorige kabinet maakt de zorgpremie alleen maar duurder; dat is onverstandig en niet houdbaar richting de toekomst."
            },
            {
                "party": "SGP",
                "statement": "De SGP bevriest het eigen risico de komende kabinetsperiode op 385 euro."
            },
            {
                "party": "ChristenUnie",
                "statement": "Het eigen risico blijft € 385. We zorgen ervoor dat mensen die altijd hun eigen risico moeten opmaken, zoals chronisch zieken en gehandicapten, een tegemoetkoming krijgen."
            },
            {
                "party": "Volt",
                "statement": "Volt wil dat zorg betaalbaar blijft voor iedereen. We willen de zorg meer betalen via belastingen. Zo kan de maandelijkse premie omlaag en houden jongeren en mensen met een laag inkomen meer over. Het eigen risico blijft wel bestaan."
            },
            {
                "party": "JA21",
                "statement": "Het eigen risico is nodig om de zorg betaalbaar te houden. Het halveren van het eigen risico kost miljarden, legt een nog grotere druk op de zorg en komt neer op een broekzak-vestzakoperatie, aangezien de premie er fors door zal stijgen. JA21 wil deze onverstandige maatregel terugdraaien."
            },
            {
                "party": "BVNL",
                "statement": "Het gevallen kabinet wilde de eigen bijdrage verlagen van €385 naar €165 p/jr. Kosten ca. € 2,6 miljard. De zorgpremie zou dan verhoogd worden met €200 p/j! Zij die jaarlijks de volledige eigen bijdrage betalen schieten daar niets mee op. Zij die geen zorg afnemen, zijn zelfs veel duurder uit."
            },
            {
                "party": "FNP",
                "statement": "Ook met een halvering blijft het eigen risico een drempel voor mensen die het economisch het zwaarst hebben. Daar staat tegenover dat de premies hoger zullen worden en ook de algehele druk op de zorg toe zal nemen. Halvering eigen risico is derhalve een sigaar uit eigen doos."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor een eerlijk zorgstelsel. Halvering van het eigen risico maakt de zorg voor iedereen duurder en vergroot herverdeling via de zorg. Behoud van het huidige eigen risico houdt de lasten evenwichtiger verdeeld."
            },
            {
                "party": "NSC",
                "statement": "We hervormen het eigen risico. Elke behandeling kost ongeveer € 50 met een maximum van in totaal €385. Dat betekent dat mensen die één keer naar het ziekenhuis gaan niet direct hun hele eigen risico moeten betalen. De zorgpremie verlagen we en beperken de stapeling van zorgkosten."
            },
            {
                "party": "PVV",
                "statement": "De PVV wil het eigen risico helemaal afschaffen."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Iedereen kan ziek worden, daarop hoort geen boete te staan. Door het eigen risico stapsgewijs af te schaffen en zorgpremie inkomensafhankelijk te maken, word je niet langer gestraft voor een slechte gezondheid. Omdat zorgtoeslag niet langer nodig is kunnen we ook het toeslagenstelsel versimpelen."
            },
            {
                "party": "BBB",
                "statement": "Het is belangrijk dat zorg toegankelijk en betaalbaar blijft. Daarbij past geen hoge drempel van het eigen risico."
            },
            {
                "party": "SP",
                "statement": "Het eigen risico is een boete op ziek zijn. Daar kun je niks aan doen. Iedereen heeft recht op goede zorg. Het eigen risico schaffen we af, maar de zorgpremie wordt inkomensafhankelijk. Daarmee gaat maar liefst 80 procent van de Nederlanders minder betalen én houden we het systeem betaalbaar."
            },
            {
                "party": "DENK",
                "statement": "DENK is voor het afschaffen van het eigen risico. Zorg moet immers toegankelijk blijven voor iedereen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij willen het eigen risico helemaal afschaffen. Ook eigen bijdragen, zoals in de WMO, verdwijnen. De premie moet omlaag, de inkomensafhankelijke bijdrage omhoog. Zo voorkomen we zorgmijding en is zorg toegankelijk. Grote bedrijven, miljonairs en vervuilers betalen eerlijk mee."
            },
            {
                "party": "FvD",
                "statement": "De halvering van het eigen risico is juist nodig, wij willen een verlaging naar 200 euro. Houd zorg betaalbaar; niet opnieuw verhogen."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "De zorg moet voor iedereen betaalbaar zijn."
            },
            {
                "party": "BIJ1",
                "statement": "We zetten een Nationaal Zorgfonds op dat de private zorgverzekeraars gaat vervangen. Alle directe maandelijkse premies en eigen bijdragen worden afgeschaft en vervangen door een inkomensafhankelijke, progressieve zorgpremie die volledige dekking biedt voor alle zorg."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is tegen door de overheid afgedwongen prijsafspraken. Prijs en eigen risico kunnen verzekeraar en klant zelf overeenkomen. Het verplichte eigen risico is een door de overheid gecreëerd probleem. De LP wil klanten dit zelf laten afspreken en de verplichte basisverzekering vrijwillig maken."
            },
            {
                "party": "50PLUS",
                "statement": "Dit leidt tot toename koopkracht. Zeer wenselijk bij een bescheiden inkomen en heeft minder kans op zorgmijders. Onder voorwaarde dat de premie niet stijgt."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij vindt goede, betaalbare basisvoorzieningen een essentieel onderdeel van bestaansrecht. Het verplichte eigen risico is een straf op (chronisch) ziek zijn. Het leidt tot het uitstellen of vermijden van zorg. Dat is gevaarlijk en heeft uiteindelijk hogere kosten tot gevolg."
            },
            {
                "party": "De Linie",
                "statement": "Het eigen risico bij zorgverzekeringen wordt per 2027 gehalveerd en wat ons betreft mag het eigen risico helemaal verdwijnen."
            }
        ]
    },
    {
        "theme": "Euthanasie",
        "title": "Psychisch lijden mag geen reden zijn voor euthanasieIcon.",
        "info": "Artsen kunnen in bijzondere gevallen iemand helpen met sterven door middel van euthanasie of hulp bij zelfdoding.  Dat mogen zij alleen doen bij mensen die ondraaglijk en uitzichtloos lijden. Het lijden kan lichamelijk of psychisch zijn, maar moet een medische oorzaak hebben. Bijvoorbeeld door een psychiatrische aandoening.",
        "results": [
            {
                "party": "NSC",
                "statement": "Euthanasie moet uiterst zorgvuldig en terughoudend worden toegepast. Bij psychisch lijden is de beoordeling van uitzichtloosheid vaak complex en onzeker. NSC vindt dat met name kwetsbare jonge mensen onder de 30 jaar met psychisch lijden beschermd moeten worden tegen onomkeerbare stappen."
            },
            {
                "party": "FvD",
                "statement": "Psychisch lijden vraagt zorg, niet levensbeëindiging. Bescherm kwetsbaren en voorkom een glijdende schaal."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil dat euthanasie bij psychisch lijden niet langer mogelijk is. Zéker bij jonge mensen."
            },
            {
                "party": "ChristenUnie",
                "statement": "Op het gebied van psychische ziektes is nog veel onbekend over effectieve behandelingen, verloop en toerekeningsvatbaarheid. Daarom wil de ChristenUnie dat er zeer terughoudend wordt omgegaan met euthanasievragen die voortkomen uit psychisch lijden en ingezet wordt op betere zorg."
            },
            {
                "party": "PVV",
                "statement": "Het aantal euthanasiegevallen bij psychisch lijden stijgt, vooral onder jongeren (2012-2021: verviervoudigd). De PVV wil onderzoek, zeker omdat veel jongeren hun aanvraag intrekken. KNMG: “Meer hulp bij leven nodig dan bij sterven.” Stichting 113: “Honderden suïcides zijn te voorkómen met preventie“. De PVV is daarom voor een moratorium op euthanasie vanwege psychisch lijden. Binnen de fractie is dit een vrije kwestie."
            },
            {
                "party": "JA21",
                "statement": "Dit is een lastige en gevoelige afweging tussen zelfbeschikking en zorgen over een recente aanzienlijke stijging van euthanasiegevallen op psychische gronden onder jonge mensen, wat om terughoudendheid en onderzoek vraagt. Binnen de fractie is dit een vrije kwestie."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Bij psychisch lijden verdien je de beste hulp. Daarom zetten we ons al jaren in voor betere GGZ en het aanpakken van wachtlijsten. Maar zelfs als dat op orde is, kan het lijden zo zwaar zijn dat het ondraaglijk is. In dat geval moet er een zorgvuldig traject zijn waarin de patiënt centraal staat."
            },
            {
                "party": "VVD",
                "statement": "De huidige euthanasiepraktijk en -wetgeving zijn zeer zorgvuldig tot stand gekomen. De VVD staat pal voor de menselijke autonomie, ook als het gaat over het eind van het leven."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat iedereen zelf mag bepalen over zijn levenseinde. De beroepsgroepen van artsen en psychiaters gaan heel zorgvuldig om met verzoeken om euthanasie, ook bij psychisch leiden. Daarbij is sprake van een lang traject met toezicht vooraf en evaluatie achteraf."
            },
            {
                "party": "BBB",
                "statement": "Bij uitzichtloos en ondraaglijk lijden kan actieve levensbeëindiging een daad van barmhartigheid zijn. Dit moet altijd in een medische setting plaats vinden, na zorgvuldige besluitvorming. Er moet voldoende geïnvesteerd worden in expertisecentra over het levenseinde."
            },
            {
                "party": "CDA",
                "statement": "Ook met psychisch lijden kan iemand zich in een uitzichtloze toestand van ondraaglijk lijden bevinden. Dit is echter wel een complex en gevoelig onderwerp. Onder psychiaters, patiënten en naasten bestaan verschillende perspectieven. Euthanasie is daarom alleen mogelijk onder strikte voorwaarden."
            },
            {
                "party": "SP",
                "statement": "Euthanasie kan nu alleen plaatsvinden bij psychisch lijden onder strenge voorwaarden. Alleen als mensen heel erg lijden en behandeling niet meer mogelijk is. Dit zijn erg verdrietige gevallen die we zoveel mogelijk moeten voorkomen. Waar dat niet kan moet euthanasie een optie blijven."
            },
            {
                "party": "DENK",
                "statement": "Het menselijk leven is dierbaar en moet beschermd worden. DENK wil dat er meer geïnvesteerd wordt in psychische zorg om mensen te helpen en zodoende euthanasie te voorkomen. Tegelijkertijd moeten mensen die ondraaglijk en uitzichtloos psychisch lijden ook zeggenschap hebben over hun eigen leven."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Euthanasie moet mogelijk zijn bij uitzichtloos en ondraaglijk lijden, ook bij psychisch lijden. Wij staan voor keuzevrijheid en het recht op een waardig levenseinde. Met strikte zorgvuldigheidseisen en toetsing beschermen we de menselijke waardigheid."
            },
            {
                "party": "Volt",
                "statement": "Volt vindt dat euthanasie mogelijk moet zijn als er sprake is van een vrijwillige, blijvende en goed doordachte wens. Ook bij psychisch lijden. Iedereen heeft het recht op zelfbeschikking. Euthanasie hoort niet thuis in het Wetboek van Strafrecht."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Elke vorm van ondraaglijk lijden moet reden kunnen zijn voor zelfbeschikking."
            },
            {
                "party": "BVNL",
                "statement": "Volwassenen gaan over hun eigen leven. Onder strikte zorgvuldigheidseisen moet dit mogelijk zijn."
            },
            {
                "party": "BIJ1",
                "statement": "Zelfbeschikking betekent ook het recht op een waardig levenseinde. Bij ondraaglijk psychisch lijden moet euthanasie mogelijk zijn, zodat mensen niet gedwongen worden door te leven in uitzichtloos lijden."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Hoewel het beëindigen van je eigen leven een verschrikkelijke gedachte is, vinden wij het niet aan de overheid om te bepalen wat een ander met zijn leven doet. Ons hart gaat uit naar alle lijdende mensen, maar we trekken de streep bij het verbieden van mensen om over hun eigen leven te beslissen."
            },
            {
                "party": "50PLUS",
                "statement": "Euthanasie moet toegestaan worden bij ondraaglijk en uitzichtloos lijden."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor zelfbeschikkingsrecht. Mensen die vinden dat ze klaar zijn met hun leven, moeten recht krijgen op euthanasie. Het alternatief is namelijk zelfmoord. Wel moet er voldoende psychische hulp aanwezig zijn. Daarvoor willen we investeren in de capaciteit en kwaliteit van de GGZ"
            },
            {
                "party": "FNP",
                "statement": "Er zijn voorbeelden te bedenken waarbij psychisch lijden wel reden kan zijn voor euthanasie. Het is echter lastig vast te stellen wanneer een situatie oprecht ‘uitzichtloos’ is. Euthanasie is logischerwijs onomkeerbaar en daarom moet hier erg terughoudend mee om worden gegaan."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrijheid en zelfbeschikking horen ook te gelden bij ondraaglijk psychisch lijden. Vrij Verbond vertrouwt mensen en hun arts om samen te beslissen binnen de bestaande zorgvuldigheidseisen. Uitsluiten van psychisch lijden ondermijnt gelijke behandeling."
            },
            {
                "party": "De Linie",
                "statement": "Men behoort volledige zelfbeschikking te hebben over eigen leven, lijf en leden. Dat wil zeggen ook over het beëindigen van zijn eigen leven. De euthanasie wetgeving is veel te streng dienaangaande en veroorzaakt derhalve veel onnodig leed."
            }
        ]
    },
    {
        "theme": "Bouwen op landbouwgrond",
        "title": "De regering moet het bouwen van woningen op landbouwgrond makkelijker maken.",
        "info": "Gemeentes die woningen willen laten bouwen, moeten eerst kijken of er ruimte is in bebouwd gebied. Pas onder strenge voorwaarden mag het op landelijk gebied. Dan gaat het vooral om verandering van plannen over de inrichting van Nederland en om milieuregels. Als het bouwen van woningen op landbouwgrond gemakkelijker wordt, kunnen er sneller nieuwe woningen worden gebouwd.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Als we 100.000 nieuwe woningen willen bouwen, is er ruimte nodig. Het liefst in bebouwd gebied, waar al voorzieningen zijn, zoals bedrijventerreinen, in leegstaande panden in binnensteden en op ongebruikte grond van ontwikkelaars. Ook kijken we naar landbouwgrond voor nieuwe woningbouw."
            },
            {
                "party": "VVD",
                "statement": "De VVD wil flink schrappen in het aantal bouwregels. Het duurt nu gemiddeld 10 jaar om een huis te bouwen. Dit willen we terugbrengen en daarom moeten we in regels schrappen. Dit geldt ook voor de bouw van huizen op landbouwgrond, voor zover een eigenaar dit wil."
            },
            {
                "party": "NSC",
                "statement": "De woningnood vraagt om meer bouwlocaties, ook aan de randen van dorpen en steden. NSC wil bureaucratische barrières wegnemen en sneller betaalbare woningen realiseren; het benutten van landbouwgrond kan daarbij een praktische oplossing zijn."
            },
            {
                "party": "D66",
                "statement": "D66 wil radicaal meer woningen bouwen zodat we de grote woningnood kunnen oplossen. Daarvoor kijken we naar ruimte binnen de bebouwde kom, maar ook naar een klein aandeel van alle weilanden in Nederland. D66 is tegen het bouwen in natuurgebieden."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil in elke dorp en elke stad een wijkje erbij. We bouwen eerst aan de rand van kernen en gebiedsgericht, met boerenperspectief: vrijwillige grondruil via regionale grondbanken en kleinschalig. Het beslag op landbouwgrond is zeer beperkt."
            },
            {
                "party": "SP",
                "statement": "De woningnood is groot en vraagt om nieuwe bouwlocaties. Wat de SP betreft beginnen we binnen bestaande steden en wijken. Bouwen op landbouwgrond moet mogelijk zijn, maar wel zorgvuldig en met behoud van toekomst voor boeren en natuur. Betaalbare woningen staan voorop."
            },
            {
                "party": "DENK",
                "statement": "Het oplossen van de woningcrisis is voor DENK een absolute topprioriteit. Daarom is het noodzakelijk om versneld veel meer woningen te bouwen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Maar ongeveer 7% van het oppervlak van Nederland wordt gebruikt voor huizen. Bijna de helft is voor de bio-industrie. Als we boeren helpen overstappen naar biologische akkerbouw, ontstaat er meer plek voor natuur en woningen. Zo maken we Nederland groener en lossen we het woningtekort op."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil eerst binnen dorpen en steden bouwen. In dorpen stimuleren we ‘een buurtje erbij’, zodat jongeren en starters in hun eigen dorp kunnen blijven wonen. Grote nieuwbouwlocaties buiten de dorpen en steden zijn nodig om de woningnood te bestrijden. Dat kan ook op landbouwgrond zijn."
            },
            {
                "party": "Volt",
                "statement": "Volt wil sneller woningen bouwen, ook op landbouwgrond als dat nodig is. We kijken per gebied wat het beste past, met oog voor natuur, klimaat en toekomstig landgebruik. Zo maken we ruimte voor wonen én duurzaamheid."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil landbouwgrond zoveel mogelijk behouden. Het liefst bouwen we -waar mogelijk- woningen binnen bestaande kernen en aan de randen van steden en dorpen. Vanwege de woningnood kan bouwen op landbouwgrond echter niet geheel worden uitgesloten. Uiteraard evenwichtig en op basis van vrijwilligheid."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "We willen landbouwgrond voor 90% omzetten in natuur en 10% in woningbouw zodat mensen in nieuwe groen kunnen gaan wonen."
            },
            {
                "party": "BIJ1",
                "statement": "Met name de (melk)veehouderij neemt ontzettend veel ruimte in. Wanneer boeren stoppen, kan met name de grond rond steden beter gebruikt worden voor betaalbare woningen en natuur. Zo bestrijden we de wooncrisis en maken we onze leefomgeving groener."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP vindt dat het aan de eigenaar van de grond is hoe deze gebruikt wordt, zolang er geen schade wordt toegebracht aan anderen. De overheid legt teveel restricties op bouwen en verbouwen. Woningaanbod wordt zo kunstmatig laag gehouden. Grondeigenaren en woningzoekenden moeten zelf kunnen bepalen."
            },
            {
                "party": "50PLUS",
                "statement": "Als een paar % van de totale landbouwgrond voor woningbouw wordt ingezet is het woningprobleem opgelost."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij ziet betaalbare woonruimte als basisrecht. Hiervoor willen wij met name inzetten op bestaande kernen (verdichting). Daarnaast willen wij flexibeler omgaan met bestemmingsplannen om alternatieve woonvormen makkelijker mogelijk te maken. Informeer jezelf: programma.piratenpartij.nl"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Meer woningen zijn hard nodig. Laat grondeigenaren zelf aan marktpartijen verkopen en schrap belemmerende regels. Zo kunnen ontwikkelaars sneller bouwen en krijgen woningzoekenden eerder een betaalbaar huis."
            },
            {
                "party": "De Linie",
                "statement": "Om te kunnen voldoen aan de enorme vraag naar betaalbare woningen, zal de bouwgrond aangesproken moeten worden. Een minimaal percentage geeft al voldoende bouwmogelijkheden."
            },
            {
                "party": "PVV",
                "statement": "Landbouwgrond kan alleen worden gebruikt voor woningbouw als er vrijwillig, en dus niet op basis van dwang, afstand van zou worden gedaan."
            },
            {
                "party": "BBB",
                "statement": "Onze vruchtbare landbouwgrond is waardevol. BBB zal ervoor waken dat deze niet klakkeloos wordt herbestemd omdat er andere aanspraken op worden gedaan."
            },
            {
                "party": "FvD",
                "statement": "Behoud landbouwgrond voor voedselzekerheid. Versnel woningbouw zonder boerenland op te offeren."
            },
            {
                "party": "SGP",
                "statement": "Er wordt niet alleen binnenstedelijk, maar ook buitenstedelijk gebouwd. Tegelijk gaan we wel als een goed rentmeester met de beschikbare ruimte om. Verdichten als het kan, uitbreiden als het moet! Kortom, we zijn niet direct voorstander van het versoepelen van regels voor het bouwen op landbouwgrond."
            },
            {
                "party": "BVNL",
                "statement": "Als de bestemming landbouwgrond is, mag je er geen woningen op bouwen. Landbouwgrond dient zo veel mogelijk te worden ontzien bij de bouw van woningen."
            },
            {
                "party": "FNP",
                "statement": "Niet makkelijker, maar wel mogelijk. Nieuwe huizen worden gebouwd in overleg met dorpen, gemeenten en provincie, naar lokale behoefte en schaal. Regio’s zijn geen overloopgebied voor de Randstad. Inbreiding staat centraal, maar uitbreiding is mogelijk waar behoefte bestaat."
            }
        ]
    },
    {
        "theme": "Profileren op nationaliteit",
        "title": "Er moet een wet komen waarin staat dat de overheid nooit de afkomst of nationaliteit van mensen mag gebruiken om risico’s op criminaliteit in te schatten.",
        "info": "De overheid gebruikt steeds vaker gegevens van burgers, bijvoorbeeld om fraude met uitkeringen op te sporen. Of om criminaliteit tegen te gaan. Die gegevens gaan over de wijk waarin ze wonen, maar bevatten ook persoonlijke informatie van burgers, zoals leeftijd of afkomst. Op basis van een reeks instructies (algoritme) doen computersystemen daarmee voorspellingen voor groepen mensen. Het gebruik van afkomst of nationaliteit in een algoritme zorgt ervoor dat daarop ook wordt beoordeeld. De overheid heeft zich voorgenomen om afkomst en nationaliteit niet meer in algoritmes te gebruiken. Door dat in een wet vast te leggen moet de overheid zich daar ook aan houden.",
        "results": [
            {
                "party": "GroenLinks-PvdA",
                "statement": "Het toeslagenschandaal liet zien wat er gebeurt als je mensen discrimineert op afkomst. Het leven van duizenden onschuldige Nederlanders is erdoor verwoest. GroenLinks-PvdA staat voor een betrouwbare overheid die zich houdt aan de Grondwet. Daar kan discriminatie nooit een plaats hebben."
            },
            {
                "party": "NSC",
                "statement": "Discriminatie door de overheid tast de rechtsstaat aan en ondermijnt het vertrouwen van burgers. NSC wil dat de overheid burgers gelijk behandelt en zich niet schuldig maakt aan onderscheid op afkomst of nationaliteit. Want dat past niet bij een betrouwbare en rechtvaardige overheid."
            },
            {
                "party": "D66",
                "statement": "D66 vindt dat niemand beoordeeld mag worden op huidskleur of afkomst. Risico’s horen gebaseerd te zijn op feiten en gedrag, niet op etniciteit. Om spionage te bestrijden, kan nationaliteit door de AIVD worden meegewogen. Zo zorgen we voor gelijke behandeling én veiligheid."
            },
            {
                "party": "SP",
                "statement": "Risicoprofilering mag niet discriminerend zijn. Dat zagen we bijvoorbeeld bij het toeslagenschandaal. Overheidsorganisaties gebruiken algoritmes om fraude of verdacht gedrag te voorspellen, maar deze bevatten te vaak vooroordelen of zijn getraind op beperkte data, wat kan leiden tot discriminatie."
            },
            {
                "party": "DENK",
                "statement": "Je afkomst of je nationaliteit bepaalt niet of je meer geneigd bent tot criminaliteit. Dit is etnisch profileren en DENK vindt dat onacceptabel. Wij strijden tegen racisme en discriminatie in alle vormen."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Etnisch profileren leidt tot stigmatisering van hele bevolkingsgroepen. Er komt een verbod op het gebruik van etniciteit en nationaliteit als indicator in risicoprofielen voor het opsporen van potentiële wet- en regelovertreders. Preventief fouilleren staan we niet langer toe."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie is een tegenstander van etnisch profileren. Etnisch profileren is in Nederland al verboden door de rechter. Als blijkt dat het codificeren van dit verbod toegevoegde waarde heeft, beziet de ChristenUnie initiatieven die dit beogen welwillend."
            },
            {
                "party": "Volt",
                "statement": "Volt vindt dat afkomst of nationaliteit nooit gebruikt mogen worden om criminaliteit in te schatten, ook niet via algoritmes. Daarom willen we een verbod op etnisch profileren. Zo beschermen we gelijke behandeling en vertrouwen in de overheid."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Etnisch profileren is ethisch niet verantwoord."
            },
            {
                "party": "BIJ1",
                "statement": "Het inschatten van criminaliteitsrisico’s op basis van afkomst of nationaliteit werkt niet en is discriminatie. Het leidt alleen tot stigmatisering en ongelijkheid, zonder dat het de veiligheid daadwerkelijk verbetert."
            },
            {
                "party": "Libertaire Partij",
                "statement": "De LP is tegen ongerichte preventieve actie en profilering, want dit schendt het recht op privacy. Wij willen een kleine overheid die extreem voorzichtig is met gegevensverzameling. Biometrische gegevens moeten worden vernietigd. Bescherming tegen discriminatie door de overheid moet in de Grondwet."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor gelijke rechten en kansen voor iedereen. Etnische profilering maakt mensen vanwege hun afkomst bij voorbaat sneller verdacht. Dat is onaanvaardbaar. Informeer jezelf: https://programma.piratenpartij.nl/#algoritmes_en_profilering"
            },
            {
                "party": "FNP",
                "statement": "Profileren op afkomst tast mensenrechten aan, ondermijnt respect voor andere culturen en levensovertuigingen en verdeelt gemeenschappen. Het druist in tegen het FNP-principe van een samenleving als federatie van verbonden gemeenschappen waarin mensen samenleven op basis van gelijkheid en respect."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor gelijke rechten en individuele beoordeling. Criminaliteitsrisico’s moeten objectief worden ingeschat op gedrag en feiten, niet op afkomst of nationaliteit. Zo voorkomen we stigmatisering en beschermen we rechtszekerheid."
            },
            {
                "party": "De Linie",
                "statement": "Een wet die bepaalt dat de overheid nooit de afkomst of nationaliteit van mensen mag gebruiken om risico’s op criminaliteit in te schatten is aan te raden omdat voorkomen moet worden dat men bij voorbaat al als schuldig beoordeeld wordt."
            },
            {
                "party": "PVV",
                "statement": "De overheid moet naar feiten en statistieken kijken om te bepalen wat de risico's zijn, ook al zijn de criminaliteitsstatistieken niet rooskleurig voor bepaalde bevolkingsgroepen."
            },
            {
                "party": "VVD",
                "statement": "De VVD vindt dat etnisch profileren en andere vormen van onterechte profilering nooit mogen. Maar de overheid moet wel mogelijkheden hebben op een verantwoorde manier risico’s in te schatten, bijv. bij signalen van mensenhandel."
            },
            {
                "party": "BBB",
                "statement": "Etnisch profileren mag niet. Daarvoor is geen nieuwe wet nodig. BBB vindt dat bij het inschatten van risico's op criminaliteit alle relevante factoren in aanmerking dienen te worden genomen. Uiteraard zonder ongeoorloofd onderscheid te maken."
            },
            {
                "party": "CDA",
                "statement": "In sommige gevallen kan achtergrondinformatie over criminaliteit en daders behulpzaam zijn in de opsporing en preventie. Het op voorhand verbieden van deze informatie kan de opsporing juist bemoeilijken, maar er moet wel uiterst zorgvuldig mee om worden gegaan. Er is nooit plaats voor discriminatie."
            },
            {
                "party": "FvD",
                "statement": "Verbied dat niet; profileren mag op statistisch relevante kenmerken om opsporing effectief te maken."
            },
            {
                "party": "SGP",
                "statement": "Ingeval van bewezen, herhaalde criminaliteit onder bepaalde bevolkingsgroepen of nationaliteiten mag de Politie haar kennis en ervaring gebruiken om criminaliteit te voorkomen en aan te pakken."
            },
            {
                "party": "JA21",
                "statement": "Bepaalde groepen zijn nu eenmaal oververtegenwoordigd in de criminaliteit. Dat om politiek correcte redenen onder het tapijt moffelen lost niets op. JA21 wil criminaliteit gericht kunnen opsporen en aanpakken. Elementen als afkomst en nationaliteit mogen daarbij geen taboe zijn."
            },
            {
                "party": "BVNL",
                "statement": "Bijhouden van alle relevante data helpt bij de opsporing en het inzicht verkrijgen en het formuleren van beleid."
            },
            {
                "party": "50PLUS",
                "statement": "Diversiteit en inclusie zoals ook in de grondwet beschreven is, is voor 50PLUS voldoende."
            }
        ]
    },
    {
        "theme": "Sekswerk",
        "title": "De minimumleeftijd voor sekswerkIcon moet omhoog van 18 naar 21 jaar.",
        "info": "In Nederland is er een minimumleeftijd voor sekswerk. In dit geval gaat het om mensen die seksuele handelingen verrichten in de ruil voor geld. In de wet is seks met iemand onder de 18 die daarvoor wordt betaald altijd strafbaar. In sommige gemeenten krijg je al geen vergunning om sekswerk te doen als je jonger bent dan 21.",
        "results": [
            {
                "party": "PVV",
                "statement": "Loverboys richten zich vaak op jonge meisjes van 18. De PVV wil voorkomen dat zij op die leeftijd de prostitutie in worden gezogen. Door de minimumleeftijd naar 21 te verhogen, krijgen zij de kans eerst sterker en zelfstandiger te worden voordat ze de prostitutie in stappen en spijt krijgen."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Jongeren van 18 zijn vaak nog kwetsbaar en lopen risico op druk en uitbuiting. Door de minimumleeftijd voor sekswerk te verhogen naar 21 jaar worden ze beter beschermd tegen loverboys en mensenhandel. Zo zorgen we voor meer veiligheid."
            },
            {
                "party": "NSC",
                "statement": "Een verhoging naar 21 jaar kan jonge mensen beter beschermen tegen uitbuiting en druk om te beginnen met sekswerk. NSC legt sterk de nadruk op bescherming van kwetsbaren; extra waarborgen voor jongeren passen daar goed bij en sluiten aan bij wat veel Nederlanders wenselijk vinden."
            },
            {
                "party": "D66",
                "statement": "Wat D66 betreft gelden voor sekswerkers dezelfde rechten als voor andere werkenden. Richtlijnen kunnen op termijn een grens van 21 jaar bevatten, zoals bij andere beroepen. Wij waken ervoor dat sekswerkers nooit gecriminaliseerd worden en prioriteit is om hun werkomstandigheden te verbeteren."
            },
            {
                "party": "BBB",
                "statement": "BBB is voor het verhogen van de minimumleeftijd voor prostitutie naar 21 jaar. Dit past bij de aandacht voor mensen in een kwetsbare positie, waarvan bij veel sekswerkers zonder meer sprake is."
            },
            {
                "party": "CDA",
                "statement": "Sekswerk gaat vaak gepaard met mensenhandel, illegaliteit en seksuele uitbuiting. Door illegaal sekswerk effectiever aan te pakken, kunnen we vrouwen beter beschermen. Daarom zijn we voor een verhoging van de leeftijdsgrens van 18 naar 21 jaar."
            },
            {
                "party": "DENK",
                "statement": "DENK maakt zich grote zorgen over de mensenhandel, het misbruik en de uitbuiting binnen de prostitutiesector. Om meer mensen hiertegen tegen te beschermen zijn wij voor een hogere minimumleeftijd."
            },
            {
                "party": "FvD",
                "statement": "Bescherm jonge volwassenen tegen uitbuiting; werk in de prostitutie vraagt extra weerbaarheid."
            },
            {
                "party": "SGP",
                "statement": "Hoewel de SGP voorstander is van een totaalverbod op betaalde seks is een verhoging van de minimumleeftijd van 18 naar 21 jaar een stap in de juiste richting."
            },
            {
                "party": "ChristenUnie",
                "statement": "Een lichaam is geen koopwaar. Wat de ChristenUnie betreft komt er daarom een einde aan prostitutie in Nederland. Een eerste stap is het verhogen van de minimumleeftijd, bij voorkeur naar 24 jaar."
            },
            {
                "party": "JA21",
                "statement": "Uitbuiting van jonge kwetsbare vrouwen in de prostitutiebranche moet worden tegengegaan. Een wettelijke minimumleeftijd van 21 jaar draagt bij aan het bestrijden van dergelijke misstanden."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Sekswerk is een beroep wat lang niet altijd vrijwillig of weloverwogen tot stand komt. Vanuit een no-regret scenario zijn wij voor een leeftijdsgrens."
            },
            {
                "party": "BVNL",
                "statement": "De verhoging van de minimumleeftijd helpt te voorkomen dat jonge meisjes in de handen van loverboys terecht komen."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS steunt de verhoging naar 21 jaar. Het belangrijkste vindt 50PLUS dat de kwetsbaarheid beschermd moet worden."
            },
            {
                "party": "FNP",
                "statement": "We hanteren 18 jaar als grens voor volwassenheid, maar verhogen de leeftijd voor sekswerk naar 21 jaar. Dit is een bewuste uitzondering om jongvolwassenen extra te beschermen tegen druk, uitbuiting en risico’s in een sector die meer weerbaarheid vraagt dan andere beroepen."
            },
            {
                "party": "De Linie",
                "statement": "De minimumleeftijd voor sekswerkers mag worden gehandhaafd op 21 jaar daar het een keuze is van een volwassene."
            },
            {
                "party": "VVD",
                "statement": "Sekswerk is een legaal beroep in Nederland. Als je meerderjarig bent, mag je zelf keuzes maken met wie je wilt trouwen, op wie je wilt stemmen en wat je met je lichaam wilt doen. Voor het aanpakken van de misstanden in de seksbranche zet de VVD in op betere opsporing, registratie en handhaving."
            },
            {
                "party": "SP",
                "statement": "Sekswerkers moeten dezelfde rechten hebben als andere beroepsgroepen. Zij verdienen wel extra bescherming omdat er bovengemiddeld veel misstanden plaatsvinden bij deze beroepsgroep maar daar is een minimumleeftijd geen oplossing voor."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Sekswerk wordt erkend als volwaardig werk. Het verbieden van sekswerk voor mensen tussen 18 en 21 leidt tot illegale praktijken onder slechtere omstandigheden. Sekswerkers krijgen gelijke rechten en bescherming tegen discriminatie."
            },
            {
                "party": "Volt",
                "statement": "Volt ziet sekswerk als regulier werk. Het verhogen van de leeftijd vergroot de negatieve vooroordelen en uitsluiting. Sekswerkers verdienen juist vanaf 18 jaar gelijke rechten en bescherming, net als in andere sectoren."
            },
            {
                "party": "BIJ1",
                "statement": "De leeftijdsgrens voor sekswerk blijft op 18 jaar en gaat niet naar 21 jaar."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Als je volwassen bent, mag niemand je in die keuze beperken zolang je niemand anders schade berokkent. Wat betreft de LP is het tijd om te stoppen met het bestraffen van mensen voor ‘misdaden’ zonder slachtoffers."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij staat voor zelfbeschikking. Sekswerk is werk. Wij pleiten voor het Nieuw-Zeelandse model, waarmee sekswerk gezien wordt als elke andere dienstverlenende sector. Ook willen wij niet praten OVER sekswerkers maar MET sekswerkers. Informeer jezelf: programma.piratenpartij.nl"
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor autonomie en gelijke behandeling. Vanaf 18 jaar ben je volwassen en mag je eigen keuzes maken, ook over werk. Veiligheid in sekswerk bereik je met goede bescherming en handhaving, niet door legale keuzes te verbieden tot 21 jaar."
            }
        ]
    },
    {
        "theme": "Meer geld voor defensie",
        "title": "Nederland moet in een wet vastleggen dat uiterlijk in 2035 ten minste 3,5 procent van het bruto binnenlands productIcon aan defensie wordt uitgegeven.",
        "info": "Nederland is lid van de NAVO, een bondgenootschap van Europese en Noord-Amerikaanse landen. De landen hebben beloofd dat zij elkaar zullen helpen als een van hen wordt aangevallen. Ook hebben zij in 2025 afgesproken een bedrag dat gelijk is aan 3,5 procent van het bruto binnenlands product aan defensie te zullen uitgeven, bijvoorbeeld aan soldaten of wapens. Het bruto binnenlands product is de totale waarde van alle goederen en diensten die in een land worden geproduceerd in een jaar. Door het in de wet vast te leggen, moet de overheid zich er ook aan houden.",
        "results": [
            {
                "party": "PVV",
                "statement": "Het Nederlandse leger moet worden versterkt. De PVV wil investeren in een sterk Nederlands leger."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Door de oorlog in Oekraïne, de instabiliteit in de wereld, en de noodzaak om onafhankelijk te worden van de Verenigde Staten, is daadkrachtig leiderschap dat Nederland beschermt nodig. Daarbij hoort dat we moeten investeren in onze defensie en voldoen aan de NAVO-norm."
            },
            {
                "party": "VVD",
                "statement": "Onze veiligheid is te belangrijk om afhankelijk te zijn van politieke grillen. Het wettelijk vastleggen van de 3,5%-norm geeft onze krijgsmacht de zekerheid voor de lange termijn die nodig is."
            },
            {
                "party": "NSC",
                "statement": "NSC wil dat Nederland de NAVO-norm van 3,5% gaat halen. Een wettelijke vastlegging geeft duidelijkheid en geloofwaardigheid richting bondgenoten en versterkt de veiligheid en weerbaarheid van ons land."
            },
            {
                "party": "D66",
                "statement": "Veiligheid en vrijheid zijn niet vanzelfsprekend. Nederland en Europa worden bedreigd door Rusland en digitale aanvallen. Daarom is een sterke defensie-inzet nodig, samen met stevige diplomatieke investeringen, om nu en in de toekomst goed voorbereid te zijn."
            },
            {
                "party": "CDA",
                "statement": "Het CDA was een van de initiatiefnemers om de oude norm van minimaal 2% in de wet op te nemen. Het CDA wil daarnaast dat Nederland zich committeert aan de afspraak om uiterlijk in 2035 3,5% van het bbp uit te geven aan defensie. Veiligheid is een kerntaak van de overheid, en die moet op orde zijn."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie wil dat Nederland aan zijn internationale afspraken voldoet. Dat betekent 3,5% van de begroting standaard aan defensie-uitgaven maar ook 0,7% van de begroting standaard aan ontwikkelingssamenwerking. Het één kan wat de ChristenUnie betreft niet zonder het ander."
            },
            {
                "party": "De Linie",
                "statement": "Nederland moet in een wet vastleggen dat uiterlijk in 2035 ten minste 3,5 procent van het bruto binnenlands product aan defensie wordt uitgegeven."
            },
            {
                "party": "BBB",
                "statement": "Defensie-uitgaven zijn geen doel op zich. BBB legt zich nu nog niet vast op het bereiken van 3,5 procent BBP en ruim 19,3 miljard euro in 2035. Zulke bedragen kunnen en mogen niet per definitie ten koste gaan van andere zaken die voor BBB essentieel zijn."
            },
            {
                "party": "SP",
                "statement": "De SP is tegen de Navo-norm waarmee Trump van ons eist dat wij 5% van alles wat we verdienen uitgeven aan wapens. Deze wereldwijde wapenwedloop spekt vooral de Amerikaanse wapenindustrie. Wij weigeren onze sociale voorzieningen kapot te bezuinigen en onze economie en innovatie te remmen."
            },
            {
                "party": "DENK",
                "statement": "DENK is tegen het wettelijk vastleggen van de defensie-uitgaven. Wij willen een wapenwedloop voorkomen en zetten bij voorkeur in op diplomatie en het voorkomen van oorlog. Daarnaast hebben wij als land vele andere uitdagingen waar uitgaven voor nodig zijn."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Wij kiezen voor rechtvaardigheid en vrede. We investeren waar nodig in Europese defensie om onafhankelijk te worden van de VS en Oekraïne te steunen, maar zeggen ‘nee’ tegen een blanco cheque voor defensie. Uitgaven worden goed onderbouwd en mogen klimaat, natuur, zorg en onderwijs niet schaden."
            },
            {
                "party": "FvD",
                "statement": "Leg geen BBP-norm vast. Investeer gericht in eigen verdediging, maar geen blanco cheques."
            },
            {
                "party": "SGP",
                "statement": "norm gewoon halen, SGP heeft eerdere norm als bodem vastgelegd, goed staan voor Defensie en verantwoorde Financien, verantwoord opschalen en opbouwen van de krijgsmacht. Vorige norm vastgelegd na jaren tekortkomen en onvermogen om het te halen."
            },
            {
                "party": "Volt",
                "statement": "Volt doet nationale defensie-uitgaven alleen aan wat echt nodig is. Naast de NAVO-norm van 2%, investeren we 1,5% samen met de EU. Gezamelijke uitgaven besparen kosten en voorkomen verspilling. Zo versterken we onze veiligheid en houden we financiële ruimte voor sociale en groene investeringen."
            },
            {
                "party": "JA21",
                "statement": "JA21 steunt het toewerken naar 3,5% voor uitgaven aan defensie in 2035. Dit in de wet vastleggen beperkt de beleidsruimte van Nederland echter te sterk. Wel heeft JA21 het wettelijk vastleggen van de huidige 2%-norm gesteund."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Er moeten geen vaste percentages worden vastgelegd voor onze defensiebudgetten."
            },
            {
                "party": "BVNL",
                "statement": "De nieuwe NAVO norm van 5% is disproportioneel. De industrie kan de vraag naar materiaal niet aan en er zijn onvoldoende rekruten. BVNL wil naar de oude norm van 2%. Goede beloning en goed materiaal voor onze defensiemannen en -vrouwen is daarmee gegarandeerd, en dit is voldoende voor de defensietaken."
            },
            {
                "party": "BIJ1",
                "statement": "Geen cent naar de onnodige militarisering en de levensgevaarlijke wapenwedloop. Nederland moet juist investeren in vrede, diplomatie en mensenrechten. De vele extra defensiemiljarden betekenen grootschalige sociale afbraak en lastenverzwaring voor werkenden. Dat moet koste wat kost gestopt worden."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Het verdedigen van landsgrenzen is één van de weinig verdedigbare overheidstaken, maar het budget moet gebaseerd zijn op werkelijke benodigdheden. Koste wat kost geld uitgeven is ondoordacht en komt voort uit de wapenlobby. De LP wil gemeenschapsgeld alleen uitgeven wanneer het écht nodig is."
            },
            {
                "party": "50PLUS",
                "statement": "50PLUS is voor de uitbreiding defensie-uitgaven in lijn met de afspraken in NAVO-verband. Wettelijk vastleggen bij veranderende geopolitieke situaties werkt niet."
            },
            {
                "party": "Piratenpartij",
                "statement": "Nederland hoeft dit niet in wetgeving vast te leggen. 3,5% BBP is bijna 10% van de overheidsbegroting. Dat is teveel. Wij willen dit bedrag verlagen, en Defensie uitgaven liever investeren in cybersecurity, dan in wapens, kanonnenvoer en aanvalsmissies. Informeer jezelf: programma.piratenpartij.nl"
            },
            {
                "party": "FNP",
                "statement": "Wij steunen meer investeringen in defensie, maar niet door starre percentages in de wet vast te leggen. Nederland moet flexibel bijdragen aan internationale samenwerking, met als doel duurzame vrede en zo laag mogelijke kosten van oorlog."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond wil een sterke, zelfstandige krijgsmacht, maar geen wettelijk bbp-percentage. Defensie-uitgaven moeten afhangen van echte veiligheidsbehoeften, niet van symbolische streefcijfers. Wij kiezen voor onafhankelijkheid, realisme en efficiëntie in investeringen."
            }
        ]
    },
    {
        "theme": "Kerncentrales",
        "title": "Er moeten meer kerncentralesIcon komen in Nederland.",
        "info": "In een kerncentrale wordt elektriciteit opgewekt. Hierbij komt geen CO2 vrij. CO2 is een broeikasgas. Hoe meer ervan in de lucht zit, hoe minder warmte van de zon de aarde kan verlaten. De aarde wordt dan steeds warmer. Een kerncentrale gebruikt radioactief materiaal, waarvan de straling nog duizenden jaren na gebruik gevaarlijk is. Het afval moet dus voor zeer lange tijd goed worden opgeslagen. Nederland telt nu één kerncentrale, namelijk in Borssele.",
        "results": [
            {
                "party": "PVV",
                "statement": "Kernenergie is een stabiele, betrouwbare vorm van energie – in tegenstelling tot weersafhankelijke wind- en zonne-energie. De PVV wil daarom dat er meer kerncentrales worden gebouwd – ook kleine modulaire reactoren (SMR’s), en inzet op thorium centrales."
            },
            {
                "party": "VVD",
                "statement": "Kernenergie is cruciaal om energie-onafhankelijk te worden. Het is een onmisbaar onderdeel van een toekomstbestendig en betrouwbaar energiesysteem."
            },
            {
                "party": "NSC",
                "statement": "NSC wil inzetten op betaalbare en betrouwbare energievoorziening. Kernenergie levert stabiele stroom zonder CO2-uitstoot en helpt energiezekerheid te vergroten, waardoor Nederland minder afhankelijk wordt van het buitenland."
            },
            {
                "party": "D66",
                "statement": "Groene energie is voor D66 de eerste keuze. Daarom investeren we veel in meer windenergie op zee en meer zonne-energie. Voor een stabiele energievoorziening is ook kernenergie nodig. Daarom wil D66 naar twee kerncentrales. Meer dan twee zou veel te duur en onrealistisch zijn."
            },
            {
                "party": "BBB",
                "statement": "We versnellen de bouw van kerncentrales; zowel grote als kleine modulair gebouwde centrales. BBB streeft ernaar om met de bouw van een of meerdere SMR’s gedurende de komende kabinetsperiode te starten. Zonder kerncentrales is er geen beschikbaar, betrouwbaar en betaalbaar energiesysteem mogelijk."
            },
            {
                "party": "CDA",
                "statement": "Het CDA wil doorgaan met de bouw van twee nieuwe kerncentrales, in goed overleg met de omgeving. Ook stimuleren we kleine, modulaire kernreactoren (SMR’s) en bundelen we in Europa de krachten om de kosten te beheersen en CO₂-vrij regelbaar vermogen voor de toekomst te garanderen."
            },
            {
                "party": "FvD",
                "statement": "Kernenergie is schoon, betaalbaar en betrouwbaar; bouw meer centrales."
            },
            {
                "party": "SGP",
                "statement": "De SGP wil een duurzame en betrouwbare energievoorziening. Op bewolkte, koude en windstille dagen leveren windparken en zonnepanelen weinig stroom. Dan kunnen kerncentrales voor CO2-vrije elektriciteitsproductie zorgen. Nieuwe kerncentrales zijn veilig genoeg."
            },
            {
                "party": "ChristenUnie",
                "statement": "De ChristenUnie zet vooral in op duurzame energie zoals zon en wind. Gezien de urgentie van het uitfaseren van gas- en kolencentrales, zal kernenergie, inclusief 2 nieuwe toekomstige centrales, een integraal onderdeel van het Nederlandse energiesysteem dienen te zijn."
            },
            {
                "party": "Volt",
                "statement": "Volt kiest voor een schone en betrouwbare energievoorziening. Naast zon- en windenergie is ook kernenergie hier een onderdeel van. Met nieuwe kerncentrales versnellen we de overstap naar schone energie en verkleinen we onze afhankelijkheid van fossiele brandstoffen."
            },
            {
                "party": "JA21",
                "statement": "JA21 wil van kernenergie een fundament van ons energiesysteem maken. Kernenergie is betrouwbaar, schoon, betaalbaar en maakt ons onafhankelijk van andere landen. JA21 wil vol inzetten op de bouw van vier kerncentrales en meerdere kleine kerncentrales (SMR's) die er vóór 2035 kunnen staan."
            },
            {
                "party": "BVNL",
                "statement": "Nederland dient zo snel mogelijk energie-onafhankelijk te worden."
            },
            {
                "party": "Libertaire Partij",
                "statement": "Welke energiebronnen worden aangeboord is aan mensen/bedrijven zelf. De LP ziet echter een enorme vraag naar stabiele energieopwekking en de overheid/politiek beperken de ontwikkeling van kernenergie. Kernenergie verdient eerlijke kans maar wordt gehinderd door overregulering/politieke onzekerheid."
            },
            {
                "party": "50PLUS",
                "statement": "Zo snel mogelijk de 4 voorgenomen centrales bouwen. Tevens aanvullen met kleine modulaire kerncentrales."
            },
            {
                "party": "Vrij Verbond",
                "statement": "Vrij Verbond kiest voor betaalbare en betrouwbare energie. Kerncentrales leveren stabiele stroom zonder afhankelijkheid van fossiel of buitenlandse leveranciers. Meer kernenergie betekent innovatie, zekerheid en minder subsidies voor weersafhankelijke alternatieven."
            },
            {
                "party": "De Linie",
                "statement": "Wij zijn voor meer kerncentrales maar dan wel kleinschalig."
            },
            {
                "party": "DENK",
                "statement": "DENK sluit kernenergie niet uit indien het aantoonbaar bijdraagt aan het behalen van onze klimaatdoelstellingen en op een veilige manier gerealiseerd wordt. Het realiseren van meer kerncentrales is voor ons echter geen doel op zich."
            },
            {
                "party": "GroenLinks-PvdA",
                "statement": "Kernenergie is traag, duur en niet duurzaam. Het bouwen van een centrale duurt jaren, kost miljarden en het afval blijft nog lang gevaarlijk. Ook maakt het ons kwetsbaar bij een aanval. Wat we wél nodig hebben zijn investeringen in echt duurzame energieopwekking: zon en wind."
            },
            {
                "party": "SP",
                "statement": "Nieuwe kerncentrales zijn extreem duur, bouwtijden lopen altijd uit en leveren pas over tientallen jaren stroom. Bovendien blijven we met kernafval zitten en blijven we afhankelijk van landen voor de benodigde grondstoffen. Wij kiezen voor betaalbare energie die wel werkt: zon en wind op zee."
            },
            {
                "party": "Partij voor de Dieren",
                "statement": "Nederland bouwt geen nieuwe kerncentrales en bestaande centrales worden zo snel mogelijk gesloten. Kerncentrales komen te laat, terwijl de klimaatcrisis nu actie vergt. Het kost miljarden aan belastinggeld dat we ook kunnen gebruiken om uitstoot sneller terug te dringen."
            },
            {
                "party": "Vrede voor Dieren",
                "statement": "Kernenergie is kostbaar en onveilig en duurt te lang om te realiseren. De energietransitie is nú nodig."
            },
            {
                "party": "BIJ1",
                "statement": "Onze voorkeur gaat niet naar kerncentrales maar naar een daadwerkelijk groene herinrichting van onze economie. Wel hebben we liever kernenergie dan fossiele alternatieven."
            },
            {
                "party": "Piratenpartij",
                "statement": "De Piratenpartij is niet dogmatisch tegen alle vormen van kernenergie. We juichen meer onderzoek naar gesmolten-zout-reactoren en kernfusie toe. We zijn voor kernenergie wanneer het fossiele kan vervangen, zonder dat het ten koste gaat van investeringen in hernieuwbare energie. Nu is dat nog niet zo."
            },
            {
                "party": "FNP",
                "statement": "We zijn tegen méér kerncentrales omdat de bouw traag en kostbaar is en betere alternatieven bestaan. Maar als een regio zélf een centrale wil, accepteren we dat, mits zij ook de opbrengsten ontvangt en zelf kan beslissen over de lasten en baten."
            }
        ]
    }
];
