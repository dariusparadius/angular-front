import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { Register } from '../Models/register';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  ngOnInit() {
  }

  Register() {
    this.service.register(this.form.value.email, this.form.value.password, this.form.value.username).subscribe(
      user => {
        Swal.fire({
          type: 'success',
          title: 'Usuario registrado correctamente',
          timer: 2500,
          showConfirmButton: false,
        })
      },
      error => console.log(error)
    );
  }

}
