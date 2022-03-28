import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharaterComponent } from './character.components';

const myComponents = [
  CharacterDetailsComponent,
  CharacterListComponent,
  CharaterComponent
]

@NgModule({
  declarations: [ ...myComponents ],
  imports: [ CommonModule, RouterModule, InfiniteScrollModule ],
  exports: [ ...myComponents ]
})
export class CharactersModule { }
