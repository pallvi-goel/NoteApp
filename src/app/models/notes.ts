import { Note } from "./note";

export class Notes {
  constructor(public listNotes: Note[]) {}

  getNotes() {
    return this.listNotes;
  }
}
