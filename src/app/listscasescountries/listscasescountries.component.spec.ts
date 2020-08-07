import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListscasescountriesComponent } from './listscasescountries.component';

describe('ListscasescountriesComponent', () => {
  let component: ListscasescountriesComponent;
  let fixture: ComponentFixture<ListscasescountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListscasescountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListscasescountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
