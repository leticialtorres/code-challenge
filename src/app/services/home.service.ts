import { Injectable } from '@angular/core';
import { HomeRestService } from './home-rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

	constructor(
		private rest: HomeRestService
	) { }

	getAllCaracters(): Observable<any[]> {
		return this.rest.getAllCaracters();
	}

}
