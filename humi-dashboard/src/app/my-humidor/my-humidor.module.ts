import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHumidorRouting } from './my-humidor-routing.module';
import { MyHumidorComponent } from './my-humidor.component';

@NgModule({
  imports: [
    CommonModule,
    MyHumidorRouting
  ],
  declarations: [
    MyHumidorComponent
  ]
})
export class MyHumidorModule { }
