import { Component, EventEmitter, Output } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'tda-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {

  @Output()
  close: EventEmitter<string> = new EventEmitter();

  constructor(private supabaseService: SupabaseService) {
  }

  handleClose(text?: string) {
    this.close.emit(text);
  }
}
