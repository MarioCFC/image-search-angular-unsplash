import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearcherComponent } from './home-searcher.component';

describe('HomeSearcherComponent', () => {
  let component: HomeSearcherComponent;
  let fixture: ComponentFixture<HomeSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
