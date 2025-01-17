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
        backgroundImgSrc: '../assets/Background/E1.png'
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
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'H2a'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/generic4.png'
      },
      {
        id: 'H3',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'H3a'},
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
        ],
        backgroundImgSrc: '../assets/Background/generic5.png'
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
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'I2a'},
          {label: 'Loop naar haven', nextNode: 'J1'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
        ],
        backgroundImgSrc: '../assets/Background/generic.png'
      },
      {
        id: 'I3',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'I3a'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
        ],
        backgroundImgSrc: '../assets/Background/generic1.png'
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
        content: `De verlaten supermarkt is vreemd stil. VDV loopt langs lege schappen die ooit vol lagen met alles wat
        mensen nodig hadden, of dachten nodig te hebben. Hij vraagt zich af of er ooit genoeg is, of altijd meer.`,
        paths: [
          {label: 'Ga richting bioscoop', nextNode: 'H3'},
          {label: 'Ga richting ziekenhuis', nextNode: 'K2'},
        ],
        backgroundImgSrc: '../assets/Background/K1.png'
      },
      {
        id: 'K2',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'K2a'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
          {label: 'Loop naar supermarkt', nextNode: 'K1'},
        ],
        backgroundImgSrc: '../assets/Background/generic3.png'
      },
      {
        id: 'L1',
        content: `De gevel van het ziekenhuis is verweerd, alsof het zelf behoefte heeft aan genezing. VDV voelt de
        kille lucht en denkt aan wat het betekent om te helen: is het genoeg om de pijn te verlichten, of is het pas
        klaar als de wonden onzichtbaar zijn?`,
        paths: [
          {label: 'Ga richting restaurant', nextNode: 'L2'},
          {label: 'Ga richting supermarkt', nextNode: 'K2'},
        ],
        backgroundImgSrc: '../assets/Background/L1.png'
      },
      {
        id: 'L2',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'L2a'},
          {label: 'Loop naar restaurant', nextNode: 'M1'},
          {label: 'Loop naar ziekenhuis', nextNode: 'L1'},
        ],
        backgroundImgSrc: '../assets/Background/generic4.png'
      },
      {
        id: 'M1',
        content: `M1: Restaurant. De ramen van het restaurant weerspiegelen VDV’s gezicht. Binnen zijn de tafels gedekt,
        maar er is niemand om te serveren of te eten. Een plek voor ontmoeting, waar nooit iemand ontmoette.
        Vogelbekdier de Vries vraagt zich af of stilte soms ook een smaak heeft. Hier ook hint naar cadeau geven. En hem laveloos
        laten drinken, waarna hij weer thuis wakker wordt.`,
        paths: [
          {label: 'Ga richting ziekenhuis', nextNode: 'L2'},
          {label: 'Ga richting haven', nextNode: 'J2'},
          {label: 'Drink verdriet weg', nextNode: 'B1'},
        ],
        backgroundImgSrc: '../assets/Background/M1.png'
      }
    ],
  }

  @ViewChild(DecisionTreeComponent) decisionTree: DecisionTreeComponent


  constructor() {

  }

  protected resetDecisionTree(): void {
    return this.decisionTree.reset();
  }

}
