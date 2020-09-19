import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Note } from "src/app/models/note";
import { LoginService } from "src/app/services/login.service";
import { NotesService } from "src/app/services/notes.service";

@Component({
  selector: "app-workspace",
  templateUrl: "./workspace.component.html",
  styleUrls: ["./workspace.component.scss"],
})
export class WorkspaceComponent implements OnInit {
  constructor(
    public notesService: NotesService,
    public loginService: LoginService
  ) {}
  @ViewChild("title") title: ElementRef;
  @ViewChild("text") text: ElementRef;
  @ViewChild("deleteButton") deleteButton: ElementRef;
  @ViewChild("su") shareu: ElementRef;

  @Input("sharedNotes") sharedNotes: boolean;
  private note: Note;
  private ownerId: number;
  ngOnInit() {
  
    if (!this.shareNote) {
      this.deleteButton.nativeElement.disabled = true;
    }
  }
  saveNote() {
    this.ownerId = this.loginService.userId;
    this.note = new Note(
      this.title.nativeElement.value,
      this.text.nativeElement.value,
      this.ownerId
    );
    this.notesService.saveNote(this.note);
  }
  deleteNote() {
    // this.title.nativeElement.value = "";
    // this.text.nativeElement.value = "";
    //this.notesService.deleteNote(this.note);
  }
  shareNote() {
    this.note = new Note(
      this.title.nativeElement.value,
      this.text.nativeElement.value,
      this.shareu.nativeElement.value
    );

    this.notesService.shareNote(this.note);
  }
}
