import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { DecisionTreeNodeComponent } from "./decision-tree-node/decision-tree-node.component";
import { AsyncPipe } from "@angular/common";
import { CommonModule } from "@angular/common";

export interface IDecisionTreePath {
  label: string;
  nextNode: string;
  imgSrc?: string; // Voor afbeeldingsknoppen
  customClass?: string; // Voor CSS-klasse per knop
}

export interface IDecisionTreeNode {
  id: string;
  content: string;
  paths: IDecisionTreePath[] | null;
  answer?: string;
  backgroundImgSrc?: string; // Voor beeldvullende achtergrond
}

export interface IDecisionTreeConfiguration {
  startNodeId: string;
  nodes: IDecisionTreeNode[];
}

@Component({
  selector: 'app-decision-tree',
  standalone: true,
  imports: [
    DecisionTreeNodeComponent,
    AsyncPipe,
    CommonModule,
  ],
  templateUrl: './decision-tree.component.html',
  styleUrl: './decision-tree.component.css'
})
export class DecisionTreeComponent implements OnInit {
  @Input() configuration: IDecisionTreeConfiguration;
  protected nodes$ = new BehaviorSubject<IDecisionTreeNode[]>([]);

  constructor() { }

  ngOnInit(): void {
    if (this.configuration === undefined) throw new Error('configuration not provided.');

    this.addNode(this.configuration.startNodeId);
  }

  reset(): void {
    return this.nodes$.next([this.getNode(this.configuration.startNodeId)]);
  }

  protected answerNode(index: number, { label, nextNode }: IDecisionTreePath): void {
    const nodes = this.nodes$.value;

    nodes[index].answer = label;
    return this.nodes$.next(nodes.concat(this.getNode(nextNode)));
  }

  protected resetTillIndex(index: number): void {
    return this.nodes$.next(this.nodes$.value.slice(0, index + 1));
  }

  private addNode(nodeId: string): void {
    return this.nodes$.next(this.nodes$.value.concat(this.getNode(nodeId)));
  }

  private getNode(nodeId: string): IDecisionTreeNode {
    return this.configuration.nodes.find(node => node.id === nodeId);
  }
}
