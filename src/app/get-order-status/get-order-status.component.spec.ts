import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderStatusComponent } from './get-order-status.component';

describe('GetOrderStatusComponent', () => {
  let component: GetOrderStatusComponent;
  let fixture: ComponentFixture<GetOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOrderStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
