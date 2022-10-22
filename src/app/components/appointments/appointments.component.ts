import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { AppointmentData } from './../../models/data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }
  Appointments: AppointmentData[];
  AppointmentForm: FormGroup;
  modalMod: string;
  openedAppointment: AppointmentData;

  ngOnInit(): void {
    this.Appointments = this.dataService.GetAppointmentDatas();
    this.AppointmentForm = this.formBuilder.group({
      PatientName: '',
      DoctorName: '',
      Disease: '',
      Date: ''
    });
  }

  AddAppointmentButton() { 
    this.modalMod = 'add';
    this.ClearAppointmentForm();
  }
  AddUpdateAppointment() {
    switch (this.modalMod) {
      case 'add':
        this.AppointmentForm.value.id = this.dataService.GetAppointmentDatas().length + 1;
        this.dataService.AddAppointment(this.AppointmentForm.value);
        this.ClearAppointmentForm();
        break;
      case 'update':
        const appointmentControls = this.AppointmentForm.controls;
        for (const key in appointmentControls) {
          if (appointmentControls.hasOwnProperty(key)) {
            const control =appointmentControls[key];
            this.openedAppointment[key] = control.value;
          }
        }
        break;
    }
  }
  RemoveAppointment(appointment: AppointmentData) {
    const index = this.Appointments.indexOf(appointment);
    this.Appointments.splice(index, 1);
  }
  ClearAppointmentForm() {
    this.ControlSetValueLoop(undefined);
  }
  EditOpenModal(pati: AppointmentData) {
    this.modalMod = 'update';
    this.openedAppointment = pati;
    this.ControlSetValueLoop(pati);
  }
  ControlSetValueLoop(pati: AppointmentData) {
    const appointmentControls = this.AppointmentForm.controls;
    for (const key in appointmentControls) {
      if (appointmentControls.hasOwnProperty(key)) {
        const control = appointmentControls[key];
        if (pati === undefined) {
          control.setValue('');
        } else {
          control.setValue(pati[key]);
        }
      }
    }
  }

}
