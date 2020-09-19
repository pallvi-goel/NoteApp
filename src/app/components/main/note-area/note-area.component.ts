import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-note-area",
  templateUrl: "./note-area.component.html",
  styleUrls: ["./note-area.component.css"],
})
export class NoteAreaComponent implements OnInit {
  isNoteListComponent: boolean = false;
  sharedNotes: boolean = false;
  isWorkspaceComponent: boolean = false;
  constructor() {}

  ngOnInit() {}
  //method name should be aligned with ui button naming conventions
  onAddNotesClick() {
    this.isWorkspaceComponent = true;
    this.isNoteListComponent = false;
    this.sharedNotes = false;
  }
  onAllNotesClick() {
    this.isWorkspaceComponent = false;
    this.isNoteListComponent = true;
    this.sharedNotes = false;
  }
  SharedNotesComponentTrue() {
    this.isWorkspaceComponent = false;
    this.isNoteListComponent = true;
    this.sharedNotes = true;
  }
  
}
