import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { MatCardModule } from '@angular/material/card';
import { SanitizeUrlPipe } from './sanitize-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PopupModalComponent,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
