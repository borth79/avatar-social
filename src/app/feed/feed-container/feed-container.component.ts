import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-container',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.css']
})
export class FeedContainerComponent implements OnInit {
  feedObjects = [];
  constructor() {
    this.feedObjects.push(0);
    this.feedObjects.push(0);
    this.feedObjects.push(0);
  }

  ngOnInit() {
  }

}
