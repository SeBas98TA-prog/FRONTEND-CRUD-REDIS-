import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Persona } from 'src/app/Model/Persona';
import { __values } from 'tslib';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  personas:Persona[];
 
  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

  editar(persona:Persona):void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar"]);
  }

  delete(persona:Persona){
    this.service.deletePersona(persona).subscribe(__data=>{
      this.personas=this.personas.filter(persona=>persona!==persona);
      alert("Usuario eliminado");
    })
  }
}

