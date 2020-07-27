import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
//import { __values } from 'tslib';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  persona:Persona=new Persona();
  ngOnInit(){

  }

  guardar(){
    this.service.createPersona(this.persona)
    .subscribe(__data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
