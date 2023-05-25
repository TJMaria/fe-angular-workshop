import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tda-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {

  @Output()
  close: EventEmitter<string> = new EventEmitter();

  handleClose(text?: string): void{
    this.close.emit(text);
  }
}
