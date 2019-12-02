import { NgModule } from '@angular/core';
import { BaseSpinnerComponent } from './base-spinner.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [BaseSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [BaseSpinnerComponent]
})
export class BaseSpinnerModule { }
