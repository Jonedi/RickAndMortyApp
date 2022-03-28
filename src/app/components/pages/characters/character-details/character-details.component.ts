import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '@shared/interfaces/character.interface';
import { CharacterService } from '@shared/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterSvc: CharacterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(take(1))
    .subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
      console.log(this.character$)
    })
  }

  goBack():void {
    this.location.back()
  }

  getLoc(item: any) {
    let regex = /(\d+)/g;
    let id = item.match(regex).toString()
    return id
  }
}
