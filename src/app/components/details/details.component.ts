import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicoresService } from '../../services/licores.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css'],
	providers: [LicoresService]
})
export class DetailsComponent implements OnInit {
	bebida: any;
	ingredientes: string[];
	
	constructor(
		private _licoresService: LicoresService,
		private _router: Router,
		private _route: ActivatedRoute
	){
		this.ingredientes = [];
	}

	ngOnInit(): void {
		this._route.params.subscribe((param: any) => {
			this.getBebida(param?.id);
		});
	}

	getBebida(id: string): void
	{
		this._licoresService.getBebidasById(id).subscribe((res: any) => {
			this.ingredientes = [];
			if (res?.drinks?.length > 0) {
				this.bebida = res.drinks[0];
				for (let index = 0; index < 15; index++) {
					if (res.drinks[0][`strIngredient${index + 1}`])
						this.ingredientes.push(res.drinks[0][`strIngredient${index + 1}`]);
				}
			} else {
				this._router.navigate(['/']);
			}
		}, (error: any) => console.log(error));
	}
}
