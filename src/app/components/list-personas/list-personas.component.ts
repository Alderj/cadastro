import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonaComponent } from '../agregar-editar-persona/agregar-editar-persona.component';

const listPersonas: Persona[] = [
  {nombre: 'nome1', apellido: 'nome1', correo: "email1@gmail.com", tipoDocumento: "CPF", documento: 5522, fechaNacimiento: new Date()},
  {nombre: 'nome2', apellido: 'nome2', correo: "email2@gmail.com", tipoDocumento: "CPF", documento: 2922, fechaNacimiento: new Date()},
  {nombre: 'nome3', apellido: 'nome3', correo: "email3@gmail.com", tipoDocumento: "CPF", documento: 1875, fechaNacimiento: new Date()},
  {nombre: 'nome4', apellido: 'nome4', correo: "email4@gmail.com", tipoDocumento: "CPF", documento: 8963, fechaNacimiento: new Date()},
  {nombre: 'nome5', apellido: 'nome5', correo: "email5@gmail.com", tipoDocumento: "CPF", documento: 1514, fechaNacimiento: new Date()},
  {nombre: 'nome6', apellido: 'nome6', correo: "email6@gmail.com", tipoDocumento: "CPF", documento: 1985, fechaNacimiento: new Date()}, 
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['nombre', 'apellido', 'correo',
   'tipoDocumento', 'documento','fechaNacimiento', 'acciones'];
  dataSource: MatTableDataSource<Persona>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(public dialog: MatDialog){
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort; 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditPersona(){
    const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
      width: '550px',
      disableClose: true
    });
  }
}
