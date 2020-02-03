import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CharacterModel } from '../home/models/character.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HomeService } from '../home/services/home.service';
import { CharacterMapper } from '../home/mapper/character.mapper';

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
