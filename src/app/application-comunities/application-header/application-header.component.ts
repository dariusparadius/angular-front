import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.css']
})
export class ApplicationHeaderComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  logOut() {
    this.service.logout();
  }

}
