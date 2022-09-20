import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonsComponent } from './boissons/boissons.component';
import { BurgerComponent } from './burger/burger.component';
import { CommandeComponent } from './commande/commande.component';
import { DessertComponent } from './dessert/dessert.component';
import { MenuComponent } from './menu/menu.component';
import { SaladeComponent } from './salade/salade.component';
import { SnackComponent } from './snack/snack.component';

const routes: Routes = [
  {path:'menu',component:MenuComponent},
  {path:'burger',component:BurgerComponent},
  {path:'snack',component:SnackComponent},
  {path:'salade',component:SaladeComponent},
  {path:'dessert',component:DessertComponent},
  {path:'boissons',component:BoissonsComponent},
  {path:'commande',component:CommandeComponent},
  {path:'',redirectTo: '/menu',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
