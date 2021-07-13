import { Component, OnInit } from '@angular/core';
import { libros } from 'src/app/interface/libros';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  libros=libros;
  libro:any;

  constructor() { }

  ngOnInit(): void {
  }

}
