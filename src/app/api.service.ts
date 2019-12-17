import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signataire } from './signataire';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "https://alternative-antibesjuanlespins.fr";
  constructor(private httpClient: HttpClient) { }

  readSignataires(): Observable<Signataire[]>{ return this.httpClient.get<Signataire[]>(`${this.PHP_API_SERVER}/phpapi/get`); }
  createSignataire(signataire: Signataire): Observable<Signataire>{ return this.httpClient.post<Signataire>(`${this.PHP_API_SERVER}/phpapi/insert`, signataire); }
}
