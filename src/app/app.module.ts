

import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShareComponent } from './share/share.component';
import { ImgComponent } from './img/img.component';
import { SssComponent } from './sss/sss.component';
import {HttpClientModule} from '@angular/common/http';
import { DragComponent } from './drag/drag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BitdraggableModule } from '@bitbeast/bitdraggable';
import { CommonModule } from '@angular/common';


// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShareComponent,
    ImgComponent,
    SssComponent,
    DragComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtonsModule.withConfig({
      debug:true
    }),
    ShareIconsModule,
    // FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BitdraggableModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
