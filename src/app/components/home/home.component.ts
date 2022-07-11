import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicoresService } from '../../services/licores.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [LicoresService]
})
export class HomeComponent implements OnInit {
	showCategorias: boolean;
	bebidas: any[];

	constructor(
		private _licoresService: LicoresService,
		private _router: Router
	) {
		this.showCategorias = false;
		this.bebidas = [];
	}

	ngOnInit(): void {
	}

	getBebidas(tipo: string, nombre: string): void
	{
		if (tipo === 'a')
			this.getBebidasPorAlcohol(nombre);
		else
			this.getBebidasPorCategoria(nombre);
	}

	getBebidasPorCategoria(nombre: string): void
	{
		this._licoresService.getBebidasByCategorias(nombre).subscribe((res: any) => {
			if (res?.drinks?.length > 0) {
				this.showCategorias = true;
				this.bebidas = res.drinks;
			} else {
				this.bebidas = [];
			}
		}, error => console.log(error));
	}

	getBebidasPorAlcohol(nombre: string): void
	{
		this._licoresService.getBebidasByAlcohol(nombre).subscribe((res: any) => {
			if (res?.drinks?.length > 0) {
				this.showCategorias = true;
				this.bebidas = res.drinks;
			} else {
				this.bebidas = [];
			}
		}, error => console.log(error));
	}

	getBebida(id: string): void
	{
		this._router.navigate(['/', id]);
	}
}
