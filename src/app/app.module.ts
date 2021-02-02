import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogOverviewComponent,
    BlogDetailComponent,
    BlogCreateComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
