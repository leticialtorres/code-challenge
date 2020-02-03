import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { CharacterModel } from '../home/models/character.model';
import { HomeService } from '../home/services/home.service';

@Component({
	selector: 'app-character-detail',
	templateUrl: './character-detail.component.html',
	styleUrls: ['./character-detail.component.sass']
})
export class CharacterDetailComponent implements OnInit {
	character: CharacterModel;
	infoMessage: string = "";

	constructor(
		private route: ActivatedRoute,
		private service: HomeService,
		private changeDetector: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.setLoadingMessage()
		this.route.paramMap
		.pipe(switchMap(params => {
			const id = String(params.get('id'));
			return this.service.getCharacterById(id);
		}))
		.subscribe(characterResponse => {
			this.character = characterResponse;
			this.changeDetector.detectChanges();
		}, err => {
			this.character = null;
			this.infoMessage = `Error featching record - ${err.message}`;
		});
	}

	setClassDeadOrAlive(dead: string): string {
		return dead.toLowerCase();
	}

	isCharacterDefined(): boolean {
		return !!this.character;
	}

	setLoadingMessage(): void {
		this.infoMessage = "Loading..."
	}
}
