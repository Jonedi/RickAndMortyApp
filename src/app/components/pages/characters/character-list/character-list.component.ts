import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'
import { CharacterService } from '@shared/services/character.service'
import { Character } from '@shared/interfaces/character.interface'

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[]= [];
  info: RequestInfo = {
    next: null as any,
  };
  showGoUpButton = false;
  private pageNum = 4;
  private query: string;
  private hideScrollingHeight = 200;
  private showScrollingHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document:Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.query = '';
    this.onUrlChange()
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollingHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.showScrollingHeight){
      this.showGoUpButton = false;
    }
  }

  scrollDown(): void {
    if (this.info.next) {
      this.pageNum++;
      this.getDataFormService();
    }
  }
  scrollTop(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other navigators
  }

  private onUrlChange():void {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe(() => {
      this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQuery();
    })
  }

  private getCharactersByQuery(): void {
    // Filtra los personajes
    this.route.queryParams
    .pipe(take(1))
    .subscribe(params => {
      // console.log('Params->', params)
      this.query = params['q'];
      this.getDataFormService();
    })

  }

  private getDataFormService(): void{
    // Renderiza los personajes
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res:any) => {
      if (res?.results?.length) {
        const { info, results} = res;
        this.characters = [ ...this.characters, ...results];
        this.info = info;
      } else {
        this.characters  = [];
      }
    })
  }
}
