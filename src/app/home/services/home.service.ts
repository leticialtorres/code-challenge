import { Injectable } from '@angular/core';
import { HomeRestService } from './home-rest.service';
import { Observable } from 'rxjs';
import { CharactersResponseModel } from '../integration/response/characters-response.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	constructor(
		private rest: HomeRestService
	) { }

	getAllCaracters(): Observable<Array<CharactersResponseModel>> {
		return this.rest.getAllCaracters();
	}

}
