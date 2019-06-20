import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '../../models/Starship';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: 'starship-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class StarshipDetailComponent extends ItemDetailComponent
  implements OnInit {
  pilots: any[];
  films: any[];

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
        const starship = result as Starship;
        this.films = starship.films.map(f => this.getReferencesFromUrl(f));
        this.pilots = starship.pilots.map(p => this.getReferencesFromUrl(p));
      });
  }
}
