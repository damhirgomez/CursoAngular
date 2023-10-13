import { Component } from '@angular/core';
import { Persona } from '../personas';

@Component({
	selector: 'app-bucles',
	templateUrl: './bucles.component.html',
	styleUrls: ['./bucles.component.css'],
})
export class BuclesComponent {
	personas: Persona[] = [
		{ nombre: 'Juan', edad: 25 },
		{ nombre: 'Ana', edad: 30 },
		{ nombre: 'Pedro', edad: 35 },
		{ nombre: 'María', edad: 40 },
	];
}
