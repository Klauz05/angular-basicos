import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
heroes: string[]=['Spiderman','Ironman','Thor','Hulk','Vision'];
heroesBorrados:string='';
estado:boolean=false;
borrarHeroe(){
  console.log('Borrando.....')
  this.heroesBorrados=this.heroes.shift()||'';
  
}


}
