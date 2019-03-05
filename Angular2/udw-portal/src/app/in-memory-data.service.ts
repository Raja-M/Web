import { Injectable } from '@angular/core';
import { BatchRec } from './batch-rec';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const BatchRecs = [
      { id: 1, name: 'ACI' , status: 'CF' , age: 2},
      { id: 2, name: 'COS_ADJD_MCE', status: 'Prebase', age: 2 },
      { id: 3, name: 'CDB', status: 'Security', age: 3 },
      { id: 4, name: 'NDB', status: 'Security', age: 3 },
      { id: 5, name: 'NIC', status: 'Security', age: 3 },
      { id: 6, name: 'UCR_ADJD_MCE', status: 'Security', age: 3 },
      { id: 7, name: 'NIC_FIN_CLM', status: 'Security', age: 3 },
      { id: 8, name: 'BRS_RVNU', status: 'Security', age: 3 },
      
    ];
    return { BatchRecs };
    
    
    
  }
 
  
  
}
