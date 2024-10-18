import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{
  newAppointmentTitle: string = "";
  newAppoinmentDate: Date = new Date();

  appointments : Appointment[] = [];

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppoinmentDate){
      let newappointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppoinmentDate
      }
      this.appointments.push(newappointment);      
      this.newAppointmentTitle = '';
      this.newAppoinmentDate = new Date();
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }
  deleteAppointment(i:number){
    this.appointments.splice(i,1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
