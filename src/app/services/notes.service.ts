import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { User } from "../models/user";
import notes from "../_files/notes.json";
import { saveAs } from "file-saver";
import {
  HttpClient,
  HttpClientModule,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class NotesService {
  public notesList: Note[] = notes;
  public sharedNotesList: Note[] = notes;

  constructor(private http: HttpClient) {}
  saveNote(note: Note) {
    this.http
      .post("http://localhost:3000/notes", note)
      .subscribe((x) => console.log(x));
    console.log("api is called");
  }

  deleteNote(id: number) {
    var url = "http://localhost:3000/notes/";
    url = url.concat(id.toString());
    console.log(url);
    this.http.delete(url).subscribe((x) => console.log(x));
    console.log("delete api is called");
  }

  getNotes(): Observable<any> {
    return this.http.get("http://localhost:3000/notes");
  }
  getSharedNotes(): Observable<any> {
    return this.http.get("http://localhost:3000/sharedNotes");
  }

  shareNote(note: Note) {
    this.http
      .post("http://localhost:3000/sharedNotes", note)
      .subscribe((x) => console.log(x));
    console.log(" shared api is called");
  }

  ngOnDestroy(): void {
    saveAs();
  }
}
