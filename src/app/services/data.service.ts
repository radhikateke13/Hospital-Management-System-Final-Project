import { AppointmentData, PatientData, DoctorData } from './../models/data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  patientData: PatientData[] = this.GetExampleJSON().patientRecords;
  doctorData: DoctorData[] = this.GetExampleJSON().doctorRecords;
  appointmentData:AppointmentData[] = this.GetExampleJSON().appointmentRecords;

  GetExampleJSON() {
    const exampleJSON = {
      patientRecords: [
        { id: 1, firstName: 'Haris', lastName: 'Bin Talat', insurance: '3323', address: 'abc address', phoneNumber: '2423423442' },
        { id: 2, firstName: 'Hassan', lastName: 'Abrar', insurance: '3223', address: 'abc address', phoneNumber: '2423423442' },
        { id: 3, firstName: 'Hassan', lastName: 'Abdullah', insurance: '24302', address: 'abc address', phoneNumber: '2423423442' },
        { id: 4, firstName: 'Ali', lastName: 'Hassan', insurance: '210427', address: 'abc address', phoneNumber: '2423423442' },
        { id: 5, firstName: 'Abdullah', lastName: 'Ahmad', insurance: '238989', address: 'abc address', phoneNumber: '2423423442' },
        { id: 6, firstName: 'Jahanzaib', lastName: 'Khan', insurance: '12123', address: 'abc address', phoneNumber: '2423423442' }
      ],
      appointmentRecords: [
        { id: 1, PatientName: 'Haris', DoctorName: 'Bin Talat', Disease: 'Some disease', Date: 'abc address' },
        { id: 2, PatientName: 'Alishba', DoctorName: 'Abrar', Disease: 'Some disease', Date: 'abc address' },
        { id: 3, PatientName: 'Hassan', DoctorName: 'Ali', Disease: 'Some disease', Date: 'abc address' },
        { id: 4, PatientName: 'Shariq', DoctorName: 'Bin Talat', Disease: 'Some disease', Date: 'abc address' }
      ],
      doctorRecords: [
        { id: 1, firstName: 'DR.Haris', lastName: 'Bin Talat', insurance: '911', address: 'abc address', phoneNumber: '2423423442' },
        { id: 2, firstName: 'DR.Shariq', lastName: 'Bin Talat', insurance: '3323', address: 'abc address', phoneNumber: '2423423442' }
      ]
    };
    return exampleJSON;
  }
  

  GetPatientDatas() {
    return this.patientData;
  }
  AddPatient(newPatient: PatientData) {
    this.patientData.push(newPatient);
  }
  GetDoctorDatas() {
    return this.doctorData;
  }
  AddDoctor(newDoctor: DoctorData) {
    this.doctorData.push(newDoctor);
  }

  GetAppointmentDatas() {
    return this.appointmentData;
  }
  AddAppointment(newAppointment: AppointmentData) {
    this.appointmentData.push(newAppointment);
  }
}
