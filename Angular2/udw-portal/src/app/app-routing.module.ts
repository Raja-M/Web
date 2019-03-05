import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';

const routes: Routes = [
   { path: 'batchdetails', component: BatchDetailsComponent },
  { path: '', redirectTo: '/batchdetails', pathMatch: 'full' },

];


@NgModule ({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }
