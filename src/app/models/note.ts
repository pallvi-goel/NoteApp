export class Note {
  constructor(
    public title: string,
    public text: string,
    public ownerId?: number,
    private id?: number,

    private sharedWith ?: number[]
  ) {}
}
