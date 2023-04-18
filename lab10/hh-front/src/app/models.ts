export class Company {
    id!: number;
    name!: string;
    description!: string;
    city!: string;
    address!: string;
    vacancies?: Vacancy[];
  }
  
  export class Vacancy {
    id!: number;
    name!: string;
    description!: string;
    salary!: number;
    company!: number;
  }
  