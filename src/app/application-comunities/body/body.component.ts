import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Transaction } from 'src/app/Models/transaction';
import { Invoice } from 'src/app/Models/invoice';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  transactions: Transaction[];
  invoices: Invoice[];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getTransactions("xiaomi").subscribe(data => this.transactions = data);
    this.service.getInvoices("xiaomi").subscribe(data => this.invoices = data);
  }

}
