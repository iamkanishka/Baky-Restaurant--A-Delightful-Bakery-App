import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthsComponent } from './growths.component';

describe('GrowthsComponent', () => {
  let component: GrowthsComponent;
  let fixture: ComponentFixture<GrowthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
