import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss'],
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = "";
  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    if (this.newOnomatopia?.trim() !== "") {this.sendOnomatopiaToParent.emit(this.newOnomatopia)};
  }
}
