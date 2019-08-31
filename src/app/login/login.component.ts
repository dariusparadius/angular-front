import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Login } from '../Models/login';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  htmlStr: string;
  class_css: string

  constructor(private router: Router, private service: ServiceService, private cookie: CookieService) { }

  user: Login = {
    username: "",
    password: ""
  };


  ngOnInit() {
  }

  Login() {
    this.service.login(this.user.username, this.user.password).subscribe(
      user => {
        Swal.fire({
          type: 'success',
          title: 'Bienvenido',
          text: 'Disfruta de tu aplicación!',
          showConfirmButton: false,
          timer: 2000,
        })
        this.cookie.set("userId", "9874564")
        this.cookie.set("username", this.user.username)
        this.router.navigate(["application"]);
      },
      error => {
        this.htmlStr = '<strong>Usuario o contraseña erroneos</strong><br> Te has olvidado de la contraseña? dale <a href="/facturas">aquí</a>'
        this.class_css = "p-3 mb-2 bg-danger text-white text-center"
      }
    );
  }



}
