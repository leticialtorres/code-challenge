import { Builder } from 'builder-pattern';

import { CharacterResponseModel } from '../integration/response/characters-response.model';
import { CharacterModel } from '../models/character.model';

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
			.build();
	}

	static mapToArrayCharacterModel(response: Array<CharacterResponseModel>): Array<CharacterModel> {
		return response.map(item => {
				return Builder<CharacterModel>()
					.char_id(item.char_id)
					.name(item.name)
					.birthday(item.birthday)
					.img(item.img)
					.status(item.status)
					.nickname(item.nickname)
					.portrayed(item.portrayed)
					.occupation(item.occupation)
					.build();
			});
	}
}
