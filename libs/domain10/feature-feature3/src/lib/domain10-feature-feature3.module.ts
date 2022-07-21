import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Domain10DomainModule } from '@demo/domain10/domain';
import { Feature3Component } from './feature3.component';

@NgModule({
  imports: [CommonModule, Domain10DomainModule],
  declarations: [Feature3Component],
  exports: [Feature3Component],
})
export class Domain10FeatureFeature3Module {}
