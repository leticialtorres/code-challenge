import { Builder } from 'builder-pattern';

import { CharacterModel } from './../../models/character.model';
import { CharacterResponseModel } from './../../integration/response/characters-response.model';


export class HomeServiceStub {
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
			.id(1)
			.img('')
			.name('Jonh')
			.nickname('Josua')
			.occupation(['Reader', 'Speaker'])
			.portrayed('Key')
			.status('Alive')
			.build();
	}

	getAllCharacters() {}
	getCharacterById() {}

}
