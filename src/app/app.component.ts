import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-eslint';
  name:any;
 a = 5
 b = 10

 ngOnInit(){
  console.log(this.a);
 }

}
