import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {GlobalModule} from '../global/global.module';

@NgModule({
  imports: [
      CommonModule,
      GlobalModule,
    RouterModule.forChild([
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class WildcardRoutingModule { }
