import { Component, OnInit } from '@angular/core';

import { CharacterResponseModel } from './integration/response/characters-response.model';
import { HomeService } from './services/home.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	characters: Array<CharacterResponseModel>;

	constructor(private service: HomeService) {}

	ngOnInit() {
		this.getAllCaracters();
	}

	getAllCaracters(): void {
		this.service.getAllCharacters().subscribe(res => {
			this.characters = res.slice(0, 8);
		});
	}

	charactersLoaded(): boolean {
		return !!this.characters;
	}

	isDead(dead: string): string {
		return dead;
	}
}
