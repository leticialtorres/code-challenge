import { CharacterResponseModel } from '../integration/response/characters-response.model';
import { CharacterModel } from '../models/character.model';
import { Builder } from 'builder-pattern';

export class CharacterMapper {

	static mapToCharacterModel(response: CharacterResponseModel): CharacterModel {
		return Builder<CharacterModel>()
			.char_id(response.char_id)
			.name(response.name)
			.birthday(response.birthday)
			.img(response.img)
			.status(response.status)
			.nickname(response.nickname)
			.portrayed(response.portrayed)
			.occupation(response.occupation)
			.build()
	}


}
