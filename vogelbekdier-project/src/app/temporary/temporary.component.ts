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
          { label: 'Nee', nextNode: 'A1'},
          { label: 'Ja', nextNode: 'B1'},
        ],
        inputType: 'buttons',
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
          {label: '', nextNode: 'C1', imgSrc: '../assets/Images/coffee.png', customClass: 'coffee'},
          {label: '', nextNode: 'B2', imgSrc: '../assets/Images/wodka.png', customClass: 'wodka'},
        ],
        inputType: 'images',
        backgroundImgSrc: '../assets/Background/net_wakker.png',
      },
      {
        id: 'B2',
        content:`De wodka is niet goed gevallen. Wil je alsnog een kopje koffie proberen?`,
        paths: [
          {label: 'Ja', nextNode: 'C1' },
          {label: 'Nee', nextNode: 'A0'},
        ],
        inputType: 'buttons',
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
        inputType: 'buttons',
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
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/E1.png'
      },
      {
        id: 'E2',
        content: `Camping verkeersbord`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'E2a'},
          {label: 'Loop naar camping', nextNode: 'F1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic.png'
      },
      {
        id: 'E3',
        content: `De kardinaalvogel`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'E3a'},
          {label: 'Loop naar bioscoop', nextNode: 'H1'},
          {label: 'Loop naar huis', nextNode: 'E1'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/kardinaalvogel.webp'
      },
      {
        id: 'F1',
        content: `F1: camping`,
        paths: [
          {label: 'Ga richting huis', nextNode: 'E2'},
          {label: 'Ga richting school', nextNode: 'F2'},
          {label: 'Ga richting kerk', nextNode: 'F3'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/F1.png'
      },
      {
        id: 'F2',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'F2a'},
          {label: 'Loop naar school', nextNode: 'G1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic2.png'
      },
      {
        id: 'F3',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'F3a'},
          {label: 'Loop naar kerk', nextNode: 'I1'},
          {label: 'Loop naar camping', nextNode: 'F1'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic3.png'
      },
      {
        id: 'G1',
        content: `G1: School`,
        paths: [
          {label: 'Ga richting camping', nextNode: 'F2'},
          {label: 'Ga richting haven', nextNode: 'G2'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/G1.png'
      },
      {
        id: 'G2',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'G2a'},
          {label: 'Loop naar haven', nextNode: 'J1'},
          {label: 'Loop naar school', nextNode: 'G1'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic3.png'
      },
      {
        id: 'H1',
        content: `H1: Bioscoop`,
        paths: [
          {label: 'Ga richting huis', nextNode: 'E3'},
          {label: 'Ga richting supermarkt', nextNode: 'H3'},
          {label: 'Ga richting kerk', nextNode: 'H2'},
        ],
        inputType: 'buttons',
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
        inputType: 'buttons',
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
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic5.png'
      },
      {
        id: 'I1',
        content: `I1: Kerk/markt`,
        paths: [
          {label: 'Ga richting camping', nextNode: 'F3'},
          {label: 'Ga richting haven', nextNode: 'I2'},
          {label: 'Ga richting ziekenhuis', nextNode: 'I3'},
          {label: 'Ga richting bioscoop', nextNode: 'H2'},
        ],
        inputType: 'buttons',
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
        inputType: 'buttons',
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
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic1.png'
      },
      {
        id: 'J1',
        content: `J1: Haven`,
        paths: [
          {label: 'Ga richting school', nextNode: 'G2'},
          {label: 'Ga richting restaurant', nextNode: 'J2'},
          {label: 'Ga richting kerk', nextNode: 'I2'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/J1.png'
      },
      {
        id: 'J2',
        content: `Een karakter met conversatie. Voor nu leidt dit door naar volgende kruispunt`,
        paths: [
          {label: 'Ga in gesprek', nextNode: 'J2a'},
          {label: 'Loop naar restaurant', nextNode: 'M1'},
          {label: 'Loop naar haven', nextNode: 'J1'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic1.png'
      },
      {
        id: 'K1',
        content: `K1: Supermarkt`,
        paths: [
          {label: 'Ga richting bioscoop', nextNode: 'H3'},
          {label: 'Ga richting ziekenhuis', nextNode: 'K2'},
        ],
        inputType: 'buttons',
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
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic3.png'
      },
      {
        id: 'L1',
        content: `L1: Ziekenhuis`,
        paths: [
          {label: 'Ga richting restaurant', nextNode: 'L2'},
          {label: 'Ga richting supermarkt', nextNode: 'K2'},
        ],
        inputType: 'buttons',
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
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/generic4.png'
      },
      {
        id: 'M1',
        content: `M1: Restaurant. Hier ook hint naar cadeau geven. En hem laveloos laten drinken, waarna hij weer thuis wakker wordt.`,
        paths: [
          {label: 'Ga richting ziekenhuis', nextNode: 'L2'},
          {label: 'Ga richting haven', nextNode: 'J2'},
          {label: 'Drink verdriet weg', nextNode: 'B1'},
        ],
        inputType: 'buttons',
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
