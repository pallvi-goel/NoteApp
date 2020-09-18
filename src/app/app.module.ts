import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularMaterialModule } from "./angular-material.module";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { HeaderComponent } from "./components/main/header/header.component";
import { NoteAreaComponent } from "./components/main/note-area/note-area.component";
import { WorkspaceComponent } from "./components/main/note-area/workspace/workspace.component";
import { NotesListComponent } from "./components/main/note-area/notes-list/notes-list.component";
import { LoginService } from "./services/login.service";
import { NotesService } from "./services/notes.service";
import { AuthGuardService } from "./guards/auth-guard.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    NoteAreaComponent,
    WorkspaceComponent,
    NotesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [NotesService, LoginService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
