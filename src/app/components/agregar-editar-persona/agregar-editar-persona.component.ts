import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit{

  tipoDocumento: string[] = ['CPF', 'CNH','RG'];
  form: FormGroup;


  constructor( 
    public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,
    private fb: FormBuilder){}

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

}
