import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatNativeDateModule,
MatDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDatepickerModule

  ]
})
export class MaterialModule { }
