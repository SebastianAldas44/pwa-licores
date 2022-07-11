import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class LicoresService
{
    private url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = environment.apiUrl;
    }

    getBebidasByCategorias(categoria: string): Observable<any>
    {
        return this._http.get(`${this.url}//filter.php?c=${categoria}`);
    }

    getBebidasByAlcohol(alcohol: string): Observable<any>
    {
        return this._http.get(`${this.url}/filter.php?a=${alcohol}`);
    }

    getBebidasById(id: string): Observable<any>
    {
        return this._http.get(`${this.url}/lookup.php?i=${id}`);
    }
}