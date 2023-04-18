import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}
