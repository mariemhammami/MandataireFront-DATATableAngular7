import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  URL = 'http://127.0.0.1:8000/annonces/';

  constructor(private http: HttpClient, private router: Router) { }
  getAnnonces():any {
    return this.http.get(this.URL);
    console.log(this.http.get(this.URL));
  }

}
