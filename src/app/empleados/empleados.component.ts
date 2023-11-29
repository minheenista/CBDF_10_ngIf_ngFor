import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {
  empleados = [
    {
      id: 1,
      nombre: 'Juan',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: true,
    },
    {
      id: 2,
      nombre: 'María',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: true,
    },
    {
      id: 3,
      nombre: 'Juan',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: true,
    },
    {
      id: 4,
      nombre: 'María',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: true,
    },
    {
      id: 5,
      nombre: 'Juan',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: false,
    },
    {
      id: 6,
      nombre: 'María',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: false,
    },
    {
      id: 7,
      nombre: 'Juan',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: false,
    },
    {
      id: 8,
      nombre: 'María',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: false,
    },
    {
      id: 9,
      nombre: 'Juan',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: true,
    },
    {
      id: 10,
      nombre: 'María',
      apellidos: 'García Pérez',
      sueldo: 55654,
      estado: true,
    },
  ];
}
