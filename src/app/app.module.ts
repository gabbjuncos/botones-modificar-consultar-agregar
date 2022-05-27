import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { InicioComponent } from "./components/inicio/inicio.component";
import { MenuComponent } from "./components/menu/menu.component";
import {NgbModule, NgbPaginationModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap'
import { ModalDialogComponent } from "./components/modal-dialog/modal-dialog.component";
import { CommonModule } from '@angular/common';
import { LibroComponent } from "./components/libro/libro.component";


@NgModule({
  imports: [CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule, 
    NgbPaginationModule,
    NgbModalModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/inicio", pathMatch: "full" },
      { path: "inicio", component: InicioComponent },
      
      { path: "libro", component: LibroComponent },
    ])
  ],
  declarations: [
    AppComponent,InicioComponent,
    MenuComponent,
    LibroComponent,
  ],entryComponents:[ModalDialogComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/"}
  ]
})
export class AppModule {}