import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableComponent } from './list-available.component';

describe('ListAvailableComponent', () => {
  let component: ListAvailableComponent;
  let fixture: ComponentFixture<ListAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
