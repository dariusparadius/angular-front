import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Invoice } from 'src/app/Models/invoice';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  invoices: Invoice[];
  constructor(private service: ServiceService, private cookie: CookieService) { }
  form = new FormGroup({
    amount: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    expiry: new FormControl('', [Validators.required, Validators.pattern('^[0-3]?\d\/[0-1]?\d\/\d{2}(\d{2})*')]),
    description: new FormControl('', Validators.required),
  })

  filterInvoices = '';
  user = this.cookie.get("username");
  
  ngOnInit() {
    this.service.getInvoices(this.user).subscribe(data => this.invoices = data);
  }

  createInvoice() {
    this.service.createInvoice(this.form.value.amount,
      this.form.value.destination,
      this.form.value.expiry,
      this.form.value.description)
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

}
