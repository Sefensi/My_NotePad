import { Component } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent {
  textCatch!:string

  onInput(e: any) {
    this.textCatch = e.innerHTML
  }
  onClick(){
    console.log(this.textCatch)
  }
}
