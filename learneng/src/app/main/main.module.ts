import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WordMemoriedComponent } from './word-memoried/word-memoried.component';
import {SharedModule} from './shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    WordMemoriedComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
