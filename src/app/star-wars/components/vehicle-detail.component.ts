import { Component, OnInit } from '@angular/core';
import { ItemDetailComponent } from './item-detail.component';
import { SwapiService } from '../../services/swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../models/Vehicle';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: 'vehicle-detail.component.html',
  styleUrls: ['item-detail.component.css']
})
export class VehicleDetailComponent extends ItemDetailComponent
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
        const vehicle = result as Vehicle;
        this.films = vehicle.films.map(f => this.getReferencesFromUrl(f));
        this.pilots = vehicle.pilots.map(p => this.getReferencesFromUrl(p));
      });
  }
}
