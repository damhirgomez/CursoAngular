import { Component } from '@angular/core';

@Component({
	selector: 'app-formulario',
	templateUrl: './formulario.component.html',
	styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
	mostrarAlerta: boolean = false;
	mostrarEnConsola(name: string) {
		console.log(name);
		this.mostrarAlerta = !this.mostrarAlerta;
		name = '';
	}
}
