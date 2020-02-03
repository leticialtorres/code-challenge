import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HomeRestService } from './home-rest.service';
import { CharacterModel } from '../models/character.model';
import { CharacterMapper } from '../mapper/character.mapper';

@Injectable({
	providedIn: 'root'
})
export class HomeService {

	constructor(
		private rest: HomeRestService
	) { }

	getAllCharacters(): Observable<Array<CharacterModel>> {
		return this.rest.getAllCharacters().pipe(
			map(res => CharacterMapper.mapToArrayCharacterModel(res))
		);
	}

	getCharacterById(id: string): Observable<CharacterModel> {
		return this.rest.getCharactersById(id).pipe(
			map(res => CharacterMapper.mapToCharacterModel(res.pop()))
		);
	}

}
