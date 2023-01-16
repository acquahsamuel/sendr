import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';



@NgModule({
    exports :[
        StepsModule,
        ToastModule
    ],
    imports : []
})

export class NgPrimeModule{}