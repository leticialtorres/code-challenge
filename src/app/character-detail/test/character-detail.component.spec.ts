import { ChangeDetectorRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of, throwError } from 'rxjs';

import { CharacterDetailComponent } from '../character-detail.component';
import { CharacterDetailStub as stub } from './character-detail.stub';
import { CharacterDetailRoutingModule } from '../character-detail-routing.module';
import { HomeService } from 'src/app/home/services/home.service';

describe('CharacterDetailComponent =>', () => {
	let component: CharacterDetailComponent;
	let fixture: ComponentFixture<CharacterDetailComponent>;
	let service: HomeService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CharacterDetailComponent
			],
			imports: [
				CharacterDetailRoutingModule,
				RouterTestingModule,
				HttpClientModule,
				HttpClientTestingModule
			],
			providers: [
				{ provide: HomeService, useClass: stub },
				ChangeDetectorRef
			]
		})
		.compileComponents()
		.then(() => {
			fixture = TestBed.createComponent(CharacterDetailComponent);
			service = TestBed.get(HomeService);
			component = fixture.componentInstance;
			fixture.detectChanges();
		});
	}));
	describe('Given that this component to have been called => ', () => {
		describe('THEN loaded one character => ', () => {
			beforeEach(() => {
				spyOn(component, 'setLoadingMessage');
				spyOn(service, 'getCharacterById').and.returnValue(of(stub.mockCharacterModel()));
				component.ngOnInit();
				fixture.detectChanges();
			});
			it('THEN this component have been defined', () => {
				expect(component).toBeDefined();
			});
			it('THEN the varible [character] to have been defined', () => {
				expect(component.character).toBeDefined();
			});
			it('THEN the method [isCharacterDefined] return TRUE' , () => {
				expect(component.isCharacterDefined()).toBe(true);
			});
		});
		describe('THEN have error featch data => ', () => {
			beforeEach(() => {
				spyOn(component, 'setLoadingMessage');
				spyOn(service, 'getCharacterById').and.returnValue(throwError(stub.mockErrorResponse()));
				component.ngOnInit();
			});
			it('THEN  the method [isCharacterDefined] return TRUE' , () => {
				expect(component.isCharacterDefined()).toBe(false);
			});
			it('THEN the variable [infoMessage] dont have a text loading' , () => {
				expect(component.infoMessage).not.toBe(stub.mockLoadingMessage());
			});
		});
	});
	describe('Given that call the method [setClassDeadOrAlive] with DEAD value =>', () => {
		beforeEach(() => {
			component.setClassDeadOrAlive(stub.mockAliveText());
		});
		it('then the result is a string ALIVE in LowerCase', () => {
			expect(component.setClassDeadOrAlive(stub.mockAliveText())).toBe(stub.mockAliveText().toLowerCase());
		});
	});
});
