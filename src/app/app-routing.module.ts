import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareComponent } from './share/share.component';
import { ImgComponent } from './img/img.component';
import { DragComponent } from './drag/drag.component';

// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'share13',component:ShareComponent
  },
  {
    path:'img',component:ImgComponent
  },

  {
    path:'drag',component:DragComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
