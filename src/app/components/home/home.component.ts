import { DataService } from './../../services/data.service';
import { AppointmentData, DoctorData, PatientData } from './../../models/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patients: PatientData[];
  appointments: AppointmentData[];
  doctors:DoctorData[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.patients = this.dataService.GetPatientDatas();
    this.appointments = this.dataService.GetAppointmentDatas();
    this.doctors = this.dataService.GetDoctorDatas();
  }

}

