import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'tda-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements AfterViewInit {

  @ViewChild('todotext')
  textArea: ElementRef | null = null;

  @Output()
  close: EventEmitter<string> = new EventEmitter();

  ngAfterViewInit(): void {
    this.textArea?.nativeElement.focus();
  }

  handleClose(text?: string) {
    this.close.emit(text);
  }

}
