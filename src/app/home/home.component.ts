import { Component, OnInit } from '@angular/core';

import { HomeService } from './services/home.service';
import { CharacterModel } from './models/character.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	characters: Array<CharacterModel>;
	infoMessage: string;

	constructor(
		private service: HomeService
	) {}

	ngOnInit() {
		this.setLoadingMessage();
		this.getAllCaracters();
	}

	getAllCaracters(): void {
		this.service.getAllCharacters().subscribe(res => {
			this.characters = res;
		}, err => {
			this.characters = null;
			this.infoMessage = `Error featching records - ${err.message}`;
		});
	}

	isCharactersLoaded(): boolean {
		return !!this.characters;
	}

	setClassDeadOrAlive(dead: string): string {
		return dead.toLowerCase();
	}

	setLoadingMessage(): void {
		this.infoMessage = 'Loading...';
	}
}
