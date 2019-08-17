import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JoinComponent } from './join/join.component';
import { FeedObjectComponent } from './feed/feed-object/feed-object.component';
import { FeedContainerComponent } from './feed/feed-container/feed-container.component';
import { FeedObjectReplyComponent } from './feed/feed-object-reply/feed-object-reply.component';

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    NavigationComponent,
    JoinComponent,
    FeedObjectComponent,
    FeedContainerComponent,
    FeedObjectReplyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
