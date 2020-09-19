import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Note } from "src/app/models/note";
import { LoginService } from "src/app/services/login.service";
import { NotesService } from "src/app/services/notes.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"],
})
export class NotesListComponent implements OnInit {
  constructor(
    public notesService: NotesService,
    public loginService: LoginService
  ) {}
  
  @Input() sharedNotes: boolean;
  @ViewChild("tem") tem: ElementRef;
  private userName: string;
  notes: Note[];

  ngOnInit() {
    this.userName = this.loginService.username;
    this.sharedNotes ? this.getSharedNotes() : this.getNotes();

    /*if (this.sharedNotes) {
      this.getSharedNotes();
    } else {
      this.getNotes();
    }
    */
  }
  ngDoCheck(): void {
    console.log(this.sharedNotes);

    this.sharedNotes ? this.getSharedNotes() : this.getNotes();
   /* if (this.sharedNotes) {
      this.getSharedNotes();
    } else {
      this.getNotes();
    }
    */
  }
  deleteNote(id: number) {
    this.tem.nativeElement.innerHtml = "";
    this.notesService.deleteNote(id);
  }
  
  getNotes() {
    this.notesService
      .getNotes()
      .subscribe(
        (x) => (this.notes = x.filter((note) => note.userName == this.userName))
      );
  }

  getSharedNotes() {
    this.notesService
      .getSharedNotes()
      .subscribe(
        (x) => (this.notes = x.filter((note) => note.userName == this.userName))
      );
  }
}
