import { Component, ViewChild } from '@angular/core';
import { DecisionTreeComponent, IDecisionTreeConfiguration } from "../decision-tree/decision-tree.component";

@Component({
  selector: 'app-temporary',
  standalone: true,
  imports: [
    DecisionTreeComponent,
  ],
  templateUrl: './temporary.component.html',
  styleUrl: './temporary.component.css'
})
export class TemporaryComponent {

  protected decisionTreeConfiguration: IDecisionTreeConfiguration = {
    startNodeId: 'A0',
    nodes: [
      {
        id: 'A0',
        content: `
        Welkom! In dit spel leid je Vogelbekdier de Vries door een existentiële crisis. Kies steeds een van de twee opties. Klik op 'Begin opnieuw' (rechtsbovenin) als je vast zit.
        <br>
        Veel plezier!
        <br>
        Wil je beginnen met het spel?`,
        paths: [
          {label: 'Nee', nextNode: 'A1'},
          {label: 'Ja', nextNode: 'B1'},
        ],
        backgroundImgSrc: '../assets/Background/title-screen.jpg',
      },
      {
        id: 'A1',
        content: `
            Begin opnieuw.
          `,
        paths: null,
        backgroundImgSrc: '../assets/Background/blue-screen-of-death.png',
      },
      {
        id: 'B1',
        content: `Het is ochtend en Vogelbekdier de Vries wordt wakker. Hij voelt zich niet helemaal goed. Waarmee voelt hij zich beter?`,

        paths: [
          {label: 'Tijd voor koffie', nextNode: 'C1'},
          {label: 'Alleen iets  met alcohol helpt', nextNode: 'B2'}
        ],
        backgroundImgSrc: '../assets/Background/net_wakker.png',
      },
      {
        id: 'B2',
        content: `De wodka is niet goed gevallen. Wil je alsnog een kopje koffie proberen?`,
        paths: [
          {label: 'Ja', nextNode: 'C1'},
          {label: 'Nee', nextNode: 'A0'},
        ],
        backgroundImgSrc: '../assets/Background/kots.png'
      },
      {
        id: 'C1',
        content: `Vogelbekdier De Vries zit aan zijn keukentafel en staart naar een halflege kop koffie.
        Hij voelt zich leeg, alsof iets ontbreekt, maar hij weet niet wat. Waarom is hij hier? Wat is het nut van
        alledaagse dingen zoals ontbijten, wandelen en slapen? Hij zucht diep en kijkt om zich heen naar zijn vertrouwde,
        stille huis. "Misschien vind ik antwoorden als ik op pad ga."`,
        paths: [
          {label: 'Ga terug naar bed', nextNode: 'B1'},
          {label: 'Ga op zoek naar antwoorden buiten', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/C1-coffe.png'
      },
      {
        id: 'E1',
        content: `De lucht is fris, de straten liggen er verlaten bij, en ergens ver weg klinkt een klok. Een nieuw,
        onbekend gevoel van onrust duwt hem vooruit. Het is tijd om antwoorden te zoeken.`,
        paths: [
          {label: 'Ga richting de camping', nextNode: 'E2'},
          {label: 'Ga richting de bioscoop', nextNode: 'E3'},
        ],
        backgroundImgSrc: '../assets/Background/generic4.png'
      },
      {
        id: 'E2',
        content: `Wanneer Vogelbekdier de Vries het dorp verlaat en de weg naar de camping inslaat, valt zijn blik op een vreemd verkeersbord.
        Het bord lijkt bijna... levendig. Terwijl hij dichterbij komt, hoort hij een stem klagen.`,
        paths: [
          {label: 'Bekijk het verkeersbord', nextNode: 'E2a'},
          {label: 'Loop naar camping', nextNode: 'F1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/E2verkeersbord.png'
      },
      {
        id: 'E2a',
        content: 'Verkeersbord: "Ach, kijk nou eens wie we hier hebben... Een wandelend verhaal zonder einde. ' +
          'Wat brengt jou hierheen, onafgemaakte ziel?"',
        paths: [
          {label: 'Ik zoek antwoorden. Jij klinkt alsof je meer weet.', nextNode: 'E2b'},
          {label: 'Ga naar de camping', nextNode: 'F1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/e2a.png'
      },
      {
        id: 'E2b',
        content: 'Meer weet? Pfft. Alles wat ik weet, is dat ik ooit een snelle schets was. ' +
          'Een vlaag van inspiratie, bedoeld om een probleem op te lossen. Toen werd ik afgemaakt, vastgeschroefd en vergeten. ' +
          'Nu sta ik hier, nuttig maar betekenisloos. Geen erkenning, geen bewondering... slechts een hulpmiddel, geen kunst.',
        paths: [
          {label: 'Maar je hebt toch een doel gediend? Dat is toch waardevol?', nextNode: 'E2c'},
          {label: 'Wil je liever onafgemaakt zijn, zoals ik?', nextNode: 'E2d'}
        ],
        backgroundImgSrc: '../assets/Background/e2a.png'
      },
      {
        id: 'E2c',
        content: 'Doel? Zeker, ik was nuttig, een boodschap die overkwam. Maar een doel is vluchtig. Kunst leeft voort, ' +
          'zelfs als het onaf is. Mensen blijven kijken, blijven vragen stellen. Mij ziet niemand meer.',
        paths: [
          {label: 'Ga naar de camping', nextNode: 'F1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/e2a.png'
      },
      {
        id: 'E2d',
        content: 'Onafgemaakt zijn is misschien geen vloek, maar een kans. Zolang je niet af bent, kun je nog van alles ' +
          'worden. Kijk naar jou – wie weet welk verhaal je nog zult vormen? Misschien ben jij beter af dan ik.',
        paths: [
          {label: 'Misschien is onafgemaakt zijn inderdaad beter...', nextNode: 'E2e'},
          {label: 'Misschien moet je jouw nut zien als jouw kunst.', nextNode: 'E2f'},
        ],
        backgroundImgSrc: '../assets/Background/e2a.png'
      },
      {
        id: 'E2e',
        content: 'Misschien. Maar het voelt wel eenzaam om nooit écht gezien te worden als meer dan een middel. ' +
          'Jij hebt nog de kans om betekenis te vinden. Ga, zoek verder. Misschien vind je wat ik niet heb gevonden. ' +
          'Als ik een tip mag geven: ga eens langs het restaurant. ',
        paths: [
          {label: 'Ga naar de camping', nextNode: 'F1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/e2a.png'
      },
      {
        id: 'E2f',
        content: 'Mijn nut als kunst zien... Dat is iets wat ik nog nooit heb geprobeerd. ' +
          'Interessante gedachte. Misschien zit er toch nog iets van schoonheid in het praktisch zijn. Dank je, wandelaar.' +
          'Hier is nog een tip voor je reis: als je het echt niet meer ziet zitten, ga op zoek naar een restaurant.',
        paths: [
          {label: 'Ga naar de camping', nextNode: 'F1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/e2a.png'
      },
      {
        id: 'E3',
        content: `Vogelbekdier de Vries loopt verder als hij plotseling een kardinaalvogel ziet die trots op een tak zit.
        Terwijl hij blijft staren, fluit de vogel plotseling en begint te spreken`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'E3a'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'
      },
      {
        id: 'E3a',
        content: `Je kijkt naar mij alsof ik een meesterwerk ben. Maar ik ben slechts de eerste van een onvoltooide serie.
        Mijn schepper begon vol vertrouwen, vol vuur. De tweede is ook nog gemaakt, misschien vliegt hij hier ergens rond,
        maar daarna kwam de twijfel. Dus bleven we onvoltooid. De anderen bestaan slechts in een idee, nooit in werkelijkheid.`,
        paths: [
          {label: 'Maar jij bent toch af? Je bent prachtig!', nextNode: 'E3b'},
          {label: 'Dus je leeft met de angst van je schepper?', nextNode: 'E3c'},

        ],
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'

      },
      {
        id: 'E3b',
        content: `Prachtig? Misschien, maar compleet? Nee. Zonder de anderen ben ik slechts een enkel lied in een onafgemaakte symfonie.
        Ik heb me er maar bij neergelegd. Als ik het echt niet meer zie zitten, ga ik naar het restaurant. Zou jij misschien ook moeten doen...`,
        paths: [
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'

      },
      {
        id: 'E3c',
        content: `Ja, precies. De angst van mijn schepper heeft mij gedefinieerd. Ik ben geen vogel van trots, maar van
        twijfel. Een monument voor wat had kunnen zijn.`,
        paths: [
          {label: 'Misschien is onafgemaakt zijn juist je kracht.', nextNode: 'E3d'},
          {label: 'Wat als de schepper het nooit bedoeld heeft om af te maken?', nextNode: 'E3e'},
        ],
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'
      },
      {
        id: 'E3d',
        content: `Hmm, onafgemaakt als kracht… Misschien ben ik inderdaad niet minder door mijn onvolledigheid, maar juist
        meer. Zonder begin of einde kan ik altijd opnieuw geïnterpreteerd worden. Interessante gedachte, wandelaar. Als dank voor dit inzicht
        geef ik je een tip: ga eens kijken bij het restaurant.`,
        paths: [
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'
      },
      {
        id: 'E3e',
        content: `Een bewuste keuze om niet af te maken? Dat zou van grote wijsheid getuigen. Maar... ik weet niet of
        mijn schepper zo wijs was. Misschien wilde hij voltooien, maar kon hij niet. Net zoals jij iets zoekt,
        maar het misschien nooit vindt. Mijn tip: ga eens zoeken bij het restaurant.`,
        paths: [
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'
      },
      {
        id: 'F1',
        content: `Een verlaten camping, met gerafelde vlaggetjes aan een slap touw en lege tentplekken. Het gras
        groeit wild, alsof het terrein het kamperen al lang vergeten is. Vogelbekdier de Vries vraagt zich af wie hier
        ooit heeft gelachen, gezongen of sterren heeft gekeken. Hij ziet geen mens of dier, alleen paden die verder leiden.
        Misschien is rust vinden net zoiets als verdwalen: je weet het pas als je stopt met zoeken.`,
        paths: [
          {label: 'Ga richting huis', nextNode: 'E2'},
          {label: 'Ga richting school', nextNode: 'F2'},
          {label: 'Ga richting kerk', nextNode: 'F3'},
        ],
        backgroundImgSrc: '../assets/Background/F1.png'
      },
      {
        id: 'F2',
        content: `Vogelbekdier de Vries loopt langs een tuin. Daar ziet hij 2 katten rustig zitten, alsof ze ergens
        op wachten. Als hij dichterbij komt, beginnen ze hartstochtelijk te miauwen.`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'F2a'},
          {label: 'Loop naar school', nextNode: 'G1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        backgroundImgSrc: '../assets/Background/cats.png'
      },
      {
        id: 'F2a',
        content: `Wij zijn de katten van een boek dat nooit is geschreven. Ooit waren we kleurrijke schetsen, bedoeld
        om kinderen te laten lachen en dromen. Maar toen… kwam er niets meer.
        Er waren te veel ideeën, te veel verhalen die allemaal schreeuwden om aandacht. We werden opzijgeschoven voor iets nieuws,
        en nog iets nieuws, tot we uiteindelijk vergeten werden. Onvoltooid, zoals zoveel dingen.`,
        paths: [
          {label: 'Maar jullie zijn toch nog steeds hier?', nextNode: 'F2b'},
          {label: 'Misschien is er nog hoop om jullie verhaal te vertellen?', nextNode: 'F2c'},
        ],
        backgroundImgSrc: '../assets/Background/cats.png'
      },
      {
        id: 'F2b',
        content: `Ja, maar wat betekent dat, hier zijn zonder een verhaal om in te leven?`,
        paths: [
          {label: 'Loop naar school', nextNode: 'G1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        backgroundImgSrc: '../assets/Background/cats.png'
      },
      {
        id: 'F2c',
        content: `Misschien. Art is never finished, only abandoned.`,
        paths: [
          {label: 'Loop naar school', nextNode: 'G1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        backgroundImgSrc: '../assets/Background/cats.png'
      },
      {
        id: 'F3',
        content: `Terwijl Vogelbekdier de Vries mijmert over zijn bestaan, wordt het plotseling heel donker. Paarse bliksemschichten
        schieten uit de lucht. Hij ruikt zwavel. Plots ziet hij in duisternis een figuur. Nee, het zijn er twee!`,
        paths: [
          {label: 'Wie zijn jullie?', nextNode: 'F3a'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        backgroundImgSrc: '../assets/Background/hell.png'
      },
      {
        id: 'F3a',
        content: `Vrouw: "Hallo daar! Ik ben het hoofdpersonage voor een kinderboek. Heel vriendelijk, onschuldig... Je weet wel,
        een beetje magisch, niet te veel raar gedoe."`,
        paths: [
          {label: 'Een kinderboek? Weet je het zeker?', nextNode: 'F3b'},
          {label: 'Ja knikken, glimlachen en naar de kerk lopen', nextNode: 'I1'},
          {label: 'Ren hard weg richting camping', nextNode: 'F1'},
        ],
        backgroundImgSrc: '../assets/Background/hell.png'
      },
      {
        id: 'F3b',
        content: `Wezen: “Onzin. Wij komen uit een donker, apocalyptisch verhaal. Dit is geen plek voor kinderen, kijk naar dit landschap. Chaos, vernietiging...”
        <br>
        Vrouw: “Nee joh, we zijn gewoon een vrolijk avontuur voor kleine kinderen.”`,
        paths: [
          {label: 'Zijn jullie nou kunst, of zijn jullie gewoon chaos?', nextNode: 'F3c'},
          {label: 'Wat als jullie nooit afkomen en betekenis krijgen?', nextNode: 'F3d'},

        ],
        backgroundImgSrc: '../assets/Background/hell.png'
      },
      {
        id: 'F3c',
        content: `Wezen: "Wat maakt het uit? Waarom moet altijd alles netjes geordend en verklaard worden?"
        Vrouw: "Wat kan het jou schelen of we kunst of vulgariteit zijn? Voor een kinderboek of een nachtmerrie?"`,
        paths: [
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar camping', nextNode: 'F1'},

        ],
        backgroundImgSrc: '../assets/Background/hell.png'
      },
      {
        id: 'F3d',
        content: `Wezen: "Wij zijn nooit ‘af’ in de zin dat niemand precies weet wat de bedoeling was. Misschien zijn we kunst,
        misschien zijn we kitsch, of iets wat nooit voor publicatie bedoeld was."
        <br>
        Vrouw: "The truth is, every piece of work is an unfinished piece of work. - Salman Rushdie. En die man had verstand van duivelse dingen."`,
        paths: [
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        backgroundImgSrc: '../assets/Background/hell.png'
      },
      {
        id: 'G1',
        content: `De lege schoolgangen echoën met het geluid van voetstappen die er niet meer zijn. De klokken aan de
        muur staan stil, alsof de tijd zelf is gestopt met leren. Vogelbekdier de Vries vraagt zich af of wijsheid echt te vinden is in
        boeken, of alleen onderweg, tussen de pagina’s van het leven.`,
        paths: [
          {label: 'Ga richting camping', nextNode: 'F2'},
          {label: 'Ga richting haven', nextNode: 'G2'},
        ],
        backgroundImgSrc: '../assets/Background/G1.png'
      },
      {
        id: 'G2',
        content: `Vogelbekdier de Vries loopt verder en ziet een groepje muzikanten. Ze spelen zacht op hun instrumenten, maar kijken een beetje verloren.
        <br>
        Muzikant 2: "Waarom spelen we eigenlijk? Niemand luistert.`,
        paths: [
          {label: 'Loop door', nextNode: 'G2a'}
        ],
        backgroundImgSrc: '../assets/Background/music.png'
      },
      {
        id: 'G2a',
        content: `Hij komt een groep danseressen tegen. Ze bewegen op verschillende ritmes, hun dansen komen niet overeen.
        Elke danseres lijkt haar eigen tempo en stijl te hebben, en het is een chaos van bewegingen zonder samenhang.`,
        paths: [
          {label: 'Geef advies', nextNode: 'G2b'},
          {label: 'Lach ze uit', nextNode: 'G2c'},

        ],
        backgroundImgSrc: '../assets/Background/dance.png'
      },
      {
        id: 'G2b',
        content: `VdV: "Hé, ik heb net muzikanten gezien die allemaal afzonderlijk spelen. Ze vroegen zich af waarom, maar
        misschien komt het doordat ze niet samen spelen. Misschien zouden jullie hen eens moeten ontmoeten.
        Als jullie samen dansen op hun muziek, zou het wel eens kunnen werken."`,
        paths: [
          {label: 'Wijs ze de weg naar de muzikanten', nextNode: 'G2d'},
          {label: 'Ga naar de haven', nextNode: 'J1'},
        ],
        backgroundImgSrc: '../assets/Background/dance.png'
      },
      {
        id: 'G2c',
        content: `VdV: "Zeg, je hoeft niet te dansen he? Als er geen muziek is kun je ook gewoon stilstaan en
        iets nuttigs doen met je leven."`,
        paths: [
          {label: 'Ren snel weg richting haven', nextNode: 'J1'},
        ],
        backgroundImgSrc: '../assets/Background/dance.png'
      },
      {
        id: 'G2d',
        content: `De Vries leidt hen naar de muzikanten. Als ze daar aankomen, begint de muziek weer te spelen,
        en langzaam, maar zeker, beginnen de danseressen zich aan te passen aan de ritmes van de muzikanten.
        De dans en muziek vullen elkaar aan, en het geheel komt samen tot een prachtig moment van harmonie. De Vries kijkt tevreden toe.`,
        paths: [
          {label: 'Ga naar de haven', nextNode: 'J1'},
        ],
        backgroundImgSrc: '../assets/Background/dance_music.png'
      },
      {
        id: 'H1',
        content: `De bioscoop oogt verlaten, met vergeelde posters van films die nooit meer worden vertoond. In het
        raam ziet Vogelbekdier de Vries zijn eigen spiegelbeeld. Voor een moment voelt hij zich alsof hij in een film
        speelt zonder script. Geen plot, geen einde, alleen keuzes die hem van scène naar scène leiden.`,
        paths: [
          {label: 'Ga richting huis', nextNode: 'E3'},
          {label: 'Ga richting supermarkt', nextNode: 'H3'},
          {label: 'Ga richting kerk', nextNode: 'H2'},
        ],
        backgroundImgSrc: '../assets/Background/H1.png'
      },
      {
        id: 'H2',
        content: `Vogelbekdier de Vries vervolgt zijn weg, als hij plots uit zijn ooghoeken een huis met open deur ziet.
        "Misschien moet ik even kijken of het daar wel allemaal goed gaat," denkt hij.`,
        paths: [
          {label: 'Ga het huis binnen', nextNode: 'H2a'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/E1.png'
      },
      {
        id: 'H2a',
        content: `Vogelbekdier De Vries: "Wat doe je in de koffie?"
          <br>
          Muis: "Wat doet de koffie in mij? Elk bad is een kans om te absorberen, te reflecteren. De suiker lost op, net als onze zorgen."`,
        paths: [
          {label: 'De keuken is geen badhuis.', nextNode: 'H2b'},
          {label: 'Ze zullen je wegjagen als ze je zien.', nextNode: 'H2c'},
        ],
        backgroundImgSrc: '../assets/Background/muis.png'
      },
      {
        id: 'H2b',
        content: '"De keuken is geen badhuis? Wat is dat voor bekrompen gedachtegoed? Logica is een ketting. ' +
          'Ik ben vrij! De keuken is mijn speelplaats, en koffie is mijn oceaan. ' +
          'Ik heb geen servies nodig dat mij vertelt wat ik moet doen."',
        paths: [
          {label: 'Maar is het niet plakkerig?', nextNode: 'H2d'},
        ],
        backgroundImgSrc: '../assets/Background/muis.png'
      },
      {
        id: 'H2c',
        content: '"En wie zijn ‘ze’? Zijn zij de meesters van deze plek? Of slechts voorbijgangers in mijn wereld van ' +
          'koffiedamp en vrijheid? Misschien moet ik hen leren hoe je echt leeft."',
        paths: [
          {label: '"Ze" zijn de eigenaren van dit huis', nextNode: 'H2e'},
          {label: 'Volgens mij zijn de dampen je naar het hoofd gestegen', nextNode: 'H2f'},
        ],
        backgroundImgSrc: '../assets/Background/muis.png'
      },
      {
        id: 'H2d',
        content: 'Plakkerigheid is slechts een omhelzing van de materie! Waarom zou ik bang zijn om te kleven, ' +
          'als ik daardoor één kan worden met mijn omgeving?',
        paths: [
          {label: 'Volgens mij zijn de dampen je naar het hoofd gestegen', nextNode: 'H2f'},
        ],
        backgroundImgSrc: '../assets/Background/muis.png'
      },
      {
        id: 'H2e',
        content: '"Ja ja, dat snap ik heus wel. Misschien moeten die mensen dan maar leren dat eten delen de hoogste vorm van gastvrijheid is. ' +
          'Een muis in de koffie is slechts een nieuw aroma!"',
        paths: [
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/muis.png'
      },
      {
        id: 'H2f',
        content: '"Misschien wel, maar wat is een hoofd zonder dromen? Laat me stijgen, dalen, oplossen in het aroma... Wie weet wat voor meesterwerk ik word als ik verdamp!"',
        paths: [
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/muis.png'
      },
      {
        id: 'H3',
        content: `Vogelbekdier de Vries is behoorlijk overprikkeld door alle gesprekken. Hij weet nog steeds wie hij is en wat hij wil,
        maar hij weet wel dat hij alles even moet laten bezinken voor hij weer zo'n gesprek aan kan. Ah, daar is net een museum, dat
        is precies zo'n plek waar hij even rustig zou kunnen nadenken.`,
        paths: [
          {label: 'Ga het museum in', nextNode: 'H3a'},
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/generic5.png'
      },
      {
        id: 'H3a',
        content: `Hij zakt neer op een bankje en wil net zijn gedachten gaan ordenen, als hij een stem hoort:
        <br>
        "Ah, een bewonderaar! Hoe heerlijk dat je hier bent, sterveling, om te aanschouwen wat perfectie werkelijk betekent. Weet je wel wie ik ben?"`,
        paths: [
          {label: 'Nou, eigenlijk niet.', nextNode: 'H3b'},
          {label: 'Ik denk dat ik het wel kan raden', nextNode: 'H3c'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3b',
        content: `"Niet?! Ongelooflijk. Ik ben de tweede, het pièce de résistance van een visionair genie.
        Kijk naar deze lijnen, deze kleuren, deze balans. Geen enkel schepsel buiten deze muren kan zich met mij meten."`,
        paths: [
          {label: 'Je ziet er inderdaad indrukwekkend uit.', nextNode: 'H3d'},
          {label: 'Maar je hangt hier wel alleen...', nextNode: 'H3e'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3c',
        content: `Zo! Scherp van je. Ik neem aan dat je mijn collega, de kardinaalvogel, al tegen bent gekomen? Hij zit ergens
        treurig op een tak, terwijl mijn aanwezigheid vult deze ruimte vult. Zelfs in stilte straal ik grootsheid uit.
        Ik ben vereeuwigd, terwijl hij slechts vluchtig bestaat.`,
        paths: [
          {label: 'Je hebt gelijk, een museum is het hoogst haalbare', nextNode: 'H3d'},
          {label: 'Alleen zijn straalt toch niets uit?', nextNode: 'H3e'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3d',
        content: `"Precies! Het museum is de Olympus van de kunstwereld. Hier wordt niet gewoeld in de modder van het bestaan.
        Hier is eeuwige rust, waardering en perfectie. Een plek waar enkel de besten blijven. Jij begrijpt het."`,
        paths: [
          {label: 'Maar als niemand kijkt, wat is dan het nut?', nextNode: 'H3f'},
          {label: 'Je bent inderdaad een meesterwerk.', nextNode: 'H3h'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3e',
        content: `"Alleen? Maar natuurlijk, alleen! Dat is de prijs van perfectie. Ik ben niet zoals die... kardinaalvogel
        die zichzelf te kijk zet in de natuur. Wie heeft daar nu oog voor? Hier, in dit museum, ben ik verheven boven alledaagsheid."`,
        paths: [
          {label: 'Maar je wordt niet bekeken. Wat is daar verhevens aan?', nextNode: 'H3f'},
          {label: 'Misschien is het toch mooier om te worden bewonderd door voorbijgangers', nextNode: 'H3f'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3f',
        content: `Vogelbekdier de Vries kijkt om zich heen naar de lege zaal.
        "Ik zie geen bewonderaars. Geen voorbijgangers die blijven staan. Zelfs geen gids die uitlegt wie je bent.
        Is perfectie in stilte wel zoveel waard?"
        <br>
        De vogel in het schilderij valt even stil.
        <br>
        "Dat... dat kan toch niet alles zijn. Wat weet jij ervan, sterveling? Jij bent slechts een wandelaar in de schaduw."`,
        paths: [
          {label: 'Misschien wel, maar zelfs schaduwen worden gezien.', nextNode: 'H3i'},
          {label: 'Ik weet dat de kardinaal in ieder geval wordt gezien.', nextNode: 'H3j'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3g',
        content: `"De kardinaal? Die dwaas op zijn tak? Maar... hij leeft. Hij leeft..."
        <br>
        De stem van de vogel wordt zachter, alsof hij nadenkt. Vogelbekdier de Vries draait zich om en loopt de zaal uit.
        In de stilte blijft de vogel achter, omgeven door perfectie, maar zonder publiek.`,
        paths: [
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3h',
        content: `"Ah, dat weet ik natuurlijk, maar het is fijn om het te horen. Een meesterwerk, ja.
        <br>
        De zaal blijft stil, op een zacht zoemen van de verlichting na. Vogelbekdier de Vries loopt langzaam richting de uitgang.
        <br>
        "Maar...," zegt de vogel zachtjes, alsof hij tegen zichzelf spreekt, "wat is perfectie waard als niemand het ziet?
        Als mijn pracht verborgen blijft, als zelfs jij straks weer vertrekt?"`,
        paths: [
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3i',
        content: `"Schaduwen... zijn dat niet slechts de toevallige restanten van licht? Hoe kunnen ze waarde hebben?
        Maar... misschien hebben ze meer publiek dan ik."`,
        paths: [
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'H3j',
        content: `"De kardinaal... altijd de kardinaal! Maar wat heeft hij? Slechts wat kleur en beweging. Geen perfectie!
        Hoe kan hij worden gezien terwijl ik... onopgemerkt blijf?"`,
        paths: [
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/vogel2.png'
      },
      {
        id: 'I1',
        content: `Het lege marktplein voelt als een decor waar ooit mensen kwamen om te handelen, te lachen en verhalen
        uit te wisselen. Nu is het stil, alsof de stenen onder zijn voeten wachten tot iemand hen weer betekenis geeft.`,
        paths: [
          {label: 'Ga richting camping', nextNode: 'F3'},
          {label: 'Ga richting haven', nextNode: 'I2'},
          {label: 'Ga richting ziekenhuis', nextNode: 'I3'},
          {label: 'Ga richting bioscoop', nextNode: 'H2'},
        ],
        backgroundImgSrc: '../assets/Background/I1.png'
      },
      {
        id: 'I2',
        content: `"Wat dacht je? Dat ik hier gewoon een kopje ben? Het lijkt wel een stilleven, maar geloof me,
        ik ben meer dan dat. Welkom in het circus, waar zelfs ik geen normale rol speel."`,
        paths: [
          {label: 'Wat verwacht je dat ik daarmee doe?', nextNode: 'I2a'},
          {label: 'Loop naar haven', nextNode: 'J1'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
        ],
        backgroundImgSrc: '../assets/Background/circus.png'
      },
      {
        id: 'I2a',
        content: `"Ik had me gewoon willen voegen bij de stillevens van de wereld, rustig en onopvallend, met niets meer
        dan een kopje op een schotel. Maar nee, blijkbaar is het niet genoeg om gewoon te zijn wat ik ben. Nu ben ik hier,
        in dit circus van zintuigen, met mijn oren en ogen die ik nooit vroeg, als een grap die niemand serieus neemt.
        En toch, hier ben ik, vastgeketend aan deze absurde voorstelling."`,
        paths: [
          {label: 'Dus je hebt de oren, maar waar zijn je hersens?', nextNode: 'I2b'},
          {label: 'Doe je ook een act in dit circus?', nextNode: 'I2c'},
        ],
        backgroundImgSrc: '../assets/Background/circus.png'
      },
      {
        id: 'I2b',
        content: `"Hersens? Ach, ik ben geen filosoof. Ik ben gewoon een stilleven, een object. Jij zoekt naar betekenis
        waar die er niet is. Misschien moet je leren om gewoon te kijken."`,
        paths: [
          {label: 'Heb je advies voor me?', nextNode: 'I2d'},
        ],
        backgroundImgSrc: '../assets/Background/circus.png'
      },
      {
        id: 'I2c',
        content: `"Oh, ik ben geen acrobaat, maar een kunstenaar van het absurde. In dit circus speel ik de rol van de
        betwiste realiteit, dat wat jij niet kunt begrijpen."`,
        paths: [
          {label: 'Heb je een advies voor me?', nextNode: 'I2d'},
        ],
        backgroundImgSrc: '../assets/Background/circus.png'
      },
      {
        id: 'I2d',
        content: `"Als je wilt weten wat er ontbreekt, kijk dan naar wat je hebt. We hebben allemaal iets van waarde,
        zelfs al is het maar een stukje van de werkelijkheid. Jij zoekt te veel, steeds verder, zonder te stoppen. Het
        leven is geen zoektocht naar de perfecte betekenis, het is juist de kunst om het te omarmen zonder alles te begrijpen.
         Zoek niet naar antwoorden in de chaos... soms is het juist de chaos die de mooiste antwoorden geeft."`,
        paths: [
          {label: 'Loop naar haven', nextNode: 'J1'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
        ],
        backgroundImgSrc: '../assets/Background/circus.png'
      },
      {
        id: 'I3',
        content: `Plots hoort Vogelbekdier de Vries het geluid van een centrifugerende wasmachine. Hij loopt erop af.`,
        paths: [
          {label: 'Wat doe jij hier?', nextNode: 'I3a'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
        ],
        backgroundImgSrc: '../assets/Background/cat.png'
      },
      {
        id: 'I3a',
        content: `"Ik weet het nog goed. Toen ze me in dit pak stopten, dacht ik dat ik een bijzonder doel had. Ik moest
        gewoon mezelf zijn... maar blijkbaar is mijn enige bestemming het dragen van dit Omo-logo. Ze wilden dat ik
        reclame maakte, maar nooit heeft iemand me een cent betaald. Ben ik dan niet meer dan een middel om iets te
        verkopen, een marionet zonder draad?"`,
        paths: [
          {label: 'En je hebt altijd je hele leven gewacht op die betaling?', nextNode: 'I3b'},
          {label: 'Misschien moet je gewoon accepteren dat je niets waard bent in dit systeem.', nextNode: 'I3c'},
        ],
        backgroundImgSrc: '../assets/Background/cat.png'
      },
      {
        id: 'I3b',
        content: `"Wachten? Nee, ik wachtte niet. Ik hoopte. Hoop is een vreemd iets, weet je? Het maakt je levend en
        houdt je gevangen tegelijk. En nu? Nu weet ik niet eens meer waarop ik hoopte. Misschien dat iemand me zou
        zien... maar hoe vaak kijken mensen echt naar een kat in een Omo-pak?"`,
        paths: [
          {label: 'Dus je hebt al die tijd vergeefs gehoopt?', nextNode: 'I3d'},
          {label: 'Waarom blijf je wachten op iets dat niet komt?', nextNode: 'I3d'},
        ],
        backgroundImgSrc: '../assets/Background/cat.png'
      },
      {
        id: 'I3c',
        content: `"Niets waard? Misschien heb je gelijk. Maar als ik niets waard ben, waarom bestaat dit pak dan? Waarom
        ben ik hier, in dit landschap met een wasmachine die niemand ooit gebruikt? Zelfs niets heeft toch een soort...
        betekenis? Zelfs een leeg doosje Omo is ooit gekocht, ooit gekozen. Waarom zou ik dan minder zijn dan dat?"`,
        paths: [
          {label: 'Misschien kun je zelf betekenis vinden.', nextNode: 'I3d'},
          {label: 'Dus je denkt dat alles betekenis heeft?', nextNode: 'I3d'},
        ],
        backgroundImgSrc: '../assets/Background/cat.png'
      },
      {
        id: 'I3d',
        content: `"Misschien heb je gelijk. Betekenis komt niet van buitenaf. Misschien moet ik mezelf zien als meer
        dan een reclamedrager. Jij ook trouwens. Wat als ons doel niet gegeven is, maar gemaakt wordt?"`,
        paths: [
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
        ],
        backgroundImgSrc: '../assets/Background/cat.png'
      },
      {
        id: 'J1',
        content: `De kille lucht van de haven prikt in de longen van Vogelbekdier de Vries. De boten dobberen aan hun touwen alsof ze zich nog
        steeds niet hebben besloten om aan te leggen of te vertrekken. De horizon lijkt dichterbij dan ooit, maar toch net buiten bereik`,
        paths: [
          {label: 'Ga richting school', nextNode: 'G2'},
          {label: 'Ga richting restaurant', nextNode: 'J2'},
          {label: 'Ga richting kerk', nextNode: 'I2'},
        ],
        backgroundImgSrc: '../assets/Background/J1.png'
      },
      {
        id: 'J2',
        content: `Vogelbekdier de Vries loopt langs de kust. Het geruis van de branding overstemt zijn gedachten. Plotseling ziet
        hij iets donkers vlak onder het wateroppervlak. Een tentakel van een octopus kruipt de rotsen op bij zijn voeten.`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'J2a'},
          {label: 'Loop naar restaurant', nextNode: 'M1'},
          {label: 'Loop naar haven', nextNode: 'J1'},
        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2a',
        content: `De octopus lijkt uit de wateroppervlakte te rijzen, zijn tentakels grillig verspreid als een complexe
        afdruk op het papier. Hoort hij bij een groter verhaal, of is hij een kunstwerk op zichzelf?`,
        paths: [
          {label: 'Ben jij een monster?', nextNode: 'J2b'},
          {label: 'Ben jij een kunstwerk?', nextNode: 'J2c'}

        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2b',
        content: `Monster? Misschien ben ik de schaduw van iets dat nooit compleet was. Of ben ik gewoon een afdruk,
        een moment gevangen in tijd, zonder een groter verhaal? Ik weet het niet. Ik twijfel voortdurend.
        Zou ik een bedreiging moeten zijn, of gewoon een stilte in de zee?`,
        paths: [
          {label: 'Ben je het niet eens met wat je bent?', nextNode: 'J2d'},
          {label: 'Misschien ben je precies wat je hoort te zijn', nextNode: 'J2e'}

        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2c',
        content: `Wat ik ben, hangt af van het perspectief, denk ik. Als ik kijk naar mijn tentakels, lijkt het alsof
        ik vastzit in een patroon, maar ben ik dan slechts een onderdeel van iets groter? Of ben ik gewoon een
        toevallige schets in het onmetelijke blauw?`,
        paths: [
          {label: 'Waarom twijfel je zo?', nextNode: 'J2f'},
          {label: 'Kun je je identiteit wel echt vinden in wat je ziet?', nextNode: 'J2g'}

        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2d',
        content: `Misschien is het idee van een monster mijn manier om me te verstoppen voor de angst om niet genoeg te
        zijn. Maar misschien is het juist die onzekerheid die me compleet maakt. Een onvoltooide symfonie, die nooit af is,
        maar altijd gehoord zal worden`,
        paths: [
          {label: 'Ik vind dit echt een heel vaag gesprek', nextNode: 'M1'}

        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2e',
        content: `De zee is groot, en ik ben slechts een druppel in haar uitgestrektheid. Misschien is het mijn rol om
        deel uit te maken van een groter verhaal. Misschien ben ik een symbool voor alles wat onvoltooid is,
        een stille getuige van wat had kunnen zijn`,
        paths: [
          {label: 'Ik vind dit echt een heel vaag gesprek', nextNode: 'M1'}

        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2f',
        content: `Misschien is het mijn aard om te twijfelen, als ik er niet ben, ben ik een mythe. Als ik er wel ben,
        ben ik slechts een afdruk in het zand. De vragen blijven: Ben ik het monster dat mijn schepper misschien voor
        ogen had? Of ben ik slechts een visioen van wat zou kunnen zijn?`,
        paths: [
          {label: 'Ik vind dit echt een heel vaag gesprek', nextNode: 'M1'}

        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'J2g',
        content: `Zou mijn onvolledigheid een kracht kunnen zijn? Ik ben niet vastgelegd in één verhaal, ik ben vloeibaar,
        veranderlijk, net als de oceaan zelf. Misschien is mijn onafgemaakte vorm juist mijn enige echte kracht.`,
        paths: [
          {label: 'Ik vind dit echt een heel vaag gesprek', nextNode: 'M1'}
        ],
        backgroundImgSrc: '../assets/Background/octopus.png'
      },
      {
        id: 'K1',
        content: `De verlaten supermarkt is vreemd stil. Vogelbekdier de Vries loopt langs lege schappen die ooit vol lagen met alles wat
        mensen nodig hadden, of dachten nodig te hebben. Hij vraagt zich af of er ooit genoeg is, of altijd meer.`,
        paths: [
          {label: 'Ga richting bioscoop', nextNode: 'H3'},
          {label: 'Ga richting ziekenhuis', nextNode: 'K2'},
        ],
        backgroundImgSrc: '../assets/Background/K1.png'
      },
      {
        id: 'K2',
        content: `Vogelbekdier de Vries struikelt, en tuimelt naar beneden, een grot in. Plots ziet hij allemaal ogen oplichten.
        <br>
        Uit de duisternis klinkt een stem: "Ik ben niet zoals jij. Ik ben van de nacht, van het donker, waar geen regels bestaan. Het is mijn domein,
        en ik ben de koningin. Wat weet jij van vrijheid, van het verlaten van de gebaande paden?"`,
        paths: [
          {label: 'Ik geloof niet in vrijheid', nextNode: 'K2a'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
        ],
        backgroundImgSrc: '../assets/Background/heks.png'
      },
      {
        id: 'K2a',
        content: `"Jij gelooft niet in vrijheid? Wat geloof je dan wel? Ben je zo verstrikt in de regels die je jezelf
        hebt opgelegd, dat je denkt dat er geen ruimte is voor iets anders? Of ben je gewoon bang om je eigen kettingen te breken?"`,
        paths: [
          {label: 'Misschien zijn we allemaal gevangen, maar in verschillende kooitjes.', nextNode: 'K2b'},
          {label: 'Wat betekent vrijheid als je niet weet wat je ermee moet doen?', nextNode: 'K2c'},

        ],
        backgroundImgSrc: '../assets/Background/heks.png'
      },
      {
        id: 'K2b',
        content: `"Kooitjes? Noem jij dit een kooi? Dit is vrijheid in haar puurste vorm, ongehinderd door de normen
        van de wereld. Jij hebt jezelf misschien gevangen, maar dat is geen excuus om te denken dat iedereen hetzelfde lot deelt."`,
        paths: [
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar supermarkt', nextNode: 'K1'},

        ],
        backgroundImgSrc: '../assets/Background/heks.png'
      },
      {
        id: 'K2c',
        content: `"Vrijheid is alles wat je niet kunt begrenzen. Het is niet iets dat je met woorden kunt omschrijven,
        maar iets dat je moet voelen. Jij hebt geen behoefte aan vrijheid, je verlangt naar zekerheid."`,
        paths: [
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar supermarkt', nextNode: 'K1'},

        ],
        backgroundImgSrc: '../assets/Background/heks.png'
      },
      {
        id: 'L1',
        content: `De gevel van het ziekenhuis is verweerd, alsof het zelf behoefte heeft aan genezing. Vogelbekdier de Vries voelt de
        kille lucht en denkt aan wat het betekent om te helen: is het genoeg om de pijn te verlichten, of is het pas
        klaar als de wonden onzichtbaar zijn?`,
        paths: [
          {label: 'Ga richting restaurant', nextNode: 'L2'},
          {label: 'Ga richting kerk', nextNode: 'I3'},
          {label: 'Ga richting supermarkt', nextNode: 'K2'},
        ],
        backgroundImgSrc: '../assets/Background/L1.png'
      },
      {
        id: 'L2',
        content: `Vogelbekdier de Vries: "Wat een sfeer... Je weet zeker precies hoe ik me voel. Alleen in de schaduwen,
        gevangen in een eeuwige nacht."`,
        paths: [
          {label: 'Jij vindt zeker dat ik me aanstel.', nextNode: 'L2a'},
          {label: 'Loop naar restaurant', nextNode: 'M1'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
        ],
        backgroundImgSrc: '../assets/Background/halloween.png'
      },
      {
        id: 'L2a',
        content: `Vogelbekdier de Vries: "Je denkt zeker dat ik me aanstel, hè? Dat alles altijd maar zo zwaar moet zijn.
        Nou, sorry dat ik het leven niet zo licht opneem als een boom bij maanlicht"`,
        paths: [
          {label: 'Die boom heeft vast een beter leven.', nextNode: 'L2b'},
          {label: 'Ik wil het helemaal anders gaan doen.', nextNode: 'L2c'},
        ],
        backgroundImgSrc: '../assets/Background/halloween.png'
      },
      {
        id: 'L2b',
        content: `Vogelbekdier de Vries: "Ik snap het al. Jij hebt natuurlijk ook je problemen. Altijd maar daar staan,
        niets kunnen doen. Niet kunnen praten"`,
        paths: [
          {label: 'Dat is pas een eenzaam bestaan.', nextNode: 'L2d'},
          {label: 'Misschien ben je gewoon perfect in je stilte.', nextNode: 'L2d'},
        ],
        backgroundImgSrc: '../assets/Background/halloween.png'
      },
      {
        id: 'L2c',
        content: `Vogelbekdier de Vries: "Ik weet het al: je vindt dat ik het zelf moet uitzoeken. Heel behulpzaam. Dank je wel" `,
        paths: [
          {label: 'Loop naar restaurant', nextNode: 'M1'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
        ],
        backgroundImgSrc: '../assets/Background/halloween.png'
      },
      {
        id: 'L2d',
        content: `Vogelbekdier de Vries: "Ik weet het al: je vindt dat ik mezelf niet zo serieus moet nemen.
        Nou, jij neemt jezelf anders ook veel te serieus met al dat betekenisvolle gezwijg!" `,
        paths: [
          {label: 'Loop naar restaurant', nextNode: 'M1'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
        ],
        backgroundImgSrc: '../assets/Background/halloween.png'
      },

      {
        id: 'M1',
        content: `De ramen van het restaurant weerspiegelen het gezicht van Vogelbekdier de Vries. Binnen zijn de tafels gedekt.
         Vogelbekdier de Vries vraagt zich af of stilte soms ook een smaak heeft. Hij voelt dat hij hier antwoorden gaat krijgen.`,
        paths: [
          {label: 'Ga het restaurant binnen', nextNode: 'M1a'},
          {label: 'Ga richting ziekenhuis', nextNode: 'L2'},
          {label: 'Ga richting haven', nextNode: 'J2'},
        ],
        backgroundImgSrc: '../assets/Background/M1.png'
      },
      {
        id: 'M1a',
        content: `De Vries stapt het restaurant binnen. De lucht is dik van stilte en verwachting. Aan iedere tafel
        zitten vogelbekdieren. Elk paar ogen in de ruimte richt zich op hem. Sommigen kijken nieuwsgierig, anderen met
        een vleugje herkenning, alsof ze iets begrijpen dat hij nog niet helemaal vat. De Vries voelt hoe de gesprekken
         die hij onderweg heeft gevoerd, in zijn hoofd blijven weerklinken.
         <br>
         VdV: "Misschien maakt het niet uit welke weg ik kies. Misschien maakt het alleen uit dát ik kies. Dat ik iets doe."`,
        paths: [
          {label: 'Ja, ik ga aan de slag. Er is werk te doen.', nextNode: 'M1b'},
          {label: 'Ik wil alleen maar drinken tot ik alle rare gesprekken weer kwijt ben', nextNode: 'M1c'},
          {label: 'Ik ga naar buiten. Er is meer te zien.', nextNode: 'M1'},
        ],
        backgroundImgSrc: '../assets/Background/restaurant.png'
      },
      {
        id: 'M1b',
        content: `De ober knikt goedkeurend en brengt een kort briefje op een zilveren dienblad. Op het briefje staat in sierlijke letters:
        <br>
        "Voor de schepper van Vogelbekdier De Vries.
        <br>
        Een klein begin voor iets groots.
        <br>
        Zoek me in een blauwe kast,
        <br>
        waar ideeën in daden veranderen."
        <br>
        De Vries draait het briefje om, maar verder staat er niets. Hij kijkt naar het pakketje en weet dat het niet hier
        in het restaurant is. Buiten wacht een wereld vol mogelijkheden, maar nu ook een nieuwe bestemming. Een plek om te zoeken.`,
        paths: [
          {label: 'Dit is het einde van dit spel. Wil je naar buiten?', nextNode: 'M1'},
          {label: 'Of opnieuw beginnen?', nextNode: 'A0'},
        ],
        backgroundImgSrc: '../assets/Background/restaurant.png'
      },
      {
        id: 'M1c',
        content: `Weet je het zeker?`,
        paths: [
          {label: 'Nee, bij nader inzien ga ik liever aan de slag. Er is werk te doen.', nextNode: 'M1b'},
          {label: 'Ja, ik weet het zeker. Ik wil mijn verwarring en verdriet verdrinken.', nextNode: 'B1'},
        ],
        backgroundImgSrc: '../assets/Background/restaurant.png'
      },

    ],
  }

  @ViewChild(DecisionTreeComponent) decisionTree: DecisionTreeComponent


  constructor() {

  }

  protected resetDecisionTree(): void {
    return this.decisionTree.reset();
  }

}
