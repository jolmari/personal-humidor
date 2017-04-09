import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyHumidorComponent } from './my-humidor.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MyHumidorComponent },
  ])],
  exports: [RouterModule]
})

export class MyHumidorRouting {}
