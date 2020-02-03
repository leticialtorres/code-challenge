import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HomeRestService } from './home-rest.service';
import { CharacterResponseModel } from '../integration/response/characters-response.model';
import { CharacterModel } from '../models/character.model';
import { CharacterMapper } from '../mapper/character.mapper';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	constructor(
		private rest: HomeRestService
	) { }

	getAllCharacters(): Observable<Array<CharacterResponseModel>> {
		return this.rest.getAllCharacters();
	}

	getCharacterById(id: string): Observable<CharacterModel> {
		return this.rest.getCharactersById(id).pipe(
			map(res => CharacterMapper.mapToCharacterModel(res.pop()))
		);
	}

}
