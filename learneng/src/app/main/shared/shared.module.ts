import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WordComponent} from './word/word.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from '../../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    WordComponent,
    LeftNavBarComponent,
    HeaderComponent
  ],
  exports: [
    LeftNavBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    RouterModule
  ]
})
export class SharedModule { }
