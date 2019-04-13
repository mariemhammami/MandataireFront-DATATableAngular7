import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MandataireService {
  URL = 'http://127.0.0.1:8000/mandataires/test';

  constructor(private http: HttpClient, private router: Router) { }

  public getMandataireID(id) {
    return this.http.get(`${this.URL}/${id}`);
  }


}
