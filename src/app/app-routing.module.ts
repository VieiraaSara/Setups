import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewSetupComponent } from './components/pages/new-setup/new-setup.component';
import { SetupComponent } from './components/pages/setup/setup.component';
import { EditSetupComponent } from './components/pages/edit-setup/edit-setup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'setups/new', component: NewSetupComponent},
  { path: 'setups/edit/:id', component: EditSetupComponent},  
  { path: 'setups/:id', component: SetupComponent},
  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
