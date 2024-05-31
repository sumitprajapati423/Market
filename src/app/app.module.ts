import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShareComponent } from './share/share.component';
import { ImgComponent } from './img/img.component';
import {HttpClientModule} from '@angular/common/http';
import { DragComponent } from './drag/drag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BitdraggableModule } from '@bitbeast/bitdraggable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShareComponent,
    ImgComponent,
    DragComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtonsModule.withConfig({
      debug:true
    }),
    ShareIconsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BitdraggableModule,
    CommonModule,
    FormsModule,
    CKEditorModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
