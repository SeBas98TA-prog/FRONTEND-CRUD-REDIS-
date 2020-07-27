import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona:Persona;
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    let id=localStorage.getItem("id");
    this.service.getPersonaId(+id).subscribe(data=>{
      this.persona=data;
    })
  }

  actualizar(persona:Persona){
    this.service.updatePersona(persona).subscribe(data=>{
      this.persona=data;
      alert("Se actualizó con exito!");
      this.router.navigate(["listar"]);
    }) 
  }
}
