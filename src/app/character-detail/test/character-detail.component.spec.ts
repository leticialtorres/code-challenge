import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { CharacterDetailComponent } from '../character-detail.component';
import { CharacterDetailStub as stub } from './character-detail.stub';
import { CharacterDetailRoutingModule } from '../character-detail-routing.module';
import { HomeService } from 'src/app/home/services/home.service';
import { CharacterMapper } from 'src/app/home/mapper/character.mapper';
import { ChangeDetectorRef } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { CharacterDetailModule } from '../character-detail.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

xdescribe('CharacterDetailComponent =>', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;
  let service: HomeService;

  beforeEach(async(() => {
	TestBed.configureTestingModule({
	  declarations: [
			CharacterDetailComponent
		],
	  imports: [
			CharacterDetailComponent,
			BrowserDynamicTestingModule,
			CharacterDetailRoutingModule,
			CharacterDetailModule,
			RouterTestingModule,
			HttpClientModule,
			ActivatedRoute,
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

//   beforeEach(() => {

//   });

  it('component to be defined', () => {
	expect(component).toBeDefined();
  });
  describe('OnInit should be get characterById', () => {
	beforeEach(() => {

		// spyOn(service, 'getCharacterById').and.callFake(() => of(stub.mockCharacterResponseModel()));
		spyOn(CharacterMapper, 'mapToCharacterModel').and.returnValue(stub.mockCharacterModel());

	});
	it('=> OnInit should be call method [getCharacterById] ', () => {
		expect(service.getCharacterById).toHaveBeenCalled();
	});
  });
  describe('Given that call the method [isDead] =>', () => {
	beforeEach(() => {

	});
	it('then the result is a string ALIVE', () => {
		expect(service.getCharacterById).toHaveBeenCalled();
	});
  });
  describe('Given that call the method [isDead] =>', () => {
	beforeEach(() => {

	});
	it('then the result is a string DECREASE', () => {
		expect(service.getCharacterById).toHaveBeenCalled();
	});
  });

  describe('Given that call the method [characterDefined] =>', () => {
	beforeEach(() => {

	});
	it('then [character] NOT DEFINED return FALSE', () => {
		expect(service.getCharacterById).toHaveBeenCalled();
	});
	it('then [character] DEFINED return TRUE', () => {
		expect(service.getCharacterById).toHaveBeenCalled();
	});
  });

});
