import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { SettingsComponent } from './multi-step/settings/settings.component';
import { ContentComponent } from './multi-step/content/content.component';
import { PreviewComponent } from './multi-step/preview/preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';


@NgModule({
  declarations: [
    MultiStepComponent,
    SettingsComponent,
    ContentComponent,
    PreviewComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ]
})
export class DashboardModule { }
