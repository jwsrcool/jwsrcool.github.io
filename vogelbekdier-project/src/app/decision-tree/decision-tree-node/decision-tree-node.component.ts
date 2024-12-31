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

  constructor() { }

  ngOnInit(): void {
    if (this.isFirstNode === undefined) throw new Error('isFirstNode not provided.');
    if (this.isLastNode === undefined) throw new Error('isLastNode not provided.');
    if (this.node === undefined) throw new Error('node not provided.');
  }

  protected emitAnswerClicked(path: IDecisionTreePath): void {
    return this.onAnswerClicked.emit(path);
  }

  protected emitBackClicked(): void {
    return this.onBackClicked.emit();
  }
}
