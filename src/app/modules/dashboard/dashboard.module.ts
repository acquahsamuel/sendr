import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { SettingsComponent } from './multi-step/settings/settings.component';
import { ContentComponent } from './multi-step/content/content.component';
import { PreviewComponent } from './multi-step/preview/preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    MultiStepComponent,
    SettingsComponent,
    ContentComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
