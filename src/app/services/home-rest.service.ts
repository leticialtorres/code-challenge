import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HomeRestService {

	constructor(
		private httpClient: HttpClient
	) { }


	getAllCaracters(): Observable<any[]> {
		return of({})
		.pipe( res => this.httpClient.get<any[]>(`${environment.apiURL}/characters`));
	}
}
