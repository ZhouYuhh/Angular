import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Species } from '../../models/Species';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-species-detail',
  templateUrl: 'species-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class SpeciesDetailComponent extends ItemDetailComponent
  implements OnInit {
  films: any[];
  people: any[];
  homeworld: any;
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
        const species = result as Species;
        this.films = species.films.map(f => this.getReferencesFromUrl(f));
        this.people = species.people.map(p => this.getReferencesFromUrl(p));
        this.homeworld = this.getReferencesFromUrl(species.homeworld);
      });
  }
}
