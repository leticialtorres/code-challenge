import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharactersResponseModel } from '../integration/response/characters-response.model';

@Injectable({
	providedIn: 'root'
})
export class HomeRestService {

	constructor(
		private httpClient: HttpClient
	) { }


	getAllCaracters(): Observable<Array<CharactersResponseModel>> {
		return of({})
		.pipe( res => this.httpClient.get<Array<CharactersResponseModel>>(`${environment.apiURL}/characters`));
	}
}
