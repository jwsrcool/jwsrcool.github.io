import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDecisionTreeNode, IDecisionTreePath } from "../decision-tree.component";
import { NgForOf, NgIf } from "@angular/common";
import { SafeHtmlPipe } from "../../safe-html.pipe";

@Component({
  selector: 'app-decision-tree-node',
  standalone: true,
  imports: [

    NgIf,
    NgForOf,
    SafeHtmlPipe
  ],
  templateUrl: './decision-tree-node.component.html',
  styleUrl: './decision-tree-node.component.css'
})
export class DecisionTreeNodeComponent implements OnInit {
  @Input() isFirstNode: boolean;
  @Input() isLastNode: boolean;
  @Input() node: IDecisionTreeNode;
  @Output() onAnswerClicked = new EventEmitter<IDecisionTreePath>();
  @Output() onBackClicked = new EventEmitter<void>();

  protected displayedContent: string = ''; // Huidige weergegeven tekst
  private fullContent: string = ''; // Volledige tekst van de vraag
  private typingInterval: number = 25; // Interval in milliseconden tussen letters

  constructor() { }

  ngOnInit(): void {
    if (this.isFirstNode === undefined) throw new Error('isFirstNode not provided.');
    if (this.isLastNode === undefined) throw new Error('isLastNode not provided.');
    if (this.node === undefined) throw new Error('node not provided.');


    this.fullContent = this.node.content; // Haal de volledige tekst op
    this.displayedContent = ''; // Begin met een lege string
    this.typeText(); // Start het effect
  }

  protected emitAnswerClicked(path: IDecisionTreePath): void {
    return this.onAnswerClicked.emit(path);
  }

  // protected emitBackClicked(): void {
  //   return this.onBackClicked.emit();
  // }

  private typeText(): void {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < this.fullContent.length) {
        this.displayedContent += this.fullContent[currentIndex];
        currentIndex++;
      } else {
        clearInterval(interval); // Stop het interval als alle tekst getoond is
      }
    }, this.typingInterval);
  }

}
