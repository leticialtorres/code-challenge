import { Component, OnInit } from "@angular/core";

import { CharactersResponseModel } from "./integration/response/characters-response.model";
import { HomeService } from "./../services/home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  caracters: Array<CharactersResponseModel>;

  constructor(private service: HomeService) {}

  ngOnInit() {
    this.getAllCaracters();
  }

  getAllCaracters(): void {
    this.service.getAllCaracters().subscribe(res => {
      this.caracters = res.slice(0, 4);
    });
  }

  getDetailCharacter(id: string): void {
    
  }

}
