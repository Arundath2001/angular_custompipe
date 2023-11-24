import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdataComponent } from './newdata.component';

describe('NewdataComponent', () => {
  let component: NewdataComponent;
  let fixture: ComponentFixture<NewdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
