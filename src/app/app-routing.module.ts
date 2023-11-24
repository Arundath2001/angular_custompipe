import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { NewdataComponent } from './newdata/newdata.component';
const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newdata', component: NewdataComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
