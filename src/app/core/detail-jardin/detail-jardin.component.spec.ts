import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJardinComponent } from './detail-jardin.component';

describe('DetailJardinComponent', () => {
  let component: DetailJardinComponent;
  let fixture: ComponentFixture<DetailJardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailJardinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
