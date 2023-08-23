import { Component } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';

const listPersonas: Persona[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
