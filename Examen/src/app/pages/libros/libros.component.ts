import { Component, OnInit } from '@angular/core';
import { libros } from '../../interface/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  libros=libros;
  libro:any;

  constructor() {
  }

  ngOnInit(): void {
  }



}
