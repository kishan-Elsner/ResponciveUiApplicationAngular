import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContectComponent } from './pages/contect/contect.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent }  from './pages/menupage/menupage.component';;

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
