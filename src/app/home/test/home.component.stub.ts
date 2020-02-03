import { CharacterModel } from './../models/character.model';
import { CharacterResponseModel } from './../integration/response/characters-response.model';
import { Builder } from 'builder-pattern';



export class HomeComponentStub {

	static mockErrorResponse(): string {
		return Builder<any>().message("MOCK-ERRO").build();
	}
	static mockDeadText(): string {
		return "DEAD";
	}

	static mockLoadingMessage(): string {
		return "Loading..."
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
			.build()];
	}

	getAllCharacters() {}
	getCharacterById() {}

}
