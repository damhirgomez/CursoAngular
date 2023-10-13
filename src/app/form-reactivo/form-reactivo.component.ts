import { Component } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-form-reactivo',
	templateUrl: './form-reactivo.component.html',
	styleUrls: ['./form-reactivo.component.css'],
})
export class FormReactivoComponent {
	constructor(private fb: FormBuilder) {}

	name = new FormControl('', Validators.required);
	email = new FormControl('', [Validators.required, Validators.email]);

	formUser = this.fb.group({
		name: this.name,
		email: this.email,
	});
	enviarDatos() {
		console.log(this.formUser.value);
	}
}
