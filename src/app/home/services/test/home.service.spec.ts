import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs';

import { HomeServiceStub as stub } from './home-service.stub';
import { HomeService } from '../home.service';
import { HomeRestService } from '../home-rest.service';
import { CharacterMapper } from '../../mapper/character.mapper';

describe('HomeService =>', () => {
	let service: HomeService;
	let restService: HomeRestService;
 beforeEach(() => {
	TestBed.configureTestingModule({
		providers: [
			HttpClientModule,
			{ provide: HomeRestService, useValue: {getAllCharacters: {}, getCharactersById: {} } }
		]
		});
	service = TestBed.get(HomeService);
	restService = TestBed.get(HomeRestService);
	});

	describe('Given that this service is call => ', () => {
		it('should be created', () => {
			expect(service).toBeDefined();
		});
	});

	describe('Given that the method [getCharacterById], is called => ', () => {
		it('THEN [CharacterMapper.mapToCharacterModel] to have been called' , () => {
			spyOn(restService, 'getCharactersById').and.callFake(() => of(stub.mockCharacterResponseModel()));
			spyOn(CharacterMapper, 'mapToCharacterModel').and.returnValue(stub.mockCharacterModel());
			service.getCharacterById('1').subscribe(sub => {
				expect(CharacterMapper.mapToCharacterModel).toHaveBeenCalled();
			});
		});
		it('THEN [restService.getCharactersById] to have been called' , () => {
			spyOn(restService, 'getCharactersById').and.callFake(() => of(stub.mockCharacterResponseModel()));
			spyOn(CharacterMapper, 'mapToCharacterModel').and.returnValue(stub.mockCharacterModel());
			service.getCharacterById('1').subscribe(sub => {
				expect(restService.getCharactersById).toHaveBeenCalled();
			});
		});
		it('THEN return a object of [CharacterModel]' , () => {
			spyOn(restService, 'getCharactersById').and.callFake(() => of(stub.mockCharacterResponseModel()));
			spyOn(CharacterMapper, 'mapToCharacterModel').and.returnValue(stub.mockCharacterModel());
			service.getCharacterById('1').subscribe(sub => {
				expect(sub).toEqual(stub.mockCharacterModel());
			});
		});
	});
});
