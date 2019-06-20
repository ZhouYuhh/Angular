import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CategoryComponent } from './components/category.component';
import { FilmDetailComponent } from './components/film-detail.component';
import { ItemDetailComponent } from './components/item-detail.component';
import { ItemListComponent } from './components/item-list.component';
import { PersonDetailComponent } from './components/person-detail.component';
import { PlanetDetailComponent } from './components/planet-detail.component';
import { SpeciesDetailComponent } from './components/species-detail.component';
import { StarWarsHomeComponent } from './components/star-wars-home.component';
import { StarshipDetailComponent } from './components/starship-detail.component';
import { VehicleDetailComponent } from './components/vehicle-detail.component';
import { StarWarsRouterModule } from './star-wars-router.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommentComponent } from './components/comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StarWarsRouterModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [
    CategoryComponent,
    ItemDetailComponent,
    ItemListComponent,
    StarWarsHomeComponent,
    PersonDetailComponent,
    PlanetDetailComponent,
    FilmDetailComponent,
    VehicleDetailComponent,
    StarshipDetailComponent,
    SpeciesDetailComponent,
    CommentComponent
  ],
  exports: [StarWarsHomeComponent]
})
export class StarWarsModule {}
