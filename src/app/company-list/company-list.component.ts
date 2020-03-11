import { Component, OnInit } from '@angular/core';
import { Company } from '../../companies';
import { CompanyService } from '../services/company.service'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [ CompanyService]
})
export class CompanyListComponent implements OnInit {

  companies: Company[];
  constructor(companyService: CompanyService) {
    this.companies = companyService.getCompanies();
   }

  ngOnInit(): void {
  }

}
