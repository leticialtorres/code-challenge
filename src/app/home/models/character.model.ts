export class CharacterModel {
	constructor(
		public id?: number,
		public name?: string,
		public birthday?: string,
		public img?: string,
		public status?: string,
		public nickname?: string,
		public portrayed?: string,
		public occupation?: Array<string>
	) { }
}
