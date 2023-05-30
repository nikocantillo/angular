import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [{
    id: uuid(),
    name: 'Gojan',
    power: 20000
    }, {
    id: uuid(),
    name: "Mrs Poppo",
    power: 800
  }]
  
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  
  onDeleteCharacer(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id)
    console.log(id)
  }
}
