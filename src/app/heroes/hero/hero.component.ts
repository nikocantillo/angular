import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Iron man';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase()
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 35;
  }

  public reset():void {
    this.name = 'Iron man';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'
    // })
  }
}
