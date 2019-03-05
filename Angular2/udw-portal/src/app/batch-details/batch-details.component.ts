
import { Component, OnInit } from '@angular/core';
import {FormGroup,  FormBuilder, Validators, FormArray } from '@angular/forms';


import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
import { BatchDataService } from '../batch-data.service';

import { BatchRec } from '../batch-rec' ;
import { BatchRecords } from '../batch-records' ;


@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
  

export class BatchDetailsComponent implements OnInit {
   
  
  batchForm =  this.fb.group ({
    srNo: [ , Validators.required],
    btchNm: [],
    btchSts: []
  });
  
  batchRecs: any;
  myForm: FormGroup;
  
  btchFrm: FormGroup;
  
  cntrl:  FormArray;
 
  
  constructor( private fb: FormBuilder, public batchDataService: BatchDataService, private location: Location) { 
  
  	 
  
  	this.btchFrm = this.fb.group({
  		batchRecords: this.fb.array( [ ])
  	});
  	
  	this.cntrl = <FormArray>this.btchFrm.controls.batchRecords;

  	
  	
    this.myForm = this.fb.group({
    // you can also set initial formgroup inside if you like
    companies: this.fb.array([])
  	})
  
 }

addNewCompany() {
  let control = <FormArray>this.myForm.controls.companies;
  control.push(
    this.fb.group({
      company: [''],
      // nested form array, you could also add a form group initially
      projects: this.fb.array([])
    })
  )
}

deleteCompany(index) {
  let control = <FormArray>this.myForm.controls.companies;
  control.removeAt(index)
}

addNewProject(control) {
  control.push(
    this.fb.group({
      projectName: ['']
  }))
}

deleteProject(control, index) {
  control.removeAt(index)
}

  ngOnInit() {
    
 	this.getBatchRecords();
 
 
  }
   
  getBatchRecords(): void {   
  
  this.batchDataService.getBatchRecords(); 
    
  	this.batchDataService.getBatchRecords().subscribe( 	data => {this.batchRecs = data ; console.log(this.batchRecs); this.setBatchRecs(); } 
     													 ) ;
  	 
  } 
    setBatchRecs(): void {
    if ( this.batchRecs) {
    	var i: number;
		for ( i = 0 ; i < this.batchRecs.length ; i++) {
		 
			this.cntrl.push(
	  	  			this.fb.group ({
	    				srNo: [this.batchRecs[i].id , Validators.required],
	    				btchNm: [this.batchRecs[i].name],
	    				btchSts: [this.batchRecs[i].status],
	    				btchAge: [this.batchRecs[i].age]
	  				})
	  		
	  		);
	  	}
  	}
  	else {
  		console.log( " Empty Emp rec array " ); 
  	}
  }
} 
  