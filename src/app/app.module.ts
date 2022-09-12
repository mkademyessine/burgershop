import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BurgerComponent } from './burger/burger.component';
import { SnackComponent } from './snack/snack.component';
import { SaladeComponent } from './salade/salade.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { DessertComponent } from './dessert/dessert.component';
import { CommandeComponent } from './commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BurgerComponent,
    SnackComponent,
    SaladeComponent,
    BoissonsComponent,
    DessertComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
