import { Builder } from 'builder-pattern';

import { CharacterModel } from './../models/character.model';



export class HomeComponentStub {

	static mockErrorResponse(): string {
		return 'MOCK-ERRO';
	}
	static mockDeadText(): string {
		return 'DEAD';
	}

	static mockLoadingMessage(): string {
		return 'Loading...';
	}

	static mockArrayCharacterModel(): Array<CharacterModel> {
		return [Builder<CharacterModel>()
			.char_id(1)
			.img('')
			.name('Jonh')
			.nickname('Josua')
			.occupation(['Reader', 'Speaker'])
			.portrayed('Key')
			.status('Alive')
			.build(),
			Builder<CharacterModel>()
			.char_id(1)
			.img('')
			.name('Jonathan')
			.nickname('Josh')
			.occupation(['Reading', 'Speaker'])
			.portrayed('Key')
			.status('Dead')
			.build()];
	}

	getAllCharacters() {}
	getCharacterById() {}

}
