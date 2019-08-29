import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html'
})
export class ListasComponent implements OnInit {
@Input() terminada = true;

  constructor( private deseosService : DeseosService,
    private router : Router) { }

  ngOnInit() {}

  listaSeleccionada(lista : Lista){
  
    this.terminada ? 
    this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`) :
    this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`)


  }
}
