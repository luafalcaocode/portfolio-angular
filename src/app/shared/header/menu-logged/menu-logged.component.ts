import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-logged',
  templateUrl: './menu-logged.component.html',
  styleUrls: ['./menu-logged.component.scss']
})
export class MenuLoggedComponent implements OnInit {
  private isMenuLoggedOpen: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  hideLoggedMenu() {
    this.isMenuLoggedOpen = false;
    document.getElementById('menuLogged').classList.add('fadeOut');
    document.getElementById('menuLogged').classList.remove('fadeIn');
  }

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
    window.scrollTo(0, 0);
  }

}