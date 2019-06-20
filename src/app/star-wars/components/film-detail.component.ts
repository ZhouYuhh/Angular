import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/Film';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-film-detail',
   templateUrl: 'film-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class FilmDetailComponent extends ItemDetailComponent implements OnInit {
  vehicles: any[];
  species: any[];
  planets: any[];
  characters: any[];
  starships: any[];

  constructor(
    swapiService: SwapiService,
    commentService: CommentService,
    activatedRoute: ActivatedRoute
  ) {
    super(swapiService, commentService, activatedRoute);
  }

  ngOnInit() {
    super.ngOnInit();

    this.category = this.activatedRoute.snapshot.params.category;
    this.id = this.activatedRoute.snapshot.params.id;
    this.swapiService
      .getItemDetail(this.category, this.id)
      .subscribe(result => {
        const film = result as Film;
        this.vehicles = film.vehicles.map(v => this.getReferencesFromUrl(v));
        this.species = film.species.map(s => this.getReferencesFromUrl(s));
        this.planets = film.planets.map(p => this.getReferencesFromUrl(p));
        this.characters = film.characters.map(c =>
          this.getReferencesFromUrl(c)
        );
        this.starships = film.starships.map(s => this.getReferencesFromUrl(s));
      });
  }
}
