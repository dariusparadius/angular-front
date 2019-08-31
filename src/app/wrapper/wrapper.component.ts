import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  login: boolean;
  howorks: boolean;
  signup: boolean;
  about: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.login = this.router.url === '/login';
    this.howorks = this.router.url === '/how-works';
    this.signup = this.router.url === '/signup';
    this.about = this.router.url === '/about';
  }

}
