import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import notes from "../_files/notes.json";
import { saveAs } from "file-saver";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NotesService {
  public notesList: Note[] = notes;
  public sharedNotesList: Note[] = notes;

  constructor(private http: HttpClient) {}
  getNotes(): Observable<any> {
    return this.http.get("http://localhost:3000/notes");
  }
  
  saveNote(note: Note) {
    this.http
      .post("http://localhost:3000/notes", note)
      .subscribe((x) => console.log(x));
  }

  deleteNote(id: number) {
    var url = "http://localhost:3000/notes/".concat(id.toString());
    this.http.delete(url).subscribe((x) => console.log(x));
    console.log("delete api is called");
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
}
