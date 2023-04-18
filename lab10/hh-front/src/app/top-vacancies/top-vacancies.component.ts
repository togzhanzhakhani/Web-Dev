import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-top-vacancies',
  templateUrl: './top-vacancies.component.html',
  styleUrls: ['./top-vacancies.component.css']
})
export class TopVacanciesComponent implements OnInit {
  vacancies?: Vacancy[];

  constructor(private route: ActivatedRoute,
    private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.vacancyService.getTopVacancies().subscribe(vacancies => this.vacancies = vacancies);
  }
}

