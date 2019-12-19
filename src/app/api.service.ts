import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInfo } from './contactinfo';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "https://alternative-antibesjuanlespins.fr";
  constructor(private httpClient: HttpClient) { }

  // readSignataires(): Observable<ContactInfo[]>{ return this.httpClient.get<ContactInfo[]>(`${this.PHP_API_SERVER}/phpapi/get`); }
  envoyer(contactinfo: ContactInfo): Observable<ContactInfo>{ return this.httpClient.post<ContactInfo>(`${this.PHP_API_SERVER}/phpapi/insert`, contactinfo); }
}
