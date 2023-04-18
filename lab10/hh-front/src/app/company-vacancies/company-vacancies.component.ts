import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../models';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit {
  companyId?: number;
  vacancies?: Vacancy[];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.companyId = +params.get('id')!;
      this.getCompanyVacancies();
    });
  }

  getCompanyVacancies(): void {
    this.companyService.getCompanyVacancies(this.companyId!)
      .subscribe(vacancies => this.vacancies = vacancies);
  }
}

