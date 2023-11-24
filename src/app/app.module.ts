import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewdataComponent } from './newdata/newdata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CustompipePipe } from './custompipe.pipe';
import { ChangelinkDirective } from './changelink.directive';
@NgModule({
  declarations: [
    AppComponent,
    NewdataComponent,
    NavbarComponent,
    HomeComponent,
    StudentComponent,
    CustompipePipe,
    ChangelinkDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
