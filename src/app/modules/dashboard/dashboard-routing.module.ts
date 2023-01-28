import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './multi-step/settings/settings.component';
import { PreviewComponent } from './multi-step/preview/preview.component';
import { ContentComponent } from './multi-step/content/content.component';
import { MultiStepComponent } from './multi-step/multi-step.component';


const routes: Routes = [
  { path: '', component: MultiStepComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'content', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
