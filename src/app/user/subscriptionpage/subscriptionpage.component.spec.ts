import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionpageComponent } from './subscriptionpage.component';

describe('SubscriptionpageComponent', () => {
  let component: SubscriptionpageComponent;
  let fixture: ComponentFixture<SubscriptionpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionpageComponent]
    });
    fixture = TestBed.createComponent(SubscriptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
