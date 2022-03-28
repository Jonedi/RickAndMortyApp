import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Loc } from '@app/shared/interfaces/location.interface';
import { CharacterService } from '@app/shared/services/character.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  location$: Observable<Loc> | undefined

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
      this.location$ = this.characterSvc.getLocation(id);
      console.log(this.location$)
    })
  }

  goBack():void {
    this.location.back()
  }

}
