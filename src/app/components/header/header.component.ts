import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show_menu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  redirect(name: string) {
    console.log(name);
  }

}
