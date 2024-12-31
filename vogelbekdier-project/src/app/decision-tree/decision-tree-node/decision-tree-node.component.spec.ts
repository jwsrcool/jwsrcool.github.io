import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionTreeNodeComponent } from './decision-tree-node.component';

describe('DecisionTreeNodeComponent', () => {
  let component: DecisionTreeNodeComponent;
  let fixture: ComponentFixture<DecisionTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionTreeNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecisionTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
