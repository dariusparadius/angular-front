import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Models/transaction';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Invoice } from '../Models/invoice';
import Swal from 'sweetalert2';
import { Cuenta } from '../Models/account';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) { }

  URL = 'http://localhost:8080/transaction';

  URL_login = 'http://localhost:8080/user';

  URL_register = 'http://localhost:8080/user/create';

  URL_Invoice = "http://localhost:8080/invoice";

  URL_Invoice_create = "http://localhost:8080/invoice/create";

  URL_Get_Account = "http://localhost:8080/account"

  URL_Create_Account = "http://localhost:8080/account/create"

  getTransaction(id: number) {
    return this.http.get<Transaction>(`${this.URL}/${id}`)
  }

  getAccount(id: number) {
    return this.http.get<Cuenta>(`${this.URL_Get_Account}/${id}`);
  }

  createAccount(iban:String, username:String){
    return this.http.post(this.URL_Create_Account,{
      iban: iban,
      username: username
    });
  }

  getTransactions(user_id: string) {
    return this.http.get<Transaction[]>(`${this.URL}/${user_id}`)
  }

  getCurrentUser() {
    let user = this.cookie.get("userId");
    if (user != null) {
      return user;
    } else {
      return null;
    }
  }

  getInvoices(username: string) {
    return this.http.get<Invoice[]>(`${this.URL_Invoice}/${username}`)
  }

  createInvoice(amount: string, destination: string, expiry: string, description: string) {
    return this.http.post(this.URL_Invoice_create, {
      amount: amount,
      destination: destination,
      expiry: expiry,
      description: description
    });
  }

  login(username: string, password: string) {
    return this.http.post(this.URL_login, {
      username: username,
      password: password
    });
  }

  register(username: string, password: string, email: string) {
    return this.http.post(this.URL_register, {
      username: username,
      password: password,
      email: email
    })
  }

  logout() {
    Swal.fire({
      type: 'success',
      title: 'Adiós',
      text: 'Esperamos que tengas un buen día!',
      timer: 2500,
      showConfirmButton: false,
    })
    this.cookie.delete("userId")
    this.router.navigate(["login"]);
  }
}
