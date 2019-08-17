import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedObjectComponent } from './feed-object.component';

describe('FeedObjectComponent', () => {
  let component: FeedObjectComponent;
  let fixture: ComponentFixture<FeedObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
