import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  @Input()
  public characterList: Character[] = [{
    name: 'Gojan',
    power: 20000
  }, {
    name: "Mrs Poppo",
    power: 800
  }]
  
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  
  onDeleteCharacer(index: number): void {
    this.onDelete.emit(index)
    console.log(index)
  }
}
