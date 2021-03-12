import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger( 'enterTitle',[
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0,
      })),
      transition(':enter', [
        animate('1s ease-out', style({}))
      ])
    ]),
    trigger('enterText', [
      state('void', style({
        transform: 'translateX(50%)',
        opacity: 0,
      })),
      transition(':enter', [
        animate('1s 300ms ease-out', style({}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  title = 'edtech';
  
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
  }

  toServices(){
    document.getElementById("services")?.scrollIntoView({behavior: "smooth"});
  }

  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({behavior: "smooth"});
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
