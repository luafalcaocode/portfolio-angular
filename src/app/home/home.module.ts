import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReusableModule } from '../reusable/reusable.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReusableModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
