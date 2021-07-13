import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {
  quejas: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.quejas = this.formBuilder.group({
      nya: ['', Validators.required],
      pais: ['', Validators.required],
      mensaje: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.quejas.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.quejas.invalid) {
        return;
    }

    this.router.navigate(['mensajeEnviado']);
}

}
