import { PatientComponent } from './components/patient/patient.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { DoctorComponent } from './components/doctor/doctor.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'doctor',
    component:DoctorComponent
  },
  {
    path: 'appointment',
    component:AppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
