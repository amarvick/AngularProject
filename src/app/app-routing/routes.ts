import { Routes } from '@angular/router';

/* List all components below, where they are */

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

/* List their routes here with their corresponding components. '' is default. */

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'dishdetail/:id', component: DishdetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];