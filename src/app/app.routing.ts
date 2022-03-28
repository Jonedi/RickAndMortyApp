import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LocationDetailsComponent } from "./components/pages/locations/location-details/location-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'character-list', loadChildren: () => import('./components/pages/characters/character-list/character-list.module').then(m => m.CharacterListModule) },
  { path: 'character-details/:id', loadChildren: () => import('./components/pages/characters/character-details/character-details.module').then(m => m.CharacterDetailsModule) },
  { path: 'location-details/:id', component: LocationDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
