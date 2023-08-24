import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';

const listPersonas: Persona[] = [
  {nombre: 'Alder Junio Santana da Costa', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'Wenderson', apellido: 'Moreno', correo: "wenderson@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'Carlos', apellido: 'Neo', correo: "carlos@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'Terezinha', apellido: 'Oliveira', correo: "tneo@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'Clayton', apellido: 'Paz', correo: "pazco@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'Alex', apellido: 'Teobaldo', correo: "leleco@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()},
  {nombre: 'Alder Junio Santana da Costa', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'Wenderson', apellido: 'Moreno', correo: "wenderson@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'Carlos', apellido: 'Neo', correo: "carlos@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'Terezinha', apellido: 'Oliveira', correo: "tneo@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'Clayton', apellido: 'Paz', correo: "pazco@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'Alex', apellido: 'Teobaldo', correo: "leleco@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()},
  {nombre: 'Alder Junio Santana da Costa', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'Wenderson', apellido: 'Moreno', correo: "wenderson@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'Carlos', apellido: 'Neo', correo: "carlos@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'Terezinha', apellido: 'Oliveira', correo: "tneo@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'Clayton', apellido: 'Paz', correo: "pazco@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'Alex', apellido: 'Teobaldo', correo: "leleco@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()},
  {nombre: 'Alder Junio Santana da Costa', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'Wenderson', apellido: 'Moreno', correo: "wenderson@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'Carlos', apellido: 'Neo', correo: "carlos@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'Terezinha', apellido: 'Oliveira', correo: "tneo@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'Clayton', apellido: 'Paz', correo: "pazco@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'Alex', apellido: 'Teobaldo', correo: "leleco@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()},
  {nombre: 'Alder Junio Santana da Costa', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'Wenderson', apellido: 'Moreno', correo: "wenderson@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'Carlos', apellido: 'Neo', correo: "carlos@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'Terezinha', apellido: 'Oliveira', correo: "tneo@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'Clayton', apellido: 'Paz', correo: "pazco@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'Alex', apellido: 'Teobaldo', correo: "leleco@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()},
  {nombre: 'Alder Junio Santana da Costa', apellido: 'Costa', correo: "alder@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'Wenderson', apellido: 'Moreno', correo: "wenderson@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'Carlos', apellido: 'Neo', correo: "carlos@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'Terezinha', apellido: 'Oliveira', correo: "tneo@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'Clayton', apellido: 'Paz', correo: "pazco@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'Alex', apellido: 'Teobaldo', correo: "leleco@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()},
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'tipoDocumento', 'documento','fechaNacimiento'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
