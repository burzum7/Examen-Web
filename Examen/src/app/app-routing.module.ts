import { MensajeEnviadoComponent } from './pages/mensaje-enviado/mensaje-enviado.component';
import { QuejasComponent } from './pages/quejas/quejas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LibrosComponent } from './pages/libros/libros.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'libros', component: LibrosComponent},
  { path: 'quejas', component: QuejasComponent},
  { path: 'mensajeEnviado', component: MensajeEnviadoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
