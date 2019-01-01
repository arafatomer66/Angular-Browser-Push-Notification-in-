import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushnotifactionsComponent } from './pushnotifactions.component';

describe('PushnotifactionsComponent', () => {
  let component: PushnotifactionsComponent;
  let fixture: ComponentFixture<PushnotifactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushnotifactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushnotifactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
