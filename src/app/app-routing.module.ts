import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { NotesListComponent } from "./components/main/note-area/notes-list/notes-list.component";
import { WorkspaceComponent } from "./components/main/note-area/workspace/workspace.component";
import { AuthGuardService } from "./guards/auth-guard.service";

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", redirectTo: "/login", pathMatch: "full" },
      {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "main",
        component: MainComponent,
        canActivate: [AuthGuardService],
      },
      { path: "notes", component: NotesListComponent },
      { path: "space", component: WorkspaceComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
