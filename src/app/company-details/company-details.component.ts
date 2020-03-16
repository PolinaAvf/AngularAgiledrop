import { Component, OnInit } from '@angular/core';
import { Company } from '../../companies';
import { ActivatedRoute } from '@angular/router';

import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
  providers: [CompanyService]
})
export class CompanyDetailsComponent implements OnInit {
  

    id: number;
    companies: Company[];
    events: Event[];
    private sub: any;

    prodIdSnapshot: number;
  
  constructor(private companyService: CompanyService, private route: ActivatedRoute) { 
    this.companies = companyService.getCompanies();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
      
  });
  }



}
