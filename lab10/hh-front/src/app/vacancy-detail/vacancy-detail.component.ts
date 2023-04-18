import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.css']
})
export class VacancyDetailComponent implements OnInit {
  vacancy?: Vacancy;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.vacancyService.getVacancy(id).subscribe(vacancy => this.vacancy = vacancy);
    });
  }

}
