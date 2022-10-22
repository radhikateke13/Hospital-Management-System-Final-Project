import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { DoctorData } from './../../models/data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }
  doctors: DoctorData[];
  DoctorForm: FormGroup;
  modalMod: string;
  openedDoctor: DoctorData;

  ngOnInit(): void {
    this.doctors = this.dataService.GetDoctorDatas();
    this.DoctorForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      insurance: '',
      phoneNumber: '',
      address: ''
    });
  }

  AddDoctorButton() {
    this.modalMod = 'add';
    this.ClearDoctorForm();
  }
  AddUpdateDoctor() {
    switch (this.modalMod) {
      case 'add':
        this.DoctorForm.value.id = this.dataService.GetDoctorDatas().length + 1;
        this.dataService.AddDoctor(this.DoctorForm.value);
        this.ClearDoctorForm();
        break;
      case 'update':
        const doctorControls = this.DoctorForm.controls;
        for (const key in doctorControls) {
          if (doctorControls.hasOwnProperty(key)) {
            const control = doctorControls[key];
            this.openedDoctor[key] = control.value;
          }
        }
        break;
    }
  }
  RemoveDoctor(doctor: DoctorData) {
    const index = this.doctors.indexOf(doctor);
    this.doctors.splice(index, 1);
  }
  ClearDoctorForm() {
    this.ControlSetValueLoop(undefined);
  }
  EditOpenModal(pati: DoctorData) {
    this.modalMod = 'update';
    this.openedDoctor = pati;
    this.ControlSetValueLoop(pati);
  }
  ControlSetValueLoop(pati: DoctorData) {
    const doctorControls = this.DoctorForm.controls;
    for (const key in doctorControls) {
      if (doctorControls.hasOwnProperty(key)) {
        const control = doctorControls[key];
        if (pati === undefined) {
          control.setValue('');
        } else {
          control.setValue(pati[key]);
        }
      }
    }
  }

}
