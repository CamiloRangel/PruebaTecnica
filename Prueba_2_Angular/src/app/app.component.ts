import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba_2_Angular';

  CambiarTema(){
    var cuerpo = document.getElementById('page');
    if(cuerpo == null){
      console.log("null");

    }else{
      cuerpo.classList.add('oscuro');
    }

  }
}
