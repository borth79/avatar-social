import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-object-reply',
  templateUrl: './feed-object-reply.component.html',
  styleUrls: ['./feed-object-reply.component.css']
})
export class FeedObjectReplyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  postReply(event: Event) {
    console.log(event);
  }
}
