import { Injectable } from '@angular/core';
import { COMPANIES } from '../../companies';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() {}
    getCompanies() {
        return COMPANIES;
    }
}
