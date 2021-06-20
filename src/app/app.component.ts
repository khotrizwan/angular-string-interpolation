import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular String Interpolation Example';
  count = 0;
  i = 0;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.title);
    
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.countFn(this.count + 1)
      }, 1000);
    
  }

  countFn (count: any): any {
    this.count = count;
    console.log(count);
    if(count < 10) {
      setTimeout(()=>{                           //<<<---using ()=> syntax
        this.countFn(this.count + 1)
      }, 1000);
    }
  }

  
}
