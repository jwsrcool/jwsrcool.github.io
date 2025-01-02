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
        content: `hier komt iets`,
        paths: [
          {label: 'iets', nextNode: 'C2'},
          {label: 'iets', nextNode: 'C3'},
        ],
        inputType: 'buttons',
        backgroundImgSrc: '../assets/Background/kots.png'
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
