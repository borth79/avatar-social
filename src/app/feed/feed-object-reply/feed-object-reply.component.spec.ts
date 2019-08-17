import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedObjectReplyComponent } from './feed-object-reply.component';

describe('FeedObjectReplyComponent', () => {
  let component: FeedObjectReplyComponent;
  let fixture: ComponentFixture<FeedObjectReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedObjectReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedObjectReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
