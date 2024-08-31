import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  a=0
  b=0
  s=0

  private faSuma(){
    this.s=this.a+this.b
  }

  numar1Schimbat(v:number){
    this.a=v
    this.faSuma()
  }  
  numar2Schimbat(v:number){
    this.b=v
    this.faSuma()
  }
}
