import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../services/swapi.service';
import { Film } from '../../models/Film';
import { NonFilmDetail } from '../../models/ItemDetail';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-item-detail',
  template: `
    <div>
      <span class="maintitle"
        >StarWars
        <a
          mat-icon-button
          style="color:yellow;float:right;width:100px;max-height:100%"
          href="{{ category }}"
        >
          <mat-icon id="testback" title="Return to previous page">chevron_left</mat-icon></a
        ></span
      >
    </div>
    <mat-toolbar>
      <span id="titlefortest">{{ showName() }}</span>
      <span>
        <a mat-icon-button href="{{ category }}/{{ id }}/comments"
          ><mat-icon title="comment detail">comments</mat-icon></a
        >{{ commentCount }}</span>
    </mat-toolbar>

    <div class="container" fxLayout="column wrap" fxLayoutGap="10px">
      <mat-card>
        <img [src]="showImageUrl()" style="max-width:100%;max-height:100%;" />
        <p>
          <app-person-detail
            fxLayout="column wrap"
            fxLayoutGap="10px"
            *ngIf="category === 'characters'"
          ></app-person-detail>
        </p>
        <app-film-detail
          fxLayout="column wrap"
          fxLayoutGap="10px"
          *ngIf="category === 'films'"
        ></app-film-detail>
        <app-starship-detail
          fxLayout="column wrap"
          fxLayoutGap="10px"
          *ngIf="category === 'starships'"
        ></app-starship-detail>
        <app-vehicle-detail
          fxLayout="column wrap"
          fxLayoutGap="10px"
          *ngIf="category === 'vehicles'"
        ></app-vehicle-detail>
        <app-planet-detail
          fxLayout="column wrap"
          fxLayoutGap="10px"
          *ngIf="category === 'planets'"
        ></app-planet-detail>
        <app-species-detail
          fxLayout="column wrap"
          fxLayoutGap="10px"
          *ngIf="category === 'species'"
        ></app-species-detail>
      </mat-card>
    </div>
    <div class="social-share" Title="share or favor" data-disabled="weibo,qq,qzone,tencent,douban,diandian,linkedin,wechat"
    data-mode="prepend">
    <a href="#"  rel="sidebar"
    onclick="return addFavorite('window.location.href','document.title');"class="social-share-icon icon-heart">
    </a></div>
  `
})
export class ItemDetailComponent implements OnInit {
  category: string;
  item: any;
  id: string;
  commentCount: number;

  constructor(
    protected swapiService: SwapiService,
    protected commentService: CommentService,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.params.category;
    this.id = this.activatedRoute.snapshot.params.id;
    this.swapiService
      .getItemDetail(this.category, this.id)
      .subscribe(result => {
        this.item = result;
      });
    this.commentService
      .countComments(this.category, this.id)
      .then(result => (this.commentCount = result));
  }

  showImageUrl() {
    return `https://starwars-visualguide.com/assets/img/${
      this.category === "people" ? "characters" : this.category
    }/${this.id}.jpg`;
  }

  showName() {
    if (!this.item) {
      return "";
    }

    if (this.category === "films") {
      return this.item.title;
    }

    return this.item.name;
  }

  getReferencesFromUrl(url: string): any {
    const urlCategory = /(\w+)\/(\d+)\//g.exec(url)[1];
    const urlId = /(\w+)\/(\d+)\//g.exec(url)[2];
    const reference = { name: "", url: "", imageUrl: "" };

    this.swapiService.getItemDetail(urlCategory, urlId).subscribe(result => {
      if (urlCategory === "films") {
        const film = result as Film;
        reference.name = film.title;
      } else {
        const nonFilm = result as NonFilmDetail;
        reference.name = nonFilm.name;
      }
    });

    reference.url = `${
      urlCategory === "people" ? "characters" : urlCategory
    }/${urlId}`;
    reference.imageUrl = `https://starwars-visualguide.com/assets/img/${
      urlCategory === "people" ? "characters" : urlCategory
    }/${urlId}.jpg`;

    return reference;
  }
}


// class="imger" mat-card-image
