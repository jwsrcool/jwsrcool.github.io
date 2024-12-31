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
        content: `Dit is de eerste test vraag.`,
        paths: [
          {label: '20 jaar', nextNode: 'A1', imgSrc: '../assets/Images/platypus-cute.jpeg', customClass:'cute-img'},
          {label: '21 jaar of ouder', nextNode: 'B1', imgSrc: '../assets/Images/platypus-detective.png', customClass:'detective-img'},
        ],
        answer: 'ANSWER',
        inputType: 'images',
        backgroundImgSrc: '../assets/Background/windows_98_background.png',
      },
      {
        id: 'A1',
        content: `
            <b>U hoeft voor deze leerling geen ontheffing aan te vragen.</b>
            <br><br>
            Een leerling moet het voortgezet speciaal onderwijs verlaten aan het einde van het schooljaar waarin
            de leerling 20 jaar is geworden. De leerling mag dus het schooljaar afmaken.
          `,
        paths: null,
      },
      {
        id: 'B1',
        content: `Is er sprake van een voortgezet verblijf op de school?`,

        paths: [
          {label: 'Ja', nextNode: 'C1'},
          {label: 'Nee', nextNode: 'B2'},
        ],
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
