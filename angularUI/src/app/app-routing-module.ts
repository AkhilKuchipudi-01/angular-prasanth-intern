import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './componets/home/home';
import { Pricing } from './componets/pricing/pricing';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path: "home", component: Home },
  { path: "pricing", component: Pricing },
 
  { path: '**', component: Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
