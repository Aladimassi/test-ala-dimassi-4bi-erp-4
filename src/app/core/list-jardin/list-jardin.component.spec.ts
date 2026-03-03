import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJardinComponent } from './list-jardin.component';

describe('ListJardinComponent', () => {
  let component: ListJardinComponent;
  let fixture: ComponentFixture<ListJardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListJardinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
