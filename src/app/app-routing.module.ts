import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share/share.component';
import { ImgComponent } from './img/img.component';
import { SssComponent } from './sss/sss.component';
import { DragComponent } from './drag/drag.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';

// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'share13',component:ShareComponent
  },
  {
    path:'img',component:ImgComponent
  },
  {
    path:'ss',component:SssComponent
  },
  {
    path:'drag',component:DragComponent
  },
  {
    path:'cke',component:CkeditorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
