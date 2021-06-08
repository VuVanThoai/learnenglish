import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HighLightPipe} from './pipe/high-light.pipe';

@NgModule({
  declarations: [
    HighLightPipe
  ],
  exports: [
    HighLightPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
