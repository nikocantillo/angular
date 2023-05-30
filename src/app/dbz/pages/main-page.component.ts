import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.components.html'
})

export class MainPageComponent {
    public characters: Character[] = [{
        name: 'Krilling',
        power: 1000
    }, {
        name: 'Camisama',
        power: 15000
    }, {
        name: 'Vegeta',
        power: 25000
    }
    ];
    
    onNewCharacter(character: Character): void {
        this.characters.push(character);
    }

    onDeleteCharacter(index: number): void {
        this.characters.splice(index, 1);
    }
}