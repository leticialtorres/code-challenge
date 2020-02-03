import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of, throwError } from 'rxjs';

import { HomeComponentStub as stub } from './home.component.stub';
import { HomeComponent } from '../home.component';
import { HomeService } from '../services/home.service';

describe('HomeComponent =>', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let service: HomeService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ HomeComponent ],
			imports:[
				HttpClientTestingModule,
				RouterTestingModule,
				BrowserDynamicTestingModule
			], providers: [
				{provide: HomeService, useClass: stub}
			]
		})
		.compileComponents()
		.then(() =>{
			fixture = TestBed.createComponent(HomeComponent);
			service = TestBed.get(HomeService);
			component = fixture.componentInstance;
		})
	}));
	describe('Given that this component to have been called => ', () => {
		beforeEach(() => {
			spyOn(component, 'setLoadingMessage');
			spyOn(component, 'getAllCaracters');
			spyOn(service, 'getAllCharacters').and.returnValue(of(stub.mockArrayCharacterModel()));
		});
		it('THEN this compoent have been defined', () => {
			component.ngOnInit();
			fixture.detectChanges();
			expect(component).toBeDefined();
		});
	});
	describe('Given that the method [setLoadingMessage] to have been called => ', () => {
		beforeEach(() => {
			component.setLoadingMessage();
		});
		it('THEN the text in variable [infoMessage] MUST BE Loading...' , () => {
			expect(component.infoMessage).toBe(stub.mockLoadingMessage());
		});
	});
	describe('Given that the method [setClassDeadOrAlive] to have been called with text DEAD => ', () => {
		it('THEN the return of this method is dead in lowerCase' , () => {
			expect(component.setClassDeadOrAlive(stub.mockDeadText())).toBe(stub.mockDeadText().toLowerCase());
		});
	});
	describe('Given that the method [isCharactersLoaded] to have been called => ', () => {
		describe('THEN loaded many characters => ', () => {
			beforeEach(() => {
				spyOn(service, 'getAllCharacters').and.returnValue(of(stub.mockArrayCharacterModel()));
				component.getAllCaracters();
			});
			it('THEN this method return TRUE' , () => {
				expect(component.isCharactersLoaded()).toBe(true);
			});
		});
		describe('THEN have error featch data => ', () => {
			beforeEach(() => {
				spyOn(service, 'getAllCharacters').and.returnValue(throwError(stub.mockErrorResponse()));
				component.getAllCaracters();
			});
			it('THEN this method return TRUE' , () => {
				expect(component.isCharactersLoaded()).toBe(false);
			});
			it('THEN the variable [infoMessage] dont have a text loading' , () => {
				expect(component.infoMessage).not.toBe(stub.mockLoadingMessage());
			});
		});
	});
});
