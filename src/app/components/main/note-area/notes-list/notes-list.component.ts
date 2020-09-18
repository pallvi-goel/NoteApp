import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { async } from "@angular/core/testing";
import { element } from "protractor";
import { Note } from "src/app/models/note";
import { LoginService } from "src/app/services/login.service";
import { NotesService } from "src/app/services/notes.service";

@Component({
  selector: "app-notes-list",
  templateUrl: "./notes-list.component.html",
  styleUrls: ["./notes-list.component.scss"],
})
export class NotesListComponent implements OnInit {
  @Input() sharedNotes: boolean;
  @ViewChild("tem") tem: ElementRef;
  private userName: string;
  notes: Note[];
  constructor(
    public notesService: NotesService,
    public loginService: LoginService
  ) {}

  ngOnInit() {
    this.userName = this.loginService.username;
    if (this.sharedNotes) {
      this.getSharedNotes();
    } else {
      this.getNotes();
    }
  }
  ngDoCheck(): void {
    console.log(this.sharedNotes);

    if (this.sharedNotes) {
      this.getSharedNotes();
    } else {
      this.getNotes();
    }
  }
  deleteNote(id: number) {
    //  document.getel;
    // this.tem.nativeElement.remove();
    this.tem.nativeElement.style.display = "hidden";
    // this.text.nativeElement.value = "";
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
