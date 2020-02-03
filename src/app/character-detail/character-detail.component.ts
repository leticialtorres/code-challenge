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

	constructor(
		private route: ActivatedRoute,
		private service: HomeService,
		private changeDetector: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.route.paramMap
		.pipe(switchMap(params => {
			const id = String(params.get('id'));
			return this.service.getCharacterById(id);
		}))
		.subscribe(characterResponse => {
			this.character = characterResponse;
			this.changeDetector.detectChanges();
		});
	}

	isDead(dead: string): string {
		return dead;
	}

	characterDefined(): boolean {
		return !!this.character;
	}

}
