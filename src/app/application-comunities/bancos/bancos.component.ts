import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { CookieService } from 'ngx-cookie-service';
import { Cuenta } from 'src/app/Models/account';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit {

  cuenta: Cuenta;
  constructor(private service: ServiceService) { }
  form = new FormGroup({
    iban: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required)
  })

  createAccount() {
    this.service.createAccount(this.form.value.iban,
      this.form.value.username)
      .subscribe(
        correct => {
          Swal.fire({
            type: 'success',
            title: 'Factura creada correctamente',
            timer: 2000,
            showConfirmButton: false,
          })
        },
        error => {
          Swal.fire({
            type: 'error',
            title: 'Factura creada erroneamente',
            text: 'Revisa que este todo correctamente',
            timer: 2500,
            showConfirmButton: false,
          })
        }
      );
  }

  ngOnInit() {
    this.service.getAccount(6247)
      .subscribe((data: Cuenta) => this.cuenta = {
        username: data['username'],
        iban: data['iban']
      });
  }

}
