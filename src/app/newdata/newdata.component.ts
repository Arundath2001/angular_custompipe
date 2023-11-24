import { Component } from '@angular/core';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.scss']
})
export class NewdataComponent {
  text = 'Goodmorning';
  value = 7869.2343;
  per = 0.23;
  Date = new Date();
}

