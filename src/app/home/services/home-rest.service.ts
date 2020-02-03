import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CharacterResponseModel } from '../integration/response/characters-response.model';

@Injectable({
	providedIn: 'root'
})
export class HomeRestService {

	constructor(
		private httpClient: HttpClient
	) { }


	getAllCharacters(): Observable<Array<CharacterResponseModel>> {
		return of({})
		.pipe( res => this.httpClient.get<Array<CharacterResponseModel>>(`${environment.apiURL}/characters`));
	}

	getCharactersById(id: string): Observable<Array<CharacterResponseModel>> {
		return of({})
		.pipe( res => this.httpClient.get<Array<CharacterResponseModel>>(`${environment.apiURL}/characters/${id}`));
	}
}
