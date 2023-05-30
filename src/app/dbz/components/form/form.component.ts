import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    id: uuid(),
    name: '',
    power: 0,
  }

  emitCharacter(): void {
    console.log("i m here",this.character)
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)
    this.character = {
      id: uuid(),
      name: '',
      power: 0
    };
    
    
  }
}
