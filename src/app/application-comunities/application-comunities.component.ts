import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-comunities',
  templateUrl: './application-comunities.component.html',
  styleUrls: ['./application-comunities.component.css']
})
export class ApplicationComunitiesComponent implements OnInit {

  facturas: boolean;
  recibos: boolean;
  bancos: boolean;
  comunidades: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.facturas = this.router.url === '/facturas';
    this.bancos = this.router.url === '/bancos';
  }

}
