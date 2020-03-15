import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../../companies';
@Pipe({
    
    name: 'selectedCompany'
})
export class SelectedCompanyPipe implements PipeTransform {
    transform(allCompanies: Company[], companyId: number): any {
        return allCompanies.filter(p => p.nid === companyId);
        
    }
}