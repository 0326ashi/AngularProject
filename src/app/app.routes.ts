import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistrationpageComponent } from './pages/registrationpage/registrationpage.component';


export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "registration", component: RegistrationpageComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
