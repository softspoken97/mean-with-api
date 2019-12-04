import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetacrawlComponent } from './metacrawl.component';

describe('MetacrawlComponent', () => {
  let component: MetacrawlComponent;
  let fixture: ComponentFixture<MetacrawlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetacrawlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetacrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
