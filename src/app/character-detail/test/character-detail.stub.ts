import { Builder } from 'builder-pattern';

import { CharacterResponseModel } from './../../home/integration/response/characters-response.model';
import { CharacterModel } from 'src/app/home/models/character.model';


export class CharacterDetailStub {
	static mockCharacterResponseModel(): Array<CharacterResponseModel> {
		return [Builder<CharacterResponseModel>()
		.char_id(1)
		.img('')
		.name('Jonh')
		.nickname('Josua')
		.occupation(['Reader', 'Speaker'])
		.portrayed('Key')
		.status('Alive')
		.build()];
	}

	static mockCharacterModel(): CharacterModel {
		return Builder<CharacterModel>()
		.char_id(1)
		.img('')
		.name('Jonh')
		.nickname('Josua')
		.occupation(['Reader', 'Speaker'])
		.portrayed('Key')
		.status('Alive')
		.build();
	}

	getAllCharacters() {}	getCharacterById() {}}
