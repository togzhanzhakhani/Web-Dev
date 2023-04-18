import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../models';
import { Vacancy } from '../models';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company?: Company;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.companyService.getCompany(id).subscribe(company => {
        this.company = company;
        this.getCompanyVacancies(id);
      });
    });
  }

  getCompanyVacancies(id: number) {
    this.companyService.getCompanyVacancies(id).subscribe(vacancies => this.vacancies = vacancies);
  }
}


