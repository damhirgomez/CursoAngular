import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { Botones2Component } from './botones2/botones2.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactivoComponent } from './form-reactivo/form-reactivo.component';
@NgModule({
	declarations: [
		AppComponent,
		ContadorComponent,
		BotonesComponent,
		Botones2Component,
		FormularioComponent,
		BuclesComponent,
		SwitchComponent,
		Formulario2Component,
  FormReactivoComponent,
	],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
