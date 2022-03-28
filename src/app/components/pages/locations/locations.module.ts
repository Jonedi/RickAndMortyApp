import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ LocationDetailsComponent ],
  imports: [ CommonModule, RouterModule ],
  exports: [ LocationDetailsComponent ]
})
export class LocationsModule { }
