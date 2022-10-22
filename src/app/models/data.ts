export class PatientData {
    id: number;
    firstName: string;
    lastName: string;
    insurance: string;
    address: string;
    phoneNumber: string;
}
export class DoctorData {
    id: number;
    firstName: string;
    lastName: string;
    insurance: string;
    address: string;
    phoneNumber: string;
}

export class AppointmentData {
    id: number;
    PatientName: string;
    DoctorName: string;
    Disease: string;
    Date: string;
}

