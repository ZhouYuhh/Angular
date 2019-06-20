import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '../../models/Planet';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: 'planet-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class PlanetDetailComponent extends ItemDetailComponent
  implements OnInit {
  films: any[];
  residents: any[];

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
        const planet = result as Planet;
        this.films = planet.films.map(f => this.getReferencesFromUrl(f));
        this.residents = planet.residents.map(c =>
          this.getReferencesFromUrl(c)
        );
      });
  }
}
