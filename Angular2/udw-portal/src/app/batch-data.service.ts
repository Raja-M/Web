
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BatchRec } from './batch-rec';
import { BatchRecords } from './batch-records';

import { Observable, of } from 'rxjs' ;
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
    							'Access-Control-Allow-Origin' : '*'
    						 })
};

@Injectable({
  providedIn: 'root'
})
export class BatchDataService {
  

  response: any;
  
  constructor(private messageservice: MessageService, private http: HttpClient) { }

  //private BatchrecUrl = 'api/BatchRecs';
  
  //private BatchrecUrl = '/assets/data/BatchDetail.json';
  
  getBatchRecords(): Observable<any> {


    this.messageservice.add( 'Batch Service: fetched Batches');
    
   this.http.get('http://localhost:8080/BatchRecs')
	.subscribe( (response) => { this.response = response;
	console.log(this.response); }
	);
	
    return this.http.get<any>('http://localhost:8080/BatchRecs')
      .pipe( tap (_ => this.log('fetched Batch records')), 
             catchError(this.handleError( 'getBatchRecords' , [] ))
           ) ;
	

  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  
  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageservice.add(`Batch Service: ${message}`);
}
}