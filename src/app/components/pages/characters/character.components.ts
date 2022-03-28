import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@shared/interfaces/character.interface';


@Component({
  selector: 'app-character',
  template: `
  <<!-- div class="card card-home">
    <div class="image">
      <a [routerLink]="['/character-details', character.id]">
        <img
          [src]="character.image"
          [alt]="character.name"
          class="ch-img-top"
        />
      </a>
    </div>
    <div class="card-inner">
      <div class="header">
        <a [routerLink]="['/character-details', character.id]" class="text-decoration-none txt-hover">
          <h2 class=" text-primary">{{ character.name | slice: 0 : 15 }}</h2>
        </a>
        <h4 class="text-muted">{{ character.gender }}</h4>
        <small class="text-muted">{{ character.species }}</small><br>
      </div>
    </div>
  </div> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CharaterComponent {
  @Input() character: Character | undefined
}
