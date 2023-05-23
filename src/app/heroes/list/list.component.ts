import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public HeroesNames: string[] = ['Spiderman', 'Hulk', 'Acuaman', 'Goku'];
  public deleteHero?: string;

  removeLastHero():void {
    this.deleteHero = this.HeroesNames.pop();
  }
}
