import { Component, OnInit } from "@angular/core";
import { NotesService } from "src/app/services/notes.service";

@Component({
  selector: "app-note-area",
  templateUrl: "./note-area.component.html",
  styleUrls: ["./note-area.component.css"],
})
export class NoteAreaComponent implements OnInit {
  isNoteListComponent: boolean = false;
  sharedNotes: boolean = false;
  isWorkspaceComponent: boolean = false;
  constructor(private notesService: NotesService) {}

  ngOnInit() {}
  WorkspaceComponentTrue() {
    this.isWorkspaceComponent = true;
    this.isNoteListComponent = false;
    this.sharedNotes = false;
  }
  NoteListComponentTrue() {
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
