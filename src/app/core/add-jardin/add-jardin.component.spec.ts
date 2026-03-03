import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJardinComponent } from './add-jardin.component';

describe('AddJardinComponent', () => {
  let component: AddJardinComponent;
  let fixture: ComponentFixture<AddJardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJardinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
