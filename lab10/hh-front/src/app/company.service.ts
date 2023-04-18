import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './models';
import { Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies/`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}/`);
  }

  getCompanyVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${id}/vacancies/`);
  }
}
