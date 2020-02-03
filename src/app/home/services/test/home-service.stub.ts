import { CharacterModel } from './../../models/character.model';
import { CharacterResponseModel } from './../../integration/response/characters-response.model';
import { Builder } from 'builder-pattern';


export class HomeServiceStub {

	getAllCharacters(){};
	getCharacterById(){};

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


}
