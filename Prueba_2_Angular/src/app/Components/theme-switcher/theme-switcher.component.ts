import { Component, OnInit } from '@angular/core';
import { faSun, faMoon, faImages } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor() {}
  faSun = faSun;
  faMoon = faMoon;
  faImages = faImages;
  switcher_theme = false;
  sw_them = [
    {current_theme: "Ligth Theme"},
    {current_theme: "Dark Theme"}
  ]

  sw = "switcher_button";



  CambiarTema(){
    this.switcher_theme = !this.switcher_theme;
    var cuerpo = document.getElementById('page');
    var titulo = document.getElementById('titulo');

    if(this.switcher_theme == true){
      cuerpo?.classList.remove('tema--claro');
      cuerpo?.classList.add('tema--oscuro');
      titulo?.classList.add('tema--oscuro');

    }else{
      cuerpo?.classList.remove('tema--oscuro');
      cuerpo?.classList.add('tema--claro');
      titulo?.classList.remove('tema--oscuro');

    }


  }

  ngOnInit(): void {
  }



}
