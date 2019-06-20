import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: 'person-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class PersonDetailComponent extends ItemDetailComponent
  implements OnInit {
  vehicles: any[];
  species: any[];
  starships: any[];
  films: any[];
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
        const person = result as Person;
        this.vehicles = person.vehicles.map(v => this.getReferencesFromUrl(v));
        this.species = person.species.map(s => this.getReferencesFromUrl(s));
        this.films = person.films.map(f => this.getReferencesFromUrl(f));
        this.starships = person.starships.map(s =>
          this.getReferencesFromUrl(s)
        );
        this.homeworld = this.getReferencesFromUrl(person.homeworld);
      });
  }
}
