import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

const listPersonas: Persona[] = [
  {nombre: 'Alder', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent {
  displayedColumns: string[] = ['nombre'];
  dataSource = listPersonas;
}
