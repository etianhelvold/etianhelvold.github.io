import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationTabsComponent } from './navigation-tabs/navigation-tabs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationTabsComponent,
    HomePageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
